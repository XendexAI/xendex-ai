import React, { useState, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const ChallengesSection = () => {
  const [activeTab, setActiveTab] = useState('challenges');
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end']
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const count = activeTab === 'challenges' ? 4 : 4;
    const idx = Math.min(count - 1, Math.floor(latest * count));
    setActiveIndex(idx);
  });

  const challenges = [
    "Headcount-based pricing creates cost uncertainty, scope drift, and AI initiatives that stall before they ever reach production.",
    "Vendor lock-in obscures real progress, constrains exit options, and delays risk visibility when shipping AI systems at scale.",
    "Your team has a clear goal but lacks the execution capacity to move from strategy to a working system without stalling.",
    "Inflexible team models stall delivery when success depends on understanding both model behavior and measurable business impact."
  ];

  const approaches = [
    "Cadenced Delivery: Outcome-driven sprints with fixed scope and explicit acceptance criteria replace time-based engagement models.",
    "Decoupled Delivery: Ownership-first execution with complete IP transfer, bounded support windows, and frictionless exit by design.",
    "Co-Execution: Domain experts embed into your workflows to reduce handoffs, accelerate delivery, and amplify your existing teams.",
    "Adaptive Execution: Delivery capacity scales by adjusting sprint load — not headcount — as your priorities shift over time."
  ];

  const items = activeTab === 'challenges' ? challenges : approaches;

  return (
    <section ref={sectionRef} className="relative z-10 text-white" style={{ minHeight: '300vh' }}>
      {/* Sticky content wrapper */}
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-16">
      <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent max-w-7xl mx-auto mb-16" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-white/[0.04] border border-white/[0.07] rounded-full p-1">
            <button
              onClick={() => {
                setActiveTab('challenges');
                setActiveIndex(0);
              }}
              className={`px-8 py-3 rounded-full text-base font-normal transition-all duration-300 ${
                activeTab === 'challenges'
                  ? 'bg-white text-black'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              Challenges
            </button>
            <button
              onClick={() => {
                setActiveTab('approach');
                setActiveIndex(0);
              }}
              className={`px-8 py-3 rounded-full text-base font-normal transition-all duration-300 ${
                activeTab === 'approach'
                  ? 'bg-white text-black'
                  : 'text-white/40 hover:text-white'
              }`}
            >
              Our Approach
            </button>
          </div>
        </motion.div>

        <div className="relative grid lg:grid-cols-2 gap-16 items-start">
          {/* Vertical line in the middle - full height background line */}
          <div className="hidden lg:block absolute left-1/2 w-[1px] transform -translate-x-1/2 z-0" 
               style={{ top: '40px', bottom: '40px', background: 'rgba(255,255,255,0.07)' }}></div>
          
          {/* Animated progress line */}
          <motion.div
            className="hidden lg:block absolute left-1/2 w-[1px] transform -translate-x-1/2 z-0"
            style={{
              top: '40px',
              background: 'rgba(96,165,250,0.4)'
            }}
            initial={{ height: 0 }}
            animate={{ 
              height: `${activeIndex * 120}px`
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
          </motion.div>

          {/* Left Side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 pr-12 relative z-10"
          >
            <p className="text-xs font-normal text-blue-400/80 tracking-widest uppercase mb-5">
              {activeTab === 'challenges' ? 'What we help you solve' : 'How we work with you'}
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal mb-6 leading-tight">
              {activeTab === 'challenges' ? 'What We Help\nYou Solve' : 'How We Work\nWith You'}
            </h2>
            <div className="h-px w-12 bg-gradient-to-r from-blue-400 to-transparent mb-6" />
            <p className="text-base font-normal text-white/40 leading-relaxed">
              {activeTab === 'challenges'
                ? "Whether you need an agentic workflow, a fine-tuned model, or an entire AI-enabled product, we help you move from strategy to working system—while avoiding the biggest pitfalls—fast."
                : "We support teams in translating AI strategy into production-ready systems across models, agentic workflows, and AI-enabled products — sidestepping the execution risks inherent in time- and headcount-based delivery models."}
            </p>
          </motion.div>

          {/* Right Side - Animated List */}
          <div className="relative pl-12 z-10">
            <div className="space-y-10">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-center"
                  style={{ height: '80px' }}
                >
                  <motion.div
                    className={`transition-all duration-500 ${
                      index === activeIndex 
                        ? 'opacity-100' 
                        : index < activeIndex 
                        ? 'opacity-70' 
                        : 'opacity-40'
                    }`}
                    animate={index === activeIndex ? { 
                      x: [0, 10, 0],
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p
                      className={`text-lg lg:text-xl leading-relaxed transition-all duration-500 ${
                        index === activeIndex 
                          ? 'text-white font-normal' 
                          : index < activeIndex
                          ? 'text-white/40 font-normal'
                          : 'text-white/20 font-normal'
                      }`}
                      style={{
                        textShadow: index === activeIndex ? '0 0 30px rgba(59, 130, 246, 0.4)' : 'none'
                      }}
                    >
                      {item}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Circles positioned on the center line */}
          <div className="hidden lg:block absolute left-1/2 pointer-events-none" style={{ width: '0px', zIndex: 20, top: '0' }}>
            {items.map((item, index) => (
              <motion.div
                key={`circle-${index}`}
                className="absolute rounded-full border-[2px]"
                style={{
                  width: '12px',
                  height: '12px',
                  top: `${index * 120 + 34}px`,
                  left: '-6px',
                  backgroundColor: index <= activeIndex ? '#60a5fa' : 'transparent',
                  borderColor: index <= activeIndex ? '#60a5fa' : 'rgba(96,165,250,0.15)',
                  boxShadow: index === activeIndex ? '0 0 8px rgba(96,165,250,0.5)' : 'none',
                }}
                animate={{}}                transition={{}}
              >
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
