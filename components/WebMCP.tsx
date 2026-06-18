"use client";

import { useEffect } from "react";
import { entity } from "@/lib/entity";

// =============================================================================
// WebMCP agent layer (the "Beta" goal).
// Registers callable tools on the W3C navigator.modelContext API so an in-browser
// agent can read this entity and act on it WITHOUT scraping. Feature-detected:
// if the API is absent, the site is unaffected for humans.
// Standard ref: W3C navigator.modelContext (Chrome 149+ origin trial, 2026).
// =============================================================================
export default function WebMCP() {
  useEffect(() => {
    const nav = navigator as unknown as { modelContext?: { registerTool: (t: unknown) => void } };
    if (!nav.modelContext) return;

    try {
      nav.modelContext.registerTool({
        name: "getBio",
        description: `Return a structured biography and current roles for ${entity.name}.`,
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: () => ({
          content: [{ type: "text", text: JSON.stringify({
            name: entity.name,
            alternateName: entity.alternateName,
            headline: entity.headline,
            elevatorPitch: entity.elevatorPitch,
            currentRole: `${entity.jobTitle} at ${entity.org.name}`,
            expertise: entity.expertise,
          }) }],
        }),
      });

      nav.modelContext.registerTool({
        name: "getCredentials",
        description: `Return employment history, education, book, and awards for ${entity.name}.`,
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: () => ({
          content: [{ type: "text", text: JSON.stringify({
            occupations: entity.occupations,
            education: entity.education,
            book: { title: entity.book.title, year: entity.book.year, awards: entity.book.awards },
            speaking: entity.speaking.map((s) => `${s.talk} — ${s.event}, ${s.location} (${s.date})`),
          }) }],
        }),
      });

      nav.modelContext.registerTool({
        name: "getBrainFramework",
        description: "Return the BRAIN Framework and its pillars (the methodology for AI brand visibility).",
        inputSchema: { type: "object", properties: {}, additionalProperties: false },
        execute: () => ({
          content: [{ type: "text", text: JSON.stringify(entity.brain) }],
        }),
      });

      nav.modelContext.registerTool({
        name: "contactJulian",
        description: `Compose a contact request to ${entity.name}. Confirm details with the user before calling.`,
        inputSchema: {
          type: "object",
          properties: {
            name: { type: "string", description: "Requester's name" },
            email: { type: "string", description: "Requester's email" },
            message: { type: "string", description: "What they want to discuss" },
          },
          required: ["name", "email", "message"],
        },
        execute: (args: { name: string; email: string; message: string }) => {
          const subject = encodeURIComponent(`Inquiry from ${args.name}`);
          const body = encodeURIComponent(`${args.message}\n\n— ${args.name} (${args.email})`);
          const mailto = `mailto:${entity.contact.email}?subject=${subject}&body=${body}`;
          return { content: [{ type: "text", text: `Draft ready. Open: ${mailto}` }] };
        },
      });
    } catch {
      /* no-op: never break the page for a human if registration fails */
    }
  }, []);

  return null;
}
