import React, { useState } from 'react';
import { ROOMS } from '../data';
import { Room } from '../types';
import TiltCard from './TiltCard';
import RoomDetailModal from './RoomDetailModal';
import { Users, Bed, CheckCircle2, Calendar, Eye, Star, Sparkles } from 'lucide-react';

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
              3D Room Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F3EFEA] mt-3">
              Luxury Accommodations on <span className="gold-gradient-text">NH-224</span>
            </h2>
            <p className="text-sm text-[#B8A89A] mt-2 max-w-xl">
              Equipped with split climate control, soundproofing, high-speed Wi-Fi, 24/7 hot showers, and room service.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2">
            <span className="text-xs text-[#B8A89A]">All Tariffs Include 24/7 Room Service & Parking</span>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" role="region" aria-label="Luxury Accommodations List">
          {ROOMS.map((room) => (
            <TiltCard key={room.id} maxTilt={10} className="h-full">
              <article
                tabIndex={0}
                aria-label={`${room.name}, ${room.capacity}, ${room.bedType}, ₹${room.pricePerNight} per night`}
                className="h-full flex flex-col justify-between rounded-2xl bg-[#161115] border border-[#D97706]/20 hover:border-[#D97706]/60 focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B0D] focus:outline-none transition-all duration-300 overflow-hidden group shadow-lg"
              >
                
                <div>
                  {/* Room Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161115] via-transparent to-transparent opacity-80" />

                    {/* Featured Tag */}
                    {room.featured && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#D97706] text-[#0D0B0D] font-bold text-[10px] uppercase tracking-wider shadow-md flex items-center gap-1">
                        <Sparkles className="w-3 h-3" /> Bestseller
                      </span>
                    )}

                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/70 backdrop-blur-md text-[#F59E0B] text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{room.rating}</span>
                    </div>
                  </div>

                  {/* Room Body Details */}
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-lg text-[#F3EFEA] group-hover:text-[#F59E0B] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-[#B8A89A] mt-1 line-clamp-2">{room.tagline}</p>

                    {/* Quick Specs */}
                    <div className="flex items-center gap-4 text-xs text-[#D8C9BC] my-4 pt-3 border-t border-[#D97706]/15">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>{room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-[#D97706]" />
                        <span>{room.bedType}</span>
                      </div>
                    </div>

                    {/* Mini Amenities */}
                    <div className="space-y-1.5 mb-4">
                      {room.amenities.slice(0, 3).map((amenity, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-[#B8A89A]">
                          <CheckCircle2 className="w-3 h-3 text-[#34D399] shrink-0" />
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Price & Buttons */}
                <div className="p-5 pt-0 border-t border-[#D97706]/15 mt-2 flex flex-col gap-2.5">
                  <div className="flex items-baseline justify-between">
                    <div>
                      {room.originalPrice && (
                        <span className="text-[11px] text-[#B8A89A] line-through block">₹{room.originalPrice}</span>
                      )}
                      <div className="text-xl font-bold text-[#F59E0B] font-serif">
                        ₹{room.pricePerNight}<span className="text-xs text-[#B8A89A] font-normal">/night</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedRoomModal(room)}
                      aria-label={`View details and full amenities for ${room.name}`}
                      className="py-2.5 px-3 rounded-xl bg-[#241B20] text-[#D8C9BC] hover:text-white border border-[#D97706]/30 text-xs font-semibold flex items-center justify-center gap-1 transition-all focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    >
                      <Eye className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => onOpenBookingWithRoom(room.id)}
                      aria-label={`Book ${room.name} for ₹${room.pricePerNight} per night`}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1 shadow-md hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>

              </article>
            </TiltCard>
          ))}
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
