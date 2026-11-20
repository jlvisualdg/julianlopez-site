import Link from "next/link";
import { entity } from "@/lib/entity";

// Clear, standard nav labels (About, Frameworks, Books, Speaking, Contact) — not clever names —
// so crawlers can categorize the linked content. (Authority Hub spec, §3A.)
export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link href="/" className="brand">
          {entity.name.toLowerCase().replace(" ", "_")}<span>.</span>
        </Link>
        <nav aria-label="Primary">
          <ul>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/frameworks/">Frameworks</Link></li>
            <li><Link href="/books/">Books</Link></li>
            <li><Link href="/media-speaking/">Media & Speaking</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
