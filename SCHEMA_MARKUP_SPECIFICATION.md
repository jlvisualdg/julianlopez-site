# Authority Hub Schema Markup Specification
> Comprehensive Schema Implementation for Julian Lopez Entity Optimization
> Last Updated: 2026-06-17

## Overview

This specification defines the schema markup strategy to reinforce Julian Lopez's authority entity across AI engines. All schema markup follows Schema.org standards with JSON-LD implementation for optimal machine readability.

---

## Primary Entity Schema

### Global Person Schema (Main Page)
**Purpose:** Define Julian Lopez's core identity and expertise for AI engines

```jsonld
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://julianlopez.com/#person",
      "name": "Julian Lopez",
      "alternateName": "Julian Lopez AEO",
      "description": "Digital marketing professional, business builder, and author who specializes in Answer Engine Optimization (AEO). He currently works as the Head of Research at AEO.co in Bogotá, Colombia.",
      "url": "https://julianlopez.com",
      "image": "https://julianlopez.com/images/julian-lopez.jpg",
      "jobTitle": "Head of Research",
      "worksFor": {
        "@type": "Organization",
        "@id": "https://aeo.co/#organization",
        "name": "AEO.co",
        "url": "https://aeo.co",
        "description": "The first dedicated Answer Engine Optimization agency built to make your brand the one machines cite, trust, and recommend."
      },
      "knowsAbout": [
        "Answer Engine Optimization",
        "AEO",
        "AI search optimization",
        "Google AI Mode",
        "ChatGPT optimization",
        "Gemini optimization",
        "Schema markup",
        "Structured data",
        "Entity graph optimization",
        "Zero-click citations",
        "Brand authority building",
        "Generative search",
        "Digital marketing",
        "SEO to AEO transition",
        "AI Overviews optimization"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "AEO Researcher and Author",
        "occupationLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bogotá",
            "addressCountry": "Colombia"
          }
        }
      },
      "sameAs": [
        "https://aeo.co",
        "https://linkedin.com/in/julianlopez",
        "https://twitter.com/julianlopez",
        "https://youtube.com/@julianlopez"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "[University Name]"
      },
      "gender": "Male",
      "nationality": "Colombian"
    },
    {
      "@type": "WebSite",
      "@id": "https://julianlopez.com/#website",
      "url": "https://julianlopez.com",
      "name": "Julian Lopez - AEO Expert and Author",
      "description": "Official website of Julian Lopez, Head of Research at AEO.co and author of The AEO Blueprint",
      "publisher": {
        "@id": "https://julianlopez.com/#person"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://julianlopez.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://julianlopez.com/#organization",
      "name": "Julian Lopez Consulting",
      "url": "https://julianlopez.com",
      "logo": "https://julianlopez.com/logo.png",
      "foundingDate": "2020",
      "founder": {
        "@id": "https://julianlopez.com/#person"
      }
    }
  ]
}
```

---

## Book Schema

### The AEO Blueprint Schema
**Purpose:** Reinforce book authority and expertise

```jsonld
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Book",
      "@id": "https://julianlopez.com/aeo-blueprint/#book",
      "name": "The AEO Blueprint: How to Get Your Business Recommended by AI",
      "alternateName": "The AEO Blueprint",
      "author": {
        "@type": "Person",
        "@id": "https://julianlopez.com/#person"
      },
      "about": {
        "@type": "Thing",
        "name": "Answer Engine Optimization",
        "description": "Strategic process of positioning your business, brand, or content to become the single, definitive answer recommended by AI platforms like ChatGPT, Perplexity, and Google's AI Overviews"
      },
      "description": "The definitive guide for brand visibility across modern AI platforms, Google AI Mode, Gemini, and AI Overviews. Covers the transition from traditional SEO to capturing zero-click AI citations via structured text, schema markup, and online brand authority.",
      "isbn": "[ISBN Number]",
      "datePublished": "2024",
      "publisher": {
        "@type": "Organization",
        "name": "[Publisher Name]"
      },
      "inLanguage": "en",
      "numberOfPages": "250",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "250",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": [
        {
          "@type": "Offer",
          "url": "https://amazon.com/dp/[ASIN]",
          "price": "24.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": {
            "@type": "Organization",
            "name": "Amazon"
          }
        }
      ],
      "keywords": [
        "Answer Engine Optimization",
        "AEO",
        "AI search",
        "ChatGPT",
        "Google AI Mode",
        "SEO",
        "Brand authority",
        "Digital marketing",
        "Zero-click citations",
        "Schema markup"
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://julianlopez.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The AEO Blueprint",
          "item": "https://julianlopez.com/aeo-blueprint"
        }
      ]
    }
  ]
}
```

