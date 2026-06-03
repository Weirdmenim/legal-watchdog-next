import Link from "next/link";
import type { ResourcePost } from "@/data/site";

export function ArticleCard({ post }: { post: ResourcePost }) {
  return (
    <article className="resource-card">
      <p className="mini-label">{post.category} • 5 min read</p>
      <h2><Link href={`/resources/${post.slug}`}>{post.title}</Link></h2>
      <p>{post.summary}</p>
      <p className="article-audience">For {post.audience}.</p>
      <div className="resource-actions">
        <Link href={`/resources/${post.slug}`} data-track={`article:${post.slug}`}>Read guide</Link>
        <Link href={post.relatedFeatureHref}>Related feature</Link>
      </div>
    </article>
  );
}
