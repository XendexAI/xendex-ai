import React from 'react';
import HeroSection from '../components/HeroSection';
import ValuePropositionSection from '../components/ValuePropositionSection';
import ChallengesSection from '../components/ChallengesSection';
import HowWeSupportSection from '../components/HowWeSupportSection';
import OurApproachSection from '../components/OurApproachSection';
import FiveVsSection from '../components/FiveVsSection';
import MakeAIRealSection from '../components/MakeAIRealSection';
import SummaryStatementSection from '../components/SummaryStatementSection';

const HomePage = () => {
  return (
    <div className="relative" style={{ background: 'linear-gradient(to bottom, #0a0d14, #0d1117, #0a0d14)' }}>

      {/* Ambient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '8%', left: '-15%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '30%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '60%', left: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '25%', width: '450px', height: '450px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '75%', left: '-5%', width: '350px', height: '350px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(139,92,246,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '15%', right: '35%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      </div>

      {/* Dot grid */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0, opacity: 0.18, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative" style={{ zIndex: 1 }}>
      <HeroSection
        title="AI as Infrastructure"
        subtitle="From start to live in weeks."
        description="Xendex AI designs and operates production-grade AI systems using sprint-based execution, turning AI from pilots and experiments into dependable, owned infrastructure that runs inside real business environments."
        ctaText="Speak With Our AI Experts"
        ctaLink="contact"
        showLogos={false}
      />

      <ValuePropositionSection />

      <ChallengesSection />

      {/* <HowWeSupportSection /> */}

      <FiveVsSection />

      <MakeAIRealSection />

      {/* <SummaryStatementSection /> */}
      </div>
    </div>
  );
};

export default HomePage;