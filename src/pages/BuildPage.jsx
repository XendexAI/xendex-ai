import React from 'react';
import { motion } from 'framer-motion';

const BuildPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-brand-secondary-darker">
      {/* Hero Section with Dark Background */}
      <section className="relative bg-gradient-to-br from-brand-secondary-darker via-brand-secondary-dark to-brand-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,102,255,0.3),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,102,255,0.2),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Building Proprietary<br />Intelligence
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl text-brand-gray-300 mb-10 leading-relaxed"
            >
              Turing Intelligence helps enterprises move beyond pilots by co-creating real-world AI systems alongside their teams. We don't hand off decks. We build alongside you.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-brand-primary text-white text-lg font-semibold rounded-lg hover:bg-brand-primary-dark transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Talk to a Turing Strategist
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>

            {/* Trusted by logos */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 pt-16 border-t border-brand-gray-700"
            >
              <p className="text-sm text-brand-gray-400 mb-8 uppercase tracking-wider">Trusted by Industry Leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold">Disney</div>
                <div className="text-2xl font-bold">Pepsi</div>
                <div className="text-2xl font-bold">Reddit</div>
                <div className="text-2xl font-bold">Volvo</div>
                <div className="text-2xl font-bold">Dell</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Help You Solve */}
      <section className="py-20 bg-brand-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What We Help You Solve
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-brand-gray-300 max-w-4xl mx-auto leading-relaxed">
              Whether you need an agentic workflow, a fine-tuned model, or an entire AI-enabled product, we help you move from strategy to working system—while avoiding the biggest pitfalls—fast.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {[
              "Your team has a clear goal, but needs execution support.",
              "You've validated the opportunity, but internal resources are blocked.",
              "You want to ship AI systems without vendor lock-in or process bloat.",
              "You need a partner who understands both model behavior and business impact."
            ].map((text, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-brand-gray-900/50 to-brand-gray-800/50 border border-brand-gray-800 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold">
                  ✓
                </div>
                <p className="text-lg text-brand-gray-300">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 p-8 bg-brand-primary-50 rounded-2xl max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-brand-primary text-white flex items-center justify-center text-2xl font-bold">
                  !
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-brand-primary font-semibold mb-2">Enterprise Insight</h3>
                <p className="text-lg text-white">
                  <strong>43%</strong> of enterprise leaders say their past AI initiatives failed to meet expectations—often because strategy and execution weren't connected.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Help You Build */}
      <section className="py-20 bg-gradient-to-b from-brand-gray-900/50 to-brand-secondary-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-white mb-6">
              How We Help You Build
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-brand-gray-300 max-w-3xl mx-auto">
              Our process is designed to prove business value early—and scale what works.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Prototype fast",
                description: "Test use case feasibility and early ROI before committing to a full build.",
                number: "01"
              },
              {
                title: "Co-create with your team",
                description: "We embed experts inside your workflows to reduce handoffs and increase speed.",
                number: "02"
              },
              {
                title: "Engineer for resilience",
                description: "From model integration to system reliability, we build with production in mind.",
                number: "03"
              },
              {
                title: "Make it yours",
                description: "You retain control of code, IP, and direction—we're here to accelerate, not replace.",
                number: "04"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative p-8 rounded-2xl bg-gray-900/70 backdrop-blur-sm border-2 border-brand-primary/50 hover:border-brand-primary hover:shadow-2xl hover:shadow-brand-primary/30 transition-all duration-500 group overflow-hidden"
              >
                {/* Animated Wave Grid */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(0,102,255,0.1) 1px, transparent 1px),
                                       linear-gradient(to bottom, rgba(0,102,255,0.1) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px'
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '40px 40px'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>

                {/* HUGE Animated Gradient Blob */}
                <motion.div
                  className="absolute w-full h-full rounded-full blur-2xl"
                  style={{
                    background: [
                      'linear-gradient(135deg, rgba(0, 102, 255, 0.7), rgba(6, 182, 212, 0.7))',
                      'linear-gradient(135deg, rgba(6, 182, 212, 0.7), rgba(139, 92, 246, 0.7))',
                      'linear-gradient(135deg, rgba(139, 92, 246, 0.7), rgba(236, 72, 153, 0.7))',
                      'linear-gradient(135deg, rgba(59, 130, 246, 0.7), rgba(16, 185, 129, 0.7))'
                    ][index]
                  }}
                  animate={{
                    x: ['-40%', '40%', '-40%'],
                    y: ['-30%', '50%', '-30%'],
                    scale: [1, 1.8, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6 + index,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Second Blob for depth */}
                <motion.div
                  className="absolute w-3/4 h-3/4 rounded-full blur-3xl"
                  style={{
                    background: [
                      'radial-gradient(circle, rgba(236, 72, 153, 0.6), transparent)',
                      'radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent)',
                      'radial-gradient(circle, rgba(16, 185, 129, 0.6), transparent)',
                      'radial-gradient(circle, rgba(249, 115, 22, 0.6), transparent)'
                    ][index]
                  }}
                  animate={{
                    x: ['60%', '-30%', '60%'],
                    y: ['40%', '-20%', '40%'],
                    scale: [1.3, 0.7, 1.3],
                  }}
                  transition={{
                    duration: 7 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Animated Particles with BRIGHT colors */}
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      background: [
                        '#00FFFF',  // Bright cyan
                        '#FF00FF',  // Bright magenta
                        '#00FF80',  // Bright green
                        '#FF8000'   // Bright orange
                      ][index],
                      left: `${(i * 7)}%`,
                      boxShadow: `0 0 15px ${[
                        '#00FFFF',
                        '#FF00FF',
                        '#00FF80',
                        '#FF8000'
                      ][index]}`
                    }}
                    animate={{
                      y: ['-20%', '150%'],
                      x: [0, Math.sin(i) * 80],
                      opacity: [0, 1, 1, 0],
                      scale: [0, 2, 1.5, 0],
                    }}
                    transition={{
                      duration: 2.5 + (i * 0.15),
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}

                <div className="absolute top-4 right-4 text-7xl font-bold text-brand-gray-800/30 group-hover:text-brand-primary/10 transition-colors">
                  {item.number}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-brand-gray-300 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI Maturity Assessment */}
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-primary-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Is Your Organization Set Up to Deliver AI Systems?
            </h2>
            <p className="text-xl text-brand-primary-100 mb-10 leading-relaxed">
              Even the best AI strategy can fall short without the infrastructure, alignment, and technical capacity to execute.
            </p>
            <p className="text-lg text-brand-primary-100 mb-10">
              Use our readiness assessment to benchmark how well your organization is positioned to go from roadmap to production—and what it takes to build systems that scale.
            </p>
            <a
              href="#assessment"
              className="inline-flex items-center px-8 py-4 bg-brand-gray-900/50 backdrop-blur-sm text-white border border-brand-gray-800 text-lg font-semibold rounded-lg hover:bg-brand-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Take the AI Maturity Assessment
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* What Makes Our Build Approach Different */}
      <section className="py-20 bg-brand-secondary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What Makes Our Build Approach Different
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Speed-to-Value",
                description: "We build in weeks—not quarters. Turing pods move fast without compromising quality."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Built Around KPIs",
                description: "We define what success looks like—then build to it, measuring from day one."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                ),
                title: "No Lock-In",
                description: "We work within your environment and workflows. You own your systems, code, and roadmap."
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                ),
                title: "From Prototype to Production",
                description: "We don't stop at feasibility—we scale what works. Real outcomes, not just demos."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group text-center p-8 rounded-2xl bg-gray-900/60 backdrop-blur-sm border-2 border-cyan-500/40 hover:border-cyan-400 hover:bg-gray-900/80 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 relative overflow-hidden\"
              >
                {/* ROTATING Gradient Cone */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: [
                      'conic-gradient(from 0deg, rgba(0, 255, 255, 0.5), rgba(0, 102, 255, 0.5), rgba(0, 255, 255, 0.5))',
                      'conic-gradient(from 0deg, rgba(255, 0, 255, 0.5), rgba(139, 92, 246, 0.5), rgba(255, 0, 255, 0.5))',
                      'conic-gradient(from 0deg, rgba(0, 255, 128, 0.5), rgba(16, 185, 129, 0.5), rgba(0, 255, 128, 0.5))',
                      'conic-gradient(from 0deg, rgba(255, 128, 0, 0.5), rgba(249, 115, 22, 0.5), rgba(255, 128, 0, 0.5))'
                    ][index]
                  }}
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10 + index * 2,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* HUGE Pulsing Center */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full"
                  style={{
                    background: [
                      'radial-gradient(circle, rgba(0, 255, 255, 0.8), transparent)',
                      'radial-gradient(circle, rgba(255, 0, 255, 0.8), transparent)',
                      'radial-gradient(circle, rgba(0, 255, 128, 0.8), transparent)',
                      'radial-gradient(circle, rgba(255, 128, 0, 0.8), transparent)'
                    ][index]
                  }}
                  animate={{
                    scale: [1, 2.2, 1],
                    opacity: [0.3, 0.9, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Energy Rings Expanding */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-2xl border-4"
                    style={{
                      borderColor: [
                        'rgba(0, 255, 255, 0.8)',
                        'rgba(255, 0, 255, 0.8)',
                        'rgba(0, 255, 128, 0.8)',
                        'rgba(255, 128, 0, 0.8)'
                      ][index]
                    }}
                    animate={{
                      scale: [1, 1.6],
                      opacity: [0.9, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.6,
                      ease: "easeOut"
                    }}
                  />
                ))}

                <motion.div
                  className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 text-white mb-6 relative z-10"
                  animate={{
                    boxShadow: [
                      '0 0 30px rgba(0, 255, 255, 0.8)',
                      '0 0 60px rgba(0, 102, 255, 1)',
                      '0 0 30px rgba(0, 255, 255, 0.8)'
                    ]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3 relative z-10 drop-shadow-lg">{item.title}</h3>
                <p className="text-zinc-200 leading-relaxed relative z-10 drop-shadow-md">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-brand-gray-900 via-brand-secondary-dark to-brand-secondary-darker text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Move from Roadmap to Real-World Outcomes?
            </h2>
            <p className="text-xl text-brand-gray-300 mb-10 leading-relaxed">
              You've already validated the opportunity. Now it's time to build the systems that make it real—without delays, lock-in, or handoff risk. Let's work together to move from POCs to production.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-brand-primary text-white text-lg font-semibold rounded-lg hover:bg-brand-primary-dark transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Talk to a Turing Strategist
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BuildPage;