import Image from 'next/image';
import Hero from '@/components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Smoking Accessories - Cigar and Smoke Shop',
  description: 'Everything you need to enhance your smoking experience. Premium lighters, cigar cutters, humidors, rolling papers, glass pipes, and more.',
};

export default function AccessoriesPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/hero-products.jpg"
        alt="Premium Smoking Accessories"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Accessories Section */}
          <section className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              ACCESSORIES & MORE
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              EVERYTHING YOU NEED TO ENHANCE YOUR SMOKING EXPERIENCE
            </p>

            {/* Cigar Accessories */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Cigar Accessories
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative h-80">
                  <Image
                    src="/images/cigar cutters.jpg"
                    alt="Cigar Accessories"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Complete your cigar experience with our premium selection of accessories:
                  </p>
                  <ul className="space-y-2">
                    <li>• <span className="font-semibold">Cutters:</span> Guillotine, V-cut, Punch, and Scissors</li>
                    <li>• <span className="font-semibold">Lighters:</span> Torch, Soft Flame, and Zippo</li>
                    <li>• <span className="font-semibold">Humidors:</span> Desktop, Travel, and Large Capacity</li>
                    <li>• <span className="font-semibold">Cases:</span> Leather, Metal, and Wood Travel Cases</li>
                    <li>• <span className="font-semibold">Ashtrays:</span> Crystal, Ceramic, and Outdoor Options</li>
                    <li>• <span className="font-semibold">Hygrometers:</span> Digital and Analog Humidity Monitors</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Lighter Collection */}
            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Premium Lighters
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We carry an extensive collection of <span className="font-semibold">premium lighters</span> from the 
                    world's top brands including Zippo, Colibri, Xikar, and more.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    From classic <span className="font-semibold">Zippo windproof lighters</span> to high-performance 
                    torch lighters perfect for cigars, we have options for every need and budget.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Many of our lighters come with lifetime warranties and we offer repair services 
                    and replacement parts.
                  </p>
                </div>
                <div className="relative h-64">
                  <Image
                    src="/images/zippo.jpg"
                    alt="Premium Lighters"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Rolling Papers & Supplies */}
            <div className="mb-12">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="relative h-80">
                  <Image
                    src="/images/blog raw papers.jpg"
                    alt="Rolling Papers"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                    Rolling Papers & Supplies
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We stock a comprehensive selection of <span className="font-semibold">rolling papers</span> in various 
                    sizes and materials, from classic rice papers to ultra-thin options and hemp papers.
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p>• <span className="font-semibold">Papers:</span> RAW, Zig-Zag, Elements, OCB, and more</p>
                    <p>• <span className="font-semibold">Pre-Rolled Cones:</span> Various sizes from 1/4 to King Size</p>
                    <p>• <span className="font-semibold">Rolling Machines:</span> Manual and Electric Options</p>
                    <p>• <span className="font-semibold">Filter Tips:</span> Cardboard, Glass, and Reusable</p>
                    <p>• <span className="font-semibold">Storage:</span> Smell-Proof Containers and Bags</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glass & Pipes */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Glass & Smoking Pipes
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Glass Pipes</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Hand Pipes / Spoons</li>
                    <li>• Sherlock Pipes</li>
                    <li>• Steamrollers</li>
                    <li>• Bubblers</li>
                    <li>• One-Hitters / Chillums</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Water Pipes</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Glass Bongs</li>
                    <li>• Silicone Bongs</li>
                    <li>• Percolator Options</li>
                    <li>• Downstems & Bowls</li>
                    <li>• Cleaning Solutions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Other Supplies</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Grinders (Metal, Wood, Plastic)</li>
                    <li>• Scales & Measuring Tools</li>
                    <li>• Cleaning Brushes & Solutions</li>
                    <li>• Torch Lighters</li>
                    <li>• Dab Tools & Accessories</li>
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
