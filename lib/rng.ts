export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function sample<T>(arr: T[], n: number): T[] {
  return shuffle(arr).slice(0, n);
}

/** Gewichtete Auswahl ohne Zurücklegen */
export function weightedSample<T>(items: T[], weights: number[], n: number): T[] {
  const pool = items.map((it, i) => ({ it, w: Math.max(weights[i], 0.0001) }));
  const out: T[] = [];
  while (out.length < n && pool.length) {
    const total = pool.reduce((s, p) => s + p.w, 0);
    let r = Math.random() * total;
    let idx = 0;
    for (; idx < pool.length; idx++) {
      r -= pool[idx].w;
      if (r <= 0) break;
    }
    idx = Math.min(idx, pool.length - 1);
    out.push(pool[idx].it);
    pool.splice(idx, 1);
  }
  return out;
}

export function randInRange(min: number, max: number, step: number): number {
  const steps = Math.floor((max - min) / step);
  const v = min + Math.floor(Math.random() * (steps + 1)) * step;
  return Math.round(v * 1e6) / 1e6;
}

export const uid = () => Math.random().toString(36).slice(2, 10);
