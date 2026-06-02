import Link from "next/link";
import type { ResourcePost } from "@/data/site";

export function ArticleCard({ post }: { post: ResourcePost }) {
  return (
    <article className="resource-card">
      <p className="mini-label">{post.category}</p>
      <h2><Link href={`/resources/${post.slug}`}>{post.title}</Link></h2>
      <p>{post.summary}</p>
      <dl>
        <div><dt>Target keyword</dt><dd>{post.keyword}</dd></div>
        <div><dt>Search intent</dt><dd>{post.intent}</dd></div>
      </dl>
      <div className="resource-actions">
        <Link href={`/resources/${post.slug}`} data-track={`article:${post.slug}`}>Read guide</Link>
        <Link href={post.relatedFeatureHref}>Related feature</Link>
      </div>
    </article>
  );
}
