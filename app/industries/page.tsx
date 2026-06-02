import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { industries, seo } from "@/data/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.industries, path: "/industries" });

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }])} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Industries served</p>
        <h1>Regulatory monitoring for organizations where one missed update can become serious operational risk.</h1>
        <p>
          Legal WatchDog is designed for large, regulated organizations that manage many sources, jurisdictions, departments, and response owners.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Regulated sectors" title="Built for complex operating environments." text="Each industry card links to a related use case or resource so the site has stronger internal linking and clearer buyer paths." />
        <div className="card-grid two">
          {industries.map((industry) => (
            <article className="info-card" key={industry.name}>
              <h2>{industry.name}</h2>
              <p>{industry.text}</p>
              <Link href={industry.href}>View related workflow</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell dark-panel">
        <SectionHeading
          eyebrow="Why industry context matters"
          title="The same update can create different obligations for legal, compliance, and operations teams."
          text="A visa rule may affect customer guidance. An FDA notice may affect quality processes. A privacy update may affect contracts, product design, and data handling. Legal WatchDog keeps each workflow organized by project and jurisdiction."
        />
      </section>

      <InternalLinks />
      <CTASection title="Discuss the jurisdictions and sources your team needs to monitor." />
    </>
  );
}
