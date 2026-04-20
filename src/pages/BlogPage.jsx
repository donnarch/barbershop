import { useState } from "react";
import { Link } from "react-router-dom";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const posts = [
  {
    id: 1, num: "01",
    title: "The case against the fade",
    sub: "On cuts that outlast the trend cycle",
    date: "March 2024", readTime: "4 min",
    tag: "Craft",
    img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=500&fit=crop",
    excerpt: "Every few years, a cut takes over. Right now it's the high fade. Before that, the undercut. Before that, something else. We've watched them come and go for twelve years. Here's what we've learned.",
    featured: true,
  },
  {
    id: 2, num: "02",
    title: "How to talk to your barber",
    sub: "A guide to getting what you actually want",
    date: "February 2024", readTime: "3 min",
    tag: "Guide",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=500&fit=crop",
    excerpt: "Most bad haircuts aren't the barber's fault. They're a communication failure. Here's how to describe what you want — even if you don't know the name for it.",
    featured: false,
  },
  {
    id: 3, num: "03",
    title: "The straight razor revival",
    sub: "Why the old way is still the best way",
    date: "January 2024", readTime: "5 min",
    tag: "Craft",
    img: "https://images.unsplash.com/photo-1599351431613-18ef1fdd27e1?w=800&h=500&fit=crop",
    excerpt: "Walter Brandt has been shaving faces with a straight razor for sixteen years. We asked him to explain why — and why most modern alternatives fall short.",
    featured: false,
  },
  {
    id: 4, num: "04",
    title: "On the espresso machine",
    sub: "A short history of a borrowed appliance",
    date: "December 2023", readTime: "2 min",
    tag: "Shop",
    img: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=500&fit=crop",
    excerpt: "The Gaggia Classic on the counter was borrowed in October 2012 and never returned. We've replaced every part except the housing. It still makes a good espresso.",
    featured: false,
  },
  {
    id: 5, num: "05",
    title: "Beard oil: what it actually does",
    sub: "And why most men use too much of it",
    date: "November 2023", readTime: "3 min",
    tag: "Guide",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=500&fit=crop",
    excerpt: "Two drops. That's it. We've been telling clients this for years and they keep coming back with dry skin because they're using eight. Here's the actual science.",
    featured: false,
  },
];

