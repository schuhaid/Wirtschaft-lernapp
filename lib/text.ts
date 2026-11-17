export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length,
    n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, i) => i);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

/** Tippfehler-tolerant: ca. 1 Fehler pro 5 Zeichen */
export function fuzzyEqual(input: string, target: string): boolean {
  const a = normalize(input),
    b = normalize(target);
  if (!a) return false;
  if (a === b) return true;
  const allowed = Math.floor(b.length / 5);
  return levenshtein(a, b) <= allowed;
}

/** Welche Schlüsselwörter kommen (ungefähr) in der Antwort vor? */
export function keywordHits(answer: string, keywords: string[]): boolean[] {
  const words = normalize(answer).split(" ");
  const full = normalize(answer);
  return keywords.map((k) => {
    const nk = normalize(k);
    if (full.includes(nk)) return true;
    if (nk.includes(" ")) return false;
    return words.some((w) => w.length >= 4 && levenshtein(w, nk) <= Math.floor(nk.length / 5));
  });
}

export function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function fmt(n: number, digits = 2): string {
  return n.toLocaleString("de-AT", { maximumFractionDigits: digits });
}
