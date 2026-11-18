import type { Chapter } from "@/lib/types";

// Skript „Corporate Identity – Zusammenfassung“, Kap. 5
const chapter: Chapter = {
  id: "ci-design",
  title: "4 · Corporate Design im Detail",
  stoff: `
*Skript Kap. 5*

Das Erscheinungsbild macht eine Organisation **unverwechselbar** und **prägt ihr Image über Jahre**.

**Dazu gehören:** Logo, Slogan, Jingle, Hausfarben und Farbkonzept, Hausschriften, Bildsprache, Icon-System, Gestaltungsraster und Layout, Geschäftsausstattung (Briefbogen, Visitenkarten, Formulare), Internetauftritt, Werbeträger (Broschüre, Flyer, Plakate, Give-aways), Präsentationsvorlage, Fahrzeugbeschriftung, Arbeitskleidung, Gebäude- und Innenarchitektur, Produktdesign

## Logo – drei Aufbauformen
| Form | Aufbau | Hinweis |
|---|---|---|
| 1. **Wortmarke** | **nur Schriftzug** | |
| 2. **Wort-Bild-Marke** | **Schriftzug plus Zeichen** | |
| 3. **Bildmarke** | **nur Zeichen** | setzt einen **hohen Bekanntheitsgrad** voraus → für **unbekannte Firmen ungeeignet** |

*Beispiele (nicht aus dem Skript):* Wortmarke – Google, Coca-Cola · Wort-Bild-Marke – Adidas, Lacoste · Bildmarke – Apple, der Nike-„Swoosh“

## Woran man ein brauchbares Logo erkennt
1. Es **verweist eindeutig auf Firma oder Produkt** und **steht nie für sich allein**.
2. Es ist **abstrahiert, stilisiert und reduziert**. Erst dadurch **prägt es sich ein**.
3. Es **funktioniert in jeder Größe** – vom Firmenschild bis zur Visitenkarte.
4. Es gibt **mindestens eine Farb- und eine Schwarzweißvariante**.
5. Es ist **immer als Vektordatei** angelegt.
6. Seine **Verwendung ist geregelt**: **Platzierung, Freiraum und unzulässige Varianten**.

*Warum Vektor?* Eine Vektordatei (z. B. SVG, AI, EPS) lässt sich **ohne Qualitätsverlust beliebig skalieren** – Pixelbilder würden beim Vergrößern unscharf. Das passt zu Punkt 3 (jede Größe).

## Soundlogo
Radio, Fernsehen und Web sprechen neben dem **Auge auch das Ohr** an. Ein **Soundlogo** ist eine **kurze, unverwechselbare Melodie**, die **nach einigen Wiederholungen fest mit der Marke verknüpft** ist.

*Beispiele (nicht aus dem Skript):* die Telekom-Tonfolge, das „Ba-da-ba-ba-ba“ von McDonald's, der Netflix-Ton beim Start

## Farbe – drei Funktionen
1. **Assoziationen wecken** – **Blau** wirkt **seriös**, **Grün** signalisiert **Umweltbezug**.
2. **Wiedererkennung sichern** – Eine eingeführte **Hausfarbe wird auch ohne Logo erkannt**. Manche Firmen schaffen es, dass **eine einzige Farbe die Marke aufruft** (z. B. das Magenta der Telekom, das Lila von Milka).
3. **Leiten und führen** – **Farbcodierung** von Bereichen und Sparten, wie bei **Verkehrsschildern**.

## Farbräume
Bildschirm und Druck haben **unterschiedliche Farbräume**. Jede **Hausfarbe** muss deshalb definiert sein für:

| Farbraum | Wofür? | Kurz erklärt (Zusatz) |
|---|---|---|
| **CMYK** | **Druck** | Cyan, Magenta, Yellow, Key (Schwarz) – subtraktive Farbmischung |
| **RGB** | **Bildschirme** | Rot, Grün, Blau – additive Farbmischung (Licht) |
| **Sonder-/Schmuckfarben** | **Druck (falls nötig)** | fertig gemischte Druckfarben, z. B. Pantone oder HKS |

## Schrift
- Eine **eigens gezeichnete Hausschrift** leisten sich **nur wenige große Konzerne**. Sie wird dann **Teil der Marke**. Beispiele: **Deutsche Bahn (DB Type), Ikea (Ikea Sans und Ikea Serif), Siemens (Siemens Font Family)**.
- **Nötig ist das nicht**: Das Angebot an guten Druckschriften ist groß genug.

**Worauf es bei der Schriftauswahl ankommt:**
1. **Lesbarkeit zuerst** – in allen Größen und Medien
2. **Die Zielgruppe entscheidet mit** – je **größer** sie ist, desto mehr muss die Schrift ein **Kompromiss** sein
3. Der **Schriftcharakter muss zur Organisation passen** – bestimmbar über **Polaritätsprofile**
4. **Medientauglich** – gedruckt, am Bildschirm, eventuell im Fernsehen; **fürs Web zusätzlich eine passende Systemschrift** festlegen
5. **Zeitgemäß, aber nicht modisch** – eine Hausschrift lässt sich **nicht alle zehn Jahre austauschen**

*Polaritätsprofil (Zusatz):* Man bewertet eine Schrift auf einer Skala zwischen **Gegensatzpaaren** wie „seriös – verspielt“, „modern – traditionell“, „kühl – warm“. So sieht man, ob ihr Charakter zur Organisation passt.

## Bildsprache
Bilder transportieren **Emotionen direkt**. Entscheidend ist **nicht das Motiv allein, sondern die Stimmung**: **Licht, Farbklima, Kontrast, Bildaufbau**. Zwei Marken können **dasselbe Motiv** zeigen und **völlig unterschiedlich wirken**.

## Icon-System
Ein **durchgängiges Icon-Set** erleichtert das **Verstehen von Inhalten** und trägt zur **Identität** bei. Im Idealfall **erkennt man die Marke am Stil der Icons**, noch bevor ein Logo auftaucht.

## Gestaltungsraster und Layout
Für eine **durchgängige Gestaltung** braucht jedes Produkt **Richtlinien**:
- **Formate**, meist aus der **DIN-A-Reihe**
- **Grundlinienabstand, Spaltenzahl, Seitenränder**
- **Satzspiegel** samt Platzierung von Text, Bild und Logo
- **Freiräume** rund ums Logo
- **Typografie**: Schriftgrößen, Auszeichnungen, Tabellen, Ziffern
- **Farbeinsatz**
- weitere Elemente wie **Linien, Tonflächen, Schmuckelemente**
- **Musterseiten und Stilvorlagen** für Medienproduktion und Büro
- **Präsentationsvorlage und Templates fürs Web**

Das ist **Fleißarbeit**. **Je genauer hier gearbeitet wird, desto leichter fällt später die Umsetzung.**

*Satzspiegel (Zusatz):* die Fläche einer Seite, auf der Text und Bilder stehen – also alles innerhalb der Seitenränder.
`,
  summary: `
### Corporate Design
macht **unverwechselbar**, prägt das **Image über Jahre**. Umfasst u. a. Logo, Slogan, Jingle, Hausfarben, Hausschriften, Bildsprache, Icons, Raster/Layout, Geschäftsausstattung, Web, Werbeträger, Fahrzeuge, Arbeitskleidung, Architektur, Produktdesign.

### Logo
- **Wortmarke** (nur Schrift) · **Wort-Bild-Marke** (Schrift + Zeichen) · **Bildmarke** (nur Zeichen – braucht **hohen Bekanntheitsgrad**)
- **Gutes Logo:** eindeutiger Bezug, nie allein · **abstrahiert/stilisiert/reduziert** · **jede Größe** · **Farb- + SW-Variante** · **Vektordatei** · **Verwendung geregelt** (Platzierung, Freiraum, unzulässige Varianten)

### Soundlogo
kurze, unverwechselbare **Melodie** → nach Wiederholungen **fest mit der Marke verknüpft** (Radio, TV, Web)

### Farbe – 3 Funktionen
1. **Assoziationen** (Blau = seriös, Grün = Umwelt) 2. **Wiedererkennung** (Hausfarbe auch ohne Logo) 3. **Leiten** (Farbcodierung wie Verkehrsschilder)

**Farbräume:** **CMYK** → Druck · **RGB** → Bildschirm · **Sonderfarben** → Druck (falls nötig)

### Schrift
- eigene Hausschrift nur bei Konzernen (**DB Type, Ikea Sans/Serif, Siemens Font Family**) – **nicht nötig**
- Auswahl: **Lesbarkeit zuerst** · **Zielgruppe** (groß → Kompromiss) · **Charakter passt** (Polaritätsprofil) · **medientauglich** (+ Systemschrift fürs Web) · **zeitgemäß, nicht modisch**

### Bildsprache · Icons · Raster
- Bildsprache: **Stimmung** (Licht, Farbklima, Kontrast, Bildaufbau) zählt mehr als das Motiv
- Icon-System: durchgängig → Verstehen + Identität; Marke am **Icon-Stil** erkennbar
- Raster/Layout: Formate (DIN A), Grundlinienabstand, Spalten, Ränder, **Satzspiegel**, Freiräume, Typo, Farbe, Musterseiten, Templates → **Fleißarbeit**, je genauer, desto leichter die Umsetzung
`,
  concepts: [
    { id: "cd-wortmarke", term: "Wortmarke", definition: "Logo, das nur aus einem Schriftzug besteht.", explain: "Das Logo ist nur der Name in einer bestimmten Schrift – kein Bild, kein Symbol.", keywords: ["Schriftzug"], example: "Google, Coca-Cola", group: "Logoform" },
    { id: "cd-wortbild", term: "Wort-Bild-Marke", definition: "Logo aus Schriftzug plus Zeichen.", explain: "Name plus Symbol zusammen. Das ist die sichere Wahl, weil man den Namen liest und sich gleichzeitig das Zeichen merkt.", keywords: ["Schriftzug", "Zeichen"], example: "Adidas, Lacoste", group: "Logoform" },
    { id: "cd-bildmarke", term: "Bildmarke", definition: "Logo nur aus einem Zeichen ohne Schrift. Setzt einen hohen Bekanntheitsgrad voraus und ist für unbekannte Firmen ungeeignet.", explain: "Nur ein Symbol, kein Name. Das funktioniert nur, wenn eh schon jede:r die Marke kennt – bei einer neuen Firma wüsste niemand, wofür das Zeichen steht.", keywords: ["Zeichen", "Bekanntheitsgrad", "unbekannte"], example: "Apple-Apfel, Nike-Swoosh", group: "Logoform" },
    { id: "cd-soundlogo", term: "Soundlogo", definition: "Kurze, unverwechselbare Melodie, die nach einigen Wiederholungen fest mit der Marke verknüpft ist. Spricht neben dem Auge das Ohr an.", explain: "Ein Logo zum Hören: eine kurze Melodie. Wenn man sie oft genug gehört hat, denkt man sofort an die Marke – auch ohne hinzuschauen.", keywords: ["Melodie", "Wiederholungen", "Ohr"], example: "die Telekom-Tonfolge", group: "Element" },
    { id: "cd-vektor", term: "Vektordatei", definition: "Dateiformat, in dem ein Logo immer angelegt sein muss, weil es sich ohne Qualitätsverlust in jede Größe skalieren lässt.", explain: "Ein Vektorlogo besteht aus mathematisch beschriebenen Linien und Flächen statt aus Pixeln. Darum kann man es riesig auf ein Firmenschild oder winzig auf eine Visitenkarte drucken, ohne dass es unscharf wird.", keywords: ["Logo", "Qualitätsverlust", "Größe"], example: "SVG, AI, EPS", group: "Technik" },
    { id: "cd-cmyk", term: "CMYK", definition: "Farbraum für den Druck (Cyan, Magenta, Yellow, Key/Schwarz).", explain: "Die vier Druckfarben (Cyan, Magenta, Gelb, Schwarz). Alles, was gedruckt wird, braucht die Farbe in CMYK.", keywords: ["Druck"], group: "Farbraum" },
    { id: "cd-rgb", term: "RGB", definition: "Farbraum für Bildschirme (Rot, Grün, Blau).", explain: "Rot, Grün und Blau als Licht – so mischen Bildschirme ihre Farben. Für Website, App oder Video braucht man die Farbe in RGB.", keywords: ["Bildschirme"], group: "Farbraum" },
    { id: "cd-sonder", term: "Sonder-/Schmuckfarben", definition: "Fertig gemischte Druckfarben, die – falls nötig – zusätzlich für eine Hausfarbe definiert werden.", explain: "Extra angemischte Druckfarben, wenn eine Hausfarbe mit CMYK nicht genau genug getroffen wird (z. B. ein ganz bestimmtes Leuchtorange).", keywords: ["Druckfarben", "Hausfarbe"], example: "Pantone, HKS", group: "Farbraum" },
    { id: "cd-hausfarbe", term: "Hausfarbe", definition: "Festgelegte Markenfarbe. Eine eingeführte Hausfarbe wird auch ohne Logo erkannt und muss für CMYK, RGB und ggf. Sonderfarben definiert sein.", explain: "Die typische Farbe einer Marke. Ist sie gut eingeführt, erkennt man die Marke schon an der Farbe allein. Damit sie überall gleich aussieht, legt man sie für Druck (CMYK) und Bildschirm (RGB) fest.", keywords: ["ohne Logo", "CMYK", "RGB"], example: "Telekom-Magenta, Milka-Lila", group: "Element" },
    { id: "cd-assoz", term: "Farbfunktion: Assoziationen wecken", definition: "Farben lösen Vorstellungen aus: Blau wirkt seriös, Grün signalisiert Umweltbezug.", explain: "Farben lösen Gefühle und Gedanken aus: Bei Blau denkt man an „seriös, vertrauenswürdig“ (Banken!), bei Grün an „Natur, Umwelt“.", keywords: ["Blau", "seriös", "Grün"], group: "Farbfunktion" },
    { id: "cd-wiederer", term: "Farbfunktion: Wiedererkennung sichern", definition: "Eine eingeführte Hausfarbe wird auch ohne Logo erkannt; manchmal ruft eine einzige Farbe die Marke auf.", explain: "Man erkennt die Marke schon an der Farbe, bevor man das Logo sieht – z. B. das Telekom-Magenta.", keywords: ["ohne Logo", "einzige Farbe"], group: "Farbfunktion" },
    { id: "cd-leiten", term: "Farbfunktion: Leiten und führen", definition: "Farbcodierung von Bereichen und Sparten, wie bei Verkehrsschildern.", explain: "Farben helfen beim Orientieren, so wie bei Verkehrsschildern: z. B. jede Abteilung oder jedes Stockwerk hat eine eigene Farbe.", keywords: ["Farbcodierung", "Verkehrsschildern"], group: "Farbfunktion" },
    { id: "cd-hausschrift", term: "Hausschrift", definition: "Die festgelegte Schrift einer Marke. Eigens gezeichnete Hausschriften leisten sich nur wenige große Konzerne; nötig ist das nicht.", explain: "Die Schrift, die eine Marke immer verwendet. Große Konzerne lassen sich eine eigene zeichnen, für alle anderen reicht eine gut ausgewählte vorhandene Schrift.", keywords: ["Konzerne", "nötig"], example: "DB Type, Ikea Sans/Serif, Siemens Font Family", group: "Element" },
    { id: "cd-polar", term: "Polaritätsprofil", definition: "Werkzeug, mit dem sich der Charakter einer Schrift bestimmen lässt – damit er zur Organisation passt. Bewertet wird zwischen Gegensatzpaaren wie seriös–verspielt.", explain: "Eine Art Bewertungsbogen: Man gibt an, wie sehr eine Schrift z. B. eher „seriös“ oder eher „verspielt“ wirkt. So sieht man schwarz auf weiß, ob sie zur Firma passt.", keywords: ["Charakter", "Schrift", "Gegensatzpaaren"], group: "Technik" },
    { id: "cd-systemschrift", term: "Systemschrift", definition: "Schrift, die auf Geräten bereits installiert ist. Fürs Web wird zusätzlich zur Hausschrift eine passende Systemschrift festgelegt.", explain: "Eine Schrift, die eh auf jedem Gerät drauf ist. Fürs Web legt man sie als Ersatz fest, falls die Hausschrift nicht geladen werden kann.", keywords: ["Web", "Hausschrift"], group: "Technik" },
    { id: "cd-bildsprache", term: "Bildsprache", definition: "Der einheitliche Stil der Bilder einer Marke. Entscheidend ist die Stimmung – Licht, Farbklima, Kontrast, Bildaufbau –, nicht das Motiv allein.", explain: "Nicht WAS auf dem Foto ist, macht den Unterschied, sondern WIE es wirkt: hell oder düster, warm oder kühl, ruhig oder dynamisch. Zwei Marken können das gleiche Motiv ganz anders rüberbringen.", keywords: ["Stimmung", "Licht", "Farbklima", "Motiv"], group: "Element" },
    { id: "cd-icons", term: "Icon-System", definition: "Ein durchgängiges Icon-Set, das das Verstehen von Inhalten erleichtert und zur Identität beiträgt. Idealerweise erkennt man die Marke am Stil der Icons.", explain: "Alle kleinen Symbole (Telefon, Einkaufswagen …) sehen gleich gestaltet aus. Das hilft beim Verstehen und man erkennt die Marke sogar am Stil der Icons.", keywords: ["durchgängiges", "Verstehen", "Identität"], group: "Element" },
    { id: "cd-raster", term: "Gestaltungsraster", definition: "Richtlinien für eine durchgängige Gestaltung: Formate, Grundlinienabstand, Spaltenzahl, Seitenränder, Satzspiegel, Freiräume, Typografie, Farbeinsatz, Musterseiten und Templates.", explain: "Ein unsichtbares Gerüst für jede Seite: wie viele Spalten, wie breit die Ränder, wo das Logo hinkommt. Damit alle Drucksorten und Seiten gleich aufgebaut aussehen.", keywords: ["Richtlinien", "Spaltenzahl", "Satzspiegel"], group: "Technik" },
    { id: "cd-satzspiegel", term: "Satzspiegel", definition: "Die Fläche einer Seite, auf der Text, Bild und Logo platziert werden – alles innerhalb der Seitenränder.", explain: "Der Bereich auf der Seite, in dem Inhalt stehen darf – also alles innerhalb der Ränder.", keywords: ["Fläche", "Seitenränder"], group: "Technik" },
    { id: "cd-din", term: "DIN-A-Reihe", definition: "Genormte Papierformate (z. B. A4), aus denen die Formate im Gestaltungsraster meist stammen.", explain: "Die normierten Papiergrößen wie A4 oder A5. Daraus nimmt man meistens die Formate für Briefpapier, Flyer & Co.", keywords: ["Papierformate", "Gestaltungsraster"], group: "Technik" },
    { id: "cd-freiraum", term: "Freiraum (Schutzzone) ums Logo", definition: "Festgelegter leerer Bereich rund ums Logo, in den nichts anderes hineinragen darf. Wird im Raster und im Styleguide geregelt.", explain: "Rund ums Logo muss etwas Platz frei bleiben, damit es „atmen“ kann und nicht von Text oder Bildern bedrängt wird.", keywords: ["leerer Bereich", "Logo"], group: "Technik" },
    { id: "cd-geschaeft", term: "Geschäftsausstattung", definition: "Teil des Corporate Design: Briefbogen, Visitenkarten, Formulare.", explain: "Alles, was eine Firma für die tägliche Geschäftspost braucht: Briefpapier, Visitenkarten, Formulare – natürlich im einheitlichen Design.", keywords: ["Briefbogen", "Visitenkarten", "Formulare"], group: "Element" },
    { id: "cd-werbetraeger", term: "Werbeträger", definition: "Teil des Corporate Design: Broschüre, Flyer, Plakate, Give-aways.", explain: "Alles, worauf Werbung gedruckt wird: Broschüren, Flyer, Plakate und kleine Werbegeschenke wie Kugelschreiber.", keywords: ["Flyer", "Plakate", "Give-aways"], group: "Element" },
  ],
  facts: [
    { id: "cd-t1", statement: "Eine Bildmarke eignet sich besonders gut für eine neu gegründete, unbekannte Firma.", isTrue: false, correction: "Eine Bildmarke setzt einen **hohen Bekanntheitsgrad** voraus – für unbekannte Firmen **ungeeignet**." },
    { id: "cd-t2", statement: "Ein gutes Logo ist immer als Vektordatei angelegt.", isTrue: true, correction: "Nur als **Vektordatei** lässt sich das Logo **ohne Qualitätsverlust** in jede Größe bringen." },
    { id: "cd-t3", statement: "Ein Logo braucht nur eine Farbvariante, Schwarzweiß ist unnötig.", isTrue: false, correction: "Es braucht **mindestens eine Farb- und eine Schwarzweißvariante**." },
    { id: "cd-t4", statement: "Ein gutes Logo ist möglichst detailreich, damit es sich einprägt.", isTrue: false, correction: "Es ist **abstrahiert, stilisiert und reduziert** – erst dadurch prägt es sich ein." },
    { id: "cd-t5", statement: "CMYK ist der Farbraum für den Druck, RGB der für Bildschirme.", isTrue: true, correction: "**C**yan **M**agenta **Y**ellow **K**ey → Druckfarben. **R**ot **G**rün **B**lau → Licht am Bildschirm." },
    { id: "cd-t6", statement: "RGB wird für den Offsetdruck verwendet.", isTrue: false, correction: "**RGB = Bildschirme**, für den Druck verwendet man **CMYK** (und ggf. Sonderfarben)." },
    { id: "cd-t7", statement: "Jede Firma braucht eine eigens gezeichnete Hausschrift.", isTrue: false, correction: "Eigene Hausschriften leisten sich **nur wenige große Konzerne** – **nötig ist das nicht**." },
    { id: "cd-t8", statement: "Je größer die Zielgruppe, desto mehr muss die Schrift ein Kompromiss sein.", isTrue: true, correction: "Eine große, gemischte Zielgruppe hat unterschiedliche Ansprüche → die Schrift muss für **alle** funktionieren." },
    { id: "cd-t9", statement: "Eine Hausschrift sollte möglichst modisch sein und alle paar Jahre getauscht werden.", isTrue: false, correction: "**Zeitgemäß, aber nicht modisch** – eine Hausschrift lässt sich nicht alle zehn Jahre austauschen." },
    { id: "cd-t10", statement: "Bei der Bildsprache zählt vor allem das Motiv, die Stimmung ist nebensächlich.", isTrue: false, correction: "Entscheidend ist **die Stimmung** (Licht, Farbklima, Kontrast, Bildaufbau), nicht das Motiv allein." },
    { id: "cd-t11", statement: "Blau wirkt seriös, Grün signalisiert Umweltbezug.", isTrue: true, correction: "Das ist die Farbfunktion **„Assoziationen wecken“** – die erste der drei Farbfunktionen." },
    { id: "cd-t12", statement: "Ein Soundlogo ist eine kurze, unverwechselbare Melodie.", isTrue: true, correction: "Nach einigen Wiederholungen ist die Melodie **fest mit der Marke verknüpft**." },
    { id: "cd-t13", statement: "Fürs Web wird zusätzlich zur Hausschrift eine passende Systemschrift festgelegt.", isTrue: true, correction: "Falls die Hausschrift im Browser nicht verfügbar ist, springt die **Systemschrift** ein." },
    { id: "cd-t14", statement: "Farbcodierung von Bereichen, wie bei Verkehrsschildern, ist die Farbfunktion „Leiten und führen“.", isTrue: true, correction: "Die drei Farbfunktionen: **Assoziationen wecken – Wiedererkennung sichern – Leiten und führen**." },
    { id: "cd-t15", statement: "Eine eingeführte Hausfarbe wird auch ohne Logo erkannt.", isTrue: true, correction: "Das ist die Farbfunktion **„Wiedererkennung sichern“**." },
    { id: "cd-t16", statement: "Je ungenauer das Gestaltungsraster, desto flexibler und leichter die spätere Umsetzung.", isTrue: false, correction: "Umgekehrt: **Je genauer hier gearbeitet wird, desto leichter fällt später die Umsetzung.**" },
    { id: "cd-t17", statement: "Ein Logo steht nie für sich allein, sondern verweist eindeutig auf Firma oder Produkt.", isTrue: true, correction: "Das ist Merkmal 1 eines brauchbaren Logos: **eindeutiger Bezug** zu Firma oder Produkt." },
  ],
  questions: [
    { id: "cd-q1", type: "mc", question: "Welche Merkmale hat ein **brauchbares Logo**?", options: ["funktioniert in jeder Größe", "mindestens eine Farb- und eine Schwarzweißvariante", "immer als Vektordatei angelegt", "möglichst viele Details", "nur als JPG gespeichert"], correct: [0, 1, 2], explanation: "Gutes Logo: **reduziert** (nicht detailreich), in jeder Größe, Farbe + SW, **Vektor** (nicht JPG), Verwendung geregelt." },
    { id: "cd-q2", type: "order", question: "Ordne die drei **Logo-Aufbauformen** von „nur Schrift“ bis „nur Zeichen“.", items: ["Wortmarke", "Wort-Bild-Marke", "Bildmarke"], explanation: "**Wortmarke** = nur Schrift → **Wort-Bild-Marke** = Schrift + Zeichen → **Bildmarke** = nur Zeichen." },
    { id: "cd-q3", type: "mc", question: "Für welche **Farbräume** muss eine Hausfarbe definiert sein?", options: ["CMYK", "RGB", "Sonder-/Schmuckfarben (falls nötig)", "MP3", "DIN A4"], correct: [0, 1, 2], explanation: "**CMYK** für Druck, **RGB** für Bildschirme, **Sonderfarben** für den Druck, falls nötig." },
    { id: "cd-q4", type: "mc", question: "Welche Firmen haben laut Skript eine **eigens gezeichnete Hausschrift**?", options: ["Deutsche Bahn (DB Type)", "Ikea (Ikea Sans und Ikea Serif)", "Siemens (Siemens Font Family)", "jede HTL"], correct: [0, 1, 2], explanation: "**DB Type, Ikea Sans/Serif, Siemens Font Family** – eigene Schriften leisten sich nur große Konzerne." },
    { id: "cd-q5", type: "open", question: "Nenne die **5 Kriterien** für die Auswahl einer Hausschrift.", answer: "1. Lesbarkeit zuerst (alle Größen und Medien). 2. Die Zielgruppe entscheidet mit – je größer, desto mehr Kompromiss. 3. Der Schriftcharakter muss zur Organisation passen (Polaritätsprofil). 4. Medientauglich – Druck, Bildschirm, ev. TV; fürs Web zusätzlich eine Systemschrift. 5. Zeitgemäß, aber nicht modisch.", keywords: ["Lesbarkeit", "Zielgruppe", "Charakter", "medientauglich", "modisch"] },
    { id: "cd-q6", type: "open", question: "Nenne und erkläre die **drei Funktionen von Farbe** im Corporate Design.", answer: "1. Assoziationen wecken – z. B. Blau wirkt seriös, Grün signalisiert Umweltbezug. 2. Wiedererkennung sichern – eine eingeführte Hausfarbe wird auch ohne Logo erkannt. 3. Leiten und führen – Farbcodierung von Bereichen und Sparten wie bei Verkehrsschildern.", keywords: ["Assoziationen", "Wiedererkennung", "Leiten", "Farbcodierung"] },
    { id: "cd-q7", type: "open", question: "Ein Start-up will als Logo nur ein abstraktes Symbol ohne Namen. Was rätst du und warum?", answer: "Davon ist abzuraten: Eine reine Bildmarke setzt einen hohen Bekanntheitsgrad voraus und ist für unbekannte Firmen ungeeignet. Besser ist eine Wortmarke oder eine Wort-Bild-Marke (Schriftzug plus Zeichen), damit der Name mitgelernt wird.", keywords: ["Bildmarke", "Bekanntheitsgrad", "Wortmarke", "Wort-Bild-Marke"] },
    { id: "cd-q8", type: "mc", question: "Was gehört zu den **Richtlinien im Gestaltungsraster**?", options: ["Grundlinienabstand, Spaltenzahl, Seitenränder", "Satzspiegel samt Platzierung von Text, Bild und Logo", "Freiräume rund ums Logo", "Musterseiten und Stilvorlagen", "der Aktienkurs"], correct: [0, 1, 2, 3], explanation: "Alles, was eine einheitliche Seitengestaltung regelt – vom Grundlinienabstand bis zu Musterseiten." },
    { id: "cd-q9", type: "open", question: "Warum muss ein Logo als **Vektordatei** angelegt sein?", answer: "Weil es in jeder Größe funktionieren muss – vom Firmenschild bis zur Visitenkarte. Eine Vektordatei lässt sich ohne Qualitätsverlust beliebig skalieren, ein Pixelbild würde beim Vergrößern unscharf.", keywords: ["jeder Größe", "skalieren", "Qualitätsverlust"] },
    { id: "cd-q10", type: "mc", question: "Zwei Marken zeigen dasselbe Foto-Motiv, wirken aber völlig unterschiedlich. Woran liegt das laut Skript?", options: ["An der Stimmung: Licht, Farbklima, Kontrast, Bildaufbau", "Am Dateiformat", "An der Schriftgröße", "Am Soundlogo"], correct: [0], explanation: "Entscheidend ist die **Stimmung**, nicht das Motiv allein." },
    { id: "cd-q11", type: "mc", question: "Wie wird die **Verwendung eines Logos geregelt**?", options: ["Platzierung", "Freiraum", "unzulässige Varianten", "Preis des Produkts"], correct: [0, 1, 2], explanation: "Geregelt werden **Platzierung, Freiraum und unzulässige Varianten**." },
  ],
};

export default chapter;
