import Image from 'next/image';
import Hero from '@/components/Hero';
import ProductCategoryCard from '@/components/ProductCategoryCard';
import siteConfig from '@/data/siteConfig.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Maryland\'s Premier Cigar & Smoke Shop',
  description: 'Learn about Cigar and Smoke Shop, Maryland\'s premier destination for cigars, vapes, and hookah. We do it all!',
};

export default function AboutPage() {
  const { businessInfo, productCategories } = siteConfig;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/rushay-booysen.jpg"
        alt="About Cigar and Smoke Shop"
        height="medium"
      />

      {/* Discount Banner */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl font-semibold tracking-wide">
            Here's the cherry on top...
          </p>
          <p className="text-sm md:text-base mt-4 text-gray-600 uppercase tracking-wider">
            {businessInfo.discount.text}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Our goal is very simple at <span className="italic">Cigar and Smoke Shop</span>:
            </h1>
            <p className="text-xl text-gray-700">
              Help you create the perfect smoking or vaping experience.
            </p>
          </div>

          <div className="pt-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Cigars, vapes, or something else? We do it all!
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Here's why we're special. We have everything you need. Whether you're trying to 
              buy a <span className="font-semibold">majestic cigar</span>, looking for <span className="font-semibold">premium E-juices</span>, or maybe just looking for <span className="font-semibold">RAW 
              papers</span>... You can bet we have it!
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase tracking-wide">
            What We Offer
          </h2>
          
          {/* First row - 2 columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ProductCategoryCard category={productCategories[0]} />
            <ProductCategoryCard category={productCategories[1]} />
          </div>
          
          {/* Second row - 2 columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ProductCategoryCard category={productCategories[2]} />
            <ProductCategoryCard category={productCategories[3]} />
          </div>
          
          {/* Third row - 2 columns */}
          <div className="grid md:grid-cols-2 gap-8">
            <ProductCategoryCard category={productCategories[4]} />
            <ProductCategoryCard category={productCategories[5]} />
          </div>
        </div>
      </section>
    </div>
  );
}

