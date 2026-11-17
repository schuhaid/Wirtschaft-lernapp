"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconAuto, IconBook, IconCards, IconClipboard, IconHome, IconList, IconMoon, IconSun, IconTarget } from "./Icons";

const LINKS = [
  { href: "/", label: "Übersicht", Icon: IconHome },
  { href: "/stoff", label: "Stoff", Icon: IconBook },
  { href: "/zusammenfassung", label: "Zusammenfassung", Icon: IconList },
  { href: "/karten", label: "Lernkarten", Icon: IconCards },
  { href: "/quiz", label: "Quiz", Icon: IconTarget },
  { href: "/test", label: "Probetest", Icon: IconClipboard },
];

type Theme = "auto" | "light" | "dark";
const NEXT: Record<Theme, Theme> = { auto: "light", light: "dark", dark: "auto" };
const NAME: Record<Theme, string> = { auto: "Automatisch", light: "Hell", dark: "Dunkel" };

// Beim Umschalten alle Übergänge kurz abschalten, damit die Farben nicht verschmieren
function withoutTransitions(change: () => void) {
  const style = document.createElement("style");
  style.append(document.createTextNode("*,*::before,*::after{transition:none !important}"));
  document.head.append(style);
  change();
  void document.body.offsetHeight;
  requestAnimationFrame(() => requestAnimationFrame(() => style.remove()));
}

function applyTheme(t: Theme) {
  withoutTransitions(() => {
    const el = document.documentElement;
    if (t === "auto") el.removeAttribute("data-theme");
    else el.setAttribute("data-theme", t);
  });
  try { localStorage.setItem("theme", t); } catch {}
}

export default function Nav() {
  const path = usePathname();
  const [theme, setTheme] = useState<Theme>("auto");

  useEffect(() => {
    try { setTheme((localStorage.getItem("theme") as Theme) || "auto"); } catch {}
    // Systemwechsel (hell/dunkel) ebenfalls ohne Übergänge
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => withoutTransitions(() => {});
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const ThemeIcon = theme === "light" ? IconSun : theme === "dark" ? IconMoon : IconAuto;

  return (
    <nav className="nav" aria-label="Hauptnavigation">
      <div className="nav-inner">
        <div className="brand-row">
          <Link href="/" className="brand" aria-label="Zur Übersicht">§</Link>
          <div className="brand-text">Wirtschaft &amp; Recht<span>Lernapp</span></div>
        </div>
        <div className="nav-links">
          {LINKS.map(({ href, label, Icon }) => (
            <Link key={href} href={href} className={"nav-link" + (path === href ? " active" : "")} aria-current={path === href ? "page" : undefined}>
              <Icon /><span>{label}</span>
            </Link>
          ))}
        </div>
        <div className="nav-foot">
          <button className="theme-btn" aria-label={`Design: ${NAME[theme]}. Klicken zum Wechseln.`}
            onClick={() => { const n = NEXT[theme]; setTheme(n); applyTheme(n); }}>
            <ThemeIcon /><span className="theme-name">{NAME[theme]}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
