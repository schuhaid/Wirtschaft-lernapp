import type { Chapter } from "@/lib/types";

// Skript „Corporate Identity – Zusammenfassung“, Kap. 4
const chapter: Chapter = {
  id: "ci-markenstrategie",
  title: "3 · Markenstrategie",
  stoff: `
*Skript Kap. 4*

## Das Eisberg-Modell
Das **Eisberg-Modell** zeigt, was sichtbar ist und was darunter liegt:

| | Was liegt dort? |
|---|---|
| **Über der Wasserlinie (sichtbar)** | was die **Zielgruppe wahrnimmt**: Corporate **Design**, Corporate **Communication**, Corporate **Behaviour**, Corporate **Culture** |
| **Unter der Wasserlinie (unsichtbar)** | die **Markenstrategie** – das **Fundament aller Entscheidungen**: Brand Purpose, Vision, Mission, Positionierung, Kompetenz, Markenwerte, Markenname |

- Der unsichtbare Teil ist **viel größer** und **entscheidet, was über Wasser überhaupt möglich ist**.

> **Ohne Strategie unter der Wasserlinie bleibt jede Gestaltung darüber beliebig.**

## Bestandteile der Markenstrategie

| Begriff | Bedeutung |
|---|---|
| **Positionierung** | **Wo steht die Marke im Markt**, und hält das mit den **vorhandenen Mitteln**? |
| **Kompetenz** | Welchen **Nutzen** bietet die Marke, **abgegrenzt vom Mitbewerb**? |
| **Mission** | Was die Marke **konkret tut**, gerichtet an **Kund:innen**, **in einem Satz** |
| **Vision** | Was die Organisation **erreichen will**, als **Leitstern für die Mitarbeitenden** |
| **Markenwerte** | der **Prüfstein** für Botschaften, Produkte und Kampagnen |
| **Brand Purpose** | **Warum** es die Marke **über den eigenen Zweck hinaus** gibt |
| **Markenname** | oft der **erste Kontaktpunkt**, noch **vor jedem Produkt** |

*Eselsbrücke:* **Mission = jetzt, für Kund:innen** („Was tun wir?“) · **Vision = Zukunft, für Mitarbeitende** („Wo wollen wir hin?“) · **Purpose = Warum?** (für alle)

## Purpose, Mission und Vision im Vergleich

| | **Purpose** | **Mission** | **Vision** |
|---|---|---|---|
| **Inhalt** | **Daseinsberechtigung**: Was trägt die Organisation zur **Gesellschaft** bei? | **konkreter Nutzen** von Produkten und Leistungen | **künftige Positionierung** der Marke |
| **Zielgruppe** | **alle Stakeholder** | **Kund:innen** | **Mitarbeitende** |
| **Richtung** | **intern und extern** | **eher extern** | **eher intern** |
| **Zeithorizont** | **übergeordnet** | **kurzfristig** | **langfristig** |

### Beispiel Nike
- **Zweck** von Nike: Sportbekleidung und Schuhe herstellen.
- **Purpose** der Marke: **jeden zum Sportler zu machen**.

Der Unterschied: Der **Zweck** beschreibt, *was* eine Firma macht. Der **Purpose** beschreibt, *warum* es die Marke **über diesen Zweck hinaus** gibt.

*Übungsbeispiel (nicht aus dem Skript):* Eine Fahrradwerkstatt in Graz
- Purpose: „Wir wollen, dass mehr Menschen in der Stadt aufs Rad steigen.“
- Mission: „Wir reparieren dein Rad schnell und zu fairen Preisen.“
- Vision: „In fünf Jahren sind wir die erste Adresse für Stadträder in der Steiermark.“
`,
  summary: `
### Eisberg-Modell
- **Sichtbar** (über Wasser): Design, Communication, Behaviour, Culture – was die **Zielgruppe wahrnimmt**
- **Unsichtbar** (unter Wasser): **Markenstrategie** = **Fundament** aller Entscheidungen, **viel größer**
- **Ohne Strategie bleibt jede Gestaltung beliebig.**

### Bestandteile der Markenstrategie
| Begriff | Kurz |
|---|---|
| Positionierung | Wo steht die Marke im Markt? Mit vorhandenen Mitteln haltbar? |
| Kompetenz | Nutzen, abgegrenzt vom Mitbewerb |
| Mission | was die Marke konkret tut – für Kund:innen, in einem Satz |
| Vision | was man erreichen will – Leitstern für Mitarbeitende |
| Markenwerte | Prüfstein für Botschaften, Produkte, Kampagnen |
| Brand Purpose | warum es die Marke über den eigenen Zweck hinaus gibt |
| Markenname | erster Kontaktpunkt, vor jedem Produkt |

### Purpose – Mission – Vision
| | Purpose | Mission | Vision |
|---|---|---|---|
| Inhalt | Beitrag zur Gesellschaft | konkreter Nutzen | künftige Positionierung |
| Zielgruppe | alle Stakeholder | Kund:innen | Mitarbeitende |
| Richtung | intern + extern | eher extern | eher intern |
| Zeit | übergeordnet | kurzfristig | langfristig |

**Nike:** Zweck = Sportbekleidung/Schuhe herstellen · Purpose = **jeden zum Sportler machen**
`,
  concepts: [
    { id: "ms-eisberg", term: "Eisberg-Modell", definition: "Zeigt, was sichtbar ist (Design, Kommunikation, Verhalten, Kultur) und was unsichtbar darunter liegt: die Markenstrategie als viel größeres Fundament.", keywords: ["sichtbar", "Markenstrategie", "Fundament"], group: "Modell" },
    { id: "ms-strategie", term: "Markenstrategie", definition: "Das unsichtbare Fundament aller Entscheidungen unter der Wasserlinie. Sie entscheidet, was über Wasser überhaupt möglich ist; ohne sie bleibt jede Gestaltung beliebig.", keywords: ["Fundament", "Entscheidungen", "beliebig"], group: "Modell" },
    { id: "ms-position", term: "Positionierung", definition: "Wo steht die Marke im Markt, und hält das mit den vorhandenen Mitteln?", keywords: ["Markt", "vorhandenen Mitteln"], group: "Strategie" },
    { id: "ms-kompetenz", term: "Kompetenz", definition: "Welchen Nutzen bietet die Marke, abgegrenzt vom Mitbewerb?", keywords: ["Nutzen", "Mitbewerb"], group: "Strategie" },
    { id: "ms-mission", term: "Mission", definition: "Was die Marke konkret tut, gerichtet an Kund:innen, in einem Satz. Konkreter Nutzen von Produkten und Leistungen; eher extern und kurzfristig.", keywords: ["konkret", "Kund", "einem Satz"], group: "Strategie" },
    { id: "ms-vision", term: "Vision", definition: "Was die Organisation erreichen will, als Leitstern für die Mitarbeitenden. Künftige Positionierung der Marke; eher intern und langfristig.", keywords: ["erreichen", "Leitstern", "Mitarbeitenden"], group: "Strategie" },
    { id: "ms-werte", term: "Markenwerte", definition: "Der Prüfstein für Botschaften, Produkte und Kampagnen.", keywords: ["Prüfstein", "Kampagnen"], group: "Strategie" },
    { id: "ms-purpose", term: "Brand Purpose", definition: "Warum es die Marke über den eigenen Zweck hinaus gibt – ihre Daseinsberechtigung und ihr Beitrag zur Gesellschaft. Richtet sich an alle Stakeholder, intern und extern, übergeordnet.", keywords: ["Zweck", "Daseinsberechtigung", "Gesellschaft"], example: "Nike: jeden zum Sportler machen", group: "Strategie" },
    { id: "ms-name", term: "Markenname", definition: "Oft der erste Kontaktpunkt mit einer Marke, noch vor jedem Produkt.", keywords: ["erste Kontaktpunkt", "Produkt"], group: "Strategie" },
    { id: "ms-zweck", term: "Zweck (im Unterschied zum Purpose)", definition: "Was eine Firma macht, z. B. bei Nike: Sportbekleidung und Schuhe herstellen. Der Purpose geht darüber hinaus.", keywords: ["macht", "Purpose"], example: "Nike stellt Sportbekleidung und Schuhe her.", group: "Modell" },
    { id: "ms-stakeholder", term: "Stakeholder", definition: "Alle Anspruchsgruppen einer Organisation, z. B. Kund:innen, Mitarbeitende, Partner, Öffentlichkeit. An sie richtet sich der Brand Purpose.", keywords: ["Anspruchsgruppen", "Brand Purpose"], group: "Modell" },
  ],
  facts: [
    { id: "ms-t1", statement: "Im Eisberg-Modell liegt die Markenstrategie über der Wasserlinie.", isTrue: false, correction: "Die Markenstrategie liegt **unter** der Wasserlinie (unsichtbar). Darüber liegen Design, Kommunikation, Verhalten und Kultur." },
    { id: "ms-t2", statement: "Der unsichtbare Teil des Eisbergs ist viel größer als der sichtbare.", isTrue: true },
    { id: "ms-t3", statement: "Ohne Strategie unter der Wasserlinie bleibt jede Gestaltung darüber beliebig.", isTrue: true },
    { id: "ms-t4", statement: "Die Mission richtet sich vor allem an die Mitarbeitenden.", isTrue: false, correction: "Die Mission richtet sich an **Kund:innen** (eher extern). Die **Vision** ist der Leitstern für die **Mitarbeitenden**." },
    { id: "ms-t5", statement: "Die Vision hat einen langfristigen Zeithorizont.", isTrue: true },
    { id: "ms-t6", statement: "Der Brand Purpose richtet sich an alle Stakeholder.", isTrue: true },
    { id: "ms-t7", statement: "Die Mission ist langfristig, die Vision kurzfristig.", isTrue: false, correction: "Umgekehrt: Mission **kurzfristig**, Vision **langfristig**." },
    { id: "ms-t8", statement: "Der Purpose von Nike ist, Sportbekleidung und Schuhe herzustellen.", isTrue: false, correction: "Das ist der **Zweck**. Der **Purpose** ist, **jeden zum Sportler zu machen**." },
    { id: "ms-t9", statement: "Markenwerte dienen als Prüfstein für Botschaften, Produkte und Kampagnen.", isTrue: true },
    { id: "ms-t10", statement: "Die Mission wird in einem Satz formuliert.", isTrue: true },
    { id: "ms-t11", statement: "Der Purpose wirkt nur nach außen.", isTrue: false, correction: "Der Purpose wirkt **intern und extern**." },
    { id: "ms-t12", statement: "Der Markenname ist oft der erste Kontaktpunkt mit der Marke – noch vor jedem Produkt.", isTrue: true },
  ],
  questions: [
    { id: "ms-q1", type: "mc", question: "„Wir liefern frische Bio-Kisten innerhalb von 24 Stunden direkt zu dir nach Hause.“ – Was ist das?", options: ["Mission", "Vision", "Brand Purpose", "Markenname"], correct: [0], explanation: "Konkret, an Kund:innen gerichtet, ein Satz → **Mission**." },
    { id: "ms-q2", type: "mc", question: "„Bis 2035 wollen wir der führende Anbieter für Bio-Lebensmittel in Österreich sein.“ – Was ist das?", options: ["Vision", "Mission", "Markenwerte", "Kompetenz"], correct: [0], explanation: "Künftige Positionierung, langfristig, Leitstern für Mitarbeitende → **Vision**." },
    { id: "ms-q3", type: "mc", question: "„Wir wollen, dass gesunde Ernährung für alle Menschen leistbar wird.“ – Was ist das?", options: ["Brand Purpose", "Mission", "Positionierung", "Markenname"], correct: [0], explanation: "Beitrag zur Gesellschaft, über den eigenen Zweck hinaus → **Purpose**." },
    { id: "ms-q4", type: "mc", question: "Was liegt im Eisberg-Modell **über** der Wasserlinie?", options: ["Corporate Design", "Corporate Communication", "Corporate Behaviour", "Corporate Culture", "Mission und Vision"], correct: [0, 1, 2, 3] },
    { id: "ms-q5", type: "mc", question: "An wen richtet sich die **Vision**?", options: ["Mitarbeitende", "Kund:innen", "Nur Aktionär:innen", "Alle Stakeholder"], correct: [0] },
    { id: "ms-q6", type: "order", question: "Ordne nach **Zeithorizont** von kurz bis übergeordnet.", items: ["Mission (kurzfristig)", "Vision (langfristig)", "Purpose (übergeordnet)"] },
    { id: "ms-q7", type: "open", question: "Erkläre das **Eisberg-Modell** der Markenstrategie.", answer: "Über der Wasserlinie liegt das Sichtbare, das die Zielgruppe wahrnimmt: Design, Kommunikation, Verhalten und Kultur. Unter der Wasserlinie liegt unsichtbar die Markenstrategie (Purpose, Vision, Mission, Positionierung, Kompetenz, Markenwerte, Markenname). Sie ist viel größer, das Fundament aller Entscheidungen und bestimmt, was darüber möglich ist. Ohne Strategie bleibt jede Gestaltung beliebig.", keywords: ["sichtbar", "Wasserlinie", "Markenstrategie", "Fundament", "beliebig"] },
    { id: "ms-q8", type: "open", question: "Vergleiche **Purpose, Mission und Vision** nach Inhalt, Zielgruppe, Richtung und Zeithorizont.", answer: "Purpose: Daseinsberechtigung/Beitrag zur Gesellschaft, alle Stakeholder, intern und extern, übergeordnet. Mission: konkreter Nutzen von Produkten und Leistungen, Kund:innen, eher extern, kurzfristig. Vision: künftige Positionierung der Marke, Mitarbeitende, eher intern, langfristig.", keywords: ["Gesellschaft", "Stakeholder", "Kund", "Mitarbeitende", "kurzfristig", "langfristig"] },
    { id: "ms-q9", type: "open", question: "Was ist der Unterschied zwischen dem **Zweck** und dem **Purpose** einer Marke? Erkläre am Beispiel Nike.", answer: "Der Zweck beschreibt, was die Firma macht – bei Nike: Sportbekleidung und Schuhe herstellen. Der Purpose sagt, warum es die Marke über diesen Zweck hinaus gibt – bei Nike: jeden zum Sportler zu machen.", keywords: ["Zweck", "herstellen", "über", "Sportler"] },
    { id: "ms-q10", type: "mc", question: "Welche Frage beantwortet die **Positionierung**?", options: ["Wo steht die Marke im Markt, und hält das mit den vorhandenen Mitteln?", "Warum gibt es die Marke über den Zweck hinaus?", "Welche Schrift verwenden wir?", "Wie klingt die Marke im Beschwerdefall?"], correct: [0] },
  ],
};

export default chapter;
