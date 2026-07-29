import React from 'react';
import GallerySection from '../components/GallerySection';

export default function GalleryPage() {
  return (
    <div className="pt-24">
      <div className="bg-[#120D10] py-12 border-b border-[#D97706]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
            Interactive Visuals
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-[#F3EFEA] mt-3">
            Photo <span className="gold-gradient-text">Gallery</span>
          </h1>
          <p className="text-sm text-[#B8A89A] mt-2 max-w-xl mx-auto">
            Browse our hotel exterior, luxury suites, fine dining restaurant, and AC banquet hall.
          </p>
        </div>
      </div>

      <GallerySection />
    </div>
  );
}
