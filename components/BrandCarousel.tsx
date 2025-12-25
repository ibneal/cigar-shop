'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Brand {
  id: string;
  name: string;
  logo: string;
  order: number;
}

interface BrandCarouselProps {
  brands: Brand[];
}

export default function BrandCarousel({ brands }: BrandCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-wide">
        FEATURED BRANDS
      </h2>
      <div className="relative group">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll left"
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
          aria-label="Scroll right"
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0 w-32 h-20 relative grayscale hover:grayscale-0 transition-all cursor-pointer"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

