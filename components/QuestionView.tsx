"use client";
import { useEffect, useRef } from "react";
import Md from "./Md";
import type { Question } from "@/lib/types";
import { KIND_LABEL } from "@/lib/types";
import { useChapters } from "@/components/Subject";
import type { Response } from "@/lib/generator";
import { correctAnswerText } from "@/lib/generator";
import { keywordHits } from "@/lib/text";

const LETTERS = "ABCDEFGH";

export function emptyResponse(q: Question): Response {
  switch (q.kind) {
    case "mc": return { kind: "mc", selected: [] };
    case "tf": return { kind: "tf", value: undefined as unknown as boolean };
    case "cloze": return { kind: "cloze", text: "" };
    case "match": return { kind: "match", assign: q.left.map(() => -1) };
    case "open": return { kind: "open", text: "", self: 0 };
    case "order": return { kind: "order", items: [...q.shuffled] };
    case "number": return { kind: "number", text: "" };
  }
}

export function isAnswered(r: Response): boolean {
  switch (r.kind) {
    case "mc": return r.selected.length > 0;
    case "tf": return typeof r.value === "boolean";
    case "cloze": case "number": return r.text.trim().length > 0;
    case "match": return r.assign.every((a) => a >= 0);
    case "open": return r.text.trim().length > 0;
    case "order": return true;
  }
}

export function QuestionHeader({ q, index, total }: { q: Question; index?: number; total?: number }) {
  const chapters = useChapters();
  const ch = chapters.find((c) => c.id === q.chapterId);
  return (
    <div className="row between small muted">
      <span>{index !== undefined && total ? `Frage ${index + 1} / ${total} · ` : ""}{ch?.title}</span>
      <span className="pill">{KIND_LABEL[q.kind]} · {q.points} P</span>
    </div>
  );
}

