import type { Metadata } from "next";
import Link from "next/link";
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

      {/* Hero — single book mockup */}
      <img
        src="/aeo-blueprint-2026-edition-stack.avif"
        alt="The AEO Blueprint: Be the Answer AI Recommends, 2026 Edition, by Kasim Aslam and Julian Lopez, standing on a stack of copies"
        width={1312}
        height={1199}
        style={{ width: "100%", maxWidth: "720px", height: "auto", borderRadius: "8px", display: "block", marginTop: "2rem" }}
      />

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

        {/* Second mockup — stacked copies, pairs naturally with the bestseller proof below */}
        <img
          src="/aeo-blueprint-2026-edition-desk.avif"
          alt="The AEO Blueprint 2026 Edition by Kasim Aslam and Julian Lopez lying on a desk"
          width={1312}
          height={1199}
          style={{ width: "100%", maxWidth: "560px", height: "auto", borderRadius: "8px", display: "block", marginTop: "1.5rem" }}
        />

        {/* Bestseller screenshots */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1rem",
          marginTop: "1.5rem",
        }}>
          {[
            { src: "/aeo-blueprint-bestseller.avif",      alt: "Amazon Best Seller badge — AEO Blueprint", w: 1200, h: 893 },
            { src: "/aeo-blueprint-amazon-listing.avif",  alt: "Amazon Kindle listing for The AEO Blueprint: Be the Answer AI Recommends, showing the #1 Best Seller badge in Web Marketing", w: 1200, h: 626 },
            { src: "/aeo-blueprint-amz-2.avif",           alt: "#1 Best Seller in Internet Marketing", w: 1200, h: 893 },
            { src: "/aeo-blueprint-amz-3.avif",           alt: "Amazon product page — AEO Blueprint", w: 1200, h: 893 },
            { src: "/aeo-blueprint-amz-4.avif",           alt: "#1 Best Seller in Marketing for Small Businesses", w: 1200, h: 893 },
          ].map(({ src, alt, w, h }) => (
            <img
              key={src}
              src={src}
              alt={alt}
              width={w}
              height={h}
              style={{ width: "100%", height: "auto", borderRadius: "6px", display: "block" }}
            />
          ))}
        </div>
      </section>

       {/* BRAIN methodology — full page lives at /frameworks/brain-framework/ */}
       <section className="qa">
         <h2>{entity.brain.name}</h2>
         <p style={{ marginTop: "0.6rem" }}>
           {entity.name} created {entity.brain.name}. {entity.brain.summary} The five pillars form a causal
           chain: each one depends on the one before it.
         </p>
         <dl className="rows">
           {entity.brain.pillars.map((pillar) => (
             <div className="row" key={pillar.letter}>
               <dt>{pillar.letter} &middot; {pillar.title}</dt>
               <dd>{pillar.chainStep}</dd>
             </div>
           ))}
         </dl>
         <div className="actions">
           <Link className="btn" href={entity.brain.path}>Read the full B.R.A.I.N. Framework</Link>
         </div>
       </section>
    </article>
  );
}
