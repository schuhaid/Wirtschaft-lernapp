import type { Chapter } from "@/lib/types";
import { fmt } from "@/lib/text";

// DEMO-KAPITEL – zeigt Rechenaufgaben mit immer neuen Zahlen.
const chapter: Chapter = {
  id: "kosten",
  title: "Deckungsbeitrag & Break-even (Demo)",
  stoff: `
## Kostenarten
- **Fixkosten** bleiben unabhängig von der Produktionsmenge gleich (Miete, Gehälter, Versicherung).
- **Variable Kosten** steigen mit der Menge (Material, Verpackung, Stückprovision).

## Deckungsbeitrag (DB)
**DB pro Stück = Verkaufspreis − variable Kosten pro Stück**

Der DB zeigt, wie viel jedes verkaufte Stück zur Deckung der Fixkosten beiträgt.

## Break-even-Point
Die Menge, ab der weder Gewinn noch Verlust entsteht:

**Break-even-Menge = Fixkosten ÷ DB pro Stück**

## Gewinn
**Gewinn = DB pro Stück × Menge − Fixkosten**
`,
  summary: `
- Fixkosten: mengenunabhängig · variable Kosten: steigen mit der Menge
- **DB/Stk = Preis − var. Kosten/Stk**
- **Break-even = Fixkosten ÷ DB/Stk**
- **Gewinn = DB/Stk × Menge − Fixkosten**
`,
  concepts: [
    { id: "ko-fix", group: "Kostenart", term: "Fixkosten", definition: "Kosten, die unabhängig von der Produktionsmenge gleich bleiben.", keywords: ["unabhängig", "Produktionsmenge"], example: "Miete der Produktionshalle." },
    { id: "ko-var", group: "Kostenart", term: "Variable Kosten", definition: "Kosten, die mit der Produktionsmenge steigen oder fallen.", keywords: ["Produktionsmenge", "steigen"], example: "Materialkosten pro Stück." },
    { id: "ko-db", term: "Deckungsbeitrag", definition: "Differenz aus Verkaufspreis und variablen Kosten; der Betrag, der zur Deckung der Fixkosten beiträgt.", keywords: ["Verkaufspreis", "variablen Kosten", "Fixkosten"] },
    { id: "ko-be", term: "Break-even-Point", definition: "Absatzmenge, bei der die Erlöse genau die Gesamtkosten decken, also weder Gewinn noch Verlust entsteht.", keywords: ["Gesamtkosten", "Gewinn", "Verlust"] },
  ],
  facts: [
    { id: "ko-f1", statement: "Die Miete für das Büro zählt zu den variablen Kosten.", isTrue: false, correction: "Miete ist mengenunabhängig → **Fixkosten**." },
    { id: "ko-f2", statement: "Ist der Deckungsbeitrag pro Stück negativ, kann man den Break-even nie erreichen.", isTrue: true, correction: "Jedes verkaufte Stück vergrößert dann den Verlust." },
  ],
  questions: [],
  calcs: [
    {
      id: "ko-c-db", title: "Deckungsbeitrag pro Stück",
      vars: { p: [8, 60, 0.5], kv: [3, 40, 0.5] }, valid: (v) => v.p > v.kv,
      text: (v) => `Ein Produkt kostet **${fmt(v.p)} €**, die variablen Kosten betragen **${fmt(v.kv)} €** pro Stück. Berechne den Deckungsbeitrag pro Stück.`,
      solve: (v) => v.p - v.kv, unit: "€",
      explanation: (v) => `DB = ${fmt(v.p)} − ${fmt(v.kv)} = **${fmt(v.p - v.kv)} €**`,
    },
    {
      id: "ko-c-be", title: "Break-even-Menge",
      vars: { fk: [5000, 60000, 1000], db: [2, 25, 1] },
      valid: (v) => Number.isInteger(v.fk / v.db),
      text: (v) => `Fixkosten: **${fmt(v.fk)} €**, Deckungsbeitrag pro Stück: **${fmt(v.db)} €**. Ab wie vielen Stück wird der Break-even erreicht?`,
      solve: (v) => v.fk / v.db, unit: "Stk", tolerance: 0.5,
      explanation: (v) => `Break-even = ${fmt(v.fk)} ÷ ${fmt(v.db)} = **${fmt(v.fk / v.db)} Stk**`,
    },
    {
      id: "ko-c-gewinn", title: "Gewinn berechnen",
      vars: { p: [10, 50, 1], kv: [4, 30, 1], fk: [2000, 20000, 500], m: [200, 3000, 50] }, valid: (v) => v.p > v.kv,
      text: (v) => `Preis **${fmt(v.p)} €**, variable Kosten **${fmt(v.kv)} €/Stk**, Fixkosten **${fmt(v.fk)} €**. Es werden **${fmt(v.m)} Stück** verkauft. Wie hoch ist der Gewinn (Verlust negativ)?`,
      solve: (v) => (v.p - v.kv) * v.m - v.fk, unit: "€",
      explanation: (v) => `DB/Stk = ${fmt(v.p)} − ${fmt(v.kv)} = ${fmt(v.p - v.kv)} €\nGewinn = ${fmt(v.p - v.kv)} × ${fmt(v.m)} − ${fmt(v.fk)} = **${fmt((v.p - v.kv) * v.m - v.fk)} €**`,
    },
  ],
};

export default chapter;
