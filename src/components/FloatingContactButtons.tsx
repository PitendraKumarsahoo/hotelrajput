import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { HOTEL_PHONE, getWhatsAppLink } from '../lib/appsScript';
import { useLanguage } from '../context/LanguageContext';

export default function FloatingContactButtons() {
  const { language } = useLanguage();
  const isOdia = language === 'or';

  const defaultWhatsappMessage = isOdia
    ? "ନମସ୍କାର ହୋଟେଲ ରାଜପୁତ, ମୁଁ ରୁମ୍ ବୁକିଂ ଏବଂ ଡାଇନିଂ ବିଷୟରେ ଜାଣିବାକୁ ଚାହୁଁଛି।"
    : "Hello Hotel Rajput, I would like to inquire about room booking and dining.";

  return (
    <div 
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 items-center"
      aria-label="Quick Floating Contact Options"
    >
      {/* Phone Call Button (Orange/Terracotta Circle) */}
      <a
        href={`tel:${HOTEL_PHONE}`}
        aria-label="Call Hotel Rajput Front Desk"
        title={isOdia ? "୨୪/୭ କଲ୍ କରନ୍ତୁ: +୯୧ ୯୪୩୭୧୨୩୪୫୬" : "Call Front Desk 24/7: +91 9437123456"}
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#C86408] via-[#D97706] to-[#F59E0B] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(217,119,6,0.45)] border border-[#F59E0B]/50 hover:scale-110 hover:shadow-[0_12px_30px_rgba(245,158,11,0.6)] active:scale-95 transition-all duration-300"
      >
        <Phone className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        {/* Tooltip on hover (desktop) */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#140F12] text-[#F59E0B] text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#D97706]/40 shadow-xl hidden sm:block">
          {isOdia ? "୨୪/୭ କଲ୍ କରନ୍ତୁ" : "Call Desk 24/7"}
        </span>
      </a>

      {/* WhatsApp Chat Button (Vibrant Green Circle) */}
      <a
        href={getWhatsAppLink(defaultWhatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Hotel Rajput on WhatsApp"
        title={isOdia ? "ୱାଟ୍ସଆପ୍ ରେ ମେସେଜ୍ କରନ୍ତୁ" : "Chat on WhatsApp"}
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#34D399] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] border border-[#34D399]/50 hover:scale-110 hover:shadow-[0_12px_30px_rgba(52,211,153,0.6)] active:scale-95 transition-all duration-300"
      >
        <MessageSquare className="w-6 h-6 text-white fill-white/20 group-hover:scale-110 transition-transform" />
        {/* Pulse Indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-[#0D0B0D]"></span>
        </span>
        {/* Tooltip on hover (desktop) */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#140F12] text-[#34D399] text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-[#34D399]/40 shadow-xl hidden sm:block">
          {isOdia ? "ୱାଟ୍ସଆପ୍ ଚାଟ୍" : "Instant WhatsApp"}
        </span>
      </a>
    </div>
  );
}
