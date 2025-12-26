import Image from 'next/image';
import Hero from '@/components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vaporizers & E-Juice - Cigar and Smoke Shop',
  description: 'Discover the latest in vaping technology and premium e-liquids. Top brands including Geek Bar, Lost Mary, Vaporesso, and more.',
};

const vapeBrands = [
  "Geek Bar",
  "Lost Mary",
  "Elf Bar",
  "Vaporesso",
  "SMOK",
  "Voopoo",
  "GeekVape",
  "Freemax",
  "Uwell",
  "Aspire",
  "Innokin",
  "Juul",
  "Hyde",
  "Puff Bar",
  "Air Bar",
];

export default function VapesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/hero-products.jpg"
        alt="Premium Vaporizers and E-Juice"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Vaporizers Section */}
          <section className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              VAPORIZERS & E-JUICE
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              DISCOVER THE LATEST IN VAPING TECHNOLOGY AND PREMIUM E-LIQUIDS
            </p>

            {/* Brands Scrollable List */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl mb-4 uppercase tracking-wide">Featured Vape Brands</h3>
              <div className="h-64 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pr-2">
                  {vapeBrands.map((brand) => (
                    <div key={brand} className="text-sm">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vaping Overview */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Modern Vaping Solutions</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  From beginner-friendly devices to advanced mods, we carry a comprehensive range 
                  of vaping products to suit every preference and experience level.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our selection includes <span className="font-semibold">disposable vapes, pod systems, box mods, 
                  and advanced rebuildable atomizers</span>. We stay current with the latest technology 
                  to provide you with the best vaping experience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All devices come with detailed instructions, and our staff is always available 
                  to help you choose the right setup and learn proper usage and maintenance.
                </p>
              </div>
              <div className="relative h-80">
                <Image
                  src="/images/vape-banner.webp"
                  alt="Premium Vaporizers"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Device Types */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Types of Devices:
              </h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-bold text-lg mb-2">Disposable Vapes</h4>
                  <p>
                    Perfect for beginners or on-the-go use. Pre-filled, pre-charged, and ready to vape. 
                    No maintenance required. Available in hundreds of flavors with <span className="font-semibold">varying 
                    nicotine strengths</span>.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Pod Systems</h4>
                  <p>
                    Compact and refillable systems offering <span className="font-semibold">great portability and flavor</span>. 
                    Easy to use with replaceable pods or coils. Ideal for both nicotine salts and 
                    regular e-liquids.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Box Mods</h4>
                  <p>
                    Advanced devices with <span className="font-semibold">customizable wattage, temperature control, and larger 
                    batteries</span>. Perfect for cloud chasers and experienced vapers who want complete control 
                    over their vaping experience.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Rebuildable Atomizers (RDA/RTA)</h4>
                  <p>
                    For the vaping enthusiast who wants the <span className="font-semibold">ultimate in flavor and vapor 
                    production</span>. Requires building your own coils but offers unmatched performance 
                    and customization.
                  </p>
                </div>
              </div>
            </div>

            {/* E-Liquids */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">Premium E-Liquids</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We stock an extensive collection of <span className="font-semibold">premium e-liquids</span> from 
                    top manufacturers. From classic tobacco flavors to exotic fruits and decadent 
                    desserts, we have thousands of options.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Available in various <span className="font-semibold">PG/VG ratios and nicotine strengths</span>, 
                    including nicotine-free options and nicotine salts for those seeking a smoother hit.
                  </p>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/images/e-liquids.jpg"
                    alt="E-Liquid Selection"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Vape Accessories */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Vaping Accessories
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Coils & Pods</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Replacement Coils</li>
                    <li>• Refillable Pods</li>
                    <li>• Rebuildable Coil Wire</li>
                    <li>• Cotton Wicking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Batteries & Chargers</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• 18650/21700 Batteries</li>
                    <li>• External Chargers</li>
                    <li>• USB Cables</li>
                    <li>• Battery Cases</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Tools & Cases</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Carrying Cases</li>
                    <li>• Coil Building Tools</li>
                    <li>• Cleaning Supplies</li>
                    <li>• Drip Tips</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

