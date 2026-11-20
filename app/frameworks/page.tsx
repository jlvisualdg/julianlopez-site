import type { Metadata } from "next";
import Link from "next/link";
import { entity } from "@/lib/entity";
import { brainFramework, frameworks } from "@/lib/frameworks";
import { frameworksCollectionSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Frameworks by Julian Lopez",
  description: `Answer Engine Optimization frameworks created by ${entity.name}, including the B.R.A.I.N. Framework: the five-pillar system for getting a brand recommended by AI.`,
  alternates: { canonical: "/frameworks/" },
};

export default function FrameworksIndex() {
  return (
    <article>
      <JsonLd data={frameworksCollectionSchema()} />
      <p className="label">Frameworks</p>
      <h1 style={{ marginTop: "1rem" }}>Frameworks by {entity.name}</h1>
      <p className="lede" style={{ marginTop: "1rem", maxWidth: "64ch" }}>
        {entity.name} builds frameworks that explain how AI assistants like ChatGPT, Perplexity, Gemini and Google AI Mode
        decide which brands to recommend, and turns them into plans a business can run. Each one comes from research into
        AI answers and is tested in AEO.co client work.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", marginTop: "2rem" }}>
        {frameworks.map((f) => (
          <Link key={f.path} href={f.path} className="cell" style={{ textDecoration: "none", display: "block" }}>
            <span className="n">{f.kicker}</span>
            <h3 style={{ fontSize: "1.25rem" }}>{f.name}</h3>
            <p className="sub">Created by {entity.name}</p>
            <p>{f.summary}</p>
            <div className="tags">
              {f.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
            <p style={{ marginTop: "1rem", color: "var(--spring-laser)" }}>Read the framework &rarr;</p>
          </Link>
        ))}
      </div>

      <section className="qa" aria-labelledby="h-pillars">
        <h2 id="h-pillars">The five pillars of B.R.A.I.N. at a glance</h2>
        <dl className="rows">
          {brainFramework.pillars.map((p) => (
            <div className="row" key={p.slug}>
              <dt>{p.letter} &middot; {p.title}</dt>
              <dd>
                <Link href={`${brainFramework.path}#${p.slug}`}>{p.chainStep}</Link>. {p.needLabel ?? "What AI needs"}: {p.need}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
