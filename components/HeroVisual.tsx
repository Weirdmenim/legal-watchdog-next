export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Dashboard preview showing regulatory updates, AI summary, and response ticket">
      <div className="visual-topbar">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-grid">
        <div className="visual-card wide">
          <div className="mini-label">Detected change</div>
          <h3>FDA guidance update found</h3>
          <p>Source revised guidance language for sterilization process documentation.</p>
          <div className="diff-line removed">- Previous wording removed</div>
          <div className="diff-line added">+ New process requirement added</div>
        </div>
        <div className="visual-card">
          <div className="mini-label">AI summary</div>
          <p>The change may affect internal review steps. Human compliance review recommended.</p>
          <span className="confidence">Confidence: High</span>
        </div>
        <div className="visual-card">
          <div className="mini-label">Ticket</div>
          <h3>Owner assigned</h3>
          <p>David • Due in 48 hours • Legal specialist invited</p>
        </div>
      </div>
    </div>
  );
}
