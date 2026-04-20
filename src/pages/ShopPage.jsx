import { useState } from "react";
import { Link } from "react-router-dom";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const products = [
  {
    id: 1, num: "01",
    name: "Halsted Pomade",
    sub: "Medium hold · Natural finish",
    price: "$24",
    tag: "Bestseller",
    img: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=600&h=700&fit=crop",
    desc: "Water-based, washes out clean. The same formula David has used in-shop since 2014.",
  },
  {
    id: 2, num: "02",
    name: "Beard Oil — No. 1",
    sub: "Cedar & vetiver",
    price: "$32",
    tag: null,
    img: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=600&h=700&fit=crop",
    desc: "Cold-pressed jojoba, argan, and sweet almond. Conditions without weighing down.",
  },
  {
    id: 3, num: "03",
    name: "The Shop Tee",
    sub: "Heavyweight cotton · Black",
    price: "$38",
    tag: "Limited",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=700&fit=crop",
    desc: "310gsm ring-spun cotton. Printed in Chicago. Relaxed fit, runs true to size.",
  },
  {
    id: 4, num: "04",
    name: "Straight Razor",
    sub: "Carbon steel · Walnut handle",
    price: "$110",
    tag: "Craft",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=700&fit=crop",
    desc: "The exact razor we use in-shop. Sourced from a small maker in Sheffield. Arrives honed.",
  },
  {
    id: 5, num: "05",
    name: "Gift Card",
    sub: "Any amount · Never expires",
    price: "From $48",
    tag: null,
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=700&fit=crop",
    desc: "Redeemable for any service or product. Printed on matte card, slipped in an envelope.",
  },
  {
    id: 6, num: "06",
    name: "Shave Soap",
    sub: "Triple-milled · Sandalwood",
    price: "$18",
    tag: null,
    img: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=600&h=700&fit=crop",
    desc: "Builds a dense lather that cushions the blade. 120g puck, lasts three to four months.",
  },
];

