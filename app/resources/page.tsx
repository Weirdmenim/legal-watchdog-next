import { ArticleCard } from "@/components/ArticleCard";
import { CTASection } from "@/components/CTASection";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SectionHeading } from "@/components/SectionHeading";
import { resourceCategories, resourcePosts, seo } from "@/data/site";
import { breadcrumbSchema, pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({ ...seo.resources, path: "/resources" });

export default function ResourcesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }])} />
      <section className="page-hero section-shell">
        <p className="eyebrow">Resources and blog</p>
        <h1>Practical guides for regulatory monitoring, compliance workflows, AI summaries, and audit readiness.</h1>
        <p>
          This Resources section is built for SEO and conversion. Each guide targets a clear keyword, answers a buyer question, links to product pages, and gives readers a next step.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Blog categories" title="Build topical authority around the buyer's real problems." />
        <div className="tag-row">
          {resourceCategories.map((category) => <span key={category}>{category}</span>)}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Published guide set" title="SEO-focused articles included in this build." text="These are real, clickable resource pages, not only a blog idea list." align="center" />
        <div className="card-grid two">
          {resourcePosts.map((post) => <ArticleCard key={post.slug} post={post} />)}
        </div>
      </section>

      <section className="section-shell split-section" id="download-checklist">
        <div>
          <p className="eyebrow">Lead magnet</p>
          <h2>Download the Compliance Monitoring Checklist.</h2>
          <p>Use this gated resource flow to capture early-stage buyers who are not ready for a demo yet. Connect it to Brevo, HubSpot, Airtable, or your CRM before launch.</p>
        </div>
        <LeadForm mode="resource" />
      </section>

      <CTASection title="Turn resource readers into qualified demo leads." text="Use article CTAs to move readers from education into source mapping, jurisdiction planning, and demo booking." />
    </>
  );
}
