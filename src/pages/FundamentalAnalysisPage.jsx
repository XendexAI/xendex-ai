import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp,
  ArrowRight,
  Check,
  Zap,
  Clock,
  BarChart3,
  MessageSquare,
  Users,
  Sparkles
} from 'lucide-react';

const FundamentalAnalysisPage = () => {
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

  const stats = [
    { value: '1000+', label: 'Companies', icon: TrendingUp, color: 'text-indigo-400', iconBg: 'bg-indigo-500/10', iconBorder: 'border-indigo-500/20', glow: 'from-indigo-500/10 to-transparent', numGrad: 'from-indigo-200 via-white to-white' },
    { value: '50x', label: 'Faster Research', icon: Zap, color: 'text-amber-400', iconBg: 'bg-amber-500/10', iconBorder: 'border-amber-500/20', glow: 'from-amber-500/10 to-transparent', numGrad: 'from-amber-200 via-white to-white' },
    { value: '98%', label: 'Accuracy', icon: Check, color: 'text-emerald-400', iconBg: 'bg-emerald-500/10', iconBorder: 'border-emerald-500/20', glow: 'from-emerald-500/10 to-transparent', numGrad: 'from-emerald-200 via-white to-white' },
    { value: '<5min', label: 'Analysis Time', icon: Clock, color: 'text-blue-400', iconBg: 'bg-blue-500/10', iconBorder: 'border-blue-500/20', glow: 'from-blue-500/10 to-transparent', numGrad: 'from-blue-200 via-white to-white' }
  ];

  const features = [
    {
      title: 'Automated Financial Analysis',
      description: 'Extract and analyze data from SEC filings automatically. Our system parses financial statements and transcripts, calculating key ratios and identifying trends to deliver institutional-grade analysis in minutes.',
      image: '/images/chat1.png',
      width: '670px',
      height: '535px',
      tag: 'Automated',
      halo: 'from-blue-500/20 via-cyan-500/10'
    },
    {
      title: 'Competitive Intelligence',
      description: 'Understand market positioning and sentiment at scale. Our AI analyzes earnings calls, news, and market data to provide competitive insights with sentiment tracking calibrated for finance.',
      image: '/images/chat2.png',
      width: '700px',
      height: '515px',
      tag: 'Competitive',
      halo: 'from-indigo-500/20 via-violet-500/10'
    },
    {
      title: 'Investment Research at Scale',
      description: 'Built for professionals across asset classes and strategies. From hedge funds to private equity, our system scales to thousands of companies providing institutional-grade depth and speed.',
      image: '/images/aboutconversation.png',
      width: '680px',
      height: '545px',
      tag: 'Scalable',
      halo: 'from-cyan-500/20 via-blue-500/10'
    }
  ];

  const capabilities = [
    { title: 'Financial Statement Analysis', description: 'Automated parsing and ratio calculation from SEC filings', icon: BarChart3, color: 'text-blue-400', iconBg: 'bg-blue-500/10', iconBorder: 'border-blue-500/20', topLine: 'via-blue-500/40' },
    { title: 'Earnings Call Intelligence', description: 'Sentiment tracking and key insight extraction from transcripts', icon: MessageSquare, color: 'text-cyan-400', iconBg: 'bg-cyan-500/10', iconBorder: 'border-cyan-500/20', topLine: 'via-cyan-500/40' },
    { title: 'Competitive Analysis', description: 'Map competitive positioning and market dynamics', icon: Users, color: 'text-amber-400', iconBg: 'bg-amber-500/10', iconBorder: 'border-amber-500/20', topLine: 'via-amber-500/40' },
    { title: 'Trend Detection', description: 'Identify patterns across sectors and time periods', icon: TrendingUp, color: 'text-emerald-400', iconBg: 'bg-emerald-500/10', iconBorder: 'border-emerald-500/20', topLine: 'via-emerald-500/40' },
    { title: 'Custom Metrics', description: 'Define and track proprietary investment metrics', icon: Sparkles, color: 'text-violet-400', iconBg: 'bg-violet-500/10', iconBorder: 'border-violet-500/20', topLine: 'via-violet-500/40' },
    { title: 'Real-time Updates', description: "Monitor filings and transcripts as they're published", icon: Zap, color: 'text-indigo-400', iconBg: 'bg-indigo-500/10', iconBorder: 'border-indigo-500/20', topLine: 'via-indigo-500/40' }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0a0d14] via-[#0d1117] to-[#0a0d14] min-h-screen overflow-hidden">
      {/* Ambient corner lights */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-600/8 blur-[100px]" />
        <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] rounded-full bg-cyan-600/6 blur-[90px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-700/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-700/6 blur-[80px]" />
        <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
      </div>
      {/* Top blue hairline glow */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="h-px bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />
        <div className="h-8 bg-gradient-to-b from-blue-500/10 to-transparent" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex items-center min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/images/video1.mp4" type="video/mp4" />
          </video>
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
                <span className="font-normal text-white">AI Fundamental Analysis System</span>
                {/* <span className="font-black bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">System</span> */}
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 font-normal max-w-4xl mx-auto leading-relaxed">
                Investment research, accelerated
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div key={index} className="relative group bg-[#0d1117] p-8 hover:bg-[#0f1520] transition-colors duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className={`relative z-10 w-10 h-10 rounded-xl ${stat.iconBg} border ${stat.iconBorder} flex items-center justify-center mb-4`}>
                    <StatIcon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className={`relative z-10 text-4xl font-normal bg-gradient-to-r ${stat.numGrad} bg-clip-text text-transparent mb-1`}>{stat.value}</div>
                  <div className="relative z-10 text-sm text-white/40 font-normal">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-normal text-white mb-4">How It Works</h2>
            <p className="text-white/40 font-normal">Institutional-grade research intelligence, automated end-to-end</p>
          </div>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className={`grid md:grid-cols-2 gap-12 items-center mb-32 last:mb-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="max-w-lg">
                  <div className="flex items-center gap-2 mb-5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                    </span>
                    <span className="text-xs font-normal text-blue-400/80 tracking-widest uppercase">{feature.tag}</span>
                  </div>
                  <div className="relative border border-white/5 rounded-xl p-6 bg-white/[0.02]">
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-blue-500/40 rounded-tl-xl" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-blue-500/40 rounded-tr-xl" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-blue-500/40 rounded-bl-xl" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-blue-500/40 rounded-br-xl" />
                    <h3 className="text-3xl sm:text-4xl font-normal text-white mb-4 leading-tight">{feature.title}</h3>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-0.5 bg-gradient-to-b from-blue-500/60 to-transparent rounded-full mt-1" />
                      <p className="text-white/50 font-normal leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-br ${feature.halo} to-transparent rounded-3xl blur-2xl opacity-60`} />
                  <div className="relative rounded-2xl overflow-hidden bg-transparent">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full object-contain mx-auto bg-transparent"
                      style={{ maxWidth: feature.width, maxHeight: feature.height }}
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600/000000/ffffff?text=Feature+Preview'; }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-normal text-white mb-4">Core Capabilities</h2>
            <p className="text-white/40 font-normal">Everything you need, built for enterprise scale</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
            {capabilities.map((capability, index) => {
              const CapIcon = capability.icon;
              return (
                <div key={index} className="group relative bg-[#0d1117] p-8 hover:bg-[#0f1520] transition-colors duration-300 overflow-hidden">
                  <div className={`absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent ${capability.topLine} to-transparent`} />
                  <div className={`w-10 h-10 rounded-xl ${capability.iconBg} border ${capability.iconBorder} flex items-center justify-center mb-5`}>
                    <CapIcon className={`w-5 h-5 ${capability.color}`} />
                  </div>
                  <h3 className="text-lg font-normal text-white mb-2">{capability.title}</h3>
                  <p className="text-white/40 text-sm font-normal leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px] pointer-events-none" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl sm:text-6xl font-normal text-white mb-6">Ready to Analyze?</h2>
          <p className="text-xl text-white/50 font-normal mb-12">
            Let's build your AI fundamental analysis system together
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white/5 backdrop-blur-sm text-white text-lg font-normal rounded-xl border border-white/10 hover:border-white/20 hover:bg-white/8 transition-all duration-300">
              Talk to an Expert
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FundamentalAnalysisPage;
