import "@fontsource-variable/atkinson-hyperlegible-next/wght.css";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";

export const metadata: Metadata = { title: "Lernapp", description: "Lernapp mit Stoff, Zusammenfassung, Lernkarten, Quiz und Probetests" };
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e7e8eb" },
    { media: "(prefers-color-scheme: dark)", color: "#0e0f11" },
  ],
};

// Setzt das gespeicherte Design vor dem ersten Zeichnen (kein Aufblitzen)
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <div className="shell">
          <Nav />
          <main className="wrap">{children}</main>
        </div>
      </body>
    </html>
  );
}
