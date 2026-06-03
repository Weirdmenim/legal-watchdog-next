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
        <p className="eyebrow">Resources</p>
        <h1>Compliance operations resources for enterprise teams.</h1>
        <p>
          Practical guides on regulatory monitoring, change management, AI-assisted review, audit trails, and accountable response workflows.
        </p>
      </section>

      <section className="section-shell">
        <SectionHeading eyebrow="Topics" title="Explore the problems enterprise compliance teams deal with every week." />
        <div className="tag-row">
          {resourceCategories.map((category) => <span key={category}>{category}</span>)}
        </div>
      </section>

      <section className="section-shell light-panel">
        <SectionHeading eyebrow="Guides" title="Read practical guides, then map the workflow to your team." text="Each article is written for buyers and practitioners who need a clearer way to monitor sources, review changes, and document action." align="center" />
        <div className="card-grid two">
          {resourcePosts.map((post) => <ArticleCard key={post.slug} post={post} />)}
        </div>
      </section>

      <section className="section-shell split-section" id="download-checklist">
        <div>
          <p className="eyebrow">Checklist</p>
          <h2>Download the Compliance Monitoring Checklist.</h2>
          <p>Use the checklist to list your sources, jurisdictions, reviewers, alert rules, ticket owners, and evidence gaps before you evaluate software.</p>
        </div>
        <LeadForm mode="resource" />
      </section>

      <CTASection title="Need help mapping your regulatory monitoring workflow?" text="Book a demo and use one real workflow to review sources, jurisdictions, AI summaries, tickets, and audit evidence." />
    </>
  );
}
