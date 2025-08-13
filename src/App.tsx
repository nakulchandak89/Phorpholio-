import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import CertificatesSection from './components/CertificatesSection';
import InterestsSection from './components/InterestsSection';
import LanguagesSection from './components/LanguagesSection';
import ContactSection from './components/ContactSection';
import ConnectMePage from './pages/ConnectMePage';

// Main home page component that contains all sections
const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Certificates Section */}
      <CertificatesSection />

      {/* Interests Section */}
      <InterestsSection />

      {/* Languages Section */}
      <LanguagesSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-950 text-white font-inter">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/connect" element={<ConnectMePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
