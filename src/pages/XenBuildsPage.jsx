import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MessageSquare, FileSearch, BarChart2, TrendingUp, Brain, Link2, ArrowRight } from 'lucide-react';

const XenBuildsPage = () => {
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
            className="absolute inset-0 w-full h-full object-cover opacity-15"
            src="/images/video4.mov"
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
                <span className="font-normal text-white">Xen Builds</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/40 font-normal max-w-4xl mx-auto leading-relaxed">
                Production-grade AI systems, ready to deploy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent max-w-5xl mx-auto mb-20" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <p className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-5">XenBuilds</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="font-normal text-white">Production-Grade AI Systems</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/40 font-normal max-w-4xl mx-auto leading-relaxed">
              XenBuilds are ready-to-deploy AI systems optimized for real operations. Built for teams that need tested, production-grade capabilities without the time and complexity of custom development.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Pre-Built Systems",
                description: "Each XenBuild is a complete, tested system designed around proven use cases - conversational AI, document search, data analysis, or fundamental analysis.",
                accent: "from-cyan-500/10 to-transparent"
              },
              {
                title: "Deployment-Ready",
                description: "XenBuilds deploy into your environment and integrate with existing infrastructure - on-premise, cloud, or hybrid.",
                accent: "from-blue-500/10 to-transparent"
              },
              {
                title: "Customizable Core",
                description: "Architecture is standardized, while each build adapts to your data, workflows, and security requirements.",
                accent: "from-indigo-500/10 to-transparent"
              }
            ].map((principle) => (
              <motion.div
                key={principle.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <h3 className="text-xl font-normal text-white mb-3 group-hover:text-cyan-100 transition-colors">{principle.title}</h3>
                  <p className="text-white/40 font-normal leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent max-w-5xl mx-auto mb-20" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <p className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-5">Capabilities</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="font-normal text-white">Core Capabilities</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/40 font-normal max-w-3xl mx-auto leading-relaxed">
              Every XenBuild comes with enterprise-grade capabilities built in from day one.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Conversational AI",
                description: "Natural language interfaces for seamless human-AI interaction with context awareness and multi-turn conversations.",
                icon: MessageSquare,
                accent: "cyan"
              },
              {
                title: "Document Search & Analysis",
                description: "Semantic search and intelligent document processing for rapid information retrieval and insight extraction.",
                icon: FileSearch,
                accent: "blue"
              },
              {
                title: "Data Analysis",
                description: "Automated exploratory analysis with pattern recognition, anomaly detection, and natural language reports.",
                icon: BarChart2,
                accent: "indigo"
              },
              {
                title: "Fundamental Analysis",
                description: "Financial data processing and analysis with predictive modeling and comprehensive reporting.",
                icon: TrendingUp,
                accent: "cyan"
              },
              {
                title: "Intent Recognition",
                description: "Advanced NLP for understanding user intent and routing to appropriate systems or workflows.",
                icon: Brain,
                accent: "blue"
              },
              {
                title: "Custom Integration",
                description: "Seamless connection to your existing infrastructure, databases, and business applications.",
                icon: Link2,
                accent: "indigo"
              }
            ].map((capability, idx) => {
              const accentColors = {
                cyan: "group-hover:border-cyan-400/50 group-hover:shadow-lg group-hover:shadow-cyan-500/10",
                blue: "group-hover:border-blue-400/50 group-hover:shadow-lg group-hover:shadow-blue-500/10",
                indigo: "group-hover:border-indigo-400/50 group-hover:shadow-lg group-hover:shadow-indigo-500/10"
              };
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className={`group relative p-7 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ${accentColors[capability.accent]} overflow-hidden`}
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border transition-all duration-300 ${
                    capability.accent === 'cyan' ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' :
                    capability.accent === 'blue' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                    'bg-indigo-500/10 border-indigo-500/20 text-indigo-400'
                  }`}>
                    <capability.icon className="w-5 h-5" />
                  </div>
                    <h3 className="text-lg font-normal text-white mb-3 group-hover:text-cyan-100 transition-colors">{capability.title}</h3>
                    <p className="text-white/40 font-normal leading-relaxed text-sm">{capability.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* What You Get */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden">
        <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent max-w-5xl mx-auto mb-20" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/8 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative z-10 max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <p className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-5">Delivery</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="font-normal text-white">What You Get</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/40 font-normal max-w-3xl mx-auto leading-relaxed">
              A complete deployment with clear ownership, strong security posture, and full operational readiness.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Complete System Deployment",
                description: "Fully operational AI system deployed into your environment - cloud, on-premise, or hybrid."
              },
              {
                title: "Integration Support",
                description: "Connection to existing data sources, workflows, and tools within your organization."
              },
              {
                title: "Configuration and Tuning",
                description: "System adapted to your use case, data structure, and operational requirements."
              },
              {
                title: "Documentation and Training",
                description: "Complete operational documentation and team training to run the system independently."
              },
              {
                title: "Security and Compliance",
                description: "Systems architected to meet your security, privacy, and governance standards."
              },
              {
                title: "Ongoing Support (Optional)",
                description: "Optional maintenance, monitoring, and evolution support after deployment."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ x: 4 }}
                className="group flex gap-4 p-7 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 text-sm font-bold text-white flex-shrink-0 group-hover:bg-white/10 transition-all bg-white/5">
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="relative">
                  <h3 className="text-lg font-normal text-white mb-2 group-hover:text-cyan-100 transition-colors">{item.title}</h3>
                  <p className="text-white/40 font-normal leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
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
            Ready to deploy your AI system?
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8" />
          <p className="text-base text-white/40 font-normal mb-12 max-w-2xl mx-auto">
            Let us customize a XenBuild for your environment and launch quickly with confidence.
          </p>
          <div className="flex justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-base font-normal rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex items-center gap-2"
            >
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default XenBuildsPage;
