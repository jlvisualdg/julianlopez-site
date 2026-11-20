// =============================================================================
// MACHINE DATA — What AI engines actually consume
// This is the raw data displayed in the agent-first view
// =============================================================================

import { entity, SITE_URL } from './entity';

export const machineData = {
  // Entity metadata
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  "name": entity.name,
  "alternateName": entity.alternateName,
  "jobTitle": entity.jobTitle,
  "worksFor": [
    {
      "@type": "Organization",
      "@id": "https://smartmarketer.com/#organization",
      "name": "SmartMarketer Agency",
      "url": "https://smartmarketer.com",
      "description": "Digital marketing agency"
    },
    {
      "@type": "Organization",
      "@id": "https://aeo.co/#organization",
      "name": "AEO.co",
      "url": "https://aeo.co",
      "description": "Specialized Answer Engine Optimization platform"
    }
  ],
  "description": "Julian Lopez is an Answer Engine Optimization (AEO) expert, digital strategist, and author based in Bogota, Colombia. Head Strategist for the AEO Team at SmartMarketer Agency and Head of Research for AEO.co. Co-author of the bestselling book The AEO Blueprint: Be the Answer AI Recommends.",
  "knowsAbout": entity.expertise,
  "hasOccupation": {
    "@type": "Occupation",
    "name": "AEO Expert, Digital Strategist & Author"
  },
  "sameAs": entity.sameAs,
  "location": {
    "type": "residence",
    "description": "Lives in Bogotá, Colombia"
  },
  
  // Homepage content structure
  "homepage_content": {
    "headline": entity.headline,
    "value_proposition": entity.elevatorPitch,
    "expertise_areas": entity.expertise,
    "current_role": entity.jobTitle,
    "organization": entity.org,
    "brand_entity_optimization": entity.home.brandEntity
  },
  
  // Navigation structure
  "navigation": {
    "about": "/about/",
    "frameworks": "/frameworks/",
    "brain_framework": "/frameworks/brain-framework/",
    "books": "/books/",
    "book": "/books/the-aeo-blueprint/",
    "blog": "/blog/",
    "media_speaking": "/media-speaking/",
    "contact": "/contact/"
  },
  
  // System metadata
  "system_metadata": {
    "entity_home": SITE_URL,
    "content_type": "machine_readable",
    "ai_optimization": true,
    "human_readable_alternative": true,
    "crawler_access": "granted",
    "schema_version": "schema.org/draft"
  },
  
  // BRAIN Framework data
  "brain_framework": {
    "name": "The B.R.A.I.N. Framework",
    "creator": "Julian Lopez",
    "url": `${SITE_URL}/frameworks/brain-framework/`,
    "summary": "A first-principles, five-pillar system (B.R.A.I.N. v2.4) designed to transform invisible websites into AI-Recommended Brands. Pillars: Brand Representation · Research · Audience · Indexability · Network.",
    "pillars": entity.brain.pillars.map((p) => ({
      "letter": p.letter,
      "title": p.title,
      "subtitle": p.subtitle,
      "description": p.body,
      "url": `${SITE_URL}${entity.brain.path}#${p.slug}`,
    })),
    "framework_note": "Five pillars, none optional. They're a causal chain — each one depends on the one before it. The sequence matters: fixing Indexability while Brand Representation is broken is backwards. AI forms its opinion about you externally before it ever visits your site."
  },
  
  // Book information
  "book": {
    "title": entity.book.title,
    "subtitle": entity.book.subtitle,
    "authors": [entity.name, ...entity.book.coAuthors],
    "year": entity.book.year,
    "awards": entity.book.awards,
    "url": entity.book.url,
    "description": entity.book.description
  }
} as const;

export type MachineData = typeof machineData;