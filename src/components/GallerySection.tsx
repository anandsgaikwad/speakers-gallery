import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Shield, Eye } from 'lucide-react';
import { GalleryItem, GalleryCategory } from '../types';

interface GallerySectionProps {
  items: GalleryItem[];
}

export const GallerySection: React.FC<GallerySectionProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = ['All', 'Leadership', 'Events', 'Service', 'Speaking'];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveLightboxIndex(null);
  }, []);

  const showPrev = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [activeLightboxIndex, filteredItems.length]);

  const showNext = useCallback(() => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! + 1) % filteredItems.length);
  }, [activeLightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    if (activeLightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxIndex, closeLightbox, showPrev, showNext]);

  const currentLightboxItem = activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <section
      id="gallery"
      className="py-24 lg:py-32 bg-[#F6F3EC] border-t border-[#E5E1D8] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E5E1D8] rounded-sm mb-4 shadow-2xs">
            <Shield className="w-3.5 h-3.5 text-[#B8860B]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#B8860B]">
              Visual Archives
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] font-semibold mb-4 tracking-tight">
            The Gallery
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#555C68] font-normal tracking-wide max-w-xl mx-auto mb-6">
            Moments, milestones and memories from a life of leadership and service.
          </p>

          <div className="w-20 h-[1px] bg-[#B8860B] mx-auto" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                id={`gallery-filter-${category.toLowerCase()}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0A1128] text-white shadow-sm border border-[#0A1128]'
                    : 'bg-white text-[#555C68] hover:text-[#1A1A1A] hover:bg-[#FDFBF7] border border-[#E5E1D8]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Grid / Masonry Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                id={`gallery-item-${item.id}`}
                onClick={() => openLightbox(index)}
                className="group relative rounded-sm overflow-hidden bg-white border border-[#E5E1D8] hover:border-[#B8860B] cursor-pointer shadow-[0_4px_20px_-4px_rgba(26,26,26,0.06)] hover:shadow-xl transition-all duration-300 aspect-[4/3] flex flex-col justify-end"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

                {/* Dark Gradient Overlay for optimal caption legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Corner Category Tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-sm bg-white/95 backdrop-blur-sm border border-[#E5E1D8] text-[10px] font-bold uppercase tracking-[0.18em] text-[#1A1A1A] shadow-xs">
                    {item.category}
                  </span>
                </div>

                {/* Corner Expand Indicator */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-sm bg-white/95 border border-[#E5E1D8] text-[#1A1A1A] shadow-xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                {/* Caption on Card */}
                <div className="relative z-10 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                  <h3 className="font-serif text-lg text-white font-semibold leading-snug group-hover:text-[#FDFBF7] transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-white/80 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#D8AA47] font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-3 h-3" />
                    <span>Click to expand view</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Clean Lightbox Modal */}
      {activeLightboxIndex !== null && currentLightboxItem && (
        <div
          id="gallery-lightbox-modal"
          className="fixed inset-0 z-50 bg-[#121418]/85 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeLightbox();
          }}
        >
          {/* Lightbox Header Bar */}
          <div className="flex items-center justify-between max-w-6xl mx-auto w-full pb-4 border-b border-[#2D3139]">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded-sm bg-[#1A1A1A] border border-[#2D3139] text-[10px] font-bold uppercase tracking-[0.2em] text-[#D8AA47]">
                {currentLightboxItem.category}
              </span>
              <span className="text-xs text-white/70 font-medium">
                {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>

            <button
              id="lightbox-close-btn"
              onClick={closeLightbox}
              className="p-2 rounded-sm bg-[#1A1A1A] text-white hover:bg-[#2D3139] border border-[#2D3139] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Center Image View */}
          <div className="flex-1 flex items-center justify-center max-w-6xl mx-auto w-full py-4 relative">
            {/* Prev Button */}
            <button
              id="lightbox-prev-btn"
              onClick={showPrev}
              className="absolute left-2 sm:-left-4 md:-left-8 z-20 p-3 rounded-full bg-[#1A1A1A]/90 hover:bg-[#2D3139] text-white border border-[#2D3139] shadow-xl transition-transform hover:scale-105"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image Container */}
            <div className="relative max-h-[70vh] max-w-4xl w-full flex items-center justify-center rounded-sm overflow-hidden border border-[#B8860B]/40 bg-black/80 shadow-2xl">
              <img
                src={currentLightboxItem.imageUrl}
                alt={currentLightboxItem.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xs"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Next Button */}
            <button
              id="lightbox-next-btn"
              onClick={showNext}
              className="absolute right-2 sm:-right-4 md:-right-8 z-20 p-3 rounded-full bg-[#1A1A1A]/90 hover:bg-[#2D3139] text-white border border-[#2D3139] shadow-xl transition-transform hover:scale-105"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Caption */}
          <div className="max-w-4xl mx-auto w-full pt-4 border-t border-[#2D3139] text-center">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-semibold mb-1.5">
              {currentLightboxItem.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-white/80 max-w-2xl mx-auto leading-relaxed">
              {currentLightboxItem.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
