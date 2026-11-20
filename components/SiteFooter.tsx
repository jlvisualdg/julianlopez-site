import Link from "next/link";
import { entity, AUTHORITY_HUB_URL } from "@/lib/entity";

// Footer repeats NAP + the sameAs social links (Authority Hub spec, §3E) — the
// repetition is a deliberate corroboration signal for entity resolution.
export default function SiteFooter() {
  const year = new Date().getFullYear();
  // Short About description = first sentence of the elevator pitch (single source of truth).
  const shortAbout = entity.elevatorPitch.split(". ")[0] + ".";
  return (
    <footer className="site-footer">
      <div className="wrap cols">
        <div className="footer-brand">
          <Link href="/" className="brand">
            {entity.name.toLowerCase().replace(" ", "_")}<span>.</span>
          </Link>
          <p className="footer-slogan">AEO Expert, Digital Strategist &amp; Author</p>
          <p className="footer-about">{shortAbout}</p>
          {AUTHORITY_HUB_URL && (
            <p className="footer-hub">
              <a href={AUTHORITY_HUB_URL}>{entity.name}: Verified Facts</a>
              <span>Dated, sourced facts about {entity.name}.</span>
            </p>
          )}
        </div>
        <div>
          <h4>Entity</h4>
          <address className="nap">
            {entity.name}<br />
            {entity.jobTitle}, {entity.org.name}<br />
            {entity.birthPlace.split(", ")[1] /* region */}<br />
            <a href={`mailto:${entity.contact.email}`}>{entity.contact.email}</a>
          </address>
        </div>
        <div>
          <h4>Verified profiles</h4>
          <ul>
            <li><a href={entity.sameAs[0]} rel="me">LinkedIn</a></li>
            <li><a href={entity.sameAs[1]} rel="me">Facebook</a></li>
            <li><a href={entity.book.url} rel="me">Amazon Author</a></li>
          </ul>
        </div>
        <div>
          <h4>Map</h4>
          <ul>
            <li><Link href="/about/">About (Entity Home)</Link></li>
            <li><Link href="/frameworks/">Frameworks</Link></li>
            <li><Link href="/frameworks/brain-framework/">The B.R.A.I.N. Framework</Link></li>
            <li><Link href="/books/">Books</Link></li>
            <li><Link href="/blog/">Blog</Link></li>
            <li><Link href="/media-speaking/">Media &amp; Speaking</Link></li>
            <li><a href="/llms.txt">llms.txt</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap" style={{ marginTop: "2rem", color: "var(--ink-faint)", fontFamily: "var(--mono)", fontSize: "0.78rem" }}>
        © {year} {entity.name}. Built as an AI-readable Authority Hub.
      </div>
    </footer>
  );
}
