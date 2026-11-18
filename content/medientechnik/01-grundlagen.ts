import type { Chapter } from "@/lib/types";

// Skript „Corporate Identity – Zusammenfassung“, Kap. 1–2
const chapter: Chapter = {
  id: "ci-grundlagen",
  title: "1 · CI, Leitbild, Identity & Image",
  stoff: `
*Skript Kap. 1–2*

## Was ist Corporate Identity?
Jeder Mensch hat eine **Persönlichkeit**: eine eigene Art zu reden, sich zu kleiden und mit anderen umzugehen. Daran erkennt man ihn – sogar aus der Entfernung.

Die **Corporate Identity (CI)** ist die **Persönlichkeit einer Organisation**. Eine Firma, eine Behörde oder eine Schule erkennt man an ihrem **Auftreten, ihrer Sprache und ihrem Verhalten**.

- Die CI **entsteht nicht von allein** – sie wird **bewusst gestaltet**.
- Sie wirkt **nach innen** (auf die Mitarbeitenden) **und nach außen** (auf Kund:innen, Öffentlichkeit) **gleichermaßen**.

> Merksatz: CI = die **Persönlichkeit** einer Organisation, **bewusst gestaltet**, wirkt **nach innen und außen**.

## Die 6 Fragen zum Leitbild
Um ihr **Selbstverständnis** zu klären, beantwortet eine Organisation **sechs Fragen**. Die Antworten werden häufig in einem **Leitbild** gebündelt.

| Nr. | Frage | Worum geht's? |
|---|---|---|
| 1 | **Wie sehen wir uns selbst?** | Selbstbild |
| 2 | **Wie nehmen uns andere wahr?** | Fremdbild |
| 3 | **Welche Ziele haben wir?** | Ziele |
| 4 | **Was erwartet man von uns?** | Erwartungen anderer |
| 5 | **Wie erfüllen wir diese Erwartungen?** | Umsetzung |
| 6 | **Wodurch werden wir besser als der Mitbewerb?** | Abgrenzung von der Konkurrenz |

### Warum stehen die Fragen in der Wir-Form?
- **Ohne Wir-Gefühl funktioniert keine Corporate Identity.**
- Die Organisation **besteht aus den Menschen darin** – sie verfolgen **gemeinsame Ziele**.
- Aus dieser **Geschlossenheit** entsteht die **Persönlichkeit** der Organisation.

*Beispiel Schule:* „Wir sind eine HTL, die praxisnah ausbildet“ (Frage 1) – aber nehmen Eltern uns auch so wahr (Frage 2)?

## Identity und Image
Eine Organisation **sendet** ein Bild von sich aus. Was bei den Leuten **ankommt**, ist etwas anderes.

| | **Selbstbild** | **Fremdbild** |
|---|---|---|
| Begriff | **Corporate Identity** | **Corporate Image** |
| Inhalt | was wir **sein wollen**, wie wir **auftreten** | **Ruf, Ansehen, Erwartungen, Vorurteile, Erfahrungen Dritter** |
| Einfluss | lässt sich **steuern** | lässt sich nur **beeinflussen** |

- Selbstbild und Fremdbild **decken sich nie ganz**.
- Genau diese **Lücke** ist das **Arbeitsfeld von Mediengestalter:innen**: Sie versuchen, das Image möglichst nah an die gewünschte Identity heranzubringen.

> Merksatz: **Identity = Selbstbild (steuerbar)**, **Image = Fremdbild (nur beeinflussbar)**.

*Beispiel:* Ein Fast-Food-Konzern sieht sich als „frisch und nachhaltig“ (Identity). Viele Menschen verbinden ihn aber mit „ungesund“ (Image). Werbung kann das Image beeinflussen, aber nicht einfach festlegen.
`,
  summary: `
### Corporate Identity
- **CI = Persönlichkeit einer Organisation** (Firma, Behörde, Schule), erkennbar an **Auftreten, Sprache, Verhalten**.
- Wird **bewusst gestaltet**, wirkt **nach innen und außen**.

### Leitbild – 6 Fragen (in Wir-Form)
1. Wie sehen wir uns selbst?
2. Wie nehmen uns andere wahr?
3. Welche Ziele haben wir?
4. Was erwartet man von uns?
5. Wie erfüllen wir diese Erwartungen?
6. Wodurch werden wir besser als der Mitbewerb?

**Wir-Form**, weil es ohne **Wir-Gefühl** keine CI gibt: Menschen mit **gemeinsamen Zielen** → **Geschlossenheit** → Persönlichkeit.

### Identity vs. Image
| | Corporate Identity | Corporate Image |
|---|---|---|
| Bild | **Selbstbild** | **Fremdbild** |
| Inhalt | was wir sein wollen, wie wir auftreten | Ruf, Ansehen, Erwartungen, Vorurteile, Erfahrungen Dritter |
| Einfluss | **steuerbar** | nur **beeinflussbar** |

Die **Lücke** zwischen beiden = **Arbeitsfeld der Mediengestalter:innen**.
`,
  concepts: [
    { id: "gl-ci", term: "Corporate Identity (CI)", definition: "Die Persönlichkeit einer Organisation (Firma, Behörde, Schule). Man erkennt sie an Auftreten, Sprache und Verhalten. Sie wird bewusst gestaltet und wirkt nach innen und außen.", keywords: ["Persönlichkeit", "Organisation", "bewusst"], group: "Grundbegriff" },
    { id: "gl-image", term: "Corporate Image", definition: "Das Fremdbild einer Organisation: Ruf, Ansehen, Erwartungen, Vorurteile und Erfahrungen Dritter. Es lässt sich nur beeinflussen, nicht steuern.", keywords: ["Fremdbild", "Ruf", "beeinflussen"], group: "Grundbegriff" },
    { id: "gl-selbstbild", term: "Selbstbild", definition: "Wie sich die Organisation selbst sieht: was sie sein will und wie sie auftritt. Entspricht der Corporate Identity und lässt sich steuern.", keywords: ["sein will", "Corporate Identity", "steuern"], group: "Bild" },
    { id: "gl-fremdbild", term: "Fremdbild", definition: "Wie andere die Organisation wahrnehmen. Entspricht dem Corporate Image und lässt sich nur beeinflussen.", keywords: ["andere", "Corporate Image", "beeinflussen"], group: "Bild" },
    { id: "gl-leitbild", term: "Leitbild", definition: "Bündelt die Antworten auf die sechs Fragen, mit denen eine Organisation ihr Selbstverständnis klärt. Es ist in der Wir-Form formuliert.", keywords: ["sechs Fragen", "Selbstverständnis", "Wir-Form"], group: "Grundbegriff" },
    { id: "gl-wir", term: "Wir-Gefühl", definition: "Ohne Wir-Gefühl funktioniert keine CI. Die Organisation besteht aus Menschen mit gemeinsamen Zielen; aus dieser Geschlossenheit entsteht ihre Persönlichkeit.", keywords: ["gemeinsamen Zielen", "Geschlossenheit", "Persönlichkeit"], group: "Grundbegriff" },
    { id: "gl-luecke", term: "Lücke zwischen Selbst- und Fremdbild", definition: "Selbstbild und Fremdbild decken sich nie ganz. Diese Lücke ist das Arbeitsfeld von Mediengestalter:innen.", keywords: ["nie ganz", "Arbeitsfeld", "Mediengestalter"], group: "Bild" },
    { id: "gl-f1", term: "Leitbild-Frage 1", definition: "Wie sehen wir uns selbst?", keywords: ["selbst"], group: "Leitbildfrage" },
    { id: "gl-f2", term: "Leitbild-Frage 2", definition: "Wie nehmen uns andere wahr?", keywords: ["andere"], group: "Leitbildfrage" },
    { id: "gl-f3", term: "Leitbild-Frage 3", definition: "Welche Ziele haben wir?", keywords: ["Ziele"], group: "Leitbildfrage" },
    { id: "gl-f4", term: "Leitbild-Frage 4", definition: "Was erwartet man von uns?", keywords: ["erwartet"], group: "Leitbildfrage" },
    { id: "gl-f5", term: "Leitbild-Frage 5", definition: "Wie erfüllen wir diese Erwartungen?", keywords: ["erfüllen"], group: "Leitbildfrage" },
    { id: "gl-f6", term: "Leitbild-Frage 6", definition: "Wodurch werden wir besser als der Mitbewerb?", keywords: ["Mitbewerb"], group: "Leitbildfrage" },
  ],
  facts: [
    { id: "gl-t1", statement: "Die Corporate Identity entsteht von allein, wenn eine Firma lange genug besteht.", isTrue: false, correction: "Die CI entsteht **nicht von allein** – sie wird **bewusst gestaltet**." },
    { id: "gl-t2", statement: "Die CI wirkt nach innen und nach außen gleichermaßen.", isTrue: true },
    { id: "gl-t3", statement: "Das Corporate Image lässt sich von der Organisation genau steuern.", isTrue: false, correction: "Das Image (Fremdbild) lässt sich **nur beeinflussen**. Steuerbar ist die Identity (Selbstbild)." },
    { id: "gl-t4", statement: "Selbstbild und Fremdbild decken sich bei guter Arbeit vollständig.", isTrue: false, correction: "Sie decken sich **nie ganz** – die Lücke ist das Arbeitsfeld der Mediengestalter:innen." },
    { id: "gl-t5", statement: "Vorurteile und Erfahrungen Dritter gehören zum Corporate Image.", isTrue: true },
    { id: "gl-t6", statement: "Die Leitbild-Fragen werden in der Wir-Form gestellt, weil es ohne Wir-Gefühl keine CI gibt.", isTrue: true },
    { id: "gl-t7", statement: "Auch eine Schule oder eine Behörde kann eine Corporate Identity haben.", isTrue: true },
    { id: "gl-t8", statement: "Zum Leitbild gehören fünf Fragen.", isTrue: false, correction: "Es sind **sechs** Fragen." },
    { id: "gl-t9", statement: "Corporate Identity bedeutet dasselbe wie Fremdbild.", isTrue: false, correction: "CI = **Selbstbild**. Das Fremdbild ist das **Corporate Image**." },
  ],
  questions: [
    { id: "gl-q1", type: "order", question: "Bring die **6 Leitbild-Fragen** in die Reihenfolge aus dem Skript.", items: ["Wie sehen wir uns selbst?", "Wie nehmen uns andere wahr?", "Welche Ziele haben wir?", "Was erwartet man von uns?", "Wie erfüllen wir diese Erwartungen?", "Wodurch werden wir besser als der Mitbewerb?"] },
    { id: "gl-q2", type: "mc", question: "Was gehört zum **Corporate Image**?", options: ["Ruf und Ansehen", "Vorurteile", "Erfahrungen Dritter", "Was wir sein wollen", "Unsere Hausfarben"], correct: [0, 1, 2], explanation: "„Was wir sein wollen“ ist das Selbstbild (Identity). Hausfarben gehören zum Corporate Design." },
    { id: "gl-q3", type: "mc", question: "Woran erkennt man laut Skript die Persönlichkeit einer Organisation?", options: ["Auftreten", "Sprache", "Verhalten", "Aktienkurs"], correct: [0, 1, 2] },
    { id: "gl-q4", type: "open", question: "Erkläre den Unterschied zwischen **Corporate Identity** und **Corporate Image**.", answer: "Die Corporate Identity ist das Selbstbild – was die Organisation sein will und wie sie auftritt; sie lässt sich steuern. Das Corporate Image ist das Fremdbild – Ruf, Ansehen, Erwartungen, Vorurteile und Erfahrungen Dritter; es lässt sich nur beeinflussen. Beide decken sich nie ganz.", keywords: ["Selbstbild", "Fremdbild", "steuern", "beeinflussen"] },
    { id: "gl-q5", type: "open", question: "Warum sind die Leitbild-Fragen in der **Wir-Form** formuliert?", answer: "Ohne Wir-Gefühl funktioniert keine CI. Die Organisation besteht aus den Menschen darin, die gemeinsame Ziele verfolgen. Aus dieser Geschlossenheit entsteht die Persönlichkeit der Organisation.", keywords: ["Wir-Gefühl", "Menschen", "gemeinsame Ziele", "Geschlossenheit"] },
    { id: "gl-q6", type: "mc", question: "Was ist laut Skript das **Arbeitsfeld von Mediengestalter:innen**?", options: ["Die Lücke zwischen Selbstbild und Fremdbild", "Die Buchhaltung", "Nur das Logo", "Die Rechtsform der Firma"], correct: [0] },
    { id: "gl-q7", type: "open", question: "Eine HTL sieht sich als „modern und praxisnah“, viele Eltern halten sie aber für „altmodisch“. Ordne die beiden Sichtweisen den Fachbegriffen zu und sag, was man tun kann.", answer: "„Modern und praxisnah“ ist das Selbstbild = Corporate Identity, „altmodisch“ das Fremdbild = Corporate Image. Die Schule kann das Image nicht steuern, nur beeinflussen – z. B. durch Auftreten, Kommunikation und Verhalten (Tag der offenen Tür, Website). Die Lücke ist das Arbeitsfeld der Mediengestaltung.", keywords: ["Selbstbild", "Fremdbild", "Identity", "Image", "beeinflussen"] },
  ],
};

export default chapter;
