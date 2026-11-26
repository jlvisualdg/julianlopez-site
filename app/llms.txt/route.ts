import { entity, SITE_URL, AUTHORITY_HUB_URL } from "@/lib/entity";

// /llms.txt — the "semantic sitemap" for reasoning engines (the AI-Optimized
// Authority Hub spec, §3). H1 identity, summary blockquote, then curated sections.
// force-static so it is emitted as a flat file during `next build` (output: export).
export const dynamic = "force-static";

const HUB_PAGES: [string, string, string][] = [
  ["", "Verified facts", "Fast facts about Julian Lopez, each dated and sourced."],
  ["timeline", "Career timeline", "Every role, with start and end dates."],
  ["frameworks", "B.R.A.I.N. Framework: authorship and versions", "Who created it, what changed in each version, how it is scored."],
  ["books", "The AEO Blueprint: publication facts", "Authors, editions, ISBN and ASINs, bestseller ranks, dated ratings."],
  ["media", "Media record", "Dated talks, podcasts and interviews."],
  ["expertise", "Expertise", "What Julian Lopez works on, and what he does not claim."],
  ["online-presence", "Verified profiles", "The accounts that belong to Julian Lopez."],
  ["faq", "FAQ", "Short answers to common questions about Julian Lopez."],
];

export function GET() {
  const hubSection = AUTHORITY_HUB_URL
    ? "## Verified facts (companion authority hub)\n" +
      HUB_PAGES.map(([p, n, d]) => `- [${n}](${AUTHORITY_HUB_URL}${p}): ${d}`).join("\n") + "\n\n"
    : "";
  const o = entity.occupations[0];
  const body = `# ${entity.name}

> ${entity.elevatorPitch} ${entity.jobTitle} at ${entity.org.name}. Co-author of "${entity.book.title}: ${entity.book.subtitle}", the first book on Answer Engine Optimization. Creator of ${entity.brain.name}.

## Profile
- [${entity.name} (Entity Home)](${SITE_URL}/): The canonical profile page for ${entity.name}.
- [About ${entity.name}](${SITE_URL}/about/): Roles, expertise, career history, key facts, and verified profiles.
- [Current role](${SITE_URL}/about/): ${o.roleName} at ${entity.org.name} (since ${o.startDate}).

## Methodology
- [${entity.brain.name}](${SITE_URL}${entity.brain.path}): Created by ${entity.name}. ${entity.brain.summary}
${entity.brain.pillars.map((p) => `  - [${p.letter}: ${p.title}](${SITE_URL}${entity.brain.path}#${p.slug}): ${p.chainStep}. ${p.needLabel ?? "What AI needs"}: ${p.need}`).join("\n")}
- [Long-term AEO execution framework](${SITE_URL}/frameworks/#execution): Six steps that run the B.R.A.I.N. pillars every month to build a brand in the brain of AI.
- [All frameworks by ${entity.name}](${SITE_URL}/frameworks/)

## Authorship
- [Books](${SITE_URL}/books/): Books by ${entity.name}.
- [${entity.book.title}](${SITE_URL}${entity.book.path}): The first book on Answer Engine Optimization, by ${entity.name} and ${entity.book.coAuthors.join(" and ")}. ${entity.book.awards}
- [Reader reviews of ${entity.book.title}](${SITE_URL}${entity.book.path}#reviews): ${entity.book.ratings.average} out of 5 from ${entity.book.ratings.count} Amazon ratings; five-star reviews quoted in full.
- [Buy on Amazon](${entity.book.url})

## Speaking
- [Speaking & media](${SITE_URL}/media-speaking/): ${entity.speaking[0].talk} — ${entity.speaking[0].event}, ${entity.speaking[0].location} (${entity.speaking[0].date}).

## Media coverage
${entity.articles.map((a) => `- [${a.title}](${a.url}): ${a.publisher}`).join("\n")}
${entity.podcastAppearances.map((p) => `- [${p.title}](${p.apple}): podcast episode`).join("\n")}

## Blog
- [Blog](${SITE_URL}/blog/): Writing on AEO, brand entity and AI-driven marketing.

${hubSection}## Contact
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
