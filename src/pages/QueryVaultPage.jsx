import { useState, useEffect, useRef } from "react";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Target, Brain, Shield, Users, Zap,
  Code, ArrowRight, Plus, X,
  ArrowDown,
} from 'lucide-react';

/*
 * QueryVault — Product Marketing Page
 * A Xendex AI product, built in partnership with CogniVault AI
 * Centralised Conversational System with AI Security
 * 
 * PURE MARKETING — no architecture internals exposed.
 * Sells outcomes, trust, and competitive moat without revealing how.
 */

const FONTS_LINK = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap";

if (typeof document !== "undefined" && !document.getElementById("qv-fonts")) {
  const link = document.createElement("link");
  link.id = "qv-fonts";
  link.rel = "stylesheet";
  link.href = FONTS_LINK;
  document.head.appendChild(link);
}

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function FadeIn({ children, delay = 0, className = "" }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} className={className} style={{ opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(32px)", transition: `all 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s` }}>
      {children}
    </div>
  );
}

function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, vis] = useInView();
  useEffect(() => {
    if (!vis) return;
    const isNum = !isNaN(parseInt(end));
    if (!isNum) { setCount(end); return; }
    const target = parseInt(end);
    const step = Math.max(1, Math.floor(target / (duration / 30)));
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(current);
    }, 30);
    return () => clearInterval(timer);
  }, [vis, end, duration]);
  return <span ref={ref}>{typeof count === "number" ? count : end}{suffix}</span>;
}

const QueryVaultPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="bg-gradient-to-b from-[#0a0d14] via-[#0d1117] to-[#0a0d14] min-h-screen overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-600/6 blur-[90px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-700/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-700/6 blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
        <div className="h-8 bg-gradient-to-b from-blue-500/10 to-transparent" />
      </div>
      
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#06090F", color: "#E2E8F0", minHeight: "100vh", overflowX: "hidden" }}>
        <style>{`
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
          ::selection { background: #0D9488; color: #fff; }
          .qv-glow { position: absolute; border-radius: 50%; filter: blur(120px); pointer-events: none; }
          @keyframes qv-pulse { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
          @keyframes qv-grid-fade { 0% { opacity: 0; } 100% { opacity: 0.025; } }
          @keyframes qv-slide-up { 0% { opacity: 0; transform: translateY(40px); } 100% { opacity: 1; transform: translateY(0); } }
          .qv-hero-title { animation: qv-slide-up 1s cubic-bezier(0.16,1,0.3,1) forwards; }
          .qv-hero-sub { animation: qv-slide-up 1s cubic-bezier(0.16,1,0.3,1) 0.15s forwards; opacity: 0; }
          .qv-hero-cta { animation: qv-slide-up 1s cubic-bezier(0.16,1,0.3,1) 0.3s forwards; opacity: 0; }
          .qv-hero-badges { animation: qv-slide-up 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards; opacity: 0; }
          .qv-btn { display: inline-flex; align-items: center; gap: 10px; padding: 16px 36px; border-radius: 6px; font-weight: 600; font-size: 15px; text-decoration: none; transition: all 0.25s ease; cursor: pointer; border: none; font-family: 'DM Sans', sans-serif; }
          .qv-btn-primary { background: linear-gradient(135deg, #0D9488, #0F766E); color: #fff; }
          .qv-btn-primary:hover { background: linear-gradient(135deg, #0F766E, #115E59); transform: translateY(-1px); box-shadow: 0 4px 24px rgba(13,148,136,0.3); }
          .qv-btn-outline { background: transparent; color: #0D9488; border: 1.5px solid rgba(13,148,136,0.4); }
          .qv-btn-outline:hover { background: rgba(13,148,136,0.08); border-color: #0D9488; }
          .qv-section { padding: 100px 40px; max-width: 1240px; margin: 0 auto; position: relative; }
          @media (max-width: 900px) { .qv-section { padding: 60px 20px; } .qv-grid-2 { grid-template-columns: 1fr !important; } .qv-grid-3 { grid-template-columns: 1fr !important; } .qv-grid-4 { grid-template-columns: 1fr 1fr !important; } .qv-hero-h1 { font-size: 40px !important; } .qv-compare-grid { grid-template-columns: 1fr !important; } }
          .qv-grid-bg { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px); background-size: 60px 60px; animation: qv-grid-fade 2s ease forwards; pointer-events: none; }
          .qv-feature-card { padding: 36px 32px; border-radius: 16px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); transition: all 0.35s ease; position: relative; overflow: hidden; }
          .qv-feature-card:hover { background: rgba(13,148,136,0.03); border-color: rgba(13,148,136,0.15); transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.2); }
          .qv-feature-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0; transition: opacity 0.35s; }
          .qv-feature-card:hover::before { opacity: 1; }
          .qv-faq-item { border-bottom: 1px solid rgba(255,255,255,0.05); cursor: pointer; }
          .qv-faq-item:hover { background: rgba(255,255,255,0.01); }
          .qv-logo-mark { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg, #0D9488, #14B8A6); display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 18px; color: #fff; font-family: 'Playfair Display', serif; }
          .qv-stat-num { font-family: 'Playfair Display', serif; font-weight: 900; font-size: 52px; background: linear-gradient(135deg, #0D9488, #14B8A6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; line-height: 1; }
        `}</style>

        {/* ═══════ NAVBAR ═══════ */}
        {/* <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "rgba(6,9,15,0.88)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 40px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <a href="https://xendex-ai.com" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
                <div className="qv-logo-mark" style={{ width: 30, height: 30, fontSize: 15, borderRadius: 8 }}>X</div>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#F8FAFC", letterSpacing: -0.3 }}>Xendex AI</span>
              </a>
              <div style={{ width: 1, height: 20, background: "rgba(255,255,255,0.08)" }} />
              <span style={{ fontSize: 15, fontWeight: 700, color: "#14B8A6", letterSpacing: -0.3 }}>QueryVault</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              <a href="#capabilities" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none", fontWeight: 500 }}>Capabilities</a>
              <a href="#industries" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none", fontWeight: 500 }}>Industries</a>
              <a href="#why" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none", fontWeight: 500 }}>Why QueryVault</a>
              <a href="#faq" style={{ fontSize: 13, color: "#94A3B8", textDecoration: "none", fontWeight: 500 }}>FAQ</a>
              <button className="qv-btn qv-btn-primary" style={{ padding: "10px 24px", fontSize: 13 }}>Request Demo</button>
            </div>
          </div>
        </nav> */}

        {/* ═══════ HERO ═══════ */}
        <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden" }}>
          <div className="qv-grid-bg" />
          <div className="qv-glow" style={{ width: 700, height: 700, background: "rgba(13,148,136,0.06)", top: -150, right: -250 }} />
          <div className="qv-glow" style={{ width: 500, height: 500, background: "rgba(217,119,6,0.03)", bottom: -150, left: -150 }} />

          <div style={{ maxWidth: 1240, margin: "0 auto", padding: "140px 40px 100px", position: "relative", zIndex: 2 }}>
            <div style={{ maxWidth: 760 }}>
              <div className="qv-hero-title">
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 16px", borderRadius: 100, background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.15)", marginBottom: 32 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#14B8A6", animation: "qv-pulse 2s ease infinite" }} />
                  <span style={{ fontSize: 11, fontWeight: 600, color: "#14B8A6", letterSpacing: 1.5, textTransform: "uppercase" }}>Xendex AI × CogniVault AI</span>
                </div>
                <h1 className="qv-hero-h1" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px, 5.5vw, 74px)", fontWeight: 900, lineHeight: 1.06, color: "#F8FAFC", letterSpacing: -1.5 }}>
                  Ask your data<br />anything.
                  <br /><span style={{ color: "#0D9488" }}>Safely.</span>
                </h1>
              </div>

              <p className="qv-hero-sub" style={{ fontSize: "clamp(17px, 2vw, 20px)", color: "#94A3B8", lineHeight: 1.7, maxWidth: 580, marginTop: 28 }}>
                <strong style={{ color: "#E2E8F0" }}>QueryVault</strong> turns plain English into secure database queries — powered by a proprietary SQL LLM that runs entirely inside your infrastructure. No third-party API calls. No data leaving your organisation. Ever.
              </p>

              <div className="qv-hero-cta" style={{ display: "flex", gap: 16, marginTop: 44, flexWrap: "wrap" }}>
                <div className="flex justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-base font-normal rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex items-center gap-2"
                  >
                    Request a Demo
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
                <div className="flex justify-center">
                  <motion.a
                    href="#capabilities"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-base font-normal rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex items-center gap-2"
                  >
                    See What's Possible
                    <ArrowDown className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <div className="qv-hero-badges" style={{ display: "flex", gap: 8, marginTop: 36, flexWrap: "wrap", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "#64748B", marginRight: 4 }}>Compliance-ready for</span>
                {["HIPAA", "SOX", "GDPR", "FedRAMP", "42 CFR Part 2"].map(r => (
                  <span key={r} style={{ fontSize: 10, padding: "4px 10px", borderRadius: 4, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "#94A3B8", fontWeight: 600, letterSpacing: 0.8, textTransform: "uppercase" }}>{r}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ SOCIAL PROOF BAR ═══════ */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="qv-section" style={{ padding: "56px 40px" }}>
            <div className="qv-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40 }}>
              {[
                { value: "0", suffix: "", label: "External API calls", sub: "proprietary LLM runs in-house" },
                { value: "100", suffix: "%", label: "Data sovereignty", sub: "nothing leaves your network" },
                { value: "<200", suffix: "ms", label: "Time to answer", sub: "question to secure result" },
                { value: "80", suffix: "%", label: "Lower AI costs", sub: "vs. third-party LLM APIs" },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{ textAlign: "center" }}>
                    <div className="qv-stat-num"><AnimatedCounter end={s.value} suffix={s.suffix} /></div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "#E2E8F0", marginTop: 8 }}>{s.label}</div>
                    <div style={{ fontSize: 12, color: "#64748B", marginTop: 2 }}>{s.sub}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ THE PROBLEM ═══════ */}
        <section style={{ background: "rgba(255,255,255,0.01)" }}>
          <div className="qv-section" style={{ padding: "100px 40px" }}>
            <FadeIn>
              <div className="qv-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#D97706", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>The Problem</div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#F8FAFC", lineHeight: 1.2, marginBottom: 24 }}>
                    Your teams need data.<br />Your data needs protection.
                  </h2>
                  <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.75 }}>
                    Analysts wait days for reports. Doctors can't get answers without IT. So everyone says "just add AI" — and the next thing you know, every database query is flying through a third-party API to OpenAI or Google, burning through token costs and sending your proprietary data outside your organisation.
                  </p>
                  <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.75, marginTop: 16 }}>
                    The monthly API bill grows unchecked. Your patient records, salary data, and trade secrets pass through servers you don't own. And the LLM sees your entire schema — every table, every column, every sensitive field.
                  </p>
                </div>
                <div style={{ padding: 36, borderRadius: 16, background: "rgba(225,29,72,0.03)", border: "1px solid rgba(225,29,72,0.1)" }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#F87171", letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>What happens without QueryVault</div>
                  {[
                    "Every query sends your data to a third-party LLM provider",
                    "Monthly API costs scale unpredictably — $10K, $50K, $100K+",
                    "The AI sees everything — including data your user shouldn't access",
                    "No one knows who queried what, or which records were exposed",
                    "A single prompt injection could leak sensitive data externally",
                    "You have zero control over the model, its updates, or its behaviour",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "11px 0", borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.03)" : "none" }}>
                      <span style={{ color: "#F87171", fontWeight: 700, fontSize: 13, marginTop: 2, flexShrink: 0 }}>✕</span>
                      <span style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.55 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════ CAPABILITIES ═══════ */}
        <section id="capabilities">
          <div className="qv-section">
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: 64 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#0D9488", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Capabilities</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: "#F8FAFC", marginBottom: 18, lineHeight: 1.15 }}>
                  Your own AI.<br />Your own cloud. Your rules.
                </h2>
                <p style={{ fontSize: 17, color: "#94A3B8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
                  QueryVault ships with a proprietary SQL LLM fine-tuned for your domain — deployed entirely inside your infrastructure. No API calls to OpenAI, Google, or anyone else.
                </p>
              </div>
            </FadeIn>

            <div className="qv-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {[
                { icon: "🧠", title: "Proprietary SQL LLM", desc: "Not a wrapper around ChatGPT. QueryVault runs a purpose-built, fine-tuned language model trained specifically for SQL generation on your domain. Better accuracy. No third-party dependency.", accent: "#7C3AED" },
                { icon: "🏢", title: "Runs Inside Your Cloud", desc: "The entire system — model, security engine, audit layer — deploys inside your infrastructure. Your VPC, your servers, your rules. Not a single byte of data leaves your organisation.", accent: "#0D9488" },
                { icon: "💰", title: "Predictable, Lower Costs", desc: "No per-token API fees. No surprise bills. One deployment, fixed infrastructure cost. Clients typically see 80% lower AI costs compared to third-party LLM APIs at scale.", accent: "#D97706" },
                { icon: "🔐", title: "Role-Based Data Visibility", desc: "A doctor sees patient records. A billing clerk sees only codes. A receptionist sees appointments. The model automatically adapts its output to who's asking.", accent: "#E11D48" },
                { icon: "🛡️", title: "Column-Level Security", desc: "SSNs, salaries, and sensitive fields are automatically hidden or masked based on the user's role. Not just table access — individual column control.", accent: "#2563EB" },
                { icon: "📋", title: "Complete Audit Trail", desc: "Every question, every query, every result — logged with full context. Who asked, what they saw, which policies applied. Ready for any compliance audit.", accent: "#059669" },
              ].map((f, i) => (
                <FadeIn key={i} delay={i * 0.07}>
                  <div
                    className="qv-feature-card"
                    style={{ "--accent": f.accent }}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div style={{ fontSize: 32, marginBottom: 16, filter: hoveredFeature === i ? "none" : "grayscale(0.3)", transition: "filter 0.3s" }}>{f.icon}</div>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: "#F8FAFC", marginBottom: 10 }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ THE EXPERIENCE (simulated chat) ═══════ */}
        <section style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.01)" }}>
          <div className="qv-section">
            <FadeIn>
              <div className="qv-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#0D9488", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>The Experience</div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#F8FAFC", lineHeight: 1.2, marginBottom: 24 }}>
                    It feels like magic.<br />It works like a vault.
                  </h2>
                  <p style={{ fontSize: 16, color: "#94A3B8", lineHeight: 1.75, marginBottom: 32 }}>
                    Your users see a simple chat interface. Behind it, a proprietary fine-tuned SQL model — running entirely inside your cloud — generates queries while a multi-layered security engine enforces every access policy, masks every sensitive field, and logs every interaction. No data leaves your network. No external APIs are called. Ever.
                  </p>
                  {[
                    { q: "A cardiologist asks:", a: "\"Show readmissions for my patients this quarter\" — sees only their own patients, with SSNs automatically hidden." },
                    { q: "A billing clerk asks:", a: "\"Pull diagnosis codes for claim #4521\" — sees ICD codes and dates. Clinical notes are invisible." },
                    { q: "Anyone asks about restricted records:", a: "The system responds that this data requires a separate authorization process. No hints. No metadata. Nothing." },
                  ].map((ex, i) => (
                    <FadeIn key={i} delay={i * 0.12}>
                      <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#14B8A6", marginBottom: 4 }}>{ex.q}</div>
                        <div style={{ fontSize: 14, color: "#CBD5E1", lineHeight: 1.6 }}>{ex.a}</div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Simulated chat UI */}
                <div style={{ padding: 2, borderRadius: 20, background: "linear-gradient(135deg, rgba(13,148,136,0.2), rgba(255,255,255,0.05))" }}>
                  <div style={{ borderRadius: 18, background: "#0C1017", padding: 28, minHeight: 440 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <div className="qv-logo-mark" style={{ width: 28, height: 28, fontSize: 13, borderRadius: 7 }}>Q</div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#E2E8F0" }}>QueryVault</span>
                      <div style={{ marginLeft: "auto", display: "flex", gap: 6, alignItems: "center" }}>
                        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22C55E" }} />
                        <span style={{ fontSize: 11, color: "#22C55E", fontWeight: 500 }}>Secure</span>
                      </div>
                    </div>

                    {[
                      { from: "user", text: "How many patients were readmitted within 30 days in Q4?", role: "Dr. Patel · Cardiology" },
                      { from: "system", text: "Based on your care panel, 23 patients had 30-day readmissions in Q4 2025. The top 3 reasons were heart failure (9), pneumonia (7), and post-surgical complications (4). Would you like a breakdown by month?" },
                    ].map((msg, i) => (
                      <FadeIn key={i} delay={0.5 + i * 0.4}>
                        <div style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start", marginBottom: 16 }}>
                          <div style={{
                            maxWidth: "82%",
                            padding: "14px 18px",
                            borderRadius: msg.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                            background: msg.from === "user" ? "rgba(13,148,136,0.12)" : "rgba(255,255,255,0.04)",
                            border: `1px solid ${msg.from === "user" ? "rgba(13,148,136,0.2)" : "rgba(255,255,255,0.06)"}`,
                          }}>
                            {msg.role && <div style={{ fontSize: 10, color: "#14B8A6", fontWeight: 600, marginBottom: 6, letterSpacing: 0.5 }}>{msg.role}</div>}
                            <div style={{ fontSize: 13, color: msg.from === "user" ? "#E2E8F0" : "#CBD5E1", lineHeight: 1.6 }}>{msg.text}</div>
                          </div>
                        </div>
                      </FadeIn>
                    ))}

                    <FadeIn delay={1.5}>
                      <div style={{ display: "flex", gap: 6, alignItems: "center", padding: "12px 16px", borderRadius: 10, background: "rgba(13,148,136,0.06)", border: "1px solid rgba(13,148,136,0.1)", marginTop: 8 }}>
                        <span style={{ fontSize: 12 }}>🔒</span>
                        <span style={{ fontSize: 11, color: "#14B8A6", fontWeight: 500 }}>On-prem model · Filtered to your care panel · SSN hidden · 3 policies enforced · Audit: QV-4821</span>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════ INDUSTRIES ═══════ */}
        <section id="industries">
          <div className="qv-section">
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: 60 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#0D9488", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Industries</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: "#F8FAFC" }}>
                  Built for regulated data.
                </h2>
              </div>
            </FadeIn>
            <div className="qv-grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
              {[
                { icon: "🏥", title: "Healthcare", tags: "HIPAA · 42 CFR Part 2 · State Privacy", desc: "Clinicians get instant answers about their patients. Billing sees only what coding requires. Substance abuse records are sealed — no exceptions, not even for administrators. Break-the-glass for genuine emergencies, with automatic compliance audit." },
                { icon: "🏦", title: "Financial Services", tags: "SOX · PCI-DSS · GDPR", desc: "Analysts query across portfolios without seeing restricted client data. Account numbers and SSNs are automatically masked. Cross-dataset correlation attacks are blocked by policy. Every query creates a SOX-ready audit record." },
                { icon: "🏛️", title: "Government & Defense", tags: "FedRAMP · ITAR · Clearance Levels", desc: "Multi-level clearance enforcement at the data level. Classified fields invisible to users without proper authorization. Full provenance tracking for every query. Zero-trust posture meets the highest compliance bar." },
                { icon: "📋", title: "Insurance & Legal", tags: "State Regs · PHI · PII Protection", desc: "Claims adjusters see only their assigned cases. Medical data available only in aggregate for actuarial analysis. Personally identifiable information automatically masked across all results." },
              ].map((uc, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="qv-feature-card" style={{ "--accent": "#0D9488" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                      <span style={{ fontSize: 32 }}>{uc.icon}</span>
                      <div>
                        <div style={{ fontSize: 19, fontWeight: 700, color: "#F8FAFC" }}>{uc.title}</div>
                        <div style={{ fontSize: 11, color: "#14B8A6", fontWeight: 600, letterSpacing: 0.8, marginTop: 2 }}>{uc.tags}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7 }}>{uc.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ WHY QUERYVAULT (comparison) ═══════ */}
        <section id="why" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.01)" }}>
          <div className="qv-section">
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: 60 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#D97706", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>Why QueryVault</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 700, color: "#F8FAFC" }}>
                  Not another chatbot.
                </h2>
                <p style={{ fontSize: 17, color: "#94A3B8", maxWidth: 600, margin: "16px auto 0", lineHeight: 1.7 }}>
                  Most "AI query tools" rent a model from OpenAI and wrap it in a chat UI. QueryVault deploys a purpose-built SQL model inside your cloud — security-first, cost-efficient, and entirely under your control.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="qv-compare-grid" style={{ display: "grid", gridTemplateColumns: "200px 1fr 1fr", gap: 0, borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)" }}>
                {[
                  ["", "Others", "QueryVault"],
                  ["LLM model", "Third-party API (OpenAI, etc.)", "Proprietary fine-tuned SQL model — you own it"],
                  ["Where it runs", "Provider's cloud servers", "Inside your VPC — your infrastructure, your control"],
                  ["Your data goes to", "External API on every query", "Nowhere. Stays inside your network. Always."],
                  ["Cost model", "Per-token API fees — scales unpredictably", "Fixed infrastructure cost — up to 80% lower"],
                  ["AI sees...", "Your entire database schema", "Only what this user is allowed to see"],
                  ["Security checks", "Once, at login", "On every single query, independently verified"],
                  ["Sensitive fields", "Same for everyone", "Hidden, masked, or transformed — per role, per field"],
                  ["Audit trail", "Basic logs", "Full lifecycle: question → policies → result"],
                  ["Vendor dependency", "Locked to provider's model & pricing", "You control the model, updates, and roadmap"],
                ].map((row, i) => (
                  row.map((cell, j) => (
                    <div key={`${i}-${j}`} style={{
                      padding: "14px 18px",
                      fontSize: i === 0 ? 11 : 13,
                      fontWeight: i === 0 ? 700 : j === 0 ? 600 : 400,
                      color: i === 0 ? "#14B8A6" : j === 0 ? "#E2E8F0" : j === 2 ? "#34D399" : "#94A3B8",
                      background: i === 0 ? "rgba(13,148,136,0.06)" : i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
                      letterSpacing: i === 0 ? 2.5 : 0,
                      textTransform: i === 0 ? "uppercase" : "none",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      lineHeight: 1.55,
                    }}>
                      {cell}
                    </div>
                  ))
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════ TRUST SIGNALS ═══════ */}
        <section>
          <div className="qv-section" style={{ padding: "80px 40px" }}>
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#F8FAFC" }}>
                  Enterprise trust, built in.
                </h2>
              </div>
              <div className="qv-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
                {[
                  { icon: "🧠", label: "Your own AI model", sub: "Fine-tuned SQL LLM deployed on your servers. No external calls." },
                  { icon: "🔒", label: "Total data sovereignty", sub: "Queries, schema, results — nothing touches the public internet." },
                  { icon: "📜", label: "Compliance-ready", sub: "Auto-generated reports for HIPAA, SOX, GDPR audits." },
                  { icon: "💰", label: "No API cost surprises", sub: "Fixed infrastructure. No per-token fees. Scales predictably." },
                ].map((t, i) => (
                  <FadeIn key={i} delay={i * 0.08}>
                    <div style={{ padding: 24, borderRadius: 12, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
                      <div style={{ fontSize: 28, marginBottom: 12 }}>{t.icon}</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>{t.label}</div>
                      <div style={{ fontSize: 12, color: "#64748B", lineHeight: 1.5 }}>{t.sub}</div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ═══════ FAQ ═══════ */}
        <section id="faq" style={{ borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.01)" }}>
          <div className="qv-section" style={{ maxWidth: 800 }}>
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#0D9488", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>FAQ</div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700, color: "#F8FAFC" }}>
                  Common questions
                </h2>
              </div>
            </FadeIn>
            {[
              { q: "Do you use OpenAI, Google, or any third-party LLM?", a: "No. QueryVault uses a proprietary SQL generation model that we fine-tune specifically for your data domain. It runs entirely inside your cloud infrastructure. No API calls to OpenAI, Anthropic, Google, or any external provider. Your data never leaves your network." },
              { q: "Why build your own LLM instead of using an API?", a: "Three reasons: security, cost, and control. Third-party APIs mean your queries and schema travel outside your organisation on every request. Per-token pricing scales unpredictably — we've seen enterprises hit $100K/month. And you're locked into someone else's model updates and deprecations. Our proprietary model eliminates all three problems." },
              { q: "How much can we save compared to API-based solutions?", a: "Clients typically see up to 80% lower AI costs at scale. Instead of per-token fees that grow with usage, you pay a fixed infrastructure cost. The model runs on your hardware (or your cloud VMs), so the marginal cost of each additional query is near zero." },
              { q: "Does the AI have access to our full database?", a: "No. QueryVault's security engine ensures the model only ever receives the specific tables and columns that the current user is authorized to see. Your full schema is never exposed to the model at any point — regardless of who asks." },
              { q: "Where exactly does the model run?", a: "Inside your infrastructure. Your VPC, your GPU instances, your security perimeter. We deploy the fine-tuned model, the security engine, and the audit system as a self-contained stack. Nothing is hosted by us or any third party in production." },
              { q: "What databases do you support?", a: "PostgreSQL, SQL Server, Oracle, MySQL, and any JDBC/ODBC-compatible database. QueryVault connects read-only — no schema changes required on your end." },
              { q: "How long does deployment take?", a: "A typical enterprise deployment takes 4–6 weeks, including model fine-tuning for your schema, policy configuration, identity integration, and security validation. We work alongside your compliance and IT teams throughout." },
              { q: "Who built this?", a: "QueryVault is developed by Xendex AI in partnership with CogniVault AI. It combines Xendex AI's expertise in enterprise AI agent systems with CogniVault AI's deep capabilities in intelligent information systems and data security." },
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="qv-faq-item" onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0" }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: activeFaq === i ? "#14B8A6" : "#E2E8F0", transition: "color 0.2s" }}>{faq.q}</span>
                    <span style={{ fontSize: 20, color: "#64748B", transform: activeFaq === i ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s", flexShrink: 0, marginLeft: 16 }}>+</span>
                  </div>
                  <div style={{
                    maxHeight: activeFaq === i ? 200 : 0,
                    overflow: "hidden",
                    transition: "max-height 0.4s ease, padding 0.4s ease",
                    paddingBottom: activeFaq === i ? 20 : 0,
                  }}>
                    <p style={{ fontSize: 14, color: "#94A3B8", lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ═══════ FINAL CTA ═══════ */}
        <section style={{ position: "relative", overflow: "hidden" }}>
          <div className="qv-glow" style={{ width: 700, height: 700, background: "rgba(13,148,136,0.05)", top: -200, left: "50%", transform: "translateX(-50%)" }} />
          <div className="qv-section" style={{ textAlign: "center", padding: "120px 40px 100px" }}>
            <FadeIn>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, color: "#F8FAFC", lineHeight: 1.15, marginBottom: 20 }}>
                Stop choosing between<br />access and security.
              </h2>
              <p style={{ fontSize: 17, color: "#94A3B8", maxWidth: 520, margin: "0 auto 44px", lineHeight: 1.7 }}>
                Give your teams the data access they need — powered by your own AI model, running inside your own cloud, with zero data leaving your organisation. No API bills. No vendor lock-in. No compromises.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <div className="flex justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-base font-normal rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex items-center gap-2"
                  >
                    Request a Demo
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
                <div className="flex justify-center">
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-base font-normal rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex items-center gap-2"
                  >
                    Talk to Our Team
                  </motion.a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        
      </div>
    </div>
  );
}

export default QueryVaultPage;