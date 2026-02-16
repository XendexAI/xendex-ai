import React from 'react';
import { motion } from 'framer-motion';

const HowWeSupportSection = () => {
  const transformations = [
    {
      challenge: {
        title: "Cost Uncertainty",
        issue: "Headcount-based pricing creates uncertainty and drift",
        icon: "💸"
      },
      solution: {
        title: "Cadenced Delivery",
        approach: "Fixed-scope sprints with clear acceptance",
        icon: "📊"
      },
      color: "cyan"
    },
    {
      challenge: {
        title: "Vendor Lock-In",
        issue: "Constraints and obscured progress",
        icon: "🔒"
      },
      solution: {
        title: "Decoupled Delivery",
        approach: "Complete ownership and frictionless exit",
        icon: "🔓"
      },
      color: "purple"
    },
    {
      challenge: {
        title: "Execution Gap",
        issue: "Clear goals without execution support",
        icon: "🎯"
      },
      solution: {
        title: "Co-Execution",
        approach: "Embedded experts amplifying teams",
        icon: "🤝"
      },
      color: "emerald"
    },
    {
      challenge: {
        title: "Team Inflexibility",
        issue: "Rigid models that stall delivery",
        icon: "⚡"
      },
      solution: {
        title: "Adaptive Execution",
        approach: "Scalable capacity that evolves",
        icon: "⚙️"
      },
      color: "orange"
    }
  ];

  const colorMap = {
    cyan: { from: '#06b6d4', to: '#3b82f6', glow: 'rgba(6, 182, 212, 0.4)' },
    purple: { from: '#a855f7', to: '#ec4899', glow: 'rgba(168, 85, 247, 0.4)' },
    emerald: { from: '#10b981', to: '#06b6d4', glow: 'rgba(16, 185, 129, 0.4)' },
    orange: { from: '#f97316', to: '#eab308', glow: 'rgba(249, 115, 22, 0.4)' }
  };

  return (
    <section className="relative py-40 bg-gray-900 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-block mb-6"
          >
            <div className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-[0.2em] uppercase">
                Transformation
              </span>
            </div>
          </motion.div>
          
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-none">
            <span className="block text-white mb-2">Challenge</span>
            <motion.span 
              className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              → Solution
            </motion.span>
          </h2>
        </motion.div>

        {/* Transformation Grid */}
        <div className="space-y-24">
          {transformations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
                {/* Challenge Side */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative group order-2 lg:order-1"
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${colorMap[item.color].glow} 0%, transparent 70%)` }}
                  />
                  
                  <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden">
                    {/* Top Badge */}
                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30">
                      <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Problem</span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 lg:p-10 pt-16">
                      {/* Icon Circle */}
                      <motion.div 
                        className="w-32 h-32 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-red-500/30"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-7xl">{item.challenge.icon}</span>
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold text-white text-center mb-4">{item.challenge.title}</h3>
                      <p className="text-zinc-400 text-center text-lg leading-relaxed">{item.challenge.issue}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Center Connector */}
                <div className="flex justify-center order-1 lg:order-2">
                  <motion.div
                    className="relative"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {/* Animated Ring */}
                    <motion.div
                      className="absolute -inset-4 rounded-full"
                      style={{ 
                        background: `conic-gradient(from 0deg, ${colorMap[item.color].from}, ${colorMap[item.color].to}, ${colorMap[item.color].from})` 
                      }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Inner Circle */}
                    <div className="relative w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center">
                      <div 
                        className="w-20 h-20 rounded-full flex items-center justify-center"
                        style={{ 
                          background: `linear-gradient(135deg, ${colorMap[item.color].from}, ${colorMap[item.color].to})` 
                        }}
                      >
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Solution Side */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="relative group order-3"
                >
                  {/* Glow Effect */}
                  <div 
                    className="absolute -inset-4 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle, ${colorMap[item.color].glow} 0%, transparent 70%)` }}
                  />
                  
                  <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl border border-zinc-800 overflow-hidden">
                    {/* Top Badge */}
                    <div 
                      className="absolute top-6 right-6 px-4 py-1.5 rounded-full border"
                      style={{ 
                        background: `linear-gradient(135deg, ${colorMap[item.color].from}15, ${colorMap[item.color].to}15)`,
                        borderColor: `${colorMap[item.color].from}50`
                      }}
                    >
                      <span 
                        className="text-xs font-bold uppercase tracking-wider"
                        style={{ color: colorMap[item.color].from }}
                      >
                        Solution
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 lg:p-10 pt-16">
                      {/* Icon Circle */}
                      <motion.div 
                        className="w-32 h-32 mx-auto mb-8 rounded-3xl flex items-center justify-center backdrop-blur-sm border"
                        style={{ 
                          background: `linear-gradient(135deg, ${colorMap[item.color].from}20, ${colorMap[item.color].to}20)`,
                          borderColor: `${colorMap[item.color].from}50`
                        }}
                        whileHover={{ rotate: [0, 10, -10, 10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <span className="text-7xl">{item.solution.icon}</span>
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold text-white text-center mb-4">{item.solution.title}</h3>
                      <p className="text-zinc-400 text-center text-lg leading-relaxed">{item.solution.approach}</p>
                    </div>
                    
                    {/* Bottom Accent */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ 
                        background: `linear-gradient(90deg, ${colorMap[item.color].from}, ${colorMap[item.color].to})` 
                      }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeSupportSection;
