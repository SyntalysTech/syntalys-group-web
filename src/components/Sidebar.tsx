'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  ChevronLeft,
  Home,
  Building2,
  Mail,
  Globe,
  Check,
  Menu,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useSidebar } from '@/context/SidebarContext';
import { languages, Locale } from '@/i18n';

interface SidebarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const { isCollapsed, setIsCollapsed } = useSidebar();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu on navigation
  const handleNavigation = (section: string) => {
    onNavigate(section);
    setIsMobileOpen(false);
  };

  const navItems = [
    { id: 'home', icon: Home, label: t.sidebar.home },
    { id: 'about', icon: Building2, label: t.sidebar.about },
    { id: 'contact', icon: Mail, label: t.sidebar.contact },
  ];

  const sidebarContent = (isMobile: boolean = false) => (
    <>
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <motion.div
            className="relative w-12 h-12 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Image
              src="/logos/syntalys-group/logo-horizontal.png"
              alt="SYNTALYS GROUP"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
          <AnimatePresence mode="wait">
            {(!isCollapsed || isMobile) && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <h1 className="font-bold text-[#03366d] text-lg leading-tight whitespace-nowrap">
                  {t.sidebar.title}
                </h1>
                <p className="text-xs text-[#D4AF37] font-medium whitespace-nowrap">
                  {t.sidebar.subtitle}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <motion.button
                  onClick={() => handleNavigation(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'bg-[#03366d] text-white shadow-lg shadow-[#03366d]/20'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-[#03366d]'
                  } ${isCollapsed && !isMobile ? 'justify-center' : ''}`}
                  whileHover={{ x: isActive ? 0 : 4 }}
                  whileTap={{ scale: 0.98 }}
                  title={isCollapsed && !isMobile ? item.label : undefined}
                >
                  <Icon
                    size={20}
                    className={isActive ? 'text-[#D4AF37]' : ''}
                  />
                  <AnimatePresence mode="wait">
                    {(!isCollapsed || isMobile) && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="font-medium whitespace-nowrap"
                      >
                        {item.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Language Selector */}
      <div className="p-4 border-t border-gray-100">
        <div className="relative">
          <motion.button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-[#03366d] transition-all duration-300 ${isCollapsed && !isMobile ? 'justify-center' : ''}`}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            title={isCollapsed && !isMobile ? t.sidebar.language : undefined}
          >
            <Globe size={20} />
            <AnimatePresence mode="wait">
              {(!isCollapsed || isMobile) && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="font-medium flex-1 text-left whitespace-nowrap"
                >
                  {languages.find((l) => l.code === locale)?.name}
                </motion.span>
              )}
            </AnimatePresence>
            {(!isCollapsed || isMobile) && (
              <motion.div
                animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronLeft size={16} className="rotate-[-90deg]" />
              </motion.div>
            )}
          </motion.button>

          <AnimatePresence>
            {isLanguageOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`absolute ${
                  isCollapsed && !isMobile ? 'left-full ml-2 bottom-0' : 'bottom-full mb-2 left-0 right-0'
                } bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 min-w-[180px]`}
              >
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code as Locale);
                      setIsLanguageOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                      locale === lang.code ? 'bg-[#03366d]/5 text-[#03366d]' : 'text-gray-600'
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-medium whitespace-nowrap">{lang.name}</span>
                    {locale === lang.code && (
                      <Check size={16} className="ml-auto text-[#D4AF37]" />
                    )}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Collapse Button - Desktop only */}
      {!isMobile && (
        <div className="p-4 border-t border-gray-100">
          <motion.button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`w-full flex items-center gap-2 px-4 py-3 rounded-xl text-gray-400 hover:bg-gray-50 hover:text-[#03366d] transition-all duration-300 ${isCollapsed ? 'justify-center' : 'justify-center'}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            title={isCollapsed ? t.sidebar.expand : t.sidebar.collapse}
          >
            <motion.div
              animate={{ rotate: isCollapsed ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronLeft size={20} />
            </motion.div>
            <AnimatePresence mode="wait">
              {!isCollapsed && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-sm font-medium whitespace-nowrap"
                >
                  {t.sidebar.collapse}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      )}
    </>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-lg border-b border-gray-100 z-40 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="/logos/syntalys-group/logo-horizontal.png"
              alt="SYNTALYS GROUP"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="font-bold text-[#03366d] text-sm leading-tight">
              SYNTALYS GROUP
            </h1>
            <p className="text-xs text-[#D4AF37] font-medium">
              {t.sidebar.subtitle}
            </p>
          </div>
        </div>
        <motion.button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="p-2 rounded-xl text-[#03366d] hover:bg-gray-50 transition-colors"
          whileTap={{ scale: 0.95 }}
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed top-16 left-0 bottom-0 w-72 bg-white z-50 flex flex-col shadow-2xl"
          >
            {sidebarContent(true)}
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          width: isCollapsed ? 80 : 280,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="hidden lg:flex fixed top-0 left-0 bottom-0 bg-white border-r border-gray-100 flex-col z-30 shadow-xl"
      >
        {sidebarContent(false)}
      </motion.aside>
    </>
  );
}
