import { useState } from "react";
import { Link } from "react-router-dom";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const faqs = [
  {
    cat: "Booking",
    items: [
      { q: "Do I need an appointment?", a: "Appointments are strongly preferred — especially on Fridays and Saturdays. We do take walk-ins when a chair is open, but we can't guarantee availability. Booking online takes about two minutes." },
      { q: "How far in advance should I book?", a: "For weekday mornings, same-day or next-day is usually fine. For Saturday appointments, we recommend booking at least a week ahead. The Halsted Hour books out furthest." },
      { q: "Can I book for a specific barber?", a: "Yes. Each barber's calendar is separate in the booking system. If you have no preference, choose 'No preference' and you'll be matched with whoever is available." },
      { q: "What's your cancellation policy?", a: "We ask for 24 hours notice. For services over $70, a 20% deposit is required at booking — this is fully refundable up to 24 hours before your appointment." },
    ],
  },
  {
    cat: "Services",
    items: [
      { q: "What's included in a standard haircut?", a: "Every haircut includes a consultation, a shampoo, scissor or clipper cut (your choice), a hot towel finish, and product styling if you want it. No add-on fees." },
      { q: "How long does the Halsted Hour take?", a: "Ninety minutes. It includes a cut, a straight razor shave, a scalp massage, and an espresso. It's our slowest, most thorough service — plan accordingly." },
      { q: "Do you cut children's hair?", a: "We do the Father & Son service for kids accompanied by a parent. For children coming in alone, we'd ask that they be at least 14 and able to communicate clearly what they want." },
      { q: "Can I bring in a photo?", a: "Please do. Photos are the single best way to communicate what you're after. Even if we can't replicate it exactly, it gives us a clear direction." },
    ],
  },
  {
    cat: "The Shop",
    items: [
      { q: "Where do you park?", a: "Street parking on Halsted is free after 6pm and all day Sunday. There's a paid lot half a block south on 24th Street if you're coming at peak hours." },
      { q: "Is there a waiting area?", a: "Yes — a small one with leather seating. We'll offer you an espresso while you wait. If it's going to be more than ten minutes, we'll let you know when you arrive." },
      { q: "Do you take cards?", a: "Yes, cash and card both accepted. Tips can be added to the card or left in cash — either is appreciated, neither is expected." },
      { q: "Is the shop accessible?", a: "The front entrance has a step. We're working on a proper ramp. Call ahead and we'll make sure the side entrance is unlocked — it's step-free." },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState({});
  const toggle = (key) => setOpen(p => ({ ...p, [key]: !p[key] }));

  return (
    <div style={{ background: "#111010", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .fq-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }

        /* ── Header ── */
        .fq-header {
          padding: 8rem 0 4rem;
          border-bottom: 1px solid #2C2A27;
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          align-items: end;
        }

        .fq-label-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6A6460;
          margin-bottom: 6px;
        }

        .fq-label-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 300;
          color: #C9963A;
        }

        .fq-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.8rem);
          font-weight: 500;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #F0EBE1;
          margin: 0 0 1rem;
        }

        .fq-h1 em { font-style: italic; color: #C9963A; font-weight: 400; }

        .fq-header-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #7A7267;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Body ── */
        .fq-body {
          padding: 4rem 0 6rem;
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          align-items: start;
        }

        /* ── Category nav ── */
        .fq-cat-nav {
          position: sticky;
          top: 100px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .fq-cat-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #5A5450;
          background: none;
          border: none;
          padding: 10px 0;
          cursor: pointer;
          text-align: left;
          border-left: 2px solid transparent;
          padding-left: 14px;
          transition: all 0.2s;
        }

        .fq-cat-btn:hover   { color: #F0EBE1; border-left-color: #3A3733; }
        .fq-cat-btn.fq-cat-active { color: #C9963A; border-left-color: #C9963A; }

        /* ── Accordion ── */
        .fq-section {
          margin-bottom: 3rem;
        }

        .fq-cat-heading {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #4A443E;
          margin-bottom: 0;
          padding-bottom: 1rem;
          border-bottom: 1px solid #2C2A27;
        }

        .fq-item {
          border-bottom: 1px solid #1E1C19;
        }

        .fq-item-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 1.25rem 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
          text-align: left;
          transition: background 0.15s;
        }

        .fq-item-btn:hover { background: rgba(255,255,255,0.01); }

        .fq-q {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.05rem, 1.6vw, 1.25rem);
          font-weight: 500;
          color: #F0EBE1;
          line-height: 1.25;
          transition: color 0.2s;
        }

        .fq-item-btn:hover .fq-q { color: #C9963A; }

        .fq-icon {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 300;
          color: #C9963A;
          flex-shrink: 0;
          width: 20px;
          text-align: center;
          line-height: 1;
          transition: transform 0.3s ease;
        }

        .fq-icon.fq-open { transform: rotate(45deg); }

        .fq-answer-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
        }

        .fq-answer-wrap.fq-open { max-height: 300px; }

        .fq-a {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #7A7267;
          line-height: 1.8;
          padding-bottom: 1.5rem;
          padding-right: 3rem;
          margin: 0;
        }

        /* ── Still have questions ── */
        .fq-still {
          border-top: 1px solid #2C2A27;
          padding: 3.5rem 0 5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .fq-still-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 500;
          color: #F0EBE1;
          margin: 0;
          line-height: 1.15;
        }

        .fq-still-text em { font-style: italic; color: #C9963A; font-weight: 400; }

        .fq-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0E0D0B;
          background: #C9963A;
          padding: 13px 26px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .fq-btn:hover { background: #D4AB63; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .fq-inner  { padding: 0 2.5rem; }
          .fq-header { gap: 3rem; }
          .fq-body   { gap: 3rem; }
        }

        @media (max-width: 768px) {
          .fq-inner   { padding: 0 1.5rem; }
          .fq-header  { grid-template-columns: 1fr; gap: 1.5rem; padding: 6rem 0 3rem; }
          .fq-body    { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 0 4rem; }
          .fq-cat-nav { position: static; flex-direction: row; flex-wrap: wrap; gap: 6px; }
          .fq-cat-btn { border-left: none; border-bottom: 2px solid transparent; padding-left: 0; padding-bottom: 6px; }
          .fq-cat-btn.fq-cat-active { border-bottom-color: #C9963A; border-left: none; }
          .fq-still   { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 480px) {
          .fq-inner  { padding: 0 1.25rem; }
          .fq-header { padding: 5.5rem 0 2.5rem; }
          .fq-a      { padding-right: 0; }
        }
      `}</style>

      <div className="fq-inner">

        {/* ── Header ── */}
        <div className="fq-header">
          <div>
            <p className="fq-label-tag">FAQ</p>
            <p className="fq-label-num">— Common questions</p>
          </div>
          <div>
            <h1 className="fq-h1">
              Things people<br /><em>usually ask.</em>
            </h1>
            <p className="fq-header-sub">
              Most answers are short. If yours isn't here, call us.
            </p>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="fq-body">

          {/* Category nav */}
          <nav className="fq-cat-nav">
            {faqs.map(cat => (
              <button
                key={cat.cat}
                className={`fq-cat-btn${open[`cat-${cat.cat}`] !== false ? " fq-cat-active" : ""}`}
                onClick={() => document.getElementById(`fq-cat-${cat.cat}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
              >
                {cat.cat}
              </button>
            ))}
          </nav>

          {/* Accordion */}
          <div>
            {faqs.map(cat => (
              <div key={cat.cat} id={`fq-cat-${cat.cat}`} className="fq-section">
                <p className="fq-cat-heading">{cat.cat}</p>
                {cat.items.map((item, idx) => {
                  const key = `${cat.cat}-${idx}`;
                  const isOpen = !!open[key];
                  return (
                    <div key={key} className="fq-item">
                      <button className="fq-item-btn" onClick={() => toggle(key)}>
                        <span className="fq-q">{item.q}</span>
                        <span className={`fq-icon${isOpen ? " fq-open" : ""}`}>+</span>
                      </button>
                      <div className={`fq-answer-wrap${isOpen ? " fq-open" : ""}`}>
                        <p className="fq-a">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* ── Still have questions ── */}
        <div className="fq-still">
          <p className="fq-still-text">
            Still have a question?<br /><em>Just call us.</em>
          </p>
          <Link to="/contact" className="fq-btn">Get in Touch →</Link>
        </div>

      </div>
    </div>
  );
}