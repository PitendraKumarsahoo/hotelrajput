import React, { useState } from 'react';
import { MENU_ITEMS } from '../data';
import TiltCard from './TiltCard';
import { UtensilsCrossed, Flame, Clock, Star, Sparkles, MessageSquare } from 'lucide-react';
import { getWhatsAppLink } from '../lib/appsScript';

export default function RestaurantSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'odia', label: 'Authentic Odia' },
    { id: 'north-indian', label: 'North Indian & Thalis' },
    { id: 'tandoori-chinese', label: 'Tandoori & Chinese' },
    { id: 'beverages-desserts', label: 'Chai & Beverages' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  // Find signature dish for Bento Hero Card
  const signatureDish = MENU_ITEMS.find((item) => item.isSignature) || MENU_ITEMS[0];

  return (
    <section id="restaurant" className="py-20 bg-[#120D10] relative overflow-hidden border-t border-[#D97706]/20">
      {/* Glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#D97706]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
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

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist" aria-label="Restaurant menu category filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-label={`Filter food menu by ${cat.label}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#120D10] ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#8B2613] to-[#D97706] text-white shadow-lg scale-105'
                  : 'bg-[#1C1418] text-[#B8A89A] hover:text-[#F59E0B] hover:bg-[#281B22] border border-[#D97706]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" role="region" aria-label="Restaurant Food Menu Items">
          
          {/* Signature Dish 2x2 Bento Hero Card */}
          {activeCategory === 'all' && (
            <div className="md:col-span-2 lg:col-span-2">
              <TiltCard maxTilt={6} className="h-full">
                <article
                  tabIndex={0}
                  aria-label={`Signature dish: ${signatureDish.name}, Price ₹${signatureDish.price}`}
                  className="h-full rounded-3xl bg-gradient-to-br from-[#28151A] via-[#1A1115] to-[#0D0B0D] border-2 border-[#D97706]/50 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                >
                  
                  <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#D97706]/20 rounded-full blur-3xl pointer-events-none" />

                  <div className="flex items-center justify-between z-10 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#D97706] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3.5 h-3.5" /> Chef's Signature
                    </span>
                    <div className="flex items-center gap-1 text-[#F59E0B] font-bold text-sm bg-black/60 px-3 py-1 rounded-full border border-[#D97706]/30">
                      <Star className="w-4 h-4 fill-current" />
                      <span>{signatureDish.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center my-4 z-10">
                    <div className="order-2 sm:order-1">
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3EFEA] mb-2 group-hover:text-[#F59E0B] transition-colors">
                        {signatureDish.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#D8C9BC] leading-relaxed mb-4">
                        {signatureDish.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-2 mb-6">
                        {signatureDish.tags.map((tag, idx) => (
                          <span key={idx} className="px-2.5 py-0.5 rounded bg-[#361E26] text-[#F59E0B] text-[11px] font-semibold border border-[#D97706]/30">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-3xl font-bold text-[#F59E0B] font-serif">
                          ₹{signatureDish.price}
                        </div>
                        <a
                          href={getWhatsAppLink(`Hello Hotel Rajput Restaurant, I would like to order ${signatureDish.name}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Order ${signatureDish.name} on WhatsApp`}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D97706] to-[#F59E0B] text-[#0D0B0D] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Order on WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    <div className="order-1 sm:order-2 h-48 sm:h-64 rounded-2xl overflow-hidden border border-[#D97706]/40 shadow-xl">
                      <img
                        src={signatureDish.image}
                        alt={signatureDish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                </article>
              </TiltCard>
            </div>
          )}

          {/* Standard Food Bento Cards */}
          {filteredItems.map((item) => (
            <TiltCard key={item.id} maxTilt={10} className="h-full">
              <article
                tabIndex={0}
                aria-label={`${item.name}, Price ₹${item.price}, ${item.isVeg ? 'Veg' : 'Non-Veg'}, Preparation time ${item.preparationTime}`}
                className="h-full rounded-2xl bg-[#161115] border border-[#D97706]/20 hover:border-[#D97706]/50 transition-all duration-300 p-5 flex flex-col justify-between group shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
              >
                
                <div>
                  <div className="relative h-40 rounded-xl overflow-hidden mb-4 border border-[#D97706]/20">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161115] via-transparent to-transparent opacity-60" />

                    {/* Veg/NonVeg Indicator */}
                    <span className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                      item.isVeg
                        ? 'bg-[#122A1E] text-[#34D399] border-[#34D399]/40'
                        : 'bg-[#2A1215] text-[#F87171] border-[#F87171]/40'
                    }`}>
                      {item.isVeg ? '● Pure Veg' : '▲ Non-Veg'}
                    </span>

                    {item.isSpicy && (
                      <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-[#331100] text-[#FF6B00] border border-[#FF6B00]/40 text-[10px] font-bold flex items-center gap-0.5">
                        <Flame className="w-3 h-3" /> Spicy
                      </span>
                    )}
                  </div>

                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-serif font-bold text-base text-[#F3EFEA] group-hover:text-[#F59E0B] transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-lg font-bold text-[#F59E0B] font-serif shrink-0">₹{item.price}</span>
                  </div>

                  <p className="text-xs text-[#B8A89A] mt-2 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#D97706]/15 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-[#B8A89A]">
                    <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                    <span>{item.preparationTime}</span>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hello Hotel Rajput, I would like to order/inquire about ${item.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Order ${item.name} on WhatsApp`}
                    className="text-xs font-semibold text-[#F59E0B] hover:text-[#D97706] flex items-center gap-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
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
