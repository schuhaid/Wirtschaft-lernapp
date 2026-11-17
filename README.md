# Wirtschaft – Lernapp

Next.js-Lernapp mit Stoff, Zusammenfassung, Lernkarten (Spaced Repetition), Quiz und Probetest.
Der Fortschritt wird lokal im Browser gespeichert, Login oder Datenbank braucht es nicht.

## Lokal starten
```bash
npm install
npm run dev      # → http://localhost:3000
```

## Auf Vercel deployen
**Variante A (GitHub):** Ordner in ein GitHub-Repo pushen → auf vercel.com „Add New → Project" → Repo importieren → Deploy. Next.js wird automatisch erkannt.

**Variante B (CLI):**
```bash
npx vercel        # erstes Mal: Projekt anlegen
npx vercel --prod # live schalten
```

## Stoff einpflegen
Jedes Kapitel ist eine Datei in `content/` und wird in `content/index.ts` eingetragen.

| Feld | Wofür |
|---|---|
| `stoff` | gesamter Stoff (Markdown) → Seite „Stoff" |
| `summary` | Zusammenfassung (Markdown) |
| `concepts` | Begriffe + Definition + Schlüsselwörter + Beispiel → daraus entstehen automatisch Lernkarten (beide Richtungen), MC-Fragen, Richtig/Falsch, Lückentexte, Zuordnungen, offene Fragen |
| `facts` | Aussagen (richtig/falsch) mit Korrektur |
| `questions` | handgeschriebene MC- (auch mit mehreren richtigen Antworten), offene und Reihenfolge-Fragen |
| `calcs` | Rechenaufgaben mit Zufallszahlen und Lösungsweg |

`group` bei Begriffen sorgt für knifflige Falschantworten (z. B. alle 4 P in einer Gruppe).

## Wie die Fragen variieren
- Jede Vorlage erzeugt bei jedem Aufruf eine neue Variante (andere Falschantworten, Reihenfolge, Formulierung, Zahlen, wahr/falsch).
- Die Auswahl ist gewichtet: Fragen, die du noch nie gesehen hast oder falsch hattest, kommen öfter. Fragen, die du gerade erst gesehen oder mehrmals richtig hattest, kommen seltener.
- Lückentext und Zahlen sind tippfehler-tolerant und akzeptieren `1.500` / `1.234,56`.
