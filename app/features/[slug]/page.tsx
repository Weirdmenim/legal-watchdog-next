import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { FAQ } from "@/components/FAQ";
import { JsonLd } from "@/components/JsonLd";
import { ProductMockup } from "@/components/ProductMockup";
import { SectionHeading } from "@/components/SectionHeading";
import { featureLandingPages } from "@/data/site";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/utils";

export function generateStaticParams() {
  return featureLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = featureLandingPages.find((item) => item.slug === slug);
  if (!page) return {};
  return pageMetadata({
    title: page.title,
    description: page.description,
    path: `/features/${page.slug}`,
    keywords: [page.keyword, "regulatory monitoring software", "compliance operations"]
  });
}

export default async function FeatureLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = featureLandingPages.find((item) => item.slug === slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd data={[
        breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Features", href: "/features" }, { label: page.title, href: `/features/${page.slug}` }]),
        faqSchema(page.faq)
      ]} />
      <section className="page-hero section-shell feature-hero-layout">
        <div>
          <p className="eyebrow">Feature</p>
          <h1>{page.title}.</h1>
          <p>{page.description}</p>
          <div className="hero-actions compact-actions">
            <Link className="button button-primary" href="/contact" data-track={`feature-demo:${page.slug}`}>Book a Demo</Link>
            <Link className="button button-secondary" href="/features" data-track={`feature-back:${page.slug}`}>All Features</Link>
          </div>
        </div>
        <ProductMockup variant={page.mockup} />
      </section>

      <section className="section-shell split-section">
        <div>
          <p className="eyebrow">Why it matters</p>
          <h2>The workflow problem this feature solves.</h2>
        </div>
        <div className="stacked-copy">
          <p>{page.problem}</p>
          <p>{page.useCase}</p>
          <Link href="/contact">Discuss this in a demo</Link>
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Workflow" title="How the workflow should work in Legal WatchDog." align="center" />
        <div className="workflow-grid">
          {page.workflow.map((step, index) => (
            <article className="workflow-step" key={step}>
              <span>{index + 1}</span>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Buyer value" title="What enterprise teams should gain." />
        <div className="card-grid four">
          {page.buyerValue.map((value) => <article className="info-card" key={value}><h3>{value}</h3></article>)}
        </div>
      </section>

      <section className="section-shell dark-panel">
        <SectionHeading eyebrow="Trust boundary" title="Faster review without pretending AI replaces judgment." text="Legal WatchDog keeps source context, revision history, confidence signals, and human review visible throughout the workflow." />
        <div className="card-grid three">
          <article className="dark-card"><h3>Source-linked summaries</h3><p>Every summary should point back to the source and revision that generated it.</p></article>
          <article className="dark-card"><h3>Accountable tickets</h3><p>Each response can have an owner, deadline, thread, file history, and final status.</p></article>
          <article className="dark-card"><h3>Review discipline</h3><p>Important decisions remain with legal, compliance, and operations professionals.</p></article>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="FAQ" title="Questions about this capability." />
        <FAQ items={page.faq} />
      </section>

      <CTASection title="Want to see this workflow with your own sources?" text="Book a demo and walk through one real monitoring workflow your team handles today." />
    </>
  );
}
