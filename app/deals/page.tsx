import Hero from '@/components/Hero';
import siteConfig from '@/data/siteConfig.json';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deals & Promotions',
  description: 'Check out our latest deals and promotions at Cigar and Smoke Shop. Student, military, police, and first responder discounts available.',
};

export default function DealsPage() {
  const { businessInfo, rewards } = siteConfig;
  const activeRewards = rewards.filter((reward) => reward.active);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/cigarette-close-up.jpg"
        alt="Deals and Promotions"
        height="medium"
        title="DEALS"
        subtitle="Check out our latest promotions"
      />

      {/* Deals Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Current Promotions
          </h1>

          <div className="space-y-8">
            {activeRewards.map((reward) => (
              <div
                key={reward.id}
                className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{reward.title}</h2>
                <p className="text-lg md:text-xl">{reward.description}</p>
              </div>
            ))}

            {/* Main Discount Callout */}
            <div className="bg-black text-white p-12 rounded-lg text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wide">
                Special Discount
              </h2>
              <p className="text-xl md:text-2xl font-semibold mb-4">
                {businessInfo.discount.text}
              </p>
              <p className="text-lg text-gray-300">
                Bring your valid ID to receive your discount on all purchases!
              </p>
            </div>

            {/* Visit Us */}
            <div className="text-center pt-8">
              <h3 className="text-2xl font-bold mb-4">Visit Us Today</h3>
              <p className="text-lg text-gray-700 mb-6">
                Stop by our store at Arundel Mills Mall to see our full selection and take advantage 
                of our current deals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/location"
                  className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
                >
                  Get Directions
                </a>
                <a
                  href="/contact"
                  className="inline-block bg-white text-black border-2 border-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

