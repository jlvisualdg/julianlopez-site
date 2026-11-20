import { entity, SITE_URL } from "@/lib/entity";
import { brainFramework, brainSources, frameworks } from "@/lib/frameworks";

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

export function bookSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    "@id": `${entity.book.url}#book`,
    name: `${entity.book.title}: ${entity.book.subtitle}`,
    bookFormat: "https://schema.org/EBook",
    datePublished: entity.book.datePublished,
    isbn: undefined,
    url: entity.book.url,
    description: entity.book.description,
    author: [
      { "@type": "Person", "@id": PERSON_ID, name: entity.name },
      ...entity.book.coAuthors.map((name) => ({ "@type": "Person", name })),
    ],
    about: entity.expertise.map((name) => ({ "@type": "Thing", name })),
    award: entity.book.awards,
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
        about: { "@type": "Thing", name: "Answer Engine Optimization" },
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
      breadcrumbs([
        { name: "Home", path: "/" },
        { name: "Frameworks", path: "/frameworks/" },
      ]),
    ],
  };
}
