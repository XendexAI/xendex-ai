import React from 'react';
import { motion } from 'framer-motion';

const ValuePropositionSection = () => {
  return (
    <section
      className="py-28 relative"
      style={{
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs text-blue-400/80 tracking-widest uppercase mb-10"
        >
          What we do
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-[2.1rem] font-normal text-white/35 leading-relaxed"
        >
          Xendex AI moves AI out of pilots by building{' '}
          <span className="text-white">production systems with your teams.</span>{' '}
          No handoffs, no slideware —{' '}
          <span className="text-white">real systems your organization owns and operates.</span>
        </motion.p>

      </div>
    </section>
  );
};

export default ValuePropositionSection;
