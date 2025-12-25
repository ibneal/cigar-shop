import Image from 'next/image';
import Hero from '@/components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hookah & Shisha - Cigar and Smoke Shop',
  description: 'Experience the finest hookah products and premium shisha flavors. Top brands including Al Fakher, Starbuzz, Fumari, and more.',
};

const hookahBrands = [
  "Al Fakher",
  "Starbuzz",
  "Fumari",
  "Tangiers",
  "Social Smoke",
  "Haze",
  "Trifecta",
  "Azure",
  "Khalil Mamoon",
  "Mya Saray",
  "Shika Hookah",
  "Oduman",
  "Regal Hookahs",
  "Cloud Micro",
  "Lavoo",
];

export default function HookahPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/hero-products.jpg"
        alt="Premium Hookah Products"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Hookah Section */}
          <section className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              HOOKAH
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              EXPERIENCE THE FINEST HOOKAH PRODUCTS AND PREMIUM SHISHA FLAVORS
            </p>

            {/* Brands Scrollable List */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl mb-4 uppercase tracking-wide">Featured Hookah Brands</h3>
              <div className="h-64 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pr-2">
                  {hookahBrands.map((brand) => (
                    <div key={brand} className="text-sm">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Hookah */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="relative h-80">
                <Image
                  src="/images/Hookah.jpg"
                  alt="Premium Hookah"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">The Art of Hookah</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Hookah, also known as shisha or waterpipe, has been a cherished tradition for centuries. 
                  We offer an extensive selection of premium hookah pipes, ranging from traditional 
                  handcrafted pieces to modern, high-performance models.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our collection includes hookahs of all sizes, from compact personal pipes to large 
                  multi-hose setups perfect for social gatherings. Each piece is carefully selected to 
                  ensure optimal smoke quality and durability.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you're a seasoned hookah enthusiast or just starting your journey, our 
                  knowledgeable staff can help you find the perfect setup.
                </p>
              </div>
            </div>

            {/* Shisha Flavors */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Premium Shisha Tobacco
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    We carry an <span className="font-semibold">extensive selection of premium shisha tobacco</span> from 
                    the world's top manufacturers. From classic flavors to exotic blends, we have 
                    something for every palate.
                  </p>
                  <p>
                    Our inventory includes <span className="font-semibold">fruity, minty, floral, and dessert flavors</span>, 
                    as well as traditional tobacco blends. Many of our shisha brands offer unique 
                    flavor combinations that you won't find anywhere else.
                  </p>
                  <p>
                    All our shisha tobacco is <span className="font-semibold">properly stored and fresh</span>, ensuring 
                    the best smoking experience every time. We stock both regular and herbal 
                    (tobacco-free) options.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-4">Popular Flavor Categories:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <span className="font-semibold">Fruit:</span> Watermelon, Grape, Peach, Mixed Berry</li>
                    <li>• <span className="font-semibold">Mint:</span> Double Apple Mint, Spearmint, Cool Berry</li>
                    <li>• <span className="font-semibold">Dessert:</span> Vanilla, Chocolate, Cappuccino</li>
                    <li>• <span className="font-semibold">Exotic:</span> Rose, Jasmine, Guava, Passion Fruit</li>
                    <li>• <span className="font-semibold">Classic:</span> Traditional Tobacco, Double Apple</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hookah Accessories */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Complete Hookah Accessories
              </h3>
              <p className="leading-relaxed mb-4">
                Beyond pipes and tobacco, we stock everything you need for the perfect hookah session:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-2">
                  <li>• Natural Coconut Coals</li>
                  <li>• Quick-Light Coals</li>
                  <li>• Heat Management Devices</li>
                  <li>• Hookah Bowls (Clay, Silicone, Phunnel)</li>
                  <li>• Hoses and Mouthpieces</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Base Grommets and Seals</li>
                  <li>• Cleaning Brushes</li>
                  <li>• Tongs and Coal Carriers</li>
                  <li>• Windcovers and Screens</li>
                  <li>• Storage Containers</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

