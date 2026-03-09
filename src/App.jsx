import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import TeslaNavbar from './components/TeslaNavbar';
import TeslaFooter from './components/TeslaFooter';
import HomePage from './pages/HomePage';
import BuildPage from './pages/BuildPage';
import SuperintelligencePage from './pages/SuperintelligencePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ConversationalAIPage from './pages/ConversationalAIPage';
import DocumentSearchPage from './pages/DocumentSearchPage';
import DataAnalysisPage from './pages/DataAnalysisPage';
import FundamentalAnalysisPage from './pages/FundamentalAnalysisPage';
import XenPodsPage from './pages/XenPodsPage';
import XenBuildsPage from './pages/XenBuildsPage';
import ContactPage from './pages/ContactPage';
import QueryVaultPage from './pages/QueryVaultPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/query-vault" element={<QueryVaultPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/xenpods" element={<XenPodsPage />} />
        <Route path="/services/xenbuilds" element={<XenBuildsPage />} />
        <Route path="/builds/conversational-ai" element={<ConversationalAIPage />} />
        <Route path="/builds/document-search" element={<DocumentSearchPage />} />
        <Route path="/builds/data-analysis" element={<DataAnalysisPage />} />
        <Route path="/builds/fundamental-analysis" element={<FundamentalAnalysisPage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/superintelligence" element={<SuperintelligencePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-secondary-darker">
        <TeslaNavbar />
        
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        
        <TeslaFooter />
      </div>
    </Router>
  );
}

export default App;
