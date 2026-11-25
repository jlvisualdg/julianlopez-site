import { AUTHORITY_HUB_URL } from "@/lib/entity";

// Main → hub deep link (companion hub mode). Each main page that owns a topic ends with
// one link to the hub page holding that topic's dated facts. Links only; the main page
// keeps its keywords. Renders nothing while AUTHORITY_HUB_URL is null.
export default function HubFactsLink({ path, label, desc }: { path: string; label: string; desc: string }) {
  if (!AUTHORITY_HUB_URL) return null;
  const href = new URL(path.replace(/^\//, ""), AUTHORITY_HUB_URL).toString();
  return (
    <aside className="qa" aria-label="Verified facts" style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
      <p className="label">Verified facts</p>
      <p style={{ marginTop: "0.6rem" }}>
        <a href={href}>{label}</a> &mdash; {desc}
      </p>
    </aside>
  );
}
