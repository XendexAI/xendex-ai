import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Rocket, Target, Brain, Shield, Users, Zap,
  Code, ArrowRight, Plus, X,
} from 'lucide-react';

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } }
  };
  const [openIdx, setOpenIdx] = useState(null);
  const members = [
    { name: 'Ramnath T.', role: 'Chief Executive Officer', bio: 'Sets the mission and owns accountability across every client engagement. Obsessed with outcomes over optics.', initial: 'R', accent: '#3b82f6', glowColor: 'rgba(59,130,246,0.18)' },
    { name: 'Arjun S.', role: 'Chief Technology Officer', bio: 'Architects the AI systems. Deep in LLMs, inference, and production-grade infrastructure that actually holds at scale.', initial: 'A', accent: '#06b6d4', glowColor: 'rgba(6,182,212,0.18)' },
    { name: 'Divya M.', role: 'Chief Operating Officer', bio: 'Runs delivery. Keeps every project on scope, on time, and handed off cleanly — no exceptions.', initial: 'D', accent: '#8b5cf6', glowColor: 'rgba(139,92,246,0.18)' },
    { name: 'Kiran P.', role: 'Head of Delivery', bio: "The client's closest partner from kickoff to launch. Translates business needs into what engineering actually builds.", initial: 'K', accent: '#10b981', glowColor: 'rgba(16,185,129,0.18)' },
  ];
  const expertise = [
    { title: 'AI Engineers', description: 'Deep expertise in LLMs, inference optimization, and production-grade architectures built to scale.', icon: Code, color: 'text-blue-400', iconBg: 'bg-blue-500/10', iconBorder: 'border-blue-500/20' },
    { title: 'Product Leaders', description: 'Built products used by millions. We know what production actually means — and what it costs when it fails.', icon: Rocket, color: 'text-cyan-400', iconBg: 'bg-cyan-500/10', iconBorder: 'border-cyan-500/20' },
    { title: 'Enterprise Operators', description: "Years deploying systems across regulated industries globally. We know the compliance, governance, and ops layers cold.", icon: Shield, color: 'text-indigo-400', iconBg: 'bg-indigo-500/10', iconBorder: 'border-indigo-500/20' }
  ];
  const marqueeItems = ['Production-Ready','Enterprise-Grade','Team-Owned','Scalable by Design','Measurable Outcomes','Frontier Models','Always Evolving','Built to Last'];

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

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/xendex.webp')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/50 via-transparent to-[#0a0d14]" />
        </div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="text-center">
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span className="text-xs font-normal text-blue-400/80 tracking-widest uppercase">About Xendex AI</span>
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-6xl sm:text-7xl lg:text-[90px] font-normal text-white leading-[1.05] mb-8 tracking-tight">
              We Build.<br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">Not Experiment.</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-white/40 font-normal max-w-2xl mx-auto leading-relaxed mb-20">
              AI systems that deliver measurable business outcomes. Owned by your team. Engineered for enterprise scale. Built to last.
            </motion.p>
            <motion.div variants={fadeInUp} className="relative overflow-hidden border-y border-white/[0.05] py-4">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-8 mx-8 text-xs font-normal tracking-widest uppercase text-white/20">
                    {item}<span className="w-1 h-1 rounded-full bg-blue-500/30 flex-shrink-0" />
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <div className="w-px h-14 bg-gradient-to-b from-blue-500/40 to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* MISSION */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer}>
              <motion.p variants={fadeInUp} className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-6">Our Mission</motion.p>
              <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-normal text-white leading-tight mb-10">
                Enterprise AI that actually works
              </motion.h2>
              <motion.div variants={fadeInUp} className="relative pl-6 mb-10">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-500/20 to-transparent" />
                <p className="text-xl font-normal text-white/60 leading-relaxed">
                  "The gap between proof-of-concept and production is where most AI projects die. We close that gap."
                </p>
              </motion.div>
              <motion.p variants={fadeInUp} className="text-base text-white/40 font-normal leading-relaxed mb-4">
                Enterprise AI isn't about the latest model. It's about systems that work — systems your teams understand, systems that scale without drama.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-base text-white/40 font-normal leading-relaxed">
                We partner with enterprises to build AI that's owned, understood, and continuously evolved by your people — not locked inside a vendor's black box.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer} className="grid grid-cols-2 gap-px bg-white/5 rounded-2xl overflow-hidden">
              {[
                { icon: Rocket, color: 'text-blue-400', iconBg: 'bg-blue-500/10', iconBorder: 'border-blue-500/20', topLine: 'via-blue-500/40', label: 'Production-Grade', sub: 'No proof-of-concept theater. Real systems your ops can depend on.' },
                { icon: Users, color: 'text-cyan-400', iconBg: 'bg-cyan-500/10', iconBorder: 'border-cyan-500/20', topLine: 'via-cyan-500/40', label: 'Team-Owned', sub: 'Handoff is built into the architecture. Your team runs it end-to-end.' },
                { icon: Zap, color: 'text-indigo-400', iconBg: 'bg-indigo-500/10', iconBorder: 'border-indigo-500/20', topLine: 'via-indigo-500/40', label: 'Always Evolving', sub: 'We evolve your stack as models and business needs shift beneath it.' },
                { icon: Shield, color: 'text-violet-400', iconBg: 'bg-violet-500/10', iconBorder: 'border-violet-500/20', topLine: 'via-violet-500/40', label: 'Full Visibility', sub: 'No black boxes. Clear scope, clear accountability at every stage.' },
                { icon: Target, color: 'text-amber-400', iconBg: 'bg-amber-500/10', iconBorder: 'border-amber-500/20', topLine: 'via-amber-500/40', label: 'Outcome-Aligned', sub: 'ROI is the only metric that matters. Everything is built around it.' },
                { icon: Brain, color: 'text-emerald-400', iconBg: 'bg-emerald-500/10', iconBorder: 'border-emerald-500/20', topLine: 'via-emerald-500/40', label: 'Frontier Models', sub: 'State-of-the-art AI paired with battle-tested enterprise architecture.' }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div key={idx} variants={fadeInUp} className="group relative bg-[#0d1117] p-6 hover:bg-[#0f1520] transition-colors duration-300 overflow-hidden">
                    <div className={`absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent ${item.topLine} to-transparent`} />
                    <div className={`w-9 h-9 rounded-xl ${item.iconBg} border ${item.iconBorder} flex items-center justify-center mb-4`}>
                      <ItemIcon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <p className="text-sm font-normal text-white mb-1.5">{item.label}</p>
                    <p className="text-xs text-white/35 font-normal leading-relaxed">{item.sub}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BUILT DIFFERENT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer} className="relative border border-white/5 rounded-2xl bg-white/[0.02] overflow-hidden p-12 sm:p-20">
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-blue-500/30 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/30 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500/30 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-blue-500/30 rounded-br-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.p variants={fadeInUp} className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-6">Built Different</motion.p>
                <motion.h2 variants={fadeInUp} className="text-4xl sm:text-5xl font-normal text-white leading-tight mb-8">
                  We started because enterprise AI implementations were failing
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-base text-white/40 font-normal leading-relaxed mb-4">
                  Projects got stuck between proof-of-concept and production. Teams inherited black boxes they couldn't operate, maintain, or evolve.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-base text-white/40 font-normal leading-relaxed">
                  So we built a different way — systems designed for your teams to own, architectures that scale, and processes that keep pace with frontier models.
                </motion.p>
              </div>
              <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden">
                {[
                  { stat: '3 weeks', label: 'Average time to first production deployment' },
                  { stat: '100%', label: 'Of clients operate their own systems post-handoff' },
                  { stat: '0', label: 'Black-box systems delivered. Ever.' },
                  { stat: '∞', label: 'Continued evolution support after launch' }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={fadeInUp} className="bg-[#0d1117] p-6 hover:bg-[#0f1520] transition-colors duration-200">
                    <div className="text-3xl font-normal text-white mb-2">{item.stat}</div>
                    <div className="text-xs text-white/30 font-normal leading-snug">{item.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer} className="grid lg:grid-cols-[1fr_1.4fr] gap-20 items-start">
            <div>
              <motion.p variants={fadeInUp} className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-6">The Team</motion.p>
              <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-normal text-white leading-tight mb-8">
                Built by<br />builders
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-base text-white/40 font-normal leading-relaxed">
                Engineers, product leaders, and AI researchers who've shipped at enterprise scale. We don't advise from the sidelines — we build alongside you.
              </motion.p>
            </div>
            <motion.div variants={staggerContainer} className="space-y-px bg-white/5 rounded-2xl overflow-hidden">
              {expertise.map((role, idx) => {
                const RoleIcon = role.icon;
                return (
                  <motion.div key={idx} variants={fadeInUp} className="group bg-[#0d1117] p-8 hover:bg-[#0f1520] transition-colors duration-300">
                    <div className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${role.iconBg} border ${role.iconBorder} flex items-center justify-center`}>
                        <RoleIcon className={`w-6 h-6 ${role.color}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-normal text-white mb-2">{role.title}</h3>
                        <p className="text-sm text-white/40 font-normal leading-relaxed">{role.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer} className="mb-16">
            <motion.p variants={fadeInUp} className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-5">The Team</motion.p>
            <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-normal text-white leading-tight">
              The people behind
              <span className="text-white/30"> every build.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-6 text-base text-white/35 font-normal max-w-xl">
              A focused team with deep roots in AI engineering, enterprise product, and global operations.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {members.map((member, idx) => {
              const isOpen = openIdx === idx;
              return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
                className="relative rounded-2xl bg-[#080b12] border overflow-hidden transition-colors duration-300 h-[360px]"
                style={{ borderColor: isOpen ? `${member.accent}40` : 'rgba(255,255,255,0.06)' }}
              >
                {/* ── AVATAR STAGE (always visible) ── */}
                <div className="absolute inset-0 flex flex-col">
                  {/* Dot texture */}
                  <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  {/* Bottom glow */}
                  <div className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: `radial-gradient(ellipse 90% 60% at 50% 110%, ${member.glowColor} 0%, transparent 70%)`, opacity: isOpen ? 0.4 : 0.7 }}
                  />
                  {/* Monogram — centred in upper portion */}
                  <div className="flex-1 flex items-center justify-center">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center border text-4xl font-normal"
                      style={{
                        background: `radial-gradient(circle at 40% 35%, ${member.glowColor.replace('0.18', '0.35')}, transparent 65%), #0d1117`,
                        borderColor: `${member.accent}30`,
                        color: member.accent,
                      }}
                    >
                      {member.initial}
                    </div>
                  </div>
                  {/* Name + toggle button row pinned to bottom */}
                  <div className="relative z-10 flex items-center justify-between px-6 pb-6 pt-4">
                    <div>
                      <p className="text-[10px] font-normal tracking-[0.18em] uppercase mb-1" style={{ color: `${member.accent}99` }}>{member.role}</p>
                      <h3 className="text-lg font-normal text-white leading-snug">{member.name}</h3>
                    </div>
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300"
                      style={{
                        borderColor: `${member.accent}50`,
                        background: isOpen ? member.accent : 'transparent',
                        color: isOpen ? '#000' : member.accent,
                      }}
                    >
                      {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* ── REVEAL PANEL (slides up from bottom on click) ── */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ y: '100%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '100%' }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-x-0 bottom-0 z-20 rounded-b-2xl px-6 py-7 flex flex-col"
                      style={{ background: `linear-gradient(160deg, #0d1321 0%, #080d18 100%)`, borderTop: `1px solid ${member.accent}25` }}
                    >
                      {/* Close */}
                      <button
                        onClick={() => setOpenIdx(null)}
                        className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                        style={{ color: `${member.accent}80` }}
                      >
                        <X className="w-4 h-4" />
                      </button>
                      {/* Name */}
                      <h3 className="text-lg font-normal text-white mb-1 pr-8">{member.name}</h3>
                      {/* Role pill */}
                      <span
                        className="inline-block text-[10px] font-normal tracking-[0.16em] uppercase px-3 py-1 rounded-full mb-5 w-fit"
                        style={{ background: `${member.accent}15`, color: member.accent, border: `1px solid ${member.accent}30` }}
                      >
                        {member.role}
                      </span>
                      {/* Bio */}
                      <p className="text-sm text-white/50 font-normal leading-relaxed">{member.bio}</p>
                      {/* Accent line at bottom */}
                      <div className="mt-6 h-px w-full rounded-full" style={{ background: `linear-gradient(90deg, ${member.accent}50, transparent)` }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-32 max-w-4xl mx-auto" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} variants={staggerContainer} className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p variants={fadeInUp} className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-6">Get Started</motion.p>
          <motion.h2 variants={fadeInUp} className="text-5xl sm:text-6xl font-normal text-white mb-6">
            Ready to build real AI?
          </motion.h2>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8" />
          <motion.p variants={fadeInUp} className="text-base text-white/40 font-normal mb-12">
            Let's talk about what AI ownership means for your organization.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-base font-normal rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex items-center gap-2">
              Schedule a Conversation
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default AboutPage;
