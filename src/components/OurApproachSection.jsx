import React from 'react';
import { motion } from 'framer-motion';

const OurApproachSection = () => {
  const approaches = [
    {
      number: "01",
      title: "Cadenced Delivery",
      description: "Outcome-driven sprints with fixed scope and explicit acceptance replace time- and headcount-based delivery.",
      gradient: "from-cyan-500 to-blue-600",
      icon: "🎯"
    },
    {
      number: "02",
      title: "Decoupled Delivery",
      description: "Ownership-first delivery with complete IP transfer, bounded support, and frictionless exit by design.",
      gradient: "from-purple-500 to-fuchsia-600",
      icon: "🔓"
    },
    {
      number: "03",
      title: "Co-Execution",
      description: "We embed domain experts into your workflows to minimize handoffs, accelerate delivery, and move AI into production faster—designed to amplify your teams, not substitute them.",
      gradient: "from-emerald-500 to-green-600",
      icon: "🤝"
    },
    {
      number: "04",
      title: "Adaptive Execution",
      description: "Delivery capacity scales by adjusting sprints, without disrupting teams—working alongside you as priorities evolve.",
      gradient: "from-orange-500 to-amber-600",
      icon: "⚡"
    }
  ];

  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8"
          />
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Approach</span>
          </h2>
        </motion.div>

        {/* Approaches Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Animated Border */}
              <motion.div
                className={`absolute -inset-[2px] bg-gradient-to-r ${approach.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Card */}
              <div className="relative h-full p-8 lg:p-10 bg-zinc-900/90 backdrop-blur-xl rounded-3xl border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300 overflow-hidden">
                {/* Background Number */}
                <div className={`absolute -top-4 -right-4 text-[180px] font-black bg-gradient-to-br ${approach.gradient} bg-clip-text text-transparent opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none`}>
                  {approach.number}
                </div>
                
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-6 opacity-50 group-hover:opacity-100"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {approach.icon}
                </motion.div>

                {/* Number Badge */}
                <div className={`inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-gradient-to-r ${approach.gradient} bg-opacity-10`}>
                  <span className={`text-2xl font-bold bg-gradient-to-r ${approach.gradient} bg-clip-text text-transparent`}>
                    {approach.number}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {approach.title}
                </h3>
                
                {/* Description */}
                <p className="text-zinc-400 leading-relaxed text-lg group-hover:text-zinc-300 transition-colors">
                  {approach.description}
                </p>
                
                {/* Hover Accent */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${approach.gradient} rounded-b-3xl`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproachSection;
