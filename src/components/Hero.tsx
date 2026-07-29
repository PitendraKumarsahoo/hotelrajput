import React from 'react';
import Hero3DScene from './Hero3DScene';
import TiltCard from './TiltCard';
import { Calendar, Utensils, Phone, Star, Shield, MapPin, Sparkles, Navigation } from 'lucide-react';
import { HOTEL_PHONE, MAPS_DIRECTIONS_URL } from '../lib/appsScript';

interface HeroProps {
  onOpenBooking: () => void;
  onNavigate: (path: string) => void;
}

export default function Hero({ onOpenBooking, onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#0D0B0D]">
      {/* Background Ambient Glows & Grain Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#8B2613]/25 via-[#D97706]/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#D97706]/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Highway Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1417] border border-[#D97706]/30 text-xs font-semibold text-[#F59E0B] mb-6 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-[#F59E0B] animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-[#D97706]" />
              <span>NH-224 Highway, Daspalla • Open 24/7</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#F3EFEA] leading-[1.12] tracking-tight mb-6">
              Experience Premier Luxury at <span className="gold-gradient-text block mt-1">Rajput Highway Gateway</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#D8C9BC] leading-relaxed max-w-2xl mb-8">
              A refined sanctuary for road travelers, couples, and families. Featuring air-conditioned suites, authentic Odia & North Indian cuisine, 24/7 room service, and secure parking on NH-224.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-[#0D0B0D] font-bold text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2.5 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book A Room</span>
              </button>

              <button
                onClick={() => onNavigate('/restaurant')}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#1C1418] text-[#F3EFEA] border border-[#D97706]/40 hover:border-[#D97706] hover:bg-[#281A22] font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <Utensils className="w-4 h-4 text-[#F59E0B]" />
                <span>View Restaurant Menu</span>
              </button>

              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-4 rounded-xl bg-[#140E12] text-[#B8A89A] hover:text-[#F3EFEA] border border-white/10 hover:border-white/20 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              >
                <Navigation className="w-4 h-4 text-[#D97706]" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="pt-6 border-t border-[#D97706]/20 w-full grid grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#F3EFEA]">4.8 ★ Google</div>
                  <div className="text-[10px] text-[#B8A89A]">500+ Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#34D399] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#F3EFEA]">100% Hygienic</div>
                  <div className="text-[10px] text-[#B8A89A]">Fresh Ingredients</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D97706] shrink-0" />
                <div>
                  <div className="text-xs font-bold text-[#F3EFEA]">AC Banquet</div>
                  <div className="text-[10px] text-[#B8A89A]">Event Capacity 300+</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual (3D Gateway Scene + Floating Bento Badge) */}
          <div className="lg:col-span-5 relative">
            <TiltCard maxTilt={8} className="w-full">
              <div className="relative p-2 rounded-3xl bg-gradient-to-b from-[#2A181E] via-[#161014] to-[#0D0B0D] border border-[#D97706]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* 3D Scene */}
                <Hero3DScene />

                {/* Overlay Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#140E12]/90 backdrop-blur-xl border border-[#D97706]/30 flex items-center justify-between shadow-2xl">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97706]">Featured Room</span>
                    <h3 className="text-sm font-bold text-[#F3EFEA]">Executive AC Suite</h3>
                    <p className="text-xs text-[#B8A89A]">King Bed • Highway Panoramas</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#B8A89A] line-through">₹3,200</span>
                    <div className="text-lg font-bold text-[#F59E0B]">₹2,499<span className="text-xs text-[#B8A89A] font-normal">/night</span></div>
                  </div>
                </div>

              </div>
            </TiltCard>
          </div>

        </div>
      </div>
    </section>
  );
}
