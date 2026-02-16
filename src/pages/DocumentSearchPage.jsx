import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileSearch, 
  ArrowRight,
  Check,
  Code,
  Zap,
  Shield,
  Clock,
  BarChart3,
  Sparkles
} from 'lucide-react';

const DocumentSearchPage = () => {
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
    { value: '10x', label: 'Faster Search', icon: Zap },
    { value: '90%', label: 'Accuracy Rate', icon: Check },
    { value: '100M+', label: 'Documents', icon: FileSearch },
    { value: '<2s', label: 'Response Time', icon: Clock }
  ];

  const features = [
    {
      title: 'Intelligent Document Search',
      description: 'Move beyond keyword search with semantic understanding. Our AI-powered engine delivers precise results from millions of documents in seconds, comprehending the meaning behind every query.',
      image: '/images/dsa1.png',
      width: '480px',
      height: '530px'
    },
    {
      title: 'Instant Answer Extraction',
      description: 'Get direct answers extracted from documents, not just file links. Our system provides precise information with source citations, saving hours of manual review for your team.',
      image: '/images/dsa2.png',
      width: '720px',
      height: '510px'
    },
    {
      title: 'Cross-Functional Intelligence',
      description: "Empower every department with instant knowledge access. From Sales and Finance to Legal and Strategy, our AI adapts to each team's unique needs, delivering role-specific insights across your organization.",
      image: '/images/dsa3.png',
      width: '720px',
      height: '510px'
    }
  ];

  const capabilities = [
    {
      title: 'Semantic Search Engine',
      description: 'Understands intent and meaning, not just keywords and phrases',
      icon: FileSearch
    },
    {
      title: 'Multi-Format Support',
      description: 'PDFs, Word, Excel, PowerPoint, emails, HTML, and more',
      icon: Code
    },
    {
      title: 'Answer Extraction',
      description: 'Get direct answers with citations, not just document links',
      icon: Sparkles
    },
    {
      title: 'Advanced Filtering',
      description: 'Filter by date, author, type, department, tags, and custom metadata',
      icon: BarChart3
    },
    {
      title: 'Permission-Aware',
      description: 'Respects user roles and document access permissions',
      icon: Shield
    },
    {
      title: 'Enterprise Scale',
      description: 'Handles millions of documents with sub-second latency',
      icon: Zap
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
                <span className="font-normal text-white">AI-Powered Document Search</span>
                {/* <span className="font-black bg-gradient-to-r from-teal-300 via-emerald-300 to-green-400 bg-clip-text text-transparent">Document Search</span> */}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-4xl mx-auto leading-relaxed">
                Find the right information, instantly
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-teal-400/70 via-emerald-400/70 to-green-500/70 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                style={{ boxShadow: '0 10px 30px rgba(45, 212, 191, 0.2)' }}
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
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/70 via-emerald-400/70 to-green-500/70 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                    <StatIcon className="w-8 h-8 text-teal-400 mb-4" />
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
              className={`grid md:grid-cols-2 gap-12 items-center mb-32 last:mb-0 ${
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/70 via-emerald-400/70 to-green-500/70 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
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
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-400/70 via-emerald-400/70 to-green-500/70 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                    <CapIcon className="w-12 h-12 text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
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
          <div className="absolute inset-0 bg-gradient-to-r from-teal-400/70 via-emerald-400/70 to-green-500/70 opacity-10" />
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
            Let's build your AI-powered document search system together
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-gradient-to-r from-teal-400/70 via-emerald-400/70 to-green-500/70 text-white text-lg font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              style={{ boxShadow: '0 20px 60px rgba(45, 212, 191, 0.2)' }}
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

export default DocumentSearchPage;
