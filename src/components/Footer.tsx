'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const divisions = [
    {
      name: 'SYNTALYS TECH',
      href: 'https://syntalys.ch',
      active: true,
    },
    {
      name: 'SYNTALYS SPORTS',
      href: 'https://sports.syntalys.ch',
      active: true,
    },
    {
      name: 'SYNTALYS INMO',
      href: 'https://inmo.syntalys.ch',
      active: false,
    },
  ];

  return (
    <footer className="relative bg-[#03366d] text-white overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-0 w-[200%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -right-20 w-60 h-60 bg-[#D4AF37]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1.1, 1, 1.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 relative z-10">
        {/* Main content */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="relative w-36 h-10">
            <Image
              src="/logos/syntalys-group/logo-horizontal.png"
              alt="SYNTALYS GROUP"
              fill
              className="object-contain object-left brightness-0 invert"
            />
          </div>

          {/* Divisions links */}
          <div className="flex flex-wrap items-center gap-6">
            {divisions.map((division) => (
              division.active ? (
                <a
                  key={division.name}
                  href={division.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-[#D4AF37] transition-colors"
                >
                  {division.name}
                </a>
              ) : (
                <span
                  key={division.name}
                  className="text-sm text-white/30"
                >
                  {division.name}
                </span>
              )
            ))}
          </div>

          {/* Contact */}
          <a
            href="mailto:contact@syntalys.group"
            className="text-sm text-white/70 hover:text-[#D4AF37] transition-colors"
          >
            contact@syntalys.group
          </a>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {currentYear} SYNTALYS GROUP SA. {t.footer.rights}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/70 transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white/70 transition-colors">
              {t.footer.terms}
            </a>
            <span>Switzerland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
