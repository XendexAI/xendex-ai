import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp,
  ArrowRight,
  Check,
  Code,
  Zap,
  Shield,
  Clock,
  MessageSquare,
  FileSearch,
  Sparkles
} from 'lucide-react';

const DataAnalysisPage = () => {
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
    { value: '100x', label: 'Faster Analysis', icon: Zap },
    { value: '95%', label: 'Pattern Detection', icon: BarChart3 },
    { value: '24/7', label: 'Monitoring', icon: Clock },
    { value: '∞', label: 'Scalability', icon: TrendingUp }
  ];

  const features = [
    {
      title: 'Conversational Analytics',
      description: 'Ask questions in natural language and receive instant reports with visualizations. Get detailed charts, metrics, and insights complete with revenue breakdowns, growth percentages, and variance analysis.',
      image: '/images/da1.png',
      width: '690px',
      height: '540px'
    },
    {
      title: 'Natural Language to SQL',
      description: 'Our AI translates questions into optimized SQL queries and generates visualizations automatically. No coding required—just ask naturally and watch data transform into interactive charts in real-time.',
      image: '/images/da2.png',
      width: '510px',
      height: '520px'
    },
    {
      title: 'Enterprise-Grade Architecture',
      description: 'Built with security at its core. Features intent recognition, query generation, RBAC governance with guardrails, seamless database integration, and visualization layers delivering secure, compliant analytics.',
      image: '/images/da3.png',
      width: '710px',
      height: '520px'
    }
  ];

  const capabilities = [
    {
      title: 'Automated EDA',
      description: 'Comprehensive exploratory data analysis with statistical summaries',
      icon: BarChart3
    },
    {
      title: 'Pattern Recognition',
      description: 'Identify trends, correlations, and anomalies automatically',
      icon: Sparkles
    },
    {
      title: 'Natural Language Queries',
      description: 'Ask questions in plain English, get precise data insights',
      icon: MessageSquare
    },
    {
      title: 'Automated Reporting',
      description: 'Generate beautiful reports with charts, tables, and narratives',
      icon: FileSearch
    },
    {
      title: 'Database Integration',
      description: 'Connect to SQL, data warehouses, and BI tools',
      icon: Code
    },
    {
      title: 'Real-time Monitoring',
      description: 'Continuous analysis with alerts for important changes',
      icon: Shield
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gradient-to-b from-[#0a0e27] via-[#141b3d] to-[#0a0e27] min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            src="/images/video2.mov"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/30" />
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
                <span className="font-normal text-white">AI Data Analysis System</span>
                {/* <span className="font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">System</span> */}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-4xl mx-auto leading-relaxed">
                From raw data to clear insights
              </p>
            </motion.div>

            {/* <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white font-semibold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                style={{ boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)' }}
              >
                Start Building
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div> */}
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                    <StatIcon className="w-8 h-8 text-blue-400 mb-4" />
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#141b3d] to-[#0a0e27]">
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
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0e27] to-[#141b3d]">
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
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                    <CapIcon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
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
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 opacity-10" />
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
            Let's build your AI data analysis system together
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-white text-lg font-bold rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
              style={{ boxShadow: '0 20px 60px rgba(59, 130, 246, 0.4)' }}
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

export default DataAnalysisPage;
