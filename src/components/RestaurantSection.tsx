import React from 'react';
import { MENU_ITEMS } from '../data';
import TiltCard from './TiltCard';
import { UtensilsCrossed, Flame, Clock } from 'lucide-react';
import { getWhatsAppLink } from '../lib/appsScript';
import OptimizedImage from './OptimizedImage';

export default function RestaurantSection() {
  return (
    <section id="restaurant" className="py-20 bg-[#120D10] relative overflow-hidden border-t border-[#D97706]/20">
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#D97706]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
            Highway Fine Dining
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F3EFEA] mt-3">
            Authentic Culinary Delights at <span className="gold-gradient-text">Rajput Restaurant</span>
          </h2>
          <p className="text-sm text-[#B8A89A] mt-2">
            Freshly prepared with pure ghee, hand-ground spices, and 100% hygienic standards on NH-224 Daspalla.
          </p>
        </div>

        {/* Clean Professional Food Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="region" aria-label="Restaurant Food Menu Items">
          {MENU_ITEMS.map((item) => (
            <TiltCard key={item.id} maxTilt={10} className="h-full">
              <article
                tabIndex={0}
                aria-label={`${item.name}, Price ₹${item.price}, ${item.isVeg ? 'Veg' : 'Non-Veg'}, Preparation time ${item.preparationTime}. Press Enter to order on WhatsApp.`}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && e.target === e.currentTarget) {
                    e.preventDefault();
                    window.open(getWhatsAppLink(`Hello Hotel Rajput, I would like to order ${item.name}`), '_blank');
                  }
                }}
                className="h-full rounded-2xl bg-[#161115] html-light-card border border-[#D97706]/20 hover:border-[#D97706]/50 transition-all duration-300 p-5 flex flex-col justify-between group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] cursor-pointer"
              >
                
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-[#D97706]/20">
                    <OptimizedImage
                      src={item.image}
                      alt={item.name}
                      fallbackType="food"
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 pointer-events-none" />

                    {/* Veg/NonVeg Indicator */}
                    <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                      item.isVeg
                        ? 'bg-[#122A1E] text-[#34D399] border-[#34D399]/40 html-light-veg-pill'
                        : 'bg-[#2A1215] text-[#F87171] border-[#F87171]/40 html-light-nonveg-pill'
                    }`}>
                      {item.isVeg ? '● Pure Veg' : '▲ Non-Veg'}
                    </span>

                    {item.isSpicy && (
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#331100] text-[#FF6B00] border border-[#FF6B00]/40 text-[10px] font-bold flex items-center gap-0.5 html-light-spicy-pill">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif font-bold text-base text-[#F3EFEA] html-light-text-primary group-hover:text-[#F59E0B] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-[#F59E0B] html-light-text-gold font-serif shrink-0">₹{item.price}</span>
                  </div>

                  <p className="text-xs text-[#B8A89A] html-light-text-secondary mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D97706]/15 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#B8A89A] html-light-text-muted">
                    <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>{item.preparationTime}</span>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hello Hotel Rajput, I would like to order/inquire about ${item.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order ${item.name} on WhatsApp`}
                    className="text-xs font-semibold text-[#F59E0B] html-light-text-gold hover:text-[#D97706] flex items-center gap-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                  >
                    <span>Order Food</span>
                    <UtensilsCrossed className="w-3.5 h-3.5" />
                  </a>
                </div>

              </article>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}
