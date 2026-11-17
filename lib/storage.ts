"use client";

// Alles wird lokal im Browser gespeichert (kein Login nötig).

export type Stat = { seen: number; correct: number; wrong: number; last: number; streak: number };
export type CardState = { ease: number; interval: number; due: number; reps: number; lapses: number };
export type TestResult = {
  date: number;
  percent: number;
  points: number;
  max: number;
  durationSec: number;
  perChapter: Record<string, { points: number; max: number }>;
};

type Store = {
  stats: Record<string, Stat>; // statKey -> Stat
  cards: Record<string, CardState>; // cardId -> SRS-Zustand
  tests: TestResult[];
  testDate?: string; // ISO-Datum des echten Tests
  streakDays: string[]; // Tage, an denen gelernt wurde
};

const KEY = "wirtschaft-lernapp-v1";

const empty = (): Store => ({ stats: {}, cards: {}, tests: [], streakDays: [] });

export function load(): Store {
  if (typeof window === "undefined") return empty();
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...empty(), ...JSON.parse(raw) } : empty();
  } catch {
    return empty();
  }
}

function save(s: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s));
  } catch {
    /* Speicher voll / privat – ignorieren */
  }
}

function markToday(s: Store) {
  const d = new Date().toISOString().slice(0, 10);
  if (!s.streakDays.includes(d)) s.streakDays.push(d);
}

export function recordAnswer(statKey: string, correct: boolean) {
  const s = load();
  const st = s.stats[statKey] ?? { seen: 0, correct: 0, wrong: 0, last: 0, streak: 0 };
  st.seen++;
  if (correct) {
    st.correct++;
    st.streak++;
  } else {
    st.wrong++;
    st.streak = 0;
  }
  st.last = Date.now();
  s.stats[statKey] = st;
  markToday(s);
  save(s);
}

export function setCard(id: string, state: CardState) {
  const s = load();
  s.cards[id] = state;
  markToday(s);
  save(s);
}

export function addTest(r: TestResult) {
  const s = load();
  s.tests.push(r);
  markToday(s);
  save(s);
}

export function setTestDate(d: string | undefined) {
  const s = load();
  s.testDate = d;
  save(s);
}

export function resetAll() {
  save(empty());
}

export function exportData(): string {
  return JSON.stringify(load());
}

export function importData(json: string) {
  save({ ...empty(), ...JSON.parse(json) });
}

/** Lernserie: aufeinanderfolgende Tage bis heute/gestern */
export function streak(days: string[]): number {
  const set = new Set(days);
  let n = 0;
  const d = new Date();
  if (!set.has(d.toISOString().slice(0, 10))) d.setDate(d.getDate() - 1);
  while (set.has(d.toISOString().slice(0, 10))) {
    n++;
    d.setDate(d.getDate() - 1);
  }
  return n;
}
