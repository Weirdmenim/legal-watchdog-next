import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTASection } from "@/components/CTASection";
import { InternalLinks } from "@/components/InternalLinks";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { resourcePosts, siteConfig } from "@/data/site";
import { absoluteUrl, breadcrumbSchema, pageMetadata } from "@/lib/utils";

export function generateStaticParams() {
  return resourcePosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = resourcePosts.find((item) => item.slug === slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.summary,
    path: `/resources/${post.slug}`,
    keywords: [post.keyword, post.category, "Legal WatchDog resources"]
  });
}

export default async function ResourceArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = resourcePosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.summary,
    mainEntityOfPage: absoluteUrl(`/resources/${post.slug}`),
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name }
  };

  return (
    <>
      <JsonLd data={[
        articleSchema,
        breadcrumbSchema([
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: post.title, href: `/resources/${post.slug}` }
        ])
      ]} />
      <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: post.title }]} />
      <article className="article-layout section-shell">
        <header className="article-header">
          <p className="eyebrow">{post.category}</p>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
          <div className="article-meta">
            <span>5 min read</span>
            <span>For {post.audience}</span>
          </div>
          <div className="hero-actions">
            <ButtonLink href="/contact" trackingId={`article-demo:${post.slug}`}>Book a Demo</ButtonLink>
            <ButtonLink href={post.relatedFeatureHref} variant="secondary" trackingId={`article-feature:${post.slug}`}>{post.relatedFeature}</ButtonLink>
          </div>
        </header>

        <div className="article-body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
        </div>
      </article>

      <section className="section-shell split-section light-panel">
        <div>
          <p className="eyebrow">Checklist</p>
          <h2>Map your monitoring workflow before you choose software.</h2>
          <p>The checklist captures sources, jurisdictions, owners, review rules, escalation paths, and audit evidence requirements.</p>
        </div>
        <LeadForm mode="resource" />
      </section>

      <InternalLinks title="Related product pages" />
      <CTASection title="Want to apply this to your own sources and jurisdictions?" />
    </>
  );
}
