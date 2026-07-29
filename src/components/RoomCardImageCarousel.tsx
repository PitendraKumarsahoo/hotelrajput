import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Sparkles, Camera } from 'lucide-react';
import { handleImageError } from '../lib/images';

interface RoomCardImageCarouselProps {
  images: string[];
  roomName: string;
  rating?: number;
  featured?: boolean;
}

const ANGLE_LABELS = [
  'Angle 1 • Seating & Beds View',
  'Angle 2 • Lounge & TV View',
  'Angle 3 • Luxury Bedding Detail',
  'Angle 4 • Attached Bathroom & Shower'
];

export default function RoomCardImageCarousel({
  images,
  roomName,
  rating,
  featured
}: RoomCardImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const totalImages = images && images.length > 0 ? images.length : 1;
  const currentImage = images[currentIndex] || images[0];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  const handleOpenFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFullscreen(true);
  };

  return (
    <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-black group/carousel select-none">
      {/* Active Angle Photo */}
      <img
        src={currentImage}
        alt={`${roomName} - View ${currentIndex + 1} of ${totalImages}`}
        onError={(e) => handleImageError(e, 'room')}
        className="w-full h-full object-cover transition-all duration-500 ease-out group-hover/carousel:scale-105"
      />

      {/* Ambient Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#161115] via-transparent to-black/30 pointer-events-none" />

      {/* Top Left Angle Badge */}
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
        {featured && (
          <span className="px-2.5 py-1 rounded-md bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0D0B0D] font-bold text-[10px] uppercase tracking-wider shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3" /> Bestseller
          </span>
        )}
        <div className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[10px] font-bold text-[#F3EFEA] border border-white/10 flex items-center gap-1.5 shadow-lg">
          <Camera className="w-3 h-3 text-[#F59E0B]" />
          <span>{ANGLE_LABELS[currentIndex % ANGLE_LABELS.length]}</span>
        </div>
      </div>

      {/* Top Right Rating & Fullscreen trigger */}
      <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5">
        <button
          onClick={handleOpenFullscreen}
          className="p-1.5 rounded-md bg-black/70 backdrop-blur-md text-white hover:bg-[#F59E0B] hover:text-[#0D0B0D] transition-colors shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          aria-label={`Open 4K image view for ${roomName}`}
          title="Open 4K Photo Lightbox"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Navigation Arrows (visible on hover and mobile touch) */}
      {totalImages > 1 && (
        <>
          <button
            onClick={handlePrev}
            aria-label="Previous angle photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#D97706] transition-all opacity-80 sm:opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next angle photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#D97706] transition-all opacity-80 sm:opacity-0 group-hover/carousel:opacity-100 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Bottom Center Dots Indicator */}
      {totalImages > 1 && (
        <div className="absolute bottom-3 inset-x-0 z-10 flex items-center justify-center gap-1.5 pointer-events-none">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => handleDotClick(e, idx)}
              aria-label={`Go to photo angle ${idx + 1}`}
              className={`h-2 rounded-full transition-all pointer-events-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] ${
                idx === currentIndex
                  ? 'w-6 bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.8)]'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={(e) => {
            e.stopPropagation();
            setIsFullscreen(false);
          }}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute -top-12 right-0 px-4 py-2 rounded-full bg-[#1C1419] text-white border border-[#D97706]/40 text-xs font-bold uppercase tracking-wider hover:bg-[#D97706] hover:text-[#0D0B0D] transition-all"
            >
              Close (ESC)
            </button>

            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D97706]/40 shadow-2xl">
              <img
                src={currentImage}
                alt={`${roomName} - 4K High Res View`}
                className="max-h-[80vh] w-auto object-contain rounded-2xl"
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-center">
                <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider">
                  {ANGLE_LABELS[currentIndex % ANGLE_LABELS.length]}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#F3EFEA]">{roomName}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
