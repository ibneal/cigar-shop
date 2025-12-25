'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import BrandCarousel from '@/components/BrandCarousel';
import ProductCategoryCard from '@/components/ProductCategoryCard';
import siteConfig from '@/data/siteConfig.json';

export default function Home() {
  const { businessInfo, featuredBrands, productCategories } = siteConfig;
  const [storeStatus, setStoreStatus] = useState({ isOpen: false, message: '' });

  useEffect(() => {
    const checkStoreStatus = () => {
      const now = new Date();
      const currentDay = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
      const currentTime = now.getHours() * 60 + now.getMinutes();

      // Get today's hours
      const todayHours = businessInfo.hours[currentDay as keyof typeof businessInfo.hours];
      
      if (!todayHours || typeof todayHours !== 'string') {
        setStoreStatus({ isOpen: false, message: 'Closed' });
        return;
      }

      // Parse hours (e.g., "10:00 AM - 8:00 PM")
      const hoursMatch = todayHours.match(/(\d+):(\d+)\s*(AM|PM)\s*-\s*(\d+):(\d+)\s*(AM|PM)/i);
      
      if (!hoursMatch) {
        setStoreStatus({ isOpen: false, message: 'Closed' });
        return;
      }

      let openHour = parseInt(hoursMatch[1]);
      const openMin = parseInt(hoursMatch[2]);
      const openPeriod = hoursMatch[3].toUpperCase();
      let closeHour = parseInt(hoursMatch[4]);
      const closeMin = parseInt(hoursMatch[5]);
      const closePeriod = hoursMatch[6].toUpperCase();

      // Convert to 24-hour format
      if (openPeriod === 'PM' && openHour !== 12) openHour += 12;
      if (openPeriod === 'AM' && openHour === 12) openHour = 0;
      if (closePeriod === 'PM' && closeHour !== 12) closeHour += 12;
      if (closePeriod === 'AM' && closeHour === 12) closeHour = 0;

      const openTime = openHour * 60 + openMin;
      const closeTime = closeHour * 60 + closeMin;

      if (currentTime >= openTime && currentTime < closeTime) {
        // Store is open
        const closeHour12 = closeHour > 12 ? closeHour - 12 : (closeHour === 0 ? 12 : closeHour);
        const closePeriodDisplay = closeHour >= 12 ? 'pm' : 'am';
        const closeMinDisplay = closeMin > 0 ? `:${closeMin.toString().padStart(2, '0')}` : '';
        setStoreStatus({ 
          isOpen: true, 
          message: `Open • Closes ${closeHour12}${closeMinDisplay} ${closePeriodDisplay}` 
        });
      } else {
        // Store is closed
        setStoreStatus({ isOpen: false, message: 'Closed' });
      }
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/handome-man-in-suit-smoking-a-cigar.jpg"
        alt="Cigar and Smoke Shop"
        height="large"
      />

      {/* Store Info Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-wide uppercase">
            {businessInfo.tagline}
          </h1>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-md transition-colors text-lg w-full sm:w-auto"
            >
              {businessInfo.contact.phone}
            </a>
            <Link
              href="/location"
              className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-md transition-colors text-lg w-full sm:w-auto"
            >
              Visit Us
            </Link>
          </div>
          
          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-gray-600 mb-1">
                Hours: <span className={`font-semibold ${storeStatus.isOpen ? 'text-green-600' : 'text-gray-900'}`}>{storeStatus.message}</span>
              </p>
              <div className="text-base space-y-1">
                <p><span className="font-semibold">Monday - Thursday:</span> {businessInfo.hours.monday}</p>
                <p><span className="font-semibold">Friday - Saturday:</span> {businessInfo.hours.friday}</p>
                <p><span className="font-semibold">Sunday:</span> {businessInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section with Image */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 md:h-96">
              <Image
                src="/images/pexels-b-aristotle-guweh-jr-1643208950-32950368.jpg"
                alt="Cigar and Smoke Shop Store"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Everything you want in a smoke shop or vape shop you can find here, we're 
                conveniently located inside <span className="font-semibold">Arundel Mills mall</span> right next 
                to Maryland Live! Casino. Our knowledgeable staff can you help 
                you find the best vaping, smoking, or vaping experience meanwhile. Come in and 
                check out what we have to offer!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands Carousel */}
      <section className="py-16 bg-white">
        <BrandCarousel brands={featuredBrands} />
      </section>

      {/* Discount Callout */}
      <section className="py-12 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold tracking-wide">
            {businessInfo.discount.text}
          </p>
          <Link
            href="/about"
            className="inline-block mt-6 text-sm uppercase tracking-wider hover:underline"
          >
            Learn More About Us
          </Link>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 uppercase tracking-wide">
            Our Products
          </h2>
          
          {/* Premium Cigars - Full Width */}
          <div className="mb-8">
            <ProductCategoryCard category={productCategories[0]} layout="large" />
          </div>

          {/* Second Row - Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ProductCategoryCard category={productCategories[1]} />
            <ProductCategoryCard category={productCategories[2]} />
          </div>

          {/* Third Row - Two Columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ProductCategoryCard category={productCategories[3]} />
            <ProductCategoryCard category={productCategories[4]} />
          </div>

          {/* Fourth Row - Full Width */}
          <div>
            <ProductCategoryCard category={productCategories[5]} layout="large" />
          </div>
        </div>
      </section>
    </div>
  );
}

