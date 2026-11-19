"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useChapters, useFocus, useSubject } from "@/components/Subject";
import { buildTemplates } from "@/lib/generator";
import { daysUntil, localDate, exportData, importData, load, resetAll, setTestDate, streak } from "@/lib/storage";
import { IconArrow, IconCalendar } from "@/components/Icons";

type S = ReturnType<typeof load>;

/** Kleine Verlaufslinie der Probetest-Ergebnisse (0–100 %) */
function Spark({ values }: { values: number[] }) {
  const v = values.length === 1 ? [values[0], values[0]] : values;
  // Bereich an die Werte anpassen, damit Veränderungen sichtbar werden
  const lo = Math.max(0, Math.min(...v) - 10), hi = Math.min(100, Math.max(...v) + 10);
  const pts = v.map((y, i) => [(i / (v.length - 1)) * 100, 36 - ((y - lo) / Math.max(1, hi - lo)) * 32]);
  const d = pts.map(([x, y], i) => {
    if (i === 0) return `M${x},${y}`;
    const [px, py] = pts[i - 1];
    const cx = (px + x) / 2;
    return `C${cx},${py} ${cx},${y} ${x},${y}`;
  }).join(" ");
  return (
    <svg className="spark" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden>
      <path className="area" d={`${d} L100,40 L0,40 Z`} />
      <path className="line" d={d} />
    </svg>
  );
}

