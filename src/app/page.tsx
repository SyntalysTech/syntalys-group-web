'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider } from '@/context/LanguageContext';
import { SidebarProvider, useSidebar } from '@/context/SidebarContext';
import { useIsDesktop } from '@/hooks/useMediaQuery';
import Sidebar from '@/components/Sidebar';
import HeroSection from '@/components/HeroSection';
import DivisionsSection from '@/components/DivisionsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function MainContent() {
  const [activeSection, setActiveSection] = useState('home');
  const divisionsRef = useRef<HTMLDivElement>(null);
  const { isCollapsed } = useSidebar();
  const isDesktop = useIsDesktop();

  const handleNavigate = (section: string) => {
    setActiveSection(section);

    // Scroll to section
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExplore = () => {
    if (divisionsRef.current) {
      divisionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate margin based on sidebar state
  const sidebarWidth = isDesktop ? (isCollapsed ? 80 : 280) : 0;

  return (
    <div className="min-h-screen bg-white">
      <Sidebar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content - offset for sidebar on desktop with dynamic width */}
      <motion.main
        initial={false}
        animate={{ marginLeft: sidebarWidth }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="pt-16 lg:pt-0"
      >
        <section id="home">
          <HeroSection onExplore={handleExplore} />
        </section>

        <div ref={divisionsRef}>
          <DivisionsSection />
        </div>

        <AboutSection />
        <ContactSection />
        <Footer />
      </motion.main>
    </div>
  );
}

export default function Page() {
  return (
    <LanguageProvider>
      <SidebarProvider>
        <MainContent />
      </SidebarProvider>
    </LanguageProvider>
  );
}
