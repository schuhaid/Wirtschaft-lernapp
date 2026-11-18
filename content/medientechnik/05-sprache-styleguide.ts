import type { Chapter } from "@/lib/types";

// Skript „Corporate Identity – Zusammenfassung“, Kap. 6–8
const chapter: Chapter = {
  id: "ci-sprache",
  title: "5 · Sprache, Styleguide & Wirkung",
  stoff: `
*Skript Kap. 6–8*

## Corporate Language und Tonalität
Kommunikation ist **nicht nur eine Frage der Kanäle, sondern der Stimme**. Festgelegt wird unter anderem:
- **Duzen oder siezen?**
- Welche **Begriffe** sind **gesetzt**, welche **tabu**?
- Wie viel **Fachsprache** verträgt die Zielgruppe?
- Wie **klingt die Marke im Beschwerdefall**?

*Beispiel (Zusatz):* Ikea duzt seine Kund:innen konsequent – das gehört zur Tonalität der Marke.

### Brand Story
Dazu kommt die **Brand Story**: eine **Erzählung**, die **die Kundin ins Zentrum** stellt **statt das Produkt**.
- **Ohne klare Botschaft** versteht niemand, was ein Angebot bringt.
- **Marken ohne Geschichte gehen in der Informationsflut unter.**

## Styleguide / Brand Manual
- **Styleguide** und **Brand Manual** (auch **Brand Guidelines**) meinen **dasselbe Dokument**. In der **Agenturpraxis** hört man eher **Brand Manual**, im **Lehrbuch Styleguide**.
- Der Styleguide ist das **Regelwerk der CI** – wie die **Bedienungsanleitung eines Geräts**. **Ein Konzept, das niemand umsetzen kann, bleibt wirkungslos.**

### Die Perspektive ist entscheidend
- **Entworfen** wird die CI von **Medienleuten**, **umgesetzt** wird sie **täglich von allen anderen**.
- Mit Begriffen wie **„Satzspiegel“** oder **„Schriftgrad“** können die wenigsten etwas anfangen.
- Also: **laienverständlich formulieren, ohne inhaltlich zu verflachen.**

### Was drinsteht
- **Was gilt und was untersagt ist** – z. B. **verzerrte, gestauchte, umgefärbte, angeschnittene oder gedrehte Logos**
- **Warum etwas so gestaltet ist** – so lässt sich die Gestaltung an die **Leitziele rückbinden**, z. B. **Offenheit, Vertrauen, Zuverlässigkeit, Wärme, Nähe, Dynamik, Modernität**

## Was CI bewirkt

| **Nach innen** | **Nach außen** |
|---|---|
| **Transparente Prozesse** führen zu **besserer Zusammenarbeit**. | Ein **konsistenter Auftritt** bleibt **schneller im Gedächtnis**. |
| **Gemeinschaftsgefühl und Markenverständnis** steigern die **Leistung**. | Ein **eigenständiges Markenbild** grenzt **vom Mitbewerb ab**. |
| **Höhere Zufriedenheit** bindet **Mitarbeitende** ans Unternehmen. | **Klare Botschaften** machen den **Nutzen verständlich**. |
| Eine **klare Vision** gibt allen **dasselbe Ziel**. | Eine **greifbare Identität** erzeugt **Kundenbindung**. |
| Ein **gemeinsames Markenverständnis** macht **Kommunikation effizient**. | Eine **gelebte Kultur** zieht **gute Bewerber:innen** an. |
| | **Neue Produkte profitieren** vom **bestehenden Markenimage**. |
`,
  summary: `
### Corporate Language & Tonalität
Nicht nur Kanäle, sondern **Stimme** festlegen: **duzen/siezen**, **gesetzte und tabuisierte Begriffe**, **wie viel Fachsprache**, **Klang im Beschwerdefall**.

**Brand Story:** Erzählung mit **der Kundin im Zentrum statt dem Produkt**. Ohne klare Botschaft versteht niemand den Nutzen; Marken ohne Geschichte gehen in der **Informationsflut** unter.

### Styleguide = Brand Manual = Brand Guidelines
- **dasselbe Dokument** (Agentur: Brand Manual, Lehrbuch: Styleguide)
- **Regelwerk der CI**, wie eine **Bedienungsanleitung** – ein nicht umsetzbares Konzept bleibt wirkungslos
- **Entworfen** von Medienleuten, **umgesetzt** von allen → **laienverständlich, ohne zu verflachen**
- Inhalt: **was gilt / was untersagt ist** (keine verzerrten, gestauchten, umgefärbten, angeschnittenen, gedrehten Logos) + **warum** (Rückbindung an **Leitziele** wie Offenheit, Vertrauen, Zuverlässigkeit …)

### Wirkung der CI
| Nach innen | Nach außen |
|---|---|
| transparente Prozesse → bessere Zusammenarbeit | konsistenter Auftritt → schneller im Gedächtnis |
| Gemeinschaftsgefühl → mehr Leistung | eigenständiges Markenbild → Abgrenzung vom Mitbewerb |
| Zufriedenheit → Mitarbeiterbindung | klare Botschaften → Nutzen verständlich |
| klare Vision → gleiches Ziel | greifbare Identität → Kundenbindung |
| gemeinsames Markenverständnis → effiziente Kommunikation | gelebte Kultur → gute Bewerber:innen |
| | neue Produkte profitieren vom Image |
`,
  concepts: [
    { id: "sw-language", term: "Corporate Language", definition: "Die festgelegte Sprache und Stimme einer Marke: duzen oder siezen, gesetzte und tabuisierte Begriffe, Menge an Fachsprache, Klang im Beschwerdefall.", explain: "Die Marke legt fest, WIE sie spricht: per du oder per Sie, welche Wörter sie verwendet oder vermeidet, wie fachlich sie formuliert und wie sie bei Beschwerden reagiert.", keywords: ["Stimme", "siezen", "Fachsprache"], group: "Sprache" },
    { id: "sw-ton", term: "Tonalität", definition: "Wie eine Marke klingt – Kommunikation ist nicht nur eine Frage der Kanäle, sondern der Stimme.", explain: "Der „Klang“ einer Marke – locker, seriös, frech, freundlich? Es geht nicht nur darum, WO man kommuniziert, sondern WIE.", keywords: ["klingt", "Kanäle", "Stimme"], group: "Sprache" },
    { id: "sw-story", term: "Brand Story", definition: "Eine Erzählung, die die Kundin ins Zentrum stellt statt das Produkt. Marken ohne Geschichte gehen in der Informationsflut unter.", explain: "Die Marke erzählt eine Geschichte, in der die Kundin die Hauptrolle spielt – nicht das Produkt. So versteht man, was einem das Angebot bringt, und vergisst die Marke nicht gleich wieder.", keywords: ["Erzählung", "Kundin", "Produkt", "Informationsflut"], group: "Sprache" },
    { id: "sw-styleguide", term: "Styleguide", definition: "Das Regelwerk der CI, wie die Bedienungsanleitung eines Geräts. Derselbe Begriff wie Brand Manual bzw. Brand Guidelines; im Lehrbuch spricht man eher vom Styleguide.", explain: "Die „Gebrauchsanleitung“ für die CI: Darin steht genau, wie Logo, Farben, Schriften usw. verwendet werden – damit jede:r im Unternehmen es richtig macht.", keywords: ["Regelwerk", "Bedienungsanleitung", "Brand Manual"], group: "Dokument" },
    { id: "sw-manual", term: "Brand Manual", definition: "Begriff aus der Agenturpraxis für den Styleguide (auch Brand Guidelines) – es ist dasselbe Dokument.", explain: "Nur ein anderes Wort für den Styleguide. Agenturen sagen eher Brand Manual, Schulbücher eher Styleguide – gemeint ist dasselbe.", keywords: ["Agenturpraxis", "Styleguide"], group: "Dokument" },
    { id: "sw-laien", term: "Laienverständlich formulieren", definition: "Grundsatz für den Styleguide: Die CI wird von Medienleuten entworfen, aber täglich von allen anderen umgesetzt – also verständlich schreiben, ohne inhaltlich zu verflachen.", explain: "Den Styleguide verwenden vor allem Leute, die keine Grafiker:innen sind (Sekretariat, Vertrieb …). Darum: einfach erklären, aber trotzdem nichts Wichtiges weglassen.", keywords: ["Medienleuten", "umgesetzt", "verflachen"], group: "Dokument" },
    { id: "sw-verbote", term: "Unzulässige Logo-Varianten", definition: "Im Styleguide verboten: verzerrte, gestauchte, umgefärbte, angeschnittene oder gedrehte Logos.", explain: "Mit dem Logo darf man nicht herumspielen: nicht verziehen, quetschen, umfärben, abschneiden oder schief stellen.", keywords: ["verzerrte", "umgefärbte", "gedrehte"], group: "Dokument" },
    { id: "sw-leitziele", term: "Leitziele", definition: "Die Ziele, an die der Styleguide jede Gestaltung rückbindet (das Warum), z. B. Offenheit, Vertrauen, Zuverlässigkeit, Wärme, Nähe, Dynamik, Modernität.", explain: "Der Styleguide erklärt auch das „Warum“: z. B. runde Formen, weil die Marke Nähe und Wärme ausstrahlen soll. So verstehen alle den Sinn hinter den Regeln.", keywords: ["rückbindet", "Vertrauen", "Zuverlässigkeit"], group: "Dokument" },
    { id: "sw-innen", term: "Wirkung der CI nach innen", definition: "Bessere Zusammenarbeit durch transparente Prozesse, mehr Leistung durch Gemeinschaftsgefühl, Bindung der Mitarbeitenden, gemeinsames Ziel durch klare Vision, effiziente Kommunikation.", explain: "Was CI im Betrieb selbst bringt: Alle wissen, wofür die Firma steht, arbeiten besser zusammen, fühlen sich wohler und bleiben länger.", keywords: ["Zusammenarbeit", "Leistung", "Mitarbeitenden"], group: "Wirkung" },
    { id: "sw-aussen", term: "Wirkung der CI nach außen", definition: "Konsistenter Auftritt bleibt schneller im Gedächtnis, Abgrenzung vom Mitbewerb, verständlicher Nutzen, Kundenbindung, gute Bewerber:innen, neue Produkte profitieren vom Image.", explain: "Was CI nach außen bringt: Man merkt sich die Marke leichter, unterscheidet sie von der Konkurrenz, versteht ihren Nutzen, bleibt treu – und auch neue Produkte profitieren vom guten Ruf.", keywords: ["Gedächtnis", "Mitbewerb", "Kundenbindung"], group: "Wirkung" },
  ],
  facts: [
    { id: "sw-t1", statement: "Styleguide und Brand Manual sind zwei verschiedene Dokumente.", isTrue: false, correction: "Sie meinen **dasselbe Dokument** (auch Brand Guidelines)." },
    { id: "sw-t2", statement: "In der Agenturpraxis spricht man eher vom Brand Manual, im Lehrbuch vom Styleguide.", isTrue: true, correction: "Beides meint **dasselbe Dokument** – nur der Sprachgebrauch ist verschieden." },
    { id: "sw-t3", statement: "Ein Styleguide sollte vor allem Fachbegriffe wie „Satzspiegel“ verwenden, weil ihn nur Grafiker:innen lesen.", isTrue: false, correction: "Umgesetzt wird die CI **täglich von allen anderen** → **laienverständlich formulieren**, ohne zu verflachen." },
    { id: "sw-t4", statement: "Ein Styleguide erklärt auch, warum etwas so gestaltet ist.", isTrue: true, correction: "Der Styleguide enthält **was gilt / was verboten ist** UND **warum** – damit die Gestaltung an die Leitziele rückgebunden ist." },
    { id: "sw-t5", statement: "Die Brand Story stellt das Produkt ins Zentrum.", isTrue: false, correction: "Sie stellt **die Kundin ins Zentrum statt das Produkt**." },
    { id: "sw-t6", statement: "Marken ohne Geschichte gehen in der Informationsflut unter.", isTrue: true, correction: "Ohne klare Botschaft und Geschichte merkt sich niemand die Marke – sie geht in der **Informationsflut** unter." },
    { id: "sw-t7", statement: "Bei der Corporate Language wird auch festgelegt, ob geduzt oder gesiezt wird.", isTrue: true, correction: "Die Corporate Language legt fest: **duzen oder siezen**, Begriffe, Fachsprache, Ton im Beschwerdefall." },
    { id: "sw-t8", statement: "Ein konsistenter Auftritt bleibt schneller im Gedächtnis.", isTrue: true, correction: "Wenn eine Marke überall **gleich auftritt**, merkt man sie sich schneller." },
    { id: "sw-t9", statement: "Eine gelebte Kultur zieht gute Bewerber:innen an – das ist eine Wirkung nach außen.", isTrue: true, correction: "Gute Kultur spricht sich herum (Bewertungsportale, Ehemalige) → **gute Bewerber:innen** = Wirkung **nach außen**." },
    { id: "sw-t10", statement: "Ein gedrehtes oder umgefärbtes Logo ist erlaubt, solange es gut aussieht.", isTrue: false, correction: "Verzerrte, gestauchte, **umgefärbte**, angeschnittene oder **gedrehte** Logos sind **untersagt**." },
    { id: "sw-t11", statement: "Ein Konzept, das niemand umsetzen kann, bleibt wirkungslos.", isTrue: true, correction: "Darum muss der Styleguide **laienverständlich** und umsetzbar sein – sonst bleibt er wirkungslos." },
    { id: "sw-t12", statement: "Neue Produkte profitieren vom bestehenden Markenimage.", isTrue: true, correction: "Wer der Marke schon vertraut, vertraut auch ihren **neuen Produkten** eher." },
  ],
  questions: [
    { id: "sw-q1", type: "mc", question: "Was wird bei der **Corporate Language** festgelegt?", options: ["Duzen oder siezen", "Gesetzte und tabuisierte Begriffe", "Wie viel Fachsprache die Zielgruppe verträgt", "Wie die Marke im Beschwerdefall klingt", "Der Grundlinienabstand"], correct: [0, 1, 2, 3], explanation: "Der Grundlinienabstand gehört zum **Gestaltungsraster**, nicht zur Sprache." },
    { id: "sw-q2", type: "mc", question: "Welche Logo-Veränderungen sind laut Styleguide **untersagt**?", options: ["verzerrt", "gestaucht", "umgefärbt", "angeschnitten", "gedreht"], correct: [0, 1, 2, 3, 4], explanation: "**Alle fünf** sind verboten: verzerrt, gestaucht, umgefärbt, angeschnitten, gedreht." },
    { id: "sw-q3", type: "mc", question: "Welche Wirkungen hat CI **nach innen**?", options: ["Bessere Zusammenarbeit durch transparente Prozesse", "Höhere Zufriedenheit bindet Mitarbeitende", "Effiziente Kommunikation durch gemeinsames Markenverständnis", "Abgrenzung vom Mitbewerb", "Kundenbindung"], correct: [0, 1, 2], explanation: "Abgrenzung vom Mitbewerb und Kundenbindung wirken **nach außen**." },
    { id: "sw-q4", type: "mc", question: "Welche Wirkungen hat CI **nach außen**?", options: ["Konsistenter Auftritt bleibt schneller im Gedächtnis", "Klare Botschaften machen den Nutzen verständlich", "Neue Produkte profitieren vom Markenimage", "Eine klare Vision gibt allen dasselbe Ziel"], correct: [0, 1, 2], explanation: "„Klare Vision gibt allen dasselbe Ziel“ wirkt **nach innen**." },
    { id: "sw-q5", type: "open", question: "Warum muss ein Styleguide **laienverständlich** sein?", answer: "Die CI wird von Medienleuten entworfen, aber täglich von allen anderen umgesetzt. Begriffe wie „Satzspiegel“ oder „Schriftgrad“ verstehen die wenigsten. Ein Konzept, das niemand umsetzen kann, bleibt wirkungslos – darum laienverständlich, ohne inhaltlich zu verflachen.", keywords: ["Medienleuten", "umgesetzt", "Satzspiegel", "wirkungslos", "verflachen"] },
    { id: "sw-q6", type: "open", question: "Was steht in einem **Styleguide / Brand Manual**? Nenne die zwei Arten von Inhalten mit Beispielen.", answer: "1. Was gilt und was untersagt ist – z. B. keine verzerrten, gestauchten, umgefärbten, angeschnittenen oder gedrehten Logos. 2. Warum etwas so gestaltet ist – so wird die Gestaltung an die Leitziele rückgebunden, z. B. Offenheit, Vertrauen, Zuverlässigkeit, Wärme, Nähe, Dynamik, Modernität.", keywords: ["untersagt", "Logos", "warum", "Leitziele"] },
    { id: "sw-q7", type: "open", question: "Was ist eine **Brand Story** und warum braucht eine Marke eine?", answer: "Eine Erzählung, die die Kundin ins Zentrum stellt statt das Produkt. Ohne klare Botschaft versteht niemand, was ein Angebot bringt, und Marken ohne Geschichte gehen in der Informationsflut unter.", keywords: ["Erzählung", "Kundin", "Produkt", "Informationsflut"] },
    { id: "sw-q8", type: "mc", question: "Womit vergleicht das Skript den **Styleguide**?", options: ["Mit der Bedienungsanleitung eines Geräts", "Mit einem Kochbuch", "Mit einem Werbeplakat", "Mit einem Vertrag"], correct: [0], explanation: "Wie eine **Bedienungsanleitung**: Ein Konzept, das niemand umsetzen kann, bleibt wirkungslos." },
  ],
};

export default chapter;
