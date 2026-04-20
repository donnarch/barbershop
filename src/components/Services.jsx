import { services } from "../data/services";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";

export default function Services() {
  return (
    <section
      id="services"
      style={{ background: "#111010", borderTop: "1px solid #2C2A27" }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500;550;600&display=swap');

        .service-row {
          display: grid;
          grid-template-columns: 2rem 1fr 1fr 5rem 5rem;
          align-items: baseline;
          gap: 2.5rem;
          padding: 2.5rem 0;
          border-bottom: 1px solid #2C2A27;
          transition: background 0.3s ease;
          cursor: default;
        }

        .service-row:hover {
          background: #1A1916;
        }

        .service-row:hover .service-title {
          color: #C9963A !important;
        }

        .service-row:hover .service-price {
          color: #D4AB63 !important;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .service-row {
            grid-template-columns: 2rem 1fr 1fr 4rem 4rem;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 2rem 1fr auto;
            gap: 1rem;
            padding: 1.75rem 0;
            align-items: start;
          }
          .service-desc {
            display: none;
          }
          .service-dur {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .services-inner {
            padding-left: 1.25rem !important;
            padding-right: 1.25rem !important;
          }
          .services-header {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding-top: 3rem !important;
            padding-bottom: 2.5rem !important;
          }
        }
      `}</style>

      <div
        className="services-inner"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 4rem",
        }}
      >
        {/* Section header */}
        <div
          className="services-header"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 3fr",
            gap: "5rem",
            paddingTop: "5rem",
            paddingBottom: "4rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: SANS,
                fontSize: "11px",
                fontWeight: 550,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#7A7267",
                marginBottom: "8px",
                lineHeight: 1.3,
              }}
            >
              Services & Pricing
            </p>
            <p
              style={{
                fontFamily: SERIF,
                fontSize: "15px",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#C9963A",
                lineHeight: 1.4,
              }}
            >
              — No. 02 / The menu
            </p>
          </div>

          <div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)",
                fontWeight: 520,
                lineHeight: 1.0,
                color: "#F0EBE1",
              }}
            >
              Six things,
              <br />
              done{" "}
              <em style={{ fontStyle: "italic", color: "#C9963A" }}>
                properly.
              </em>
            </h2>
          </div>
        </div>

        {/* Service rows */}
        <div style={{ borderTop: "1px solid #2C2A27" }}>
          {services.map((s) => (
            <div key={s.id} className="service-row">
              {/* Number */}
              <span
                style={{
                  fontFamily: SANS,
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#C9963A",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </span>

              {/* Title */}
              <span
                className="service-title"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)",
                  fontWeight: 550,
                  lineHeight: 1.15,
                  color: "#F0EBE1",
                  transition: "color 0.3s ease",
                }}
              >
                {s.title}
              </span>

              {/* Description */}
              <span
                className="service-desc"
                style={{
                  fontFamily: SANS,
                  fontSize: "14px",
                  fontWeight: 380,
                  lineHeight: 1.65,
                  color: "#8A8278",
                  letterSpacing: "0.01em",
                }}
              >
                {s.desc}
              </span>

              {/* Duration */}
              <span
                className="service-dur"
                style={{
                  display: "block",
                  fontFamily: SANS,
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#4A443E",
                  textAlign: "center",
                }}
              >
                {s.duration}
              </span>

              {/* Price */}
              <span
                className="service-price"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                  fontWeight: 600,
                  color: "#C9963A",
                  textAlign: "right",
                  transition: "color 0.3s ease",
                }}
              >
                {s.price}
              </span>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p
          style={{
            fontFamily: SANS,
            fontSize: "12px",
            fontWeight: 350,
            lineHeight: 1.7,
            color: "#4A443E",
            maxWidth: "28rem",
            paddingTop: "2rem",
            paddingBottom: "3rem",
            letterSpacing: "0.01em",
          }}
        >
          Prices include tax. A 20% deposit is required for bookings over $70
          and is fully refundable up to 24 hours before your appointment.
        </p>
      </div>
    </section>
  );
}
