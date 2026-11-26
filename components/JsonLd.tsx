import { siteSchema } from "@/lib/schema";

type Node = Record<string, unknown>;

// Injects the page's ONE JSON-LD block (schema-reference.md §0A/§0B, G14): the site-wide
// nodes (WebSite + Person identity core) merged into the page's @graph, one definition
// per @id (page properties extend the site-wide ones). Server component: crawlers and
// answer engines read it on first parse.
export default function JsonLd({ data }: { data: Node }) {
  const pageNodes = (Array.isArray(data["@graph"]) ? data["@graph"] : [data]) as Node[];
  const byId = new Map<string, Node>();
  const out: Node[] = [];
  for (const n of [...(siteSchema()["@graph"] as Node[]), ...pageNodes]) {
    const { "@context": _ctx, ...node } = n;
    const id = typeof node["@id"] === "string" ? (node["@id"] as string) : null;
    if (id && byId.has(id)) {
      Object.assign(byId.get(id)!, node);
      continue;
    }
    if (id) byId.set(id, node);
    out.push(node);
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": out }) }}
    />
  );
}
