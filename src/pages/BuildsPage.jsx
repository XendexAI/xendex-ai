import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MessageSquare, 
  FileSearch, 
  BarChart3, 
  TrendingUp,
  ArrowRight,
  Sparkles,
  Zap,
  Shield
} from 'lucide-react';

const BuildsPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const agents = [
    {
      id: 'conversational-ai',
      title: 'Conversational AI Assistant',
      tagline: 'Turn conversations into operations',
      icon: MessageSquare,
      color: 'cyan',
      gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
      glowColor: 'rgba(6, 182, 212, 0.4)',
      description: 'Context-aware AI that understands, acts, and integrates with your systems. Built for teams who need more than chatbots.',
      features: ['Multi-turn conversations', 'System integration', 'Workflow automation', 'Enterprise security'],
      stats: { accuracy: '95%', speed: '10x faster', availability: '24/7' }
    },
    {
      id: 'document-search',
      title: 'AI-Powered Document Search',
      tagline: 'Find the right information, instantly',
      icon: FileSearch,
      color: 'purple',
      gradient: 'from-purple-500 via-fuchsia-500 to-pink-600',
      glowColor: 'rgba(168, 85, 247, 0.4)',
      description: 'Semantic search that understands meaning, not just keywords. Search across PDFs, emails, docs—get precise answers with citations.',
      features: ['Semantic search', 'Multi-format support', 'Answer extraction', 'Permission-aware'],
      stats: { speed: '10x faster', accuracy: '90%', scale: '100M+ docs' }
    },
    {
      id: 'data-analysis',
      title: 'AI Data Analysis System',
      tagline: 'From raw data to clear insights',
      icon: BarChart3,
      color: 'blue',
      gradient: 'from-blue-500 via-indigo-500 to-violet-600',
      glowColor: 'rgba(59, 130, 246, 0.4)',
      description: 'Automated data exploration, pattern detection, and reporting. Turn complex datasets into actionable insights without manual analysis.',
      features: ['Automated EDA', 'Pattern recognition', 'Natural language queries', 'Real-time monitoring'],
      stats: { speed: '100x faster', detection: '95%', monitoring: '24/7' }
    },
    {
      id: 'fundamental-analysis',
      title: 'AI Fundamental Analysis',
      tagline: 'Investment research, accelerated',
      icon: TrendingUp,
      color: 'emerald',
      gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      description: 'Automated analysis of financial statements, earnings transcripts, and market data. Wall Street-grade insights at scale.',
      features: ['Financial statement parsing', 'Earnings intelligence', 'Competitive analysis', 'Custom metrics'],
      stats: { companies: '1000+', speed: '50x faster', accuracy: '98%' }
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Advanced Animated Background */}
        <div className="absolute inset-0">
          {/* Multiple Gradient Orbs with Complex Motion */}
          <motion.div
            animate={{
              x: [0, 100, 0, -50, 0],
              y: [0, -50, 50, 0, 0],
              scale: [1, 1.3, 1.1, 1.2, 1],
              opacity: [0.2, 0.35, 0.25, 0.3, 0.2],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500 via-blue-500 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 60, -40, 0],
              y: [0, 60, -40, 80, 0],
              scale: [1.2, 1, 1.3, 1.1, 1.2],
              opacity: [0.25, 0.35, 0.2, 0.3, 0.25],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-purple-500 via-fuchsia-500 to-transparent rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, 60, -60, 40, 0],
              y: [0, -70, 50, -30, 0],
              scale: [1, 1.2, 1, 1.1, 1],
              opacity: [0.15, 0.25, 0.2, 0.3, 0.15],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500 via-violet-500 to-transparent rounded-full blur-3xl"
          />
          
          {/* Animated Grid Pattern */}
          <motion.div 
            className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Rotating Rings */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-purple-500/10 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 1.15, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
          />
          
          {/* Light Beams */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-purple-500/5"
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center mb-8 relative"
            >
              {/* Rotating Glow Ring */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="w-24 h-24 rounded-full border-2 border-cyan-500/30 border-t-cyan-400" />
              </motion.div>
              
              {/* Pulsing Background */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/30 blur-xl" />
              </motion.div>
              
              {/* Icon Container */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 shadow-2xl"
              >
                <motion.div
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-12 h-12 text-cyan-400" />
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.p 
              className="text-cyan-400 font-semibold mb-6 tracking-wider uppercase text-sm"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              XenBuilds
            </motion.p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-10 leading-tight relative">
              <motion.span 
                className="relative inline-block"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #fff, #a5f3fc, #c084fc, #fff)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Production-Ready
              </motion.span>
              <br />
              <motion.span 
                className="relative inline-block"
                animate={{
                  backgroundPosition: ['100% 50%', '0% 50%', '100% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #e9d5ff, #f0abfc, #a5f3fc, #e9d5ff)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                AI Systems
              </motion.span>
            </h1>
            <motion.p 
              className="text-xl sm:text-2xl text-zinc-300 max-w-4xl mx-auto font-light leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Deploy tested, scalable AI capabilities into your operations. Each XenBuild is a complete system architected for real-world performance, not proof-of-concept demos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button 
                className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden group flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background: [
                      'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                      'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10">Explore Builds</span>
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                className="relative px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-semibold rounded-xl border border-gray-700 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10">Schedule Consultation</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Agents Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Choose Your AI System
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Four specialized AI agents, each designed to solve specific enterprise challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={agent.id}
                  variants={scaleIn}
                  className="group relative"
                >
                  <Link to={`/builds/${agent.id}`}>
                    {/* Card */}
                    <div className="relative h-full p-8 bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm rounded-3xl border-2 border-gray-700 hover:border-gray-600 transition-all duration-500 overflow-hidden">
                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      {/* Animated Background Orb */}
                      <motion.div
                        className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${agent.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 90, 0],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="mb-6">
                          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${agent.gradient} shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                            style={{ boxShadow: `0 10px 40px ${agent.glowColor}` }}
                          >
                            <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                          </div>
                        </div>

                        {/* Title & Tagline */}
                        <h3 className="text-3xl font-black text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                          {agent.title}
                        </h3>
                        <p className={`text-lg font-semibold text-${agent.color}-400 mb-4`}>
                          {agent.tagline}
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-6">
                          {agent.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {agent.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${agent.gradient}`} />
                              <span className="text-sm text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-gray-700">
                          {Object.entries(agent.stats).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-2">
                              <Zap className={`w-4 h-4 text-${agent.color}-400`} />
                              <span className="text-white font-semibold text-sm">{value}</span>
                            </div>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between">
                          <span className={`text-${agent.color}-400 font-semibold group-hover:text-white transition-colors duration-300`}>
                            Learn more
                          </span>
                          <ArrowRight className={`w-6 h-6 text-${agent.color}-400 transform group-hover:translate-x-2 group-hover:text-white transition-all duration-300`} />
                        </div>
                      </div>
                    </div>

                    {/* External Glow on Hover */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${agent.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Why XenBuilds Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Why XenBuilds?
            </h2>
            <p className="text-xl text-gray-400">
              Not proof-of-concepts. Production systems that deliver results.
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Battle-Tested',
                description: 'Every system is production-ready, tested at scale, and proven in real-world scenarios.',
                icon: Shield
              },
              {
                title: 'Rapid Deployment',
                description: 'Go from requirements to production in weeks, not months. Pre-built, customizable, scalable.',
                icon: Zap
              },
              {
                title: 'Enterprise-Grade',
                description: 'Security, compliance, monitoring, and support built in. Ready for your most critical operations.',
                icon: Sparkles
              }
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <ItemIcon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-fuchsia-500 opacity-10"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Ready to Build?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Let's deploy your AI system in weeks, not months
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-gray-800/70 backdrop-blur-sm text-white text-lg font-bold rounded-xl border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default BuildsPage;
