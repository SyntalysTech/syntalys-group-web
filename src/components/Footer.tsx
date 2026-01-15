'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#03366d] text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-xl p-2">
                <Image
                  src="/logos/syntalys-group/logo-horizontal.png"
                  alt="SYNTALYS GROUP"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">SYNTALYS GROUP</h3>
                <p className="text-[#D4AF37] text-sm font-medium">Swiss Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              {t.footer.description}
            </p>
          </motion.div>

          {/* Divisions Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-[#D4AF37]">{t.footer.divisions}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://syntalys.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  SYNTALYS TECH
                </a>
              </li>
              <li>
                <a
                  href="https://sports.syntalys.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  SYNTALYS SPORTS
                </a>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed">
                  SYNTALYS INMO
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Legal Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-[#D4AF37]">{t.footer.legal}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {t.footer.terms}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  {t.footer.imprint}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} SYNTALYS GROUP SA. {t.footer.rights}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
