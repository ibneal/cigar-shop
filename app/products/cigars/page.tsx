'use client';

import Image from 'next/image';
import Hero from '@/components/Hero';
import { useState, useEffect } from 'react';

const cigarBrands = [
  "Acid Cigars",
  "Alec Bradley",
  "Arturo Fuente",
  "Ashton",
  "Avo Cigar",
  "Bolivar",
  "Camacho",
  "CAO Cigars",
  "Cohiba",
  "Cuban Rounds",
  "Drew Estate",
  "General Cigar Company",
  "Gurkha",
  "H. Upmann",
  "Hoyo de Monterrey",
  "Isla del Sol",
  "Joya De Nicaragua",
  "Kentucky Fire Cured Cigars",
  "La Aroma de Cuba",
  "La Aurora",
  "La Gloria Cubana",
  "Liga Privada",
  "Macanudo",
  "Miami Cigar Company",
  "Montecristo",
  "My Father Cigars",
  "Nub Cigar",
  "Oliva",
  "Padron",
  "Partigas",
  "Perdomo",
  "Punch",
  "Rocky Patel",
  "Romeo y Julieta",
  "Tabak",
  "Tatiana",
  "Ted's Cigars",
];

const brandLogos = [
  { name: "ACID", image: "/images/cigar brand logos/ACID.png", alt: "ACID Cigars" },
  { name: "Alec Bradley", image: "/images/cigar brand logos/cigarstandard-Alec-Bradley.jpg", alt: "Alec Bradley" },
  { name: "Arturo Fuente", image: "/images/cigar brand logos/af.png", alt: "Arturo Fuente Cigars" },
  { name: "Ashton", image: "/images/cigar brand logos/Ashton-cigars-logo.jpg", alt: "Ashton Cigars" },
  { name: "Avo", image: "/images/cigar brand logos/AVO_Cigars_Logo.png", alt: "Avo Cigars" },
  { name: "CAO", image: "/images/cigar brand logos/cao-logo-cigars.png", alt: "CAO Cigars" },
  { name: "Cohiba", image: "/images/cigar brand logos/Cohiba-Logo.webp", alt: "Cohiba Cigars" },
  { name: "Drew Estate", image: "/images/cigar brand logos/drew estate.jpg", alt: "Drew Estate Cigars" },
  { name: "Gurkha", image: "/images/cigar brand logos/logo-gurkha.png", alt: "Gurkha Cigars" },
  { name: "La Gloria Cubana", image: "/images/cigar brand logos/lgc.png", alt: "La Gloria Cubana Cigars" },
  { name: "Macanudo", image: "/images/cigar brand logos/MACANUD.png", alt: "Macanudo Cigars" },
  { name: "Montecristo", image: "/images/cigar brand logos/Montecristo_cigar_logo.png", alt: "Montecristo Cigars" },
  { name: "Oliva", image: "/images/cigar brand logos/oliva.png", alt: "Oliva Cigars" },
  { name: "Padron", image: "/images/cigar brand logos/padron_logo.webp", alt: "Padron Cigars" },
  { name: "Perdomo", image: "/images/cigar brand logos/logo-perdomo.gif", alt: "Perdomo Cigars" },
  { name: "Rocky Patel", image: "/images/cigar brand logos/rp.png", alt: "Rocky Patel Cigars" },
  { name: "Romeo y Julieta", image: "/images/cigar brand logos/romeo-y-julieta.png", alt: "Romeo y Julieta Cigars" },
  { name: "Tatiana", image: "/images/cigar brand logos/Tatiana.gif", alt: "Tatiana Cigars" },
];

