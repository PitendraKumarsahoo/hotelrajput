import React from 'react';
import { YOUTUBE_VIDEO_ID } from '../lib/appsScript';
import { X, ExternalLink, Play } from 'lucide-react';

interface TourVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TourVideoModal({ isOpen, onClose }: TourVideoModalProps) {
  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Hotel Rajput Gateway 360 Tour Video Modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#140F12] border border-[#D97706]/40 shadow-2xl p-4 sm:p-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:top-4 sm:right-4 p-2.5 rounded-full bg-[#251A20] text-[#B8A89A] hover:text-white border border-[#D97706]/30 z-20 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
          aria-label="Close 360 degree video tour modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#D97706]">Virtual Experience</span>
          <h2 className="text-xl font-serif font-bold text-[#F3EFEA]">Hotel Rajput Gateway 360° Tour</h2>
        </div>

        {/* Video Player Frame */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#D97706]/30 shadow-2xl bg-black">
          {YOUTUBE_VIDEO_ID ? (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
              title="Hotel Rajput Tour Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#2A181E] border border-[#D97706]/40 text-[#F59E0B] flex items-center justify-center mb-4">
                <Play className="w-8 h-8 fill-current translate-x-0.5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3EFEA] mb-1">Hotel Rajput Tour Video</h3>
              <p className="text-xs text-[#B8A89A] max-w-md mb-4">
                Watch our hotel tour video on YouTube to explore our rooms, dining area, and highway location in Daspalla.
              </p>
              <a
                href="https://www.youtube.com/results?search_query=Hotel+Rajput+Daspalla"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <span>Search Tour Video on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
