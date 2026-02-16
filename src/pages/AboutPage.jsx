import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Target, Brain, Shield, Users, Zap, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  const coreValues = [
    {
      title: 'Mission-Driven',
      description: 'Building AI systems that create measurable business impact, not experiments.',
      icon: Rocket,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Owned Execution',
      description: 'Systems designed for handoff. Your team owns it from day one.',
      icon: Target,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Enterprise Scale',
      description: 'Built for real ops. Production-ready, governed, and resilient.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Transparent Partnership',
      description: 'Clear outcomes, fixed scope, clear accountability. No surprises.',
      icon: Shield,
      color: 'from-pink-500 to-red-500'
    },
    {
      title: 'Continuous Innovation',
      description: 'Frontier models + proven patterns = systems that stay ahead.',
      icon: Zap,
      color: 'from-red-500 to-orange-500'
    },
    {
      title: 'Human-Centered',
      description: 'AI augments teams, never replaces judgment. Your expertise matters.',
      icon: Users,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const stats = [
    { value: '50+', label: 'Enterprise Systems Built' },
    { value: '98%', label: 'Success Rate' },
    { value: '$500M+', label: 'Outcomes Generated' },
    { value: '24/7', label: 'Support & Evolution' }
  ];

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ contain: 'layout' }}>
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center will-change-auto"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80)',
              backgroundAttachment: 'fixed',
              contain: 'strict'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-gray-900/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        {/* Animated orbs - minimal */}
        <div className="absolute inset-0 overflow-hidden z-10" style={{ contain: 'layout paint' }}>
          <motion.div
            className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-2xl"
            animate={{ opacity: [0.3, 0.45, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/15 rounded-full blur-2xl"
            animate={{ opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 font-semibold mb-6 tracking-wider uppercase text-sm">About Xendex AI</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
                We Build, Not Experiment
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              AI systems that deliver measurable business outcomes. Owned by your team. Built for enterprise scale.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all flex items-center gap-2 mx-auto"
            >
              Explore Our Systems <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs text-zinc-400 uppercase tracking-widest">Scroll to explore</p>
            <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </section>

      {/* ========== OUR MISSION ========== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-950" style={{ contain: 'layout' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
                Our Mission
              </h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                Enterprise AI isn't about the latest model. It's about systems that work. Systems your teams understand. Systems that scale without drama.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed">
                We partner with enterprises to build AI that's owned, understood, and continuously evolved by your people.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Mission"
                loading="lazy"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 transition-all"
              >
                <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950" style={{ contain: 'layout' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              How We Work
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Our core principles guide every engagement, every system, every decision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-cyan-500/50 transition-all overflow-hidden hover:shadow-lg hover:shadow-cyan-500/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                  <div className="relative z-10">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${value.color} bg-opacity-10 mb-4`}>
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-zinc-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== OUR STORY ========== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-950" style={{ contain: 'layout' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="rounded-2xl overflow-hidden border-2 border-purple-500/30 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                  alt="Story"
                  loading="lazy"
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
                Built for Enterprise
              </h2>
              <p className="text-xl text-zinc-300 leading-relaxed mb-6">
                We started because enterprise AI implementations were failing. Projects got stuck between proof-of-concept and production. Teams inherited black boxes.
              </p>
              <p className="text-lg text-zinc-400 leading-relaxed mb-8">
                So we built a different way. Systems designed for your teams to own. Architectures that scale. Processes that keep pace with frontier models.
              </p>
              
              <div className="space-y-4">
                {['Production-grade from day one', 'Designed for your team to operate', 'Continuous evolution, not reinvention'].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                    <p className="text-white text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== TEAM ========== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-950" style={{ contain: 'layout' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Built by Builders
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              Engineers, product leaders, and AI researchers who've shipped at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'AI Engineers',
                description: 'Deep expertise in LLMs, inference optimization, and production architectures.',
                icon: '🤖'
              },
              {
                name: 'Product Leaders',
                description: 'Built products used by millions. Know what production actually means.',
                icon: '🚀'
              },
              {
                name: 'Enterprise Operators',
                description: 'Years of experience deploying systems across regulated industries.',
                icon: '⚙️'
              }
            ].map((role, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 hover:border-purple-500/50 transition-all group text-center hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="text-5xl mb-4">{role.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{role.name}</h3>
                <p className="text-zinc-400 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden relative" style={{ contain: 'layout' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Ready to Build Real AI Systems?
          </h2>
          <p className="text-xl text-zinc-300 mb-12">
            Let's talk about what ownership means for your organization.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-lg font-bold rounded-xl shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/40 transition-all"
          >
            Schedule a Conversation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
