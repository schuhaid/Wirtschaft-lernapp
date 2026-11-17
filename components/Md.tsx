import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Node = { type: string; value?: string; children?: Node[]; data?: Record<string, unknown> };

// Kleines remark-Plugin: Suchbegriff in Textknoten als <mark> hervorheben
function remarkHighlight(term?: string) {
  return () => (tree: Node) => {
    if (!term || term.trim().length < 2) return;
    const re = new RegExp(`(${term.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
    const walk = (n: Node) => {
      if (!n.children) return;
      n.children = n.children.flatMap((c) => {
        if (c.type === "text" && c.value && re.test(c.value)) {
          re.lastIndex = 0;
          return c.value.split(re).filter(Boolean).map((part) =>
            part.toLowerCase() === term.trim().toLowerCase()
              ? { type: "mark", data: { hName: "mark" }, children: [{ type: "text", value: part }] }
              : { type: "text", value: part },
          );
        }
        walk(c);
        return [c];
      });
    };
    walk(tree);
  };
}

export default function Md({ children, className = "", highlight }: { children: string; className?: string; highlight?: string }) {
  return (
    <div className={"md " + className}>
      <ReactMarkdown remarkPlugins={[remarkGfm, remarkHighlight(highlight)]}>{children}</ReactMarkdown>
    </div>
  );
}
