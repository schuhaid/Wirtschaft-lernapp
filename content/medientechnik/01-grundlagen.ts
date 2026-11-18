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
    { id: "gl-ci", term: "Corporate Identity (CI)", definition: "Die Persönlichkeit einer Organisation (Firma, Behörde, Schule). Man erkennt sie an Auftreten, Sprache und Verhalten. Sie wird bewusst gestaltet und wirkt nach innen und außen.", explain: "Stell dir eine Firma wie einen Menschen vor: Sie hat einen eigenen Stil, eine eigene Art zu reden und sich zu benehmen. Genau dieses „Wer bin ich?“ ist die CI – und die Firma legt es absichtlich fest, statt es dem Zufall zu überlassen.", keywords: ["Persönlichkeit", "Organisation", "bewusst"], group: "Grundbegriff" },
    { id: "gl-image", term: "Corporate Image", definition: "Das Fremdbild einer Organisation: Ruf, Ansehen, Erwartungen, Vorurteile und Erfahrungen Dritter. Es lässt sich nur beeinflussen, nicht steuern.", explain: "Das Image ist das, was die Leute über dich denken – egal, was du selbst über dich sagst. Die Firma kann es nicht einfach bestimmen, sie kann nur versuchen, es durch gutes Auftreten in die richtige Richtung zu schieben.", keywords: ["Fremdbild", "Ruf", "beeinflussen"], group: "Grundbegriff" },
    { id: "gl-selbstbild", term: "Selbstbild", definition: "Wie sich die Organisation selbst sieht: was sie sein will und wie sie auftritt. Entspricht der Corporate Identity und lässt sich steuern.", explain: "So, wie man sich im Spiegel sieht bzw. sehen will. Weil die Organisation selbst entscheidet, was sie sein will, kann sie das steuern.", keywords: ["sein will", "Corporate Identity", "steuern"], group: "Bild" },
    { id: "gl-fremdbild", term: "Fremdbild", definition: "Wie andere die Organisation wahrnehmen. Entspricht dem Corporate Image und lässt sich nur beeinflussen.", explain: "So, wie dich andere sehen. Darauf hast du nur indirekt Einfluss – du kannst dich gut verhalten, aber die Meinung bilden sich die anderen selbst.", keywords: ["andere", "Corporate Image", "beeinflussen"], group: "Bild" },
    { id: "gl-leitbild", term: "Leitbild", definition: "Bündelt die Antworten auf die sechs Fragen, mit denen eine Organisation ihr Selbstverständnis klärt. Es ist in der Wir-Form formuliert.", explain: "Eine Art „Steckbrief“ der Organisation: Sie beantwortet sechs Fragen über sich selbst und schreibt die Antworten gesammelt auf – immer mit „wir“.", keywords: ["sechs Fragen", "Selbstverständnis", "Wir-Form"], group: "Grundbegriff" },
    { id: "gl-wir", term: "Wir-Gefühl", definition: "Ohne Wir-Gefühl funktioniert keine CI. Die Organisation besteht aus Menschen mit gemeinsamen Zielen; aus dieser Geschlossenheit entsteht ihre Persönlichkeit.", explain: "Eine Firma ist nichts ohne die Leute, die dort arbeiten. Nur wenn sich alle als Team („wir“) sehen und dasselbe wollen, entsteht eine gemeinsame Persönlichkeit.", keywords: ["gemeinsamen Zielen", "Geschlossenheit", "Persönlichkeit"], group: "Grundbegriff" },
    { id: "gl-luecke", term: "Lücke zwischen Selbst- und Fremdbild", definition: "Selbstbild und Fremdbild decken sich nie ganz. Diese Lücke ist das Arbeitsfeld von Mediengestalter:innen.", explain: "Was die Firma sein will und was die Leute über sie denken, ist nie ganz dasselbe. Diese Lücke möglichst klein zu machen ist der Job von Mediengestalter:innen.", keywords: ["nie ganz", "Arbeitsfeld", "Mediengestalter"], group: "Bild" },
    { id: "gl-f1", term: "Leitbild-Frage 1", definition: "Wie sehen wir uns selbst?", explain: "Merkhilfe: Die Reihenfolge geht von innen nach außen – zuerst schaut man sich selbst an (Frage 1), dann wie andere einen sehen (Frage 2).", keywords: ["selbst"], group: "Leitbildfrage" },
    { id: "gl-f2", term: "Leitbild-Frage 2", definition: "Wie nehmen uns andere wahr?", explain: "Frage 2 schaut auf das Fremdbild, also das Image.", keywords: ["andere"], group: "Leitbildfrage" },
    { id: "gl-f3", term: "Leitbild-Frage 3", definition: "Welche Ziele haben wir?", explain: "Frage 3: Wo wollen wir hin? Erst wenn man sich selbst und das Fremdbild kennt, setzt man Ziele.", keywords: ["Ziele"], group: "Leitbildfrage" },
    { id: "gl-f4", term: "Leitbild-Frage 4", definition: "Was erwartet man von uns?", explain: "Frage 4 dreht die Sicht um: Was wollen andere (Kund:innen, Eltern …) von uns?", keywords: ["erwartet"], group: "Leitbildfrage" },
    { id: "gl-f5", term: "Leitbild-Frage 5", definition: "Wie erfüllen wir diese Erwartungen?", explain: "Frage 5 folgt direkt auf Frage 4: Erst die Erwartungen kennen, dann überlegen, wie man sie erfüllt.", keywords: ["erfüllen"], group: "Leitbildfrage" },
    { id: "gl-f6", term: "Leitbild-Frage 6", definition: "Wodurch werden wir besser als der Mitbewerb?", explain: "Die letzte Frage ist die Abgrenzung von der Konkurrenz: Was macht uns besser als die anderen?", keywords: ["Mitbewerb"], group: "Leitbildfrage" },
  ],
  facts: [
    { id: "gl-t1", statement: "Die Corporate Identity entsteht von allein, wenn eine Firma lange genug besteht.", isTrue: false, correction: "Die CI entsteht **nicht von allein** – sie wird **bewusst gestaltet**." },
    { id: "gl-t2", statement: "Die CI wirkt nach innen und nach außen gleichermaßen.", isTrue: true, correction: "Die CI betrifft sowohl Mitarbeitende (innen) als auch Kund:innen und Öffentlichkeit (außen)." },
    { id: "gl-t3", statement: "Das Corporate Image lässt sich von der Organisation genau steuern.", isTrue: false, correction: "Das Image (Fremdbild) lässt sich **nur beeinflussen**. Steuerbar ist die Identity (Selbstbild)." },
    { id: "gl-t4", statement: "Selbstbild und Fremdbild decken sich bei guter Arbeit vollständig.", isTrue: false, correction: "Sie decken sich **nie ganz** – die Lücke ist das Arbeitsfeld der Mediengestalter:innen." },
    { id: "gl-t5", statement: "Vorurteile und Erfahrungen Dritter gehören zum Corporate Image.", isTrue: true, correction: "Das Image ist das **Fremdbild** – dazu gehören Ruf, Ansehen, Erwartungen, **Vorurteile und Erfahrungen Dritter**." },
    { id: "gl-t6", statement: "Die Leitbild-Fragen werden in der Wir-Form gestellt, weil es ohne Wir-Gefühl keine CI gibt.", isTrue: true, correction: "Die Organisation besteht aus Menschen mit **gemeinsamen Zielen** – ohne Wir-Gefühl keine CI." },
    { id: "gl-t7", statement: "Auch eine Schule oder eine Behörde kann eine Corporate Identity haben.", isTrue: true, correction: "Jede **Organisation** hat eine Persönlichkeit – laut Skript ausdrücklich auch Behörden und Schulen." },
    { id: "gl-t8", statement: "Zum Leitbild gehören fünf Fragen.", isTrue: false, correction: "Es sind **sechs** Fragen." },
    { id: "gl-t9", statement: "Corporate Identity bedeutet dasselbe wie Fremdbild.", isTrue: false, correction: "CI = **Selbstbild**. Das Fremdbild ist das **Corporate Image**." },
  ],
  questions: [
    { id: "gl-q1", type: "order", question: "Bring die **6 Leitbild-Fragen** in die Reihenfolge aus dem Skript.", items: ["Wie sehen wir uns selbst?", "Wie nehmen uns andere wahr?", "Welche Ziele haben wir?", "Was erwartet man von uns?", "Wie erfüllen wir diese Erwartungen?", "Wodurch werden wir besser als der Mitbewerb?"], explanation: "Von **innen** (Wie sehen wir uns?) über **außen** (Wie sehen uns andere?) zu **Zielen**, **Erwartungen**, deren **Erfüllung** und schließlich der **Abgrenzung vom Mitbewerb**." },
    { id: "gl-q2", type: "mc", question: "Was gehört zum **Corporate Image**?", options: ["Ruf und Ansehen", "Vorurteile", "Erfahrungen Dritter", "Was wir sein wollen", "Unsere Hausfarben"], correct: [0, 1, 2], explanation: "„Was wir sein wollen“ ist das Selbstbild (Identity). Hausfarben gehören zum Corporate Design." },
    { id: "gl-q3", type: "mc", question: "Woran erkennt man laut Skript die Persönlichkeit einer Organisation?", options: ["Auftreten", "Sprache", "Verhalten", "Aktienkurs"], correct: [0, 1, 2], explanation: "**Auftreten, Sprache und Verhalten** – wie bei einem Menschen." },
    { id: "gl-q4", type: "open", question: "Erkläre den Unterschied zwischen **Corporate Identity** und **Corporate Image**.", answer: "Die Corporate Identity ist das Selbstbild – was die Organisation sein will und wie sie auftritt; sie lässt sich steuern. Das Corporate Image ist das Fremdbild – Ruf, Ansehen, Erwartungen, Vorurteile und Erfahrungen Dritter; es lässt sich nur beeinflussen. Beide decken sich nie ganz.", keywords: ["Selbstbild", "Fremdbild", "steuern", "beeinflussen"] },
    { id: "gl-q5", type: "open", question: "Warum sind die Leitbild-Fragen in der **Wir-Form** formuliert?", answer: "Ohne Wir-Gefühl funktioniert keine CI. Die Organisation besteht aus den Menschen darin, die gemeinsame Ziele verfolgen. Aus dieser Geschlossenheit entsteht die Persönlichkeit der Organisation.", keywords: ["Wir-Gefühl", "Menschen", "gemeinsame Ziele", "Geschlossenheit"] },
    { id: "gl-q6", type: "mc", question: "Was ist laut Skript das **Arbeitsfeld von Mediengestalter:innen**?", options: ["Die Lücke zwischen Selbstbild und Fremdbild", "Die Buchhaltung", "Nur das Logo", "Die Rechtsform der Firma"], correct: [0], explanation: "Selbstbild und Fremdbild decken sich nie ganz – genau diese **Lücke** bearbeiten Mediengestalter:innen." },
    { id: "gl-q7", type: "open", question: "Eine HTL sieht sich als „modern und praxisnah“, viele Eltern halten sie aber für „altmodisch“. Ordne die beiden Sichtweisen den Fachbegriffen zu und sag, was man tun kann.", answer: "„Modern und praxisnah“ ist das Selbstbild = Corporate Identity, „altmodisch“ das Fremdbild = Corporate Image. Die Schule kann das Image nicht steuern, nur beeinflussen – z. B. durch Auftreten, Kommunikation und Verhalten (Tag der offenen Tür, Website). Die Lücke ist das Arbeitsfeld der Mediengestaltung.", keywords: ["Selbstbild", "Fremdbild", "Identity", "Image", "beeinflussen"] },
  ],
};

export default chapter;
