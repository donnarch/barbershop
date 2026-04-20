import { barbers } from "../data/barbers";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

export default function Barbers() {
  return (
    <section
      id="barbers"
      style={{ background: "#111010", borderTop: "1px solid #2C2A27" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .br-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 4rem 6rem;
        }

        .br-header {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          margin-bottom: 4.5rem;
          align-items: start;
        }

        .br-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .br-card {
          display: flex;
          flex-direction: column;
        }

        .br-img-wrap {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 420px;
          background: #1A1916;
        }

        .br-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.7s ease, transform 0.7s ease;
        }

        .br-card:hover .br-img-wrap img {
          filter: grayscale(0%);
          transform: scale(1.04);
        }

        .br-img-fade {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(to top, rgba(14,13,11,0.65) 0%, transparent 45%);
        }

        .br-gold-line {
          height: 1px;
          width: 0;
          background: #C9963A;
          transition: width 0.5s ease;
        }

        .br-card:hover .br-gold-line {
          width: 100%;
        }

        .br-info {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1rem;
          padding-bottom: 0.5rem;
        }

        @media (max-width: 1200px) {
          .br-img-wrap { height: 360px; }
        }

        @media (max-width: 1024px) {
          .br-inner   { padding: 4rem 2.5rem 5rem; }
          .br-header  { gap: 3rem; }
          .br-img-wrap { height: 300px; }
        }

        @media (max-width: 768px) {
          .br-inner   { padding: 3.5rem 1.5rem 4.5rem; }
          .br-header  { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem; }
          .br-grid    { grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
          .br-img-wrap { height: 260px; }
        }

        @media (max-width: 480px) {
          .br-inner   { padding: 3rem 1.25rem 4rem; }
          .br-grid    { grid-template-columns: 1fr; }
          .br-img-wrap { height: 300px; }
        }
      `}</style>

      <div className="br-inner">

        {/* ── Section header ── */}
        <div className="br-header">
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{
              fontFamily: SANS,
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#6A6460",
              lineHeight: 1.3,
            }}>
              Our Barbers
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
              — No. 03 / The hands
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
              The people who'll
              <br />
              be holding the{" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C9963A" }}>
                scissors.
              </em>
            </h2>
          </div>
        </div>

        {/* ── Barber cards ── */}
        <div className="br-grid">
          {barbers.map((b) => (
            <div key={b.id} className="br-card">

              <div className="br-img-wrap">
                <img src={b.image} alt={b.name} />
                <div className="br-img-fade" />
              </div>

              <div className="br-gold-line" />

              <div className="br-info">
                <div>
                  <h3 style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(1.2rem, 1.8vw, 1.5rem)",
                    fontWeight: 500,
                    color: "#F0EBE1",
                    lineHeight: 1.15,
                    letterSpacing: "0",
                    margin: 0,
                  }}>
                    {b.name}
                  </h3>
                  <p style={{
                    fontFamily: SERIF,
                    fontSize: "14px",
                    fontStyle: "italic",
                    fontWeight: 300,
                    color: "#C9963A",
                    marginTop: "5px",
                    marginBottom: 0,
                    letterSpacing: "0.01em",
                    lineHeight: 1.4,
                  }}>
                    {b.role}
                  </p>
                </div>

                <span style={{
                  fontFamily: SANS,
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "0.08em",
                  color: "#3A3632",
                  marginTop: "4px",
                  flexShrink: 0,
                }}>
                  {b.num}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}