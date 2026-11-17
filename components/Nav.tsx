"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  ["/", "Übersicht"],
  ["/stoff", "Stoff"],
  ["/zusammenfassung", "Zusammenfassung"],
  ["/karten", "Lernkarten"],
  ["/quiz", "Quiz"],
  ["/test", "Probetest"],
];

export default function Nav() {
  const path = usePathname();
  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="brand">📈 WiLern</Link>
        {LINKS.map(([href, label]) => (
          <Link key={href} href={href} className={path === href ? "active" : ""}>{label}</Link>
        ))}
      </div>
    </nav>
  );
}
