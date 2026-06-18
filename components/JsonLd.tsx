// Injects a JSON-LD <script> block. Server component — renders into the HTML
// so crawlers and answer engines read the structured data on first parse.
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
