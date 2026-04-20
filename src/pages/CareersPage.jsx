import { useState } from "react";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const openings = [
  {
    id: 1, num: "01",
    title: "Senior Barber",
    type: "Full-time",
    schedule: "Tue – Sat",
    desc: "We're looking for a barber with at least five years of experience who can work confidently across classic cuts, fades, and straight-razor shaves. You'll carry your own book, with walk-in support on slower days.",
    reqs: ["5+ years chair experience", "Comfortable with straight razor", "Illinois barber license", "Own clientele welcome but not required"],
  },
  {
    id: 2, num: "02",
    title: "Apprentice Barber",
    type: "Part-time",
    schedule: "Flexible",
    desc: "A structured two-year apprenticeship under David Halsted and Walter Brandt. You'll work the floor three days a week and spend one day on technique. No shortcuts — this is the real thing.",
    reqs: ["Barbering school enrollment or graduate", "Genuine interest in the craft", "Reliable and punctual", "Chicago-based"],
  },
  {
    id: 3, num: "03",
    title: "Shop Manager",
    type: "Full-time",
    schedule: "Mon – Fri",
    desc: "The person who keeps the operation running. Scheduling, inventory, vendor relationships, and making sure the espresso machine never runs out of beans. You'll work closely with David on the business side.",
    reqs: ["2+ years operations or management", "Strong communicator", "Comfortable with scheduling software", "Interest in the grooming industry"],
  },
];

const values = [
  { label: "Craft over speed", desc: "We'd rather do fewer things well. No one here is rushing." },
  { label: "Fair pay", desc: "We pay above the Chicago average for all positions, with quarterly reviews." },
  { label: "The real trade", desc: "If you want to learn barbering properly, this is the place." },
  { label: "Small team", desc: "Six chairs, six people. No corporate hierarchy, no noise." },
];

