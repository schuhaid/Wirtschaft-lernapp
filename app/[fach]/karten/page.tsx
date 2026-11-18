"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import type { Chapter } from "@/lib/types";
import { useChapters } from "@/components/Subject";
import ChapterPicker from "@/components/ChapterPicker";
import Md from "@/components/Md";
import { newCard, nextLabel, review, type Rating } from "@/lib/srs";
import { load, setCard, type CardState } from "@/lib/storage";
import { shuffle } from "@/lib/rng";

type Kind = "begriff" | "fakt" | "frage";
type Section = { label: string; text: string; tone?: "good" | "bad" };
type Card = { id: string; chapterId: string; front: string; back: Section[]; reverse: boolean; kind: Kind; prompt: string };

/** Aufzählungen wie „1. … 2. … 3. …“ im Fließtext auf eigene Zeilen setzen */
const listify = (t: string) => /(^|\s)1\. .+\s2\. /.test(t) ? t.replace(/\s+(\d{1,2})\. (?=\S)/g, "\n$1. ") : t;

function allCards(chapters: Chapter[]): Card[] {
  return chapters.flatMap((ch) => {
    const out: Card[] = [];
    for (const c of ch.concepts) {
      const extra: Section[] = [
        ...(c.explain ? [{ label: "Einfach erklärt", text: c.explain }] : []),
        ...(c.example ? [{ label: "Beispiel", text: c.example }] : []),
      ];
      out.push({ id: `card:${c.id}`, chapterId: ch.id, front: c.term, reverse: false, kind: "begriff", prompt: "Was bedeutet …?",
        back: [{ label: "Bedeutung", text: c.definition }, ...extra] });
      out.push({ id: `card-r:${c.id}`, chapterId: ch.id, front: c.definition, reverse: true, kind: "begriff", prompt: "Welcher Begriff ist gemeint?",
        back: [{ label: "Begriff", text: `**${c.term}**` }, ...extra] });
    }
    for (const f of ch.facts) {
      out.push({ id: `card-f:${f.id}`, chapterId: ch.id, front: f.statement, reverse: true, kind: "fakt", prompt: "Richtig oder falsch?",
        back: [{ label: "Lösung", text: f.isTrue ? "✓ **Richtig**" : "✕ **Falsch**", tone: f.isTrue ? "good" : "bad" },
          ...(f.correction ? [{ label: f.isTrue ? "Warum?" : "Richtig ist", text: f.correction }] : [])] });
    }
    for (const q of ch.questions) {
      if (q.type === "open") out.push({ id: `card-q:${q.id}`, chapterId: ch.id, front: q.question, reverse: true, kind: "frage", prompt: "Beantworte die Frage",
        back: [{ label: "Musterantwort", text: listify(q.answer) }, ...(q.keywords.length ? [{ label: "Darauf kommt's an", text: q.keywords.map((k) => `**${k}**`).join(" · ") }] : [])] });
      else if (q.type === "order") out.push({ id: `card-q:${q.id}`, chapterId: ch.id, front: q.question, reverse: true, kind: "frage", prompt: "Nenne die Reihenfolge",
        back: [{ label: "Reihenfolge", text: q.items.map((x, i) => `${i + 1}. ${x}`).join("\n") }, ...(q.explanation ? [{ label: "Erklärung", text: q.explanation }] : [])] });
      else if (q.type === "mc") out.push({ id: `card-q:${q.id}`, chapterId: ch.id, front: q.question.replace(/\n\n\*\(Mehrere Antworten richtig\)\*/, ""), reverse: true, kind: "frage", prompt: "Was ist richtig?",
        back: [{ label: q.correct.length > 1 ? "Richtige Antworten" : "Richtige Antwort", text: q.correct.map((i) => `- ${q.options[i]}`).join("\n") }, ...(q.explanation ? [{ label: "Erklärung", text: q.explanation }] : [])] });
    }
    return out;
  });
}

const KIND_LABEL: Record<Kind, string> = { begriff: "Begriffe", fakt: "Richtig/Falsch", frage: "Fragen & Fälle" };

const NEW_PER_SESSION = 25;

