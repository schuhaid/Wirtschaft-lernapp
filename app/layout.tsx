import "@fontsource-variable/atkinson-hyperlegible-next/wght.css";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Nav from "@/components/Nav";
import { COURSE_TITLE } from "@/content";

export const metadata: Metadata = { title: COURSE_TITLE, description: "Lernapp für den Test in Wirtschaft und Recht" };
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f5f8" },
    { media: "(prefers-color-scheme: dark)", color: "#171b22" },
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
        <Nav />
        <main className="wrap">{children}</main>
      </body>
    </html>
  );
}
