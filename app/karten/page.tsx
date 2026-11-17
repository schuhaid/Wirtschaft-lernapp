"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import { chapters } from "@/content";
import ChapterPicker from "@/components/ChapterPicker";
import Md from "@/components/Md";
import { newCard, previewLabel, review, type Rating } from "@/lib/srs";
import { load, setCard, type CardState } from "@/lib/storage";
import { shuffle } from "@/lib/rng";

type Card = { id: string; chapterId: string; front: string; back: string; reverse: boolean };

function allCards(): Card[] {
  return chapters.flatMap((ch) =>
    ch.concepts.flatMap((c) => {
      const back = c.definition + (c.example ? `\n\n*Beispiel:* ${c.example}` : "");
      return [
        { id: `card:${c.id}`, chapterId: ch.id, front: c.term, back, reverse: false },
        { id: `card-r:${c.id}`, chapterId: ch.id, front: c.definition, back: `**${c.term}**`, reverse: true },
      ];
    }),
  );
}

const NEW_PER_SESSION = 20;

export default function KartenPage() {
  const cards = useMemo(allCards, []);
  const [chs, setChs] = useState<string[]>([]);
  const [withReverse, setWithReverse] = useState(true);
  const [cram, setCram] = useState(false);
  const [queue, setQueue] = useState<Card[] | null>(null);
  const [states, setStates] = useState<Record<string, CardState>>({});
  const [flipped, setFlipped] = useState(false);
  const [done, setDone] = useState(0);

  useEffect(() => setStates(load().cards), []);

  const pool = cards.filter((c) => (!chs.length || chs.includes(c.chapterId)) && (withReverse || !c.reverse));
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
    if (r === 0) rest.splice(Math.min(rest.length, 3 + Math.floor(Math.random() * 3)), 0, card); // gleich nochmal
    setQueue(rest); setFlipped(false); setDone((d) => d + 1);
  }, [card, queue, states, cram]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (!card) return;
      if (e.key === " ") { e.preventDefault(); setFlipped((f) => !f); }
      if (flipped && ["1", "2", "3", "4"].includes(e.key)) rate((+e.key - 1) as Rating);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [card, flipped, rate]);

  if (!queue) {
    return (
      <div className="stack">
        <h1>Lernkarten</h1>
        <p className="muted">Spaced Repetition wie bei Anki: Karten, die du gut kannst, kommen erst in ein paar Tagen wieder, schwierige gleich nochmal.</p>
        <div className="grid">
          <div className="card"><div className="big">{due.length}</div><div className="muted small">fällig zur Wiederholung</div></div>
          <div className="card"><div className="big">{fresh.length}</div><div className="muted small">neue Karten</div></div>
          <div className="card"><div className="big">{pool.length - fresh.length}</div><div className="muted small">schon gelernt</div></div>
        </div>
        <div className="card stack">
          <b>Kapitel</b><ChapterPicker value={chs} onChange={setChs} />
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
        <div className="card">{done} Karten wiederholt. {cram ? "" : "Die nächsten Wiederholungen sind schon eingeplant."}</div>
        <div className="row"><button className="btn primary" onClick={() => setQueue(null)}>Zurück</button></div>
      </div>
    );
  }

  const ch = chapters.find((c) => c.id === card.chapterId);
  return (
    <div className="stack">
      <div className="row between small muted"><span>{ch?.title}</span><span>noch {queue.length} · erledigt {done}</span></div>
      <div className="card flash" onClick={() => setFlipped(!flipped)}>
        <div className="small muted" style={{ marginBottom: 10 }}>{card.reverse ? "Welcher Begriff?" : "Was bedeutet …?"}</div>
        <div className={card.reverse ? "" : "front"}><Md>{card.front}</Md></div>
        {flipped ? <div style={{ borderTop: "1px solid var(--line)", marginTop: 18, paddingTop: 18 }}><Md>{card.back}</Md></div>
          : <div className="small muted" style={{ marginTop: 20 }}>Tippen oder Leertaste zum Umdrehen</div>}
      </div>
      <div className="sticky-bottom">
        {flipped ? (
          <div className="rate">
            {(["Nochmal", "Schwer", "Gut", "Leicht"] as const).map((l, r) => (
              <button key={l} className={"btn" + (r === 0 ? " bad" : r === 2 ? " primary" : r === 3 ? " good" : "")} onClick={() => rate(r as Rating)}>
                {l}<small>{cram ? r + 1 : previewLabel(st, r as Rating)}</small>
              </button>
            ))}
          </div>
        ) : <button className="btn primary block" onClick={() => setFlipped(true)}>Umdrehen</button>}
      </div>
    </div>
  );
}
