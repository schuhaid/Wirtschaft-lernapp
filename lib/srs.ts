import type { CardState } from "./storage";

// Vereinfachtes SM-2 (wie Anki): 0 = Nochmal, 1 = Schwer, 2 = Gut, 3 = Leicht
export type Rating = 0 | 1 | 2 | 3;

const MIN = 60 * 1000;
const DAY = 24 * 60 * MIN;

export const newCard = (): CardState => ({ ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 });

export function review(c: CardState, r: Rating, now = Date.now()): CardState {
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
  if (s.reps === 1) {
    s.interval = r === 1 ? 0.25 : r === 2 ? 1 : 3; // Tage
  } else if (s.reps === 2) {
    s.interval = r === 1 ? 1 : r === 2 ? 3 : 6;
  } else {
    const mult = r === 1 ? 1.2 : r === 2 ? s.ease : s.ease * 1.3;
    s.interval = Math.max(1, s.interval * mult);
  }
  s.ease = Math.max(1.3, s.ease + (r === 1 ? -0.15 : r === 3 ? 0.15 : 0));
  s.due = now + s.interval * DAY;
  return s;
}

export function previewLabel(c: CardState, r: Rating): string {
  const n = review(c, r, 0);
  const ms = n.due;
  if (ms < 60 * MIN) return `${Math.round(ms / MIN)} min`;
  if (ms < DAY) return `${Math.round(ms / (60 * MIN))} h`;
  return `${Math.round(ms / DAY)} T`;
}
