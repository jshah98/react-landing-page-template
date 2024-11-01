import React from 'react';
import NavBar from './components/landing-page/NavBar';
import HeroSection from './components/landing-page/HeroSection';
import ProblemSection from './components/landing-page/ProblemSection';
import SolutionSection from './components/landing-page/SolutionSection';
import BenefitSection from './components/landing-page/BenefitSection';
import ActionPlan from './components/landing-page/ActionPlan';
import SocialProof from './components/landing-page/SocialProof';
import FAQSection from './components/landing-page/FAQSection';
import CTA from './components/landing-page/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitSection />
      <ActionPlan />
      <SocialProof />
      <FAQSection />
      <CTA />
    </div>
  );
}

export default App;
