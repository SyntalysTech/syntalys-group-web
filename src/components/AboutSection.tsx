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
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent" />
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
                  className="group text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: `${value.color}10` }}
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
          className="bg-gradient-to-r from-[#03366d] to-[#024a8a] rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
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
