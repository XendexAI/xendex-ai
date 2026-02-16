import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
              <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-4xl mx-auto leading-relaxed">
                Production-grade AI systems, ready to deploy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <p className="text-xs tracking-[0.28em] text-blue-200/80 uppercase mb-4">XenBuilds</p>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="font-normal text-white">Production-Grade AI Systems</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
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
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">{principle.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1017]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="font-normal text-white">Core Capabilities</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Every XenBuild comes with enterprise-grade capabilities built in from day one.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Conversational AI",
                description: "Natural language interfaces for seamless human-AI interaction with context awareness and multi-turn conversations.",
                icon: "💬",
                accent: "cyan"
              },
              {
                title: "Document Search & Analysis",
                description: "Semantic search and intelligent document processing for rapid information retrieval and insight extraction.",
                icon: "📄",
                accent: "blue"
              },
              {
                title: "Data Analysis",
                description: "Automated exploratory analysis with pattern recognition, anomaly detection, and natural language reports.",
                icon: "📊",
                accent: "indigo"
              },
              {
                title: "Fundamental Analysis",
                description: "Financial data processing and analysis with predictive modeling and comprehensive reporting.",
                icon: "💹",
                accent: "cyan"
              },
              {
                title: "Intent Recognition",
                description: "Advanced NLP for understanding user intent and routing to appropriate systems or workflows.",
                icon: "🧠",
                accent: "blue"
              },
              {
                title: "Custom Integration",
                description: "Seamless connection to your existing infrastructure, databases, and business applications.",
                icon: "🔗",
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
                    <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{capability.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-100 transition-colors">{capability.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">{capability.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d1017]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="font-normal text-white">What You Get</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-100 transition-colors">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight">
            <span className="font-normal text-white">Ready to Deploy</span>
            <br />
            <span className="font-normal bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">Your AI System?</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let us customize a XenBuild for your environment and launch quickly with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/50 transition-all overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.a>
            <motion.a
              href="#learn-more"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-5 border border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 transition-all"
            >
              Learn More
            </motion.a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default XenBuildsPage;
