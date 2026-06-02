import { features } from "@/data/site";

export function FeatureGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? features.slice(0, limit) : features;
  return (
    <div className="card-grid three">
      {items.map((feature, index) => (
        <article className="info-card" key={feature.title}>
          <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      ))}
    </div>
  );
}
