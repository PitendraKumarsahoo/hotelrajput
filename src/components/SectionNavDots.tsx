import React, { useState, useEffect } from 'react';

interface SectionDot {
  id: string;
  label: string;
}

const SECTIONS: SectionDot[] = [
  { id: 'hero', label: '3D Gateway' },
  { id: 'about', label: 'About Rajput' },
  { id: 'highlights', label: 'Highway Highlights' },
  { id: 'rooms', label: 'Luxury Rooms' },
  { id: 'restaurant', label: 'Bento Menu' },
  { id: 'gallery', label: 'Photo Gallery' },
  { id: 'reviews', label: 'Guest Reviews' },
  { id: 'location', label: 'Location & Map' },
];

export default function SectionNavDots() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -50% 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3 p-2 rounded-full bg-[#140F12]/80 backdrop-blur-md border border-[#D97706]/20 shadow-2xl">
      {SECTIONS.map((sec) => {
        const isActive = activeSection === sec.id;
        return (
          <div key={sec.id} className="relative group flex items-center justify-end">
            {/* Tooltip on hover */}
            <span className="absolute right-8 whitespace-nowrap px-2.5 py-1 rounded-md bg-[#1D161A] text-[#F59E0B] text-xs font-semibold border border-[#D97706]/30 shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 transform translate-x-1 group-hover:translate-x-0">
              {sec.label}
            </span>

            {/* Dot button */}
            <button
              onClick={() => scrollToSection(sec.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-[#F59E0B] to-[#D97706] scale-125 ring-4 ring-[#D97706]/30 shadow-[0_0_12px_rgba(245,158,11,0.8)]'
                  : 'bg-[#4A3B43] hover:bg-[#D97706]/60 hover:scale-110'
              }`}
              aria-label={`Scroll to ${sec.label}`}
            />
          </div>
        );
      })}
    </div>
  );
}
