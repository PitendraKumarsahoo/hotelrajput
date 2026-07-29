import React from 'react';
import { REVIEWS } from '../data';
import TiltCard from './TiltCard';
import { Star, Quote, CheckCircle, MessageSquare } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-[#120D10] border-t border-[#D97706]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
            Guest Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F3EFEA] mt-3">
            What Highway Travelers Say About <span className="gold-gradient-text">Hotel Rajput</span>
          </h2>
          <p className="text-sm text-[#B8A89A] mt-2">
            Rated 4.8 / 5.0 across 500+ Google Reviews & TripAdvisor ratings.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="region" aria-label="Guest Reviews List">
          {REVIEWS.map((rev) => (
            <TiltCard key={rev.id} maxTilt={8} className="h-full">
              <article
                tabIndex={0}
                aria-label={`Review by ${rev.author} from ${rev.location}, Rating ${rev.rating} stars: ${rev.comment}`}
                className="h-full rounded-2xl bg-[#161115] border border-[#D97706]/20 hover:border-[#D97706]/50 p-6 flex flex-col justify-between group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#F59E0B]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-[#2A181E] text-[#D97706] border border-[#D97706]/30">
                      {rev.source}
                    </span>
                  </div>

                  <Quote className="w-8 h-8 text-[#D97706]/30 mb-2" />

                  <p className="text-xs sm:text-sm text-[#D8C9BC] leading-relaxed italic mb-6">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D97706]/15 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#D97706]/40"
                    />
                    <div>
                      <div className="text-xs font-bold text-[#F3EFEA] flex items-center gap-1">
                        <span>{rev.author}</span>
                        {rev.verifiedGuest && (
                          <CheckCircle className="w-3.5 h-3.5 text-[#34D399]" title="Verified Guest" />
                        )}
                      </div>
                      <div className="text-[10px] text-[#B8A89A]">{rev.location}</div>
                    </div>
                  </div>

                  <span className="text-[10px] text-[#B8A89A]">{rev.date}</span>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
