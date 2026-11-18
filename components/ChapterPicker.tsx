"use client";
import { useChapters } from "@/components/Subject";

export default function ChapterPicker({ value, onChange }: { value: string[]; onChange: (v: string[]) => void }) {
  const chapters = useChapters();
  const all = value.length === 0;
  return (
    <div className="row">
      <button className={"chip" + (all ? " on" : "")} onClick={() => onChange([])}>Alle Kapitel</button>
      {chapters.map((c) => {
        const on = value.includes(c.id);
        return (
          <button key={c.id} className={"chip" + (on ? " on" : "")}
            onClick={() => onChange(on ? value.filter((x) => x !== c.id) : [...value, c.id])}>
            {c.title}
          </button>
        );
      })}
    </div>
  );
}
