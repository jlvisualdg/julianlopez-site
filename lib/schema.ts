import { entity, SITE_URL, AUTHORITY_HUB_URL } from "@/lib/entity";
import { brainFramework, brainSources, frameworks, frameworksHub } from "@/lib/frameworks";

const PERSON_ID = `${SITE_URL}/#person`;
const ORG_ID = `${entity.org.url}/#organization`;

// ProfilePage > mainEntity Person — modeled on the Schema App / Van Berkel example.
// This is the canonical entity definition that anchors the Knowledge Graph.
export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: `All About ${entity.name}`,
    mainEntity: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: entity.name,
      alternateName: entity.alternateName,
      description: entity.elevatorPitch,
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}${entity.headshot.src}`,
        contentUrl: `${SITE_URL}${entity.headshot.src}`,
        caption: entity.headshot.alt,
        creditText: entity.headshot.credit,
        creator: { "@type": "Person", name: entity.headshot.credit, sameAs: entity.headshot.creditUrl },
      },
      jobTitle: entity.jobTitle,
      birthDate: entity.birthDate,
      birthPlace: { "@type": "Place", name: entity.birthPlace },
      nationality: entity.nationality,
      audience: { "@type": "Audience", audienceType: entity.audience },
      worksFor: { "@id": ORG_ID },
      knowsAbout: entity.expertise.map((name) => ({ "@type": "Thing", name })),
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: entity.education.institution,
      },
      hasOccupation: entity.occupations.map((o) => ({
        "@type": "Occupation",
        name: o.roleName,
        occupationLocation: { "@type": "Organization", name: o.org },
        ...(o.startDate ? { startDate: o.startDate } : {}),
        ...(o.endDate ? { endDate: o.endDate } : {}),
        description: o.description,
      })),
      author: {
        "@type": "Book",
        name: `${entity.book.title}: ${entity.book.subtitle}`,
        url: entity.book.url,
      },
      sameAs: entity.sameAs,
      subjectOf: [
        ...entity.articles.map((a) => ({
          "@type": "Article",
          name: a.title,
          url: a.url,
          publisher: { "@type": "Organization", name: a.publisher },
          about: { "@id": PERSON_ID },
        })),
        ...entity.podcastAppearances.map((p) => ({
          "@type": "PodcastEpisode",
          name: p.title,
          url: p.apple,
          sameAs: [p.apple, p.spotify],
          about: { "@id": PERSON_ID },
        })),
        // Companion authority hub: a separate site of dated facts about this Person.
        ...(AUTHORITY_HUB_URL
          ? [{ "@type": "WebSite", "@id": `${AUTHORITY_HUB_URL}#website`, name: `${entity.name}: Verified Facts`, url: AUTHORITY_HUB_URL, about: { "@id": PERSON_ID } }]
          : []),
      ],
    },
    about: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: entity.org.name,
      url: entity.org.url,
      description: entity.org.description,
      founder: { "@type": "Person", name: entity.org.founder },
    },
  };
}