const tags = ["All", "Craft", "Guide", "Shop"];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? posts : posts.filter(p => p.tag === activeTag);
  const featured = filtered.find(p => p.featured) || filtered[0];
  const rest = filtered.filter(p => p.id !== featured?.id);

  return (
    <div style={{ background: "#111010", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .bl-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }

        /* ── Header ── */
        .bl-header {
          padding: 8rem 0 4rem;
          border-bottom: 1px solid #2C2A27;
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          align-items: end;
        }

        .bl-label-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6A6460;
          margin-bottom: 6px;
        }

        .bl-label-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 300;
          color: #C9963A;
        }

        .bl-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.8rem);
          font-weight: 500;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #F0EBE1;
          margin: 0 0 1rem;
        }

        .bl-h1 em { font-style: italic; color: #C9963A; font-weight: 400; }

        .bl-header-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #7A7267;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Filter bar ── */
        .bl-filters {
          padding: 1.75rem 0;
          border-bottom: 1px solid #2C2A27;
          display: flex;
          gap: 0.25rem;
        }

        .bl-filter-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          background: none;
          border: 1px solid transparent;
          padding: 7px 14px;
          cursor: pointer;
          transition: all 0.2s;
          color: #5A5450;
        }

        .bl-filter-btn:hover   { color: #F0EBE1; border-color: #3A3733; }
        .bl-filter-btn.bl-active { color: #F0EBE1; border-color: #C9963A; background: rgba(201,150,58,0.08); }

        /* ── Featured ── */
        .bl-featured {
          padding: 3rem 0;
          border-bottom: 1px solid #2C2A27;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          text-decoration: none;
          transition: background 0.2s;
        }

        .bl-featured:hover { background: #141210; margin: 0 -4rem; padding-left: 4rem; padding-right: 4rem; }

        .bl-feat-img-wrap {
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #1A1916;
        }

        .bl-feat-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(20%);
          transition: filter 0.6s, transform 0.6s;
        }

        .bl-featured:hover .bl-feat-img-wrap img {
          filter: grayscale(0%);
          transform: scale(1.03);
        }

        .bl-feat-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9963A;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .bl-feat-tag::after {
          content: '';
          display: block;
          height: 1px;
          width: 32px;
          background: #C9963A;
        }

        .bl-feat-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 500;
          color: #F0EBE1;
          line-height: 1.1;
          margin: 0 0 0.5rem;
          letter-spacing: -0.01em;
        }

        .bl-feat-sub {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1rem;
          font-style: italic;
          font-weight: 400;
          color: #7A7267;
          margin: 0 0 1.25rem;
        }

        .bl-feat-excerpt {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #7A7267;
          line-height: 1.75;
          margin: 0 0 1.5rem;
        }

        .bl-meta {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: #4A443E;
          display: flex;
          gap: 1rem;
        }

        /* ── Post list ── */
        .bl-posts {
          padding: 2rem 0 5rem;
        }

        .bl-post-row {
          display: grid;
          grid-template-columns: 200px 1fr auto;
          gap: 2.5rem;
          align-items: center;
          padding: 1.75rem 0;
          border-bottom: 1px solid #1E1C19;
          text-decoration: none;
          transition: background 0.2s;
        }

        .bl-post-row:last-child { border-bottom: none; }
        .bl-post-row:hover { background: #141210; margin: 0 -4rem; padding-left: 4rem; padding-right: 4rem; }

        .bl-post-img {
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #1A1916;
          flex-shrink: 0;
        }

        .bl-post-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(40%);
          transition: filter 0.5s, transform 0.5s;
        }

        .bl-post-row:hover .bl-post-img img {
          filter: grayscale(0%);
          transform: scale(1.05);
        }

        .bl-post-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #C9963A;
          margin-bottom: 0.5rem;
        }

        .bl-post-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          font-weight: 500;
          color: #F0EBE1;
          margin: 0 0 4px;
          line-height: 1.15;
          letter-spacing: -0.005em;
        }

        .bl-post-sub {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 0.9rem;
          font-style: italic;
          color: #5A5450;
          margin: 0;
        }

        .bl-post-right {
          text-align: right;
          flex-shrink: 0;
        }

        .bl-post-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.1em;
          color: #4A443E;
          display: block;
          margin-bottom: 4px;
        }

        .bl-post-read {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: #3A3530;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .bl-inner { padding: 0 2.5rem; }
          .bl-header { gap: 3rem; }
        }

        @media (max-width: 768px) {
          .bl-inner  { padding: 0 1.5rem; }
          .bl-header { grid-template-columns: 1fr; gap: 1.5rem; padding: 6rem 0 3rem; }
          .bl-featured { grid-template-columns: 1fr; gap: 2rem; }
          .bl-featured:hover { margin: 0 -1.5rem; padding-left: 1.5rem; padding-right: 1.5rem; }
          .bl-post-row { grid-template-columns: 120px 1fr; gap: 1.25rem; }
          .bl-post-right { display: none; }
          .bl-post-row:hover { margin: 0 -1.5rem; padding-left: 1.5rem; padding-right: 1.5rem; }
        }

        @media (max-width: 480px) {
          .bl-inner  { padding: 0 1.25rem; }
          .bl-header { padding: 5.5rem 0 2.5rem; }
          .bl-post-row { grid-template-columns: 90px 1fr; gap: 1rem; }
        }
      `}</style>

      <div className="bl-inner">

        {/* ── Header ── */}
        <div className="bl-header">
          <div>
            <p className="bl-label-tag">Journal</p>
            <p className="bl-label-num">— From the Chair</p>
          </div>
          <div>
            <h1 className="bl-h1">
              Notes on the<br /><em>trade.</em>
            </h1>
            <p className="bl-header-sub">
              Thoughts on craft, tools, and the business of cutting hair. Updated when we have something worth saying.
            </p>
          </div>
        </div>

        {/* ── Filters ── */}
        <div className="bl-filters">
          {tags.map(t => (
            <button
              key={t}
              className={`bl-filter-btn${activeTag === t ? " bl-active" : ""}`}
              onClick={() => setActiveTag(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Featured ── */}
        {featured && (
          <div className="bl-featured">
            <div className="bl-feat-img-wrap">
              <img src={featured.img} alt={featured.title} />
            </div>
            <div>
              <p className="bl-feat-tag">{featured.tag}</p>
              <h2 className="bl-feat-title">{featured.title}</h2>
              <p className="bl-feat-sub">{featured.sub}</p>
              <p className="bl-feat-excerpt">{featured.excerpt}</p>
              <div className="bl-meta">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime} read</span>
              </div>
            </div>
          </div>
        )}

        {/* ── Rest of posts ── */}
        <div className="bl-posts">
          {rest.map(p => (
            <div key={p.id} className="bl-post-row">
              <div className="bl-post-img">
                <img src={p.img} alt={p.title} />
              </div>
              <div>
                <p className="bl-post-tag">{p.tag}</p>
                <h3 className="bl-post-title">{p.title}</h3>
                <p className="bl-post-sub">{p.sub}</p>
              </div>
              <div className="bl-post-right">
                <span className="bl-post-date">{p.date}</span>
                <span className="bl-post-read">{p.readTime} read</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}