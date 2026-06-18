import type { Metadata } from "next";
import { entity } from "@/lib/entity";
import { bookSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The AEO Blueprint",
  description: entity.book.description,
  alternates: { canonical: "/the-aeo-blueprint/" },
};

export default function Book() {
  return (
    <article>
      <JsonLd data={bookSchema()} />
      <p className="label">Book</p>
      <h1 style={{ marginTop: "1rem" }}>
        The first book on Answer Engine Optimization: {entity.book.title}
      </h1>
      <p className="lede" style={{ marginTop: "1.25rem", maxWidth: "62ch" }}>
        {entity.book.description}
      </p>

       <section className="qa">
         <h2>Why AI recommends your business</h2>
         <p style={{ marginTop: "0.6rem" }}>{entity.book.hookBody}</p>
         <div className="actions">
           <a className="btn btn-primary" href={entity.book.url}>Read on Amazon</a>
         </div>
       </section>

      <section className="qa">
        <h2>About The AEO Blueprint</h2>
        <p style={{ marginTop: "0.6rem" }}>
          This book focuses on entity-first brand optimization, structured data, and authority
          building for AI-driven experiences.
        </p>
        <h3 style={{ marginTop: "1.5rem" }}>
          Amazon best seller in Marketing for Small Businesses, Web Marketing &amp; Internet Marketing
        </h3>
        <p style={{ marginTop: "0.4rem" }}>{entity.book.bestsellerNote}</p>
      </section>

       {/* BRAIN methodology lives here (per the canonical structure) */}
       <section className="qa">
         <h2>{entity.brain.name} (Methodology)</h2>
         <p style={{ marginTop: "0.6rem" }}>
           {entity.name} is the co-creator of {entity.brain.name}, {entity.brain.summary} The
           BRAIN Framework has five pillars, none optional. They're a causal chain — each one depends on the the one before it.
         </p>
         <div className="qa">
           <h2>B — Brand Representation: Reach, Recognition, Reputation</h2>
           <p style={{ marginTop: "0.6rem" }}>
             Your external footprint. Reach (are you present where AI looks?), Recognition (is your brand described consistently across all platforms?), Reputation (is the sentiment positive?). AI builds its understanding of your brand from what others say about you, not what you say about yourself.
           </p>
         </div>
         <div className="qa">
           <h2>R — Research: Question Intelligence</h2>
           <p style={{ marginTop: "0.6rem" }}>
             First-party customer questions (CS transcripts, call recordings, surveys), the Answer Database built from those, AI visibility baselines across ChatGPT/Perplexity/AI Mode, competitor citation analysis, and SparkToro audience profiling. You can't create citable content without knowing what questions you need to answer.
           </p>
         </div>
         <div className="qa">
           <h2>A — Authority: Third-Party Validation</h2>
           <p style={{ marginTop: "0.6rem" }}>
             Topical depth (trunk and branch content architecture), a named authority figure with a verifiable footprint, digital PR and earned media, UGC presence on Reddit and review platforms, E-E-A-T compliance. AI recommends brands that other independent sources already endorse.
           </p>
         </div>
         <div className="qa">
           <h2>I — Indexability: Technical Foundation</h2>
           <p style={{ marginTop: "0.6rem" }}>
             AI crawlers allowed in robots.txt, site architecture under 3 clicks, clean SSR code, schema markup (Organization, Person, Product, FAQ), semantic heading hierarchy, entity home established, content structured with direct answers front-loaded. This is where the website work lives.
           </p>
         </div>
         <div className="qa">
           <h2>N — Network: Co-Citation Authority</h2>
           <p style={{ marginTop: "0.6rem" }}>
             Being mentioned alongside category competitors in AI responses, listed in industry directories, connected through partnerships and affiliate relationships with DA 40+ domains, featured in press and podcasts, embedded in niche communities. A brand that exists in isolation is less citable than one woven into its category's web.
           </p>
         </div>
         <div className="qa">
           <h2>Critical Note: The sequence matters</h2>
           <p style={{ marginTop: "0.6rem" }}>
             The sequence matters: fixing Indexability while Brand Representation is broken is backwards. AI forms its opinion about you externally before it ever visits your site.
           </p>
         </div>
       </section>
    </article>
  );
}
