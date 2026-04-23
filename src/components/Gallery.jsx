const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS = "'DM Sans', system-ui, sans-serif";

const photos = [
  {
    id: 1,
    src: "/public/nathon-oski-EW_rqoSdDes-unsplash (1).jpg",
    label: "A skin fade in progress",
    date: "Mar '24",
  },
  {
    id: 2,
    src: "/public/andre-reis-1_DAlXy0wng-unsplash.jpg",
    label: "Tools of the trade",
    date: "Feb '24",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=700&h=800&fit=crop",
    label: "Chair No. 3, restored 2019",
    date: "Jan '24",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=700&h=800&fit=crop",
    label: "The morning light",
    date: "Dec '23",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=700&h=800&fit=crop",
    label: "Clean edges",
    date: "Nov '23",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=700&h=800&fit=crop",
    label: "Hot lather, ready",
    date: "Oct '23",
  },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      style={{ background: "#111010", borderTop: "1px solid #2C2A27" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        .gl-inner {
        cursor-pointer;
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 4rem 6rem;
        }

        .gl-header {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          margin-bottom: 4rem;
          align-items: start;
        }

        .gl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .gl-item {
          display: flex;
          flex-direction: column;
          background: #1A1916;
          overflow: hidden;
        }

        .gl-img-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          display: block;
        }

        .gl-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(100%);
          transition: filter 0.7s ease, transform 0.7s ease;
        }

        .gl-item:hover .gl-img-wrap img {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        .gl-caption {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 1rem;
          padding: 12px 0 4px;
        }

        @media (max-width: 1024px) {
          .gl-inner  { padding: 4rem 2.5rem 5rem; }
          .gl-header { gap: 3rem; }
        }

        @media (max-width: 768px) {
          .gl-inner  { padding: 3.5rem 1.5rem 4.5rem; }
          .gl-header { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 2.5rem; }
          .gl-grid   { grid-template-columns: repeat(2, 1fr); gap: 8px; }
        }

        @media (max-width: 480px) {
          .gl-inner  { padding: 3rem 1.25rem 4rem; }
          .gl-grid   { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="gl-inner cursor-pointer">
        {/* ── Header ── */}
        <div className="gl-header">
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span
              style={{
                fontFamily: SANS,
                fontSize: "15px",
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#7A7267",
                lineHeight: 1.3,
              }}
            >
              From the Chair
            </span>
            <span
              style={{
                fontFamily: SERIF,
                fontSize: "15px",
                fontStyle: "italic",
                fontWeight: 300,
                color: "#C9963A",
                letterSpacing: "0.01em",
                lineHeight: 1.4,
              }}
            >
              — No. 05 / The journal
            </span>
          </div>

          <div>
            <h2
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(2.4rem, 4.2vw, 4.2rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
                color: "#F0EBE1",
                margin: 0,
              }}
            >
              A few weeks
              <br />
              in the{" "}
              <em
                style={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: "#C9963A",
                }}
              >
                shop.
              </em>
            </h2>
          </div>
        </div>

        {/* ── Grid ── */}
        <div className="gl-grid">
          {photos.map((p) => (
            <div key={p.id} className="gl-item">
              <div className="gl-img-wrap">
                <img src={p.src} alt={p.label} />
              </div>
              <div className="gl-caption">
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: "22px",
                    fontStyle: "italic",
                    fontWeight: 500,
                    color: "#7A7265",
                    lineHeight: 1.4,
                    margin: 0,
                  }}
                >
                  {p.label}
                </p>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    color: "#4A443E",
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  {p.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
