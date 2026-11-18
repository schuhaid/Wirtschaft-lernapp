import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSubject, subjects } from "@/content";
import { SubjectProvider } from "@/components/Subject";

export const dynamicParams = false;
export function generateStaticParams() {
  return subjects.map((s) => ({ fach: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ fach: string }> }): Promise<Metadata> {
  const { fach } = await params;
  const s = getSubject(fach);
  return { title: s ? `${s.title} – Lernapp` : "Lernapp" };
}

export default async function FachLayout({ children, params }: { children: React.ReactNode; params: Promise<{ fach: string }> }) {
  const { fach } = await params;
  if (!getSubject(fach)) notFound();
  return <SubjectProvider id={fach}>{children}</SubjectProvider>;
}
