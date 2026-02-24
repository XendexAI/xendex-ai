import React from 'react';
import { motion } from 'framer-motion';

const vPrinciples = [
  {
    num: '01',
    title: 'Value',
    desc: 'Measured business impact delivered every sprint, not at the end of a long engagement.',
    accent: '#60a5fa',
  },
  {
    num: '02',
    title: 'Velocity',
    desc: 'From prototype to production in weeks. Disciplined speed without cutting corners on quality.',
    accent: '#818cf8',
  },
  {
    num: '03',
    title: 'Versatility',
    desc: 'Deep capability across data, models, and delivery. One team fluent across the full AI stack.',
    accent: '#22d3ee',
  },
  {
    num: '04',
    title: 'Values',
    desc: 'Collaborative culture working as one committed team. Success is shared, not siloed.',
    accent: '#a78bfa',
  },
  {
    num: '05',
    title: 'Volition',
    desc: 'Client-controlled engagement driven by intent. Complete autonomy at every stage.',
    accent: '#38bdf8',
  },
];

const FiveVsSection = () => {
  return (
    <section
      className="relative py-28"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs text-blue-400/80 tracking-widest uppercase mb-5"
          >
            Foundation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-normal text-white leading-tight mb-6"
          >
            The 5&nbsp;V's
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/40 font-normal leading-relaxed text-lg"
          >
            Five interconnected principles that define how we create, deliver, and succeed together.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {vPrinciples.map((v, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: '#080b12',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Top accent line — thin blue gradient */}
              <div
                className="h-px w-full"
                style={{ background: `linear-gradient(to right, ${v.accent}, transparent)` }}
              />

              <div className="flex flex-col flex-1 p-6 gap-4">
                <span
                  className="text-xs font-normal tracking-widest"
                  style={{ color: v.accent }}
                >
                  {v.num}
                </span>

                <h3 className="text-xl font-normal text-white">
                  {v.title}
                </h3>

                <p className="text-sm text-white/40 font-normal leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FiveVsSection;