// FAQPage — every Q&A on /about as structured data so answer engines can extract
// direct, quotable answers about the person. Mirrors the visible content exactly.
export function faqPageSchema() {
  const qas: { q: string; a: string }[] = entity.about.sections.flatMap((s) =>
    s.qas.map((x) => ({ q: x.q, a: x.a }))
  );
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/about/#faq`,
    mainEntity: qas.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const bookFaq = [
  { q: "What is The AEO Blueprint about?", a: "The AEO Blueprint: Be the Answer AI Recommends is a book about Answer Engine Optimization (AEO): how businesses get recommended by AI answer engines like ChatGPT, Perplexity and Google's AI Mode. It explains why traditional SEO is losing ground and gives a practical framework for entity-first brand optimization, structured data and authority building." },
  { q: "Who wrote The AEO Blueprint?", a: "The AEO Blueprint was co-authored by Julian Lopez and Kasim Aslam. Julian Lopez is Head Strategist for the AEO Team at SmartMarketer Agency and Head of Research for AEO.co. Kasim Aslam is the founder of AEO.co." },
  { q: "What is the first AEO book?", a: "The AEO Blueprint: Be the Answer AI Recommends, by Julian Lopez and Kasim Aslam, is presented by its authors as the first full-length book devoted specifically to Answer Engine Optimization. It was published in October 2025 and is Julian Lopez's first book." },
  { q: "When was The AEO Blueprint published?", a: "The paperback was published on October 20, 2025 and the Kindle edition on October 21, 2025. The current version is the 2026 Edition." },
  { q: "How long is The AEO Blueprint?", a: "The paperback is 272 pages (ISBN-13 979-8269173351). The Kindle edition is listed at 334 digital pages. Both are the 2026 Edition." },
  { q: "Where can I buy The AEO Blueprint?", a: "The AEO Blueprint is available on Amazon in paperback and Kindle." },
  { q: "Is The AEO Blueprint a best seller?", a: "Yes. The AEO Blueprint reached #1 Amazon Best Seller in Web Marketing, Marketing for Small Businesses and Internet Marketing, and holds a 4.6 out of 5 rating from 37 Amazon ratings (November 2026)." },
  { q: "What do readers say about The AEO Blueprint?", a: "Amazon readers describe it as \"the AEO manual\", \"the most thorough explanation of what AEO is\" in easy-to-understand terms, and \"a practical step-by-step roadmap\" that connects traditional SEO to AEO and GEO. 82% of its 37 Amazon ratings are five stars." },
  { q: "How does the book relate to the B.R.A.I.N. Framework?", a: "The book teaches the thinking behind Julian Lopez's B.R.A.I.N. Framework: AI needs to understand who a brand is, find signals it can trust and confirm them across sources before it recommends the brand." },
];

export function bookSchema() {
  const pageUrl = `${SITE_URL}${entity.book.path}`;
  const authors = [
    { "@type": "Person", "@id": PERSON_ID, name: entity.name, url: SITE_URL },
    ...entity.book.coAuthors.map((name) => ({ "@type": "Person", name })),
  ];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        "@id": `${pageUrl}#book`,
        name: `${entity.book.title}: ${entity.book.subtitle}`,
        alternateName: [entity.book.title, "The first AEO book"],
        keywords: "first AEO book, Answer Engine Optimization book, AEO book, AI search, ChatGPT, Perplexity, Google AI Mode",
        bookEdition: entity.book.edition,
        url: pageUrl,
        sameAs: entity.book.formats.map((f) => f.url),
        image: `${SITE_URL}/aeo-blueprint-2026-edition-stack.avif`,
        description: entity.book.description,
        author: authors,
        publisher: { "@type": "Organization", name: entity.book.publisher },
        inLanguage: "en",
        datePublished: entity.book.datePublished,
        award: entity.book.awards,
        about: [
          { "@type": "Thing", name: "Answer Engine Optimization" },
          { "@type": "Thing", name: "AI search" },
          { "@type": "Thing", name: "Brand entity optimization" },
        ],
        workExample: entity.book.formats.map((f) => ({
          "@type": "Book",
          bookFormat: f.schemaFormat,
          name: `${entity.book.title}: ${entity.book.subtitle} (${f.format})`,
          url: f.url,
          numberOfPages: f.pages,
          datePublished: f.datePublished,
          bookEdition: entity.book.edition,
          inLanguage: "en",
          ...(f.isbn13 ? { isbn: f.isbn13 } : {}),
          identifier: { "@type": "PropertyValue", propertyID: "ASIN", value: f.asin },
          potentialAction: { "@type": "BuyAction", target: f.url },
        })),
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${entity.book.title} by ${entity.name} and ${entity.book.coAuthors.join(" and ")}`,
        mainEntity: { "@id": `${pageUrl}#book` },
        isPartOf: { "@id": `${SITE_URL}/books/#collection` },
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: bookFaq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Books", item: `${SITE_URL}/books/` },
          { "@type": "ListItem", position: 3, name: entity.book.title, item: pageUrl },
        ],
      },
    ],
  };
}

// ---------------------------------------------------------------------------
// FRAMEWORKS — /frameworks/ (collection) + /frameworks/brain-framework/
// The framework is a CreativeWork created by the Person (@id link), its pillars
// are a DefinedTermSet, and the page is an Article about both.
// ---------------------------------------------------------------------------
const BRAIN_URL = `${SITE_URL}${brainFramework.path}`;
const BRAIN_ID = `${BRAIN_URL}#framework`;
const PERSON_REF = { "@type": "Person", "@id": PERSON_ID, name: entity.name, url: SITE_URL };

