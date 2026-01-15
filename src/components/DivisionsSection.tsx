'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import DivisionCard from './DivisionCard';

export default function DivisionsSection() {
  const { t } = useLanguage();

  const divisions = [
    {
      name: t.tech.name,
      tagline: t.tech.tagline,
      description: t.tech.description,
      services: t.tech.services,
      cta: t.tech.cta,
      href: 'https://syntalys.ch',
      logoPath: '/logos/syntalys-tech/logo-horizontal.png',
      bannerPath: '/images/banners/banner-tech.png',
    },
    {
      name: t.sports.name,
      tagline: t.sports.tagline,
      description: t.sports.description,
      services: t.sports.services,
      cta: t.sports.cta,
      href: 'https://sports.syntalys.ch',
      logoPath: '/logos/syntalys-sports/logo-horizontal.png',
      bannerPath: '/images/banners/banner-sports.png',
    },
    {
      name: t.inmo.name,
      tagline: t.inmo.tagline,
      description: t.inmo.description,
      services: t.inmo.services,
      cta: t.inmo.cta,
      href: 'https://inmo.syntalys.ch',
      logoPath: '/logos/syntalys-inmo/logo-horizontal.png',
      bannerPath: '/images/banners/banner-inmo.png',
      comingSoon: t.inmo.comingSoon,
    },
  ];

  return (
    <section id="divisions" className="py-24 relative overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#03366d]/5 via-[#f8fafc] to-white" />

        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
        <motion.div
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 -left-20 w-96 h-96 bg-[#03366d]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 -right-20 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl"
        />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#03366d 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            {t.divisions.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.divisions.subtitle}
          </p>
          {/* Decorative line */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <div className="w-12 h-1 bg-[#03366d] rounded-full" />
            <div className="w-3 h-3 bg-[#D4AF37] rounded-full" />
            <div className="w-12 h-1 bg-[#03366d] rounded-full" />
          </div>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <DivisionCard
              key={division.name}
              {...division}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
