import { Link } from "react-router-dom";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const timeline = [
  { year: "2012", title: "The First Chair", desc: "David Halsted opens on a rainy Tuesday in October with two chairs, one mirror, and a borrowed espresso machine." },
  { year: "2015", title: "Second Chair Added", desc: "Tomás Reyes joins as senior stylist. The waiting room gets its first leather bench — still there today." },
  { year: "2017", title: "The Shave Program", desc: "Walter Brandt brings his straight-razor expertise. The Hot Lather Shave becomes the most requested service." },
  { year: "2019", title: "Chair No. 3, Restored", desc: "A 1962 Koken barber chair, found in a Milwaukee estate sale, is restored and takes its place by the window." },
  { year: "2021", title: "Father & Son Service", desc: "Inspired by regulars bringing their kids, we formalize the Father & Son appointment — complete with a small keepsake." },
  { year: "2024", title: "Still Here", desc: "Six chairs. The same espresso machine. Forty-seven thousand cuts and counting." },
];

const values = [
  { num: "01", title: "Slow down", desc: "Every visit starts with a conversation. We don't pick up the clippers until we understand what you actually want." },
  { num: "02", title: "No trends", desc: "We cut what suits you, not what's on Instagram. A good haircut should look right in six weeks, not just six hours." },
  { num: "03", title: "Know the trade", desc: "Every barber here has at least a decade behind the chair. We don't hire stylists looking for a stepping stone." },
  { num: "04", title: "The details matter", desc: "Hot towel. Straight razor on the neck. Beard oil after. These aren't upsells — they're just how the job gets done." },
];

