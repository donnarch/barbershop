import { testimonials } from '../data/testimonials';

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "#111010", borderTop: "1px solid #2C2A27" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .tm-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 4rem 6rem;
        }

        .tm-header {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          margin-bottom: 4rem;
          align-items: start;
        }

        .tm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid #2C2A27;
        }

        .tm-card {
          padding: 2.75rem 2.5rem;
          border-right: 1px solid #2C2A27;
          display: flex;
          flex-direction: column;
          transition: background 0.2s ease;
        }

        .tm-card:last-child {
          border-right: none;
        }

        .tm-card:hover {
          background: #1A1916;
        }

        .tm-quote {
          flex: 1;
          margin-bottom: 2.5rem;
        }

        .tm-divider {
          height: 1px;
          background: #2C2A27;
          margin-bottom: 1.5rem;
          border: none;
        }

        @media (max-width: 1024px) {
          .tm-inner  { padding: 4rem 2.5rem 5rem; }
          .tm-header { gap: 3rem; }
          .tm-card   { padding: 2.25rem 2rem; }
        }

        @media (max-width: 768px) {
          .tm-inner  { padding: 3.5rem 1.5rem 4.5rem; }
          .tm-header { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }
          .tm-grid   { grid-template-columns: 1fr; }
          .tm-card   { border-right: none; border-bottom: 1px solid #2C2A27; padding: 2rem 1.5rem; }
          .tm-card:last-child { border-bottom: none; }
        }

        @media (max-width: 480px) {
          .tm-inner { padding: 3rem 1.25rem 4rem; }
        }
      `}</style>

      <div className="tm-inner">

        {/* ── Header ── */}
        <div className="tm-header">
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{
              fontFamily: SANS,
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#7A7267",
              lineHeight: 1.3,
            }}>
              Things People Have Said
            </span>
            <span style={{
              fontFamily: SERIF,
              fontSize: "15px",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#C9963A",
              letterSpacing: "0.01em",
              lineHeight: 1.4,
            }}>
              — No. 06 / Word of mouth
            </span>
          </div>

          <div>
            <h2 style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.4rem, 4.2vw, 4.2rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#F0EBE1",
              margin: 0,
            }}>
              Heard it from{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C9963A" }}>
                the chair.
              </em>
            </h2>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="tm-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="tm-card">

              {/* Quote mark */}
              <p style={{
                fontFamily: SERIF,
                fontSize: "3rem",
                fontWeight: 400,
                color: "#C9963A",
                lineHeight: 1,
                marginBottom: "1rem",
                marginTop: "-0.25rem",
              }}>
                "
              </p>

              {/* Quote body */}
              <div className="tm-quote">
                <blockquote style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(1.2rem, 1.9vw, 1.55rem)",
                  fontStyle: "italic",
                  fontWeight: 400,
                  lineHeight: 1.45,
                  color: "#F0EBE1",
                  margin: 0,
                }}>
                  {t.quote}
                </blockquote>
              </div>

              {/* Divider */}
              <hr className="tm-divider" />

              {/* Name */}
              <p style={{
                fontFamily: SERIF,
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "#F0EBE1",
                lineHeight: 1.2,
                marginBottom: "6px",
              }}>
                {t.name}
              </p>

              {/* Sub */}
              <p style={{
                fontFamily: SANS,
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#7A7267",
                lineHeight: 1.4,
                margin: 0,
              }}>
                {t.sub}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}