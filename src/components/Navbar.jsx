import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

// Homepage sections (scroll)
const homeLinks = [
  { label: "Services", num: "01", href: "#services" },
  { label: "Barbers",  num: "02", href: "#barbers"  },
  { label: "Booking",  num: "03", href: "#booking"  },
  { label: "Journal",  num: "04", href: "#gallery"  },
  { label: "Visit",    num: "05", href: "#contact"  },
];

// Top-level pages
const pageLinks = [
  { label: "About",    href: "/about"   },
  { label: "Shop",     href: "/shop"    },
  { label: "Journal",  href: "/journal" },
  { label: "FAQ",      href: "/faq"     },
  { label: "Careers",  href: "/careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [open, setOpen]           = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const pagesRef  = useRef(null);
  const location  = useLocation();
  const navigate  = useNavigate();
  const isHome    = location.pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Close mobile drawer on route change (dropdown closes via outside click)
  useEffect(() => { setOpen(false); }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (pagesRef.current && !pagesRef.current.contains(e.target)) {
        setPagesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setOpen(false);
    if (!isHome) {
      navigate("/");
      setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 400);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`nb-header${scrolled ? " nb-scrolled" : ""}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .nb-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          background: transparent;
          transition: background 0.4s ease, border-color 0.4s ease;
          border-bottom: 1px solid transparent;
        }

        .nb-header.nb-scrolled {
          background: rgba(14,13,11,0.96);
          border-bottom-color: #2C2A27;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .nb-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* ── Logo ── */
        .nb-logo {
          text-decoration: none;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          line-height: 1;
        }

        .nb-logo-text {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 3rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          color: #F0EBE1;
          line-height: 1;
          white-space: nowrap;
        }

        .nb-logo-em { font-style: italic; font-weight: 500; color: #C9963A; }

        /* ── Desktop links ── */
        .nb-links {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex-shrink: 0;
        }

        .nb-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 5px;
          text-decoration: none;
          padding-bottom: 2px;
        }

        .nb-link-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: #C9963A;
          line-height: 1;
          margin-top: 1px;
        }

        .nb-link-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #8A8278;
          line-height: 1;
          transition: color 0.2s ease;
        }

        .nb-link:hover .nb-link-label { color: #F0EBE1; }

        .nb-link-underline {
          position: absolute;
          bottom: 0; left: 0;
          height: 1px; width: 0;
          background: #C9963A;
          transition: width 0.3s ease;
        }

        .nb-link:hover .nb-link-underline { width: 100%; }

        /* ── Pages dropdown ── */
        .nb-pages-wrap {
          position: relative;
        }

        .nb-pages-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #8A8278;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 0;
          transition: color 0.2s;
          line-height: 1;
        }

        .nb-pages-btn:hover  { color: #F0EBE1; }
        .nb-pages-btn.nb-pages-active { color: #F0EBE1; }

        .nb-pages-arrow {
          font-size: 8px;
          transition: transform 0.22s ease;
          display: inline-block;
          margin-top: 1px;
        }

        .nb-pages-btn.nb-pages-active .nb-pages-arrow { transform: rotate(180deg); }

        .nb-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #0E0D0B;
          border: 1px solid #2C2A27;
          border-top: 2px solid #C9963A;
          min-width: 200px;
          padding: 6px 0 10px;
          opacity: 0;
          pointer-events: none;
          margin-top: 12px;
          transition: opacity 0.18s ease, margin-top 0.18s ease;
          z-index: 100;
          box-shadow: 0 12px 32px rgba(0,0,0,0.5);
        }

        /* invisible bridge so mouse can travel from button to dropdown */
        .nb-dropdown::before {
          content: '';
          position: absolute;
          top: -14px;
          left: 0;
          right: 0;
          height: 14px;
        }

        .nb-dropdown.nb-dd-open {
          opacity: 1;
          pointer-events: auto;
          margin-top: 0;
        }

        .nb-dd-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 11px 20px;
          text-decoration: none;
          transition: background 0.15s;
          border-bottom: 1px solid #1A1916;
        }

        .nb-dd-link:last-child { border-bottom: none; }
        .nb-dd-link:hover { background: #181512; }

        .nb-dd-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7A7267;
          transition: color 0.15s;
        }

        .nb-dd-link:hover .nb-dd-label { color: #F0EBE1; }
        .nb-dd-link.nb-dd-active .nb-dd-label { color: #C9963A; }

        .nb-dd-arrow {
          font-size: 10px;
          color: #3A3530;
          transition: color 0.15s, transform 0.15s;
        }

        .nb-dd-link:hover .nb-dd-arrow { color: #C9963A; transform: translateX(2px); }

        /* ── Right side ── */
        .nb-right {
          display: flex;
          align-items: center;
          gap: 1.75rem;
          flex-shrink: 0;
        }

        .nb-phone {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.05em;
          color: #5A5550;
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
        }

        .nb-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0E0D0B;
          background: #C9963A;
          text-decoration: none;
          padding: 12px 24px;
          line-height: 1;
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          transition: background 0.2s ease, transform 0.15s ease;
        }

        .nb-cta:hover  { background: #D4AB63; }
        .nb-cta:active { transform: scale(0.97); }

        /* ── Hamburger ── */
        .nb-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 32px;
          height: 32px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          flex-shrink: 0;
        }

        .nb-bar {
          display: block;
          width: 20px;
          height: 1px;
          background: #9A9288;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }

        .nb-burger.nb-open .nb-bar:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .nb-burger.nb-open .nb-bar:nth-child(2) { opacity: 0; width: 0; }
        .nb-burger.nb-open .nb-bar:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        /* ── Mobile drawer ── */
        .nb-drawer {
          display: none;
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          background: #111010;
          border-bottom: 1px solid #2C2A27;
          transition: max-height 0.35s ease, opacity 0.25s ease;
        }

        .nb-drawer.nb-drawer-open { max-height: 700px; opacity: 1; }

        .nb-drawer-inner {
          padding: 0.5rem 1.5rem 2.5rem;
          display: flex;
          flex-direction: column;
        }

        .nb-mob-section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #3A3530;
          padding: 1.25rem 0 0.5rem;
        }

        .nb-mob-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 0;
          border-bottom: 1px solid #1A1916;
          text-decoration: none;
        }

        .nb-mob-link:last-of-type { border-bottom: none; }

        .nb-mob-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #C9963A;
          line-height: 1;
          min-width: 20px;
        }

        .nb-mob-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #7A7267;
          line-height: 1;
          transition: color 0.2s;
        }

        .nb-mob-link:hover .nb-mob-label { color: #F0EBE1; }

        .nb-mob-page-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 0;
          border-bottom: 1px solid #1A1916;
          text-decoration: none;
        }

        .nb-mob-page-link:last-of-type { border-bottom: none; }

        .nb-mob-page-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #7A7267;
          transition: color 0.2s;
        }

        .nb-mob-page-link:hover .nb-mob-page-label { color: #F0EBE1; }
        .nb-mob-page-link.nb-mob-active .nb-mob-page-label { color: #C9963A; }

        .nb-mob-cta {
          margin-top: 1.5rem;
          display: block;
          text-align: center;
          background: #C9963A;
          color: #0E0D0B;
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 16px 0;
          transition: background 0.2s;
        }

        .nb-mob-cta:hover { background: #D4AB63; }

        .nb-mob-phone {
          text-align: center;
          margin-top: 1rem;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: #4A4540;
        }

        /* ── Breakpoints ── */
        @media (max-width: 1100px) {
          .nb-inner  { padding: 0 2.5rem; gap: 1.5rem; }
          .nb-links  { gap: 1.5rem; }
          .nb-right  { gap: 1.25rem; }
          .nb-phone  { display: none; }
        }

        @media (max-width: 900px) {
          .nb-links { gap: 1.1rem; }
        }

        @media (max-width: 768px) {
          .nb-inner      { padding: 0 1.5rem; height: 68px; }
          .nb-links      { display: none; }
          .nb-pages-wrap { display: none; }
          .nb-right      { display: none; }
          .nb-burger     { display: flex; }
          .nb-drawer     { display: block; }
        }

        @media (max-width: 480px) {
          .nb-inner { padding: 0 1.25rem; }
        }
      `}</style>

      <nav className="nb-inner">

        {/* Logo */}
        <Link to="/" className="nb-logo">
          <span className="nb-logo-text">
            Halsted <em className="nb-logo-em">&amp; Sons</em>
          </span>
        </Link>

        {/* Desktop: home section links (only on homepage) */}
        {isHome && (
          <div className="nb-links">
            {homeLinks.map(l => (
              <a key={l.label} href={l.href} onClick={e => scrollTo(e, l.href)} className="nb-link">
                <span className="nb-link-num">{l.num}</span>
                <span className="nb-link-label">{l.label}</span>
                <span className="nb-link-underline" />
              </a>
            ))}
          </div>
        )}

        {/* Desktop: pages dropdown (always visible) */}
        <div
          className="nb-pages-wrap"
          ref={pagesRef}
        >
          <button
            className={`nb-pages-btn${pagesOpen ? " nb-pages-active" : ""}`}
            onClick={() => setPagesOpen(p => !p)}
          >
            Pages
            <span className="nb-pages-arrow">▾</span>
          </button>
          <div className={`nb-dropdown${pagesOpen ? " nb-dd-open" : ""}`}>
            {pageLinks.map(p => (
              <Link
                key={p.href}
                to={p.href}
                className={`nb-dd-link${location.pathname === p.href ? " nb-dd-active" : ""}`}
              >
                <span className="nb-dd-label">{p.label}</span>
                <span className="nb-dd-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Right: phone + CTA */}
        <div className="nb-right">
          <span className="nb-phone">(312) 555-0142</span>
          <Link to="/booking" className="nb-cta">Reserve a Chair</Link>
        </div>

        {/* Hamburger */}
        <button
          className={`nb-burger${open ? " nb-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="nb-bar" />
          <span className="nb-bar" />
          <span className="nb-bar" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`nb-drawer${open ? " nb-drawer-open" : ""}`}>
        <div className="nb-drawer-inner">

          {isHome && (
            <>
              <p className="nb-mob-section-label">On this page</p>
              {homeLinks.map(l => (
                <a key={l.label} href={l.href} onClick={e => scrollTo(e, l.href)} className="nb-mob-link">
                  <span className="nb-mob-num">{l.num}</span>
                  <span className="nb-mob-label">{l.label}</span>
                </a>
              ))}
            </>
          )}

          <p className="nb-mob-section-label" style={{ paddingTop: isHome ? "1.5rem" : "1rem" }}>Pages</p>
          {pageLinks.map(p => (
            <Link
              key={p.href}
              to={p.href}
              className={`nb-mob-page-link${location.pathname === p.href ? " nb-mob-active" : ""}`}
            >
              <span className="nb-mob-page-label">{p.label}</span>
              <span style={{ color: "#3A3530", fontSize: "11px" }}>→</span>
            </Link>
          ))}

          <Link to="/booking" className="nb-mob-cta">Reserve a Chair</Link>
          <p className="nb-mob-phone">(312) 555-0142</p>
        </div>
      </div>
    </header>
  );
}