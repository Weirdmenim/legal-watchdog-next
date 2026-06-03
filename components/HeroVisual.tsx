import { ProductMockup } from "@/components/ProductMockup";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Product preview showing regulatory monitoring workflow">
      <div className="visual-topbar">
        <span />
        <span />
        <span />
        <strong>Legal WatchDog workspace</strong>
      </div>
      <ProductMockup variant="overview" />
      <div className="hero-visual-strip" aria-label="Workflow status preview">
        <span>Sources checked</span>
        <span>AI summary ready</span>
        <span>Ticket assigned</span>
      </div>
    </div>
  );
}
