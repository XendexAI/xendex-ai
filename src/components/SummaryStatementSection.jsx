import React from 'react';
import { motion } from 'framer-motion';

const SummaryStatementSection = () => {
  return (
    <section className="py-24 bg-brand-secondary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-accent-purple/5 to-brand-primary/5" />
            
            <div className="relative p-16 lg:p-20 text-center">
              <div className="max-w-5xl mx-auto">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-light leading-relaxed text-zinc-300">
                  <span className="font-bold text-white">We deliver</span>{' '}
                  <span className="font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">measured impact</span>{' '}
                  <span className="text-zinc-400">at</span>{' '}
                  <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">speed</span>
                  <span className="text-zinc-400">, with</span>{' '}
                  <span className="font-semibold bg-gradient-to-r from-purple-400 to-fuchsia-500 bg-clip-text text-transparent">deep capability</span>
                  <span className="text-zinc-400">, a</span>{' '}
                  <span className="font-semibold bg-gradient-to-r from-rose-400 to-red-500 bg-clip-text text-transparent">collaborative culture</span>
                  <span className="text-zinc-400">, and engagement driven by</span>{' '}
                  <span className="font-semibold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">choice</span>
                  <span className="text-zinc-400">—not lock-in</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummaryStatementSection;
