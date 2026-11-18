"use client";
import { useState } from "react";
import { useChapters } from "@/components/Subject";
import Md from "./Md";

/** Leseansicht für Stoff bzw. Zusammenfassung, mit Kapitelwahl und Suche */
export default function Reader({ field, title, intro }: { field: "stoff" | "summary"; title: string; intro: string }) {
  const chapters = useChapters();
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
      {list.length === 0 && <div className="card muted">Nichts gefunden.</div>}
      {list.map((c) => (
        <section key={c.id} className="card">
          <h2 style={{ marginTop: 0 }}>{c.title}</h2>
          <Md highlight={q}>{c[field]}</Md>
        </section>
      ))}
    </div>
  );
}
