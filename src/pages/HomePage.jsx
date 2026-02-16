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
    <div className="bg-gray-900">
      <HeroSection
        title="AI as Infrastructure"
        subtitle="From start to live in weeks."
        description="Xendex AI designs and operates production-grade AI systems using sprint-based execution, turning AI from pilots and experiments into dependable, owned infrastructure that runs inside real business environments."
        ctaText="Speak With Our AI Experts"
        ctaLink="#contact"
        showLogos={false}
      />

      <ValuePropositionSection />

      <ChallengesSection />

      {/* <HowWeSupportSection /> */}

      <FiveVsSection />

      <MakeAIRealSection />

      {/* <SummaryStatementSection /> */}
    </div>
  );
};

export default HomePage;