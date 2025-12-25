import Image from 'next/image';

interface HeroProps {
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
  height?: 'small' | 'medium' | 'large';
}

export default function Hero({ image, alt, title, subtitle, height = 'medium' }: HeroProps) {
  const heightClasses = {
    small: 'h-48 md:h-64',
    medium: 'h-64 md:h-80 lg:h-96',
    large: 'h-80 md:h-96 lg:h-[500px]',
  };

  return (
    <div className={`relative w-full ${heightClasses[height]} overflow-hidden`}>
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {(title || subtitle) && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="text-center text-white px-4">
            {title && <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>}
            {subtitle && <p className="text-xl md:text-2xl">{subtitle}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

