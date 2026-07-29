import React, { useState } from 'react';
import { ROOMS } from '../data';
import { Room } from '../types';
import TiltCard from './TiltCard';
import RoomDetailModal from './RoomDetailModal';
import RoomCardImageCarousel from './RoomCardImageCarousel';
import { Users, Bed, CheckCircle2, Calendar, Eye, Maximize2, Phone } from 'lucide-react';
import { HOTEL_PHONE } from '../lib/appsScript';

interface RoomsSectionProps {
  onOpenBookingWithRoom: (roomId: string) => void;
}

export default function RoomsSection({ onOpenBookingWithRoom }: RoomsSectionProps) {
  const [selectedRoomModal, setSelectedRoomModal] = useState<Room | null>(null);

  return (
    <section id="rooms" className="py-20 bg-[#0D0B0D] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8B2613]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
              Multi-Angle Room Views
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F3EFEA] mt-3">
              Luxury Accommodations on <span className="gold-gradient-text">NH-224</span>
            </h2>
            <p className="text-sm text-[#B8A89A] mt-2 max-w-xl">
              Explore 3 to 4 angles for every room featuring seated family lounges, clean AC interiors, king beds, and attached modern baths.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-xs text-[#B8A89A]">All Tariffs Include 24/7 Room Service & Parking</span>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="region" aria-label="Luxury Accommodations List">
          {ROOMS.map((room) => {
            const galleryImages = room.gallery && room.gallery.length > 0 ? room.gallery : [room.image];

            return (
              <TiltCard key={room.id} maxTilt={6} className="h-full">
                <article
                  tabIndex={0}
                  aria-label={`${room.name}, ${room.capacity}, ${room.bedType}, ₹${room.pricePerNight} per night`}
                  className="h-full flex flex-col justify-between rounded-3xl bg-[#161115] html-light-card border border-[#D97706]/25 hover:border-[#D97706]/65 focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B0D] focus:outline-none transition-all duration-300 overflow-hidden group shadow-xl"
                >
                  
                  <div>
                    {/* Multi-Angle Photo Carousel */}
                    <RoomCardImageCarousel
                      images={galleryImages}
                      roomName={room.name}
                      rating={room.rating}
                      featured={room.featured}
                    />

                    {/* Room Body Details */}
                    <div className="p-6">
                      
                      {/* Title & Price Row */}
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="font-serif font-bold text-xl text-[#F3EFEA] html-light-text-primary group-hover:text-[#F59E0B] transition-colors">
                          {room.name}
                        </h3>
                        <div className="text-right shrink-0">
                          {room.originalPrice && (
                            <span className="text-xs text-[#B8A89A] html-light-text-muted line-through block">₹{room.originalPrice}</span>
                          )}
                          <div className="text-lg font-bold text-[#F59E0B] html-light-text-gold font-serif">
                            ₹{room.pricePerNight}<span className="text-xs text-[#B8A89A] html-light-text-muted font-normal">/night</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-[#B8A89A] html-light-text-secondary mb-4">{room.tagline}</p>

                      {/* Room Specs Row */}
                      <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl bg-[#1C151A] html-light-spec-pill border border-white/5 text-[11px] text-[#D8C9BC] html-light-text-primary font-medium mb-5">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <Users className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                          <span className="truncate">{room.capacity}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <Bed className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                          <span className="truncate">{room.bedType}</span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <Maximize2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                          <span className="truncate">{room.sizeSqFt} sq ft</span>
                        </div>
                      </div>

                      {/* Checkmarks Feature Grid (2 columns) */}
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {room.amenities.map((amenity, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#B8A89A] html-light-text-secondary">
                            <div className="w-4 h-4 rounded-full bg-[#34D399]/15 text-[#34D399] flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            </div>
                            <span className="truncate">{amenity}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Footer Action Buttons */}
                  <div className="p-6 pt-0 border-t border-[#D97706]/15 mt-2 flex flex-col gap-2.5">
                    
                    {/* Primary Call to Book Button */}
                    <a
                      href={`tel:${HOTEL_PHONE}`}
                      aria-label={`Call to book ${room.name} directly`}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    >
                      <Phone className="w-4 h-4 fill-current" />
                      <span>Call to Book</span>
                    </a>

                    {/* Secondary Detail & Booking Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setSelectedRoomModal(room)}
                        aria-label={`View details and full amenities for ${room.name}`}
                        className="py-2.5 px-3 rounded-xl bg-[#241B20] html-light-btn-sec text-[#D8C9BC] hover:text-amber-500 border border-[#D97706]/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>View Details</span>
                      </button>

                      <button
                        onClick={() => onOpenBookingWithRoom(room.id)}
                        aria-label={`Reserve ${room.name}`}
                        className="py-2.5 px-3 rounded-xl bg-[#2A1D23] html-light-btn-pri text-[#F59E0B] hover:bg-[#34232C] border border-[#F59E0B]/40 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                      >
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Reserve Suite</span>
                      </button>
                    </div>

                  </div>

                </article>
              </TiltCard>
            );
          })}
        </div>

      </div>

      {/* Room Detail Modal */}
      <RoomDetailModal
        room={selectedRoomModal}
        onClose={() => setSelectedRoomModal(null)}
        onSelectForBooking={(roomId) => onOpenBookingWithRoom(roomId)}
      />
    </section>
  );
}

