"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const LINKS = [
  ["/", "Übersicht"],
  ["/stoff", "Stoff"],
  ["/zusammenfassung", "Zusammenfassung"],
  ["/karten", "Lernkarten"],
  ["/quiz", "Quiz"],
  ["/test", "Probetest"],
];

type Theme = "auto" | "light" | "dark";
const NEXT: Record<Theme, Theme> = { auto: "light", light: "dark", dark: "auto" };
const LABEL: Record<Theme, string> = { auto: "Design: automatisch (wie System)", light: "Design: hell", dark: "Design: dunkel" };

function applyTheme(t: Theme) {
  const el = document.documentElement;
  if (t === "auto") el.removeAttribute("data-theme");
  else el.setAttribute("data-theme", t);
  try { localStorage.setItem("theme", t); } catch {}
}

function Icon({ t }: { t: Theme }) {
  if (t === "light")
    return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>);
  if (t === "dark")
    return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>);
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" /></svg>);
}

export default function Nav() {
  const path = usePathname();
  const [theme, setTheme] = useState<Theme>("auto");
  useEffect(() => {
    try { setTheme((localStorage.getItem("theme") as Theme) || "auto"); } catch {}
  }, []);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-links">
          <Link href="/" className="brand" aria-label="Zur Übersicht"><span className="brand-mark">§</span></Link>
          {LINKS.map(([href, label]) => (
            <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
          ))}
        </div>
        <button className="theme-btn" title={LABEL[theme]} aria-label={LABEL[theme]}
          onClick={() => { const n = NEXT[theme]; setTheme(n); applyTheme(n); }}>
          <Icon t={theme} />
        </button>
      </div>
    </nav>
  );
}
