import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - Premium Cigars, Vapes, Hookah, Kratom, CBD & Accessories',
  description: 'Explore our premium selection of cigars, vaporizers, e-juice, hookah, kratom, CBD & hemp products, and smoking accessories at Maryland\'s best smoke shop.',
};

const productCategories = [
  {
    name: 'Cigars',
    href: '/products/cigars',
    image: '/images/premium_cigars.jpg',
    description: 'Premium selection of finely crafted cigars from top brands like Cohiba, Arturo Fuente, Padron, and more.',
  },
  {
    name: 'Hookah',
    href: '/products/hookah',
    image: '/images/Hookah.jpg',
    description: 'Experience the finest hookah products and premium shisha flavors from Al Fakher, Starbuzz, Fumari, and more.',
  },
  {
    name: 'Vaporizers & E-Juice',
    href: '/products/vapes',
    image: '/images/vape-banner.webp',
    description: 'Discover the latest in vaping technology and premium e-liquids from Geek Bar, Lost Mary, Vaporesso, and more.',
  },
  {
    name: 'Kratom',
    href: '/products/kratom',
    image: '/images/kratom.jpg',
    description: 'Premium quality kratom products from trusted sources. Various strains available in powder, capsule, and extract forms.',
  },
  {
    name: 'Accessories',
    href: '/products/accessories',
    image: '/images/cigar-cutters.jpg',
    description: 'Everything you need to enhance your smoking experience - lighters, cutters, humidors, rolling papers, and more.',
  },
  {
    name: 'Hemp & CBD',
    href: '/products/hemp-cbd',
    image: '/images/cbd-4469987.jpg',
    description: 'Premium CBD and hemp products - third-party lab tested. Gummies, edibles, vape products, hemp flower, and more.',
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/hero-products.jpg"
        alt="Premium Cigars and Tobacco Products"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
            Our Products
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our extensive selection of premium tobacco products, vaping supplies, 
            and smoking accessories. Click on any category to learn more.
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 uppercase tracking-wide group-hover:text-gray-600 transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {category.description}
                </p>
                <div className="mt-4 text-sm font-semibold text-black group-hover:text-gray-600 transition-colors">
                  Learn More →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-black text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg mb-6">
            Visit us in-store or contact us for more information about our products and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/location"
              className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors rounded"
            >
              Visit Our Store
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-colors rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
