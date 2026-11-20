import type { Metadata } from "next";
import Link from "next/link";
import { entity } from "@/lib/entity";
import { brainFramework, frameworks, frameworksHub as hub } from "@/lib/frameworks";
import { frameworksCollectionSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Marketing & AEO Frameworks by Julian Lopez",
  description: `Answer Engine Optimization frameworks created by ${entity.name}: the B.R.A.I.N. Framework, the AI Visibility Score and a long-term execution framework for building a brand in the brain of AI, grounded in classic marketing frameworks.`,
  alternates: { canonical: "/frameworks/" },
};

export default function FrameworksIndex() {
  return (
    <article>
      <JsonLd data={frameworksCollectionSchema()} />
      <p className="label">Frameworks</p>
      <h1 style={{ marginTop: "1rem" }}>
        Frameworks by {entity.name}
        <br />
        <span style={{ color: "var(--ink-soft)" }}>Building a brand in the brain of AI</span>
      </h1>
      <p className="lede" style={{ marginTop: "1rem", maxWidth: "66ch" }}>{hub.intro}</p>

      {/* KINDS */}
      <section className="qa" aria-labelledby="h-kinds">
        <h2 id="h-kinds">What kinds of frameworks does {entity.name} work on?</h2>
        <dl className="rows">
          {hub.kinds.map((k) => (
            <div className="row" key={k.name}>
              <dt>{k.name}</dt>
              <dd>{k.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CARDS */}
      <section className="qa" aria-labelledby="h-list">
        <h2 id="h-list">Frameworks</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
          {frameworks.map((f) => (
            <Link key={f.path} href={f.path} className="cell" style={{ textDecoration: "none", display: "block" }}>
              <span className="n">{f.kicker}</span>
              <h3 style={{ fontSize: "1.25rem" }}>{f.name}</h3>
              <p className="sub">Created by {entity.name}</p>
              <p>{f.summary}</p>
              <div className="tags">
                {f.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <p style={{ marginTop: "1rem", color: "var(--spring-laser)" }}>Read more &rarr;</p>
            </Link>
          ))}
        </div>
      </section>

      {/* EXECUTION */}
      <section className="qa" id="execution" aria-labelledby="h-exec">
        <p className="label">Execution</p>
        <h2 id="h-exec" style={{ marginTop: "0.8rem" }}>{hub.executionTitle}</h2>
        <p>{hub.executionIntro}</p>
        <ol className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", listStyle: "none", padding: 0 }}>
          {hub.execution.map((step, i) => (
            <li className="cell" key={step.name}>
              <span className="n">Step {i + 1} &middot; {step.pillar}</span>
              <h3>{step.name}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p style={{ marginTop: "1.25rem" }}>
          The full reasoning behind each step is in <Link href={brainFramework.path}>{brainFramework.name}</Link>.
        </p>
      </section>

      {/* CLASSICS */}
      <section className="qa" id="classic-frameworks" aria-labelledby="h-classics">
        <p className="label">Foundations</p>
        <h2 id="h-classics" style={{ marginTop: "0.8rem" }}>Classic marketing frameworks, applied to AI</h2>
        <p>{hub.classicIntro}</p>
        {hub.classics.map((c) => (
          <div key={c.name} style={{ marginTop: "1.25rem" }}>
            <h3>{c.name}</h3>
            <p style={{ marginTop: "0.2rem", fontFamily: "var(--font-mono)", fontSize: "0.74rem" }}>{c.origin}</p>
            <p style={{ marginTop: "0.4rem" }}>{c.idea} <strong style={{ color: "var(--white)" }}>In AI search:</strong> {c.ai}</p>
          </div>
        ))}
      </section>

      {/* PILLARS AT A GLANCE */}
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
