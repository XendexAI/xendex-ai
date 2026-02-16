import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const HeroSection = ({ 
  title = "Intelligence Becomes Infrastructure",
  subtitle = "From start to live in weeks.",
  description = "Xendex AI designs and operates production-grade AI systems using sprint-based execution, turning AI from pilots and experiments into dependable, owned infrastructure that runs inside real business environments.",
  ctaText = "Speak With Our AI Experts",
  ctaLink = "#contact",
  showLogos = true,
  logos = []
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [gridHover, setGridHover] = useState({ x: -1, y: -1 });
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  
  const smoothMouseX = useSpring(0, { damping: 30, stiffness: 200 });
  const smoothMouseY = useSpring(0, { damping: 30, stiffness: 200 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
      smoothMouseX.set(x);
      smoothMouseY.set(y);
      
      // Calculate grid cell position
      const gridSize = 100;
      const gridX = Math.floor(clientX / gridSize);
      const gridY = Math.floor(clientY / gridSize);
      setGridHover({ x: gridX, y: gridY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [smoothMouseX, smoothMouseY]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/xendex.webp"
          alt="Xendex AI Background"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Cinematic Multi-Layer Background */}
      <div className="absolute inset-0 z-10 opacity-30">
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-transparent" />
        
        {/* Dynamic Depth Layers with Parallax */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: y3,
            x: useTransform(smoothMouseX, [-1, 1], [-20, 20])
          }}
        >
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-[100px] animate-pulse" 
               style={{ animationDuration: '4s' }} />
        </motion.div>

        <motion.div 
          className="absolute inset-0"
          style={{ 
            y: y2,
            x: useTransform(smoothMouseX, [-1, 1], [-40, 40])
          }}
        >
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-tl from-purple-600/15 via-blue-600/10 to-transparent rounded-full blur-[120px]" />
        </motion.div>

        {/* Cinematic Light Rays */}
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `conic-gradient(from ${mousePosition.x * 20}deg at ${50 + mousePosition.x * 15}% ${50 + mousePosition.y * 15}%, 
              transparent 0deg, 
              rgba(6, 182, 212, 0.05) 60deg, 
              transparent 120deg,
              rgba(139, 92, 246, 0.05) 180deg,
              transparent 240deg,
              rgba(6, 182, 212, 0.03) 300deg,
              transparent 360deg)`,
          }}
        />

        {/* Animated Grid with Perspective - HIDDEN */}
        <motion.div 
          className="absolute inset-0 opacity-0 hover:opacity-0 transition-opacity duration-500"
          style={{ 
            y: y2,
            rotateX: useTransform(smoothMouseY, [-1, 1], [2, -2])
          }}
        >
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(6, 182, 212, 0.4) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 182, 212, 0.4) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              transform: 'perspective(800px) rotateX(60deg) translateY(100px)',
              transformOrigin: 'center center',
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)'
            }}
          />
        </motion.div>

        {/* Atmospheric Fog - HIDDEN */}
        <div className="absolute inset-0 opacity-0" />
        
        {/* Content Area Darkening - HIDDEN */}
        <div className="absolute inset-0 opacity-0" />
      </div>

      {/* Cinematic Content Container */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32"
        style={{ 
          y, 
          opacity, 
          scale
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 flex justify-center"
        >
          <motion.div 
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Gradient Border */}
            <motion.div
              className="absolute -inset-[1px] rounded-full opacity-75 blur-sm"
              animate={{
                background: [
                  'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                  'linear-gradient(180deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                  'linear-gradient(270deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                  'linear-gradient(360deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Main Badge */}
            <div className="relative flex items-center gap-3 px-8 py-3 rounded-full bg-gray-900/90 backdrop-blur-xl border border-white/10 overflow-hidden">
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent)',
                    'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                    'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                  ],
                  x: ['-100%', '200%']
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Animated Icon */}
              <motion.div className="relative flex items-center justify-center w-5 h-5">
                <motion.div
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                  animate={{
                    boxShadow: [
                      '0 0 8px rgba(6, 182, 212, 0.8)',
                      '0 0 16px rgba(59, 130, 246, 0.8)',
                      '0 0 8px rgba(6, 182, 212, 0.8)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.svg
                  className="w-5 h-5 text-cyan-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </motion.svg>
              </motion.div>
              
              {/* Text with Gradient */}
              <span className="relative text-sm font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-[0.2em]">
                NEXT GEN AI PLATFORM
              </span>
              
              {/* Sparkle Effect */}
              <motion.div
                className="absolute right-4 w-1 h-1 rounded-full bg-white"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Cinematic Title with Advanced Animation */}
        <div className="mb-12 text-center">
          <motion.h1 
            className="text-3xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {title.split(' ').map((word, wordIndex) => (
              <div key={wordIndex} className="inline-block overflow-hidden mr-4 mb-4">
                <motion.span
                  className="inline-block"
                  initial={{ y: 100, rotateX: -90 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{ 
                    duration: 0.8,
                    delay: 0.2 + wordIndex * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-b from-white via-white/95 to-white/50 bg-clip-text text-transparent">
                      {word}
                    </span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.4, 0] }}
                      transition={{ 
                        duration: 2,
                        delay: 0.2 + wordIndex * 0.15,
                        ease: "easeInOut"
                      }}
                    >
                      {word}
                    </motion.span>
                  </span>
                </motion.span>
              </div>
            ))}
          </motion.h1>
        </div>

        {/* Cinematic Subtitle */}
        {subtitle && (
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl lg:text-4xl font-medium text-center mb-10 bg-gradient-to-r from-zinc-300 via-zinc-200 to-zinc-300 bg-clip-text text-transparent"
          >
            {subtitle}
          </motion.h2>
        )}

        {/* Cinematic Description with Reveal */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -left-12 top-1/2 w-8 h-[1px] bg-gradient-to-r from-transparent to-cyan-500/50"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -right-12 top-1/2 w-8 h-[1px] bg-gradient-to-l from-transparent to-purple-500/50"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm lg:text-base text-center text-zinc-300 leading-relaxed font-light"
          >
            {(description).split(' ').map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 + i * 0.03 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* Cinematic CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center mb-20"
        >
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Gradient Border */}
            <motion.div
              className="absolute -inset-[2px] rounded-full opacity-75 blur-sm"
              animate={{
                background: [
                  'linear-gradient(90deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                  'linear-gradient(180deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                  'linear-gradient(270deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                  'linear-gradient(360deg, #06b6d4, #3b82f6, #8b5cf6, #06b6d4)',
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Main Button */}
            <a
              href={ctaLink}
              className="relative flex items-center gap-3 px-10 py-4 rounded-full bg-gray-900/90 backdrop-blur-xl border border-white/10 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.3), transparent)',
                    'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)',
                    'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)',
                  ],
                  x: ['-100%', '200%']
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Text with Gradient */}
              <span className="relative text-base font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-[0.1em]">
                {ctaText}
              </span>
              
              {/* Sparkle Effect */}
              <motion.div
                className="absolute right-6 w-1 h-1 rounded-full bg-white"
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            </a>
          </motion.div>
        </motion.div>

        {/* Cinematic Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="relative max-w-5xl mx-auto"
        >
          <motion.div 
            className="absolute left-0 top-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-3xl cursor-pointer"
            whileHover={{ 
              borderColor: "rgba(6, 182, 212, 0.9)", 
              scale: 1.08,
              backgroundColor: "rgba(6, 182, 212, 0.05)"
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div 
            className="absolute right-0 bottom-0 w-32 h-32 border-r-2 border-b-2 border-cyan-500/30 rounded-br-3xl cursor-pointer"
            whileHover={{ 
              borderColor: "rgba(6, 182, 212, 0.9)", 
              scale: 1.08,
              backgroundColor: "rgba(6, 182, 212, 0.05)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
