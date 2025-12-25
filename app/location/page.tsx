'use client';

import Hero from '@/components/Hero';
import siteConfig from '@/data/siteConfig.json';

export default function LocationPage() {
  const { businessInfo } = siteConfig;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/pexels-rdne-8249450.jpg"
        alt="Visit Our Location"
        height="medium"
      />

      {/* Location Info */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">Arundel Mills Mall</h1>
          <div className="text-xl space-y-2">
            <p className="font-semibold">
              {businessInfo.address.street} {businessInfo.address.city}, {businessInfo.address.state},{' '}
              {businessInfo.address.zip}
            </p>
            <p className="text-lg text-gray-600 uppercase tracking-wide">
              {businessInfo.address.locationHint}
            </p>
            <p className="text-base text-gray-600">
              {businessInfo.address.nearbyLandmarks}
            </p>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-auto">
            <iframe
              src="https://www.google.com/maps?q=Cigar+and+Smoke+Shop,+7000+Arundel+Mills+Circle,+334,+Hanover,+MD+21076&output=embed&t=k"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Cigar and Smoke Shop Location"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-lg text-gray-700">
            We are located in Hanover, Maryland inside of Arundel Mills Mall. We are also right next to 
            Maryland Live! Casino and Hotel.
          </p>
          <div className="pt-4">
            <p className="text-xl font-semibold mb-2">Contact Us</p>
            <p className="text-lg">
              <a href={`tel:${businessInfo.contact.phone}`} className="hover:text-gray-600">
                {businessInfo.contact.phone}
              </a>
              {' · '}
              <a href={`mailto:${businessInfo.contact.email}`} className="hover:text-gray-600">
                {businessInfo.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}