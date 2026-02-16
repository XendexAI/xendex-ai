import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FiveVsSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const vPrinciples = [
    { 
      num: "01", 
      title: "Value", 
      desc: "Measured business impact delivered every sprint.", 
      gradient: "from-cyan-500 to-blue-600",
      detail: "Tangible outcomes that advance your objectives"
    },
    { 
      num: "02", 
      title: "Velocity", 
      desc: "Built in weeks, not quarters with disciplined speed.", 
      gradient: "from-amber-500 to-orange-600",
      detail: "Rapid iteration from prototype to production"
    },
    { 
      num: "03", 
      title: "Versatility", 
      desc: "Deep capability across data, AI, and delivery.", 
      gradient: "from-purple-500 to-fuchsia-600",
      detail: "Comprehensive expertise spanning the AI stack"
    },
    { 
      num: "04", 
      title: "Values", 
      desc: "Collaborative culture working as one committed team.", 
      gradient: "from-rose-500 to-red-600",
      detail: "Unified commitment where success is shared"
    },
    { 
      num: "05", 
      title: "Volition", 
      desc: "Client-controlled engagement driven by intent.", 
      gradient: "from-emerald-500 to-green-600",
      detail: "Complete autonomy with control at every stage"
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Radial gradients */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-radial from-brand-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-gradient-radial from-brand-accent-purple/20 via-transparent to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
        
        {/* Top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        {/* Grand Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 border border-brand-primary/30 rounded-full text-brand-primary text-sm font-semibold tracking-[0.3em] uppercase">
              Foundation
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-12 leading-none"
          >
            <span className="block bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-transparent">
              The 5 V's
            </span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-2xl sm:text-3xl text-zinc-400 leading-relaxed">
              Five interconnected principles that define how we create, deliver, and succeed together
            </p>
          </motion.div>
        </motion.div>

        {/* Cards Grid Layout - All 5 V's in One Row */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {vPrinciples.map((v, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
                className="relative group h-full"
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="h-full"
                >
                  {/* Glow effect */}
                  <motion.div
                    className={`absolute -inset-2 bg-gradient-to-r ${v.gradient} rounded-2xl opacity-0 blur-xl`}
                    animate={{
                      opacity: activeIndex === index ? 0.2 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Card */}
                  <div className="relative h-full flex flex-col bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-2xl border-2 border-zinc-800 overflow-hidden shadow-xl group-hover:border-zinc-700 transition-colors duration-300">
                    {/* Top gradient bar */}
                    <motion.div
                      className={`h-1.5 bg-gradient-to-r ${v.gradient}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    />

                    <div className="p-6 flex flex-col flex-1">
                      {/* Title */}
                      <h3 className="text-3xl font-black text-white mb-3">
                        {v.title}
                      </h3>

                      {/* Animated underline */}
                      <motion.div
                        className={`h-0.5 bg-gradient-to-r ${v.gradient} opacity-40 mb-4 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                      />

                      {/* Description */}
                      <p className="text-base text-zinc-400 leading-relaxed mb-4">
                        {v.desc}
                      </p>

                      {/* Detail */}
                      <p className="text-sm text-zinc-500 leading-relaxed">
                        {v.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default FiveVsSection;
