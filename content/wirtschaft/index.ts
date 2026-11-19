import type { Chapter } from "@/lib/types";
import grundstrukturen from "./01-grundstrukturen";
import personenrecht from "./02-personenrecht";
import familienrecht from "./03-familienrecht";
import sachenrecht from "./04-sachenrecht";
import vertragsrecht from "./05-vertragsrecht";
import leistungsstoerungen from "./06-leistungsstoerungen";
import schadenersatz from "./07-schadenersatz";
import erbrecht from "./08-erbrecht";

// Stoff: „Wirtschaft und Recht für Techniker/innen IV HTL“, S. 10–54 (in eigenen Worten zusammengefasst)
// + Ergänzungen laut Teststoff-Blatt (Rechtsmittel, Erwachsenenschutz, Verein, Grundbuchprinzipien, Haftungsrücklass, Erbrecht)
export const chapters: Chapter[] = [
  grundstrukturen,
  personenrecht,
  familienrecht,
  sachenrecht,
  vertragsrecht,
  leistungsstoerungen,
  schadenersatz,
  erbrecht, // Zusatz laut Teststoff
];
