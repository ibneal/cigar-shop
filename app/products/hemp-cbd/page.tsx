import Image from 'next/image';
import Hero from '@/components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hemp & CBD Products - Cigar and Smoke Shop',
  description: 'Premium CBD and hemp products - third-party lab tested for quality. Gummies, edibles, vape products, hemp flower, pre-rolls, and concentrates.',
};

const cbdProducts = [
  "Gummies",
  "Edibles",
  "Vape Products",
  "Vape Cartridges",
  "Hemp Flower",
  "Pre-Rolls",
  "Concentrates",
];

export default function HempCBDPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/hero-products.jpg"
        alt="Premium Hemp and CBD Products"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Hemp & CBD Section */}
          <section className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              HEMP & CBD PRODUCTS
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              PREMIUM CBD AND HEMP PRODUCTS - THIRD-PARTY LAB TESTED FOR QUALITY
            </p>

            {/* Product Types Grid */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl mb-4 uppercase tracking-wide">Available Products</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cbdProducts.map((product) => (
                  <div key={product} className="text-sm font-medium">
                    {product}
                  </div>
                ))}
              </div>
            </div>

            {/* About CBD/Hemp */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="relative h-80">
                <Image
                  src="/images/cbd-4469987.jpg"
                  alt="CBD and Hemp Products"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Premium CBD Products</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We offer a carefully selected range of <span className="font-semibold">premium CBD and hemp products</span> from 
                  trusted manufacturers who prioritize quality, purity, and customer satisfaction.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All our CBD products are <span className="font-semibold">third-party lab tested</span> to ensure they meet 
                  the highest standards for quality, potency, and safety. We provide lab results and 
                  certificates of analysis for transparency.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're new to CBD or an experienced user, our knowledgeable staff can help 
                  you find the right product and dosage for your needs.
                </p>
              </div>
            </div>

            {/* Understanding CBD */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Understanding CBD Products
              </h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-bold text-lg mb-2">Full Spectrum CBD</h4>
                  <p>
                    Contains all naturally occurring compounds from the hemp plant, including trace amounts 
                    of THC (less than 0.3%). Full spectrum products provide the <span className="font-semibold">"entourage effect"</span> where 
                    cannabinoids work synergistically together.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Broad Spectrum CBD</h4>
                  <p>
                    Contains multiple cannabinoids and terpenes from the hemp plant but with <span className="font-semibold">all THC removed</span>. 
                    Ideal for those who want the benefits of multiple compounds without any THC content.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">CBD Isolate</h4>
                  <p>
                    Pure CBD with all other compounds removed. CBD isolate is <span className="font-semibold">99% pure cannabidiol</span> and 
                    contains no THC, terpenes, or other cannabinoids. Perfect for those who want CBD only.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Categories */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Our CBD Product Range
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-lg mb-4">Edibles & Gummies</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Delicious and convenient way to consume CBD. Pre-dosed gummies make it easy to 
                    maintain consistent daily intake.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Pre-dosed for convenience</li>
                    <li>• Great taste and variety of flavors</li>
                    <li>• Discreet and portable</li>
                    <li>• Long-lasting effects</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-lg mb-4">Vape Products</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    CBD vape cartridges and e-liquids for those who prefer inhalation. Fast-acting 
                    with high bioavailability.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Pre-filled cartridges</li>
                    <li>• Disposable vape pens</li>
                    <li>• Various strains and flavors</li>
                    <li>• Quick onset of effects</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-lg mb-4">Hemp Flower</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Premium CBD-rich hemp flower for smoking or vaporizing. Multiple strains available 
                    with unique terpene profiles.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Various strain options</li>
                    <li>• Rich in terpenes and cannabinoids</li>
                    <li>• Properly cured and stored</li>
                    <li>• Indoor and outdoor grown options</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-lg mb-4">Pre-Rolls & Concentrates</h4>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">
                    Ready-to-smoke CBD pre-rolls and concentrated CBD products for experienced users 
                    seeking potent options.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Pre-rolled CBD joints</li>
                    <li>• CBD concentrates and wax</li>
                    <li>• High potency options</li>
                    <li>• Various strain profiles</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quality & Testing */}
            <div className="bg-black text-white p-8 rounded-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                    Quality You Can Trust
                  </h3>
                  <p className="leading-relaxed mb-4">
                    We only carry CBD products from manufacturers who follow strict quality control 
                    procedures and provide full transparency through third-party lab testing.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>✓ Third-party lab tested for purity</p>
                    <p>✓ Certificates of Analysis (COA) available</p>
                    <p>✓ Tested for potency and contaminants</p>
                    <p>✓ Compliant with all federal regulations</p>
                    <p>✓ Made from organically grown hemp</p>
                    <p>✓ Non-GMO and pesticide-free</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                    Expert Guidance
                  </h3>
                  <p className="leading-relaxed mb-4">
                    Our knowledgeable staff stays up-to-date on the latest CBD research and product 
                    developments. We're here to help you:
                  </p>
                  <div className="space-y-2 text-sm">
                    <p>• Choose the right product type</p>
                    <p>• Determine appropriate dosing</p>
                    <p>• Understand product labels and COAs</p>
                    <p>• Learn about different CBD formats</p>
                    <p>• Find products for specific needs</p>
                    <p>• Answer all your CBD questions</p>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
}