export default function AboutPage() {
  return (
    <div style={{ background: "#111010", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ab-wrap { background: #111010; }

        /* ── Hero ── */
        .ab-hero {
          position: relative;
          height: 70vh;
          min-height: 480px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }

        .ab-hero img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: brightness(0.55);
        }

        .ab-hero-grad {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(14,13,11,0.98) 0%, rgba(14,13,11,0.3) 60%, transparent 100%);
        }

        .ab-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem 4rem;
          width: 100%;
        }

        .ab-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #C9963A;
          margin-bottom: 1rem;
        }

        .ab-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 500;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #F0EBE1;
          margin: 0;
        }

        .ab-h1 em { font-style: italic; color: #C9963A; font-weight: 400; }

        /* ── Sections ── */
        .ab-section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 4rem;
          border-top: 1px solid #2C2A27;
        }

        .ab-two-col {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          align-items: start;
        }

        .ab-section-label {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ab-label-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: "#6A6460";
          line-height: 1.3;
        }

        .ab-label-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 300;
          color: #C9963A;
          line-height: 1.4;
        }

        /* ── Intro text ── */
        .ab-intro-body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem 5rem;
        }

        .ab-intro-h2 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2rem, 3.5vw, 3.2rem);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: #F0EBE1;
          margin: 0 0 2rem;
          grid-column: 1 / -1;
        }

        .ab-intro-h2 em { font-style: italic; color: #C9963A; font-weight: 400; }

        .ab-body-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: "#7A7267";
          margin: 0;
        }

        /* ── Timeline ── */
        .ab-timeline {
          position: relative;
          padding-left: 2rem;
          border-left: 1px solid #2C2A27;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .ab-tl-item {
          display: grid;
          grid-template-columns: 5rem 1fr;
          gap: 2rem;
          padding: 2rem 0;
          border-bottom: 1px solid #1E1C19;
          position: relative;
        }

        .ab-tl-item:last-child { border-bottom: none; }

        .ab-tl-item::before {
          content: '';
          position: absolute;
          left: -2.35rem;
          top: 2.4rem;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2C2A27;
          border: 1px solid #4A443E;
        }

        .ab-tl-year {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 500;
          color: #C9963A;
          line-height: 1.2;
        }

        .ab-tl-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #F0EBE1;
          margin: 0 0 6px;
          line-height: 1.2;
        }

        .ab-tl-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #7A7267;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Values ── */
        .ab-values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          border: 1px solid #2C2A27;
        }

        .ab-value-card {
          padding: 2.5rem;
          border-right: 1px solid #2C2A27;
          border-bottom: 1px solid #2C2A27;
          transition: background 0.2s;
        }

        .ab-value-card:nth-child(2n) { border-right: none; }
        .ab-value-card:nth-child(3),
        .ab-value-card:nth-child(4)  { border-bottom: none; }
        .ab-value-card:hover { background: #1A1916; }

        .ab-value-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: #C9963A;
          margin-bottom: 1rem;
        }

        .ab-value-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.3rem, 2vw, 1.7rem);
          font-weight: 500;
          color: #F0EBE1;
          margin: 0 0 0.75rem;
          line-height: 1.15;
        }

        .ab-value-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #7A7267;
          line-height: 1.75;
          margin: 0;
        }

        /* ── CTA strip ── */
        .ab-cta-strip {
          border-top: 1px solid #2C2A27;
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .ab-cta-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.5rem, 2.8vw, 2.4rem);
          font-weight: 500;
          color: #F0EBE1;
          line-height: 1.1;
          margin: 0;
        }

        .ab-cta-text em { font-style: italic; color: #C9963A; font-weight: 400; }

        .ab-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0E0D0B;
          background: #C9963A;
          padding: 14px 28px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .ab-btn:hover { background: #D4AB63; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ab-hero-content { padding: 0 2.5rem 3.5rem; }
          .ab-section       { padding: 4rem 2.5rem; }
          .ab-two-col       { gap: 3rem; }
          .ab-cta-strip     { padding: 3rem 2.5rem; }
        }

        @media (max-width: 768px) {
          .ab-hero-content  { padding: 0 1.5rem 3rem; }
          .ab-section       { padding: 3.5rem 1.5rem; }
          .ab-two-col       { grid-template-columns: 1fr; gap: 2rem; }
          .ab-intro-body    { grid-template-columns: 1fr; gap: 1.5rem; }
          .ab-intro-h2      { grid-column: 1; }
          .ab-values-grid   { grid-template-columns: 1fr; }
          .ab-value-card    { border-right: none !important; }
          .ab-value-card:nth-child(3) { border-bottom: 1px solid #2C2A27; }
          .ab-cta-strip     { padding: 3rem 1.5rem; flex-direction: column; align-items: flex-start; }
          .ab-tl-item       { grid-template-columns: 4rem 1fr; gap: 1rem; }
        }

        @media (max-width: 480px) {
          .ab-hero-content { padding: 0 1.25rem 2.5rem; }
          .ab-section      { padding: 3rem 1.25rem; }
          .ab-cta-strip    { padding: 2.5rem 1.25rem; }
        }
      `}</style>

      {/* ── Hero ── */}
      <div className="ab-hero">
        <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1800&q=85&fit=crop" alt="Inside Halsted & Sons" />
        <div className="ab-hero-grad" />
        <div className="ab-hero-content">
          <p className="ab-eyebrow">About Us</p>
          <h1 className="ab-h1">
            Twelve years,<br />
            one <em>quiet room.</em>
          </h1>
        </div>
      </div>

      {/* ── Intro ── */}
      <div className="ab-section">
        <div className="ab-two-col">
          <div className="ab-section-label">
            <span className="ab-label-tag" style={{ color: "#6A6460" }}>Our Story</span>
            <span className="ab-label-num">— No. 01 / The beginning</span>
          </div>
          <div className="ab-intro-body">
            <h2 className="ab-intro-h2">
              We aren't in the business<br />of trends. We're here to give<br />
              you a cut you'll <em>still like</em> in six weeks.
            </h2>
            <p className="ab-body-text" style={{ color: "#7A7267" }}>
              Halsted & Sons opened on a rainy Tuesday in October 2012 with two chairs,
              one mirror, and a borrowed espresso machine. David Halsted had spent eight
              years cutting hair in a shop on Milwaukee Avenue that closed when the landlord
              sold the building. He wanted something simpler — a place with no music too loud,
              no upsells, no rush.
            </p>
            <p className="ab-body-text" style={{ color: "#7A7267" }}>
              Today there are six chairs and the same espresso machine. The clientele runs
              from eighteen to eighty. We still don't take walk-in digital check-ins or use
              appointment apps with gamified loyalty points. You call or you book online,
              you come in, you get a good haircut. That's the whole idea.
            </p>
          </div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="ab-section">
        <div className="ab-two-col">
          <div className="ab-section-label">
            <span className="ab-label-tag" style={{ color: "#6A6460" }}>History</span>
            <span className="ab-label-num">— No. 02 / The years</span>
          </div>
          <div className="ab-timeline">
            {timeline.map(t => (
              <div key={t.year} className="ab-tl-item">
                <span className="ab-tl-year">{t.year}</span>
                <div>
                  <p className="ab-tl-title">{t.title}</p>
                  <p className="ab-tl-desc">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Values ── */}
      <div className="ab-section">
        <div className="ab-two-col">
          <div className="ab-section-label">
            <span className="ab-label-tag" style={{ color: "#6A6460" }}>How We Work</span>
            <span className="ab-label-num">— No. 03 / The way</span>
          </div>
          <div className="ab-values-grid">
            {values.map(v => (
              <div key={v.num} className="ab-value-card">
                <p className="ab-value-num">{v.num}</p>
                <h3 className="ab-value-title">{v.title}</h3>
                <p className="ab-value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA strip ── */}
      <div className="ab-cta-strip">
        <p className="ab-cta-text">
          Ready to find your<br /><em>regular chair?</em>
        </p>
        <Link to="/Booking" className="ab-btn">Reserve a Chair →</Link>
      </div>
    </div>
  );
}