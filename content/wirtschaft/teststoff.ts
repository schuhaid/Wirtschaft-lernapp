import type { Chapter } from "@/lib/types";

// Abgleich mit dem Teststoff-Blatt „Teststoff WIRE · 5. Jahrgang“ (laut Lehrkraft Grundlage des echten Tests)
// und der Unterrichts-Mitschrift (OneNote 5ahitm: „Erb- und Familienrecht“, „Sachrecht“).
// Was in der Mitschrift vorkommt, bleibt drin, auch wenn es nicht wörtlich am Blatt steht.
// Alles hier Aufgeführte steht im Buch, kommt aber weder am Blatt noch in der Mitschrift vor.

/** Ganze Kapitel, die nicht zum Test kommen */
const OFF_CHAPTERS = new Set<string>([]);

/** Stoff-/Zusammenfassungs-Abschnitte (Überschrift-Anfang), die in „Nicht im Teststoff“ wandern */
const OFF_SECTIONS: Record<string, { stoff: string[]; summary: string[] }> = {
  grundstrukturen: {
    stoff: ["## Grundlagen des Rechts", "## Einteilung des Rechts", "## Rechtsinformationsquellen"],
    summary: ["### Grundlagen", "### Einteilung des Rechts", "### Information und Beratung"],
  },
  personenrecht: {
    stoff: ["## Allgemeines zum Zivilrecht"],
    summary: ["### Zivilrecht allgemein"],
  },
  familienrecht: {
    stoff: ["### Eingetragene Partnerschaft", "### Abstammung", "### Name des Kindes"],
    summary: [],
  },
  sachenrecht: {
    stoff: ["### Schutz des Eigentums"],
    summary: [],
  },
  vertragsrecht: {
    stoff: ["## Vertragstechnik"],
    summary: ["### Vertragstechnik und Vertragsarten"],
  },
  leistungsstoerungen: {
    stoff: ["## Verkürzung über die Hälfte", "## Spätere Unmöglichkeit"],
    summary: [],
  },
  schadenersatz: {
    stoff: ["## Haftung für eigenes schuldloses Handeln"],
    summary: ["### Ohne eigenes Verschulden"],
  },
  erbrecht: {
    stoff: ["## Testament"],
    summary: ["### Testament"],
  },
};

/** Einzelne Begriffe, Aussagen und Fragen, die nicht zum Test kommen */
const OFF_IDS = new Set<string>([
  // 1 Grundlagen: allgemeine Grundsätze, Einteilung des Rechts, Rechtsinformation
  "gs-unwissenheit", "gs-ris", "gs-amtstag", "gs-oeffentlich", "gs-strafrecht", "gs-zivilrecht", "gs-sonderprivat", "gs-rechtssubjekt",
  "gs-kommentar", "gs-gesetzesausgabe", "gs-entscheidungssammlung", "gs-paragraf", "gs-gesetzblatt", "gs-lehrbuch", "gs-ak", "gs-kammern",
  "gs-anwalt", "gs-unternehmensrecht", "gs-arbeitsrecht", "gs-mietrecht", "gs-tkg",
  "gs-f1", "gs-f9", "gs-f10", "gs-f11", "gs-f12", "gs-f15",
  "gs-q5", "gs-q6", "gs-q7", "gs-q12", "gs-q13",
  // 2 Personenrecht: Allgemeines zum Zivilrecht, Details der Elternvertretung
  "pr-abgb", "pr-zivilrecht", "pr-bereiche", "pr-erste-handlung", "pr-geldsachen", "pr-vertreter-ersatz", "pr-pflegschaft", "pr-liquidation",
  "pr-f12",
  // 3 Familienrecht: eingetragene Partnerschaft, Abstammung, Name des Kindes
  "fr-epg", "fr-mutter", "fr-vater", "fr-anerkennung", "fr-feststellung", "fr-regenbogen",
  "fr-gleichstellung", "fr-kindname", "fr-name14",
  "fr-f7", "fr-f14",
  "fr-q5", "fr-q6",
  // 4 Sachenrecht: Tiere als Sachen, Klagen zum Schutz des Eigentums
  "sr-tiere", "sr-eigentumsklage", "sr-freiheitsklage", "sr-schlichtung",
  "sr-f1",
  // 5 Schuldrecht: Vertragstechnik und Vertragsarten
  "vr-vertragsgegenstand", "vr-agb", "vr-mustervertrag", "vr-gewausschluss", "vr-atypisch",
  "vr-kauf", "vr-leihe", "vr-tausch", "vr-miete", "vr-dienst", "vr-lizenz", "vr-nutzung",
  "vr-f17",
  "vr-q13", "vr-q14", "vr-q16",
  // Leistungsstörungen: Verkürzung über die Hälfte, spätere Unmöglichkeit
  "ls-laesio", "ls-liebhaberei", "ls-unmoeglich", "ls-unternehmer-laesio", "ls-differenz", "ls-zufall",
  "ls-f10", "ls-f11", "ls-q6",
  // 6 Schadenersatz: Haftung ohne eigenes Verschulden (Unmündige)
  "se-unmuendig", "se-geisteskrank", "se-notstand-haft", "se-f13",
  // Erbrecht (Zusatz): Testamentsformen
  "er-eigenhaendig", "er-fremdhaendig", "er-t6", "er-t7", "er-t11", "er-q6",
]);

const level = (line: string) => (line.match(/^(#+) /)?.[1].length ?? 0);

/** Schneidet Abschnitte (ab Überschrift bis zur nächsten gleich- oder höherrangigen) heraus */
function split(md: string, heads: string[]): [string, string] {
  if (!heads.length) return [md, ""];
  const lines = md.split("\n");
  const keep: string[] = [];
  const out: string[] = [];
  let cutLevel = 0;
  for (const line of lines) {
    const l = level(line);
    if (cutLevel && l && l <= cutLevel) cutLevel = 0;
    if (!cutLevel && l && heads.some((h) => line.startsWith(h))) cutLevel = l;
    (cutLevel ? out : keep).push(line);
  }
  return [keep.join("\n"), out.join("\n").trim()];
}

export function applyTeststoff(chapters: Chapter[]): Chapter[] {
  return chapters.map((ch) => {
    const sec = OFF_SECTIONS[ch.id] ?? { stoff: [], summary: [] };
    const [stoff, stoffExtra] = split(ch.stoff, sec.stoff);
    const [summary, summaryExtra] = split(ch.summary, sec.summary);
    const off = <T extends { id: string }>(x: T) => ({ ...x, offTest: OFF_IDS.has(x.id) || undefined });
    return {
      ...ch,
      offTest: OFF_CHAPTERS.has(ch.id) || undefined,
      stoff, stoffExtra: stoffExtra || undefined,
      summary, summaryExtra: summaryExtra || undefined,
      concepts: ch.concepts.map(off),
      facts: ch.facts.map(off),
      questions: ch.questions.map(off),
      calcs: ch.calcs?.map(off),
    };
  });
}

/** Für Tests: alle IDs, damit Tippfehler auffallen */
export const OFF_ID_LIST = [...OFF_IDS];
export const OFF_SECTION_LIST = OFF_SECTIONS;
