import React, { useState } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import AnnouncementMarquee from './components/AnnouncementMarquee';
import Hero from './components/Hero';
import AboutOverview from './components/AboutOverview';
import SchoolsShowcase from './components/SchoolsShowcase';
import ResearchMetrics from './components/ResearchMetrics';
import CampusHighlights from './components/CampusHighlights';
import PlacementRecruiters from './components/PlacementRecruiters';
import NewsAndEvents from './components/NewsAndEvents';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingCTAs from './components/FloatingCTAs';
import ApplicationModal from './components/ApplicationModal';
import FeePaymentModal from './components/FeePaymentModal';
import SearchModal from './components/SearchModal';

export default function App() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [prefillProgram, setPrefillProgram] = useState('');
  const [feeModalOpen, setFeeModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleOpenApplyModal = (program = '') => {
    setPrefillProgram(program);
    setApplyModalOpen(true);
  };

  const handleCloseApplyModal = () => {
    setApplyModalOpen(false);
    setPrefillProgram('');
  };

  const handleOpenFeeModal = () => {
    setFeeModalOpen(true);
  };

  const handleCloseFeeModal = () => {
    setFeeModalOpen(false);
  };

  const handleOpenSearchModal = () => {
    setSearchModalOpen(true);
  };

  const handleCloseSearchModal = () => {
    setSearchModalOpen(false);
  };

  const handleSelectProgramFromSearch = (programName) => {
    setSearchModalOpen(false);
    handleOpenApplyModal(programName);
  };

  return (
    <div className="min-h-screen bg-[#060a12] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* 1. Institutional Top Bar */}
      <TopBar onOpenFeeModal={handleOpenFeeModal} />

      {/* 2. Main Navigation Header */}
      <Navbar 
        onOpenApplyModal={() => handleOpenApplyModal()} 
        onOpenSearchModal={handleOpenSearchModal} 
      />

      {/* 3. Live Marquee Announcements & Accreditation Strip */}
      <AnnouncementMarquee />

      {/* 4. Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section with Dual Campus CTAs */}
        <Hero 
          onOpenApplyModal={() => handleOpenApplyModal()} 
          onOpenFeeModal={handleOpenFeeModal} 
        />

        {/* About, History, Vision & Leadership Section */}
        <AboutOverview />

        {/* Interactive Programs & Schools Directory */}
        <SchoolsShowcase onOpenApplyModal={handleOpenApplyModal} />

        {/* High-Impact Research & Innovation Metrics */}
        <ResearchMetrics />

        {/* Dynamic Campus Ecosystem & Green Infrastructure */}
        <CampusHighlights />

        {/* 100% Placement Record & Recruiter Wall */}
        <PlacementRecruiters />

        {/* Global Conferences & Campus Events */}
        <NewsAndEvents />

        {/* Student & Alumni Voices */}
        <Testimonials />
      </main>

      {/* 5. Comprehensive 6-Column Institutional Footer */}
      <Footer 
        onOpenApplyModal={() => handleOpenApplyModal()} 
        onOpenFeeModal={handleOpenFeeModal} 
      />

      {/* 6. Floating Action Buttons (Sticky Apply Tab, WhatsApp, Back to Top) */}
      <FloatingCTAs onOpenApplyModal={handleOpenApplyModal} />

      {/* 7. Interactive Modals */}
      <ApplicationModal 
        isOpen={applyModalOpen} 
        onClose={handleCloseApplyModal} 
        prefillProgram={prefillProgram} 
      />

      <FeePaymentModal 
        isOpen={feeModalOpen} 
        onClose={handleCloseFeeModal} 
      />

      <SearchModal 
        isOpen={searchModalOpen} 
        onClose={handleCloseSearchModal} 
        onSelectProgram={handleSelectProgramFromSearch} 
      />
    </div>
  );
}
