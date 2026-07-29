import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Play, Coffee, Car, Wifi, Sparkles, Award } from 'lucide-react';

interface AboutSectionProps {
  onOpenVideoTour: () => void;
}

export default function AboutSection({ onOpenVideoTour }: AboutSectionProps) {
  const [offsetY, setOffsetY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Parallax Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setOffsetY((window.innerHeight - rect.top) * 0.08);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-[#0D0B0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Parallax Image Showcase + Tour Video Trigger */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#D97706]/30 shadow-2xl group">
              
              {/* Parallax Image Shift */}
              <div
                className="w-full h-[420px] sm:h-[500px] bg-cover bg-center transition-transform duration-100 ease-out"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200')`,
                  transform: `translateY(${offsetY - 20}px) scale(1.08)`
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0D] via-transparent to-transparent opacity-80" />

              {/* Video Tour Play Button Overlay */}
              <button
                onClick={onOpenVideoTour}
                className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0D0B0D] flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.6)] hover:scale-110 active:scale-95 transition-all group/btn focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F59E0B]"
                aria-label="Play 360-degree Hotel Rajput Virtual Tour Video"
              >
                <Play className="w-8 h-8 fill-current translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#140E12]/80 backdrop-blur-md border border-[#D97706]/20">
                <span className="text-xs font-bold uppercase text-[#D97706] tracking-wider">Video Experience</span>
                <p className="text-sm font-semibold text-[#F3EFEA]">Take a 360° Virtual Tour of Hotel Rajput</p>
              </div>

            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-[#181014] border border-[#D97706]/40 shadow-2xl z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B2613] to-[#D97706] flex items-center justify-center text-white font-bold">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#F59E0B] font-serif">12+ Years</div>
                <div className="text-xs text-[#B8A89A]">Hospitality Excellence</div>
              </div>
            </div>
          </div>

          {/* Right Column: About Details */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
              Welcome to Daspalla's Benchmark Hotel
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F3EFEA] mt-4 leading-tight">
              A Legacy of Warm Hospitality on <span className="gold-gradient-text">NH-224 Highway</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D8C9BC] mt-4 leading-relaxed">
              Strategically located in Daspalla along National Highway 224, <strong>Rajput Highway Gateway</strong> has provided a welcoming, safe, and comfortable rest stop for over a decade. Whether you are traveling across Odisha, hosting a grand family celebration, or craving authentic local flavors, our doors are open 24 hours a day.
            </p>

            {/* Feature Bento Grid */}
            <div className="grid grid-cols-2 gap-4 mt-8" role="region" aria-label="Hotel Rajput Key Amenities">
              <div tabIndex={0} aria-label="24/7 Dining: Hot authentic Odia and Indian dishes served anytime" className="p-4 rounded-2xl bg-[#161115] border border-[#D97706]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] flex items-start gap-3 transition-all hover:border-[#D97706]/50">
                <div className="p-2.5 rounded-xl bg-[#28181E] text-[#F59E0B] shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#F3EFEA]">24/7 Dining</h3>
                  <p className="text-[11px] text-[#B8A89A] mt-0.5">Hot authentic Odia & Indian dishes served anytime.</p>
                </div>
              </div>

              <div tabIndex={0} aria-label="Secure Parking: Guarded 24/7 yard for cars, buses and SUVs" className="p-4 rounded-2xl bg-[#161115] border border-[#D97706]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] flex items-start gap-3 transition-all hover:border-[#D97706]/50">
                <div className="p-2.5 rounded-xl bg-[#28181E] text-[#F59E0B] shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#F3EFEA]">Secure Parking</h3>
                  <p className="text-[11px] text-[#B8A89A] mt-0.5">Guarded 24/7 yard for cars, buses & SUVs.</p>
                </div>
              </div>

              <div tabIndex={0} aria-label="High-Speed Wi-Fi: Seamless internet connectivity across all rooms" className="p-4 rounded-2xl bg-[#161115] border border-[#D97706]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] flex items-start gap-3 transition-all hover:border-[#D97706]/50">
                <div className="p-2.5 rounded-xl bg-[#28181E] text-[#F59E0B] shrink-0">
                  <Wifi className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#F3EFEA]">High-Speed Wi-Fi</h3>
                  <p className="text-[11px] text-[#B8A89A] mt-0.5">Seamless internet connectivity across all rooms.</p>
                </div>
              </div>

              <div tabIndex={0} aria-label="AC Banquet Hall: Capacity for 300+ guests for weddings and events" className="p-4 rounded-2xl bg-[#161115] border border-[#D97706]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] flex items-start gap-3 transition-all hover:border-[#D97706]/50">
                <div className="p-2.5 rounded-xl bg-[#28181E] text-[#F59E0B] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#F3EFEA]">AC Banquet Hall</h3>
                  <p className="text-[11px] text-[#B8A89A] mt-0.5">Capacity for 300+ guests for weddings & events.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
