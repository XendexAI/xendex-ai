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
    { value: '95%', label: 'Query Accuracy', icon: Check },
    { value: '10x', label: 'Faster Resolution', icon: Zap },
    { value: '24/7', label: 'Always Available', icon: Clock },
    { value: '100%', label: 'Audit Trail', icon: Shield }
  ];

  const features = [
    {
      title: 'Natural Language Understanding',
      description: 'Our conversational AI understands context, intent, and nuance across multi-turn dialogues. Full conversation memory enables intelligent interactions that feel natural and productive for your team.',
      image: '/images/chat1.png',
      width: '500px',
      height: '550px'
    },
    {
      title: 'Seamless System Integration',
      description: 'Connect your AI assistant to existing tools, databases, and APIs. Execute actions, retrieve information, and automate workflows—all through natural conversation. No complex integrations or technical expertise required.',
      image: '/images/chat2.png',
      width: '650px',
      height: '700px'
    },
    {
      title: 'Industry-Wide Applications',
      description: 'Deploy intelligent assistants that understand your specific domain, terminology, and workflows. From customer support to operations, our AI adapts to any industry vertical with precision.',
      image: '/images/chat3.png',
      width: '700px',
      height: '520px'
    }
  ];

  const capabilities = [
    {
      title: 'Intelligent Context Management',
      description: 'Maintains conversation history and understands complex, multi-turn dialogues',
      icon: MessageSquare
    },
    {
      title: 'System Integration',
      description: 'Connects to documentation, databases, APIs, and internal tools',
      icon: Code
    },
    {
      title: 'Automated Actions',
      description: 'Executes workflows and operations through natural language commands',
      icon: Zap
    },
    {
      title: 'Enterprise Security',
      description: 'Role-based access, audit logging, and compliance-ready architecture',
      icon: Shield
    },
    {
      title: 'Customizable Responses',
      description: 'Configurable tone, format, and guardrails for your brand',
      icon: Sparkles
    },
    {
      title: 'Scalable Architecture',
      description: 'Handles concurrent users with consistent performance',
      icon: Users
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-900 min-h-screen"
    >
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

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                style={{ boxShadow: '0 10px 30px rgba(6, 182, 212, 0.4)' }}
              >
                Start Building
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="relative group"
                >
                  <div className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                    <StatIcon className="w-8 h-8 text-cyan-400 mb-4" />
                    <div className="text-4xl font-black text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`grid md:grid-cols-2 gap-12 items-center last:mb-0 ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="max-w-lg">
                  <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-xl text-white font-semibold leading-relaxed mb-8">
                    {feature.description}
                  </p>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="relative group">
                  <div className="relative rounded-2xl overflow-hidden bg-transparent">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full object-contain mx-auto bg-transparent"
                      style={{ maxWidth: feature.width, maxHeight: feature.height }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x600/000000/ffffff?text=Feature+Preview';
                      }}
                    />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-gray-400">
              Everything you need, built for enterprise scale
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => {
              const CapIcon = capability.icon;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  className="group relative"
                >
                  <div className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                    <CapIcon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 opacity-10" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Ready to Deploy?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Let's build your conversational AI assistant system together
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              style={{ boxShadow: '0 20px 60px rgba(6, 182, 212, 0.4)' }}
            >
              <Zap className="w-6 h-6" />
              Start Your Build
            </button>
            <button className="px-10 py-5 bg-gray-800/70 backdrop-blur-sm text-white text-lg font-bold rounded-xl border-2 border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ConversationalAIPage;
