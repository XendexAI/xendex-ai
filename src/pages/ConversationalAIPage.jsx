import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  ArrowRight,
  Check,
  Code,
  Zap,
  Shield,
  Clock,
  Users,
  Sparkles
} from 'lucide-react';

const ConversationalAIPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const stats = [
    { value: '95%', label: 'Query Accuracy', icon: Check, color: 'text-emerald-400', iconBg: 'bg-emerald-500/10', iconBorder: 'border-emerald-500/20', glow: 'from-emerald-500/10 to-transparent', numGrad: 'from-emerald-200 via-white to-white' },
    { value: '10x', label: 'Faster Resolution', icon: Zap, color: 'text-amber-400', iconBg: 'bg-amber-500/10', iconBorder: 'border-amber-500/20', glow: 'from-amber-500/10 to-transparent', numGrad: 'from-amber-200 via-white to-white' },
    { value: '24/7', label: 'Always Available', icon: Clock, color: 'text-blue-400', iconBg: 'bg-blue-500/10', iconBorder: 'border-blue-500/20', glow: 'from-blue-500/10 to-transparent', numGrad: 'from-blue-200 via-white to-white' },
    { value: '100%', label: 'Audit Trail', icon: Shield, color: 'text-violet-400', iconBg: 'bg-violet-500/10', iconBorder: 'border-violet-500/20', glow: 'from-violet-500/10 to-transparent', numGrad: 'from-violet-200 via-white to-white' }
  ];

  const features = [
    {
      title: 'Natural Language Understanding',
      description: 'Our conversational AI understands context, intent, and nuance across multi-turn dialogues. Full conversation memory enables intelligent interactions that feel natural and productive for your team.',
      image: '/images/chat1.png',
      width: '500px',
      height: '550px',
      tag: 'Context-Aware',
      halo: 'from-blue-500/20 via-cyan-500/10'
    },
    {
      title: 'Seamless System Integration',
      description: 'Connect your AI assistant to existing tools, databases, and APIs. Execute actions, retrieve information, and automate workflows—all through natural conversation. No complex integrations or technical expertise required.',
      image: '/images/chat2.png',
      width: '650px',
      height: '700px',
      tag: 'Plug & Play',
      halo: 'from-indigo-500/20 via-violet-500/10'
    },
    {
      title: 'Industry-Wide Applications',
      description: 'Deploy intelligent assistants that understand your specific domain, terminology, and workflows. From customer support to operations, our AI adapts to any industry vertical with precision.',
      image: '/images/chat3.png',
      width: '700px',
      height: '520px',
      tag: 'Any Vertical',
      halo: 'from-cyan-500/20 via-blue-500/10'
    }
  ];

  const capabilities = [
    {
      title: 'Intelligent Context Management',
      description: 'Maintains conversation history and understands complex, multi-turn dialogues',
      icon: MessageSquare,
      color: 'text-blue-400', iconBg: 'bg-blue-500/10', iconBorder: 'border-blue-500/20', topLine: 'via-blue-500/40'
    },
    {
      title: 'System Integration',
      description: 'Connects to documentation, databases, APIs, and internal tools',
      icon: Code,
      color: 'text-cyan-400', iconBg: 'bg-cyan-500/10', iconBorder: 'border-cyan-500/20', topLine: 'via-cyan-500/40'
    },
    {
      title: 'Automated Actions',
      description: 'Executes workflows and operations through natural language commands',
      icon: Zap,
      color: 'text-amber-400', iconBg: 'bg-amber-500/10', iconBorder: 'border-amber-500/20', topLine: 'via-amber-500/40'
    },
    {
      title: 'Enterprise Security',
      description: 'Role-based access, audit logging, and compliance-ready architecture',
      icon: Shield,
      color: 'text-violet-400', iconBg: 'bg-violet-500/10', iconBorder: 'border-violet-500/20', topLine: 'via-violet-500/40'
    },
    {
      title: 'Customizable Responses',
      description: 'Configurable tone, format, and guardrails for your brand',
      icon: Sparkles,
      color: 'text-indigo-400', iconBg: 'bg-indigo-500/10', iconBorder: 'border-indigo-500/20', topLine: 'via-indigo-500/40'
    },
    {
      title: 'Scalable Architecture',
      description: 'Handles concurrent users with consistent performance',
      icon: Users,
      color: 'text-emerald-400', iconBg: 'bg-emerald-500/10', iconBorder: 'border-emerald-500/20', topLine: 'via-emerald-500/40'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative bg-gradient-to-b from-[#0a0d14] via-[#0d1117] to-[#0a0d14] min-h-screen overflow-hidden"
    >
      {/* Page-level ambient corner lights */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 -left-60 w-[500px] h-[500px] bg-cyan-600/6 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute top-1/2 -right-60 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[140px] -translate-y-1/2" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px]" />
      </div>

      {/* Dot grid texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      {/* Top glow accent bar */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
        <div className="h-8 w-full bg-gradient-to-b from-blue-500/10 to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
            style={{ backgroundImage: "url('/images/xendex.webp')" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="font-normal text-white">Conversational AI Assistant</span>
                {/* <span className="font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Assistant</span> */}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-4xl mx-auto leading-relaxed">
                Turn conversations into operations
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[30%] bg-gradient-to-r from-blue-500/5 to-transparent blur-2xl" />
        <div className="absolute inset-y-0 right-0 w-[30%] bg-gradient-to-l from-indigo-500/5 to-transparent blur-2xl" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Section label with extending lines */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-10">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
            <span className="text-xs text-white/30 tracking-widest uppercase">At a Glance</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="p-10 bg-[#0d1117] flex flex-col items-center text-center group hover:bg-white/[0.035] transition-colors duration-300 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-t ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    <div className={`w-9 h-9 rounded-xl ${stat.iconBg} border ${stat.iconBorder} flex items-center justify-center mb-5`}>
                      <StatIcon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                    <div className={`text-4xl font-light bg-gradient-to-br ${stat.numGrad} bg-clip-text text-transparent mb-2 tracking-tight`}>{stat.value}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-white/5">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-indigo-600/5 rounded-full blur-[100px] translate-x-1/2" />
        <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent to-blue-400/40" />
              <p className="text-xs text-blue-400 tracking-widest uppercase">How It Works</p>
              <div className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent to-blue-400/40" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal text-white">
              Built for Real Work
            </h2>
          </motion.div>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`relative grid md:grid-cols-2 gap-12 items-center mb-8 last:mb-0 ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Text */}
              <motion.div variants={fadeInUp} className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                {/* Corner bracket decorators */}
                <div className="absolute -top-3 -left-3 w-5 h-5 border-t border-l border-white/20" />
                <div className="absolute -top-3 -right-3 w-5 h-5 border-t border-r border-white/20" />
                <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b border-l border-white/20" />
                <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b border-r border-white/20" />
                <div className="p-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-60" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
                  </span>
                  <span className="text-xs text-blue-400 tracking-widest uppercase">{feature.tag}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-normal text-white mb-5 leading-snug">
                  {feature.title}
                </h3>
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-blue-400 to-transparent mb-6" />
                {/* Left accent bar on description */}
                <div className="flex gap-4">
                  <div className="w-px flex-shrink-0 bg-gradient-to-b from-blue-500/60 via-indigo-500/30 to-transparent rounded-full" />
                  <p className="text-base text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div variants={fadeInUp} className={`relative ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                {/* Radial halo behind image */}
                <div className={`absolute inset-0 bg-gradient-to-b ${feature.halo} to-transparent blur-[80px] scale-75 opacity-70 rounded-full`} />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="relative w-full object-contain mx-auto"
                  style={{ maxWidth: feature.width, maxHeight: feature.height }}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </motion.div>
            </motion.div>
          ))}

         
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-y-0 -left-32 w-[450px] bg-gradient-to-r from-cyan-500/6 via-blue-500/4 to-transparent blur-3xl" />
        <div className="absolute inset-y-0 -right-32 w-[450px] bg-gradient-to-l from-violet-500/6 via-indigo-500/4 to-transparent blur-3xl" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex-1 max-w-[80px] h-px bg-gradient-to-r from-transparent to-blue-400/40" />
              <p className="text-xs text-blue-400 tracking-widest uppercase">What's Inside</p>
              <div className="flex-1 max-w-[80px] h-px bg-gradient-to-l from-transparent to-blue-400/40" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-normal text-white mb-5">
              Core Capabilities
            </h2>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-5" />
            <p className="text-base text-white/40 max-w-xl mx-auto">
              Everything you need, built for enterprise scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {capabilities.map((capability, index) => {
              const CapIcon = capability.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="p-8 bg-[#0d1117] h-full group hover:bg-white/[0.03] transition-colors duration-300 relative overflow-hidden">
                    <div className="absolute -inset-full top-0 h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${capability.topLine} to-transparent`} />
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`w-10 h-10 rounded-xl ${capability.iconBg} border ${capability.iconBorder} flex items-center justify-center mb-5`}>
                      <CapIcon className={`w-5 h-5 ${capability.color}`} />
                    </div>
                    <h3 className="text-base font-normal text-white mb-2">{capability.title}</h3>
                    <p className="text-sm text-white/45 leading-relaxed">{capability.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-blue-600/10 via-indigo-500/6 to-transparent blur-3xl" />
        <div className="absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-indigo-600/10 via-blue-500/6 to-transparent blur-3xl" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-3xl mx-auto text-center"
        >
          <p className="text-xs text-blue-400 tracking-widest uppercase mb-6">Get Started</p>
          <h2 className="text-4xl sm:text-5xl font-normal text-white mb-5">
            Ready to Deploy?
          </h2>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-8" />
          <p className="text-base text-white/40 mb-12">
            Let's build your conversational AI assistant together
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 border border-white/20 text-white font-normal rounded-xl hover:bg-white/5 hover:border-white/30 transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ConversationalAIPage;
