import React from 'react';
import RestaurantSection from '../components/RestaurantSection';

export default function RestaurantPage() {
  return (
    <div className="pt-24">
      <div className="bg-[#120D10] py-12 border-b border-[#D97706]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
            Highway Dining
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#F3EFEA] mt-3">
            Rajput <span className="gold-gradient-text">Restaurant Menu</span>
          </h1>
          <p className="text-sm text-[#B8A89A] mt-2 max-w-xl mx-auto">
            Explore 120+ authentic Odia dishes, North Indian gravies, tandoori treats, and refreshing beverages.
          </p>
        </div>
      </div>

      <RestaurantSection />
    </div>
  );
}
