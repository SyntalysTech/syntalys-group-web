'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';

interface DivisionCardProps {
  name: string;
  tagline: string;
  description: string;
  services: string[];
  cta: string;
  href: string;
  logoPath: string;
  bannerPath: string;
  accentColor?: string;
  comingSoon?: string;
  delay?: number;
  needsInvert?: boolean;
}

export default function DivisionCard({
  name,
  description,
  services,
  cta,
  href,
  logoPath,
  bannerPath,
  accentColor = '#03366d',
  comingSoon,
  delay = 0,
  needsInvert = false,
}: DivisionCardProps) {
  const isComingSoon = !!comingSoon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col"
    >
      {/* Banner con overlay y logo */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={bannerPath}
          alt={`${name} banner`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority
        />
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Logo sobre el banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.2 }}
          className="absolute bottom-4 left-5 right-5"
        >
          <div className="relative w-56 h-14">
            <Image
              src={logoPath}
              alt={name}
              fill
              className={`object-contain object-left drop-shadow-lg ${needsInvert ? 'brightness-0 invert' : ''}`}
            />
          </div>
        </motion.div>

        {/* Coming Soon Badge */}
        {isComingSoon && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + 0.3, type: 'spring' }}
            className="absolute top-4 right-4 z-10"
          >
            <span className="px-4 py-1.5 bg-[#D4AF37] text-white text-[10px] font-bold rounded-full uppercase tracking-wider shadow-lg">
              {comingSoon}
            </span>
          </motion.div>
        )}

        {/* Accent line con animación */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: delay + 0.4, duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 h-1 origin-left"
          style={{ backgroundColor: accentColor }}
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow bg-white">
        {/* Description */}
        <p className="text-gray-600 mb-4 leading-relaxed text-xs">
          {description}
        </p>

        {/* Services */}
        <ul className="space-y-2 mb-4 flex-grow">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.05 * index }}
              className="flex items-start gap-2"
            >
              <span
                className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                style={{ backgroundColor: `${accentColor}15` }}
              >
                <Check size={10} style={{ color: accentColor }} />
              </span>
              <span className="text-gray-700 text-xs">{service}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        {isComingSoon ? (
          <button
            disabled
            className="w-full py-2.5 px-4 rounded-xl bg-gray-100 text-gray-400 font-semibold flex items-center justify-center gap-2 cursor-not-allowed text-xs"
          >
            {cta}
          </button>
        ) : (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-xs text-white group/btn"
            style={{ backgroundColor: accentColor }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {cta}
            <ArrowUpRight
              size={14}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
            />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}
