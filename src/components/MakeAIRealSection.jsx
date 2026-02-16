import React from 'react';
import { motion } from 'framer-motion';

const MakeAIRealSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-75"
          style={{ backgroundImage: 'url(/images/decorator2.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/70 to-gray-900/90" />
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <span className="inline-block px-6 py-2 border border-brand-primary/30 rounded-full text-brand-primary text-sm font-semibold tracking-[0.3em] uppercase">
              Delivery Models
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2 
            variants={fadeInUp} 
            className="text-6xl sm:text-7xl lg:text-8xl font-black mb-10 leading-none"
          >
            <span className="bg-gradient-to-r from-zinc-200 via-white to-zinc-200 bg-clip-text text-transparent">
              Make AI Real
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p 
            variants={fadeInUp} 
            className="text-base sm:text-lg text-zinc-400 mb-10 leading-relaxed max-w-4xl mx-auto font-light"
          >
            We don't experiment with AI. Our delivery models transform AI into real business systems combining tailored workflows, 
            production-ready builds, and fine-tuned intelligence designed to operate at scale.
          </motion.p>

          {/* Subtitle with separators */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-16">
            <span className="text-lg text-zinc-500">Power Your Business with AI</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary"></span>
            <span className="text-lg text-zinc-500">Unlock Your Production AI</span>
          </motion.div>

          {/* XenPods & XenBuilds Cards */}
          <motion.div 
            variants={fadeInUp} 
            className="relative flex flex-col sm:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto"
          >
            <div className="pointer-events-none absolute -inset-x-12 -inset-y-12 flex items-center justify-center">
              <div
                className="w-full h-full max-w-6xl max-h-[620px] bg-center bg-no-repeat bg-cover opacity-100"
                style={{ backgroundImage: 'url(/images/podsandbuilds.svg)' }}
              />
            </div>
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex-1 z-10"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-2xl border-2 border-zinc-800 overflow-hidden p-6 h-full transition-all duration-300 group-hover:border-cyan-500/50">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
                <div className="relative z-10 flex flex-col items-center text-center gap-5">
                  <div className="w-full h-40 sm:h-44 rounded-xl overflow-hidden bg-black/20 border border-cyan-500/20">
                    <img
                      src="/images/pods.png"
                      alt="XenPods"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text transition-all duration-300">
                      XenPods
                    </h3>
                    <p className="text-sm text-zinc-300">
                      Tailored AI workflows embedded in your operations
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative flex-1 z-10"
            >
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-fuchsia-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
              
              {/* Card */}
              <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 rounded-2xl border-2 border-zinc-800 overflow-hidden p-6 h-full transition-all duration-300 group-hover:border-purple-500/50">
                {/* Top gradient bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-600" />
                <div className="relative z-10 flex flex-col items-center text-center gap-5">
                  <div className="w-full h-40 sm:h-44 rounded-xl overflow-hidden bg-black/20 border border-purple-500/20">
                    <img
                      src="/images/builds.png"
                      alt="XenBuilds"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-4xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-fuchsia-500 group-hover:bg-clip-text transition-all duration-300">
                      XenBuilds
                    </h3>
                    <p className="text-sm text-zinc-300">
                      Production-ready AI systems built for scale
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MakeAIRealSection;
