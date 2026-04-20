import { useState } from "react";
import { services } from "../data/services";
import { barbers } from "../data/barbers";

const SERIF = "'Cormorant Garamond', Georgia, serif";
const SANS  = "'DM Sans', system-ui, sans-serif";

const TIME_SLOTS = [
  "09:00","10:00","11:00","12:00","13:00",
  "14:00","15:00","16:00","17:00","18:00","19:00",
];
const INITIALLY_BOOKED = ["10:00", "14:00", "17:00"];

const BARBER_OPTIONS = [
  { id: 0,  name: "No preference", sub: "First available" },
  ...barbers.map(b => ({ id: b.id, name: b.name, sub: b.role })),
];

const STEPS = ["Service", "Date & Time", "Your Details"];
const EMPTY = { service: null, barber: null, date: "", time: "", name: "", phone: "" };

export default function Booking() {
  const [step,      setStep]      = useState(0);
  const [form,      setForm]      = useState(EMPTY);
  const [errors,    setErrors]    = useState({});
  const [booked,    setBooked]    = useState(INITIALLY_BOOKED);
  const [loading,   setLoading]   = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const set = (field, val) => {
    setForm(p => ({ ...p, [field]: val }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: "" }));
  };

  const validateStep = () => {
    const e = {};
    if (step === 0) {
      if (!form.service)        e.service = "Choose a service";
      if (form.barber === null) e.barber  = "Choose a barber";
    }
    if (step === 1) {
      if (!form.date) e.date = "Pick a date";
      if (!form.time) e.time = "Select a time";
    }
    if (step === 2) {
      if (!form.name.trim())  e.name  = "Name is required";
      if (!form.phone.trim()) e.phone = "Phone is required";
    }
    return e;
  };

  const next = () => {
    const e = validateStep();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    if (step < 2) setStep(s => s + 1);
    else {
      setLoading(true);
      setTimeout(() => {
        setBooked(p => [...p, form.time]);
        setLoading(false);
        setSubmitted(true);
      }, 1400);
    }
  };

  const selectedService = services.find(s => s.title === form.service);
  const selectedBarber  = BARBER_OPTIONS.find(b => b.name === form.barber);

  const formatDate = (d) => {
    if (!d) return "—";
    return new Date(d + "T00:00:00").toLocaleDateString("en-US", {
      weekday: "long", month: "long", day: "numeric",
    });
  };

  const sectionLabel = {
    fontFamily: SANS,
    fontSize: "10px",
    fontWeight: 600,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#8A8278",
    marginBottom: "16px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const inputBase = {
    fontFamily: SANS,
    fontSize: "15px",
    fontWeight: 400,
    color: "#111010",
    background: "transparent",
    border: "none",
    borderBottom: "1px solid #C5BEB4",
    width: "100%",
    padding: "12px 0",
    outline: "none",
    letterSpacing: "0.01em",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="booking"
      style={{ background: "#F2EDE4", borderTop: "1px solid #DDD6CA" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,520;1,400;1,500&family=DM+Sans:wght@300;400;500;550;600;650&display=swap');

        .bk-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 5rem 4rem 6rem;
        }

        .bk-header {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 5rem;
          margin-bottom: 4rem;
          align-items: start;
        }

        .bk-body {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 4rem;
          align-items: start;
        }

        .bk-step-bar {
          display: flex;
          margin-bottom: 3rem;
          border-bottom: 1px solid #DDD6CA;
        }

        .bk-step-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 0 20px;
          margin-right: 40px;
          border-bottom: 2px solid transparent;
          margin-bottom: -1px;
          transition: border-color 0.2s;
          cursor: default;
        }

        .bk-step-item.bk-active { border-bottom-color: #111010; }

        .bk-step-num {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 1px solid #C5BEB4;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          color: #8A8278;
          flex-shrink: 0;
          transition: all 0.2s;
        }

        .bk-step-item.bk-active .bk-step-num { border-color: #111010; color: #111010; }
        .bk-step-item.bk-done  .bk-step-num  { background: #111010; border-color: #111010; color: #F2EDE4; }

        .bk-step-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #C5BEB4;
          transition: color 0.2s;
        }

        .bk-step-item.bk-active .bk-step-label,
        .bk-step-item.bk-done   .bk-step-label { color: #111010; }

        .bk-services-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-bottom: 32px;
        }

        .bk-barbers-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .bk-sel-card {
          padding: 18px 20px;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 0;
        }

        .bk-sel-card:hover { border-color: #111010 !important; }

        .bk-time-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }

        .bk-time-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 450;
          letter-spacing: 0.03em;
          padding: 10px 14px;
          border: 1px solid #C5BEB4;
          background: transparent;
          color: #111010;
          cursor: pointer;
          transition: all 0.2s ease;
          border-radius: 0;
          line-height: 1;
        }

        .bk-time-btn:hover:not(:disabled):not(.bk-selected) { border-color: #111010; }
        .bk-time-btn.bk-selected { background: #111010; border-color: #111010; color: #F2EDE4; font-weight: 600; }
        .bk-time-btn:disabled    { border-color: #E5DFD9; color: #C5BEB4; text-decoration: line-through; cursor: not-allowed; }

        .bk-summary {
          background: #FAF7F2;
          border: 1px solid #DDD6CA;
          padding: 28px 28px 24px;
          position: sticky;
          top: 2rem;
        }

        .bk-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #EDE8E0;
        }

        .bk-summary-row:last-of-type { border-bottom: none; }

        .bk-bottom-bar {
          border-top: 1px solid #DDD6CA;
          padding-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .bk-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 650;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #111010;
          background: none;
          border: none;
          border-bottom: 1px solid #111010;
          padding-bottom: 3px;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .bk-cta:hover   { color: #C9963A; border-bottom-color: #C9963A; }
        .bk-cta:disabled { opacity: 0.5; cursor: not-allowed; }

        .bk-back {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #8A8278;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s;
          padding: 0;
        }

        .bk-back:hover { color: #111010; }

        .bk-err {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #E05252;
          margin-top: 8px;
          letter-spacing: 0.01em;
        }

        .bk-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 3rem;
        }

        @media (max-width: 1024px) {
          .bk-inner  { padding: 4rem 2.5rem 5rem; }
          .bk-body   { grid-template-columns: 1fr; }
          .bk-header { gap: 3rem; }
          .bk-summary { position: static; }
        }

        @media (max-width: 768px) {
          .bk-inner           { padding: 3rem 1.5rem 4rem; }
          .bk-header          { grid-template-columns: 1fr; gap: 1.5rem; }
          .bk-services-grid,
          .bk-barbers-grid    { grid-template-columns: 1fr; }
          .bk-step-item       { margin-right: 20px; }
          .bk-details-grid    { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .bk-inner { padding: 2.5rem 1.25rem 3.5rem; }
        }
      `}</style>

      <div className="bk-inner">

        {/* ── Header ── */}
        <div className="bk-header">
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{
              fontFamily: SANS, fontSize: "10px", fontWeight: 500,
              letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8278",
            }}>
              Book Your Chair
            </span>
            <span style={{
              fontFamily: SERIF, fontSize: "15px", fontStyle: "italic",
              fontWeight: 300, color: "#C9963A", letterSpacing: "0.01em",
            }}>
              — No. 04 / Reserve
            </span>
          </div>
          <div>
            <h2 style={{
              fontFamily: SERIF,
              fontSize: "clamp(2.6rem, 4.8vw, 5rem)",
              fontWeight: 520,
              lineHeight: 1.04,
              letterSpacing: "-0.02em",
              color: "#111010",
              margin: 0,
            }}>
              Three steps,<br />
              two minutes,{" "}
              <em style={{ fontStyle: "italic", fontWeight: 420, color: "#C9963A" }}>
                that's it.
              </em>
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #C5BEB4", marginBottom: "3rem" }} />

        {/* ── Success ── */}
        {submitted ? (
          <div style={{ maxWidth: "560px" }}>
            <div style={{
              width: "48px", height: "48px", border: "1.5px solid #111010",
              display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "28px",
            }}>
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="#111010" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 style={{
              fontFamily: SERIF, fontSize: "clamp(2.2rem,4vw,3rem)",
              fontWeight: 520, color: "#111010", lineHeight: 1.1, marginBottom: "16px",
            }}>
              You're confirmed.
            </h3>
            <p style={{
              fontFamily: SANS, fontSize: "15px", fontWeight: 350,
              color: "#7A7267", lineHeight: 1.65, marginBottom: "36px",
            }}>
              We have you down for{" "}
              <span style={{ color: "#111010", fontWeight: 500 }}>{formatDate(form.date)}</span>{" "}
              at <span style={{ color: "#111010", fontWeight: 500 }}>{form.time}</span>.
              We'll send a reminder the day before.
            </p>
            <button className="bk-cta" onClick={() => { setForm(EMPTY); setErrors({}); setStep(0); setSubmitted(false); }}>
              Book another →
            </button>
          </div>
        ) : (
          <div className="bk-body">

            {/* ── Wizard left ── */}
            <div>

              {/* Step bar */}
              <div className="bk-step-bar">
                {STEPS.map((s, i) => (
                  <div
                    key={s}
                    className={`bk-step-item${i === step ? " bk-active" : ""}${i < step ? " bk-done" : ""}`}
                    onClick={() => i < step && setStep(i)}
                    style={{ cursor: i < step ? "pointer" : "default" }}
                  >
                    <div className="bk-step-num">
                      {i < step ? (
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : i + 1}
                    </div>
                    <span className="bk-step-label">{s}</span>
                  </div>
                ))}
              </div>

              {/* ── STEP 0 ── */}
              {step === 0 && (
                <div>
                  <div style={sectionLabel}>
                    <span style={{ color: "#C9963A", fontWeight: 600 }}>01</span>
                    Choose a service
                  </div>
                  <div className="bk-services-grid">
                    {services.map(s => {
                      const active = form.service === s.title;
                      return (
                        <div
                          key={s.id}
                          className="bk-sel-card"
                          onClick={() => set("service", s.title)}
                          style={{
                            background: active ? "#111010" : "#FAF7F2",
                            border: `1px solid ${active ? "#111010" : "#DDD6CA"}`,
                          }}
                          onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "#111010"; }}
                          onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "#DDD6CA"; }}
                        >
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                            <span style={{
                              fontFamily: SERIF, fontSize: "1.1rem", fontWeight: 500,
                              color: active ? "#F2EDE4" : "#111010", lineHeight: 1.2,
                            }}>
                              {s.title}
                            </span>
                            <span style={{
                              fontFamily: SERIF, fontSize: "1.05rem", fontWeight: 600,
                              color: "#C9963A",
                            }}>
                              {s.price}
                            </span>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#8A8278" strokeWidth="1.5">
                              <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
                            </svg>
                            <span style={{
                              fontFamily: SANS, fontSize: "11px", fontWeight: 400,
                              color: active ? "#7A7267" : "#8A8278", letterSpacing: "0.03em",
                            }}>
                              {s.duration}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {errors.service && <p className="bk-err">{errors.service}</p>}

                  <div style={{ marginTop: "36px" }}>
                    <div style={sectionLabel}>
                      <span style={{ color: "#C9963A", fontWeight: 600 }}>02</span>
                      Pick your barber
                    </div>
                    <div className="bk-barbers-grid">
                      {BARBER_OPTIONS.map(b => {
                        const active = form.barber === b.name;
                        return (
                          <div
                            key={b.id}
                            className="bk-sel-card"
                            onClick={() => set("barber", b.name)}
                            style={{
                              background: active ? "#111010" : "#FAF7F2",
                              border: `1px solid ${active ? "#111010" : "#DDD6CA"}`,
                            }}
                            onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = "#111010"; }}
                            onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = "#DDD6CA"; }}
                          >
                            <p style={{
                              fontFamily: SERIF, fontSize: "1.05rem", fontWeight: 500,
                              color: active ? "#F2EDE4" : "#111010", margin: "0 0 4px",
                            }}>
                              {b.name}
                            </p>
                            <p style={{
                              fontFamily: SANS, fontSize: "11px", fontWeight: 400,
                              color: active ? "#7A7267" : "#8A8278", margin: 0, letterSpacing: "0.02em",
                            }}>
                              {b.sub}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    {errors.barber && <p className="bk-err">{errors.barber}</p>}
                  </div>
                </div>
              )}

              {/* ── STEP 1 ── */}
              {step === 1 && (
                <div>
                  <div style={sectionLabel}>
                    <span style={{ color: "#C9963A", fontWeight: 600 }}>01</span>
                    Pick a date
                  </div>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={e => set("date", e.target.value)}
                    style={{
                      ...inputBase,
                      maxWidth: "280px",
                      borderBottomColor: errors.date ? "#E05252" : "#C5BEB4",
                      colorScheme: "light",
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                    onFocus={e => e.target.style.borderBottomColor = "#111010"}
                    onBlur={e  => e.target.style.borderBottomColor = errors.date ? "#E05252" : "#C5BEB4"}
                  />
                  {errors.date && <p className="bk-err">{errors.date}</p>}

                  <div style={{ marginTop: "36px" }}>
                    <div style={sectionLabel}>
                      <span style={{ color: "#C9963A", fontWeight: 600 }}>02</span>
                      Select a time
                    </div>
                    <div className="bk-time-grid">
                      {TIME_SLOTS.map(t => {
                        const isBooked   = booked.includes(t);
                        const isSelected = form.time === t;
                        return (
                          <button
                            key={t}
                            type="button"
                            disabled={isBooked}
                            onClick={() => set("time", t)}
                            className={`bk-time-btn${isSelected ? " bk-selected" : ""}`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                    {errors.time && <p className="bk-err">{errors.time}</p>}
                  </div>
                </div>
              )}

              {/* ── STEP 2 ── */}
              {step === 2 && (
                <div className="bk-details-grid">
                  <div style={{ marginBottom: "32px" }}>
                    <div style={sectionLabel}>
                      <span style={{ color: "#C9963A", fontWeight: 600 }}>01</span>
                      Your Name
                    </div>
                    <input
                      type="text"
                      placeholder="John Apple"
                      value={form.name}
                      onChange={e => set("name", e.target.value)}
                      style={{ ...inputBase, borderBottomColor: errors.name ? "#E05252" : "#C5BEB4" }}
                      onFocus={e => e.target.style.borderBottomColor = "#111010"}
                      onBlur={e  => e.target.style.borderBottomColor = errors.name ? "#E05252" : "#C5BEB4"}
                    />
                    {errors.name && <p className="bk-err">{errors.name}</p>}
                  </div>
                  <div style={{ marginBottom: "32px" }}>
                    <div style={sectionLabel}>
                      <span style={{ color: "#C9963A", fontWeight: 600 }}>02</span>
                      Phone
                    </div>
                    <input
                      type="tel"
                      placeholder="(312) 555 0142"
                      value={form.phone}
                      onChange={e => set("phone", e.target.value)}
                      style={{ ...inputBase, borderBottomColor: errors.phone ? "#E05252" : "#C5BEB4" }}
                      onFocus={e => e.target.style.borderBottomColor = "#111010"}
                      onBlur={e  => e.target.style.borderBottomColor = errors.phone ? "#E05252" : "#C5BEB4"}
                    />
                    {errors.phone && <p className="bk-err">{errors.phone}</p>}
                  </div>
                </div>
              )}

              {/* ── Bottom bar ── */}
              <div className="bk-bottom-bar">
                <button
                  className="bk-back"
                  onClick={() => step > 0 && setStep(s => s - 1)}
                  style={{ opacity: step === 0 ? 0 : 1, pointerEvents: step === 0 ? "none" : "auto" }}
                >
                  ← Back
                </button>

                <p style={{
                  fontFamily: SANS, fontSize: "12px", fontWeight: 350,
                  color: "#9E968C", lineHeight: 1.6, maxWidth: "280px",
                  letterSpacing: "0.01em", margin: 0,
                }}>
                  {step === 2
                    ? "By booking you agree to our 24-hour cancellation policy."
                    : "No card required to reserve your spot."}
                </p>

                <button className="bk-cta" disabled={loading} onClick={next}>
                  {loading && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                      style={{ animation: "bk-spin 0.8s linear infinite" }}>
                      <style>{`@keyframes bk-spin { to { transform: rotate(360deg); } }`}</style>
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.2"/>
                      <path fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" opacity="0.8"/>
                    </svg>
                  )}
                  {step < 2 ? "Continue →" : "Confirm Booking →"}
                </button>
              </div>
            </div>

            {/* ── Summary panel right ── */}
            <div className="bk-summary">
              <p style={{
                fontFamily: SANS, fontSize: "10px", fontWeight: 600,
                letterSpacing: "0.18em", textTransform: "uppercase",
                color: "#8A8278", marginBottom: "20px",
              }}>
                Your Visit
              </p>

              {[
                {
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A8278" strokeWidth="1.5"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/></svg>,
                  label: "Service",
                  value: selectedService?.title ?? "—",
                  sub:   selectedService?.price  ?? null,
                },
                {
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A8278" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
                  label: "Barber",
                  value: selectedBarber?.name ?? "—",
                },
                {
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A8278" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
                  label: "Date",
                  value: form.date ? formatDate(form.date) : "—",
                },
                {
                  icon: <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#8A8278" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                  label: "Time",
                  value: form.time || "—",
                },
              ].map(row => (
                <div className="bk-summary-row" key={row.label}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {row.icon}
                    <span style={{
                      fontFamily: SANS, fontSize: "10px", fontWeight: 600,
                      letterSpacing: "0.14em", textTransform: "uppercase", color: "#8A8278",
                    }}>
                      {row.label}
                    </span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span style={{
                      fontFamily: SERIF, fontSize: "1rem", fontWeight: 500, color: "#111010",
                    }}>
                      {row.value}
                    </span>
                    {row.sub && (
                      <p style={{
                        fontFamily: SANS, fontSize: "11px", fontWeight: 400,
                        color: "#C9963A", margin: "2px 0 0", letterSpacing: "0.02em",
                      }}>
                        {row.sub}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Total */}
              <div style={{ borderTop: "1px solid #DDD6CA", paddingTop: "16px", marginTop: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "12px" }}>
                  <span style={{
                    fontFamily: SANS, fontSize: "10px", fontWeight: 600,
                    letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8278",
                  }}>
                    Total
                  </span>
                  <span style={{
                    fontFamily: SERIF, fontSize: "1.3rem", fontWeight: 600, color: "#111010",
                  }}>
                    {selectedService?.price ?? "—"}
                  </span>
                </div>
                <p style={{
                  fontFamily: SANS, fontSize: "11px", fontWeight: 350,
                  color: "#9E968C", lineHeight: 1.65, letterSpacing: "0.01em", margin: 0,
                }}>
                  Pay at the shop — cash or card. No deposit required for visits under $70.
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}