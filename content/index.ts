import type { Subject } from "@/lib/types";
import { chapters as wirtschaft } from "./wirtschaft";
import { chapters as medientechnik } from "./medientechnik";

export const subjects: Subject[] = [
  {
    id: "wirtschaft",
    title: "Wirtschaft & Recht",
    short: "Wirtschaft",
    titleLines: ["Wirtschaft", "& Recht"],
    mark: "§",
    source: "Buch S. 10–54 + Teststoff",
    chapters: wirtschaft,
  },
  {
    id: "medientechnik",
    title: "Medientechnik",
    short: "Medien",
    titleLines: ["Medien", "technik"],
    mark: "CI",
    source: "Corporate Identity – Zusammenfassung",
    defaultTestDate: "2026-11-20",
    chapters: medientechnik,
  },
];

export function getSubject(id: string): Subject | undefined {
  return subjects.find((s) => s.id === id);
}
