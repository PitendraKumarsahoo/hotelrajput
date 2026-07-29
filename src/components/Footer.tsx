import React from 'react';
import { HOTEL_PHONE, HOTEL_EMAIL, HOTEL_ADDRESS, getWhatsAppLink } from '../lib/appsScript';
import { MapPin, Phone, Mail, MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenBooking: () => void;
}

export default function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090709] border-t border-[#D97706]/30 pt-16 pb-8 text-[#B8A89A] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-[#8B2613]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D97706]/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B2613] to-[#D97706] p-0.5">
                <div className="w-full h-full bg-[#0D0B0D] rounded-[10px] flex items-center justify-center font-serif font-bold text-lg text-[#F59E0B]">
                  R
                </div>
              </div>
              <div>
                <span className="font-serif font-bold text-xl text-[#F3EFEA] tracking-tight">
                  RAJPUT HIGHWAY GATEWAY
                </span>
                <p className="text-[10px] text-[#D97706] font-semibold tracking-widest uppercase">
                  NH-224 Daspalla, Odisha
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed mb-6 max-w-sm">
              Daspalla’s premier luxury gateway hotel & restaurant. Offering AC suites, 24/7 authentic Odia & Indian dining, secure parking, and banquet hall on NH-224.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={getWhatsAppLink("Hello Hotel Rajput, I want to inquire about room booking.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#122A1E] text-[#34D399] border border-[#34D399]/30 hover:border-[#34D399] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#34D399]"
                title="WhatsApp Chat"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`tel:${HOTEL_PHONE}`}
                className="p-2.5 rounded-xl bg-[#1D161A] text-[#F59E0B] border border-[#D97706]/30 hover:border-[#D97706] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                title="Call 24/7"
                aria-label="Call Hotel Rajput Front Desk 24/7"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#F3EFEA] uppercase tracking-wider mb-4 border-b border-[#D97706]/20 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('/')} aria-label="Navigate to Home page" className="hover:text-[#F59E0B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded px-1">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/#about')} aria-label="Navigate to About Hotel Rajput section" className="hover:text-[#F59E0B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded px-1">
                  About Hotel Rajput
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/rooms')} aria-label="Navigate to Luxury Rooms and Suites page" className="hover:text-[#F59E0B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded px-1">
                  Luxury Rooms & Suites
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/restaurant')} aria-label="Navigate to Restaurant Menu page" className="hover:text-[#F59E0B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded px-1">
                  Restaurant Menu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/gallery')} aria-label="Navigate to Photo Gallery page" className="hover:text-[#F59E0B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded px-1">
                  Photo Gallery
                </button>
              </li>
              <li>
                <button onClick={onOpenBooking} aria-label="Open Online Booking Form" className="text-[#F59E0B] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded px-1">
                  Online Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Verification & SEO */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#F3EFEA] uppercase tracking-wider mb-4 border-b border-[#D97706]/20 pb-2">
              Deploy & SEO
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('/verify')}
                  className="hover:text-[#F59E0B] transition-colors flex items-center gap-1 text-[#34D399]"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verify Deploy (/verify)</span>
                </button>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors">
                  Sitemap XML
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-[#F59E0B] transition-colors">
                  Robots TXT
                </a>
              </li>
              <li>
                <span className="text-[11px] text-[#D8C9BC]">Hostinger .htaccess Enabled</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-bold text-sm text-[#F3EFEA] uppercase tracking-wider mb-4 border-b border-[#D97706]/20 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                <span>{HOTEL_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href={`tel:${HOTEL_PHONE}`} className="hover:text-[#F59E0B]">
                  {HOTEL_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" />
                <a href={`mailto:${HOTEL_EMAIL}`} className="hover:text-[#F59E0B]">
                  {HOTEL_EMAIL}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Rajput Highway Gateway (Hotel Rajput). All rights reserved.</p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="p-2.5 rounded-xl bg-[#1A1216] text-[#F59E0B] border border-[#D97706]/30 hover:border-[#D97706] transition-all flex items-center gap-1 text-[11px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
