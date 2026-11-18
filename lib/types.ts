// ===== Inhalts-Format (das, was pro Kapitel in /content steht) =====

export type Concept = {
  id: string;
  term: string; // Begriff
  definition: string; // Erklärung in 1–3 Sätzen
  keywords?: string[]; // Schlüsselwörter aus der Definition (für Lückentext & offene Fragen)
  example?: string; // Praxisbeispiel
  group?: string; // Gruppe für bessere Falschantworten (z. B. "Rechtsform", "4P")
};

export type Fact = {
  id: string;
  statement: string;
  isTrue: boolean;
  correction?: string; // Erklärung / richtige Version, wenn falsch
};

export type CustomQuestion =
  | {
      id: string;
      type: "mc";
      question: string;
      options: string[];
      correct: number[]; // Indizes; mehrere = Mehrfachauswahl
      explanation?: string;
    }
  | {
      id: string;
      type: "open";
      question: string;
      answer: string; // Musterlösung
      keywords: string[];
    }
  | {
      id: string;
      type: "order";
      question: string;
      items: string[]; // in RICHTIGER Reihenfolge
      explanation?: string;
    };

export type CalcTask = {
  id: string;
  title: string;
  // Werte werden bei jedem Aufruf neu zufällig gezogen: [min, max, schritt]
  vars: Record<string, [number, number, number]>;
  text: (v: Record<string, number>) => string;
  solve: (v: Record<string, number>) => number;
  unit?: string;
  tolerance?: number; // absolute Toleranz, Standard 0.01
  explanation: (v: Record<string, number>) => string;
  valid?: (v: Record<string, number>) => boolean; // z. B. Preis > variable Kosten
};

export type Chapter = {
  id: string;
  title: string;
  stoff: string; // vollständiger Stoff (Markdown)
  summary: string; // Zusammenfassung (Markdown)
  concepts: Concept[];
  facts: Fact[];
  questions: CustomQuestion[];
  calcs?: CalcTask[];
};

// ===== Generierte Fragen (das, was die App abfragt) =====

type Base = {
  qid: string; // eindeutige Instanz-ID
  statKey: string; // Schlüssel für Statistik (Typ + Quelle)
  sourceId: string;
  chapterId: string;
  points: number;
};

export type Question = Base &
  (
    | { kind: "mc"; prompt: string; options: string[]; correct: number[]; explanation?: string }
    | { kind: "tf"; prompt: string; answer: boolean; explanation?: string }
    | { kind: "cloze"; prompt: string; answers: string[]; explanation?: string }
    | { kind: "match"; prompt: string; left: string[]; right: string[]; solution: number[] } // solution[i] = Index in right
    | { kind: "open"; prompt: string; modelAnswer: string; keywords: string[] }
    | { kind: "order"; prompt: string; items: string[]; shuffled: string[]; explanation?: string }
    | { kind: "number"; prompt: string; answer: number; tolerance: number; unit?: string; explanation?: string }
  );

export type QuestionKind = Question["kind"];

export const KIND_LABEL: Record<QuestionKind, string> = {
  mc: "Multiple Choice",
  tf: "Richtig/Falsch",
  cloze: "Lückentext",
  match: "Zuordnen",
  open: "Offene Frage",
  order: "Reihenfolge",
  number: "Rechenaufgabe",
};

// ===== Fächer =====

export type Subject = {
  id: string; // URL-Teil, z. B. "medientechnik"
  title: string;
  short: string; // kurzer Name für den Fachwechsel
  titleLines: [string, string]; // Überschrift auf der Übersicht, zweizeilig
  mark: string; // kurzes Zeichen fürs Logo-Feld
  source: string; // woher der Stoff stammt
  defaultTestDate?: string; // ISO-Datum, bis man selbst eines einträgt
  chapters: Chapter[];
};
