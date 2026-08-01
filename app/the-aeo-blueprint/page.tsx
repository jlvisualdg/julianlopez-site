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

       {/* BRAIN methodology — reads from entity.brain.pillars (single source of truth) */}
       <section className="qa">
         <h2>{entity.brain.name} (Methodology)</h2>
         <p style={{ marginTop: "0.6rem" }}>
           {entity.name} is the co-creator of {entity.brain.name}. {entity.brain.summary} The
           B.R.A.I.N. Framework has five pillars, none optional. They form a causal chain — each one
           depends on the one before it.
         </p>
         {entity.brain.pillars.map((pillar) => (
           <div className="qa" key={pillar.letter}>
             <h2>{pillar.letter} — {pillar.title}: {pillar.subtitle}</h2>
             <p style={{ marginTop: "0.6rem" }}>{pillar.body}</p>
           </div>
         ))}
         <div className="qa">
           <h2>Critical Note: The sequence matters</h2>
           <p style={{ marginTop: "0.6rem" }}>
             Fixing Indexability while Brand Representation is broken is backwards. AI forms its
             opinion about you externally before it ever visits your site.
           </p>
         </div>
       </section>
    </article>
  );
}
