import { entity, SITE_URL, AUTHORITY_HUB_URL, HOME_DATE_MODIFIED } from "@/lib/entity";
import { brainFramework, brainSources, frameworks, frameworksHub } from "@/lib/frameworks";

// =============================================================================
// SCHEMA GOVERNANCE (Authority Hub Builder, _config/schema-reference.md §0A)
// 1. One @id per entity, from the registry below. Never mint a second one, never
//    retype an entity inline without its @id.
// 2. Every page emits one @graph of sibling nodes joined by @id.
// 3. Page-scoped parity: a page's JSON-LD only states what a reader can see on
//    that page. Site-wide (layout) = WebSite + the Person's identity core only.
//    Roles on / and /about/, biography and education on /about/, events on
//    /media-speaking/, publication facts on the book page.
// 4. sameAs = profiles of the entity itself. Works and coverage go in subjectOf
//    on the page that shows them.
// Gate: python tools/schema_governance.py --html out --ignore-id code-view
// =============================================================================
const HOME_URL = `${SITE_URL}/`;
export const ID = {
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  profilePage: `${SITE_URL}/#profilepage`,
  headshot: `${SITE_URL}/#headshot`,
  org: `${entity.org.url}/#organization`,
  org2: `${entity.org2.url}/#organization`,
  book: `${SITE_URL}${entity.book.path}#book`,
  brain: `${SITE_URL}${brainFramework.path}#framework`,
  booksCollection: `${SITE_URL}/books/#collection`,
  frameworksCollection: `${SITE_URL}/frameworks/#collection`,
} as const;

const PERSON_ID = ID.person;
const ref = (id: string) => ({ "@id": id });

// Typed stubs: enough for a parser to resolve a reference on a page that does not
// define the entity in full. Only @type, @id, name and url, so they claim nothing.
const ORG_NODE = { "@type": "Organization", "@id": ID.org, name: entity.org.name, url: entity.org.url };
const ORG2_NODE = { "@type": "Organization", "@id": ID.org2, name: entity.org2.name, url: entity.org2.url };
const BOOK_STUB = { "@type": "Book", "@id": ID.book, name: `${entity.book.title}: ${entity.book.subtitle}`, url: `${SITE_URL}${entity.book.path}` };
const BRAIN_STUB = { "@type": "CreativeWork", "@id": ID.brain, name: brainFramework.name, url: `${SITE_URL}${brainFramework.path}` };
const BOOKS_COLLECTION_STUB = { "@type": "CollectionPage", "@id": ID.booksCollection, name: `Books by ${entity.name}`, url: `${SITE_URL}/books/` };
const FRAMEWORKS_COLLECTION_STUB = { "@type": "CollectionPage", "@id": ID.frameworksCollection, name: `Frameworks by ${entity.name}`, url: `${SITE_URL}/frameworks/` };

const graph = (...nodes: Record<string, unknown>[]) => ({ "@context": "https://schema.org", "@graph": nodes });

function webPage(type: string, path: string, name: string, extra: Record<string, unknown> = {}) {
  return {
    "@type": type,
    "@id": `${SITE_URL}${path}#webpage`,
    url: `${SITE_URL}${path}`,
    name,
    inLanguage: "en",
    isPartOf: ref(ID.website),
    ...extra,
  };
}

// knowsAbout: Things, grounded where a matching Wikidata item exists (each QID verified
// 2026-11-25). Topics with no exact item stay ungrounded rather than borrow a near match.
const TOPIC_SAMEAS: Record<string, string> = {
  "Answer Engine Optimization": "https://www.wikidata.org/wiki/Q97171941",
  "Digital Strategy": "https://www.wikidata.org/wiki/Q5276170",
  "Schema Markup": "https://www.wikidata.org/wiki/Q3475322",
};
const knowsAbout = () => [
  ...entity.expertise.map((name) => ({ "@type": "Thing", name, ...(TOPIC_SAMEAS[name] ? { sameAs: TOPIC_SAMEAS[name] } : {}) })),
  ref(ID.brain),
];

const currentRoles = (withDates: boolean) =>
  entity.occupations
    .filter((o) => !o.endDate && (o.org === entity.org.name || o.org === entity.org2.name))
    .map((o) => ({
      "@type": "EmployeeRole",
      roleName: o.roleName,
      worksFor: ref(o.org === entity.org.name ? ID.org : ID.org2),
      // a start date is stated only where the page states it (SmartMarketer, on /about/)
      ...(withDates && o.org === entity.org.name && o.startDate ? { startDate: o.startDate } : {}),
    }));

