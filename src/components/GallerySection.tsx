import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import LightboxModal from './LightboxModal';
import { Maximize2, Image as ImageIcon } from 'lucide-react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'exterior', label: 'Hotel Exterior & Parking' },
    { id: 'rooms', label: 'Luxury Rooms' },
    { id: 'restaurant', label: 'Restaurant & Food' },
    { id: 'banquet', label: 'Banquet & Events' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-20 bg-[#0D0B0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D97706] bg-[#8B2613]/20 px-3 py-1 rounded-full border border-[#D97706]/30">
            Visual Tour
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F3EFEA] mt-3">
            Explore <span className="gold-gradient-text">Rajput Highway Gateway</span>
          </h2>
          <p className="text-sm text-[#B8A89A] mt-2">
            Click any photo to open full-screen lightbox preview with keyboard navigation (Arrow Keys & Escape).
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist" aria-label="Gallery filter categories">
          {categories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              aria-label={`Filter gallery by ${cat.label}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider whitespace-nowrap transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B0D] ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#8B2613] to-[#D97706] text-white shadow-lg scale-105'
                  : 'bg-[#181216] text-[#B8A89A] hover:text-[#F59E0B] hover:bg-[#281B22] border border-[#D97706]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="region" aria-label="Photo Gallery Bento Grid">
          {filteredItems.map((item, idx) => {
            // Staggered bento sizing for visual rhythm
            const isWide = idx % 5 === 0;
            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`View ${item.title} (${item.categoryLabel}) in full screen lightbox`}
                onClick={() => openLightbox(idx)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(idx);
                  }
                }}
                className={`group relative rounded-2xl overflow-hidden border border-[#D97706]/20 hover:border-[#D97706]/60 focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0B0D] focus:outline-none transition-all duration-300 cursor-pointer shadow-lg bg-[#161115] ${
                  isWide ? 'sm:col-span-2 lg:col-span-2 h-72 sm:h-80' : 'h-72 sm:h-80'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B0D] via-[#0D0B0D]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Category Tag */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#0D0B0D]/80 backdrop-blur-md text-[#F59E0B] text-[10px] font-bold uppercase tracking-wider border border-[#D97706]/30">
                  {item.categoryLabel}
                </span>

                {/* Expand Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity group-hover:scale-110">
                  <Maximize2 className="w-4 h-4 text-[#F59E0B]" />
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif font-bold text-base text-[#F3EFEA] group-hover:text-[#F59E0B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B8A89A] mt-1 line-clamp-1">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
