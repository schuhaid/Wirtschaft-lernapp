"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { chapters, COURSE_TITLE } from "@/content";
import { buildTemplates } from "@/lib/generator";
import { exportData, importData, load, resetAll, setTestDate, streak } from "@/lib/storage";

type S = ReturnType<typeof load>;

export default function Home() {
  const templates = useMemo(() => buildTemplates(chapters), []);
  const [s, setS] = useState<S | null>(null);
  useEffect(() => setS(load()), []);
  const refresh = () => setS(load());

  if (!s) return null;

  // Beherrschung pro Kapitel: Anteil der Fragenvorlagen mit ≥ 2 richtigen in Folge
  const mastery = chapters.map((c) => {
    const ts = templates.filter((t) => t.chapterId === c.id);
    const mastered = ts.filter((t) => (s.stats[t.statKey]?.streak ?? 0) >= 2).length;
    const seen = ts.filter((t) => s.stats[t.statKey]).length;
    return { c, pct: ts.length ? Math.round((mastered / ts.length) * 100) : 0, seen, total: ts.length };
  });
  const totalPct = Math.round(mastery.reduce((a, m) => a + m.pct * m.total, 0) / Math.max(1, mastery.reduce((a, m) => a + m.total, 0)));
  const dueCards = Object.values(s.cards).filter((c) => c.due <= Date.now()).length;
  const totalCards = chapters.reduce((n, c) => n + c.concepts.length * 2, 0);
  const newCards = totalCards - Object.keys(s.cards).length;
  const daysLeft = s.testDate ? Math.ceil((new Date(s.testDate).getTime() - new Date().setHours(0, 0, 0, 0)) / 86400000) : null;
  const weakest = [...mastery].sort((a, b) => a.pct - b.pct)[0];
  const tests = s.tests.slice(-10);

  return (
    <div className="stack">
      <div>
        <h1>{COURSE_TITLE}</h1>
        <div className="muted">{chapters.length} Kapitel · {chapters.reduce((n, c) => n + c.concepts.length, 0)} Begriffe · {templates.length} Fragenvorlagen (jede erzeugt immer neue Varianten)</div>
      </div>

      <div className="grid stats">
        <div className="card">
          <div className="big">{daysLeft === null ? "–" : daysLeft > 0 ? daysLeft : daysLeft === 0 ? "Heute!" : "vorbei"}</div>
          <div className="muted small">{daysLeft === null ? "Testdatum unten eintragen" : daysLeft > 0 ? "Tage bis zum Test" : ""}</div>
        </div>
        <div className="card"><div className="big">{totalPct} %</div><div className="muted small">Stoff sicher beherrscht</div></div>
        <div className="card"><div className="big">🔥 {streak(s.streakDays)}</div><div className="muted small">Tage in Folge gelernt</div></div>
      </div>

      <div className="card stack">
        <b>Heute empfohlen</b>
        <div className="grid">
          <Link href="/karten" className="btn primary">🗂 Lernkarten ({dueCards} fällig, {newCards} neu)</Link>
          <Link href="/quiz" className="btn">🎯 Quiz{weakest && weakest.pct < 80 ? ` – Fokus: ${weakest.c.title}` : ""}</Link>
          <Link href="/test" className="btn">📝 Probetest schreiben</Link>
        </div>
      </div>

      <div className="card stack">
        <b>Fortschritt pro Kapitel</b>
        {mastery.map(({ c, pct, seen, total }) => (
          <div key={c.id}>
            <div className="row between small"><span>{c.title}</span><span className="muted">{pct} % · {seen}/{total} gesehen</span></div>
            <div className={"progress" + (pct >= 75 ? " good" : "")}><div style={{ width: `${pct}%` }} /></div>
          </div>
        ))}
      </div>

      {tests.length > 0 && (
        <div className="card stack">
          <div className="row between"><b>Probetests</b><span className="muted small">letzter: {tests[tests.length - 1].percent} %</span></div>
          <div className="bars">{tests.map((t, k) => <div key={k} title={`${t.percent} %`} style={{ height: `${Math.max(3, t.percent)}%`, opacity: 0.5 + (k + 1) / (tests.length * 2) }} />)}</div>
        </div>
      )}

      <details className="card">
        <summary style={{ cursor: "pointer", fontWeight: 650 }}>⚙️ Einstellungen</summary>
        <div className="stack" style={{ marginTop: 12 }}>
          <label className="small">Datum des Tests
            <input type="date" value={s.testDate ?? ""} onChange={(e) => { setTestDate(e.target.value || undefined); refresh(); }} />
          </label>
          <div className="small muted">Dein Fortschritt wird nur in diesem Browser gespeichert. Zum Übertragen aufs Handy: exportieren und dort importieren.</div>
          <div className="row">
            <button className="btn sm" onClick={() => { navigator.clipboard.writeText(exportData()); alert("Fortschritt in die Zwischenablage kopiert."); }}>Exportieren</button>
            <button className="btn sm" onClick={() => { const j = prompt("Exportierten Text einfügen:"); if (j) { try { importData(j); refresh(); } catch { alert("Ungültige Daten"); } } }}>Importieren</button>
            <button className="btn sm bad" onClick={() => { if (confirm("Wirklich den gesamten Fortschritt löschen?")) { resetAll(); refresh(); } }}>Zurücksetzen</button>
          </div>
        </div>
      </details>
    </div>
  );
}
