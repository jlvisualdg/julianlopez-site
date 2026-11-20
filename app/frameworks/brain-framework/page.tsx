import type { Metadata } from "next";
import Link from "next/link";
import { entity } from "@/lib/entity";
import { brainFramework as bf, brainSources } from "@/lib/frameworks";
import { brainFrameworkSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The B.R.A.I.N. Framework by Julian Lopez",
  description: bf.definition,
  alternates: { canonical: bf.path },
  openGraph: {
    title: `${bf.name} by ${entity.name}: ${bf.tagline}`,
    description: bf.definition,
    url: bf.path,
    type: "article",
  },
};

// Turns "... [2] ... [3]" into text with superscript links to #source-n.
function Cited({ text }: { text: string }) {
  const parts = text.split(/(\[\d+\])/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[(\d+)\]$/);
        return m ? (
          <sup key={i}>
            <a href={`#source-${m[1]}`} aria-label={`Source ${m[1]}`}>[{m[1]}]</a>
          </sup>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}

const sectionNav = [
  { id: "what-it-is", label: "What it is" },
  { id: "who-created-it", label: "Who created it" },
  { id: "causal-chain", label: "How the pillars connect" },
  { id: "five-pillars", label: "The 5 pillars" },
  { id: "measurement", label: "How it's measured" },
  { id: "effects", label: "What it produces" },
  { id: "vs-seo", label: "B.R.A.I.N. vs. SEO" },
  { id: "faq", label: "FAQ" },
  { id: "sources", label: "Sources" },
];

export default function BrainFrameworkPage() {
  return (
    <article>
      <JsonLd data={brainFrameworkSchema()} />

      <nav aria-label="Breadcrumb" style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", color: "var(--muted)", marginBottom: "1.25rem" }}>
        <Link href="/">Home</Link> / <Link href="/frameworks/">Frameworks</Link> / <span aria-current="page">B.R.A.I.N.</span>
      </nav>

      <p className="label">Framework &middot; Answer Engine Optimization</p>
      <h1 style={{ marginTop: "1rem" }}>
        {bf.name}
        <br />
        <span style={{ color: "var(--ink-soft)" }}>{bf.tagline}</span>
      </h1>
      <p className="lede" style={{ marginTop: "1.25rem", maxWidth: "66ch" }}>{bf.definition}</p>

      <div className="facts-grid" style={{ marginTop: "2rem" }}>
        <div className="fact-cell"><strong>5</strong><span>Pillars, in order</span></div>
        <div className="fact-cell"><strong>v{bf.version}</strong><span>Current version</span></div>
        <div className="fact-cell"><strong>Monthly</strong><span>Measured, not guessed</span></div>
        <div className="fact-cell"><strong>2024</strong><span>Research began</span></div>
      </div>

      <nav aria-label="On this page" className="tags" style={{ marginTop: 0 }}>
        {sectionNav.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="tag" style={{ textDecoration: "none" }}>{s.label}</a>
        ))}
      </nav>

      {/* WHAT IT IS */}
      <section className="qa" id="what-it-is" aria-labelledby="h-what">
        <p className="label">The 30-second version</p>
        <h2 id="h-what" style={{ marginTop: "0.8rem" }}>What is the B.R.A.I.N. Framework?</h2>
        <p>{bf.whatItIs}</p>
        <p><strong style={{ color: "var(--white)" }}>In one line:</strong> {bf.oneLine}</p>
        <h3 style={{ marginTop: "1.25rem" }}>Why it matters now</h3>
        <p><Cited text={bf.whyNow} /></p>
        <h3 style={{ marginTop: "1.25rem" }}>The outcome it works toward</h3>
        <p>{bf.outcome}</p>
      </section>

      {/* WHO CREATED IT */}
      <section className="qa" id="who-created-it" aria-labelledby="h-who">
        <h2 id="h-who">Who created the B.R.A.I.N. Framework?</h2>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 160px) 1fr", gap: "1.5rem", alignItems: "start", marginTop: "1rem" }}>
          <figure>
            <img
              src={entity.headshot.src}
              alt={`${entity.name}, creator of the B.R.A.I.N. Framework`}
              width={800}
              height={800}
              loading="lazy"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </figure>
          <div>
            <p style={{ marginTop: 0 }}>
              <strong style={{ color: "var(--white)" }}>{entity.name}</strong> created the B.R.A.I.N. Framework. He is{" "}
              {entity.jobTitle.replace(" - ", " for the ")} at {entity.org.name}, Head of Research for AEO.co and co-author, with {entity.book.coAuthors.join(" and ")}, of the
              #1 Amazon best seller <Link href="/books/"><em>{entity.book.title}</em></Link>.
            </p>
            {bf.origin.map((para) => <p key={para}>{para}</p>)}
            <p>
              More about Julian: <Link href="/about/">About Julian Lopez</Link> &middot;{" "}
              <a href={entity.sameAs[0]} rel="me">LinkedIn</a>
            </p>
          </div>
        </div>
        <h3 style={{ marginTop: "1.5rem" }}>A versioned framework</h3>
        <p>B.R.A.I.N. is updated as the AI engines change. The current version is {bf.version}.</p>
        <dl className="rows">
          {bf.versionHistory.map((v) => (
            <div className="row" key={v.change}>
              <dt>{v.change}</dt>
              <dd>{v.why}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* CAUSAL CHAIN */}
      <section className="qa" id="causal-chain" aria-labelledby="h-chain">
        <p className="label">How the pillars connect</p>
        <h2 id="h-chain" style={{ marginTop: "0.8rem" }}>A causal chain, not a checklist</h2>
        <p>{bf.chainIntro}</p>
        <ol className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", listStyle: "none", padding: 0 }}>
          {bf.pillars.map((p, i) => (
            <li className="cell" key={p.letter}>
              <span className="n">{String(i + 1).padStart(2, "0")} &middot; {p.letter}</span>
              <h3>{p.chainStep}</h3>
              <p>{p.title}</p>
            </li>
          ))}
          <li className="cell">
            <span className="n">Result &middot; &#10003;</span>
            <h3>AI recommends you</h3>
            <p>BE THE ANSWER&reg;</p>
          </li>
        </ol>
      </section>

      {/* FIVE PILLARS */}
      <section className="qa" id="five-pillars" aria-labelledby="h-pillars">
        <p className="label">The five pillars</p>
        <h2 id="h-pillars" style={{ marginTop: "0.8rem" }}>
          Brand Representation, Research, Audience, Indexability, Network
        </h2>
        {bf.pillars.map((p) => (
          <div className="qa" id={p.slug} key={p.slug}>
            <p className="label">{p.letter} &middot; Pillar {"BRAIN".indexOf(p.letter) + 1} of 5</p>
            <h2 style={{ marginTop: "0.8rem" }}>{p.letter}: {p.title}</h2>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.74rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.subtitle}</p>
            <p><strong style={{ color: "var(--white)" }}>{p.needLabel ?? "What AI needs"}:</strong> {p.need}</p>
            <p>{p.body}</p>
            <dl className="rows">
              {p.components.map((c) => (
                <div className="row" key={c.name}>
                  <dt>{c.name}</dt>
                  <dd>{c.text}</dd>
                </div>
              ))}
            </dl>
            <h3 style={{ marginTop: "1.25rem" }}>What the research shows</h3>
            <p><Cited text={p.evidence} /></p>
          </div>
        ))}
      </section>

      {/* MEASUREMENT */}
      <section className="qa" id="measurement" aria-labelledby="h-measure">
        <p className="label">How it&apos;s measured</p>
        <h2 id="h-measure" style={{ marginTop: "0.8rem" }}>From Invisible to Recommended</h2>
        <p>{bf.measurementIntro}</p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))" }}>
          {bf.states.map((st) => (
            <div className="cell" key={st.name}>
              <span className="n">{st.range}</span>
              <h3>{st.name}</h3>
              <p>{st.text}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "1.25rem" }}>{bf.accuracyNote}</p>
      </section>

      {/* EFFECTS */}
      <section className="qa" id="effects" aria-labelledby="h-effects">
        <p className="label">What it produces</p>
        <h2 id="h-effects" style={{ marginTop: "0.8rem" }}>The effects of the B.R.A.I.N. Framework</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {bf.effects.map((e) => (
            <div className="cell" key={e.title}>
              <h3>{e.title}</h3>
              <p><Cited text={e.text} /></p>
            </div>
          ))}
        </div>
      </section>

      {/* VS SEO */}
      <section className="qa" id="vs-seo" aria-labelledby="h-seo">
        <p className="label">How it compares</p>
        <h2 id="h-seo" style={{ marginTop: "0.8rem" }}>B.R.A.I.N. vs. traditional SEO</h2>
        <div style={{ overflowX: "auto", marginTop: "1.25rem" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead>
              <tr>
                <th scope="col" style={th}></th>
                <th scope="col" style={th}>Traditional SEO</th>
                <th scope="col" style={{ ...th, color: "var(--spring-laser)" }}>The B.R.A.I.N. Framework</th>
              </tr>
            </thead>
            <tbody>
              {bf.comparison.map((r) => (
                <tr key={r.row}>
                  <th scope="row" style={{ ...td, color: "var(--white)", fontWeight: 600 }}>{r.row}</th>
                  <td style={{ ...td, color: "var(--muted)" }}>{r.seo}</td>
                  <td style={{ ...td, color: "var(--white)" }}>{r.brain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: "1.25rem" }}>{bf.seoNote}</p>
      </section>

      {/* PUT IT TO WORK */}
      <section className="qa" id="use-it" aria-labelledby="h-use">
        <p className="label">Put it to work</p>
        <h2 id="h-use" style={{ marginTop: "0.8rem" }}>Three ways to use B.R.A.I.N.</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
          {bf.useIt.map((u) => (
            <div className="cell" key={u.title}>
              <h3>{u.title}</h3>
              <p>{u.text}</p>
              <p style={{ marginTop: "0.8rem" }}><a href={u.url}>{u.cta} &rarr;</a></p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: "1.25rem" }}>
          The ideas behind the framework are also covered in <Link href="/books/"><em>{entity.book.title}</em></Link>, co-authored by {entity.name} and {entity.book.coAuthors.join(" and ")}.
        </p>
      </section>

      {/* FAQ */}
      <section className="qa" id="faq" aria-labelledby="h-faq">
        <p className="label">FAQ</p>
        <h2 id="h-faq" style={{ marginTop: "0.8rem" }}>Questions about the B.R.A.I.N. Framework</h2>
        {bf.faq.map((f) => (
          <div key={f.q} style={{ marginTop: "1.25rem" }}>
            <h3>{f.q}</h3>
            <p style={{ marginTop: "0.4rem" }}>{f.a}</p>
          </div>
        ))}
      </section>

      {/* SOURCES */}
      <section className="qa" id="sources" aria-labelledby="h-sources">
        <p className="label">Sources</p>
        <h2 id="h-sources" style={{ marginTop: "0.8rem" }}>The research behind this page</h2>
        <ol style={{ paddingLeft: "1.25rem", marginTop: "1rem" }}>
          {brainSources.map((src) => (
            <li key={src.n} id={`source-${src.n}`} style={{ color: "var(--muted)", fontSize: "13px", marginTop: "0.5rem" }}>
              {src.label} <a href={src.url} rel="noopener">{src.host}</a>
            </li>
          ))}
        </ol>
        <p style={{ marginTop: "1.5rem", fontSize: "12px" }}>
          {bf.name} was created by {entity.name}. {bf.disclaimer} Last updated {bf.dateModified}.
        </p>
      </section>
    </article>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "0.7rem 0.8rem",
  borderBottom: "1px solid var(--border-active)",
  fontFamily: "var(--font-mono)",
  fontSize: "0.72rem",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "var(--muted-light)",
};
const td: React.CSSProperties = {
  textAlign: "left",
  verticalAlign: "top",
  padding: "0.7rem 0.8rem",
  borderBottom: "1px solid var(--border)",
};
