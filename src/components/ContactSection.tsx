'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-[#03366d] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"
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
            className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#03366d]/20 transition-all duration-300"
            whileHover={{ y: -4 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#03366d]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#03366d] transition-colors">
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
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
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
              className="px-6 py-3 bg-white rounded-xl text-[#03366d] font-medium shadow-md hover:shadow-lg hover:bg-[#03366d] hover:text-white transition-all duration-300"
            >
              SYNTALYS TECH
            </a>
            <a
              href="https://sports.syntalys.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white rounded-xl text-[#03366d] font-medium shadow-md hover:shadow-lg hover:bg-[#03366d] hover:text-white transition-all duration-300"
            >
              SYNTALYS SPORTS
            </a>
            <span className="px-6 py-3 bg-gray-100 rounded-xl text-gray-400 font-medium cursor-not-allowed">
              SYNTALYS INMO
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