export default function KartenPage() {
  const chapters = useChapters();
  const cards = useMemo(() => allCards(chapters), [chapters]);
  const [chs, setChs] = useState<string[]>([]);
  const [withReverse, setWithReverse] = useState(true);
  const [kinds, setKinds] = useState<Kind[]>(["begriff", "fakt", "frage"]);
  const [cram, setCram] = useState(false);
  const [queue, setQueue] = useState<Card[] | null>(null);
  const [states, setStates] = useState<Record<string, CardState>>({});
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(0);

  useEffect(() => setStates(load().cards), []);

  const pool = cards.filter((c) => (!chs.length || chs.includes(c.chapterId)) && kinds.includes(c.kind) && (withReverse || c.kind !== "begriff" || !c.reverse));
  const now = Date.now();
  const due = pool.filter((c) => states[c.id] && states[c.id].due <= now);
  const fresh = pool.filter((c) => !states[c.id]);

  const start = () => {
    const q = cram ? shuffle(pool) : [...shuffle(due).sort((a, b) => states[a.id].due - states[b.id].due), ...shuffle(fresh).slice(0, NEW_PER_SESSION)];
    // Vorder- und Rückseite derselben Karte nicht direkt hintereinander
    for (let k = 1; k < q.length; k++) if (q[k].id.split(":")[1] === q[k - 1].id.split(":")[1] && k + 1 < q.length) [q[k], q[k + 1]] = [q[k + 1], q[k]];
    setQueue(q); setFlipped(false); setDone(0);
  };

  const card = queue?.[0];
  const st = card ? states[card.id] ?? newCard() : newCard();

  const rate = useCallback((r: Rating) => {
    if (!card || !queue) return;
    const ns = review(states[card.id] ?? newCard(), r);
    if (!cram) { setCard(card.id, ns); setStates((s) => ({ ...s, [card.id]: ns })); }
    const rest = queue.slice(1);
    if (r === 0) rest.splice(Math.min(rest.length, 3 + Math.floor(Math.random() * 3)), 0, card); // kommt in ein paar Karten nochmal
    setQueue(rest); setFlipped(false); setDone((d) => d + 1);
  }, [card, queue, states, cram]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (!card) return;
      if (e.key === " ") { e.preventDefault(); setFlipped((f) => !f); }
      if (!flipped) return;
      if (e.key === "1" || e.key === "ArrowLeft") rate(0);
      if (e.key === "2" || e.key === "ArrowRight") rate(1);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [card, flipped, rate]);

  if (!queue) {
    return (
      <div className="stack">
        <h1>Lernkarten</h1>
        <p className="muted">Antwort aufdecken, dann ehrlich sagen: <b>Kann ich</b> oder <b>Kann ich nicht</b>. Was du nicht kannst, kommt in derselben Runde gleich nochmal. Was du kannst, kommt erst in 2–3 Stunden wieder, dann morgen, dann in 3 Tagen.</p>
        <div className="grid">
          <div className="card"><div className="big">{due.length}</div><div className="muted small">fällig zur Wiederholung</div></div>
          <div className="card"><div className="big">{fresh.length}</div><div className="muted small">neue Karten</div></div>
          <div className="card"><div className="big">{pool.length - fresh.length}</div><div className="muted small">schon gelernt</div></div>
        </div>
        <div className="card stack">
          <b>Kapitel</b><ChapterPicker value={chs} onChange={setChs} />
          <b>Kartenarten</b>
          <div className="row">
            {(Object.keys(KIND_LABEL) as Kind[]).map((k) => (
              <button key={k} className={"chip" + (kinds.includes(k) ? " on" : "")}
                onClick={() => setKinds(kinds.includes(k) ? (kinds.length > 1 ? kinds.filter((x) => x !== k) : kinds) : [...kinds, k])}>
                {KIND_LABEL[k]} ({cards.filter((c) => c.kind === k && (!chs.length || chs.includes(c.chapterId))).length})
              </button>
            ))}
          </div>
          <div className="row">
            <button className={"chip" + (withReverse ? " on" : "")} onClick={() => setWithReverse(!withReverse)}>↔ Auch umgekehrt (Erklärung → Begriff)</button>
            <button className={"chip" + (cram ? " on" : "")} onClick={() => setCram(!cram)}>⚡ Alle durchgehen (ohne Planung)</button>
          </div>
          <button className="btn primary block" onClick={start} disabled={!cram && !due.length && !fresh.length}>
            {cram ? `Alle ${pool.length} Karten durchgehen` : due.length + fresh.length ? `Lernen (${due.length} fällig + ${Math.min(fresh.length, NEW_PER_SESSION)} neu)` : "Heute alles erledigt 🎉"}
          </button>
        </div>
      </div>
    );
  }

  if (!card) {
    return (
      <div className="stack">
        <h1>Geschafft! 🎉</h1>
        <div className="card">{done} Karten durchgegangen. {cram ? "" : "Die Karten, die du konntest, kommen in 2–3 Stunden wieder – dann siehst du sie unter „fällig“."}</div>
        <div className="row"><button className="btn primary" onClick={() => setQueue(null)}>Zurück</button></div>
      </div>
    );
  }

  const ch = chapters.find((c) => c.id === card.chapterId);
  return (
    <div className="stack">
      <div className="row between small muted"><span>{ch?.title}</span><span>noch {queue.length} · erledigt {done}</span></div>
      <div className="card flash" onClick={() => setFlipped(!flipped)}>
        <div className="small muted" style={{ marginBottom: 10 }}>{card.prompt}</div>
        <div className={card.kind === "begriff" && !card.reverse ? "front" : "front-text"}><Md>{card.front}</Md></div>
        {flipped ? (
          <div className="card-back">
            {card.back.map((sec, i) => (
              <div key={i} className={"back-sec" + (sec.tone ? " " + sec.tone : "") + (i === 0 ? " main" : "")}>
                <div className="back-label">{sec.label}</div>
                <Md>{sec.text}</Md>
              </div>
            ))}
          </div>
        ) : <div className="small muted" style={{ marginTop: 20 }}>Tippen oder Leertaste zum Aufdecken</div>}
      </div>
      <div className="sticky-bottom">
        {flipped ? (
          <div className="rate">
            <button className="btn rate-no" onClick={() => rate(0)}>✕ Kann ich nicht<small>kommt gleich nochmal</small></button>
            <button className="btn rate-yes" onClick={() => rate(1)}>✓ Kann ich<small>{cram ? "weiter" : nextLabel(st)}</small></button>
          </div>
        ) : <button className="btn primary block" onClick={() => setFlipped(true)}>Antwort aufdecken</button>}
      </div>
    </div>
  );
}
