import type { Chapter, Concept, Question, QuestionKind } from "./types";
import { pick, randInRange, sample, shuffle, uid, weightedSample } from "./rng";
import { escapeRegExp, fmt, fuzzyEqual } from "./text";
import type { Stat } from "./storage";

// Eine "Vorlage" erzeugt bei jedem Aufruf eine NEUE Variante (andere Falschantworten,
// andere Reihenfolge, andere Zahlen, mal richtig / mal falsch ...).
export type Template = {
  statKey: string;
  sourceId: string;
  chapterId: string;
  kind: QuestionKind;
  make: () => Question | null;
};

const POINTS: Record<QuestionKind, number> = { mc: 1, tf: 1, cloze: 1, match: 2, open: 2, order: 2, number: 2 };

function distractors(c: Concept, all: Concept[], field: "term" | "definition", n: number): string[] {
  const others = all.filter((o) => o.id !== c.id && o[field] !== c[field]);
  const sameGroup = c.group ? others.filter((o) => o.group === c.group) : [];
  const rest = others.filter((o) => !sameGroup.includes(o));
  const chosen = [...shuffle(sameGroup), ...shuffle(rest)].slice(0, n);
  return chosen.map((o) => o[field]);
}

function maskTerm(def: string, term: string): string {
  return def.replace(new RegExp(escapeRegExp(term), "gi"), "…");
}

const MC_TERM_PROMPTS = [
  (t: string) => `Was versteht man unter **${t}**?`,
  (t: string) => `Welche Aussage beschreibt **${t}** richtig?`,
  (t: string) => `Wähle die richtige Erklärung für **${t}**.`,
];
const MC_DEF_PROMPTS = [
  (d: string) => `Welcher Begriff wird hier beschrieben?\n\n> ${d}`,
  (d: string) => `Wie heißt der Fachbegriff?\n\n> ${d}`,
];
const OPEN_PROMPTS = [
  (t: string) => `Erkläre den Begriff **${t}** in eigenen Worten.`,
  (t: string) => `Was bedeutet **${t}**? Nenne auch ein Beispiel, wenn möglich.`,
  (t: string) => `Definiere **${t}**.`,
];