export default function ShopPage() {
  const [added, setAdded] = useState(null);

  const handleAdd = (id) => {
    setAdded(id);
    setTimeout(() => setAdded(null), 1800);
  };

  return (
    <div style={{ background: "#111010", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── Hero ── */
        .sh-hero {
          border-bottom: 1px solid #2C2A27;
          max-width: 1400px;
          margin: 0 auto;
          padding: 8rem 4rem 4rem;
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          align-items: end;
        }

        .sh-label-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6A6460;
          margin-bottom: 6px;
        }

        .sh-label-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 300;
          color: #C9963A;
        }

        .sh-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.8rem);
          font-weight: 500;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #F0EBE1;
          margin: 0 0 1rem;
        }

        .sh-h1 em { font-style: italic; color: #C9963A; font-weight: 400; }

        .sh-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #7A7267;
          line-height: 1.7;
          margin: 0;
          max-width: 380px;
        }

        /* ── Grid ── */
        .sh-grid-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 4rem 6rem;
        }

        .sh-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #2C2A27;
          border: 1px solid #2C2A27;
        }

        .sh-card {
          background: #111010;
          display: flex;
          flex-direction: column;
          transition: background 0.25s;
        }

        .sh-card:hover { background: #161411; }

        .sh-img-wrap {
          width: 100%;
          aspect-ratio: 3 / 3.5;
          overflow: hidden;
          position: relative;
          background: #1A1916;
        }

        .sh-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(30%);
          transition: filter 0.6s ease, transform 0.6s ease;
        }

        .sh-card:hover .sh-img-wrap img {
          filter: grayscale(0%);
          transform: scale(1.03);
        }

        .sh-tag {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0E0D0B;
          background: #C9963A;
          padding: 4px 8px;
          line-height: 1;
        }

        .sh-card-body {
          padding: 1.25rem 1.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
          border-top: 1px solid #2C2A27;
        }

        .sh-card-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.5rem;
        }

        .sh-card-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #4A443E;
        }

        .sh-card-price {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 500;
          color: #C9963A;
        }

        .sh-card-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.1rem, 1.6vw, 1.35rem);
          font-weight: 500;
          color: #F0EBE1;
          margin: 0 0 3px;
          line-height: 1.2;
        }

        .sh-card-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          color: #5A5450;
          letter-spacing: 0.03em;
          margin-bottom: 0.75rem;
        }

        .sh-card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #6A6460;
          line-height: 1.65;
          flex: 1;
          margin-bottom: 1.25rem;
        }

        .sh-add-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #111010;
          background: #C9963A;
          border: none;
          padding: 11px 0;
          cursor: pointer;
          width: 100%;
          transition: background 0.2s;
          line-height: 1;
        }

        .sh-add-btn:hover  { background: #D4AB63; }
        .sh-add-btn.sh-added { background: #3A6A3A; color: #A8D4A8; }

        /* ── Footer note ── */
        .sh-note {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem 4rem;
          border-top: 1px solid #2C2A27;
          padding-top: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .sh-note-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #4A443E;
          line-height: 1.7;
          max-width: 380px;
          margin: 0;
        }

        .sh-note-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #C9963A;
          text-decoration: none;
          border-bottom: 1px solid #C9963A;
          padding-bottom: 2px;
          transition: opacity 0.2s;
          white-space: nowrap;
        }

        .sh-note-link:hover { opacity: 0.7; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .sh-hero      { padding: 7rem 2.5rem 3.5rem; gap: 3rem; }
          .sh-grid-wrap { padding: 3.5rem 2.5rem 5rem; }
          .sh-note      { padding: 2rem 2.5rem 3.5rem; }
        }

        @media (max-width: 768px) {
          .sh-hero      { padding: 6rem 1.5rem 3rem; grid-template-columns: 1fr; gap: 1.5rem; }
          .sh-grid      { grid-template-columns: repeat(2, 1fr); }
          .sh-grid-wrap { padding: 3rem 1.5rem 4rem; }
          .sh-note      { padding: 2rem 1.5rem 3rem; }
        }

        @media (max-width: 480px) {
          .sh-hero      { padding: 5.5rem 1.25rem 2.5rem; }
          .sh-grid      { grid-template-columns: 1fr; }
          .sh-grid-wrap { padding: 2.5rem 1.25rem 3.5rem; }
          .sh-note      { padding: 1.5rem 1.25rem 2.5rem; }
        }
      `}</style>

      {/* ── Hero ── */}
      <div className="sh-hero">
        <div>
          <p className="sh-label-tag">The Shop</p>
          <p className="sh-label-num">— Products & Goods</p>
        </div>
        <div>
          <h1 className="sh-h1">
            Things worth<br /><em>taking home.</em>
          </h1>
          <p className="sh-sub">
            Products we use in the chair, made by people we trust. Nothing we wouldn't use ourselves.
          </p>
        </div>
      </div>

      {/* ── Products ── */}
      <div className="sh-grid-wrap">
        <div className="sh-grid">
          {products.map(p => (
            <div key={p.id} className="sh-card">
              <div className="sh-img-wrap">
                <img src={p.img} alt={p.name} />
                {p.tag && <span className="sh-tag">{p.tag}</span>}
              </div>
              <div className="sh-card-body">
                <div className="sh-card-top">
                  <span className="sh-card-num">{p.num}</span>
                  <span className="sh-card-price">{p.price}</span>
                </div>
                <h3 className="sh-card-name">{p.name}</h3>
                <p className="sh-card-sub">{p.sub}</p>
                <p className="sh-card-desc">{p.desc}</p>
                <button
                  className={`sh-add-btn${added === p.id ? " sh-added" : ""}`}
                  onClick={() => handleAdd(p.id)}
                >
                  {added === p.id ? "Added ✓" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Note ── */}
      <div className="sh-note">
        <p className="sh-note-text">
          All products ship within two business days. Local Chicago orders over $60 can be picked up in-shop. We don't do returns on grooming products, but call us if something's wrong.
        </p>
        <Link to="/contact" className="sh-note-link">Questions? Get in touch →</Link>
      </div>
    </div>
  );
}