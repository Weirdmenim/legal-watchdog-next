import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { seo, useCases } from "@/data/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.caseStudies, path: "/case-studies" });

const proofChecklist = [
  { title: "Before metrics", text: "Manual review hours, sources tracked, response delays, missed update history, and escalation frequency." },
  { title: "After metrics", text: "Time saved, updates detected, ticket resolution time, review coverage, and audit evidence created." },
  { title: "Buyer proof", text: "Named quotes, approved logo use, compliance team role, and security or procurement validation." }
];

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Case Studies", href: "/case-studies" }])} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Case studies</p>
        <h1>Use case templates for enterprise regulatory monitoring workflows.</h1>
        <p>
          These are implementation-ready case study structures based on product use cases. Replace placeholders with real customer names, proof, and validated metrics after pilots.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Use cases" title="Realistic scenarios without fake customer claims." />
        <div className="case-grid">
          {useCases.map((item) => (
            <article className="case-card" id={item.id} key={item.title}>
              <p className="mini-label">{item.industry}</p>
              <h2>{item.title}</h2>
              <dl>
                <div><dt>Challenge</dt><dd>{item.challenge}</dd></div>
                <div><dt>Monitoring setup</dt><dd>{item.solution}</dd></div>
                <div><dt>Result placeholder</dt><dd>{item.result}</dd></div>
                <div><dt>Quote placeholder</dt><dd>“Add a real quote from a pilot customer or internal champion after validation.”</dd></div>
              </dl>
              <Link className="button button-secondary" href="/contact" data-track={`case:${item.id}`}>Discuss Similar Workflow</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Proof checklist" title="What to collect before publishing real case studies." align="center" />
        <div className="card-grid three">
          {proofChecklist.map((item) => <article className="info-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <InternalLinks />
      <CTASection title="Have a monitoring workflow like one of these?" text="Book a demo and walk through your sources, jurisdictions, and response owners with the Legal WatchDog team." />
    </>
  );
}
