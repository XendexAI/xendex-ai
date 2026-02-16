import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
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

  const comparisonData = [
    {
      feature: "Delivery Model",
      starter: "Sprint-Based Execution",
      scale: "Quarterly Cadenced Execution",
      coe: "Multi-Track Cadenced Execution + Strategic Advisory"
    },
    {
      feature: "Team Composition",
      starter: "1 AI Engineer + 1 Product Specialist",
      scale: "2 AI Engineers + 1 Product Specialist + 1 Delivery Manager",
      coe: "AI Engineers (3+) + Product Specialists (2+) + Delivery Manager + Strategic Advisor"
    },
    {
      feature: "Engagement Cadence",
      starter: "2-week sprints",
      scale: "3-month blocks",
      coe: "6–12 month roadmap"
    },
    {
      feature: "Scope Type",
      starter: "Single defined outcome",
      scale: "Multiple integrated outcomes",
      coe: "Organizational AI transformation"
    },
    {
      feature: "Best For",
      starter: "Targeted systems (e.g. chatbot, search, pipeline)",
      scale: "Expanding AI capabilities across teams",
      coe: "Building internal AI practices at scale"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-900 min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 font-semibold mb-6 tracking-wider uppercase text-sm">Our Services</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-10 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                AI Delivery Models
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-3xl mx-auto font-light">
              Whether you're building your first AI system or scaling across the organization, we deliver with clarity, structure, and accountability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">Our Services</h2>
            <p className="text-xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
              Choose the delivery model that fits your needs and timeline
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* XenPods Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative p-8 bg-gradient-to-br from-cyan-900/20 via-zinc-900 to-black rounded-2xl border-2 border-cyan-500/50 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-cyan-400 mb-4">XenPods</h3>
                <p className="text-xl text-cyan-300 font-semibold mb-4">
                  Fixed-Scope AI Systems. Owned Outcomes.
                </p>
                <p className="text-zinc-300 mb-8 leading-relaxed">
                  Project-based engagements designed to deliver production-ready AI systems with no handoff risk, no dependency, and complete ownership transfer.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">✓</span>
                    <p className="text-zinc-300">Fixed scope and cost</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">✓</span>
                    <p className="text-zinc-300">No retainers or ongoing headcount</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-cyan-400 mr-2">✓</span>
                    <p className="text-zinc-300">Built for your team to maintain</p>
                  </div>
                </div>

                <Link to="/services/xenpods">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
                  >
                    Learn More →
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* XenBuilds Card */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative p-8 bg-gradient-to-br from-purple-900/20 via-zinc-900 to-black rounded-2xl border-2 border-purple-500/50 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-4xl font-black text-purple-400 mb-4">XenBuilds</h3>
                <p className="text-xl text-purple-300 font-semibold mb-4">
                  Ready-to-Deploy AI Systems.
                </p>
                <p className="text-zinc-300 mb-8 leading-relaxed">
                  Production-grade AI systems optimized for real operations. Tested, proven use cases without the time and complexity of custom development.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <p className="text-zinc-300">Pre-built and tested systems</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <p className="text-zinc-300">Deploy into your environment</p>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-400 mr-2">✓</span>
                    <p className="text-zinc-300">Customizable to your needs</p>
                  </div>
                </div>

                <Link to="/services/xenbuilds">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                  >
                    Learn More →
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Build AI Systems That Matter?
          </h2>
          <p className="text-xl text-zinc-300 mb-10">
            Let's design a delivery model that fits your goals, timeline, and team structure.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xl font-bold rounded-xl shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
          >
            Get Started
          </motion.a>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
