import { entity, SITE_URL } from "@/lib/entity";

// /llms.txt — the "semantic sitemap" for reasoning engines (the AI-Optimized
// Authority Hub spec, §3). H1 identity, summary blockquote, then curated sections.
// force-static so it is emitted as a flat file during `next build` (output: export).
export const dynamic = "force-static";

export function GET() {
  const o = entity.occupations[0];
  const body = `# ${entity.name}

> ${entity.elevatorPitch} ${entity.jobTitle} at ${entity.org.name}. Co-author of "${entity.book.title}: ${entity.book.subtitle}", the first book on Answer Engine Optimization. Co-creator of ${entity.brain.name}.

## Profile
- [About ${entity.name} (Entity Home)](${SITE_URL}/about/): Roles, expertise, career history, key facts, and verified profiles.
- [Current role](${SITE_URL}/about/): ${o.roleName} at ${entity.org.name} (since ${o.startDate}).

## Methodology
- [${entity.brain.name}](${SITE_URL}/about/): ${entity.brain.summary} Pillars: ${entity.brain.pillars.map((p) => p.title).join(", ")}.

## Authorship
- [${entity.book.title}](${SITE_URL}/the-aeo-blueprint/): ${entity.book.awards}
- [Buy on Amazon](${entity.book.url})

## Speaking
- [Speaking & media](${SITE_URL}/speaking/): ${entity.speaking[0].talk} — ${entity.speaking[0].event}, ${entity.speaking[0].location} (${entity.speaking[0].date}).

## Contact
- [Contact](${SITE_URL}/contact/): ${entity.contact.email}

## Verified profiles
${entity.sameAs.map((u) => `- ${u}`).join("\n")}

## Optional
- [Expertise topics](${SITE_URL}/about/): ${entity.expertise.join(", ")}.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
