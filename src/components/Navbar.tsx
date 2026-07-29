import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar, Menu, X, Sun, Moon, Languages } from 'lucide-react';
import { HOTEL_PHONE, getWhatsAppLink } from '../lib/appsScript';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export default function Navbar({ currentPath, onNavigate, onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navHome, path: '/' },
    { name: t.navAbout, path: '/#about' },
    { name: t.navRooms, path: '/rooms' },
    { name: t.navMenu, path: '/restaurant' },
    { name: t.navGallery, path: '/gallery' },
    { name: t.navContact, path: '/contact' },
  ];

  const handleLinkClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0B0D]/90 backdrop-blur-xl border-b border-[#D97706]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#0D0B0D]/90 via-[#0D0B0D]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Highway Marker */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center gap-3 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-xl p-1"
            aria-label="Hotel Rajput Gateway Home"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#8B2613] via-[#4A0E17] to-[#D97706] p-0.5 shadow-[0_0_15px_rgba(217,119,6,0.3)] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#0D0B0D] rounded-[10px] flex items-center justify-center border border-[#D97706]/40">
                <span className="font-serif font-bold text-lg text-[#F59E0B]">R</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#F3EFEA] group-hover:text-[#F59E0B] transition-colors">
                  RAJPUT
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#8B2613]/80 text-[#FFF0D4] font-semibold tracking-wider uppercase border border-[#D97706]/40">
                  NH-224
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-[#B8A89A] tracking-wider uppercase font-medium">
                Highway Gateway Daspalla
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#181216]/80 p-1.5 rounded-full border border-[#D97706]/20 shadow-inner backdrop-blur-md" role="navigation" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path || (link.path.startsWith('/#') && currentPath === '/');
              return (
                <button
                  key={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  aria-label={`Navigate to ${link.name}`}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8B2613] to-[#D97706] text-white shadow-md'
                      : 'text-[#D8C9BC] hover:text-[#F59E0B] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Quick Action Buttons (Language Switcher, Theme Switcher, Call, WhatsApp, Book Now) */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-2 rounded-xl bg-[#1D161A] text-[#F59E0B] border border-[#D97706]/30 hover:border-[#D97706] hover:bg-[#281E24] transition-all flex items-center gap-1.5 text-xs font-bold font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label={`Switch language to ${language === 'en' ? 'Odia (ଓଡ଼ିଆ)' : 'English'}`}
              title={`Active: ${language === 'en' ? 'English' : 'ଓଡ଼ିଆ'} - Click to Switch`}
            >
              <Languages className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{language === 'en' ? 'EN' : 'ଓଡ଼ିଆ'}</span>
            </button>

            {/* Theme Switcher Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-[#1D161A] text-[#F59E0B] border border-[#D97706]/30 hover:border-[#D97706] hover:bg-[#281E24] transition-all flex items-center justify-center gap-1.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label={`Switch theme to ${theme === 'dark' ? 'Morning Light (High-Contrast Light)' : 'Royal Gold (Dark)'}`}
              title={`Active: ${theme === 'dark' ? 'Royal Gold (Dark)' : 'Morning Light (Light)'} - Click to Switch`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-[#F59E0B] transition-transform group-hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-[#8B2613] transition-transform group-hover:-rotate-12" />
              )}
            </button>

            <a
              href={`tel:${HOTEL_PHONE}`}
              className="p-2.5 rounded-xl bg-[#1D161A] text-[#F59E0B] border border-[#D97706]/30 hover:border-[#D97706] hover:bg-[#281E24] transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              title="Call Front Desk 24/7"
              aria-label="Call Front Desk 24/7"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink("Hello Hotel Rajput, I would like to inquire about room booking and menu.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[#122A1E] text-[#34D399] border border-[#34D399]/30 hover:border-[#34D399] hover:bg-[#1A3828] transition-all flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              aria-label="Open Room Booking Form"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-[#0D0B0D] font-bold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all flex items-center gap-1.5 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.bookNow}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button & Switchers */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-2 rounded-xl bg-[#1D161A] text-[#F59E0B] border border-[#D97706]/30 text-xs font-bold font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label="Switch Language"
            >
              {language === 'en' ? 'EN' : 'ଓଡ଼ିଆ'}
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-[#1D161A] text-[#F59E0B] border border-[#D97706]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label={`Switch theme to ${theme === 'dark' ? 'Morning Light Light Theme' : 'Royal Gold Dark Theme'}`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-[#F59E0B]" /> : <Moon className="w-5 h-5 text-[#8B2613]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#1D161A] text-[#F3EFEA] border border-[#D97706]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F59E0B]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-[#0D0B0D]/95 backdrop-blur-2xl border-b border-[#D97706]/30 p-6 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleLinkClick(link.path)}
                aria-label={`Navigate to ${link.name}`}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  currentPath === link.path
                    ? 'bg-gradient-to-r from-[#8B2613] to-[#D97706] text-white font-bold'
                    : 'text-[#D8C9BC] hover:bg-white/5 hover:text-[#F59E0B]'
                }`}
              >
                {link.name}
              </button>
            ))}

            <div className="pt-4 border-t border-[#D97706]/20 mt-2 flex flex-col gap-2.5">
              <button
                onClick={toggleLanguage}
                className="w-full py-3 px-4 rounded-xl bg-[#1A1216] border border-[#D97706]/30 text-xs font-semibold text-[#F59E0B] flex items-center justify-between"
                aria-label="Toggle Language"
              >
                <span className="flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  Language / ଭାଷା
                </span>
                <span className="uppercase text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#D97706]/20 border border-[#D97706]/30">
                  {language === 'en' ? 'English (EN)' : 'ଓଡ଼ିଆ (Odia)'}
                </span>
              </button>

              <button
                onClick={toggleTheme}
                className="w-full py-3 px-4 rounded-xl bg-[#1A1216] border border-[#D97706]/30 text-xs font-semibold text-[#F59E0B] flex items-center justify-between"
                aria-label="Toggle theme mode"
              >
                <span className="flex items-center gap-2">
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  Theme Mode
                </span>
                <span className="uppercase text-[10px] font-bold tracking-wider px-2 py-0.5 rounded bg-[#D97706]/20 border border-[#D97706]/30">
                  {theme === 'dark' ? 'Royal Gold (Dark)' : 'Morning Light (Light)'}
                </span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0D0B0D] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.bookNow}</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${HOTEL_PHONE}`}
                  className="py-2.5 px-3 rounded-xl bg-[#1D161A] text-[#F59E0B] border border-[#D97706]/30 text-xs font-semibold flex items-center justify-center gap-1.5"
                  aria-label="Call Hotel Rajput 24/7"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{t.callUs}</span>
                </a>
                <a
                  href={getWhatsAppLink("Hello Hotel Rajput, I would like to inquire about booking.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-[#122A1E] text-[#34D399] border border-[#34D399]/30 text-xs font-semibold flex items-center justify-center gap-1.5"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


