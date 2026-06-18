import type { Metadata } from "next";
import { entity } from "@/lib/entity";
import { faqPageSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description: `All about ${entity.name}: roles, expertise, career history, the BRAIN Framework, education, and verified profiles.`,
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <article>
      {/* FAQPage structured data — mirrors every Q&A below, so answer engines can
          extract direct answers about the person. */}
      <JsonLd data={faqPageSchema()} />

      <p className="label">Entity Home — Source of Truth</p>
      <h1 style={{ marginTop: "1rem" }}>All About {entity.name}</h1>
      <p className="lede" style={{ marginTop: "1.5rem", maxWidth: "64ch" }}>{entity.about.intro}</p>

      {entity.about.sections.map((section) => (
        <section className="qa" key={section.heading} aria-labelledby={`s-${section.heading}`}>
          <h2 id={`s-${section.heading}`}>{section.heading}</h2>
          {section.qas.map((qa) => (
            <div key={qa.q} style={{ marginTop: "1.25rem" }}>
              <h3>{qa.q}</h3>
              <p style={{ marginTop: "0.4rem" }}>{qa.a}</p>
            </div>
          ))}
        </section>
      ))}

      <section className="qa" aria-labelledby="s-online">
        <h2 id="s-online">Online Presence</h2>
        <div style={{ marginTop: "1.25rem" }}>
          <h3>What is the LinkedIn profile for {entity.name}?</h3>
          <p style={{ marginTop: "0.4rem" }}>
            The LinkedIn profile for {entity.name} is{" "}
            <a href={entity.sameAs[0]} rel="me">linkedin.com/in/julian-lopez-a51724176</a>.
          </p>
        </div>
        <div style={{ marginTop: "1.25rem" }}>
          <h3>What is the Facebook profile for {entity.name}?</h3>
          <p style={{ marginTop: "0.4rem" }}>
            The Facebook profile for {entity.name} is{" "}
            <a href={entity.sameAs[1]} rel="me">facebook.com/julian.lopez.9026</a>.
          </p>
        </div>
        <div style={{ marginTop: "1.25rem" }}>
          <h3>Where does {entity.name} work?</h3>
          <p style={{ marginTop: "0.4rem" }}>
            {entity.name} is currently the Head Strategist for the AEO Team at{" "}
            <a href="https://smartmarketer.com" rel="me">SmartMarketer Agency</a>.
          </p>
        </div>
        <div style={{ marginTop: "1.25rem" }}>
          <h3>Where can you read {entity.name}&rsquo;s book?</h3>
          <p style={{ marginTop: "0.4rem" }}>
            {entity.name} co-authored <em>{entity.book.title}</em>, available on{" "}
            <a href={entity.book.url} rel="me">Amazon</a>.
          </p>
        </div>
      </section>
    </article>
  );
}
