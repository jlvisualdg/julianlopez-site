import { entity, SITE_URL } from "@/lib/entity";

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
      image: entity.image,
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
