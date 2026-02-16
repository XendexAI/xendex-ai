import React from 'react';
import { motion } from 'framer-motion';

const ValuePropositionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.p variants={itemVariants} className="text-2xl sm:text-3xl text-zinc-400 leading-relaxed font-light">
            Xendex AI moves AI out of pilots by building production systems with your teams.{' '}
            <span className="font-semibold text-white">No handoffs, no slideware — real systems your organization owns and operates.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
