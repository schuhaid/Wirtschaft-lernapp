import type { Chapter } from "@/lib/types";

const eur = (n: number) => n.toLocaleString("de-AT", { maximumFractionDigits: 2 }) + " €";

// Zusatzthema laut Teststoff-Blatt (nicht im Buch S. 10–54). Rechtslage seit dem Erbrechts-Änderungsgesetz 2015 (gilt seit 1.1.2017).
const chapter: Chapter = {
  id: "erbrecht",
  title: "8 · Erbrecht (Zusatz)",
  stoff: `
*Zusatzthema laut Teststoff – nur als Zusatzbeispiel. Rechtslage seit der Erbrechtsreform (gilt seit 1. 1. 2017).*

## Grundbegriffe
- **Erblasser/in** = die verstorbene Person · **Verlassenschaft** (Nachlass) = ihr Vermögen und ihre Schulden
- **Erbe/Erbin** bekommt einen **Anteil (Quote)** am ganzen Nachlass – mit allen Rechten **und Schulden**.
- **Vermächtnis** = ein **einzelner Gegenstand** (z. B. die Uhr), kein Anteil.
- Wer erbt, bestimmt zuerst ein **Testament** (gewillkürte Erbfolge). Gibt es keines oder regelt es nicht alles, gilt die **gesetzliche Erbfolge**.
- Das Gericht übergibt den Nachlass am Ende mit der **Einantwortung** an die Erben (abgewickelt über einen Notar als Gerichtskommissär).

## Gesetzliche Erbfolge – die vier Linien (Parentelen)
| Linie | Wer? |
|---|---|
| **1. Linie** | **Kinder** und deren Nachkommen (Enkel, Urenkel) |
| **2. Linie** | **Eltern** und deren Nachkommen (**Geschwister**, Nichten, Neffen) |
| **3. Linie** | **Großeltern** und deren Nachkommen (Onkel, Tanten, Cousins) |
| **4. Linie** | **Urgroßeltern** (nur sie selbst, nicht deren Nachkommen) |

**Regeln:**
- Eine **nähere Linie schließt alle ferneren aus**: Gibt es Kinder, erben Eltern und Geschwister **nichts**.
- Innerhalb einer Linie wird **nach Köpfen** geteilt (zwei Kinder → je die Hälfte).
- Ist ein Kind schon verstorben, **treten dessen Kinder (Enkel) an seine Stelle** und teilen sich seinen Anteil.
- Gibt es gar keine Erben, kann sich die **Republik Österreich** den Nachlass aneignen.

## Ehegattenerbrecht (gilt auch für eingetragene Partner)
| Ehegatte erbt neben … | Ehegatte | Rest |
|---|---|---|
| **Kindern** (1. Linie) | **1/3** | Kinder zusammen **2/3** |
| **Eltern** (2. Linie) | **2/3** | Eltern zusammen **1/3** |
| sonst (keine Kinder, keine Eltern) | **alles** | – |

- Neben dem Ehegatten erben **Geschwister und Großeltern nichts** mehr. Ist ein Elternteil schon tot, bekommt auch dessen Anteil der Ehegatte.
- Zusätzlich gibt es das **gesetzliche Vorausvermächtnis**: Der Ehegatte darf **in der Ehewohnung weiter wohnen** und bekommt den **Hausrat**.

## Lebensgefährte/Lebensgefährtin
- **Kein normales gesetzliches Erbrecht!** Wer will, dass der Lebensgefährte erbt, braucht ein **Testament**.
- **Außerordentliches Erbrecht:** Nur wenn es **überhaupt keine gesetzlichen Erben** gibt **und** man zuletzt **mindestens 3 Jahre** im **gemeinsamen Haushalt** gelebt hat.
- Nach 3 Jahren gemeinsamem Haushalt darf der Lebensgefährte **1 Jahr** in der gemeinsamen Wohnung bleiben.

## Testament
| Form | Voraussetzung |
|---|---|
| **Eigenhändig** | **zur Gänze mit der Hand geschrieben** und **unterschrieben** – keine Zeugen nötig |
| **Fremdhändig** | z. B. am **Computer** geschrieben: eigenhändig **unterschreiben**, einen **eigenhändigen Zusatz** („Das ist mein letzter Wille“) schreiben und **3 gleichzeitig anwesende Zeugen** |
| **Notariell / gerichtlich** | vor Notar oder Gericht errichtet |

Ein Testament kann man **jederzeit widerrufen** oder durch ein neues ersetzen.

## Pflichtteil
- Die nächsten Angehörigen bekommen auch dann etwas, wenn sie im Testament „vergessen“ oder übergangen werden: den **Pflichtteil**.
- **Pflichtteilsberechtigt:** nur **Nachkommen** (Kinder, Enkel) und der **Ehegatte** / eingetragene Partner. **Eltern seit 2017 nicht mehr**, Geschwister und Lebensgefährten nie.
- **Höhe:** die **Hälfte des gesetzlichen Erbteils**.
- Der Pflichtteil ist ein **Geldanspruch** gegen die Erben – man bekommt keine bestimmten Gegenstände.
- **Minderung** auf die Hälfte ist möglich, wenn **nie ein Naheverhältnis** wie in einer Familie bestand; **Enterbung** nur aus **schweren Gründen** (z. B. schwere Straftat gegen den Erblasser).


## Verteilungsregeln – so rechnest du Erbteile aus *(laut Mitschrift)*
**Drei Merksätze:**
1. **Jung vor Alt** – zwischen den Linien: Gibt es Nachkommen (1. Linie), erben Eltern, Geschwister usw. **nichts**.
2. **Alt vor Jung** – innerhalb einer Linie: Zuerst erben die **Stammeltern** dieser Linie (z. B. die Eltern), ihre Nachkommen (Geschwister) erst, wenn der jeweilige Elternteil **schon tot** ist.
3. **Repräsentation vor Anwachsung** – Ist ein Erbe schon gestorben, bekommen zuerst **seine Nachkommen** seinen Anteil (**Repräsentation**). Nur wenn er **keine Nachkommen** hat, „wächst“ sein Anteil den anderen Erben zu (**Anwachsung**).

**So gehst du vor:**
- Teile nach **Stämmen**: Jedes Kind (bzw. jeder Elternteil, jedes Großelternteil) bildet einen Stamm. Bei 3 Kindern bekommt jeder Stamm **1/3**.
- Lebt der Stammvater/die Stammmutter nicht mehr, teilen sich **seine Kinder** den Anteil (z. B. 1/3 ÷ 3 Enkel = je **1/9**).
- Hat ein Stamm **niemanden mehr**, geht sein Anteil an die übrigen Stämme (**Anwachsung**).

### Beispiele aus dem Unterricht
| Fall | Lösung |
|---|---|
| **1. Linie:** Erblasser hat 3 Kinder. Zwei sind ohne Nachkommen gestorben, das dritte ist auch tot, hat aber 1 Enkel. Eltern und ein Bruder leben. | Die Anteile der beiden kinderlosen Kinder **wachsen an** → alles im 3. Stamm → der **Enkel erbt alles** (1/3 + 1/3 + 1/3). Eltern und Bruder: **0** (Jung vor Alt). |
| **2. Linie mit Halbgeschwistern:** Erblasser ohne Kinder; Eltern tot. Mutter hat 3 Kinder (Halbschwester + 2 gemeinsame Brüder), Vater hat 3 Kinder (2 gemeinsame Brüder + Halbbruder). Beide Brüder sind tot; Bruder 1 hat 3 Kinder, Bruder 2 hat 1 Kind. | Mutter-Hälfte **1/2** → ÷ 3 = je **1/6**; Vater-Hälfte **1/2** → ÷ 3 = je **1/6**. Halbschwester **1/6**, Halbbruder **1/6**. Jeder gemeinsame Bruder hätte 1/6 + 1/6 = **1/3** → Bruder 1: seine 3 Kinder je **1/9**, Bruder 2: sein Kind **1/3**. Summe: 1/6 + 1/6 + 1/3 + 1/3 = 1. |
| **3. Linie:** Eltern tot, keine Geschwister. Jedes Großelternteil hätte **1/4**. Großmutter (mütterlicherseits) tot ohne weitere Nachkommen, Großvater (väterlicherseits) tot, hinterlässt eine Tante. | Der Anteil der Großmutter geht an ihren **Partner** (Großvater mütterlicherseits) → **1/2**. Großmutter väterlicherseits **1/4**, die **Tante** bekommt den Anteil ihres Vaters **1/4**. |
| **4. Linie:** Nur noch Urgroßeltern bzw. deren Nachkommen. | Es erben **nur die Urgroßeltern selbst** (je **1/8**). **Solange auch nur ein Urgroßelternteil lebt, sind alle Nachkommen der Urgroßeltern (z. B. Großtanten) ausgeschlossen.** Anteile toter Urgroßeltern gehen an den Partner, dann an das andere Paar derselben Seite, dann an die andere Seite. |

## Fälle – mit Lösung
| Fall | Lösung |
|---|---|
| Vater stirbt ohne Testament, hinterlässt Ehefrau und 2 Kinder, 300.000 € | Ehefrau **1/3 = 100.000 €**, Kinder je **1/3 = 100.000 €** |
| Mutter stirbt ohne Testament, hinterlässt Ehemann und ihre Eltern, keine Kinder | Ehemann **2/3**, Eltern zusammen **1/3** (je 1/6) |
| Lisa stirbt ohne Testament, nicht verheiratet, keine Kinder; Eltern leben, 1 Bruder | 2. Linie: **Eltern** je 1/2 – der Bruder erbt nichts, solange beide Eltern leben |
| Opa setzt im Testament nur den Tierschutzverein ein, hinterlässt 2 Kinder, 200.000 € | Gesetzlicher Erbteil je Kind 1/2 → **Pflichtteil je 1/4 = 50.000 €** (Geldanspruch gegen den Verein) |
| Max lebte 10 Jahre mit Anna zusammen, kein Testament, Max hat noch eine Schwester | Die **Schwester** erbt alles (2. Linie). Anna erbt **nichts** (nur 1 Jahr Wohnrecht) – ein Testament wäre nötig gewesen |
`,
  summary: `
### Erbrecht (Zusatz)
- **Testament** geht vor, sonst **gesetzliche Erbfolge**; Nachlass mit **Einantwortung** an die Erben
- **4 Linien:** 1. Kinder/Enkel · 2. Eltern + Geschwister · 3. Großeltern + Onkel/Tante · 4. Urgroßeltern
- **nähere Linie schließt fernere aus**; Teilung **nach Köpfen**; Enkel treten an die Stelle eines toten Kindes

### Ehegatte
| neben | Ehegatte |
|---|---|
| Kindern | **1/3** |
| Eltern | **2/3** |
| sonst | **alles** |
+ **Vorausvermächtnis** (Wohnung, Hausrat). Geschwister/Großeltern erben neben Ehegatten nichts.

### Lebensgefährte
**kein** gesetzliches Erbrecht → **Testament!** Nur außerordentliches Erbrecht (keine gesetzlichen Erben + 3 Jahre gemeinsamer Haushalt); 1 Jahr Wohnrecht.

### Testament
**eigenhändig** (ganz handschriftlich + Unterschrift) · **fremdhändig** (Unterschrift + eigenhändiger Zusatz + **3 Zeugen**) · notariell/gerichtlich · jederzeit widerrufbar

### Pflichtteil
**Hälfte des gesetzlichen Erbteils**, **Geldanspruch**; nur **Nachkommen + Ehegatte** (Eltern seit 2017 nicht mehr)
`,
  concepts: [
    { id: "er-verlassenschaft", term: "Verlassenschaft", definition: "Das gesamte Vermögen samt Schulden, das eine verstorbene Person (Erblasser) hinterlässt.", keywords: ["Vermögen", "Schulden"], explain: "Alles, was der Verstorbene hatte – auch seine Schulden.", group: "Erb-Grundbegriff" },
    { id: "er-erbe", term: "Erbe/Erbin", definition: "Person, die einen Anteil (Quote) am gesamten Nachlass bekommt – mit allen Rechten und Schulden.", keywords: ["Anteil", "Schulden"], explain: "Erben heißt: Du bekommst einen Bruchteil von allem – Gutes und Schlechtes.", group: "Erb-Grundbegriff" },
    { id: "er-vermaechtnis", term: "Vermächtnis", definition: "Zuwendung eines einzelnen bestimmten Gegenstands aus dem Nachlass, ohne Erbe zu werden.", keywords: ["einzelnen", "Gegenstands"], explain: "Du bekommst nur eine bestimmte Sache, z. B. Opas Uhr – aber keinen Anteil am ganzen Erbe.", group: "Erb-Grundbegriff" },
    { id: "er-einantwortung", term: "Einantwortung", definition: "Gerichtlicher Beschluss, mit dem der Nachlass am Ende des Verlassenschaftsverfahrens an die Erben übergeben wird.", keywords: ["Beschluss", "Erben"], explain: "Der offizielle Moment, ab dem das Erbe wirklich den Erben gehört.", group: "Erb-Grundbegriff" },
    { id: "er-parentel", term: "Parentelen (Linien)", definition: "Die vier Gruppen der gesetzlichen Erbfolge: 1. Kinder und Nachkommen, 2. Eltern und deren Nachkommen, 3. Großeltern und deren Nachkommen, 4. Urgroßeltern.", keywords: ["Kinder", "Eltern", "Großeltern", "Urgroßeltern"], explain: "Die Verwandten werden in vier „Stufen“ eingeteilt – je näher, desto früher kommen sie dran." },
    { id: "er-ausschluss", term: "Vorrang der näheren Linie", definition: "Gibt es Erben einer näheren Linie, erben die ferneren Linien nichts; innerhalb der Linie wird nach Köpfen geteilt.", keywords: ["näheren", "Köpfen"], explain: "Solange es Kinder gibt, gehen Eltern und Geschwister leer aus.", example: "Kinder vorhanden → Eltern und Geschwister erben nichts" },
    { id: "er-eintritt", term: "Eintrittsrecht der Nachkommen", definition: "Ist ein gesetzlicher Erbe schon verstorben, treten seine Nachkommen an seine Stelle und teilen sich seinen Anteil.", keywords: ["Nachkommen", "Stelle"], explain: "Ist dein Papa schon tot, bekommst du (mit deinen Geschwistern) seinen Anteil vom Opa." },
    { id: "er-ehegatte-kinder", group: "Ehegattenerbrecht", term: "Ehegatte neben Kindern", definition: "Der Ehegatte erbt neben Kindern (erste Linie) ein Drittel, die Kinder teilen sich zwei Drittel.", keywords: ["Drittel", "zwei Drittel"], explain: "Mit Kindern: Ehepartner 1/3, Rest für die Kinder." },
    { id: "er-ehegatte-eltern", group: "Ehegattenerbrecht", term: "Ehegatte neben Eltern", definition: "Der Ehegatte erbt neben den Eltern des Verstorbenen zwei Drittel, die Eltern zusammen ein Drittel; Geschwister und Großeltern erben neben dem Ehegatten nichts.", keywords: ["zwei Drittel", "Geschwister"], explain: "Ohne Kinder, aber mit Eltern: Ehepartner 2/3, Eltern 1/3." },
    { id: "er-vorausvermaechtnis", term: "Gesetzliches Vorausvermächtnis", definition: "Zusätzlich zum Erbteil darf der Ehegatte in der Ehewohnung weiter wohnen und bekommt den Hausrat.", keywords: ["Ehewohnung", "Hausrat"], explain: "Der Ehepartner muss nicht ausziehen und behält die Einrichtung." },
    { id: "er-lebensgefaehrte", term: "Außerordentliches Erbrecht des Lebensgefährten", definition: "Lebensgefährten erben ohne Testament nur, wenn es keine gesetzlichen Erben gibt und sie zuletzt mindestens drei Jahre im gemeinsamen Haushalt gelebt haben.", keywords: ["keine gesetzlichen Erben", "drei Jahre"], explain: "Nicht verheiratet = fast kein Erbrecht. Wer den Partner absichern will, braucht ein Testament." },
    { id: "er-eigenhaendig", group: "Testamentsform", term: "Eigenhändiges Testament", definition: "Testament, das zur Gänze mit der Hand geschrieben und unterschrieben ist; Zeugen sind nicht nötig.", keywords: ["Hand", "unterschrieben", "Zeugen"], explain: "Selbst mit Kugelschreiber geschrieben und unterschrieben – fertig." },
    { id: "er-fremdhaendig", group: "Testamentsform", term: "Fremdhändiges Testament", definition: "Testament, das nicht selbst handgeschrieben ist (z. B. am Computer); es braucht die eigenhändige Unterschrift, einen eigenhändigen Zusatz und drei gleichzeitig anwesende Zeugen.", keywords: ["Computer", "Zusatz", "drei"], explain: "Am PC getippt geht auch – aber dann mit drei Zeugen und einem handschriftlichen Satz, dass das dein letzter Wille ist." },
    { id: "er-pflichtteil", term: "Pflichtteil", definition: "Mindestanspruch der Nachkommen und des Ehegatten in Höhe der Hälfte des gesetzlichen Erbteils; er ist ein Geldanspruch gegen die Erben.", keywords: ["Hälfte", "Geldanspruch"], explain: "Auch wer im Testament übergangen wird, bekommt als Kind oder Ehepartner mindestens die Hälfte von dem, was er ohne Testament bekommen hätte – in Geld.", example: "Gesetzlicher Erbteil 1/2 → Pflichtteil 1/4" },
    { id: "er-pflichtteilsberechtigt", term: "Pflichtteilsberechtigte", definition: "Nur die Nachkommen und der Ehegatte bzw. eingetragene Partner; Eltern sind seit 2017 nicht mehr pflichtteilsberechtigt.", keywords: ["Nachkommen", "Ehegatte", "Eltern"], explain: "Kinder, Enkel und Ehepartner – sonst niemand." },
    { id: "er-enterbung", term: "Enterbung", definition: "Völliger Entzug des Pflichtteils; nur aus schweren, im Gesetz genannten Gründen möglich, etwa einer schweren Straftat gegen den Erblasser.", keywords: ["Pflichtteils", "schweren"], explain: "Den Pflichtteil kann man nur in krassen Fällen wegnehmen – „ich mag dich nicht“ reicht nicht." },
    { id: "er-jung-alt", group: "Erbregel", term: "Jung vor Alt", definition: "Regel zwischen den Linien: Solange es Nachkommen des Erblassers gibt (erste Linie), erben Eltern, Geschwister und weitere Verwandte nichts.", keywords: ["Linien", "Nachkommen"], explain: "Die Jüngeren (Kinder, Enkel) kommen vor den Älteren (Eltern, Großeltern) dran." },
    { id: "er-alt-jung", group: "Erbregel", term: "Alt vor Jung", definition: "Regel innerhalb einer Linie: Zuerst erben die Stammeltern der Linie (z. B. die Eltern); deren Nachkommen (z. B. Geschwister) erben nur anstelle eines bereits verstorbenen Stammelternteils.", keywords: ["innerhalb", "Stammeltern", "verstorbenen"], explain: "In der 2. Linie erben zuerst Mama und Papa. Die Geschwister kommen erst zum Zug, wenn ein Elternteil schon tot ist." },
    { id: "er-repraesentation", group: "Erbregel", term: "Repräsentation", definition: "Ist ein Erbe vorverstorben, treten seine Nachkommen an seine Stelle und teilen sich seinen Anteil; sie geht der Anwachsung vor.", keywords: ["Nachkommen", "Stelle", "Anwachsung"], explain: "Die Kinder „vertreten“ ihren toten Elternteil beim Erben." },
    { id: "er-anwachsung", group: "Erbregel", term: "Anwachsung", definition: "Hinterlässt ein vorverstorbener Erbe keine Nachkommen, wächst sein Anteil den übrigen Erben derselben Gruppe zu.", keywords: ["keine Nachkommen", "übrigen Erben"], explain: "Wenn ein Stamm leer ist, wird sein Stück auf die anderen verteilt." },
    { id: "er-stamm", group: "Erbregel", term: "Stamm", definition: "Ein Kind (bzw. Elternteil, Großelternteil) des Erblassers samt seinen Nachkommen; der Nachlass wird zuerst gleichmäßig auf die Stämme aufgeteilt.", keywords: ["Nachkommen", "gleichmäßig"], explain: "Jedes Kind ist ein „Ast“ im Familienbaum – jeder Ast bekommt gleich viel, egal wie viele Zweige er hat." },
    { id: "er-halbgeschwister", term: "Halbgeschwister im Erbrecht", definition: "Halbgeschwister erben nur über den gemeinsamen Elternteil, also nur aus dessen Hälfte; vollbürtige Geschwister erben aus beiden Hälften.", keywords: ["gemeinsamen Elternteil", "beiden Hälften"], explain: "Ein Halbbruder hat nur einen Elternteil mit dir gemeinsam – er bekommt nur aus diesem „Topf“ etwas." },
    { id: "er-vierte-linie", term: "Vierte Linie (Urgroßeltern)", definition: "In der vierten Linie erben nur die Urgroßeltern selbst, je ein Achtel; solange ein Urgroßelternteil lebt, sind alle ihre Nachkommen von der Erbfolge ausgeschlossen.", keywords: ["Urgroßeltern", "Achtel", "ausgeschlossen"], explain: "Ganz oben im Baum ist Schluss: Großtanten und Co. erben nie, solange noch ein Urgroßelternteil lebt." },
  ],
  facts: [
    { id: "er-t1", statement: "Gibt es ein Testament, geht es der gesetzlichen Erbfolge vor.", isTrue: true, correction: "Das **Testament** (gewillkürte Erbfolge) geht vor; die gesetzliche Erbfolge gilt, wenn keines vorhanden ist oder es nicht alles regelt." },
    { id: "er-t2", statement: "Hinterlässt der Verstorbene Kinder, erben seine Eltern und Geschwister ebenfalls einen Teil.", isTrue: false, correction: "Die **nähere Linie schließt die fernere aus** – neben Kindern erben Eltern und Geschwister **nichts**." },
    { id: "er-t3", statement: "Der Ehegatte erbt neben Kindern ein Drittel.", isTrue: true, correction: "Die Kinder teilen sich die übrigen **zwei Drittel**." },
    { id: "er-t4", statement: "Neben den Eltern des Verstorbenen erbt der Ehegatte die Hälfte.", isTrue: false, correction: "Neben den Eltern erbt der Ehegatte **zwei Drittel**." },
    { id: "er-t5", statement: "Lebensgefährten haben dasselbe gesetzliche Erbrecht wie Ehegatten.", isTrue: false, correction: "Lebensgefährten erben ohne Testament nur, wenn es **keine gesetzlichen Erben** gibt (außerordentliches Erbrecht, 3 Jahre Haushalt)." },
    { id: "er-t6", statement: "Ein eigenhändiges Testament muss zur Gänze handgeschrieben und unterschrieben sein.", isTrue: true, correction: "Dann braucht es **keine Zeugen**." },
    { id: "er-t7", statement: "Ein am Computer geschriebenes und unterschriebenes Testament ist ohne Zeugen gültig.", isTrue: false, correction: "Ein **fremdhändiges** Testament braucht **eigenhändigen Zusatz** und **drei gleichzeitig anwesende Zeugen**." },
    { id: "er-t8", statement: "Der Pflichtteil beträgt die Hälfte des gesetzlichen Erbteils.", isTrue: true, correction: "Beispiel: gesetzlicher Erbteil 1/2 → Pflichtteil **1/4**." },
    { id: "er-t9", statement: "Eltern haben auch heute noch einen Pflichtteilsanspruch.", isTrue: false, correction: "Seit der Reform **2017** haben Eltern **keinen** Pflichtteil mehr; nur **Nachkommen und Ehegatte**." },
    { id: "er-t10", statement: "Der Pflichtteil ist ein Anspruch auf Geld, nicht auf bestimmte Gegenstände.", isTrue: true, correction: "Man kann von den Erben **Geld** verlangen, nicht z. B. das Haus selbst." },
    { id: "er-t11", statement: "Ein Testament kann jederzeit widerrufen oder durch ein neues ersetzt werden.", isTrue: true, correction: "Es ist eine **einseitige** Erklärung des Erblassers." },
    { id: "er-t12", statement: "Ist ein Kind des Erblassers schon gestorben, erhalten dessen Kinder seinen Anteil.", isTrue: true, correction: "Die **Enkel treten an die Stelle** ihres verstorbenen Elternteils." },
    { id: "er-t13", statement: "Geschwister sind pflichtteilsberechtigt.", isTrue: false, correction: "Pflichtteilsberechtigt sind **nur Nachkommen und Ehegatte**." },
    { id: "er-t-r1", statement: "Leben die Eltern des Erblassers, erben seine Geschwister nichts (sofern es keine Kinder gibt).", isTrue: true, correction: "**Alt vor Jung**: In der 2. Linie erben zuerst die **Eltern**; Geschwister nur anstelle eines toten Elternteils." },
    { id: "er-t-r2", statement: "Ein kinderlos verstorbenes Kind des Erblassers wird durch seine Geschwister repräsentiert.", isTrue: false, correction: "Repräsentieren können nur **Nachkommen**. Ohne Nachkommen gibt es **Anwachsung** an die übrigen Stämme." },
    { id: "er-t-r3", statement: "Repräsentation geht der Anwachsung vor.", isTrue: true, correction: "Zuerst bekommen die **Nachkommen** des Vorverstorbenen seinen Anteil; nur wenn es keine gibt, wächst er den anderen zu." },
    { id: "er-t-r4", statement: "Halbgeschwister erben gleich viel wie vollbürtige Geschwister.", isTrue: false, correction: "Halbgeschwister erben nur aus der **Hälfte des gemeinsamen Elternteils**, vollbürtige aus **beiden Hälften**." },
    { id: "er-t-r5", statement: "In der vierten Linie erben auch Großtanten, wenn noch ein Urgroßelternteil lebt.", isTrue: false, correction: "In der 4. Linie erben **nur die Urgroßeltern selbst**; solange einer lebt, sind alle Nachkommen ausgeschlossen." },
    { id: "er-t-r6", statement: "Hat der Erblasser drei Kinder, bekommt jeder Stamm ein Drittel.", isTrue: true, correction: "Aufteilung nach **Stämmen**; lebt ein Kind nicht mehr, teilen seine Kinder dessen Drittel." },
  ],
  questions: [
    { id: "er-q1", type: "order", question: "Ordne die **Linien (Parentelen)** der gesetzlichen Erbfolge – die erste kommt zuerst zum Zug.", items: ["Kinder und deren Nachkommen", "Eltern und deren Nachkommen (Geschwister)", "Großeltern und deren Nachkommen", "Urgroßeltern"], explanation: "Eine **nähere** Linie schließt alle **ferneren** aus." },
    { id: "er-q2", type: "mc", question: "Fall: Herr Wagner stirbt ohne Testament. Er hinterlässt seine Ehefrau, zwei Kinder und seine Mutter. Wer erbt?", options: ["Ehefrau 1/3, jedes Kind 1/3", "Ehefrau 1/2, Kinder je 1/4", "Ehefrau, Kinder und Mutter je 1/4", "Nur die Kinder je 1/2"], correct: [0], explanation: "Neben **Kindern** erbt die Ehefrau **1/3**, die Kinder teilen **2/3** (je 1/3). Die **Mutter** (2. Linie) erbt nichts, weil die 1. Linie vorhanden ist." },
    { id: "er-q3", type: "mc", question: "Fall: Sandra (verheiratet, keine Kinder) stirbt ohne Testament. Ihre Eltern und ihr Bruder leben. Wer erbt?", options: ["Ehemann 2/3, Eltern zusammen 1/3", "Ehemann alles", "Ehemann 1/3, Eltern 1/3, Bruder 1/3", "Ehemann 1/2, Eltern 1/2"], correct: [0], explanation: "Neben den **Eltern** erbt der Ehegatte **2/3**. **Geschwister** erben neben dem Ehegatten **nichts**." },
    { id: "er-q4", type: "mc", question: "Fall: Max lebte 10 Jahre mit Anna zusammen, sie waren nicht verheiratet. Max stirbt ohne Testament und hat eine Schwester. Was gilt?", options: ["Die Schwester erbt alles", "Anna erbt alles", "Anna und die Schwester je die Hälfte", "Anna hat einen Pflichtteil"], correct: [0], explanation: "Lebensgefährten haben **kein** gesetzliches Erbrecht neben gesetzlichen Erben. Die **Schwester** (2. Linie) erbt. Anna darf nur **1 Jahr** in der Wohnung bleiben – sie hätte ein **Testament** gebraucht." },
    { id: "er-q5", type: "mc", question: "Wer ist **pflichtteilsberechtigt**?", options: ["Kinder", "Enkel, deren Elternteil schon gestorben ist", "Ehegatte", "Eltern", "Lebensgefährtin", "Geschwister"], correct: [0, 1, 2], explanation: "Nur **Nachkommen** und **Ehegatte** bzw. eingetragener Partner. Eltern seit 2017 nicht mehr." },
    { id: "er-q6", type: "mc", question: "Opa tippt sein Testament am Computer, druckt es aus und unterschreibt allein zu Hause. Ist es gültig?", options: ["Nein – ein fremdhändiges Testament braucht einen eigenhändigen Zusatz und 3 gleichzeitig anwesende Zeugen", "Ja, die Unterschrift reicht", "Ja, wenn er es beim Notar abgibt", "Nur, wenn es weniger als eine Seite hat"], correct: [0], explanation: "Nur ein **vollständig handgeschriebenes** Testament braucht keine Zeugen. Am Computer = **fremdhändig** → Zusatz + **3 Zeugen**." },
    { id: "er-q7", type: "open", question: "Fall: Mutter Eva setzt in ihrem Testament nur ihren Sohn Paul als Alleinerben ein. Ihre Tochter Lea wird nicht erwähnt. Eva war geschieden, der Nachlass beträgt 120.000 €. Was steht Lea zu?", answer: "Lea ist als Kind pflichtteilsberechtigt. Ohne Testament hätte sie die Hälfte geerbt (zwei Kinder, kein Ehegatte), ihr Pflichtteil ist die Hälfte davon, also 1/4 = 30.000 €. Das ist ein Geldanspruch gegen Paul als Erben.", keywords: ["Pflichtteil", "Hälfte", "30.000", "Geldanspruch"] },
    { id: "er-q-r1", type: "mc", question: "Fall: Oma Rosa stirbt ohne Testament, nicht verheiratet. Sie hatte 3 Kinder: Anna (lebt), Ben (tot, 2 Kinder) und Clara (tot, kinderlos). Wer erbt wie viel?", options: ["Anna 1/2, Bens Kinder je 1/4", "Anna 1/3, Bens Kinder je 1/6, Rest an den Staat", "Anna 1/3, Bens Kinder je 1/3", "Anna alles"], correct: [0], explanation: "Clara ist **kinderlos** vorverstorben → ihr Drittel **wächst an** → nur noch 2 Stämme: Anna **1/2**, Stamm Ben **1/2** → seine Kinder **repräsentieren** ihn: je **1/4**." },
    { id: "er-q-r2", type: "mc", question: "Fall: Tom (ledig, kinderlos) stirbt ohne Testament. Seine Mutter lebt, sein Vater ist tot. Tom hat eine Schwester (gleiche Eltern). Wer erbt?", options: ["Mutter 1/2, Schwester 1/2", "Mutter alles", "Schwester alles", "Mutter 1/3, Schwester 2/3"], correct: [0], explanation: "2. Linie: Mutter und Vater je **1/2** (Alt vor Jung). Der Vater ist tot → seine Hälfte geht an **seine Nachkommen** = die Schwester (Repräsentation)." },
    { id: "er-q-r3", type: "mc", question: "Fall: Lisa (ledig, kinderlos) stirbt; beide Eltern sind tot. Sie hat einen vollbürtigen Bruder und eine Halbschwester (gleiche Mutter). Wer erbt?", options: ["Bruder 3/4, Halbschwester 1/4", "Bruder 1/2, Halbschwester 1/2", "Bruder alles", "Bruder 2/3, Halbschwester 1/3"], correct: [0], explanation: "Mutter-Hälfte **1/2** → Bruder und Halbschwester je **1/4**. Vater-Hälfte **1/2** → nur der Bruder (die Halbschwester ist nicht Kind des Vaters). Bruder: 1/4 + 1/2 = **3/4**, Halbschwester **1/4**." },
    { id: "er-q-r4", type: "order", question: "Bring die drei **Verteilungsregeln** aus dem Unterricht in die Reihenfolge, in der du sie prüfst.", items: ["Jung vor Alt (welche Linie?)", "Alt vor Jung (innerhalb der Linie)", "Repräsentation vor Anwachsung (vorverstorbene Erben)"], explanation: "Erst die **Linie** bestimmen, dann innerhalb der Linie die **Stammeltern**, zuletzt klären, wohin die Anteile **Vorverstorbener** gehen." },
    { id: "er-q-r5", type: "open", question: "Erkläre den Unterschied zwischen **Repräsentation** und **Anwachsung** mit einem Beispiel.", answer: "Repräsentation: Ein vorverstorbener Erbe wird von seinen Nachkommen vertreten, die sich seinen Anteil teilen (z. B. der Sohn des Erblassers ist tot, seine zwei Kinder bekommen je die Hälfte seines Anteils). Anwachsung: Hat der Vorverstorbene keine Nachkommen, wächst sein Anteil den übrigen Erben zu (z. B. eine kinderlos verstorbene Tochter – ihr Anteil wird auf die Geschwister-Stämme verteilt). Repräsentation geht der Anwachsung vor.", keywords: ["Nachkommen", "Anteil", "keine Nachkommen", "übrigen", "vor"] },
  ],
  calcs: [
    {
      id: "er-calc-ehe-kinder",
      title: "Erbteil eines Kindes neben dem Ehegatten",
      vars: { n: [60000, 600000, 30000], k: [1, 4, 1] },
      text: (v) => `Ein Vater stirbt ohne Testament. Er hinterlässt seine Ehefrau und **${v.k} ${v.k === 1 ? "Kind" : "Kinder"}**. Der Nachlass beträgt **${eur(v.n)}**. Wie viel erbt **ein** Kind?`,
      solve: (v) => Math.round(((v.n * 2) / 3 / v.k) * 100) / 100,
      unit: "€",
      tolerance: 1,
      explanation: (v) => `Neben Kindern erbt die Ehefrau **1/3**. Die Kinder teilen sich **2/3**: ${eur(v.n)} × 2/3 = ${eur(Math.round((v.n * 2) / 3))}${v.k > 1 ? `, geteilt durch ${v.k} = **${eur(Math.round(((v.n * 2) / 3 / v.k) * 100) / 100)}**` : " → das eine Kind bekommt alles davon"}.`,
    },
    {
      id: "er-calc-pflichtteil",
      title: "Pflichtteil eines übergangenen Kindes",
      vars: { n: [60000, 600000, 30000], k: [2, 4, 1], ehe: [0, 1, 1] },
      text: (v) => `Eine Mutter${v.ehe ? " (verheiratet)" : " (geschieden)"} setzt im Testament einen Verein als Alleinerben ein. Sie hinterlässt **${v.k} Kinder**${v.ehe ? " und ihren Ehemann" : ""}. Nachlass: **${eur(v.n)}**. Wie hoch ist der **Pflichtteil eines Kindes**?`,
      solve: (v) => Math.round(((v.ehe ? (v.n * 2) / 3 : v.n) / v.k / 2) * 100) / 100,
      unit: "€",
      tolerance: 1,
      explanation: (v) => {
        const kinder = v.ehe ? (v.n * 2) / 3 : v.n;
        const erbteil = kinder / v.k;
        return `${v.ehe ? `Neben dem Ehemann (1/3) bekommen die Kinder **2/3** = ${eur(Math.round(kinder))}. ` : "Ohne Ehegatten erben die Kinder **alles**. "}Gesetzlicher Erbteil pro Kind: ${eur(Math.round(kinder))} ÷ ${v.k} = ${eur(Math.round(erbteil * 100) / 100)}. Pflichtteil = **die Hälfte** = **${eur(Math.round((erbteil / 2) * 100) / 100)}**.`;
      },
    },
    {
      id: "er-calc-ehe-eltern",
      title: "Erbteil des Ehegatten neben den Eltern",
      vars: { n: [60000, 600000, 30000] },
      text: (v) => `Eine kinderlose Frau stirbt ohne Testament. Es leben ihr Ehemann, ihre beiden Eltern und eine Schwester. Nachlass: **${eur(v.n)}**. Wie viel erbt der **Ehemann**?`,
      solve: (v) => Math.round(((v.n * 2) / 3) * 100) / 100,
      unit: "€",
      tolerance: 1,
      explanation: (v) => `Neben den **Eltern** erbt der Ehegatte **2/3**: ${eur(v.n)} × 2/3 = **${eur(Math.round(((v.n * 2) / 3) * 100) / 100)}**. Die Eltern bekommen zusammen 1/3, die **Schwester nichts**.`,
    },
  ],
};

export default chapter;
