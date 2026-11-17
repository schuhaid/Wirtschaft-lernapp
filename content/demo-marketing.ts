import type { Chapter } from "@/lib/types";

// DEMO-KAPITEL – wird durch deinen echten Stoff ersetzt.
const chapter: Chapter = {
  id: "marketing",
  title: "Marketing & Marketing-Mix (Demo)",
  stoff: `
## Was ist Marketing?
Marketing bedeutet, ein Unternehmen konsequent am **Markt** und an den **Bedürfnissen der Kund:innen** auszurichten. Es umfasst Marktforschung, die Wahl der Zielgruppe und den Einsatz der Marketinginstrumente.

## Marktforschung
- **Primärforschung**: Daten werden selbst neu erhoben (Umfrage, Interview, Beobachtung, Test).
- **Sekundärforschung**: vorhandene Daten werden ausgewertet (Statistik Austria, Branchenberichte, interne Verkaufszahlen).

## Marktsegmentierung & Zielgruppe
Der Gesamtmarkt wird in möglichst gleichartige Käufergruppen (**Segmente**) aufgeteilt, z. B. nach Alter, Einkommen, Wohnort oder Lebensstil. Die Gruppe, die man gezielt ansprechen will, ist die **Zielgruppe**.

## Der Marketing-Mix (4 P)
| P | Instrument | Beispiele |
|---|---|---|
| Product | Produktpolitik | Qualität, Design, Verpackung, Marke, Sortiment |
| Price | Preispolitik | Preisstrategie, Rabatte, Zahlungsbedingungen |
| Place | Distributionspolitik | Vertriebswege, Handel, Onlineshop, Logistik |
| Promotion | Kommunikationspolitik | Werbung, PR, Social Media, Verkaufsförderung |

## Preisstrategien
- **Skimming (Abschöpfung)**: hoher Einstiegspreis, später senken.
- **Penetration (Marktdurchdringung)**: niedriger Einstiegspreis, um schnell Marktanteile zu gewinnen.

## USP
Die **Unique Selling Proposition** ist das einzigartige Verkaufsargument, das ein Produkt klar von der Konkurrenz abhebt.
`,
  summary: `
- **Marketing** = Unternehmen am Markt & Kundenbedürfnis ausrichten.
- **Primär**forschung = selbst erheben · **Sekundär**forschung = vorhandene Daten nutzen.
- **Segmentierung** → Markt in gleichartige Gruppen teilen → **Zielgruppe** wählen.
- **4 P**: Product · Price · Place · Promotion.
- **Skimming** = hoch starten, dann senken · **Penetration** = niedrig starten für Marktanteil.
- **USP** = einzigartiges Verkaufsargument.
`,
  concepts: [
    { id: "mk-produkt", group: "4P", term: "Produktpolitik", definition: "Entscheidungen über Qualität, Design, Verpackung, Marke und Sortiment eines Angebots.", keywords: ["Qualität", "Verpackung", "Sortiment"], example: "Ein Getränkehersteller bringt eine neue Sorte in der Dose auf den Markt." },
    { id: "mk-preis", group: "4P", term: "Preispolitik", definition: "Festlegung von Preisen, Rabatten und Zahlungsbedingungen.", keywords: ["Preisen", "Rabatten", "Zahlungsbedingungen"], example: "Studierendenrabatt von 10 %." },
    { id: "mk-distribution", group: "4P", term: "Distributionspolitik", definition: "Entscheidungen darüber, über welche Vertriebswege das Produkt zu den Kund:innen gelangt.", keywords: ["Vertriebswege"], example: "Verkauf im eigenen Onlineshop und über den Einzelhandel." },
    { id: "mk-kommunikation", group: "4P", term: "Kommunikationspolitik", definition: "Alle Maßnahmen, mit denen ein Unternehmen über sein Angebot informiert und dafür wirbt, z. B. Werbung, PR und Social Media.", keywords: ["Werbung", "PR", "Social Media"], example: "Instagram-Kampagne mit Influencer:innen." },
    { id: "mk-primaer", group: "Marktforschung", term: "Primärforschung", definition: "Marktforschung, bei der Daten neu und selbst erhoben werden, etwa durch Umfragen oder Beobachtung.", keywords: ["neu", "erhoben", "Umfragen"], example: "Eigene Online-Umfrage unter 200 Schüler:innen." },
    { id: "mk-sekundaer", group: "Marktforschung", term: "Sekundärforschung", definition: "Marktforschung, bei der bereits vorhandene Daten ausgewertet werden.", keywords: ["vorhandene", "ausgewertet"], example: "Auswertung von Daten der Statistik Austria." },
    { id: "mk-segment", term: "Marktsegmentierung", definition: "Aufteilung des Gesamtmarkts in möglichst gleichartige Käufergruppen.", keywords: ["Gesamtmarkts", "Käufergruppen"] },
    { id: "mk-usp", term: "USP", definition: "Das einzigartige Verkaufsargument, das ein Produkt klar von der Konkurrenz abhebt.", keywords: ["Verkaufsargument", "Konkurrenz"], example: "Einziges Energy-Getränk ohne Zucker, Koffein und Kalorien." },
    { id: "mk-skimming", group: "Preisstrategie", term: "Skimming-Strategie", definition: "Preisstrategie mit hohem Einstiegspreis, der später schrittweise gesenkt wird.", keywords: ["hohem", "gesenkt"], example: "Neue Smartphones zum Marktstart." },
    { id: "mk-penetration", group: "Preisstrategie", term: "Penetrationsstrategie", definition: "Preisstrategie mit niedrigem Einstiegspreis, um schnell Marktanteile zu gewinnen.", keywords: ["niedrigem", "Marktanteile"], example: "Streamingdienst mit günstigem Einführungsabo." },
  ],
  facts: [
    { id: "mk-f1", statement: "Eine Umfrage, die das Unternehmen selbst durchführt, gehört zur Sekundärforschung.", isTrue: false, correction: "Selbst erhobene Daten = **Primär**forschung." },
    { id: "mk-f2", statement: "Die 4 P stehen für Product, Price, Place und Promotion.", isTrue: true },
    { id: "mk-f3", statement: "Bei der Penetrationsstrategie startet man mit einem hohen Preis.", isTrue: false, correction: "Penetration = **niedriger** Einstiegspreis. Hoher Preis = Skimming." },
    { id: "mk-f4", statement: "Ein Rabatt für Stammkund:innen ist ein Instrument der Preispolitik.", isTrue: true },
  ],
  questions: [
    { id: "mk-q1", type: "mc", question: "Welche Maßnahmen gehören zur **Kommunikationspolitik**?", options: ["Plakatwerbung", "Pressemitteilung", "Neues Verpackungsdesign", "Verkauf über Amazon"], correct: [0, 1], explanation: "Verpackung = Produktpolitik, Vertriebsweg = Distributionspolitik." },
    { id: "mk-q2", type: "open", question: "Nenne die 4 P des Marketing-Mix und je ein Beispiel.", answer: "Product (z. B. Verpackung), Price (z. B. Rabatt), Place (z. B. Onlineshop), Promotion (z. B. Social-Media-Werbung).", keywords: ["Product", "Price", "Place", "Promotion"] },
    { id: "mk-q3", type: "order", question: "Bring die Schritte des Marketingprozesses in eine sinnvolle Reihenfolge.", items: ["Marktforschung", "Marktsegmentierung", "Zielgruppe festlegen", "Marketing-Mix planen", "Erfolgskontrolle"] },
  ],
};

export default chapter;
