import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import { Star, IndianRupee, MapPin, UtensilsCrossed, Clock, ShieldCheck } from 'lucide-react';

export default function HighlightsStrip() {
  return (
    <section id="highlights" className="py-16 bg-[#120D10] border-y border-[#D97706]/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
            Highway Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F3EFEA] mt-3">
            Why Travelers Choose <span className="gold-gradient-text">Rajput Gateway</span>
          </h2>
          <p className="text-sm text-[#B8A89A] mt-2">
            Trusted by over 50,000+ highway commuters, family tourists, and commercial drivers on NH-224 Daspalla.
          </p>
        </div>

        {/* 6 Grid Counters */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          <AnimatedCounter
            end={4.8}
            decimals={1}
            suffix=" ★"
            label="Google Rating"
            sublabel="500+ Verified Reviews"
            icon={<Star className="w-6 h-6" />}
          />
          <AnimatedCounter
            end={1299}
            prefix="₹"
            suffix="+"
            label="Starts From"
            sublabel="AC Comfort Per Night"
            icon={<IndianRupee className="w-6 h-6" />}
          />
          <AnimatedCounter
            end={0}
            suffix=" Km"
            label="On NH-224"
            sublabel="Zero Distance Off Highway"
            icon={<MapPin className="w-6 h-6" />}
          />
          <AnimatedCounter
            end={120}
            suffix="+"
            label="Menu Varieties"
            sublabel="Odia, Indian & Chinese"
            icon={<UtensilsCrossed className="w-6 h-6" />}
          />
          <AnimatedCounter
            end={24}
            suffix="/7"
            label="Open Service"
            sublabel="Check-in & Dining"
            icon={<Clock className="w-6 h-6" />}
          />
          <AnimatedCounter
            end={12}
            suffix="+"
            label="Years Legacy"
            sublabel="Serving Daspalla Route"
            icon={<ShieldCheck className="w-6 h-6" />}
          />
        </div>

      </div>
    </section>
  );
}
