import Link from "next/link";
import { entity } from "@/lib/entity";

export default function Home() {
  return (
    <>
      <section aria-labelledby="hero-h">
        <div className="hero-container">
          <img 
            src="/julian-lopez-headshot-white.png" 
            alt="Julian Lopez - AEO Expert and Business Builder"
            className="hero-image"
          />
          <div className="hero-content">
            <p className="label">Answer Engine Optimization</p>
            <h1 id="hero-h" style={{ marginTop: "1rem" }}>
              Julian Lopez
              <br />
              <span style={{ color: "var(--ink-soft)" }}>AEO Expert &amp; Business Builder</span>
            </h1>
            <p className="lede" style={{ marginTop: "1.5rem" }}>{entity.elevatorPitch}</p>
            <div className="actions">
              <a className="btn btn-primary" href={entity.book.url}>Read the AEO Blueprint</a>
              <Link className="btn" href="/contact/">Reach Out</Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="aeo-h">
        <h2 id="aeo-h">AEO Research</h2>
        <p style={{ marginTop: "0.9rem" }}>{entity.home.aeoResearch}</p>
      </section>

      <section aria-labelledby="beo-h">
        <h2 id="beo-h">Brand Entity Optimization</h2>
        <p style={{ marginTop: "0.9rem" }}>{entity.home.brandEntity}</p>
      </section>

      <section aria-labelledby="facts-h">
        <h2 id="facts-h">Quick Facts</h2>
        <ul className="clean" style={{ marginTop: "0.9rem" }}>
          <li><strong>Current Role:</strong> Head Strategist - AEO Team at SmartMarketer Agency</li>
          <li><strong>Location:</strong> Lives in Bogotá, Colombia</li>
          <li><strong>Expertise:</strong> Answer Engine Optimization, Brand Entity Optimization, Schema Markup</li>
          <li><strong>Book:</strong> Co-author of #1 Amazon Best Seller "The AEO Blueprint"</li>
          <li><strong>Framework:</strong> Developer of the BRAIN Framework</li>
        </ul>
      </section>

      <section aria-labelledby="contact-h">
        <h2 id="contact-h">Contact</h2>
        <p style={{ marginTop: "0.9rem" }}>You can reach out to Julian Lopez via:</p>
        <ul className="clean" style={{ maxWidth: "30rem" }}>
          <li><a href={entity.sameAs[0]} rel="me">LinkedIn</a></li>
          <li><a href={`mailto:${entity.contact.email}`}>Email — {entity.contact.email}</a></li>
          <li><a href="https://smartmarketer.com" rel="me">SmartMarketer Agency - AEO Team</a></li>
        </ul>
      </section>
    </>
  );
}
