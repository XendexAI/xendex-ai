import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, Shield } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ fullName: '', workEmail: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ fullName: '', workEmail: '', company: '', message: '' });
      setSubmitted(false);
    }, 6000);
  };

  const inputBase = 'w-full px-5 py-4 rounded-xl text-white font-normal text-base bg-white/[0.04] border transition-all duration-300 outline-none placeholder:text-white/20 resize-none';
  const inputFocused = (field) => focusedField === field
    ? 'border-blue-500/50 bg-white/[0.06] shadow-[0_0_0_3px_rgba(59,130,246,0.08)]'
    : 'border-white/[0.08] hover:border-white/[0.14]';

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };
  const stagger = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } } };

  const nextSteps = [
    { label: 'We review your message',  sub: 'Within a few hours of receiving it.' },
    { label: 'We schedule a call',       sub: 'A focused 30-min intro — no sales pitch.' },
    { label: 'We scope your system',     sub: 'Clear outcomes, fixed scope, full ownership.' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-gradient-to-b from-[#0a0d14] via-[#0d1117] to-[#0a0d14] overflow-hidden"
    >
      {/* Ambient background lights */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-600/6 blur-[90px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-700/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.18 }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">

        {/* Hero Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full"
        >
          <motion.p variants={fadeInUp} className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-5">Contact</motion.p>
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl lg:text-7xl font-normal text-white leading-tight mb-6">
            Let's talk about
            <br />
            <span className="text-white/30">what you're building.</span>
          </motion.h1>
          <motion.div variants={fadeInUp} className="h-px w-16 bg-gradient-to-r from-blue-400 to-transparent mb-6" />
          <motion.p variants={fadeInUp} className="text-base text-white/35 font-normal max-w-lg">
            No demos. No decks. Just a direct conversation about your AI goals and whether we're the right team to build them.
          </motion.p>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent max-w-7xl mx-auto w-full" />

        {/* Main layout */}
        <div className="flex-1 px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start"
              >
                {/* LEFT — Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <motion.div variants={fadeInUp}>
                      <label className="block text-xs font-normal text-white/40 tracking-widest uppercase mb-3">Full Name</label>
                      <input
                        type="text" name="fullName" value={formData.fullName} onChange={handleChange}
                        onFocus={() => setFocusedField('fullName')} onBlur={() => setFocusedField(null)}
                        placeholder="Your name" required
                        className={`${inputBase} ${inputFocused('fullName')}`}
                      />
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <label className="block text-xs font-normal text-white/40 tracking-widest uppercase mb-3">Work Email</label>
                      <input
                        type="email" name="workEmail" value={formData.workEmail} onChange={handleChange}
                        onFocus={() => setFocusedField('workEmail')} onBlur={() => setFocusedField(null)}
                        placeholder="you@company.com" required
                        className={`${inputBase} ${inputFocused('workEmail')}`}
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={fadeInUp}>
                    <label className="block text-xs font-normal text-white/40 tracking-widest uppercase mb-3">Company</label>
                    <input
                      type="text" name="company" value={formData.company} onChange={handleChange}
                      onFocus={() => setFocusedField('company')} onBlur={() => setFocusedField(null)}
                      placeholder="Your company name"
                      className={`${inputBase} ${inputFocused('company')}`}
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <label className="block text-xs font-normal text-white/40 tracking-widest uppercase mb-3">What are you building?</label>
                    <textarea
                      name="message" value={formData.message} onChange={handleChange}
                      onFocus={() => setFocusedField('message')} onBlur={() => setFocusedField(null)}
                      placeholder="Describe the problem you're solving and what a successful outcome looks like..."
                      rows={6} required
                      className={`${inputBase} ${inputFocused('message')}`}
                    />
                  </motion.div>

                  <motion.div variants={fadeInUp} className="pt-2">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="group px-10 py-5 bg-white/5 text-white text-base font-normal rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex items-center gap-3"
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.button>
                    <p className="text-xs font-normal text-white/20 mt-4">We respond within 24 hours.</p>
                  </motion.div>
                </motion.form>

                {/* RIGHT — What happens next */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:sticky lg:top-32"
                >
                  {/* Header */}
                  <div className="mb-12">
                    <p className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-4">After you send this</p>
                    <h2 className="text-4xl font-normal text-white leading-snug">
                      What happens
                      <span className="text-white/25"> next.</span>
                    </h2>
                  </div>

                  {/* Timeline */}
                  <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute left-[17px] top-9 h-[calc(100%-72px)] w-px bg-gradient-to-b from-blue-500/25 via-white/[0.05] to-transparent" />

                    <div>
                      {nextSteps.map((step, idx) => {
                        const dotStyles = [
                          'bg-blue-500/15 border-blue-500/35 text-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.18)]',
                          'bg-cyan-500/15 border-cyan-500/35 text-cyan-400 shadow-[0_0_14px_rgba(6,182,212,0.18)]',
                          'bg-indigo-500/15 border-indigo-500/35 text-indigo-400 shadow-[0_0_14px_rgba(99,102,241,0.18)]',
                        ][idx];
                        return (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.42 + idx * 0.13, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative flex gap-6 ${idx < nextSteps.length - 1 ? 'pb-10' : ''}`}
                          >
                            {/* Numbered dot */}
                            <div className={`relative z-10 flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center text-xs font-normal tracking-wide ${dotStyles}`}>
                              0{idx + 1}
                            </div>
                            {/* Text */}
                            <div className="pt-1">
                              <p className="text-base font-normal text-white mb-2">{step.label}</p>
                              <p className="text-sm font-normal text-white/35 leading-relaxed">{step.sub}</p>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Privacy note */}
                  <div className="mt-12 pt-8 border-t border-white/[0.05] flex items-start gap-3">
                    <Shield className="w-3.5 h-3.5 text-white/20 flex-shrink-0 mt-0.5" />
                    <p className="text-xs font-normal text-white/22 leading-relaxed">
                      Your information is kept private and never shared. We only use it to respond to your inquiry.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              /* Success state */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl mx-auto text-center py-28"
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center mx-auto mb-10"
                >
                  <CheckCircle2 className="w-9 h-9 text-emerald-400" />
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                  className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-5">
                  Message received
                </motion.p>
                <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="text-5xl font-normal text-white mb-5 leading-tight">
                  We'll be in touch.
                </motion.h2>
                <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-transparent mx-auto mb-6" />
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                  className="text-base font-normal text-white/35 leading-relaxed">
                  Our team has your message and will respond within 24 hours — usually much sooner. Expect a short, direct reply.
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
