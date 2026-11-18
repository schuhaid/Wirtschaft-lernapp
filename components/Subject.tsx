"use client";
import { createContext, useContext } from "react";
import { getSubject, subjects } from "@/content";
import { setActiveSubject } from "@/lib/storage";
import type { Subject } from "@/lib/types";

const Ctx = createContext<Subject>(subjects[0]);

/** Stellt das aktuelle Fach bereit und schaltet den Speicher auf dieses Fach um */
export function SubjectProvider({ id, children }: { id: string; children: React.ReactNode }) {
  const subject = getSubject(id) ?? subjects[0];
  setActiveSubject(subject.id, subject.defaultTestDate);
  return <Ctx.Provider value={subject}>{children}</Ctx.Provider>;
}

export const useSubject = () => useContext(Ctx);
export const useChapters = () => useContext(Ctx).chapters;