// SITE-WIDE (app/layout.tsx): the WebSite and the Person's identity core. Nothing
// here is a page-specific claim: name, home URL and the profiles in the footer.
export function siteSchema() {
  return graph(
    {
      "@type": "WebSite",
      "@id": ID.website,
      url: HOME_URL,
      name: entity.name,
      inLanguage: "en",
      publisher: ref(ID.person),
    },
    { "@type": "Person", "@id": ID.person, name: entity.name, url: HOME_URL, sameAs: [...entity.sameAs] },
  );
}

// HOME (/): the Entity Home. ProfilePage > mainEntity Person, with what the homepage shows:
// both current roles, where he lives, expertise, the book, the framework, contact email.
export function homeSchema() {
  return graph(
    {
      "@type": "ProfilePage",
      "@id": ID.profilePage,
      url: HOME_URL,
      name: entity.headline,
      inLanguage: "en",
      dateModified: HOME_DATE_MODIFIED,
      isPartOf: ref(ID.website),
      mainEntity: ref(ID.person),
      primaryImageOfPage: ref(ID.headshot),
    },
    {
      "@type": "ImageObject",
      "@id": ID.headshot,
      url: `${SITE_URL}${entity.headshot.src}`,
      contentUrl: `${SITE_URL}${entity.headshot.src}`,
      caption: entity.headshot.alt,
      creditText: entity.headshot.credit,
      creator: { "@type": "Person", name: entity.headshot.credit, sameAs: entity.headshot.creditUrl },
    },
    {
      "@type": "Person",
      "@id": ID.person,
      name: entity.name,
      url: HOME_URL,
      mainEntityOfPage: ref(ID.profilePage),
      description: entity.elevatorPitch,
      image: ref(ID.headshot),
      email: entity.contact.email,
      jobTitle: currentRoles(false).map((r) => r.roleName),
      homeLocation: { "@type": "Place", name: entity.birthPlace, sameAs: "https://www.wikidata.org/wiki/Q2841" },
      worksFor: currentRoles(false),
      knowsAbout: knowsAbout(),
      sameAs: [...entity.sameAs],
      // Companion authority hub: a separate site of dated facts about this Person (linked in the footer).
      ...(AUTHORITY_HUB_URL
        ? { subjectOf: { "@type": "WebSite", "@id": `${AUTHORITY_HUB_URL}#website`, name: `${entity.name}: Verified Facts`, url: AUTHORITY_HUB_URL, about: ref(ID.person) } }
        : {}),
    },
    ORG_NODE,
    ORG2_NODE,
    { ...BOOK_STUB, author: ref(ID.person) },
    { ...BRAIN_STUB, alternateName: brainFramework.alternateNames, creator: ref(ID.person) },
  );
}

// ABOUT (/about/): the biography. Facts stated only here live only here:
// alternate name, birth date and place, education, dated role, past occupations.
export function aboutSchema() {
  const qas: { q: string; a: string }[] = entity.about.sections.flatMap((s) => s.qas.map((x) => ({ q: x.q, a: x.a })));
  return graph(
    webPage("AboutPage", "/about/", `All About ${entity.name}`, { about: ref(ID.person), mainEntity: ref(ID.person) }),
    {
      "@type": "Person",
      "@id": ID.person,
      name: entity.name,
      alternateName: entity.alternateName,
      url: HOME_URL,
      description: entity.about.intro,
      jobTitle: currentRoles(false).map((r) => r.roleName),
      birthDate: entity.birthDate,
      birthPlace: { "@type": "Place", name: entity.birthPlace, sameAs: "https://www.wikidata.org/wiki/Q2841" },
      worksFor: currentRoles(true),
      alumniOf: { "@type": "CollegeOrUniversity", name: entity.education.institution, sameAs: entity.education.institutionWikidata },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: `Degree in ${entity.education.degree}`,
        credentialCategory: "degree",
      },
      // Past professions as general occupations. Dated employment needs a named Organization;
      // the earlier employers are not named on the page, so no Role is asserted for them.
      hasOccupation: ["Executive Assistant", "Creative Director", "Lead Animator"].map((name) => ({ "@type": "Occupation", name })),
      knowsAbout: knowsAbout(),
      sameAs: [...entity.sameAs],
    },
    ORG_NODE,
    ORG2_NODE,
    BRAIN_STUB,
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/about/#faq`,
      mainEntity: qas.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    breadcrumbs([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]),
  );
}

