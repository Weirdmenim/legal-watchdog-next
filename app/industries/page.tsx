import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { industries, industryLandingPages, seo } from "@/data/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.industries, path: "/industries" });

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }])} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Industries served</p>
        <h1>Regulatory monitoring for regulated industries.</h1>
        <p>
          Legal WatchDog is designed for large organizations that monitor official sources across jurisdictions, departments, reviewers, and operational teams.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Priority sectors" title="Industry pages built around specific monitoring workflows." text="Each page explains common sources, teams involved, and the workflow Legal WatchDog should support." />
        <div className="card-grid three">
          {industryLandingPages.map((industry) => (
            <article className="info-card" key={industry.slug}>
              <h2><Link href={`/industries/${industry.slug}`}>{industry.title}</Link></h2>
              <p>{industry.description}</p>
              <Link href={`/industries/${industry.slug}`}>View industry workflow</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Additional regulated sectors" title="The same workflow can support other complex operating environments." align="center" />
        <div className="card-grid four">
          {industries.map((industry) => (
            <article className="compact-card" key={industry.name}>
              <h3>{industry.name}</h3>
              <p>{industry.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell dark-panel">
        <SectionHeading
          eyebrow="Why industry context matters"
          title="The same update can create different work for legal, compliance, and operations teams."
          text="A visa rule may affect customer guidance. An FDA notice may affect quality processes. A privacy update may affect contracts, product design, and data handling. Legal WatchDog keeps each workflow organized by project, jurisdiction, source, and owner."
        />
      </section>

      <InternalLinks />
      <CTASection title="Discuss the jurisdictions and sources your team needs to monitor." />
    </>
  );
}
