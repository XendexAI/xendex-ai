import React from 'react';
import { motion } from 'framer-motion';

const XenPodsPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-b from-[#0a0d14] via-[#0d1117] to-[#0a0d14] min-h-screen"
    >
      {/* Ambient background lights */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-600/6 blur-[90px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-700/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-700/6 blur-[80px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '28px 28px', opacity: 0.18 }} />
      </div>
      {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center min-h-screen">
              <div className="absolute inset-0 overflow-hidden">
                <video
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                  src="/images/video3.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
      
              <div className="relative z-10 max-w-6xl mx-auto w-full">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="text-center"
                >
                  <motion.div variants={fadeInUp}>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                      <span className="font-normal text-white">Xen Pods</span>
                      {/* <span className="font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">System</span> */}
                    </h1>
                    <p className="text-lg sm:text-xl text-white/40 font-normal max-w-4xl mx-auto leading-relaxed">
                      From raw data to clear insights
                    </p>
                  </motion.div>
      
                  {/* <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-12">
                    <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                      style={{ boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
                    >
                      Start Building
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div> */}
                </motion.div>
              </div>
            </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent max-w-5xl mx-auto mb-20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.05),transparent_50%)]" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto relative z-10"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <p className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-5">XenPods</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-[1.1]">
              <span className="font-normal text-white">Project-Based</span>
              <br />
              <span className="font-normal bg-gradient-to-r from-blue-300 via-indigo-300 to-slate-300 bg-clip-text text-transparent">AI Delivery</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/40 font-normal max-w-4xl mx-auto leading-relaxed">
              XenPods are project-based engagements designed to deliver production-ready AI systems with no handoff risk, no dependency, and complete ownership transfer.
            </p>
          </motion.div>

          {/* Key Principles */}
          <motion.div variants={fadeInUp} className="mb-40 grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fixed Scope. Fixed Cost.',
                description: 'Every engagement is bounded by a clearly defined outcome. Cost and delivery timeline are decided upfront.',
                gradient: 'from-cyan-500/10 to-transparent'
              },
              {
                title: 'No Headcount. No Retainers.',
                description: 'You pay for the system, not the hours. There are no open-ended retainers, no permanent staffing dependencies.',
                gradient: 'from-blue-500/10 to-transparent'
              },
              {
                title: 'Built to Transfer.',
                description: 'From the first day of development, systems are designed to be maintained and evolved entirely by your team.',
                gradient: 'from-indigo-500/10 to-transparent'
              }
            ].map((principle, idx) => (
              <motion.div
                key={principle.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-sm transition-all duration-500 hover:border-white/25 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-xs font-bold text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>
                  <h3 className="text-xl font-normal text-white mb-3">{principle.title}</h3>
                  <p className="text-white/40 font-normal leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Three Tiers */}
          <motion.div variants={fadeInUp} className="mb-16">
            <div className="text-center mb-16">
              <p className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-5">Engagement Models</p>
              <h3 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="font-normal text-white">Three Engagement Tiers</span>
              </h3>
              <p className="text-lg sm:text-xl text-white/40 font-normal max-w-2xl mx-auto">
                Choose the engagement model that matches your ambition and capacity
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Starter Pod */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-t-2xl" />
                
                <div className="flex items-start justify-between mb-6">
                  <span className="px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-400/30 text-xs tracking-wider text-cyan-300 font-medium">
                    TARGETED
                  </span>
                  <span className="text-2xl text-cyan-400/60">→</span>
                </div>
                
                <h4 className="text-2xl font-normal text-white mb-3">Starter Pod</h4>
                <p className="text-white/40 font-normal mb-8 leading-relaxed text-[15px]">
                  For teams building their first AI system or testing a specific use case
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <p className="text-white/40 font-normal leading-relaxed text-sm">Sprint-based execution (2-week cycles)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <p className="text-white/40 font-normal leading-relaxed text-sm">1 AI Engineer + 1 Product Specialist</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    <p className="text-white/40 font-normal leading-relaxed text-sm">Single defined outcome (e.g., conversational assistant, semantic search)</p>
                  </div>
                </div>
              </motion.div>

              {/* Scale Pod */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group relative p-10 rounded-2xl border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-blue-400/60 hover:shadow-xl hover:shadow-blue-500/20 transform scale-105"
              >
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-blue-500/20 to-transparent rounded-t-2xl" />
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-500 text-white text-xs font-bold rounded-full shadow-lg">
                  RECOMMENDED
                </div>
                
                <div className="flex items-start justify-between mb-6">
                  <span className="px-3 py-1 rounded-md bg-blue-500/20 border border-blue-400/40 text-xs tracking-wider text-blue-200 font-bold">
                    EXPANSION
                  </span>
                  <span className="text-2xl text-blue-400">↗</span>
                </div>
                
                <h4 className="text-2xl font-normal text-white mb-3">Scale Pod</h4>
                <p className="text-white/50 font-normal mb-8 leading-relaxed text-[15px]">
                  For teams expanding AI capabilities across multiple domains
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <p className="text-white/50 font-normal leading-relaxed text-sm">Quarterly cadenced execution (3-month blocks)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <p className="text-white/50 font-normal leading-relaxed text-sm">2 AI Engineers + 1 Product Specialist + 1 Delivery Manager</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    <p className="text-white/50 font-normal leading-relaxed text-sm">Multiple integrated outcomes across systems</p>
                  </div>
                </div>
              </motion.div>

              {/* Center of Excellence Pod */}
              <motion.div
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/5 to-transparent backdrop-blur-sm transition-all duration-300 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded-t-2xl" />
                
                <div className="flex items-start justify-between mb-6">
                  <span className="px-3 py-1 rounded-md bg-indigo-500/10 border border-indigo-400/30 text-xs tracking-wider text-indigo-300 font-medium">
                    STRATEGIC
                  </span>
                  <span className="text-2xl text-indigo-400/60">⇡</span>
                </div>
                
                <h4 className="text-2xl font-normal text-white mb-3">Center of Excellence</h4>
                <p className="text-white/40 font-normal mb-8 leading-relaxed text-[15px]">
                  For organizations building internal AI practices at scale
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <p className="text-white/40 font-normal leading-relaxed text-sm">Multi-track cadenced execution (6–12 month roadmap)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <p className="text-white/40 font-normal leading-relaxed text-sm">3+ AI Engineers + 2+ Product Specialists + Delivery Manager + Strategic Advisor</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    <p className="text-white/40 font-normal leading-relaxed text-sm">Organizational AI transformation with governance</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent max-w-5xl mx-auto mb-24" />
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <p className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-6">Get Started</p>
          <h2 className="text-5xl sm:text-6xl font-normal text-white mb-6 leading-tight">
            Ready to build your AI system?
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8" />
          <p className="text-base text-white/40 font-normal mb-12">
            Let's design an engagement that matches your goals and timeline.
          </p>
          <div className="flex justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-base font-normal rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default XenPodsPage;
