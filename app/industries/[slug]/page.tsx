import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { ProductMockup } from "@/components/ProductMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { industryLandingPages } from "@/data/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/utils";

export function generateStaticParams() {
  return industryLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = industryLandingPages.find((item) => item.slug === slug);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/industries/${page.slug}`,
    keywords: [page.title, "regulatory monitoring", "compliance monitoring platform"]
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = industryLandingPages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: page.title, href: `/industries/${page.slug}` }])} />
      <section className="page-hero section-shell feature-hero-layout">
        <div>
          <p className="eyebrow">Industry workflow</p>
          <h1>{page.title}.</h1>
          <p>{page.description}</p>
          <div className="hero-actions compact-actions">
            <Link className="button button-primary" href="/contact" data-track={`industry-demo:${page.slug}`}>Book a Demo</Link>
            <Link className="button button-secondary" href="/industries" data-track={`industry-back:${page.slug}`}>All Industries</Link>
          </div>
        </div>
        <ProductMockup variant="jurisdiction" />
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Common source types" title="Sources this team may need to monitor." />
        <div className="card-grid five compact-card-grid">
          {page.sourceTypes.map((source) => <article className="compact-card" key={source}><h3>{source}</h3></article>)}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Teams involved" title="Who usually needs visibility." align="center" />
        <div className="card-grid four">
          {page.teams.map((team) => <article className="info-card" key={team}><h3>{team}</h3></article>)}
        </div>
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">Risk reduced</p>
          <h2>Make updates visible before they become operational gaps.</h2>
        </div>
        <div className="check-list">
          {page.risksReduced.map((risk) => <p key={risk}>{risk}</p>)}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Workflow" title="How Legal WatchDog should support this industry." />
        <div className="workflow-grid">
          {page.workflow.map((step, index) => (
            <article className="workflow-step" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell dark-panel">
        <SectionHeading eyebrow="Related capabilities" title="The features this workflow usually depends on." />
        <div className="card-grid three">
          {page.relatedFeatures.map((feature) => <article className="dark-card" key={feature}><h3>{feature}</h3><p>Connect this capability to a real monitoring workflow during the demo.</p></article>)}
        </div>
      </section>

      <CTASection title="Want to map this industry workflow to your sources?" text="Book a demo and review your jurisdictions, source types, reviewers, and response owners." />
    </>
  );
}