export default function Home() {
  const subject = useSubject();
  const chapters = useChapters();
  const { focus, setFocus, hasScope } = useFocus();
  const base = `/${subject.id}`;
  const templates = useMemo(() => buildTemplates(chapters), [chapters]);
  const [s, setS] = useState<S | null>(null);
  useEffect(() => setS(load()), []);
  const refresh = () => setS(load());

  if (!s) return null;

  const mastery = chapters.map((c) => {
    const ts = templates.filter((t) => t.chapterId === c.id);
    const mastered = ts.filter((t) => (s.stats[t.statKey]?.streak ?? 0) >= 2).length;
    return { c, pct: ts.length ? Math.round((mastered / ts.length) * 100) : 0, total: ts.length };
  });
  const totalPct = Math.round(mastery.reduce((a, m) => a + m.pct * m.total, 0) / Math.max(1, mastery.reduce((a, m) => a + m.total, 0)));
  const dueCards = Object.values(s.cards).filter((c) => c.due <= Date.now()).length;
  const totalCards = chapters.reduce((n, c) => n + c.concepts.length * 2 + c.facts.length + c.questions.length, 0);
  const newCards = totalCards - Object.keys(s.cards).length;
  const daysLeft = daysUntil(s.testDate);
  const weakest = [...mastery].sort((a, b) => a.pct - b.pct)[0];
  const tests = s.tests.slice(-10);
  const seenTemplates = templates.filter((t) => s.stats[t.statKey]).length;
  const shortTitle = (t: string) => t.replace(/^\d+ · /, "");

  const countdownMain = daysLeft === null ? "Testdatum fehlt" : daysLeft > 1 ? `Noch ${daysLeft} Tage` : daysLeft === 1 ? "Morgen ist Test" : daysLeft === 0 ? "Heute ist Test" : "Test vorbei";
  const countdownSub = s.testDate ? localDate(s.testDate).toLocaleDateString("de-AT", { day: "numeric", month: "long", year: "numeric" }) : "unten in den Einstellungen";

  return (
    <div>
      <header className="hero">
        <div className="enter">
          <h1>{subject.titleLines[0]}<br />{subject.titleLines[1]}</h1>
          <p className="muted">{chapters.length} Kapitel, {chapters.reduce((n, c) => n + c.concepts.length, 0)} Begriffe, {subject.source}</p>
          {hasScope && (
            <label className="scope-toggle">
              <input type="checkbox" checked={focus} onChange={(e) => setFocus(e.target.checked)} />
              <span><b>Nur Teststoff</b> – {focus ? `alles, was laut ${subject.testScope} nicht kommt, ist ausgeblendet` : "zeigt den ganzen Buchstoff"}</span>
            </label>
          )}
        </div>
        <div className="countdown enter" role="status">
          <span className="dot"><IconCalendar /></span>
          <div><b>{countdownMain}</b><span>{countdownSub}</span></div>
        </div>
      </header>

      <div className="dash enter">
        <div className="stat-row span-2">
          <div className="card stat"><div className="big">{seenTemplates}</div><div className="label">Fragen bearbeitet</div></div>
          <div className="card stat"><div className="big">{dueCards}</div><div className="label">Karten fällig</div></div>
          <div className="card stat"><div className="big">{streak(s.streakDays)}</div><div className="label">Tage in Folge</div></div>
          <div className="card stat"><div className="big">{s.tests.length}</div><div className="label">Probetests</div></div>
        </div>

        <section className="feature stack" aria-labelledby="today">
          <div>
            <h2 id="today" style={{ margin: 0, fontSize: "1.3rem" }}>Heute lernen</h2>
            <p className="muted small" style={{ margin: "0.3rem 0 0" }}>
              {weakest && weakest.pct < 80 ? `Am meisten Luft nach oben: ${shortTitle(weakest.c.title)}` : "Alles im grünen Bereich – halte die Wiederholungen am Laufen."}
            </p>
          </div>
          <div className="overall">
            <div className="big" style={{ fontSize: "3rem" }}>{totalPct}<small>%</small></div>
            <div className="muted small">vom Stoff sicher beherrscht</div>
            <div className="progress" style={{ marginTop: "0.8rem" }}><div style={{ width: `${totalPct}%` }} /></div>
          </div>
          <div className="actions">
            <Link href={`${base}/karten`} className="btn primary with-icon"><span className="arrow"><IconArrow /></span>Lernkarten<span className="count">{dueCards} fällig · {newCards} neu</span></Link>
            <Link href={`${base}/quiz`} className="btn with-icon"><span className="arrow"><IconArrow /></span>Quiz<span className="count">{seenTemplates} / {templates.length} gesehen</span></Link>
            <Link href={`${base}/test`} className="btn with-icon"><span className="arrow"><IconArrow /></span>Probetest schreiben</Link>
          </div>
        </section>

        <section className="card stack" aria-labelledby="chapters">
          <div className="row between">
            <h2 id="chapters" style={{ margin: 0, fontSize: "1.15rem" }}>Kapitel</h2>
            <span className="muted small">{totalPct} % gesamt</span>
          </div>
          <div className="legend">
            {mastery.map(({ c, pct }) => (
              <div className="legend-row" key={c.id}>
                <span>{shortTitle(c.title)}</span>
                <span className="val">{pct} %</span>
                <div className="progress"><div style={{ width: `${pct}%` }} /></div>
              </div>
            ))}
          </div>
        </section>

        {tests.length > 0 && (
          <section className="card span-2" aria-labelledby="tests">
            <div className="row between">
              <h2 id="tests" style={{ margin: 0, fontSize: "1.15rem" }}>Probetests</h2>
              <span className="big" style={{ fontSize: "1.6rem" }}>{tests[tests.length - 1].percent}<small>%</small></span>
            </div>
            <p className="muted small" style={{ margin: "0 0 0.6rem" }}>Ergebnis deiner letzten {tests.length} {tests.length === 1 ? "Probetest" : "Probetests"}</p>
            <Spark values={tests.map((t) => t.percent)} />
          </section>
        )}

        <details className="card span-2">
          <summary>Einstellungen</summary>
          <div className="stack" style={{ marginTop: 14 }}>
            <label className="small" style={{ display: "block", maxWidth: 320 }}>Datum des Tests
              <input type="date" value={s.testDate ?? ""} onChange={(e) => { setTestDate(e.target.value || undefined); refresh(); }} style={{ marginTop: 6 }} />
            </label>
            <p className="small muted" style={{ margin: 0, maxWidth: "62ch" }}>Dein Fortschritt wird nur in diesem Browser gespeichert. Zum Übertragen aufs Handy: hier exportieren und dort importieren.</p>
            <div className="row">
              <button className="btn sm" onClick={() => { navigator.clipboard.writeText(exportData()); alert("Fortschritt in die Zwischenablage kopiert."); }}>Fortschritt exportieren</button>
              <button className="btn sm" onClick={() => { const j = prompt("Exportierten Text einfügen:"); if (j) { try { importData(j); refresh(); } catch { alert("Das sind keine gültigen Exportdaten."); } } }}>Fortschritt importieren</button>
              <button className="btn sm bad" onClick={() => { if (confirm("Wirklich den gesamten Fortschritt löschen?")) { resetAll(); refresh(); } }}>Fortschritt löschen</button>
            </div>
          </div>
        </details>
      </div>
    </div>
  );
}