export default function CareersPage() {
  const [expanded, setExpanded] = useState(null);
  const [form, setForm]         = useState({ name: "", email: "", role: "", message: "" });
  const [sent, setSent]         = useState(false);

  const toggle = (id) => setExpanded(p => p === id ? null : id);

  const set = (field, val) => setForm(p => ({ ...p, [field]: val }));

  const submit = (e) => {
    e.preventDefault();
    if (form.name && form.email) setSent(true);
  };

  const inputBase = {
    fontFamily: SANS,
    fontSize: "14px",
    fontWeight: 400,
    color: "#F0EBE1",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #2C2A27",
    width: "100%",
    padding: "11px 0",
    outline: "none",
    letterSpacing: "0.01em",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ background: "#111010", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

        .cr-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 4rem;
        }

        /* ── Header ── */
        .cr-header {
          padding: 8rem 0 4rem;
          border-bottom: 1px solid #2C2A27;
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          align-items: end;
        }

        .cr-label-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6A6460;
          margin-bottom: 6px;
        }

        .cr-label-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 300;
          color: #C9963A;
        }

        .cr-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(2.6rem, 5vw, 4.8rem);
          font-weight: 500;
          line-height: 1.0;
          letter-spacing: -0.02em;
          color: #F0EBE1;
          margin: 0 0 1rem;
        }

        .cr-h1 em { font-style: italic; color: #C9963A; font-weight: 400; }

        .cr-header-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #7A7267;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Values strip ── */
        .cr-values {
          padding: 3.5rem 0;
          border-bottom: 1px solid #2C2A27;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
        }

        .cr-value {
          padding: 0 2rem 0 0;
          border-right: 1px solid #2C2A27;
          margin-right: 2rem;
        }

        .cr-value:last-child { border-right: none; margin-right: 0; padding-right: 0; }

        .cr-value-label {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.05rem;
          font-weight: 500;
          color: #C9963A;
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .cr-value-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #6A6460;
          line-height: 1.65;
          margin: 0;
        }

        /* ── Openings ── */
        .cr-openings {
          padding: 4rem 0;
          border-bottom: 1px solid #2C2A27;
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          align-items: start;
        }

        .cr-section-label {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cr-s-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #6A6460;
        }

        .cr-s-num {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 15px;
          font-style: italic;
          font-weight: 300;
          color: #C9963A;
        }

        .cr-opening {
          border-bottom: 1px solid #1E1C19;
        }

        .cr-opening:last-child { border-bottom: none; }

        .cr-opening-btn {
          width: 100%;
          background: none;
          border: none;
          padding: 1.75rem 0;
          cursor: pointer;
          display: grid;
          grid-template-columns: 3rem 1fr auto auto;
          align-items: center;
          gap: 1.5rem;
          text-align: left;
          transition: background 0.15s;
        }

        .cr-opening-btn:hover { background: rgba(255,255,255,0.01); }

        .cr-op-num {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #C9963A;
        }

        .cr-op-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          font-weight: 500;
          color: #F0EBE1;
          line-height: 1.15;
          transition: color 0.2s;
        }

        .cr-opening-btn:hover .cr-op-title { color: #C9963A; }

        .cr-op-meta {
          display: flex;
          flex-direction: column;
          gap: 3px;
          align-items: flex-end;
        }

        .cr-op-type {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4A443E;
        }

        .cr-op-schedule {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 400;
          color: #3A3530;
          letter-spacing: 0.05em;
        }

        .cr-op-icon {
          font-size: 18px;
          font-weight: 300;
          color: #C9963A;
          line-height: 1;
          transition: transform 0.3s ease;
          width: 20px;
          text-align: center;
        }

        .cr-op-icon.cr-open { transform: rotate(45deg); }

        .cr-op-body-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
          padding-left: calc(3rem + 1.5rem);
        }

        .cr-op-body-wrap.cr-open { max-height: 500px; }

        .cr-op-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #7A7267;
          line-height: 1.8;
          margin: 0 0 1.25rem;
          max-width: 540px;
        }

        .cr-op-reqs {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .cr-op-reqs li {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #6A6460;
          line-height: 1.5;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cr-op-reqs li::before {
          content: '—';
          color: #C9963A;
          font-size: 10px;
          flex-shrink: 0;
        }

        .cr-apply-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #C9963A;
          background: none;
          border: none;
          border-bottom: 1px solid #C9963A;
          padding-bottom: 2px;
          cursor: pointer;
          margin-bottom: 2rem;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: opacity 0.2s;
        }

        .cr-apply-link:hover { opacity: 0.7; }

        /* ── Application form ── */
        .cr-form-section {
          padding: 4rem 0 6rem;
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          align-items: start;
        }

        .cr-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 3rem;
        }

        .cr-field { margin-bottom: 2rem; }

        .cr-field-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #5A5450;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cr-field-label span {
          color: #C9963A;
          font-size: 10px;
        }

        .cr-textarea {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #F0EBE1;
          background: transparent;
          border: none;
          border-bottom: 1px solid #2C2A27;
          width: 100%;
          padding: 11px 0;
          outline: none;
          resize: none;
          min-height: 100px;
          letter-spacing: 0.01em;
          transition: border-color 0.2s;
        }

        .cr-textarea:focus,
        input:focus { border-bottom-color: #F0EBE1 !important; }

        .cr-form-bottom {
          border-top: 1px solid #2C2A27;
          padding-top: 2rem;
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          grid-column: 1 / -1;
          flex-wrap: wrap;
        }

        .cr-form-note {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 300;
          color: #4A443E;
          line-height: 1.6;
          max-width: 320px;
          margin: 0;
        }

        .cr-submit-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #0E0D0B;
          background: #C9963A;
          border: none;
          padding: 13px 26px;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .cr-submit-btn:hover { background: #D4AB63; }

        .cr-success {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 1.5rem;
          font-style: italic;
          font-weight: 400;
          color: #C9963A;
          padding: 2rem 0;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .cr-inner    { padding: 0 2.5rem; }
          .cr-header   { gap: 3rem; }
          .cr-openings { gap: 3rem; }
          .cr-form-section { gap: 3rem; }
        }

        @media (max-width: 768px) {
          .cr-inner        { padding: 0 1.5rem; }
          .cr-header       { grid-template-columns: 1fr; gap: 1.5rem; padding: 6rem 0 3rem; }
          .cr-values       { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .cr-value        { border-right: none; margin-right: 0; padding-right: 0; }
          .cr-openings     { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 0; }
          .cr-form-section { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 0 4rem; }
          .cr-form-grid    { grid-template-columns: 1fr; }
          .cr-opening-btn  { grid-template-columns: 2.5rem 1fr auto; }
          .cr-op-meta      { display: none; }
          .cr-form-bottom  { flex-direction: column; align-items: flex-start; }
        }

        @media (max-width: 480px) {
          .cr-inner  { padding: 0 1.25rem; }
          .cr-values { grid-template-columns: 1fr; }
          .cr-op-body-wrap { padding-left: 0; }
        }
      `}</style>

      <div className="cr-inner">

        {/* ── Header ── */}
        <div className="cr-header">
          <div>
            <p className="cr-label-tag">Careers</p>
            <p className="cr-label-num">— Join the Team</p>
          </div>
          <div>
            <h1 className="cr-h1">
              We're hiring<br /><em>good hands.</em>
            </h1>
            <p className="cr-header-sub">
              Small team. Real craft. We hire slowly and we keep people.
            </p>
          </div>
        </div>

        {/* ── Values ── */}
        <div className="cr-values">
          {values.map(v => (
            <div key={v.label} className="cr-value">
              <p className="cr-value-label">{v.label}</p>
              <p className="cr-value-desc">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Openings ── */}
        <div className="cr-openings">
          <div className="cr-section-label">
            <span className="cr-s-tag">Open Roles</span>
            <span className="cr-s-num">— Current openings</span>
          </div>
          <div>
            {openings.map(o => (
              <div key={o.id} className="cr-opening">
                <button className="cr-opening-btn" onClick={() => toggle(o.id)}>
                  <span className="cr-op-num">{o.num}</span>
                  <span className="cr-op-title">{o.title}</span>
                  <div className="cr-op-meta">
                    <span className="cr-op-type">{o.type}</span>
                    <span className="cr-op-schedule">{o.schedule}</span>
                  </div>
                  <span className={`cr-op-icon${expanded === o.id ? " cr-open" : ""}`}>+</span>
                </button>
                <div className={`cr-op-body-wrap${expanded === o.id ? " cr-open" : ""}`}>
                  <p className="cr-op-desc">{o.desc}</p>
                  <ul className="cr-op-reqs">
                    {o.reqs.map(r => <li key={r}>{r}</li>)}
                  </ul>
                  <button className="cr-apply-link" onClick={() => document.getElementById("cr-form")?.scrollIntoView({ behavior: "smooth" })}>
                    Apply for this role →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Application form ── */}
        <div id="cr-form" className="cr-form-section">
          <div className="cr-section-label">
            <span className="cr-s-tag">Apply</span>
            <span className="cr-s-num">— Get in touch</span>
          </div>
          <div>
            {sent ? (
              <p className="cr-success">We've got your message. We'll be in touch within a week.</p>
            ) : (
              <form onSubmit={submit} noValidate>
                <div className="cr-form-grid">
                  <div className="cr-field">
                    <p className="cr-field-label"><span>01</span> Your Name</p>
                    <input
                      type="text"
                      placeholder="David Halsted"
                      value={form.name}
                      onChange={e => set("name", e.target.value)}
                      style={{ ...inputBase }}
                      onFocus={e => e.target.style.borderBottomColor = "#F0EBE1"}
                      onBlur={e  => e.target.style.borderBottomColor = "#2C2A27"}
                    />
                  </div>
                  <div className="cr-field">
                    <p className="cr-field-label"><span>02</span> Email</p>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={e => set("email", e.target.value)}
                      style={{ ...inputBase }}
                      onFocus={e => e.target.style.borderBottomColor = "#F0EBE1"}
                      onBlur={e  => e.target.style.borderBottomColor = "#2C2A27"}
                    />
                  </div>
                  <div className="cr-field" style={{ gridColumn: "1 / -1" }}>
                    <p className="cr-field-label"><span>03</span> Role You're Applying For</p>
                    <input
                      type="text"
                      placeholder="Senior Barber, Apprentice, Shop Manager..."
                      value={form.role}
                      onChange={e => set("role", e.target.value)}
                      style={{ ...inputBase }}
                      onFocus={e => e.target.style.borderBottomColor = "#F0EBE1"}
                      onBlur={e  => e.target.style.borderBottomColor = "#2C2A27"}
                    />
                  </div>
                  <div className="cr-field" style={{ gridColumn: "1 / -1" }}>
                    <p className="cr-field-label"><span>04</span> Tell Us About Yourself</p>
                    <textarea
                      className="cr-textarea"
                      placeholder="Where you've worked, what you care about, why here..."
                      value={form.message}
                      onChange={e => set("message", e.target.value)}
                      onFocus={e => e.target.style.borderBottomColor = "#F0EBE1"}
                      onBlur={e  => e.target.style.borderBottomColor = "#2C2A27"}
                    />
                  </div>
                  <div className="cr-form-bottom">
                    <p className="cr-form-note">We read every application. If there's no current opening that fits, we'll keep your details on file.</p>
                    <button type="submit" className="cr-submit-btn">Send Application →</button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}