import Image from 'next/image';
import Hero from '@/components/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kratom Products - Cigar and Smoke Shop',
  description: 'Premium quality kratom products from trusted sources. Various strains including Red Vein, Green Vein, White Vein, Maeng Da, and more.',
};

const kratomStrains = [
  "Red Vein",
  "Green Vein",
  "White Vein",
  "Maeng Da",
  "Bali",
  "Borneo",
  "Indo",
  "Thai",
  "Malay",
  "Sumatra",
];

export default function KratomPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/hero-products.jpg"
        alt="Premium Kratom Products"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Kratom Section */}
          <section className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              KRATOM
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              PREMIUM QUALITY KRATOM PRODUCTS FROM TRUSTED SOURCES
            </p>

            {/* Strains List */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl mb-4 uppercase tracking-wide">Available Strains</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {kratomStrains.map((strain) => (
                  <div key={strain} className="text-sm font-medium">
                    {strain}
                  </div>
                ))}
              </div>
            </div>

            {/* About Kratom */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="relative h-80">
                <Image
                  src="/images/cbd-4469987.jpg"
                  alt="Premium Kratom"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">About Our Kratom</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We carry a carefully curated selection of <span className="font-semibold">premium kratom products</span> sourced 
                  from reputable vendors who prioritize quality and purity.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our kratom is <span className="font-semibold">lab-tested for quality and consistency</span>, ensuring you 
                  receive only the finest products. We offer various strains, each with its own 
                  unique characteristics.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Available in powder, capsule, and extract forms to suit your preferences. Our 
                  knowledgeable staff can help you understand the differences between strains and 
                  find what works best for you.
                </p>
              </div>
            </div>

            {/* Strain Information */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Understanding Kratom Strains
              </h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-red-700">Red Vein</h4>
                  <p>
                    The most popular variety, red vein kratom is known for its <span className="font-semibold">calming properties</span>. 
                    It's often chosen by those seeking relaxation and is typically harvested from mature leaves.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-green-700">Green Vein</h4>
                  <p>
                    Considered a <span className="font-semibold">balanced middle ground</span> between red and white strains. 
                    Green vein kratom is popular for its subtle, well-rounded effects and is great 
                    for daytime use.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">White Vein</h4>
                  <p>
                    White vein kratom is harvested from younger leaves and is known for providing 
                    <span className="font-semibold"> energy and focus</span>. It's a popular choice for those seeking a morning boost.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-yellow-700">Specialized Blends</h4>
                  <p>
                    We also carry <span className="font-semibold">specialty strains and blends</span> like Maeng Da (known for 
                    potency), Bali (traditional favorite), and regional varieties from Borneo, 
                    Indo, Thai, and more.
                  </p>
                </div>
              </div>
            </div>

            {/* Product Forms */}
            <div className="bg-black text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                Available Forms
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Powder</h4>
                  <p className="text-sm leading-relaxed">
                    Traditional finely ground kratom powder. Versatile and can be mixed with 
                    beverages or used to make tea. Available in various package sizes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Capsules</h4>
                  <p className="text-sm leading-relaxed">
                    Pre-measured capsules for convenience and precision. Perfect for those who 
                    prefer a tasteless, easy-to-take option.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">Extracts</h4>
                  <p className="text-sm leading-relaxed">
                    Concentrated kratom extracts for experienced users. Available in liquid and 
                    powder forms with enhanced potency.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

