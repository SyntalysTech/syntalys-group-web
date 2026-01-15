'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Mail, Globe, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const divisions = [
    {
      name: 'SYNTALYS TECH',
      icon: '/images/icons/syntalys_tech.png',
      href: 'https://syntalys.ch',
      active: true,
    },
    {
      name: 'SYNTALYS SPORTS',
      icon: '/images/icons/syntalys_sports.png',
      href: 'https://sports.syntalys.ch',
      active: true,
    },
    {
      name: 'SYNTALYS INMO',
      icon: '/images/icons/syntalys_inmo.png',
      href: 'https://inmo.syntalys.ch',
      active: false,
    },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-[#03366d] via-[#D4AF37] to-[#03366d]" />

      {/* Main footer content */}
      <div className="bg-gradient-to-br from-[#03366d] via-[#024a8a] to-[#03366d] text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #D4AF37 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
          {/* Top section with logo and divisions */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/images/icons/syntalys_group.png"
                    alt="SYNTALYS GROUP"
                    fill
                    className="object-contain p-1"
                  />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">SYNTALYS GROUP</h3>
                  <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase">Swiss Excellence</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                {t.footer.description}
              </p>

              {/* Contact info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <MapPin size={16} className="text-[#D4AF37]" />
                  <span>Switzerland</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Mail size={16} className="text-[#D4AF37]" />
                  <a href="mailto:contact@syntalys.group" className="hover:text-white transition-colors">
                    contact@syntalys.group
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <Globe size={16} className="text-[#D4AF37]" />
                  <span>6 Languages</span>
                </div>
              </div>
            </motion.div>

            {/* Divisions grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="text-sm font-semibold mb-6 text-[#D4AF37] tracking-widest uppercase">
                {t.footer.divisions}
              </h4>
              <div className="flex flex-col sm:flex-row gap-4">
                {divisions.map((division, index) => (
                  <motion.div
                    key={division.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    {division.active ? (
                      <a
                        href={division.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 min-w-[140px]"
                      >
                        <div className="relative w-12 h-12 mb-3">
                          <Image
                            src={division.icon}
                            alt={division.name}
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-200 group-hover:text-white transition-colors text-center">
                          {division.name}
                        </span>
                        <ArrowUpRight size={14} className="mt-2 text-gray-500 group-hover:text-[#D4AF37] transition-colors" />
                      </a>
                    ) : (
                      <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 min-w-[140px] opacity-50">
                        <div className="relative w-12 h-12 mb-3 grayscale">
                          <Image
                            src={division.icon}
                            alt={division.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span className="text-xs font-semibold text-gray-400 text-center">
                          {division.name}
                        </span>
                        <span className="text-[10px] text-[#D4AF37] mt-2 uppercase tracking-wider">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Legal links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="text-sm font-semibold mb-6 text-[#D4AF37] tracking-widest uppercase">
                {t.footer.legal}
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 inline-block"
                  >
                    {t.footer.privacy}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 inline-block"
                  >
                    {t.footer.terms}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-300 hover:text-white hover:pl-2 transition-all duration-200 inline-block"
                  >
                    {t.footer.imprint}
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} SYNTALYS GROUP SA. {t.footer.rights}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 text-xs">Made with</span>
                <span className="text-[#D4AF37]">&#9829;</span>
                <span className="text-gray-500 text-xs">in Switzerland</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