// MEDIA & SPEAKING (/media-speaking/): the events shown on the page. Month precision
// only where the page gives a month. Articles and podcast episodes are not listed on
// this page, so they are not marked up here (the hub's /media page carries them).
export function mediaSchema() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthIso = (label: string) => {
    const [m, y] = label.split(" ");
    const i = months.indexOf(m) + 1;
    return i ? `${y}-${String(i).padStart(2, "0")}` : y;
  };
  return graph(
    webPage("WebPage", "/media-speaking/", `${entity.name}: Media & Speaking`, { about: ref(ID.person) }),
    ...entity.speaking.map((ev, i) => ({
      "@type": "Event",
      "@id": `${SITE_URL}/media-speaking/#event-${i + 1}`,
      name: ev.event,
      description: ev.talk,
      startDate: monthIso(ev.date),
      location: { "@type": "Place", name: ev.location },
      performer: ref(ID.person),
      image: ev.images.map((img) => `${SITE_URL}${img.src}`),
    })),
    breadcrumbs([{ name: "Home", path: "/" }, { name: "Media & Speaking", path: "/media-speaking/" }]),
  );
}

// CONTACT (/contact/)
export function contactSchema() {
  return graph(
    webPage("ContactPage", "/contact/", `Contact ${entity.name}`, { about: ref(ID.person) }),
    { "@type": "Person", "@id": ID.person, name: entity.name, url: HOME_URL, email: entity.contact.email },
    breadcrumbs([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]),
  );
}

// BOOKS (/books/): the collection. Each book is defined in full on its own page.
export function booksCollectionSchema(books: { path: string }[]) {
  return graph(
    {
      "@type": "CollectionPage",
      "@id": ID.booksCollection,
      name: `Books by ${entity.name}`,
      url: `${SITE_URL}/books/`,
      inLanguage: "en",
      isPartOf: ref(ID.website),
      author: ref(ID.person),
      mainEntity: {
        "@type": "ItemList",
        itemListElement: books.map((bk, i) => ({ "@type": "ListItem", position: i + 1, url: `${SITE_URL}${bk.path}`, item: ref(`${SITE_URL}${bk.path}#book`) })),
      },
    },
    { ...BOOK_STUB, author: ref(ID.person) },
    breadcrumbs([{ name: "Home", path: "/" }, { name: "Books", path: "/books/" }]),
  );
}

// BLOG POST (/blog/<slug>/)
export function blogPostSchema(post: { slug: string; title: string; excerpt: string; date: string; tags: readonly string[] }) {
  const url = `${SITE_URL}/blog/${post.slug}/`;
  return graph({
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    url,
    mainEntityOfPage: url,
    inLanguage: "en",
    isPartOf: ref(ID.website),
    author: ref(ID.person),
    publisher: ref(ID.person),
    keywords: post.tags.join(", "),
  });
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
  const authors = [ref(PERSON_ID), ...entity.book.coAuthors.map((name) => ({ "@type": "Person", name }))];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Book",
        "@id": ID.book,
        name: `${entity.book.title}: ${entity.book.subtitle}`,
        alternateName: [entity.book.title, "The first AEO book"],
        keywords: "first AEO book, Answer Engine Optimization book, AEO book, AI search, ChatGPT, Perplexity, Google AI Mode",
        bookEdition: entity.book.edition,
        url: pageUrl,
        sameAs: entity.book.formats.map((f) => f.url),
        image: `${SITE_URL}/aeo-blueprint-2026-edition-stack.avif`,
        description: entity.book.description,
        author: authors,
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
        inLanguage: "en",
        mainEntity: ref(ID.book),
        isPartOf: ref(ID.booksCollection),
      },
      BOOKS_COLLECTION_STUB,
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
const BRAIN_ID = ID.brain;
const PERSON_REF = ref(PERSON_ID);

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
      FRAMEWORKS_COLLECTION_STUB,
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
      { ...BRAIN_STUB, creator: ref(PERSON_ID) },
    ],
  };
}