export function buildTemplates(chapters: Chapter[]): Template[] {
  const T: Template[] = [];
  const allConcepts = chapters.flatMap((ch) => ch.concepts.map((c) => ({ ...c, _ch: ch.id })));
  const base = (statKey: string, sourceId: string, chapterId: string, kind: QuestionKind) => ({
    qid: uid(),
    statKey,
    sourceId,
    chapterId,
    points: POINTS[kind],
  });

  for (const ch of chapters) {
    // Pool für Falschantworten: eigenes Kapitel bevorzugt, aber notfalls alle
    const pool = ch.concepts.length >= 4 ? ch.concepts : allConcepts;

    for (const c of ch.concepts) {
      if (pool.length >= 4 || allConcepts.length >= 4) {
        const p = pool.length >= 4 ? pool : allConcepts;
        T.push({
          statKey: `mc-def:${c.id}`, sourceId: c.id, chapterId: ch.id, kind: "mc",
          make: () => {
            const opts = shuffle([c.definition, ...distractors(c, p, "definition", 3)]);
            return { ...base(`mc-def:${c.id}`, c.id, ch.id, "mc"), kind: "mc", prompt: pick(MC_TERM_PROMPTS)(c.term),
              options: opts, correct: [opts.indexOf(c.definition)], explanation: c.example ? `Beispiel: ${c.example}` : undefined };
          },
        });
        T.push({
          statKey: `mc-term:${c.id}`, sourceId: c.id, chapterId: ch.id, kind: "mc",
          make: () => {
            const opts = shuffle([c.term, ...distractors(c, p, "term", 3)]);
            return { ...base(`mc-term:${c.id}`, c.id, ch.id, "mc"), kind: "mc",
              prompt: pick(MC_DEF_PROMPTS)(maskTerm(c.definition, c.term)), options: opts, correct: [opts.indexOf(c.term)],
              explanation: `**${c.term}**: ${c.definition}` };
          },
        });
        T.push({
          statKey: `tf-pair:${c.id}`, sourceId: c.id, chapterId: ch.id, kind: "tf",
          make: () => {
            const truth = Math.random() < 0.5;
            const wrong = distractors(c, p, "definition", 1)[0];
            const def = truth || !wrong ? c.definition : wrong;
            return { ...base(`tf-pair:${c.id}`, c.id, ch.id, "tf"), kind: "tf",
              prompt: `Stimmt das?\n\n**${c.term}** – ${def}`, answer: truth || !wrong,
              explanation: `**${c.term}**: ${c.definition}` };
          },
        });
      }
      // Lückentext: Schlüsselwort aus der Definition ausblenden
      const gapWords = (c.keywords ?? []).filter((k) => new RegExp(escapeRegExp(k), "i").test(c.definition));
      if (gapWords.length) {
        T.push({
          statKey: `cloze:${c.id}`, sourceId: c.id, chapterId: ch.id, kind: "cloze",
          make: () => {
            const k = pick(gapWords);
            const text = c.definition.replace(new RegExp(escapeRegExp(k), "i"), "_____");
            return { ...base(`cloze:${c.id}`, c.id, ch.id, "cloze"), kind: "cloze",
              prompt: `Ergänze die Lücke:\n\n**${c.term}**: ${text}`, answers: [k], explanation: `**${c.term}**: ${c.definition}` };
          },
        });
      }
      T.push({
        statKey: `open:${c.id}`, sourceId: c.id, chapterId: ch.id, kind: "open",
        make: () => ({ ...base(`open:${c.id}`, c.id, ch.id, "open"), kind: "open", prompt: pick(OPEN_PROMPTS)(c.term),
          modelAnswer: c.definition + (c.example ? `\n\n*Beispiel:* ${c.example}` : ""), keywords: c.keywords ?? [] }),
      });
    }

    // Zuordnen: jedes Mal 4 zufällige Begriffe aus dem Kapitel
    if (ch.concepts.length >= 4) {
      T.push({
        statKey: `match:${ch.id}`, sourceId: `match:${ch.id}`, chapterId: ch.id, kind: "match",
        make: () => {
          const cs = sample(ch.concepts, Math.min(5, ch.concepts.length));
          const right = shuffle(cs.map((c) => maskTerm(c.definition, c.term)));
          return { ...base(`match:${ch.id}`, `match:${ch.id}`, ch.id, "match"), kind: "match",
            prompt: `Ordne die Begriffe den richtigen Erklärungen zu.`, left: cs.map((c) => c.term), right,
            solution: cs.map((c) => right.indexOf(maskTerm(c.definition, c.term))) };
        },
      });
    }

    for (const f of ch.facts) {
      T.push({
        statKey: `tf:${f.id}`, sourceId: f.id, chapterId: ch.id, kind: "tf",
        make: () => ({ ...base(`tf:${f.id}`, f.id, ch.id, "tf"), kind: "tf", prompt: `Richtig oder falsch?\n\n${f.statement}`,
          answer: f.isTrue, explanation: f.correction }),
      });
    }

    for (const q of ch.questions) {
      if (q.type === "mc") {
        T.push({
          statKey: `cq:${q.id}`, sourceId: q.id, chapterId: ch.id, kind: "mc",
          make: () => {
            const order = shuffle(q.options.map((_, i) => i));
            return { ...base(`cq:${q.id}`, q.id, ch.id, "mc"), kind: "mc", points: q.correct.length > 1 ? 2 : 1,
              prompt: q.question + (q.correct.length > 1 ? "\n\n*(Mehrere Antworten richtig)*" : ""),
              options: order.map((i) => q.options[i]), correct: q.correct.map((c) => order.indexOf(c)), explanation: q.explanation };
          },
        });
      } else if (q.type === "open") {
        T.push({
          statKey: `cq:${q.id}`, sourceId: q.id, chapterId: ch.id, kind: "open",
          make: () => ({ ...base(`cq:${q.id}`, q.id, ch.id, "open"), kind: "open", prompt: q.question, modelAnswer: q.answer, keywords: q.keywords }),
        });
      } else if (q.type === "order") {
        T.push({
          statKey: `cq:${q.id}`, sourceId: q.id, chapterId: ch.id, kind: "order",
          make: () => {
            let sh = shuffle(q.items);
            for (let i = 0; i < 5 && sh.join() === q.items.join(); i++) sh = shuffle(q.items);
            return { ...base(`cq:${q.id}`, q.id, ch.id, "order"), kind: "order", prompt: q.question, items: q.items, shuffled: sh, explanation: q.explanation };
          },
        });
      }
    }

    for (const c of ch.calcs ?? []) {
      T.push({
        statKey: `calc:${c.id}`, sourceId: c.id, chapterId: ch.id, kind: "number",
        make: () => {
          let v: Record<string, number> = {};
          for (let i = 0; i < 50; i++) {
            v = Object.fromEntries(Object.entries(c.vars).map(([k, [a, b, s]]) => [k, randInRange(a, b, s)]));
            if (!c.valid || c.valid(v)) break;
          }
          return { ...base(`calc:${c.id}`, c.id, ch.id, "number"), kind: "number", prompt: `**${c.title}**\n\n${c.text(v)}`,
            answer: c.solve(v), tolerance: c.tolerance ?? 0.01, unit: c.unit, explanation: c.explanation(v) };
        },
      });
    }
  }
  return T;
}

// ===== Auswahl: schwache, neue und lange nicht gesehene Fragen bevorzugen =====

export type SelectMode = "mixed" | "weak" | "new";

