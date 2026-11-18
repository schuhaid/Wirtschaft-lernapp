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

// Jedes Fach hat seinen eigenen Speicher. Wirtschaft behält den alten Schlüssel,
// damit bisheriger Fortschritt erhalten bleibt.
let KEY = "wirtschaft-lernapp-v1";
let DEFAULT_TEST_DATE: string | undefined;

export function setActiveSubject(id: string, defaultTestDate?: string) {
  KEY = id === "wirtschaft" ? "wirtschaft-lernapp-v1" : `lernapp-${id}-v1`;
  DEFAULT_TEST_DATE = defaultTestDate;
}

const empty = (): Store => ({ stats: {}, cards: {}, tests: [], streakDays: [] });

export function load(): Store {
  if (typeof window === "undefined") return { ...empty(), testDate: DEFAULT_TEST_DATE };
  try {
    const raw = localStorage.getItem(KEY);
    return { ...empty(), testDate: DEFAULT_TEST_DATE, ...(raw ? JSON.parse(raw) : {}) };
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

/** Eine gerade als falsch gezählte Antwort doch als richtig werten (z. B. Synonym im Lückentext) */
export function fixAnswer(statKey: string) {
  const s = load();
  const st = s.stats[statKey];
  if (!st || st.wrong === 0) return;
  st.wrong--;
  st.correct++;
  st.streak = 1;
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

/** Tage bis zum Test, gerechnet in lokaler Zeit (ISO-Datum würde sonst als UTC gelesen) */
export function daysUntil(iso: string | undefined): number | null {
  if (!iso) return null;
  const [y, m, d] = iso.split("-").map(Number);
  const today = new Date();
  const a = Date.UTC(y, m - 1, d);
  const b = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  return Math.round((a - b) / 86400000);
}

export function localDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d);
}
