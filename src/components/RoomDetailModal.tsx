import React, { useState } from 'react';
import { Room } from '../types';
import { X, CheckCircle2, Users, Bed, Maximize2, Calendar, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { handleImageError } from '../lib/images';
import OptimizedImage from './OptimizedImage';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onSelectForBooking: (roomId: string) => void;
}

export default function RoomDetailModal({ room, onClose, onSelectForBooking }: RoomDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  React.useEffect(() => {
    if (!room) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [room, onClose]);

  if (!room) return null;

  const images = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${room.name} details modal`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="html-light-modal relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#140F12] border border-[#D97706]/40 shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#251A20] text-[#B8A89A] hover:text-white border border-[#D97706]/30 z-10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
          aria-label="Close room details modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Gallery Carousel */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <div className="relative h-[280px] sm:h-[360px] rounded-2xl overflow-hidden border border-[#D97706]/30">
              <OptimizedImage
                src={images[currentImageIndex]}
                alt={room.name}
                fallbackType="room"
                className="w-full h-full"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#D97706] transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 text-white hover:bg-[#D97706] transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md bg-black/70 text-xs font-semibold text-white">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>

            {/* Thumbnail Strip with Angle labels */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => {
                  const angleNames = ['Seating & Beds', 'Lounge & TV', 'Luxury Bedding', 'Attached Bathroom'];
                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                        currentImageIndex === idx ? 'border-[#F59E0B] scale-105 shadow-md' : 'border-white/10 opacity-60 hover:opacity-100'
                      }`}
                      aria-label={`View ${angleNames[idx % angleNames.length]}`}
                    >
                      <img src={img} alt="thumbnail" onError={(e) => handleImageError(e, 'room')} className="w-full h-full object-cover" />
                      <span className="absolute bottom-0 inset-x-0 bg-black/85 text-[8px] text-white font-bold py-0.5 px-1 truncate text-center pointer-events-none">
                        {angleNames[idx % angleNames.length]}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Room Details & Amenities */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/30 px-2.5 py-1 rounded border border-[#D97706]/30">
                  {room.tagline}
                </span>
                <div className="flex items-center gap-1 text-[#F59E0B] text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{room.rating}</span>
                </div>
              </div>

              <h2 className="text-2xl font-serif font-bold text-[#F3EFEA] html-light-text-primary mb-2">{room.name}</h2>
              <p className="text-xs text-[#B8A89A] html-light-text-secondary leading-relaxed mb-6">{room.description}</p>

              {/* Key Specs */}
              <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#1A1216] html-light-spec-pill border border-[#D97706]/20 text-center mb-6">
                <div>
                  <Users className="w-4 h-4 text-[#F59E0B] mx-auto mb-1" />
                  <div className="text-[10px] text-[#B8A89A] html-light-text-muted font-medium">Capacity</div>
                  <div className="text-xs font-bold text-[#F3EFEA] html-light-text-primary">{room.capacity}</div>
                </div>

                <div>
                  <Bed className="w-4 h-4 text-[#F59E0B] mx-auto mb-1" />
                  <div className="text-[10px] text-[#B8A89A] html-light-text-muted font-medium">Bed Type</div>
                  <div className="text-xs font-bold text-[#F3EFEA] html-light-text-primary">{room.bedType}</div>
                </div>

                <div>
                  <Maximize2 className="w-4 h-4 text-[#F59E0B] mx-auto mb-1" />
                  <div className="text-[10px] text-[#B8A89A] html-light-text-muted font-medium">Room Area</div>
                  <div className="text-xs font-bold text-[#F3EFEA] html-light-text-primary">{room.sizeSqFt} Sq.Ft</div>
                </div>
              </div>

              {/* Amenities */}
              <h3 className="text-xs font-bold uppercase text-[#D97706] tracking-wider mb-3">Included Amenities</h3>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {room.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#D8C9BC] html-light-text-secondary font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Book Action */}
            <div className="pt-4 border-t border-[#D97706]/30 flex items-center justify-between gap-4">
              <div>
                {room.originalPrice && (
                  <span className="text-xs text-[#B8A89A] html-light-text-muted line-through block">₹{room.originalPrice}</span>
                )}
                <div className="text-2xl font-bold text-[#F59E0B] html-light-text-gold font-serif">
                  ₹{room.pricePerNight}<span className="text-xs text-[#B8A89A] html-light-text-muted font-normal">/night</span>
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onSelectForBooking(room.id);
                }}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2 whitespace-nowrap shrink-0 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span className="whitespace-nowrap font-bold">Book This Suite</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
