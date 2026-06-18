import Link from "next/link";
import { entity } from "@/lib/entity";

// Footer repeats NAP + the sameAs social links (Authority Hub spec, §3E) — the
// repetition is a deliberate corroboration signal for entity resolution.
export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap cols">
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
            <li><Link href="/the-aeo-blueprint/">The AEO Blueprint</Link></li>
            <li><Link href="/speaking/">Speaking</Link></li>
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
