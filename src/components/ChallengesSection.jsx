import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ChallengesSection = () => {
  const [activeTab, setActiveTab] = useState('challenges');
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-200px" });

  const challenges = [
    "When delivery is priced by headcount and time, it creates cost uncertainty, scope drift, and AI initiatives that never reach production.",
    "Vendor lock-in constrains exit optionality, obscures real progress behind status artifacts, and delays risk visibility when shipping AI systems.",
    "Your team has a clear goal, but needs execution support.",
    "Inflexible team models stall delivery, especially when success depends on understanding both model behavior and business impact."
  ];

  const approaches = [
    "Cadenced Delivery: Outcome-driven sprints with fixed scope and explicit acceptance replace time- and headcount-based delivery.",
    "Decoupled Delivery: Ownership-first delivery with complete IP transfer, bounded support, and frictionless exit by design.",
    "Co-Execution: We embed domain experts into your workflows to minimize handoffs, accelerate delivery, and move AI into production faster—designed to amplify your teams, not substitute them.",
    "Adaptive Execution: Delivery capacity scales by adjusting sprints, without disrupting teams—working alongside you as priorities evolve."
  ];

  const items = activeTab === 'challenges' ? challenges : approaches;

  // Auto-advance through items when in view
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView, items.length]);

  return (
    <section ref={sectionRef} className="py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-secondary-darker via-black to-brand-secondary-dark opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-brand-secondary-darker border border-brand-gray-800 rounded-full p-1">
            <button
              onClick={() => {
                setActiveTab('challenges');
                setActiveIndex(0);
              }}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === 'challenges'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Challenges
            </button>
            <button
              onClick={() => {
                setActiveTab('approach');
                setActiveIndex(0);
              }}
              className={`px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 ${
                activeTab === 'approach'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Our Approach
            </button>
          </div>
        </motion.div>

        <div className="relative grid lg:grid-cols-2 gap-16 items-start">
          {/* Vertical line in the middle - full height background line */}
          <div className="hidden lg:block absolute left-1/2 w-[2px] transform -translate-x-1/2 z-0" 
               style={{ top: '10px', bottom: '10px', background: '#374151' }}></div>
          
          {/* Animated progress line */}
          <motion.div
            className="hidden lg:block absolute left-1/2 w-[2px] transform -translate-x-1/2 z-0"
            style={{
              top: '10px',
              background: 'linear-gradient(to bottom, #3b82f6, #60a5fa, #3b82f6)'
            }}
            initial={{ height: 0 }}
            animate={{ 
              height: activeIndex === 0 
                ? '10px' 
                : `${10 + (activeIndex * 160)}px` 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Glowing effect at the tip */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brand-primary rounded-full blur-md opacity-80"></div>
          </motion.div>

          {/* Left Side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 pr-12 relative z-10"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              {activeTab === 'challenges' ? 'What We Help You Solve' : 'How We Work With You'}
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              {activeTab === 'challenges'
                ? "Whether you need an agentic workflow, a fine-tuned model, or an entire AI-enabled product, we help you move from strategy to working system—while avoiding the biggest pitfalls—fast."
                : "We support teams in translating AI strategy into production-ready systems across models, agentic workflows, and AI-enabled products — sidestepping the execution risks inherent in time- and headcount-based delivery models."}
            </p>
          </motion.div>

          {/* Right Side - Animated List */}
          <div className="relative pl-12 z-10">
            <div className="space-y-16">
              {items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                  style={{ minHeight: '120px' }}
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
                      className={`text-xl lg:text-2xl leading-relaxed transition-all duration-500 ${
                        index === activeIndex 
                          ? 'text-white font-semibold' 
                          : index < activeIndex
                          ? 'text-gray-400 font-normal'
                          : 'text-gray-600 font-normal'
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

          {/* Circles positioned absolutely on the center line */}
          <div className="hidden lg:block absolute left-1/2 pointer-events-none" style={{ width: '0px', zIndex: 20, top: '0', transform: 'translateX(-50%) translateX(-48px)' }}>
            {items.map((item, index) => (
              <motion.div
                key={`circle-${index}`}
                className="absolute rounded-full border-[3px]"
                style={{
                  width: '20px',
                  height: '20px',
                  top: `${index * 160}px`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: index <= activeIndex ? '#3b82f6' : 'transparent',
                  borderColor: index <= activeIndex ? '#3b82f6' : '#4b5563',
                  boxShadow: index === activeIndex ? '0 0 25px rgba(59, 130, 246, 0.9), 0 0 50px rgba(59, 130, 246, 0.4)' : 'none',
                }}
                animate={index === activeIndex ? { 
                  scale: [1, 1.3, 1],
                } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Pulsing outer ring for active item */}
                {index === activeIndex && (
                  <>
                    <motion.div
                      className="absolute rounded-full border-2 border-brand-primary"
                      style={{ 
                        width: '20px', 
                        height: '20px',
                        left: '-1px',
                        top: '-1px'
                      }}
                      animate={{ 
                        scale: [1, 2, 2.5],
                        opacity: [0.8, 0.3, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    />
                    <div 
                      className="absolute rounded-full bg-brand-primary"
                      style={{
                        width: '12px',
                        height: '12px',
                        left: '4px',
                        top: '4px'
                      }}
                    />
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
