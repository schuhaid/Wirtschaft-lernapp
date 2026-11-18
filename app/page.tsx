"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { subjects } from "@/content";
import { daysUntil, load, setActiveSubject } from "@/lib/storage";
import { IconArrow } from "@/components/Icons";

type Info = { daysLeft: number | null; started: number };

/** Startseite: Fach auswählen */
export default function Faecher() {
  const [info, setInfo] = useState<Record<string, Info>>({});

  useEffect(() => {
    const out: Record<string, Info> = {};
    for (const s of subjects) {
      setActiveSubject(s.id, s.defaultTestDate);
      const st = load();
      const daysLeft = daysUntil(st.testDate);
      out[s.id] = { daysLeft, started: Object.keys(st.stats).length + Object.keys(st.cards).length };
    }
    setInfo(out);
  }, []);

  const when = (d: number | null) => d === null ? "Kein Testdatum" : d > 1 ? `Test in ${d} Tagen` : d === 1 ? "Test morgen" : d === 0 ? "Test heute" : "Test vorbei";

  return (
    <div>
      <header className="hero">
        <div className="enter">
          <h1>Was lernst<br />du heute?</h1>
          <p className="muted">Jedes Fach hat Stoff, Zusammenfassung, Lernkarten, Quiz und Probetests. Der Fortschritt wird pro Fach getrennt gespeichert.</p>
        </div>
      </header>
      <div className="subject-grid enter">
        {subjects.map((s) => {
          const i = info[s.id];
          const words = s.chapters.reduce((n, c) => n + c.concepts.length, 0);
          return (
            <Link key={s.id} href={`/${s.id}`} className="card subject-card">
              <span className="brand" aria-hidden>{s.mark}</span>
              <div>
                <h2>{s.title}</h2>
                <p className="muted small">{s.chapters.length} Kapitel · {words} Begriffe</p>
              </div>
              <div className="subject-foot">
                <span className="chip-static">{i ? when(i.daysLeft) : " "}</span>
                <span className="arrow"><IconArrow /></span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
