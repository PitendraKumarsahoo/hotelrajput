import React, { useState } from 'react';
import { HOTEL_PHONE, HOTEL_EMAIL, HOTEL_ADDRESS, MAPS_EMBED_URL, MAPS_DIRECTIONS_URL, getWhatsAppLink, submitContact } from '../lib/appsScript';
import { MapPin, Phone, Mail, MessageSquare, Navigation, Send, CheckCircle2, Clock } from 'lucide-react';
import { ContactFormData } from '../types';

export default function LocationContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    subject: 'Room Inquiry / Table Reservation',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const res = await submitContact(formData);
    setIsSubmitting(false);
    setSubmitResult(res);

    if (res.success) {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        subject: 'Room Inquiry / Table Reservation',
        message: '',
      });
    }
  };

  return (
    <section id="location" className="py-20 bg-[#0D0B0D] relative overflow-hidden border-t border-[#D97706]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
            Highway Location & Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F3EFEA] mt-3">
            Visit Us On <span className="gold-gradient-text">NH-224 Daspalla</span>
          </h2>
          <p className="text-sm text-[#B8A89A] mt-2">
            Easy highway access with 24/7 reception, spacious parking yard, and direct phone/WhatsApp assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Map & Quick Contacts */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Interactive Map Embed */}
            <div className="relative h-72 sm:h-80 rounded-3xl overflow-hidden border border-[#D97706]/30 shadow-2xl">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Rajput Daspalla Google Map"
              />
              <div className="absolute bottom-3 right-3">
                <a
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#D97706] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg hover:bg-[#F59E0B] transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Highway Directions</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${HOTEL_PHONE}`}
                className="p-4 rounded-2xl bg-[#161115] border border-[#D97706]/20 hover:border-[#D97706] transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#28181E] text-[#F59E0B] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#D97706]">Call Front Desk 24/7</div>
                  <div className="text-xs font-bold text-[#F3EFEA] group-hover:text-[#F59E0B] transition-colors">{HOTEL_PHONE}</div>
                </div>
              </a>

              <a
                href={getWhatsAppLink("Hello Hotel Rajput, I want to inquire about room booking.")}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#122A1E]/80 border border-[#34D399]/30 hover:border-[#34D399] transition-all flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1A3828] text-[#34D399] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#34D399]">WhatsApp Chat</div>
                  <div className="text-xs font-bold text-[#F3EFEA] group-hover:text-[#34D399] transition-colors">Instant Response</div>
                </div>
              </a>
            </div>

            {/* Address Pill */}
            <div className="p-4 rounded-2xl bg-[#161115] border border-[#D97706]/20 flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#F59E0B] shrink-0" />
              <div className="text-xs text-[#D8C9BC]">
                <strong className="text-[#F3EFEA] font-semibold block">Rajput Highway Gateway</strong>
                {HOTEL_ADDRESS}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#140F12] border border-[#D97706]/30 shadow-2xl">
              <h3 className="text-xl font-serif font-bold text-[#F3EFEA] mb-1">Send Us A Message</h3>
              <p className="text-xs text-[#B8A89A] mb-6">Inquire about room reservations, banquet hall bookings, or dining catering.</p>

              {submitResult && (
                <div className={`p-4 rounded-2xl mb-6 text-xs flex items-start gap-3 ${
                  submitResult.success ? 'bg-[#122A1E] text-[#34D399] border border-[#34D399]/40' : 'bg-[#2A1215] text-[#F87171] border border-[#F87171]/40'
                }`}>
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>{submitResult.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D8C9BC] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D8C9BC] mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#D8C9BC] mb-1">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#D8C9BC] mb-1">Inquiry Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                    >
                      <option value="Room Inquiry">Room Inquiry</option>
                      <option value="Table Reservation">Table Reservation</option>
                      <option value="Banquet Hall Booking">Banquet Hall Booking</option>
                      <option value="General Feedback">General Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D8C9BC] mb-1">Your Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your trip dates or event requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-[#1C1418] border border-[#D97706]/30 text-xs text-[#F3EFEA] focus:outline-none focus:border-[#F59E0B]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Send Message To Rajput'}</span>
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
