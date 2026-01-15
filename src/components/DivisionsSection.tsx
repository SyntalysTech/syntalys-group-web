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
      accentColor: '#03366d',
      needsInvert: true,
    },
    {
      name: t.sports.name,
      tagline: t.sports.tagline,
      description: t.sports.description,
      services: t.sports.services,
      cta: t.sports.cta,
      href: 'https://sports.syntalys.ch',
      logoPath: '/logos/syntalys-sports/logo-horizontal-white.png',
      bannerPath: '/images/banners/banner-sports.png',
      accentColor: '#D4AF37',
      needsInvert: false,
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
      accentColor: '#03366d',
      needsInvert: true,
    },
  ];

  return (
    <section id="divisions" className="relative min-h-screen overflow-hidden">
      {/* Fondo con degradado animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#03366d] via-[#024a8a] to-[#03366d]" />

      {/* Mesh gradient animado */}
      <div className="absolute inset-0 opacity-50">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #D4AF37 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #D4AF37 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, #D4AF37 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, #D4AF37 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #D4AF37 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-10"
        />
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#D4AF37]/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Líneas diagonales animadas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/4 left-0 w-[200%] h-px bg-gradient-to-r from-transparent via-white to-transparent"
        />
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-2/3 left-0 w-[200%] h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />
      </div>

      {/* Círculos decorativos con movimiento suave */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-96 h-96 border border-white/5 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-48 -left-48 w-[500px] h-[500px] border border-[#D4AF37]/10 rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/[0.02] rounded-full"
        />
      </div>

      {/* Blob suave */}
      <motion.div
        animate={{
          borderRadius: [
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-10 w-72 h-72 bg-[#D4AF37]/10 blur-3xl"
      />
      <motion.div
        animate={{
          borderRadius: [
            '30% 60% 70% 40% / 50% 60% 30% 60%',
            '60% 40% 30% 70% / 60% 30% 70% 40%',
            '30% 60% 70% 40% / 50% 60% 30% 60%',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-10 w-80 h-80 bg-white/5 blur-3xl"
      />

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 pt-28 pb-12 relative z-10">
        {/* Subtítulo con animación */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/60 text-base text-center mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {t.divisions.subtitle}
        </motion.p>

        {/* Grid de tarjetas con stagger */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {divisions.map((division) => (
            <motion.div
              key={division.name}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    damping: 20,
                    stiffness: 100,
                  },
                },
              }}
            >
              <DivisionCard {...division} delay={0} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
