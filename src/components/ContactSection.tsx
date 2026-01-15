'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background with rich gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#03366d]/8 via-[#f1f5f9] to-[#D4AF37]/8" />

        {/* Animated orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-[#03366d]/20 to-[#03366d]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
            x: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-gradient-to-tr from-[#D4AF37]/25 to-[#D4AF37]/5 rounded-full blur-3xl"
        />

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              backgroundColor: i % 2 === 0 ? '#03366d' : '#D4AF37',
              opacity: 0.2,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Animated accent lines */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/3 left-0 w-[200%] h-px bg-gradient-to-r from-transparent via-[#03366d]/10 to-transparent"
        />
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          className="absolute top-2/3 left-0 w-[200%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/10 to-transparent"
        />

        {/* Static accent lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#03366d]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        {/* Animated corner decorations */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 left-10 w-20 h-20 border-l-2 border-t-2 border-[#03366d]/20 rounded-tl-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-10 right-10 w-20 h-20 border-r-2 border-b-2 border-[#D4AF37]/20 rounded-br-3xl"
        />

        {/* Rotating circle accents */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#03366d]/5 rounded-full"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-[#D4AF37]/5 rounded-full"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Email Card */}
          <motion.a
            href="mailto:hello@syntalysgroup.com"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#03366d]/20 transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#03366d]/10 to-[#03366d]/5 flex items-center justify-center flex-shrink-0 group-hover:from-[#03366d] group-hover:to-[#024a8a] transition-all duration-300">
                <Mail className="text-[#03366d] group-hover:text-white transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#03366d] mb-1">{t.contact.email}</h3>
                <p className="text-gray-600 group-hover:text-[#03366d] transition-colors flex items-center gap-2">
                  hello@syntalysgroup.com
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
              </div>
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37]/15 to-[#D4AF37]/5 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-[#D4AF37]" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#03366d] mb-1">{t.contact.location}</h3>
                <p className="text-gray-600">{t.contact.locationValue}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Division Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-6">{t.footer.divisions}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://syntalys.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl text-[#03366d] font-medium shadow-md border border-gray-100 hover:shadow-lg hover:bg-[#03366d] hover:text-white hover:border-[#03366d] transition-all duration-300"
            >
              SYNTALYS TECH
            </a>
            <a
              href="https://sports.syntalys.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/80 backdrop-blur-sm rounded-xl text-[#03366d] font-medium shadow-md border border-gray-100 hover:shadow-lg hover:bg-[#03366d] hover:text-white hover:border-[#03366d] transition-all duration-300"
            >
              SYNTALYS SPORTS
            </a>
            <span className="px-6 py-3 bg-gray-50 rounded-xl text-gray-400 font-medium cursor-not-allowed border border-gray-100">
              SYNTALYS INMO
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
