import { useState } from "react";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const sitemap = ["Services", "Barbers", "Booking", "Journal", "Visit"];
const hrefs   = ["#services", "#barbers", "#booking", "#gallery", "#contact"];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subbed, setSubbed] = useState(false);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const subscribe = (e) => {
    e.preventDefault();
    if (email.trim()) { setSubbed(true); setEmail(""); }
  };

  return (
    <footer style={{ background: "#0E0D0B", borderTop: "1px solid #2C2A27" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ft-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4.5rem 4rem 3rem;
        }

        .ft-cols {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1.4fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .ft-col-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #7A7267;
          margin-bottom: 1.25rem;
          line-height: 1.3;
        }

        .ft-nav {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .ft-nav a {
          font-family: 'DM Sans', sans-serif;
          font-size: 18px;
          font-weight: 400;
          color: #B8AFA0;
          text-decoration: none;
          letter-spacing: 0.01em;
          transition: color 0.2s;
          line-height: 1;
        }

        .ft-nav a:hover { color: #F0EBE1; }

        .ft-email-form {
          display: flex;
          align-items: flex-end;
          gap: 0.75rem;
          border-bottom: 1px solid #2C2A27;
          padding-bottom: 6px;
        }

        .ft-email-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 400;
          color: #F0EBE1;
          letter-spacing: 0.01em;
          padding: 0;
        }

        .ft-email-input::placeholder { color: #4A443E; }

        .ft-sub-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #C9963A;
          background: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          padding: 0;
          transition: color 0.2s;
          line-height: 1;
        }

        .ft-sub-btn:hover { color: #D4AB63; }

        .ft-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding-top: 1.5rem;
          border-top: 1px solid #2C2A27;
          flex-wrap: wrap;
        }

        .ft-legal-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 19px;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: #4A443E;
          text-decoration: none;
          transition: color 0.2s;
        }

        .ft-legal-link:hover { color: #7A7267; }

        @media (max-width: 1024px) {
          .ft-inner { padding: 4rem 2.5rem 2.5rem; }
          .ft-cols  { gap: 2.5rem; }
        }

        @media (max-width: 768px) {
          .ft-inner { padding: 3.5rem 1.5rem 2rem; }
          .ft-cols  { grid-template-columns: 1fr 1fr; gap: 2.5rem 2rem; }
        }

        @media (max-width: 480px) {
          .ft-inner { padding: 3rem 1.25rem 2rem; }
          .ft-cols  { grid-template-columns: 1fr; gap: 2.5rem; }
        }
      `}</style>

      <div className="ft-inner">
        <div className="ft-cols">

          {/* ── Brand ── */}
          <div>
            <h2 style={{
              fontFamily: SERIF,
              fontSize: "clamp(2rem, 3vw, 2.8rem)",
              fontWeight: 500,
              lineHeight: 1.0,
              color: "#F0EBE1",
              marginBottom: "6px",
            }}>
              Halsted{" "}
              <em style={{ fontStyle: "italic", color: "#C9963A" }}>
                &amp; Sons
              </em>
            </h2>
            <p style={{
              fontFamily: SERIF,
              fontSize: "19px",
              fontStyle: "italic",
              fontWeight: 300,
              color: "#7A7267",
              lineHeight: 1.4,
              marginBottom: "2rem",
            }}>
              — since MMXII
            </p>
            <p style={{
              fontFamily: SANS,
              fontSize: "19px",
              fontWeight: 300,
              color: "#4A443E",
              lineHeight: 1.75,
              maxWidth: "22rem",
              margin: 0,
            }}>
              A proper barbershop on Halsted Street.
              Walk-ins welcome, appointments preferred.
            </p>
          </div>

          {/* ── Sitemap ── */}
          <div>
            <p className="ft-col-label">Sitemap</p>
            <nav>
              <ul className="ft-nav">
                {sitemap.map((s, i) => (
                  <li key={s}>
                    <a href={hrefs[i]} onClick={(e) => go(e, hrefs[i])}>
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Newsletter ── */}
          <div>
            <p className="ft-col-label">Newsletter</p>
            <p style={{
              fontFamily: SANS,
              fontSize: "19px",
              fontWeight: 300,
              color: "#7A7267",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
            }}>
              Six emails a year, no more. Shop news, the occasional photo.
            </p>

            {subbed ? (
              <p style={{
                fontFamily: SERIF,
                fontSize: "19px",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#C9963A",
                lineHeight: 1.4,
              }}>
                You're on the list.
              </p>
            ) : (
              <form onSubmit={subscribe} className="ft-email-form">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ft-email-input"
                />
                <button type="submit" className="ft-sub-btn">
                  Subscribe →
                </button>
              </form>
            )}
          </div>

        </div>

        {/* ── Bottom bar ── */}
        <div className="ft-bottom">
          <p style={{
            fontFamily: SANS,
            fontSize: "15px",
            fontWeight: 400,
            letterSpacing: "0.06em",
            color: "#4A443E",
            margin: 0,
          }}>
            © {new Date().getFullYear()} Halsted &amp; Sons. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy", "Terms"].map((l) => (
              <a key={l} href="#" className="ft-legal-link">{l}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}