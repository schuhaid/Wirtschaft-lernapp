import type { Chapter } from "@/lib/types";
import marketing from "./demo-marketing";
import kosten from "./demo-kosten";

export const COURSE_TITLE = "Wirtschaft – Lernapp";

// Neue Kapitel hier importieren und eintragen.
export const chapters: Chapter[] = [marketing, kosten];
