import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { ROOMS } from '../data';
import { BookingFormData } from '../types';
import { submitBooking } from '../lib/appsScript';
import { X, Calendar, User, Phone, Mail, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  selectedRoomId?: string;
  onClose: () => void;
}

export default function BookingModal({ isOpen, selectedRoomId, onClose }: BookingModalProps) {
  const defaultRoom = selectedRoomId
    ? ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0]
    : ROOMS[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    checkInDate: new Date().toISOString().split('T')[0],
    checkOutDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    guests: 2,
    roomId: defaultRoom.id,
    specialRequests: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successResult, setSuccessResult] = useState<string | null>(null);

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

  const currentRoom = ROOMS.find((r) => r.id === formData.roomId) || ROOMS[0];

  // Calculate nights difference
  const dateIn = new Date(formData.checkInDate);
  const dateOut = new Date(formData.checkOutDate);
  const diffTime = Math.max(dateOut.getTime() - dateIn.getTime(), 86400000);
  const nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const totalPrice = currentRoom.pricePerNight * nights;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessResult(null);

    const res = await submitBooking(formData);
    setIsSubmitting(false);

    if (res.success) {
      setSuccessResult(res.message);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#D97706', '#F59E0B', '#FFF0D4', '#8B2613'],
        });
      } catch (e) {
        // Safe fallback if confetti isn't supported
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Direct Room Inquiry and Reservation Form"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="html-light-modal relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#140F12] border border-[#D97706]/40 shadow-2xl p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#251A20] text-[#B8A89A] hover:text-white border border-[#D97706]/30 z-10 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-[#D97706]/20 pb-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
            Direct Room Inquiry & Reservation
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#F3EFEA] mt-2">
            Book Your Stay at <span className="gold-gradient-text">Rajput Gateway</span>
          </h2>
          <p className="text-xs text-[#B8A89A] mt-1">
            24/7 Check-in • No prepayment needed to submit request
          </p>
        </div>

        {successResult ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#122A1E] text-[#34D399] border-2 border-[#34D399]/40 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-serif font-bold text-[#F3EFEA] mb-2">Booking Request Transmitted!</h3>
            <p className="text-xs text-[#D8C9BC] max-w-md mx-auto mb-6 leading-relaxed">
              {successResult}
            </p>

            <div className="p-4 rounded-2xl bg-[#1A1216] border border-[#D97706]/20 text-left w-full mb-6">
              <div className="text-xs font-bold text-[#F59E0B] mb-1">{currentRoom.name}</div>
              <div className="text-xs text-[#B8A89A]">
                Check-in: {formData.checkInDate} • Check-out: {formData.checkOutDate} ({nights} Night{nights > 1 ? 's' : ''})
              </div>
              <div className="text-xs font-bold text-[#F3EFEA] mt-2">Estimated Total: ₹{totalPrice}</div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close success summary"
              className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            >
              Done & Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Room Selection */}
            <div>
              <label htmlFor="booking-room" className="block text-xs font-semibold text-[#D8C9BC] mb-1">Select Accomodation *</label>
              <select
                id="booking-room"
                value={formData.roomId}
                onChange={(e) => setFormData({ ...formData, roomId: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
              >
                {ROOMS.map((room) => (
                  <option key={room.id} value={room.id}>
                    {room.name} — ₹{room.pricePerNight}/night ({room.capacity})
                  </option>
                ))}
              </select>
            </div>

            {/* Date Pickers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="booking-checkin" className="block text-xs font-semibold text-[#D8C9BC] mb-1">Check-in Date *</label>
                <input
                  id="booking-checkin"
                  type="date"
                  required
                  value={formData.checkInDate}
                  onChange={(e) => setFormData({ ...formData, checkInDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                />
              </div>

              <div>
                <label htmlFor="booking-checkout" className="block text-xs font-semibold text-[#D8C9BC] mb-1">Check-out Date *</label>
                <input
                  id="booking-checkout"
                  type="date"
                  required
                  value={formData.checkOutDate}
                  onChange={(e) => setFormData({ ...formData, checkOutDate: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                />
              </div>
            </div>

            {/* Guest Details */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="booking-guests" className="block text-xs font-semibold text-[#D8C9BC] mb-1">Number of Guests</label>
                <select
                  id="booking-guests"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                >
                  <option value={1}>1 Guest</option>
                  <option value={2}>2 Guests</option>
                  <option value={3}>3 Guests</option>
                  <option value={4}>4 Guests</option>
                  <option value={5}>5+ Guests (Family)</option>
                </select>
              </div>

              <div>
                <label htmlFor="booking-fullname" className="block text-xs font-semibold text-[#D8C9BC] mb-1">Full Name *</label>
                <input
                  id="booking-fullname"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                />
              </div>

              <div>
                <label htmlFor="booking-phone" className="block text-xs font-semibold text-[#D8C9BC] mb-1">Phone Number *</label>
                <input
                  id="booking-phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 9437123456"
                  className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                />
              </div>
            </div>

            {/* Price Summary Pill */}
            <div className="p-4 rounded-2xl bg-[#1A1216] border border-[#D97706]/30 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#D97706] font-bold uppercase tracking-wider block">Estimated Tariff</span>
                <span className="text-xs text-[#B8A89A]">
                  ₹{currentRoom.pricePerNight} × {nights} Night{nights > 1 ? 's' : ''}
                </span>
              </div>
              <div className="text-[#F59E0B] font-serif font-bold text-2xl">
                ₹{totalPrice}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all active:scale-95 disabled:opacity-50"
            >
              <Calendar className="w-4 h-4" />
              <span>{isSubmitting ? 'Processing Reservation...' : 'Confirm Room Reservation'}</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
