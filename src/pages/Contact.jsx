// src/pages/Contact.jsx
import { useState } from "react";
import Footer from "../components/Footer";
import "../styles/Contact.css";

const SUPABASE_URL = import.meta.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.SUPABASE_ANON_KEY;

async function submitLead(data) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      Prefer: "return=minimal",
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed");
}

export default function Contact({ addToast }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", timeline: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone || !form.message) {
      addToast("Please fill all required fields.", "error"); return;
    }
    setLoading(true);
    try {
      await submitLead({ ...form, created_at: new Date().toISOString() });
      setSent(true);
    } catch {
      addToast("Submission failed. Email us at bermudatech03@gmail.com", "error");
    } finally { setLoading(false); }
  };

  if (sent) return (
    <div className="contact-success">
      <div className="contact-success__card">
        <div className="contact-success__icon">✓</div>
        <h2 className="contact-success__title">MESSAGE RECEIVED.</h2>
        <p className="contact-success__desc">
          Your message is with our team. Expect a response within <strong>4 business hours</strong>. We'll send a confirmation to your email shortly.
        </p>
        <button className="btn-outline" onClick={() => setSent(false)}>Send Another Message</button>
      </div>
    </div>
  );

  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-hero">
        <div className="contact-hero__glow" />
        <div className="section-inner contact-hero__inner">
          <div className="contact-hero__left">
            <div className="label-pill"><span className="dot" />Get in Touch</div>
            <h1 className="contact-hero__title">
              LET'S BUILD<br />
              <span className="accent">SOMETHING</span><br />
              GREAT.
            </h1>
            <p className="contact-hero__sub">
              Every great product starts with a conversation. Tell us what you're building
              and we'll show you how we make it exceptional.
            </p>
            <div className="contact-info">
              {[
                { icon: "📞", l: "Phone", v: "+91 97907 28732", href: "tel:+919790728732" },
                { icon: "📧", l: "Email", v: "bermudatech03@gmail.com", href: "mailto:bermudatech03@gmail.com" },
                { icon: "📍", l: "Office", v: "Ambattur ,Chennai, Tamil Nadu, India" },
                { icon: "⏰", l: "Response", v: "Within 4 business hours" },
              ].map((c, i) => (
                <div key={i} className="contact-info__item">
                  <div className="contact-info__icon">{c.icon}</div>
                  <div>
                    <div className="contact-info__label">{c.l}</div>
                    {c.href
                      ? <a href={c.href} className="contact-info__val">{c.v}</a>
                      : <div className="contact-info__val">{c.v}</div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            <div className="contact-form">
              <h3 className="contact-form__title">Tell Us About Your Project</h3>
              <div className="contact-form__grid">
                {[
                  { l: "Full Name *", k: "name", t: "text", ph: "John Smith" },
                  { l: "Email Address *", k: "email", t: "email", ph: "john@company.com" },
                  { l: "Phone Number *", k: "phone", t: "tel", ph: "+91 98765 43210" },
                  { l: "Company Name", k: "company", t: "text", ph: "Your company" },
                ].map(f => (
                  <div key={f.k} className="contact-form__field">
                    <label className="contact-form__label">{f.l}</label>
                    <input
                      type={f.t}
                      value={form[f.k]}
                      onChange={e => set(f.k, e.target.value)}
                      placeholder={f.ph}
                      className="contact-form__input"
                    />
                  </div>
                ))}
              </div>

              <div className="contact-form__grid contact-form__grid--3">
                <div className="contact-form__field">
                  <label className="contact-form__label">Service Needed</label>
                  <select value={form.service} onChange={e => set("service", e.target.value)} className="contact-form__input contact-form__select">
                    <option value="">Select…</option>
                    {["Web Applications", "Mobile Apps", "Business Websites", "CRM & ERP Systems", "E-Commerce Platforms", "UI/UX Design", "Not Sure Yet"].map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Budget Range</label>
                  <select value={form.budget} onChange={e => set("budget", e.target.value)} className="contact-form__input contact-form__select">
                    <option value="">Select…</option>
                    {["₹50K – ₹2L", "₹2L – ₹5L", "₹5L – ₹15L", "₹15L – ₹50L", "₹50L+"].map(b => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div className="contact-form__field">
                  <label className="contact-form__label">Timeline</label>
                  <select value={form.timeline} onChange={e => set("timeline", e.target.value)} className="contact-form__input contact-form__select">
                    <option value="">Select…</option>
                    {["ASAP (< 1 month)", "1–3 months", "3–6 months", "6+ months"].map(t => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="contact-form__field">
                <label className="contact-form__label">Project Description *</label>
                <textarea
                  value={form.message}
                  onChange={e => set("message", e.target.value)}
                  placeholder="Describe your project, key features, and any specific challenges you're trying to solve..."
                  className="contact-form__input contact-form__textarea"
                  rows={5}
                />
              </div>

              <button
                className={`btn-primary contact-form__submit ${loading ? "contact-form__submit--loading" : ""}`}
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? "Sending…" : "Send Message →"}
              </button>
              <p className="contact-form__note">
                Your details are kept confidential. We'll never share your information.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer setPage={setPage => {}} />
    </div>
  );
}
