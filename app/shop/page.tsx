import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import siteConfig from '@/data/siteConfig.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop - Visit Our Store',
  description: 'Visit our store at Arundel Mills Mall to shop our full selection of premium cigars, vapes, e-juice, hookah, and accessories.',
};

export default function ShopPage() {
  const { businessInfo, productCategories } = siteConfig;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/pexels-rdne-6260464.jpg"
        alt="Shop at Cigar and Smoke Shop"
        height="medium"
        title="SHOP"
        subtitle="Visit us in store for the best selection"
      />

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Experience Our Full Selection In-Store
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            At Cigar and Smoke Shop, we believe in providing a personalized shopping experience. 
            Visit our location at Arundel Mills Mall to browse our extensive collection of premium 
            products and get expert advice from our knowledgeable staff.
          </p>

          {/* Why Visit Section */}
          <div className="pt-8">
            <h2 className="text-2xl font-bold mb-8">Why Visit Our Store?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🎯 Expert Guidance</h3>
                <p className="text-gray-700">
                  Our knowledgeable staff can help you find exactly what you're looking for, 
                  whether you're a beginner or an enthusiast.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🌟 Premium Selection</h3>
                <p className="text-gray-700">
                  Browse our extensive collection of cigars, vaporizers, e-juices, hookah, 
                  and accessories in person.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">💰 Exclusive Deals</h3>
                <p className="text-gray-700">
                  Take advantage of in-store promotions and our 10% discount for Military, Police, Fire/EMS, and mall employees.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🔍 Try Before You Buy</h3>
                <p className="text-gray-700">
                  See products up close, ask questions, and make informed decisions about 
                  your purchase.
                </p>
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div className="pt-12">
            <h2 className="text-2xl font-bold mb-8">What We Carry</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {productCategories.map((category) => (
                <div key={category.id} className="text-center">
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <Link
                    href={category.ctaLink}
                    className="text-sm text-gray-600 hover:text-gray-900 underline"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Visit Us CTA */}
          <div className="pt-12">
            <div className="bg-black text-white p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Visit Us Today</h2>
              <p className="text-lg mb-2">{businessInfo.address.street}</p>
              <p className="text-lg mb-6">
                {businessInfo.address.city}, {businessInfo.address.state} {businessInfo.address.zip}
              </p>
              <div className="space-y-2 mb-8">
                <p className="text-base">
                  <span className="font-semibold">Mon-Thu:</span> {businessInfo.hours.monday}
                </p>
                <p className="text-base">
                  <span className="font-semibold">Fri-Sat:</span> {businessInfo.hours.friday}
                </p>
                <p className="text-base">
                  <span className="font-semibold">Sunday:</span> {businessInfo.hours.sunday}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/location"
                  className="inline-block bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-colors"
                >
                  Get Directions
                </Link>
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Call Us
                </a>
              </div>
            </div>
          </div>

          {/* Future E-commerce Note */}
          <div className="pt-8">
            <p className="text-sm text-gray-500 italic">
              Online shopping coming soon! For now, visit us in-store or call to place an order.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

