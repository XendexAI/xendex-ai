import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Form submitted:', formData);
    setTimeout(() => {
      setFormData({
        fullName: '',
        workEmail: '',
        company: '',
        message: ''
      });
      setSubmitted(false);
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative min-h-screen bg-gradient-to-b from-[#0a0d14] via-[#0d1117] to-[#0a0d14] overflow-hidden"
    >
      {/* Premium Animated Backdrop */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            top: ['0%', '100%'],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/2 left-1/4 w-96 h-96 bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{ 
            bottom: ['0%', '100%'],
            opacity: [0.3, 0, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent rounded-full blur-3xl opacity-20"
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl sm:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Let's Build <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Something Great
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-400 max-w-xl mx-auto"
          >
            Share your vision and let our team craft the perfect AI solution for your business
          </motion.p>
        </motion.div>

        {/* Main Content - 2 Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="px-4 sm:px-6 lg:px-8 pb-20"
        >
          <div className="max-w-6xl mx-auto">
            {!submitted ? (
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Form */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="order-2 lg:order-1"
                >
                  <motion.form 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1, delayChildren: 0.4 }
                      }
                    }}
                  >
                    {/* Full Name */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-3">
                        Full Name
                      </label>
                      <motion.input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('fullName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John Anderson"
                        required
                        whileFocus={{ scale: 1.01 }}
                        className={`w-full px-5 py-3 rounded-lg text-white placeholder-gray-500 transition-all duration-300 font-medium ${
                          focusedField === 'fullName'
                            ? 'bg-white/[0.08] border-2 border-cyan-500/60 shadow-lg shadow-cyan-500/20'
                            : 'bg-white/[0.05] border-2 border-white/[0.1] hover:border-white/[0.2]'
                        }`}
                      />
                    </motion.div>

                    {/* Email */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-3">
                        Work Email
                      </label>
                      <motion.input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('workEmail')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="john@company.com"
                        required
                        whileFocus={{ scale: 1.01 }}
                        className={`w-full px-5 py-3 rounded-lg text-white placeholder-gray-500 transition-all duration-300 font-medium ${
                          focusedField === 'workEmail'
                            ? 'bg-white/[0.08] border-2 border-blue-500/60 shadow-lg shadow-blue-500/20'
                            : 'bg-white/[0.05] border-2 border-white/[0.1] hover:border-white/[0.2]'
                        }`}
                      />
                    </motion.div>

                    {/* Company */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-3">
                        Company
                      </label>
                      <motion.input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Your company"
                        whileFocus={{ scale: 1.01 }}
                        className={`w-full px-5 py-3 rounded-lg text-white placeholder-gray-500 transition-all duration-300 font-medium ${
                          focusedField === 'company'
                            ? 'bg-white/[0.08] border-2 border-indigo-500/60 shadow-lg shadow-indigo-500/20'
                            : 'bg-white/[0.05] border-2 border-white/[0.1] hover:border-white/[0.2]'
                        }`}
                      />
                    </motion.div>

                    {/* Message */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <label className="block text-sm font-medium text-gray-200 mb-3">
                        Tell us about your project
                      </label>
                      <motion.textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Describe your vision, goals, and what you'd like to achieve..."
                        rows="5"
                        required
                        whileFocus={{ scale: 1.01 }}
                        className={`w-full px-5 py-3 rounded-lg text-white placeholder-gray-500 transition-all duration-300 font-medium resize-none ${
                          focusedField === 'message'
                            ? 'bg-white/[0.08] border-2 border-purple-500/60 shadow-lg shadow-purple-500/20'
                            : 'bg-white/[0.05] border-2 border-white/[0.1] hover:border-white/[0.2]'
                        }`}
                      />
                    </motion.div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full mt-8 py-3 px-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:via-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-500/40 flex items-center justify-center gap-2"
                    >
                      <span>Send Request</span>
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </motion.button>

                    <motion.p
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1 }
                      }}
                      className="text-center text-gray-500 text-sm"
                    >
                      We'll respond within 24 hours
                    </motion.p>
                  </motion.form>
                </motion.div>

                {/* Right: Value Props */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="order-1 lg:order-2"
                >
                  <div className="space-y-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="space-y-3"
                    >
                      <h2 className="text-4xl font-bold text-white leading-tight">
                        Why Choose Us?
                      </h2>
                      <p className="text-gray-400 text-lg">
                        We transform bold ideas into powerful AI solutions
                      </p>
                    </motion.div>

                    {/* Value Cards */}
                    <div className="space-y-4">
                      {[
                        {
                          icon: '⚡',
                          title: 'Lightning Fast',
                          desc: '24-hour response time on all inquiries'
                        },
                        {
                          icon: '🎯',
                          title: 'Expert Team',
                          desc: 'Industry-leading AI specialists'
                        },
                        {
                          icon: '📈',
                          title: 'Proven Results',
                          desc: 'Trusted by 150+ companies worldwide'
                        },
                        {
                          icon: '🛡️',
                          title: 'Enterprise Grade',
                          desc: 'Production-ready solutions'
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="p-4 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-300 group cursor-pointer hover:bg-white/[0.08]"
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-3xl">{item.icon}</span>
                            <div>
                              <h3 className="font-semibold text-white mb-1">
                                {item.title}
                              </h3>
                              <p className="text-gray-400 text-sm">
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10"
                    >
                      <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          150+
                        </div>
                        <div className="text-sm text-gray-400">Companies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                          98%
                        </div>
                        <div className="text-sm text-gray-400">Success Rate</div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ) : (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center py-20"
              >
                <motion.div
                  animate={{ scale: [0.9, 1.15, 1] }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="inline-block mb-8"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 blur-xl opacity-60"
                    />
                    <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/10 border-2 border-green-500/50 flex items-center justify-center">
                      <CheckCircle2 className="w-16 h-16 text-green-400" />
                    </div>
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-5xl font-bold text-white mb-4"
                >
                  All Set!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-400 mb-2"
                >
                  We've received your request
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-500 max-w-xl mx-auto"
                >
                  Our team is reviewing your details. You'll receive a confirmation email shortly, and we'll be in touch within 24 hours.
                </motion.p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
