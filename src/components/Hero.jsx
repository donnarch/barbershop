const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const TICKER = [
  "Since 2012", "✦", "West Halsted Street", "✦", "Chicago, Illinois", "✦",
  "Coffee on the House", "✦", "Cash & Card Accepted", "✦",
  "Since 2012", "✦", "West Halsted Street", "✦", "Chicago, Illinois", "✦",
  "Coffee on the House", "✦", "Cash & Card Accepted", "✦",
];

const stats = [
  { label: "Since",         value: "2012"    },
  { label: "Master Barbers", value: "Six"     },
  { label: "Cuts to Date",  value: "47,300+" },
  { label: "Wait, Today",   value: "12 min"  },
];

export default function Hero() {
  const go = (href) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" style={{ position: "relative", minHeight: "100svh", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Background ── */
        .hr-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hr-bg img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          filter: brightness(0.72);
        }

        .hr-bg-grad-1 {
          position: absolute;
          inset: 0;
          background: linear-gradient(100deg, rgba(14,13,11,0.93) 0%, rgba(14,13,11,0.62) 50%, rgba(14,13,11,0.28) 100%);
        }

        .hr-bg-grad-2 {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(14,13,11,0.45) 0%, transparent 28%, transparent 55%, rgba(14,13,11,0.97) 100%);
        }

        /* ── Info bar ── */
        .hr-infobar {
          position: relative;
          z-index: 10;
          margin-top: 76px;
          border-bottom: 1px solid rgba(44,42,39,0.55);
        }

        .hr-infobar-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 14px 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .hr-infobar-item {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #6A6460;
          line-height: 1.3;
        }

        /* ── Main content ── */
        .hr-main {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          align-items: center;
        }

        .hr-main-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 4rem;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: end;
        }

        /* ── Headline ── */
        .hr-eyebrow {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.1rem;
          font-style: italic;
          font-weight: 300;
          color: #C9963A;
          margin-bottom: 1.5rem;
          letter-spacing: 0.01em;
          line-height: 1.3;
        }

        .hr-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(4rem, 8vw, 7.5rem);
          font-weight: 500;
          line-height: 0.95;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .hr-h1-line1 {
          display: block;
          color: #F0EBE1;
        }

        .hr-h1-em {
          font-style: italic;
          font-weight: 400;
          color: #C9963A;
        }

        .hr-h1-plain {
          font-style: normal;
          font-weight: 500;
          color: #F0EBE1;
        }

        /* ── Right col ── */
        .hr-right {
          padding-bottom: 8px;
        }

        .hr-body {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(14px, 1.4vw, 17px);
          font-weight: 300;
          line-height: 1.7;
          color: #9A9088;
          margin-bottom: 2.5rem;
          max-width: 360px;
          letter-spacing: 0.01em;
        }

        .hr-ctas {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .hr-btn-primary {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #0E0D0B;
          background: #C9963A;
          padding: 15px 30px;
          border: none;
          cursor: pointer;
          line-height: 1;
          white-space: nowrap;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .hr-btn-primary:hover  { background: #D4AB63; }
        .hr-btn-primary:active { transform: scale(0.98); }

        .hr-btn-secondary {
          width: 46px;
          height: 46px;
          border: 1px solid #3A3733;
          background: transparent;
          color: #7A7267;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 16px;
          flex-shrink: 0;
          transition: border-color 0.2s, color 0.2s;
        }

        .hr-btn-secondary:hover { border-color: #C9963A; color: #C9963A; }

        /* ── Stats bar ── */
        .hr-stats {
          position: relative;
          z-index: 10;
          border-top: 1px solid rgba(44,42,39,0.55);
        }

        .hr-stats-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .hr-stat {
          padding: 20px 0;
          display: flex;
          align-items: baseline;
          gap: 12px;
        }

        .hr-stat:not(:last-child) {
          border-right: 1px solid rgba(44,42,39,0.5);
          padding-right: clamp(16px, 2.5vw, 44px);
        }

        .hr-stat:not(:first-child) {
          padding-left: clamp(16px, 2.5vw, 44px);
        }

        .hr-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6A6460;
          line-height: 1;
          white-space: nowrap;
        }

        .hr-stat-value {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 2.8vw, 2.4rem);
          font-weight: 300;
          letter-spacing: -0.01em;
          color: #F0EBE1;
          line-height: 1;
        }

        /* ── Ticker ── */
        .hr-ticker {
          position: relative;
          z-index: 10;
          overflow: hidden;
          border-top: 1px solid rgba(44,42,39,0.55);
          padding: 12px 0;
          background: rgba(14,13,11,0.6);
        }

        .hr-ticker-track {
          display: flex;
          gap: 3rem;
          width: max-content;
          animation: hr-ticker-scroll 30s linear infinite;
        }

        .hr-ticker-track:hover { animation-play-state: paused; }

        @keyframes hr-ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .hr-ticker-item {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #6A6460;
          line-height: 1;
          white-space: nowrap;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hr-infobar-inner { padding: 12px 2.5rem; }
          .hr-main-inner    { padding: 4rem 2.5rem; gap: 3rem; }
          .hr-stats-inner   { padding: 0 2.5rem; }
        }

        @media (max-width: 768px) {
          .hr-infobar       { display: none; }
          .hr-main-inner    {
            padding: 3rem 1.5rem 2.5rem;
            grid-template-columns: 1fr;
            gap: 2.5rem;
            align-items: start;
            padding-top: 6rem;
          }
          .hr-body          { max-width: 100%; font-size: 15px; }
          .hr-stats-inner   { grid-template-columns: repeat(2, 1fr); padding: 0 1.5rem; }
          .hr-stat:nth-child(2) { border-right: none; }
          .hr-stat:nth-child(3) { padding-left: 0; border-right: 1px solid rgba(44,42,39,0.5); }
          .hr-stat:nth-child(3), .hr-stat:nth-child(4) { border-top: 1px solid rgba(44,42,39,0.5); }
        }

        @media (max-width: 480px) {
          .hr-main-inner  { padding: 2.5rem 1.25rem 2rem; padding-top: 5.5rem; }
          .hr-stats-inner { padding: 0 1.25rem; }
          .hr-stats-inner { grid-template-columns: 1fr 1fr; }
          .hr-btn-primary { padding: 14px 24px; }
        }
      `}</style>

      {/* ── Background ── */}
      <div className="hr-bg">
        <img
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=85&fit=crop"
          alt=""
        />
        <div className="hr-bg-grad-1" />
        <div className="hr-bg-grad-2" />
      </div>

      {/* ── Info bar ── */}
      <div className="hr-infobar">
        <div className="hr-infobar-inner">
          {["Chicago, IL · 41.8781° N", "Open Today · 9:00 — 20:00", "Est. MMXII"].map(text => (
            <span key={text} className="hr-infobar-item">{text}</span>
          ))}
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="hr-main">
        <div className="hr-main-inner">

          {/* Left: headline */}
          <div>
            <p className="hr-eyebrow">— A neighborhood barbershop</p>
            <h1 className="hr-h1">
              <span className="hr-h1-line1">The art of</span>
              <span>
                <em className="hr-h1-em">looking</em>
                <span className="hr-h1-plain"> sharp.</span>
              </span>
            </h1>
          </div>

          {/* Right: body + CTA */}
          <div className="hr-right">
            <p className="hr-body">
              Three generations of barbers. One quiet room on West Halsted
              Street. Honest cuts, hot lather shaves, and a strong cup of
              coffee while you wait.
            </p>
            <div className="hr-ctas">
              <button className="hr-btn-primary" onClick={() => go("#booking")}>
                Book Your Visit
              </button>
              <button className="hr-btn-secondary" onClick={() => go("#services")}>
                ↘
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="hr-stats">
        <div className="hr-stats-inner">
          {stats.map((s, i) => (
            <div key={s.label} className="hr-stat">
              <span className="hr-stat-label">{s.label}</span>
              <span className="hr-stat-value">{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Ticker ── */}
      <div className="hr-ticker">
        <div className="hr-ticker-track">
          {TICKER.map((item, i) => (
            <span key={i} className="hr-ticker-item">{item}</span>
          ))}
        </div>
      </div>

    </section>
  );
}