export default function CigarsPage() {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const nextLogo = () => {
    setCurrentLogoIndex((prev) => (prev + 1) % brandLogos.length);
  };

  const prevLogo = () => {
    setCurrentLogoIndex((prev) => (prev - 1 + brandLogos.length) % brandLogos.length);
  };

  // Auto-play carousel every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextLogo();
    }, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [currentLogoIndex]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero
        image="/images/hero-products.jpg"
        alt="Premium Cigars and Tobacco Products"
        height="medium"
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-16">
          {/* Cigars Section */}
          <section className="scroll-mt-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-wide">
              CIGARS
            </h2>
            <p className="text-lg mb-8 text-gray-700">
              COME SEE OUR PREMIUM SELECTION OF FINELY CRAFTED CIGARS
            </p>

            {/* Brands Scrollable List */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-bold text-xl mb-4 uppercase tracking-wide">Featured Cigar Brands</h3>
              <div className="h-64 overflow-y-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pr-2">
                  {cigarBrands.map((brand) => (
                    <div key={brand} className="text-sm">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Brand Logo Carousel */}
            <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white p-4 md:p-8 lg:p-12 rounded-lg mb-12 overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('/images/premium_cigars.jpg')] bg-cover bg-center"></div>
              <div className="relative flex items-center justify-between max-w-4xl mx-auto">
                <button 
                  onClick={prevLogo}
                  className="text-2xl md:text-3xl lg:text-4xl hover:text-amber-400 transition-colors duration-200 p-2 md:p-3 lg:p-4 hover:bg-white/10 rounded-full z-10 flex-shrink-0"
                  aria-label="Previous brand"
                >
                  ‹
                </button>
                <div className="flex-1 flex flex-col items-center justify-center px-2 md:px-4 lg:px-8">
                  <div className="relative w-full max-w-[200px] sm:max-w-[280px] md:max-w-md h-32 sm:h-40 md:h-48 mb-3 md:mb-4 flex items-center justify-center">
                    <Image
                      src={brandLogos[currentLogoIndex].image}
                      alt={brandLogos[currentLogoIndex].alt}
                      fill
                      className="object-contain drop-shadow-2xl"
                      style={{ filter: 'brightness(1.1) contrast(1.1)' }}
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-amber-400 mb-2">
                      {brandLogos[currentLogoIndex].name}
                    </h3>
                    <div className="flex gap-1.5 md:gap-2 justify-center flex-wrap">
                      {brandLogos.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentLogoIndex(index)}
                          className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-300 ${
                            index === currentLogoIndex 
                              ? 'bg-amber-400 w-6 md:w-8' 
                              : 'bg-gray-600 hover:bg-gray-400'
                          }`}
                          aria-label={`Go to brand ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <button 
                  onClick={nextLogo}
                  className="text-2xl md:text-3xl lg:text-4xl hover:text-amber-400 transition-colors duration-200 p-2 md:p-3 lg:p-4 hover:bg-white/10 rounded-full z-10 flex-shrink-0"
                  aria-label="Next brand"
                >
                  ›
                </button>
              </div>
            </div>

            {/* History Section */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
              <div className="relative h-80">
                <Image
                  src="/images/history rolling.jpg"
                  alt="Cigar History"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">History</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tobacco has a long history, that of the curing and rolling 
                  process for cieans quality cigars and tobacco products hasn't changed much. Creating the perfect 
                  cigar involves patience and a dedication to preserve tradition and 
                  sustain the ancient techniques. We carry more different types of cigars for different tastes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  There's a better, long way to enjoy tobacco!
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Learn more about their cigars, our bundle, the efficient 
                  composition of a cigar, types of wrappers, and sizing.
                </p>
              </div>
            </div>

            {/* Cultivation Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                It Starts With Cultivation
              </h3>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The process starts with <span className="font-semibold">growing and harvesting tobacco leaves</span>. Once they have 
                    grown to maturity, the stalks are cut and moved to a barn to be 
                    <span className="font-semibold"> cured</span>. The curing process takes anywhere from a couple weeks to several months until 
                    the proper texture, color, taste, aroma, and moisture develope. The 
                    curing process is crucial because it gives each type of tobacco it's distinct characteristics.
                  </p>
                  <p>
                    Once the leaves are cured they are <span className="font-semibold">sorted</span> to have different parts of the cigar, 
                    the wrapper, the filler, and the binder. The filler makes up the bulk of the tobacco and it's essentially the 
                    heart of the cigar. It's a <span className="font-semibold">finely wrapped by the wrapper</span> to give it a finished look and distinct smoke profile.
                  </p>
                </div>
                <div className="relative h-80">
                  <Image
                    src="/images/tobacco-cultivation.jpg"
                    alt="Tobacco Cultivation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Types of Wrappers */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide">
                Types of Wrappers:
              </h3>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h4 className="font-bold text-lg mb-2">1. Natural</h4>
                  <p>Made from shade grown known tobacco leaves it sweet flavor from the prolonged 
                  aging and fermentation process.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">2. Oscuro</h4>
                  <p>These wrappers are aged for the longest out of all unique leaves. The long aging 
                  process gives these wrappers a <span className="font-semibold">dark, sweet coloring</span> and a <span className="font-semibold">sweet flavor</span> from the binder 
                  and filler to come through.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">3. Congo</h4>
                  <p>Defined by its <span className="font-semibold">spicy flavor profile</span> and brown coloring. Though it's not prominent 
                  and is grown on the island of Sumatra.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">4. Sumatra</h4>
                  <p>They come either after grown on the island of Sumatra. There leaves are grown on the island 
                  of Sumatra and filler. The leaf itself is thinner from the binder and is <span className="font-semibold">earthly-spicy flavoring</span> look being wraps in 
                  Cuban red.</p>
                </div>
              </div>
            </div>

            {/* Made to be Smoked Section */}
            <div className="bg-black text-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-80">
                  <Image
                    src="/images/keenan-barber-gF4lfeIQEFo-unsplash.jpg"
                    alt="Made to be Smoked"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">
                    Made To Be Smoked.
                  </h3>
                  <p className="leading-relaxed">
                    Once a cigar is finished it's moved into 
                    a aging room where the wedding process takes 
                    place. Cigars are allowed to sit and marry for 
                    a large time period. After the aging is 
                    complete, the cigars are moved into a quality 
                    controlled environment to ensure everything is 
                    just right. Once approved, the product is 
                    packaged and sent out to customers like we 
                    offer in a special cedar box or individual in 
                    plastic wrap. After this, that's when the cigar ends up in 
                    in our hands, and subsequently, yours! That's 
                    where you light it up enjoy!
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

