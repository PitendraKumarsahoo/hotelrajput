import React, { useState, useEffect } from 'react';
import { HOTEL_PHOTOS } from '../data';
import { Sun, Moon, Building2, Utensils, Maximize2, ShieldCheck, Sparkles, ChevronLeft, ChevronRight, Play, Pause, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface PhotoSlide {
  id: string;
  url: string;
  titleEn: string;
  titleOr: string;
  tagEn: string;
  tagOr: string;
  icon: React.ReactNode;
  badge: string;
}

export default function HeroPhotoStage() {
  const { language } = useLanguage();
  const isOdia = language === 'or';

  const slides: PhotoSlide[] = [
    {
      id: 'day',
      url: HOTEL_PHOTOS.heroDay,
      titleEn: 'Hotel Rajput Main Entrance (Day View)',
      titleOr: 'ହୋଟେଲ ରାଜପୁତ ମୁଖ୍ୟ ପ୍ରବେଶ ଦ୍ୱାର (ଦିନ)',
      tagEn: 'Day View',
      tagOr: 'ଦିନର ଦୃଶ୍ୟ',
      icon: <Sun className="w-3.5 h-3.5 text-[#F59E0B]" />,
      badge: 'Royal Elephants & Highway Arch'
    },
    {
      id: 'night',
      url: HOTEL_PHOTOS.heroNight,
      titleEn: 'Hotel Rajput Night Illumination on NH-224',
      titleOr: 'NH-224 ରେ ରାତ୍ରି କାଳୀନ ଆଲୋକମାଳା',
      tagEn: 'Night Glow',
      tagOr: 'ରାତ୍ରି ଦୃଶ୍ୟ',
      icon: <Moon className="w-3.5 h-3.5 text-[#6366F1]" />,
      badge: '24/7 Highway Neon Illumination'
    },
    {
      id: 'lodge',
      url: HOTEL_PHOTOS.lodgeFacade,
      titleEn: 'Rajput Lodge AC Rooms & Suite Facade',
      titleOr: 'ରାଜପୁତ ଲଜ୍ ଏସି ରୁମ୍ ଏବଂ ବିଲ୍ଡିଂ',
      tagEn: 'Lodge & Rooms',
      tagOr: 'ଲଜ୍ ରୁମ୍ସ',
      icon: <Building2 className="w-3.5 h-3.5 text-[#34D399]" />,
      badge: '3-Story Luxury Highway Suites'
    },
    {
      id: 'thali',
      url: HOTEL_PHOTOS.dhabaThali,
      titleEn: 'Authentic Odia Dhaba Thali on Sal Leaf',
      titleOr: 'ଖାଣ୍ଟି ଓଡ଼ିଆ କାଳିଆ ପତ୍ର ଡାଇନିଂ',
      tagEn: 'Odia Dhaba Feast',
      tagOr: 'ଓଡ଼ିଆ ଖାଦ୍ୟ',
      icon: <Utensils className="w-3.5 h-3.5 text-[#D97706]" />,
      badge: 'Fresh Mutton Kasa & Basmati Rice'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHdEnhanced, setIsHdEnhanced] = useState(true);

  const activeSlide = slides[currentIndex];

  useEffect(() => {
    if (!isPlaying || isFullscreen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, isFullscreen, slides.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-[#140E12] border border-[#D97706]/35 shadow-[0_20px_60px_rgba(0,0,0,0.85)] group">
      
      {/* Top Interactive Tab Bar */}
      <div className="p-3 bg-[#1C1419]/90 border-b border-[#D97706]/20 backdrop-blur-md flex items-center justify-between gap-2 overflow-x-auto scrollbar-none z-20">
        <div className="flex items-center gap-1.5 shrink-0">
          {slides.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsPlaying(false);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0D0B0D] shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105'
                    : 'bg-[#281B22] text-[#B8A89A] hover:text-[#F3EFEA] hover:bg-[#34222B]'
                }`}
              >
                {slide.icon}
                <span>{isOdia ? slide.tagOr : slide.tagEn}</span>
              </button>
            );
          })}
        </div>

        {/* 4K HD & Auto-play controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsHdEnhanced(!isHdEnhanced)}
            title={isHdEnhanced ? "4K Clarity Active" : "Enable 4K Clarity Filter"}
            className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1 border transition-all ${
              isHdEnhanced
                ? 'bg-[#34D399]/20 text-[#34D399] border-[#34D399]/40 shadow-[0_0_10px_rgba(52,211,153,0.3)]'
                : 'bg-[#281B22] text-[#B8A89A] border-white/10'
            }`}
          >
            <Sparkles className="w-3 h-3 text-[#34D399]" />
            <span>4K ULTRA HD</span>
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 rounded-lg bg-[#281B22] text-[#B8A89A] hover:text-[#F3EFEA] border border-white/10"
            aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main 4K Photo Frame Stage */}
      <div className="relative h-[340px] sm:h-[400px] md:h-[450px] w-full overflow-hidden bg-black flex items-center justify-center">
        <img
          key={activeSlide.id}
          src={activeSlide.url}
          alt={activeSlide.titleEn}
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHdEnhanced ? 'brightness-105 contrast-105 saturate-110 drop-shadow-2xl' : ''
          }`}
        />

        {/* Ambient Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0D] via-transparent to-black/30 pointer-events-none" />

        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-[#0D0B0D]/80 backdrop-blur-md border border-[#D97706]/40 text-[11px] font-bold text-[#F59E0B] flex items-center gap-1.5 shadow-xl">
            <MapPin className="w-3 h-3 text-[#D97706]" />
            <span>{activeSlide.badge}</span>
          </div>
          <div className="px-2.5 py-1 rounded-full bg-[#128C7E]/80 backdrop-blur-md border border-[#34D399]/40 text-[10px] font-extrabold text-[#34D399] uppercase tracking-wider hidden sm:flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#34D399]" />
            <span>Verified Hotel Photo</span>
          </div>
        </div>

        {/* Fullscreen Zoom Lightbox Trigger */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-[#0D0B0D]/80 backdrop-blur-md border border-white/20 text-[#F3EFEA] hover:bg-[#F59E0B] hover:text-[#0D0B0D] hover:scale-110 transition-all shadow-xl"
          title="Open 4K Fullscreen View"
          aria-label="Open 4K Fullscreen View"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Prev & Next Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-[#0D0B0D]/70 backdrop-blur-md border border-white/15 text-white hover:bg-[#D97706] hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous Photo"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 p-2.5 rounded-full bg-[#0D0B0D]/70 backdrop-blur-md border border-white/15 text-white hover:bg-[#D97706] hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next Photo"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Bottom Title Bar Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#0D0B0D] via-[#0D0B0D]/80 to-transparent z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-2 border-t border-white/5">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F59E0B]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isOdia ? 'ହୋଟେଲ ରାଜପୁତ ଦଶପଲ୍ଲା' : 'Hotel Rajput Daspalla • NH-224'}</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-[#F3EFEA] mt-0.5 drop-shadow-md">
              {isOdia ? activeSlide.titleOr : activeSlide.titleEn}
            </h3>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-1.5 self-end">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                  setIsPlaying(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  i === currentIndex ? 'w-6 bg-[#F59E0B]' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 4K Lightbox Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsFullscreen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute -top-12 right-0 px-4 py-2 rounded-full bg-[#1C1419] text-[#F3EFEA] border border-[#D97706]/40 font-bold text-xs uppercase tracking-wider hover:bg-[#D97706] hover:text-[#0D0B0D] transition-all"
            >
              Close (ESC)
            </button>

            {/* High Res 4K Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D97706]/40 shadow-[0_0_80px_rgba(245,158,11,0.25)]">
              <img
                src={activeSlide.url}
                alt={activeSlide.titleEn}
                className="max-h-[80vh] w-auto object-contain rounded-2xl brightness-105 contrast-105"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-center">
                <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-widest">{activeSlide.badge}</span>
                <h2 className="text-lg sm:text-xl font-bold text-[#F3EFEA]">{isOdia ? activeSlide.titleOr : activeSlide.titleEn}</h2>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
