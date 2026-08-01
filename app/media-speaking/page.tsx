import type { Metadata } from "next";
import { entity } from "@/lib/entity";

export const metadata: Metadata = {
  title: "Media & Speaking",
  description: `${entity.name} media appearances, speaking engagements, and podcast interviews on Answer Engine Optimization (AEO).`,
  alternates: { canonical: "/media-speaking/" },
};

export default function Speaking() {
  const ev = entity.speaking[0];
  return (
    <article>
      <p className="label">Media & Speaking</p>
      <h1 style={{ marginTop: "1rem" }}>Explaining AEO, on stage and in media.</h1>
      <p className="lede" style={{ marginTop: "1rem" }}>
        Julian Lopez delivers actionable insights on Answer Engine Optimization through speaking engagements,
        media appearances, and expert commentary. These photos are from the {ev.event} in {ev.location} ({ev.date}),
        where {entity.name} taught a room of entrepreneurs how Answer Engine Optimization actually works.
      </p>

      <section className="qa">
        <h2>How does AEO work?</h2>
        <p>
          Answer Engine Optimization makes a brand the answer that AI tools like ChatGPT,
          Perplexity, and Google AI Mode recommend. Instead of competing for a ranked list of
          blue links, you give the machine a clear, structured definition of who you are so it
          can cite you with confidence. In his Nashville talk, {entity.name} broke it into three moves:
        </p>
        <div className="grid cols-3">
          <article className="cell">
            <span className="n">01</span>
            <h3>Become an entity</h3>
            <p>Define the brand as a distinct, machine-readable thing &mdash; not a string of keywords &mdash; so AI knows exactly who it is.</p>
          </article>
          <article className="cell">
            <span className="n">02</span>
            <h3>Add structured data</h3>
            <p>Schema markup tells the model which facts are true. As Julian put it on stage: structured data shapes which datapoints make it into the AI.</p>
          </article>
          <article className="cell">
            <span className="n">03</span>
            <h3>Build authority</h3>
            <p>Corroboration from trusted third-party sources turns the brand into a high-confidence answer the model is willing to recommend.</p>
          </article>
        </div>
      </section>

      <section className="qa">
        <h2>{ev.event} &mdash; {ev.location}, {ev.date}</h2>
        <p>{ev.talk}.</p>
        <div className="media-grid">
          {ev.images.map((img) => (
            <figure key={img.src}>
              <img className="shot" src={img.src} alt={img.alt} loading="lazy" width={1200} height={800} />
              <figcaption>{img.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </article>
  );
}
