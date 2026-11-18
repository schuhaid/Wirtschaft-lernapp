"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useChapters } from "@/components/Subject";
import ChapterPicker from "@/components/ChapterPicker";
import Md from "@/components/Md";
import { Feedback, OpenReveal, QuestionHeader, QuestionInput, emptyResponse, isAnswered } from "@/components/QuestionView";
import { buildTemplates, grade, selectQuestions, type Response, type SelectMode } from "@/lib/generator";
import { load, recordAnswer } from "@/lib/storage";
import { KIND_LABEL, type Question, type QuestionKind } from "@/lib/types";

const KINDS = Object.keys(KIND_LABEL) as QuestionKind[];

export default function QuizPage() {
  const chapters = useChapters();
  const templates = useMemo(() => buildTemplates(chapters), [chapters]);
  const [chs, setChs] = useState<string[]>([]);
  const [kinds, setKinds] = useState<QuestionKind[]>([]);
  const [mode, setMode] = useState<SelectMode>("mixed");
  const [count, setCount] = useState(15);

  const [qs, setQs] = useState<Question[] | null>(null);
  const [i, setI] = useState(0);
  const [resp, setResp] = useState<Response | null>(null);
  const [checked, setChecked] = useState(false);
  const [revealed, setRevealed] = useState(false); // offene Fragen
  const [results, setResults] = useState<{ q: Question; score: number }[]>([]);

  const availableKinds = KINDS.filter((k) => templates.some((t) => t.kind === k && (!chs.length || chs.includes(t.chapterId))));

  const start = (forceMode?: SelectMode) => {
    const list = selectQuestions(templates, load().stats, { count, chapterIds: chs, kinds, mode: forceMode ?? mode });
    setQs(list); setI(0); setResults([]); setChecked(false); setRevealed(false);
    setResp(list[0] ? emptyResponse(list[0]) : null);
  };

  const q = qs?.[i];

  const check = useCallback(() => {
    if (!q || !resp || checked) return;
    if (q.kind === "open" && !revealed) { setRevealed(true); return; }
    if (!isAnswered(resp)) return;
    const { score, correct } = grade(q, resp);
    recordAnswer(q.statKey, correct);
    setResults((r) => [...r, { q, score }]);
    setChecked(true);
  }, [q, resp, checked, revealed]);

  const rateOpen = (self: 0 | 0.5 | 1) => {
    if (!q || !resp || resp.kind !== "open") return;
    const r: Response = { ...resp, self };
    const { score, correct } = grade(q, r);
    recordAnswer(q.statKey, correct);
    setResults((x) => [...x, { q, score }]);
    setResp(r); setChecked(true);
  };

  const next = useCallback(() => {
    if (!qs) return;
    const n = i + 1;
    setI(n); setChecked(false); setRevealed(false);
    setResp(qs[n] ? emptyResponse(qs[n]) : null);
  }, [qs, i]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || (e.target as HTMLElement).tagName === "TEXTAREA") return;
      if (checked) next(); else if (q && q.kind !== "open" && q.kind !== "cloze" && q.kind !== "number") check();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [checked, next, check, q]);

  // ===== Einstellungen =====
  if (!qs) {
    return (
      <div className="stack">
        <h1>Quiz</h1>
        <p className="muted">Jede Runde wird neu zusammengestellt: andere Fragen, andere Falschantworten, neue Zahlen. Fragen, die du falsch hattest, kommen öfter.</p>
        <div className="card stack">
          <b>Kapitel</b><ChapterPicker value={chs} onChange={setChs} />
          <b>Modus</b>
          <div className="row">
            {([["mixed", "🔀 Gemischt (smart)"], ["weak", "🎯 Nur Schwächen"], ["new", "🆕 Noch nie gesehen"]] as const).map(([m, l]) => (
              <button key={m} className={"chip" + (mode === m ? " on" : "")} onClick={() => setMode(m)}>{l}</button>
            ))}
          </div>
          <b>Fragenarten</b>
          <div className="row">
            <button className={"chip" + (!kinds.length ? " on" : "")} onClick={() => setKinds([])}>Alle</button>
            {availableKinds.map((k) => (
              <button key={k} className={"chip" + (kinds.includes(k) ? " on" : "")}
                onClick={() => setKinds(kinds.includes(k) ? kinds.filter((x) => x !== k) : [...kinds, k])}>{KIND_LABEL[k]}</button>
            ))}
          </div>
          <b>Anzahl</b>
          <div className="row">
            {[10, 15, 25, 40].map((n) => <button key={n} className={"chip" + (count === n ? " on" : "")} onClick={() => setCount(n)}>{n}</button>)}
          </div>
          <button className="btn primary block" onClick={() => start()}>Quiz starten</button>
        </div>
      </div>
    );
  }

  // ===== Ergebnis =====
  if (!q) {
    const pts = results.reduce((s, r) => s + r.score, 0);
    const max = results.reduce((s, r) => s + r.q.points, 0);
    const wrong = results.filter((r) => r.score < r.q.points);
    return (
      <div className="stack">
        <h1>Runde fertig 🎉</h1>
        <div className="card">
          <div className="big">{max ? Math.round((pts / max) * 100) : 0} %</div>
          <div className="muted">{pts} von {max} Punkten · {results.length - wrong.length}/{results.length} komplett richtig</div>
        </div>
        {wrong.length > 0 && (
          <div className="card stack">
            <b>Nochmal anschauen</b>
            {wrong.map((r) => <div key={r.q.qid} className="small"><Md>{r.q.prompt.split("\n")[0]}</Md></div>)}
          </div>
        )}
        <div className="row">
          <button className="btn primary" onClick={() => start()}>Neue Runde</button>
          {wrong.length > 0 && <button className="btn" onClick={() => start("weak")}>Fehler üben</button>}
          <button className="btn ghost" onClick={() => setQs(null)}>Einstellungen</button>
        </div>
      </div>
    );
  }

  // ===== Frage =====
  return (
    <div className="stack">
      <div className="progress"><div style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <div className="card stack">
        <QuestionHeader q={q} index={i} total={qs.length} />
        <Md>{q.prompt}</Md>
        {resp && <QuestionInput q={q} value={resp} onChange={setResp} locked={checked || (q.kind === "open" && revealed)} onSubmit={check} />}
        {q.kind === "open" && revealed && resp?.kind === "open" && <OpenReveal q={q} text={resp.text} />}
        {checked && <Feedback q={q} score={results[results.length - 1]?.score ?? 0} />}
      </div>
      <div className="sticky-bottom">
        {!checked && q.kind === "open" && revealed ? (
          <div className="stack">
            <div className="small muted">Wie gut war deine Antwort?</div>
            <div className="grid" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
              <button className="btn bad" onClick={() => rateOpen(0)}>Falsch</button>
              <button className="btn" onClick={() => rateOpen(0.5)}>Teilweise</button>
              <button className="btn good" onClick={() => rateOpen(1)}>Richtig</button>
            </div>
          </div>
        ) : !checked ? (
          <button className="btn primary block" onClick={check} disabled={!resp || (q.kind !== "open" && !isAnswered(resp))}>
            {q.kind === "open" ? "Lösung zeigen" : "Prüfen"} <span className="small" style={{ opacity: 0.7 }}>↵</span>
          </button>
        ) : (
          <button className="btn primary block" onClick={next}>Weiter <span className="small" style={{ opacity: 0.7 }}>↵</span></button>
        )}
      </div>
    </div>
  );
}
