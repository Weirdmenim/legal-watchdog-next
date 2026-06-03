import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { seo, useCases } from "@/data/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.useCasesPage, path: "/use-cases" });

const pilotProof = [
  { title: "Review speed", text: "Measure how long it takes to move from detected change to reviewed update." },
  { title: "Ownership clarity", text: "Track whether every update has an assigned owner, status, and next step." },
  { title: "Evidence quality", text: "Confirm that revisions, summaries, comments, files, and decisions stay connected." }
];

export default function UseCasesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Use Cases", href: "/use-cases" }])} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Use cases</p>
        <h1>Regulatory monitoring use cases for complex enterprise teams.</h1>
        <p>
          See how Legal WatchDog can support immigration monitoring, FDA update tracking, privacy law monitoring, and contract-related regulatory risk workflows.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Enterprise workflows" title="Start with one workflow that already creates monitoring pressure." />
        <div className="case-grid">
          {useCases.map((item) => (
            <article className="case-card" id={item.id} key={item.title}>
              <p className="mini-label">{item.industry}</p>
              <h2>{item.title}</h2>
              <dl>
                <div><dt>Challenge</dt><dd>{item.challenge}</dd></div>
                <div><dt>Workflow</dt><dd>{item.solution}</dd></div>
                <div><dt>Proof to measure</dt><dd>{item.result}</dd></div>
              </dl>
              <Link className="button button-secondary" href="/contact" data-track={`case:${item.id}`}>Discuss this workflow</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Pilot proof" title="What a focused pilot should prove." text="Use early pilots to validate response speed, ownership clarity, and evidence quality before expanding across more jurisdictions." align="center" />
        <div className="card-grid three">
          {pilotProof.map((item) => <article className="info-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <InternalLinks />
      <CTASection title="Have a monitoring workflow like one of these?" text="Book a demo and walk through your sources, jurisdictions, response owners, and review evidence." />
    </>
  );
}
