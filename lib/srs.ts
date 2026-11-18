import type { CardState } from "./storage";

// Zwei Bewertungen: 0 = „Kann ich nicht“, 1 = „Kann ich“
export type Rating = 0 | 1;

const MIN = 60 * 1000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

export const newCard = (): CardState => ({ ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 });

/**
 * Wiederholungsplan (Intervalle in Tagen gespeichert):
 * - Kann ich nicht → kommt in derselben Runde gleich nochmal, Zähler zurück auf 0
 * - Kann ich, 1. Mal → in 2–3 Stunden wieder
 * - Kann ich, 2. Mal → morgen
 * - Kann ich, 3. Mal → in 3 Tagen, danach jeweils etwa ×2,5
 */
export function review(c: CardState, r: Rating, now = Date.now(), jitter = Math.random()): CardState {
  const s = { ...c };
  if (r === 0) {
    s.lapses++;
    s.reps = 0;
    s.interval = 0;
    s.ease = Math.max(1.3, s.ease - 0.2);
    s.due = now + 1 * MIN;
    return s;
  }
  s.reps++;
  if (s.reps === 1) s.interval = (2 + jitter) / 24; // 2–3 h
  else if (s.reps === 2) s.interval = 1;
  else if (s.reps === 3) s.interval = 3;
  else s.interval = Math.max(3, s.interval * s.ease);
  s.due = now + s.interval * DAY;
  return s;
}

/** Text für den „Kann ich“-Knopf: wann die Karte wiederkommt */
export function nextLabel(c: CardState): string {
  const days = review(c, 1, 0, 0.5).interval;
  if (days < 1) return "wieder in 2–3 Std.";
  if (days < 1.5) return "wieder morgen";
  return `wieder in ${Math.round(days)} Tagen`;
}