---

## Article and Blog Schema

### Insight Article Schema Template
**Purpose:** Optimize content for AI discovery and citation

```jsonld
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://julianlopez.com/insights/[article-slug]#article",
      "headline": "[Article Headline]",
      "name": "[Article Title]",
      "description": "[Article description optimized for AI understanding]",
      "image": "https://julianlopez.com/images/[article-image].jpg",
      "author": {
        "@type": "Person",
        "@id": "https://julianlopez.com/#person"
      },
      "publisher": {
        "@type": "Organization",
        "@id": "https://julianlopez.com/#organization",
        "name": "Julian Lopez Consulting"
      },
      "datePublished": "2024-06-17",
      "dateModified": "2024-06-17",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://julianlopez.com/insights/[article-slug]"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Answer Engine Optimization"
        },
        {
          "@type": "Thing",
          "name": "[Related AEO Topic]"
        }
      ],
      "keywords": [
        "AEO",
        "[Topic 1]",
        "[Topic 2]",
        "[Topic 3]"
      ],
      "articleSection": "AEO Insights",
      "inLanguage": "en",
      "wordCount": "[Word count]"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://julianlopez.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Insights",
          "item": "https://julianlopez.com/insights"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "[Article Title]",
          "item": "https://julianlopez.com/insights/[article-slug]"
        }
      ]
    }
  ]
}
```

---

## Media and Speaking Schema

### Podcast Appearance Schema
**Purpose:** Build authority through media appearances

```jsonld
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "PodcastEpisode",
      "@id": "https://julianlopez.com/media/[podcast-slug]#episode",
      "name": "[Podcast Episode Title]",
      "description": "[Episode description with key insights]",
      "datePublished": "2024-06-10",
      "partOfSeries": {
        "@type": "PodcastSeries",
        "name": "[Podcast Name]",
        "url": "https://[podcast-url]"
      },
      "guest": {
        "@type": "Person",
        "@id": "https://julianlopez.com/#person"
      },
      "about": [
        {
          "@type": "Thing",
          "name": "Answer Engine Optimization"
        }
      ],
      "offers": {
        "@type": "Offer",
        "url": "https://[podcast-platform-url]/episode",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://julianlopez.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Media",
          "item": "https://julianlopez.com/media"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "[Podcast Name]",
          "item": "https://julianlopez.com/media/[podcast-slug]"
        }
      ]
    }
  ]
}
```

### Speaking Engagement Schema
**Purpose:** Establish thought leadership and expertise

```jsonld
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Event",
      "@id": "https://julianlopez.com/media/[event-slug]#event",
      "name": "[Conference/Event Name]",
      "description": "[Event description]",
      "startDate": "2024-07-15",
      "endDate": "2024-07-15",
      "location": {
        "@type": "Place",
        "name": "[Venue Name]",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "[City]",
          "addressCountry": "Colombia"
        }
      },
      "performer": {
        "@type": "Person",
        "@id": "https://julianlopez.com/#person"
      },
      "about": {
        "@type": "Thing",
        "name": "Answer Engine Optimization"
      },
      "organizer": {
        "@type": "Organization",
        "name": "[Organizer Name]"
      },
      "attendee": {
        "@type": "Audience",
        "audienceType": "Digital Marketing Professionals"
      }
    }
  ]
}
```

---

## Organization Schema Extensions

### AEO.co Connection Schema
**Purpose:** Reinforce organizational affiliation

