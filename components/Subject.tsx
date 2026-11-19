"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getSubject, subjects } from "@/content";
import { setActiveSubject } from "@/lib/storage";
import type { Chapter, Subject } from "@/lib/types";

type Ctx = { subject: Subject; chapters: Chapter[]; focus: boolean; setFocus: (v: boolean) => void; hasScope: boolean };
const SubjectCtx = createContext<Ctx>({ subject: subjects[0], chapters: subjects[0].chapters, focus: false, setFocus: () => {}, hasScope: false });

const focusKey = (id: string) => `lernapp-${id}-nur-teststoff`;

/** Nur Teststoff: Kapitel und Einträge, die laut Teststoff-Blatt nicht kommen, ausblenden */
export function filterToTest(chapters: Chapter[]): Chapter[] {
  return chapters
    .filter((c) => !c.offTest)
    .map((c) => ({
      ...c,
      concepts: c.concepts.filter((x) => !x.offTest),
      facts: c.facts.filter((x) => !x.offTest),
      questions: c.questions.filter((x) => !x.offTest),
      calcs: c.calcs?.filter((x) => !x.offTest),
    }));
}

/** Volle Kapitel (Teststoff-Filter aus): ausgelagerte Abschnitte wieder anhängen */
function withExtras(chapters: Chapter[]): Chapter[] {
  return chapters.map((c) => ({
    ...c,
    stoff: c.stoffExtra ? `${c.stoff}\n\n${c.stoffExtra}` : c.stoff,
    summary: c.summaryExtra ? `${c.summary}\n\n${c.summaryExtra}` : c.summary,
  }));
}

/** Stellt das aktuelle Fach bereit und schaltet den Speicher auf dieses Fach um */
export function SubjectProvider({ id, children }: { id: string; children: React.ReactNode }) {
  const subject = getSubject(id) ?? subjects[0];
  setActiveSubject(subject.id, subject.defaultTestDate);
  const hasScope = !!subject.testScope;
  const [focus, setFocusState] = useState(hasScope); // Standard: nur Teststoff

  useEffect(() => {
    try {
      const v = localStorage.getItem(focusKey(subject.id));
      if (v !== null) setFocusState(v === "1");
    } catch {}
  }, [subject.id]);

  const setFocus = (v: boolean) => {
    setFocusState(v);
    try { localStorage.setItem(focusKey(subject.id), v ? "1" : "0"); } catch {}
  };

  const chapters = useMemo(
    () => (hasScope && focus ? filterToTest(subject.chapters) : withExtras(subject.chapters)),
    [subject, focus, hasScope],
  );

  return <SubjectCtx.Provider value={{ subject, chapters, focus: hasScope && focus, setFocus, hasScope }}>{children}</SubjectCtx.Provider>;
}

export const useSubject = () => useContext(SubjectCtx).subject;
export const useChapters = () => useContext(SubjectCtx).chapters;
export const useFocus = () => {
  const { focus, setFocus, hasScope, subject } = useContext(SubjectCtx);
  return { focus, setFocus, hasScope, subject };
};