function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function brainFrameworkSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": BRAIN_ID,
        name: brainFramework.name,
        alternateName: brainFramework.alternateNames,
        description: brainFramework.definition,
        abstract: brainFramework.oneLine,
        creator: PERSON_REF,
        author: PERSON_REF,
        version: brainFramework.version,
        dateModified: brainFramework.dateModified,
        url: BRAIN_URL,
        inLanguage: "en",
        genre: "Answer Engine Optimization framework",
        about: [
          { "@type": "Thing", name: "Answer Engine Optimization" },
          { "@type": "Thing", name: "AI visibility" },
          { "@type": "Thing", name: "Brand entity optimization" },
        ],
        mentions: [
          { "@type": "SoftwareApplication", name: "ChatGPT" },
          { "@type": "SoftwareApplication", name: "Perplexity" },
          { "@type": "SoftwareApplication", name: "Gemini" },
          { "@type": "SoftwareApplication", name: "Google AI Mode" },
        ],
        hasPart: { "@id": `${BRAIN_URL}#pillars` },
        isPartOf: { "@id": `${SITE_URL}/frameworks/#collection` },
        citation: brainSources.map((src) => ({ "@type": "CreativeWork", name: src.label, url: src.url })),
      },
      {
        "@type": "DefinedTermSet",
        "@id": `${BRAIN_URL}#pillars`,
        name: `${brainFramework.name} pillars`,
        hasDefinedTerm: brainFramework.pillars.map((p) => ({
          "@type": "DefinedTerm",
          "@id": `${BRAIN_URL}#${p.slug}`,
          termCode: p.letter,
          name: p.title,
          description: `${p.body} Components: ${p.components.map((c) => c.name).join(", ")}.`,
          inDefinedTermSet: { "@id": `${BRAIN_URL}#pillars` },
        })),
      },
      {
        "@type": "Article",
        "@id": `${BRAIN_URL}#article`,
        headline: `${brainFramework.name}: ${brainFramework.tagline}`,
        description: brainFramework.definition,
        url: BRAIN_URL,
        mainEntityOfPage: BRAIN_URL,
        author: PERSON_REF,
        publisher: PERSON_REF,
        dateModified: brainFramework.dateModified,
        image: `${SITE_URL}${entity.headshot.src}`,
        about: { "@id": BRAIN_ID },
        mainEntity: { "@id": BRAIN_ID },
      },
      {
        "@type": "FAQPage",
        "@id": `${BRAIN_URL}#faq`,
        mainEntity: brainFramework.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        ...breadcrumbs([
          { name: "Home", path: "/" },
          { name: "Frameworks", path: "/frameworks/" },
          { name: brainFramework.name, path: brainFramework.path },
        ]),
        "@id": `${BRAIN_URL}#breadcrumbs`,
      },
    ],
  };
}

export function frameworksCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/frameworks/#collection`,
        name: `Frameworks by ${entity.name}`,
        url: `${SITE_URL}/frameworks/`,
        author: PERSON_REF,
        description: frameworksHub.intro,
        about: { "@type": "Thing", name: "Answer Engine Optimization" },
        mentions: frameworksHub.classics.map((c) => ({ "@type": "CreativeWork", name: c.name, description: `${c.origin}. ${c.idea}` })),
        hasPart: { "@id": `${SITE_URL}/frameworks/#execution` },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: frameworks.map((f, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}${f.path}`,
            name: f.name,
          })),
        },
      },
      {
        "@type": "HowTo",
        "@id": `${SITE_URL}/frameworks/#execution`,
        name: frameworksHub.executionTitle,
        description: frameworksHub.executionIntro,
        author: PERSON_REF,
        isBasedOn: { "@id": BRAIN_ID },
        step: frameworksHub.execution.map((st, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: `${st.name} (${st.pillar})`,
          text: st.text,
          url: `${SITE_URL}/frameworks/#execution`,
        })),
      },
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Frameworks", path: "/frameworks/" },
      ]),
    ],
  };
}
