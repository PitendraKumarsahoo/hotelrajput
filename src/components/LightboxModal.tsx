import React, { useEffect } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % items.length);
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + items.length) % items.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handleNext = () => {
    onNavigate((currentIndex + 1) % items.length);
  };

  const handlePrev = () => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo Gallery Lightbox"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 animate-in fade-in duration-200"
    >
      
      {/* Top Header Bar */}
      <div className="absolute top-4 inset-x-4 sm:inset-x-8 flex items-center justify-between z-20">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#8B2613]/80 text-[#FFF0D4] text-xs font-bold uppercase tracking-wider border border-[#D97706]/40">
            {currentItem.categoryLabel}
          </span>
          <span className="text-sm font-bold text-[#F59E0B]">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#1A1216] text-[#F3EFEA] hover:text-[#F59E0B] border border-[#D97706]/40 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            title="Close (Esc)"
            aria-label="Close image lightbox gallery"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] flex items-center justify-center my-12">
        
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#D97706] text-white transition-all transform hover:scale-110 active:scale-95"
          aria-label="Previous Image (Left Arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Display Image */}
        <img
          src={currentItem.image}
          alt={currentItem.title}
          className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl border border-[#D97706]/20 transition-all duration-300"
        />

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/60 hover:bg-[#D97706] text-white transition-all transform hover:scale-110 active:scale-95"
          aria-label="Next Image (Right Arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="absolute bottom-4 inset-x-4 sm:inset-x-8 text-center max-w-2xl mx-auto z-20">
        <div className="p-4 rounded-2xl bg-[#140E12]/90 backdrop-blur-md border border-[#D97706]/30 shadow-2xl">
          <h3 className="font-serif font-bold text-lg text-[#F3EFEA]">{currentItem.title}</h3>
          <p className="text-xs text-[#B8A89A] mt-1">{currentItem.description}</p>
          <div className="text-[10px] text-[#D97706] mt-2 font-semibold uppercase tracking-widest">
            Use Left/Right Arrow Keys to navigate • Escape to close
          </div>
        </div>
      </div>

    </div>
  );
}
