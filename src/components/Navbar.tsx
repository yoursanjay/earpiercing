import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Languages, Calendar, MapPin, Heart, Sparkles, Menu, X } from 'lucide-react';
import { invitationConfig } from '../config/invitationConfig';

interface NavbarProps {
  language: 'ta' | 'en';
  onToggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, onToggleLanguage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelTa: 'முகப்பு', labelEn: 'Home', icon: Sparkles },
    { href: '#baby', labelTa: 'குழந்தை', labelEn: 'The Child', icon: Heart },
    { href: '#traditions', labelTa: 'பாரம்பரியம்', labelEn: 'Traditions', icon: Sparkles },
    { href: '#ceremony', labelTa: 'முகூர்த்தம்', labelEn: 'Ceremony', icon: Calendar },
    { href: '#venue', labelTa: 'இருப்பிடம்', labelEn: 'Venue', icon: MapPin },
    { href: '#rsvp', labelTa: 'RSVP', labelEn: 'RSVP', icon: Heart },
  ];

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -70, opacity: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 w-full ${
        scrolled
          ? 'royal-glass py-2 sm:py-2.5 shadow-2xl border-b border-gold-500/20'
          : 'bg-gradient-to-b from-maroon-950/95 via-maroon-950/60 to-transparent py-2.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between w-full">
        {/* Sacred Traditional Emblem & Logo */}
        <a href="#home" className="flex items-center gap-2 group min-w-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-200 p-[1.5px] shadow-lg shadow-gold-500/20 group-hover:scale-105 transition-transform shrink-0">
            <div className="w-full h-full rounded-full bg-maroon-950 flex items-center justify-center">
              <span className="text-gold-300 font-bold font-tamil text-xs sm:text-sm">உ</span>
            </div>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-tamil font-bold text-xs sm:text-sm text-gold-300 tracking-wider truncate max-w-[150px] xs:max-w-[200px] sm:max-w-none">
              {language === 'ta' ? invitationConfig.child.nameTamil : invitationConfig.child.nameEnglish}
            </span>
            <span className="text-[9px] sm:text-[10px] text-ivory-200/70 tracking-widest uppercase hidden xs:block">
              {language === 'ta' ? invitationConfig.event.titleTamil : invitationConfig.event.titleEnglish}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full text-xs font-medium text-ivory-100/90 hover:text-gold-300 hover:bg-gold-500/10 transition-colors"
            >
              {language === 'ta' ? link.labelTa : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Language Switcher & Mobile Menu Trigger */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            onClick={onToggleLanguage}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full royal-glass border border-gold-400/30 hover:border-gold-400 text-[11px] sm:text-xs text-gold-200 hover:text-gold-100 transition-all font-semibold active:scale-95 shadow-sm"
            title="Switch Language / மொழியை மாற்றுக"
          >
            <Languages className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gold-400 shrink-0" />
            <span>{language === 'ta' ? 'English' : 'தமிழ்'}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 sm:p-2 rounded-lg royal-glass text-gold-300 hover:text-gold-100"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden royal-glass border-b border-gold-500/30 px-4 pt-3 pb-5 mt-2 space-y-1 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-ivory-100 hover:text-gold-300 hover:bg-gold-500/10 transition-colors"
            >
              <link.icon className="w-4 h-4 text-gold-400" />
              <span>{language === 'ta' ? link.labelTa : link.labelEn}</span>
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
};
