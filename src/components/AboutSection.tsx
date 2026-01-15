'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Shield, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t.about.values.excellence.title,
      description: t.about.values.excellence.description,
      color: '#03366d',
    },
    {
      icon: Lightbulb,
      title: t.about.values.innovation.title,
      description: t.about.values.innovation.description,
      color: '#D4AF37',
    },
    {
      icon: Shield,
      title: t.about.values.integrity.title,
      description: t.about.values.integrity.description,
      color: '#03366d',
    },
    {
      icon: TrendingUp,
      title: t.about.values.impact.title,
      description: t.about.values.impact.description,
      color: '#D4AF37',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background with elegant gradient */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#03366d]/3 to-[#D4AF37]/5" />

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#03366d]/20 to-transparent" />

        {/* Floating shapes */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-10 w-72 h-72 bg-[#D4AF37]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-40 left-10 w-96 h-96 bg-[#03366d]/10 rounded-full blur-3xl"
        />

        {/* Geometric accents */}
        <div className="absolute top-20 left-20 w-40 h-40 border border-[#03366d]/10 rounded-3xl rotate-12" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-[#D4AF37]/10 rounded-3xl -rotate-12" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-6">
            {t.about.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center text-[#03366d] mb-12"
          >
            {t.about.values.title}
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-[#03366d]/20 hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `${value.color}15` }}
                  >
                    <Icon size={36} style={{ color: value.color }} />
                  </motion.div>
                  <h4 className="text-xl font-bold text-[#0a0a0a] mb-3 group-hover:text-[#03366d] transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[#03366d] via-[#024a8a] to-[#03366d] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          {/* Decorative elements inside stats bar */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">3</div>
              <div className="text-sm md:text-base opacity-80">Divisions</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">CH</div>
              <div className="text-sm md:text-base opacity-80">Swiss Based</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">6</div>
              <div className="text-sm md:text-base opacity-80">Languages</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">24/7</div>
              <div className="text-sm md:text-base opacity-80">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
