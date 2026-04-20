const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const hours = [
  { day: "Monday",    time: "9:00 — 20:00"  },
  { day: "Tuesday",   time: "9:00 — 20:00"  },
  { day: "Wednesday", time: "9:00 — 20:00"  },
  { day: "Thursday",  time: "9:00 — 20:00"  },
  { day: "Friday",    time: "9:00 — 21:00"  },
  { day: "Saturday",  time: "10:00 — 18:00" },
  { day: "Sunday",    time: "Closed", closed: true },
];

export default function Contact() {
  return (
    <section id="contact" style={{ background: "#111010", borderTop: "1px solid #2C2A27" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .ct-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 4rem 6rem;
        }

        .ct-header {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          margin-bottom: 4rem;
          align-items: start;
        }

        .ct-cols {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
        }

        .ct-col-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7A7267;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .ct-hours-row {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 0.75rem 0;
          border-bottom: 1px solid #2C2A27;
        }

        .ct-hours-row:last-child {
          border-bottom: none;
        }

        .ct-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #C9963A;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: opacity 0.2s;
        }

        .ct-link:hover { opacity: 0.75; }

        @media (max-width: 1024px) {
          .ct-inner  { padding: 4rem 2.5rem 5rem; }
          .ct-header { gap: 3rem; }
          .ct-cols   { gap: 2.5rem; }
        }

        @media (max-width: 768px) {
          .ct-inner  { padding: 3.5rem 1.5rem 4.5rem; }
          .ct-header { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }
          .ct-cols   { grid-template-columns: 1fr; gap: 3rem; }
        }

        @media (max-width: 480px) {
          .ct-inner { padding: 3rem 1.25rem 4rem; }
        }
      `}</style>

      <div className="ct-inner">

        {/* ── Header ── */}
        <div className="ct-header">
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
              Visit the Shop
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
              — No. 07 / Find us
            </span>
          </div>

          <div>
            <h2 style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.4rem, 4.5vw, 4.5rem)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#F0EBE1",
              margin: 0,
            }}>
              The door's<br />
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C9963A" }}>
                always
              </em>{" "}open.
            </h2>
          </div>
        </div>

        {/* ── Three columns ── */}
        <div className="ct-cols">

          {/* Address */}
          <div>
            <p className="ct-col-label">Address</p>
            <p style={{
              fontFamily: SERIF,
              fontSize: "2rem",
              fontWeight: 500,
              color: "#F0EBE1",
              lineHeight: 1.35,
              marginBottom: "1rem",
            }}>
              2418 W. Halsted Street<br />
              Chicago, IL 60608
            </p>
            <a href="#" className="ct-link">Get directions →</a>

            <p className="ct-col-label" style={{ marginTop: "3.5rem" }}>Get in Touch</p>
            <p style={{
              fontFamily: SANS,
              fontSize: "18px",
              fontWeight: 300,
              color: "#B8AFA0",
              lineHeight: 1.9,
              margin: 0,
            }}>
              (312) 555-0142<br />
              hello@halsted.co
            </p>
          </div>

          {/* Hours */}
          <div>
            <p className="ct-col-label">Hours</p>
            <div>
              {hours.map(h => (
                <div key={h.day} className="ct-hours-row">
                  <span style={{
                    fontFamily: SANS,
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#B8AFA0",
                    lineHeight: 1,
                  }}>
                    {h.day}
                  </span>
                  <span style={{
                    fontFamily: SANS,
                    fontSize: "16px",
                    fontWeight: 400,
                    color: h.closed ? "#4A443E" : "#F0EBE1",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <p className="ct-col-label">Notes</p>
            <p style={{
              fontFamily: SANS,
              fontSize: "16px",
              fontWeight: 300,
              color: "#7A7267",
              lineHeight: 1.85,
              marginBottom: "1.25rem",
            }}>
              Street parking on Halsted after 6pm and all day Sunday.
              The 8 bus stops two doors down. We have a small waiting
              room — feel free to arrive a few minutes early for a coffee.
            </p>
            <p style={{
              fontFamily: SANS,
              fontSize: "16px",
              fontWeight: 300,
              color: "#7A7267",
              lineHeight: 1.85,
              margin: 0,
            }}>
              We're a tip-friendly shop, but it's never expected.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}