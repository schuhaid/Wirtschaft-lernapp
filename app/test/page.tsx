"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { chapters } from "@/content";
import ChapterPicker from "@/components/ChapterPicker";
import Md from "@/components/Md";
import { Feedback, OpenReveal, QuestionHeader, QuestionInput, emptyResponse, isAnswered, suggestedSelf } from "@/components/QuestionView";
import { buildTemplates, grade, selectQuestions, type Response } from "@/lib/generator";
import { addTest, load, recordAnswer } from "@/lib/storage";
import type { Question } from "@/lib/types";

type Phase = "setup" | "running" | "review";

export default function TestPage() {
  const templates = useMemo(() => buildTemplates(chapters), []);
  const [chs, setChs] = useState<string[]>([]);
  const [count, setCount] = useState(20);
  const [minutes, setMinutes] = useState(30);
  const [phase, setPhase] = useState<Phase>("setup");
  const [qs, setQs] = useState<Question[]>([]);
  const [resps, setResps] = useState<Response[]>([]);
  const [i, setI] = useState(0);
  const [left, setLeft] = useState(0);
  const startedAt = useRef(0);
  const [saved, setSaved] = useState(false);

  const start = () => {
    // Probetest: Mischung aus allen Fragenarten, jede Quelle möglichst nur einmal
    const list = selectQuestions(templates, load().stats, { count, chapterIds: chs, mode: "mixed" });
    setQs(list); setResps(list.map(emptyResponse)); setI(0); setSaved(false);
    setLeft(minutes * 60); startedAt.current = Date.now(); setPhase("running");
    window.scrollTo(0, 0);
  };

  const finish = () => {
    // Vorschlag für offene Fragen anhand der Schlüsselwörter – in der Auswertung änderbar
    setResps((rs) => rs.map((r, k) => (r.kind === "open" && qs[k].kind === "open" ? { ...r, self: suggestedSelf(qs[k] as Extract<Question, { kind: "open" }>, r.text) } : r)));
    setPhase("review");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (phase !== "running" || minutes === 0) return;
    const t = setInterval(() => setLeft((l) => {
      if (l <= 1) { clearInterval(t); finish(); return 0; }
      return l - 1;
    }), 1000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const graded = qs.map((q, k) => grade(q, resps[k] ?? emptyResponse(q)));
  const pts = graded.reduce((s, g) => s + g.score, 0);
  const max = qs.reduce((s, q) => s + q.points, 0);

  const save = () => {
    if (saved) return;
    const perChapter: Record<string, { points: number; max: number }> = {};
    qs.forEach((q, k) => {
      const pc = (perChapter[q.chapterId] ??= { points: 0, max: 0 });
      pc.points += graded[k].score; pc.max += q.points;
      recordAnswer(q.statKey, graded[k].correct);
    });
    addTest({ date: Date.now(), percent: max ? Math.round((pts / max) * 100) : 0, points: pts, max,
      durationSec: Math.round((Date.now() - startedAt.current) / 1000), perChapter });
    setSaved(true);
  };

  if (phase === "setup") {
    return (
      <div className="stack">
        <h1>Probetest</h1>
        <p className="muted">Wie ein echter Test: Zeitlimit, kein Feedback zwischendurch, am Ende Punkte, Prozent und Auswertung pro Kapitel. Jeder Test wird neu zusammengestellt.</p>
        <div className="card stack">
          <b>Kapitel</b><ChapterPicker value={chs} onChange={setChs} />
          <b>Fragen</b>
          <div className="row">{[10, 20, 30, 45].map((n) => <button key={n} className={"chip" + (count === n ? " on" : "")} onClick={() => setCount(n)}>{n}</button>)}</div>
          <b>Zeit</b>
          <div className="row">{[0, 15, 30, 50].map((n) => <button key={n} className={"chip" + (minutes === n ? " on" : "")} onClick={() => setMinutes(n)}>{n ? `${n} min` : "ohne Limit"}</button>)}</div>
          <button className="btn primary block" onClick={start}>Test starten</button>
        </div>
      </div>
    );
  }

  if (phase === "running") {
    const q = qs[i];
    const answered = resps.filter(isAnswered).length;
    const mm = String(Math.floor(left / 60)).padStart(2, "0"), ss = String(left % 60).padStart(2, "0");
    return (
      <div className="stack">
        <div className="row between">
          <span className="muted small">{answered}/{qs.length} beantwortet</span>
          {minutes > 0 && <span className={"timer" + (left < 120 ? " low" : "")}>⏱ {mm}:{ss}</span>}
        </div>
        <div className="row" style={{ gap: 4 }}>
          {qs.map((_, k) => (
            <button key={k} className="chip" onClick={() => setI(k)}
              style={{ padding: "0.2rem 0.55rem", fontSize: "0.78rem", ...(k === i ? { background: "var(--ink)", color: "var(--bg)" } : isAnswered(resps[k]) ? { background: "var(--accent-soft)" } : {}) }}>{k + 1}</button>
          ))}
        </div>
        <div className="card stack">
          <QuestionHeader q={q} index={i} total={qs.length} />
          <Md>{q.prompt}</Md>
          <QuestionInput q={q} value={resps[i]} onChange={(r) => setResps((rs) => rs.map((x, k) => (k === i ? r : x)))}
            onSubmit={() => i < qs.length - 1 && setI(i + 1)} />
        </div>
        <div className="sticky-bottom row">
          <button className="btn" disabled={i === 0} onClick={() => setI(i - 1)}>← Zurück</button>
          {i < qs.length - 1
            ? <button className="btn primary" style={{ flex: 1 }} onClick={() => setI(i + 1)}>Weiter →</button>
            : <button className="btn primary" style={{ flex: 1 }} onClick={() => { if (answered < qs.length && !confirm(`${qs.length - answered} Fragen sind offen. Trotzdem abgeben?`)) return; finish(); }}>Abgeben</button>}
        </div>
      </div>
    );
  }

  // ===== Auswertung =====
  const perCh = chapters.map((c) => {
    const idx = qs.map((q, k) => (q.chapterId === c.id ? k : -1)).filter((k) => k >= 0);
    const p = idx.reduce((s, k) => s + graded[k].score, 0), m = idx.reduce((s, k) => s + qs[k].points, 0);
    return { c, p, m };
  }).filter((x) => x.m > 0);
  const hasOpen = qs.some((q) => q.kind === "open");

  return (
    <div className="stack">
      <h1>Auswertung</h1>
      <div className="card stack">
        <div className="big">{max ? Math.round((pts / max) * 100) : 0} %</div>
        <div className="muted">{Math.round(pts * 100) / 100} von {max} Punkten</div>
        {perCh.map(({ c, p, m }) => (
          <div key={c.id}>
            <div className="row between small"><span>{c.title}</span><span>{Math.round((p / m) * 100)} %</span></div>
            <div className={"progress" + (p / m >= 0.75 ? " good" : "")}><div style={{ width: `${(p / m) * 100}%` }} /></div>
          </div>
        ))}
      </div>
      {hasOpen && !saved && <div className="card small">✏️ Offene Fragen wurden anhand der Schlüsselbegriffe vorbewertet. Vergleich mit der Musterlösung und pass die Bewertung an, dann <b>speichern</b>.</div>}
      {qs.map((q, k) => (
        <div key={q.qid} className="card stack">
          <QuestionHeader q={q} index={k} total={qs.length} />
          <Md>{q.prompt}</Md>
          <QuestionInput q={q} value={resps[k]} onChange={() => {}} locked />
          {q.kind === "open" && resps[k].kind === "open" && (
            <>
              <OpenReveal q={q} text={(resps[k] as Extract<Response, { kind: "open" }>).text} />
              {!saved && (
                <div className="row">
                  {([[0, "Falsch"], [0.5, "Teilweise"], [1, "Richtig"]] as const).map(([v, l]) => (
                    <button key={v} className={"chip" + ((resps[k] as Extract<Response, { kind: "open" }>).self === v ? " on" : "")}
                      onClick={() => setResps((rs) => rs.map((x, j) => (j === k && x.kind === "open" ? { ...x, self: v } : x)))}>{l}</button>
                  ))}
                </div>
              )}
            </>
          )}
          <Feedback q={q} score={graded[k].score} />
        </div>
      ))}
      <div className="sticky-bottom row">
        {!saved ? <button className="btn primary" style={{ flex: 1 }} onClick={save}>Ergebnis speichern</button>
          : <span className="muted">✓ Gespeichert – fließt in deine Statistik ein.</span>}
        <button className="btn" onClick={() => setPhase("setup")}>Neuer Test</button>
      </div>
    </div>
  );
}