/** Eingabe für jede Fragenart. `locked` = nach dem Prüfen (zeigt richtig/falsch farbig). */
export function QuestionInput({ q, value, onChange, locked, onSubmit }: {
  q: Question; value: Response; onChange: (r: Response) => void; locked?: boolean; onSubmit?: () => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { if (!locked) inputRef.current?.focus(); }, [q.qid, locked]);

  // Tastatur: 1–8 für Antworten, R/F für Richtig/Falsch
  useEffect(() => {
    if (locked) return;
    const h = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT") return;
      if (q.kind === "mc" && value.kind === "mc") {
        const n = parseInt(e.key) - 1;
        if (n >= 0 && n < q.options.length) {
          const multi = q.correct.length > 1;
          const sel = multi ? (value.selected.includes(n) ? value.selected.filter((x) => x !== n) : [...value.selected, n]) : [n];
          onChange({ kind: "mc", selected: sel });
        }
      }
      if (q.kind === "tf") {
        if (e.key.toLowerCase() === "r" || e.key === "1") onChange({ kind: "tf", value: true });
        if (e.key.toLowerCase() === "f" || e.key === "2") onChange({ kind: "tf", value: false });
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [q, value, locked, onChange]);

  const enter = (e: React.KeyboardEvent) => { if (e.key === "Enter" && onSubmit) { e.preventDefault(); onSubmit(); } };

  if (q.kind === "mc" && value.kind === "mc") {
    const multi = q.correct.length > 1;
    return (
      <div>
        {q.options.map((o, i) => {
          const sel = value.selected.includes(i);
          let cls = sel ? " sel" : "";
          if (locked) cls = q.correct.includes(i) ? " right" : sel ? " wrong" : "";
          return (
            <button key={i} className={"option" + cls} disabled={locked}
              onClick={() => onChange({ kind: "mc", selected: multi ? (sel ? value.selected.filter((x) => x !== i) : [...value.selected, i]) : [i] })}>
              <span className="key">{LETTERS[i]}</span><span><Md>{o}</Md></span>
            </button>
          );
        })}
      </div>
    );
  }
  if (q.kind === "tf" && value.kind === "tf") {
    return (
      <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
        {[true, false].map((b) => {
          let cls = value.value === b ? " sel" : "";
          if (locked) cls = q.answer === b ? " right" : value.value === b ? " wrong" : "";
          return (
            <button key={String(b)} className={"option" + cls} disabled={locked} style={{ justifyContent: "center", marginTop: 0 }}
              onClick={() => onChange({ kind: "tf", value: b })}>
              {b ? "✓ Richtig" : "✗ Falsch"}
            </button>
          );
        })}
      </div>
    );
  }
  if ((q.kind === "cloze" && value.kind === "cloze") || (q.kind === "number" && value.kind === "number")) {
    return (
      <div className="row">
        <input ref={inputRef} type="text" inputMode={q.kind === "number" ? "decimal" : "text"} value={value.text} disabled={locked}
          placeholder={q.kind === "number" ? "Ergebnis" : "Fehlendes Wort"} autoComplete="off"
          onChange={(e) => onChange({ ...value, text: e.target.value })} onKeyDown={enter} style={{ flex: 1 }} />
        {q.kind === "number" && q.unit && <span className="muted">{q.unit}</span>}
      </div>
    );
  }
  if (q.kind === "match" && value.kind === "match") {
    return (
      <div className="stack">
        {q.left.map((l, i) => {
          const ok = locked && value.assign[i] === q.solution[i];
          return (
            <div key={i}>
              <div style={{ fontWeight: 650, marginBottom: 4 }}>{locked ? (ok ? "✅ " : "❌ ") : ""}{l}</div>
              <select value={value.assign[i]} disabled={locked}
                onChange={(e) => { const a = [...value.assign]; a[i] = +e.target.value; onChange({ kind: "match", assign: a }); }}>
                <option value={-1}>– auswählen –</option>
                {q.right.map((r, j) => <option key={j} value={j}>{r}</option>)}
              </select>
              {locked && !ok && <div className="small" style={{ color: "var(--good)", marginTop: 4 }}>Richtig: {q.right[q.solution[i]]}</div>}
            </div>
          );
        })}
      </div>
    );
  }
  if (q.kind === "open" && value.kind === "open") {
    return (
      <textarea value={value.text} disabled={locked} placeholder="Deine Antwort …"
        onChange={(e) => onChange({ ...value, text: e.target.value })} />
    );
  }
  if (q.kind === "order" && value.kind === "order") {
    const move = (i: number, d: number) => {
      const a = [...value.items];
      const j = i + d;
      if (j < 0 || j >= a.length) return;
      [a[i], a[j]] = [a[j], a[i]];
      onChange({ kind: "order", items: a });
    };
    return (
      <div>
        {value.items.map((it, i) => (
          <div key={it} className="order-item" style={locked ? { borderColor: q.items[i] === it ? "var(--good)" : "var(--bad)" } : undefined}>
            <b className="muted">{i + 1}.</b><span>{it}</span>
            {!locked && <>
              <button className="btn sm ghost" onClick={() => move(i, -1)} aria-label="nach oben">↑</button>
              <button className="btn sm ghost" onClick={() => move(i, 1)} aria-label="nach unten">↓</button>
            </>}
          </div>
        ))}
      </div>
    );
  }
  return null;
}

/** Musterlösung + Schlüsselwörter für offene Fragen */
export function OpenReveal({ q, text }: { q: Extract<Question, { kind: "open" }>; text: string }) {
  const hits = keywordHits(text, q.keywords);
  const n = hits.filter(Boolean).length;
  return (
    <div className="card stack" style={{ background: "var(--accent-soft)", borderColor: "transparent" }}>
      <div><b>Musterlösung</b><Md>{q.modelAnswer}</Md></div>
      {q.keywords.length > 0 && (
        <div className="small">
          <b>Schlüsselbegriffe ({n}/{q.keywords.length} gefunden):</b>{" "}
          {q.keywords.map((k, i) => (
            <span key={k} style={{ marginRight: 8, color: hits[i] ? "var(--good)" : "var(--bad)" }}>{hits[i] ? "✓" : "✗"} {k}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export function suggestedSelf(q: Extract<Question, { kind: "open" }>, text: string): 0 | 0.5 | 1 {
  if (!q.keywords.length) return text.trim().length > 20 ? 0.5 : 0;
  const r = keywordHits(text, q.keywords).filter(Boolean).length / q.keywords.length;
  return r >= 0.75 ? 1 : r >= 0.34 ? 0.5 : 0;
}

export function Feedback({ q, score, onAccept }: { q: Question; score: number; onAccept?: () => void }) {
  const full = score >= q.points - 1e-9;
  const zero = score <= 0;
  const explanation = "explanation" in q ? q.explanation : undefined;
  return (
    <div className={"feedback " + (full ? "ok" : zero ? "no" : "part")}>
      <b>{full ? "✅ Richtig!" : zero ? "❌ Leider falsch" : `🟡 Teilweise richtig (${score}/${q.points} P)`}</b>
      {!full && q.kind !== "open" && q.kind !== "match" && (
        <div style={{ marginTop: 6 }}><span className="muted small">Richtige Antwort:</span><Md>{correctAnswerText(q)}</Md></div>
      )}
      {q.kind === "cloze" && q.answers.length > 1 && (
        <div className="small" style={{ marginTop: 6 }}><span className="muted">Auch richtig:</span> {q.answers.slice(1, 7).join(", ")}</div>
      )}
      {zero && q.kind === "cloze" && onAccept && (
        <button className="btn sm" style={{ marginTop: 10 }} onClick={onAccept}>Meine Antwort bedeutet dasselbe – als richtig werten</button>
      )}
      {explanation && <div className="explain"><Md>{explanation}</Md></div>}
    </div>
  );
}
