import type { Metadata } from "next";
import { entity } from "@/lib/entity";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${entity.name} for AEO research, brand entity optimization, and speaking.`,
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <article>
      <p className="label">Contact</p>
      <h1 style={{ marginTop: "1rem" }}>Get in touch.</h1>
      <p className="lede" style={{ marginTop: "1rem" }}>
        For AEO research, brand entity optimization, or speaking, reach {entity.name} directly.
      </p>
      <dl className="rows">
        <div className="row"><dt>Email</dt><dd><a href={`mailto:${entity.contact.email}`}>{entity.contact.email}</a></dd></div>
        <div className="row"><dt>LinkedIn</dt><dd><a href={entity.sameAs[0]} rel="me">linkedin.com/in/julian-lopez</a></dd></div>
        <div className="row"><dt>Organization</dt><dd><a href="https://smartmarketer.com" rel="me">SmartMarketer Agency - AEO Team</a></dd></div>
      </dl>
      <div className="actions">
        <a className="btn" href={entity.book.url}>Read the AEO Blueprint</a>
        <a className="btn btn-primary" href={`mailto:${entity.contact.email}`}>Reach Out</a>
      </div>
    </article>
  );
}
