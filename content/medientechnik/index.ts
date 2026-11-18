import type { Chapter } from "@/lib/types";
import grundlagen from "./01-grundlagen";
import bestandteile from "./02-bestandteile";
import markenstrategie from "./03-markenstrategie";
import design from "./04-corporate-design";
import sprache from "./05-sprache-styleguide";

// Stoff: Skript „Corporate Identity – Zusammenfassung“ (10 Seiten), in eigenen Worten aufbereitet
export const chapters: Chapter[] = [grundlagen, bestandteile, markenstrategie, design, sprache];