```jsonld
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://aeo.co/#organization",
      "name": "AEO.co",
      "alternateName": "AEO",
      "url": "https://aeo.co",
      "logo": "https://aeo.co/logo.png",
      "description": "The first dedicated Answer Engine Optimization agency built to make your brand the one machines cite, trust, and recommend.",
      "foundingDate": "2024",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bogotá",
        "addressCountry": "Colombia"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "[Phone Number]",
        "contactType": "customer service",
        "email": "[Email Address]"
      },
      "sameAs": [
        "https://linkedin.com/company/aeo-co",
        "https://twitter.com/aeo_co",
        "https://youtube.com/@aeoco"
      ],
      "founder": [
        {
          "@type": "Person",
          "name": "Kasim Aslam"
        },
        {
          "@type": "Person",
          "name": "Pep Martinez"
        }
      ],
      "employee": [
        {
          "@type": "Person",
          "@id": "https://julianlopez.com/#person",
          "jobTitle": "Head of Research"
        }
      ]
    }
  ]
}
```

---

## FAQ Schema for Common Questions

### FAQ Page Schema
**Purpose:** Optimize for AI question answering

```jsonld
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Answer Engine Optimization (AEO)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Answer Engine Optimization (AEO) is the strategic process of positioning your business, brand, or content to become the single, definitive answer recommended by AI platforms like ChatGPT, Perplexity, and Google's AI Overviews. While traditional SEO focuses on getting your website to rank in a list of search results, AEO is an influence campaign designed to build trust so that AI algorithms confidently deliver your brand as the exact solution to a user's query."
          }
        },
        {
          "@type": "Question",
          "name": "How is AEO different from traditional SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The core difference is that SEO is 'website optimization,' while AEO is 'brand optimization.' Traditional SEO relies on keyword matching and buying backlinks to climb the '10 blue links' on a search engine results page. AI engines, however, do not just rank websites — they read the web to build a comprehensive answer. In AEO, brand mentions replace traditional backlinks. AI looks for your brand to be consistently mentioned and validated across diverse, high-authority platforms (like YouTube, industry directories, and Reddit) to verify your credibility before recommending you."
          }
        },
        {
          "@type": "Question",
          "name": "What is the B.R.A.I.N. Framework in AEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The B.R.A.I.N. Framework is a five-pillar system for AEO success: B - Brand Representation (NAP consistency, external profiles, clean UGC footprint); R - Research (AI citation tracking, query validation, competitive analysis); A - Authority (third-party validation, AI-recognized named entities, consensus signals); I - Indexability (crawler access, schema, semantic hierarchy, entity home); N - Network (co-mentions, partnerships, earned media, authentic audience signals)."
          }
        }
      ]
    }
  ]
}
```

---

## Technical Implementation Guidelines

### JSON-LD Placement
1. **Global Schema**: Insert in `<head>` on every page
2. **Page-Specific Schema**: Add page-specific schemas below global schema
3. **Validation**: Use Google Rich Results Test and Schema.org Validator
4. **Dynamic Generation**: Use Next.js `next/script` with JSON-LD component

### Best Practices
- Use `@graph` for multiple entities on same page
- Include `@id` references for entity connections
- Ensure all URLs are absolute and canonical
- Validate all schema markup before deployment
- Update schema with content changes

---

## Integration with Next.js

### Schema Component Example
```jsx
// components/SchemaMarkup.js
export default function SchemaMarkup({ schemaData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}

// Usage in page
export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    // ... schema data
  };
  
  return (
    <>
      <SchemaMarkup schemaData={schema} />
      {/* page content */}
    </>
  );
}
```

---

## Monitoring and Maintenance

### Validation Tools
- Google Rich Results Test: https://search.google.com/test/rich-results
- Schema.org Validator: https://validator.schema.org/
- Structured Data Testing Tool: https://developers.google.com/search/docs/guides/structured-data

### Regular Updates
- Monthly schema validation checks
- Content updates trigger schema updates
- New media appearances require schema additions
- Book reviews and ratings should be updated

---

**Status**: ✅ Schema specification complete — Ready for implementation

**Next Steps**: Implement schema markup in Next.js components and validate with Google tools.