export function weightFor(t: Template, stats: Record<string, Stat>, now = Date.now()): number {
  const s = stats[t.statKey];
  if (!s) return 2.5; // noch nie gesehen
  const errRate = (s.wrong + 1) / (s.seen + 2);
  let w = 0.5 + errRate * 4;
  const mins = (now - s.last) / 60000;
  if (mins < 5) w *= 0.05;
  else if (mins < 60) w *= 0.4;
  if (s.streak >= 3) w *= 0.35;
  return w;
}

export function selectQuestions(
  templates: Template[],
  stats: Record<string, Stat>,
  opts: { count: number; chapterIds?: string[]; kinds?: QuestionKind[]; mode?: SelectMode },
): Question[] {
  let pool = templates.filter(
    (t) => (!opts.chapterIds?.length || opts.chapterIds.includes(t.chapterId)) && (!opts.kinds?.length || opts.kinds.includes(t.kind)),
  );
  if (opts.mode === "weak") {
    const weak = pool.filter((t) => {
      const s = stats[t.statKey];
      return s && s.wrong > 0 && s.streak < 2;
    });
    if (weak.length) pool = weak;
  } else if (opts.mode === "new") {
    const fresh = pool.filter((t) => !stats[t.statKey]);
    if (fresh.length) pool = fresh;
  }
  const ordered = weightedSample(pool, pool.map((t) => weightFor(t, stats)), pool.length);
  // Erst jede Quelle nur einmal (Abwechslung), dann auffüllen
  const used = new Set<string>();
  const picked: Template[] = [];
  for (const t of ordered) {
    if (picked.length >= opts.count) break;
    if (!used.has(t.sourceId)) {
      used.add(t.sourceId);
      picked.push(t);
    }
  }
  for (const t of ordered) {
    if (picked.length >= opts.count) break;
    if (!picked.includes(t)) picked.push(t);
  }
  return shuffle(picked)
    .map((t) => t.make())
    .filter((q): q is Question => !!q);
}

// ===== Bewertung =====

export type Response =
  | { kind: "mc"; selected: number[] }
  | { kind: "tf"; value: boolean }
  | { kind: "cloze"; text: string }
  | { kind: "match"; assign: number[] }
  | { kind: "open"; text: string; self: 0 | 0.5 | 1 }
  | { kind: "order"; items: string[] }
  | { kind: "number"; text: string };

export function parseNumber(s: string): number {
  let t = s.replace(/[€%\s]/g, "").replace(/[a-zA-Z]/g, "");
  if (t.includes(",")) t = t.replace(/\./g, "").replace(",", ".");
  else if (/^-?\d{1,3}(\.\d{3})+$/.test(t)) t = t.replace(/\./g, "");
  return parseFloat(t);
}

export function grade(q: Question, r: Response): { score: number; correct: boolean } {
  let frac = 0;
  if (q.kind === "mc" && r.kind === "mc") {
    if (q.correct.length === 1) frac = r.selected.length === 1 && r.selected[0] === q.correct[0] ? 1 : 0;
    else {
      const right = r.selected.filter((i) => q.correct.includes(i)).length;
      const wrong = r.selected.length - right;
      frac = Math.max(0, (right - wrong) / q.correct.length);
    }
  } else if (q.kind === "tf" && r.kind === "tf") frac = r.value === q.answer ? 1 : 0;
  else if (q.kind === "cloze" && r.kind === "cloze") frac = q.answers.some((a) => fuzzyEqual(r.text, a)) ? 1 : 0;
  else if (q.kind === "match" && r.kind === "match") frac = q.solution.filter((s, i) => r.assign[i] === s).length / q.solution.length;
  else if (q.kind === "open" && r.kind === "open") frac = r.self;
  else if (q.kind === "order" && r.kind === "order") frac = q.items.filter((it, i) => r.items[i] === it).length / q.items.length;
  else if (q.kind === "number" && r.kind === "number") {
    const v = parseNumber(r.text);
    frac = !isNaN(v) && Math.abs(v - q.answer) <= q.tolerance + 1e-9 ? 1 : 0;
  }
  const score = Math.round(frac * q.points * 100) / 100;
  return { score, correct: frac >= 0.999 };
}

export function correctAnswerText(q: Question): string {
  switch (q.kind) {
    case "mc": return q.correct.map((i) => q.options[i]).join(" · ");
    case "tf": return q.answer ? "Richtig" : "Falsch";
    case "cloze": return q.answers[0];
    case "match": return q.left.map((l, i) => `${l} → ${q.right[q.solution[i]]}`).join("\n");
    case "open": return q.modelAnswer;
    case "order": return q.items.map((x, i) => `${i + 1}. ${x}`).join("\n");
    case "number": return `${fmt(q.answer)}${q.unit ? " " + q.unit : ""}`;
  }
}
