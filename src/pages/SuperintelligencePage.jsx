import React from 'react';
import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import StatsSection from '../components/StatsSection';
import CTASection from '../components/CTASection';

const SuperintelligencePage = () => {
  const heroData = {
    subtitle: 'THE FUTURE OF AI',
    title: 'Training Superintelligence for Tomorrow',
    description: 'Pioneering the next generation of artificial intelligence with cutting-edge research and responsible development.',
    primaryCTA: {
      text: 'Explore Research',
      href: '#research'
    },
    secondaryCTA: {
      text: 'Join Waitlist',
      href: '#waitlist'
    },
    badges: ['Research-First', 'Ethical AI', 'Open Collaboration']
  };

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Advanced Reasoning',
      description: 'Next-generation AI models with unprecedented reasoning capabilities and problem-solving abilities.',
      link: {
        text: 'Learn more',
        href: '#reasoning'
      }
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Human Alignment',
      description: 'Built with safety and human values at the core, ensuring AI systems that understand and respect human intent.',
      link: {
        text: 'Safety research',
        href: '#safety'
      }
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Continuous Learning',
      description: 'Self-improving systems that learn from experience and adapt to new challenges autonomously.',
      link: {
        text: 'Explore capabilities',
        href: '#learning'
      }
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Global Impact',
      description: 'Solving humanity\'s greatest challenges with AI that benefits everyone, everywhere.',
      link: {
        text: 'Our mission',
        href: '#mission'
      }
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Ethical Framework',
      description: 'Transparent and accountable AI development guided by strong ethical principles and oversight.',
      link: {
        text: 'Ethics charter',
        href: '#ethics'
      }
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Open Research',
      description: 'Contributing to the global AI research community with open publications and collaborative initiatives.',
      link: {
        text: 'Publications',
        href: '#publications'
      }
    }
  ];

  const stats = [
    {
      value: '100B+',
      label: 'Parameters',
      description: 'Model capacity'
    },
    {
      value: '50+',
      label: 'Research Papers',
      description: 'Published annually'
    },
    {
      value: '200+',
      label: 'AI Researchers',
      description: 'World-class team'
    },
    {
      value: '24/7',
      label: 'Training',
      description: 'Continuous improvement'
    }
  ];

  return (
    <div>
      <Hero {...heroData} />
      
      <FeaturesGrid
        subtitle="BREAKTHROUGH CAPABILITIES"
        title="The Path to Superintelligence"
        features={features}
      />
      
      <StatsSection stats={stats} bgColor="bg-gradient-to-br from-brand-primary-50 to-brand-accent-50" />
      
      <section className="py-20 bg-brand-secondary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Our Commitment to Safety
            </h2>
            <p className="text-xl text-brand-gray-300">
              As we push the boundaries of AI capabilities, we remain committed to developing 
              systems that are safe, beneficial, and aligned with human values.
            </p>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-brand-gray-900/50 backdrop-blur-sm border border-brand-gray-800 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">Research Priorities</h3>
              <ul className="space-y-3 text-brand-gray-300">
                <li>Robust alignment techniques for advanced AI systems</li>
                <li>Interpretability and explainability of complex models</li>
                <li>Scalable oversight and monitoring frameworks</li>
                <li>Adversarial robustness and security measures</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection
        title="Join the Future of AI Research"
        description="Be part of the team building tomorrow's intelligent systems"
        primaryCTA={{
          text: 'View Open Positions',
          href: '#careers'
        }}
        secondaryCTA={{
          text: 'Research Partnership',
          href: '#partners'
        }}
        bgColor="bg-gradient-to-r from-brand-primary-600 to-brand-accent-600"
      />
    </div>
  );
};

export default SuperintelligencePage;
