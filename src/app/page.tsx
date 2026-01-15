'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import DivisionsSection from '@/components/DivisionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <DivisionsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}
