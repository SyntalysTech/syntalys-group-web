'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

interface DivisionCardProps {
  name: string;
  tagline: string;
  description: string;
  services: string[];
  cta: string;
  href: string;
  logoPath: string;
  bannerPath: string;
  comingSoon?: string;
  delay?: number;
}

export default function DivisionCard({
  name,
  tagline,
  description,
  services,
  cta,
  href,
  logoPath,
  bannerPath,
  comingSoon,
  delay = 0,
}: DivisionCardProps) {
  const isComingSoon = !!comingSoon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay }}
      className="card-hover relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
    >
      {/* Banner Image */}
      <div className="banner-container relative">
        <Image
          src={bannerPath}
          alt={`${name} banner`}
          fill
          className="object-cover"
          priority
        />

        {/* Coming Soon Badge */}
        {isComingSoon && (
          <div className="absolute top-4 right-4 z-10">
            <span className="coming-soon-badge">{comingSoon}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-14 h-14 flex-shrink-0 bg-gray-50 rounded-xl p-2">
            <Image
              src={logoPath}
              alt={name}
              fill
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="font-bold text-xl text-[#03366d]">{name}</h3>
            <p className="text-sm text-[#D4AF37] font-medium">{tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        {/* Services */}
        <ul className="space-y-3 mb-6">
          {services.map((service, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1 * index }}
              className="flex items-start gap-3"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#03366d]/10 flex items-center justify-center mt-0.5">
                <Check size={12} className="text-[#03366d]" />
              </span>
              <span className="text-gray-700 text-sm">{service}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        {isComingSoon ? (
          <button
            disabled
            className="w-full py-3 px-6 rounded-xl bg-gray-100 text-gray-400 font-semibold flex items-center justify-center gap-2 cursor-not-allowed"
          >
            {cta}
          </button>
        ) : (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-6 rounded-xl bg-[#03366d] text-white font-semibold flex items-center justify-center gap-2 hover:bg-[#024a8a] transition-colors group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {cta}
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
        )}
      </div>

      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#D4AF37]/10 to-transparent pointer-events-none" />
    </motion.div>
  );
}
