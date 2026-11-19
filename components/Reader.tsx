"use client";
import { useState } from "react";
import { useChapters, useFocus } from "@/components/Subject";
import Md from "./Md";

/** Leseansicht für Stoff bzw. Zusammenfassung, mit Kapitelwahl und Suche */
export default function Reader({ field, title, intro }: { field: "stoff" | "summary"; title: string; intro: string }) {
  const chapters = useChapters();
  const { focus, subject } = useFocus();
  const extraField = field === "stoff" ? "stoffExtra" : "summaryExtra";
  const hidden = focus ? subject.chapters.filter((c) => c.offTest) : [];
  const [active, setActive] = useState<string>("alle");
  const [q, setQ] = useState("");
  const needle = q.trim().toLowerCase();

  const list = chapters.filter((c) => (active === "alle" || c.id === active) && (!needle || c[field].toLowerCase().includes(needle) || c.title.toLowerCase().includes(needle)));

  return (
    <div className="stack">
      <h1>{title}</h1>
      <p className="muted">{intro}</p>
      <input type="search" placeholder="🔎 Im Stoff suchen …" value={q} onChange={(e) => setQ(e.target.value)} />
      <div className="row">
        <button className={"chip" + (active === "alle" ? " on" : "")} onClick={() => setActive("alle")}>Alle</button>
        {chapters.map((c) => <button key={c.id} className={"chip" + (active === c.id ? " on" : "")} onClick={() => setActive(c.id)}>{c.title}</button>)}
      </div>
      {focus && (
        <div className="card scope-note small">
          <b>Nur Teststoff ist an.</b> Abschnitte, die laut {subject.testScope} nicht kommen, sind unten in jedem Kapitel eingeklappt
          {hidden.length > 0 && <> – ganz ausgeblendet: {hidden.map((c) => c.title).join(", ")}</>}. Umschalten auf der Übersicht.
        </div>
      )}
      {list.length === 0 && <div className="card muted">Nichts gefunden.</div>}
      {list.map((c) => (
        <section key={c.id} className="card">
          <h2 style={{ marginTop: 0 }}>{c.title}</h2>
          <Md highlight={q}>{c[field]}</Md>
          {focus && c[extraField] && (
            <details className="offtest">
              <summary>Nicht im Teststoff – kannst du weglassen</summary>
              <div className="offtest-body"><Md highlight={q}>{c[extraField]!}</Md></div>
            </details>
          )}
        </section>
      ))}
    </div>
  );
}
