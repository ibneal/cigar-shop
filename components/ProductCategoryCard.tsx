import Image from 'next/image';
import Link from 'next/link';

interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

interface ProductCategoryCardProps {
  category: ProductCategory;
  layout?: 'default' | 'large';
}

export default function ProductCategoryCard({ category, layout = 'default' }: ProductCategoryCardProps) {
  if (layout === 'large') {
    return (
      <div className="relative overflow-hidden group">
        <div className="relative h-96 md:h-[500px]">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 uppercase tracking-wide">
              {category.name}
            </h3>
            <p className="text-sm md:text-base mb-6 max-w-2xl">
              {category.description}
            </p>
            <Link
              href={category.ctaLink}
              className="inline-block bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              {category.ctaText}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden">
      <div className="relative h-80 md:h-96">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold mb-3 uppercase tracking-wide">
            {category.name}
          </h3>
          <p className="text-sm mb-4 line-clamp-3">
            {category.description}
          </p>
          <Link
            href={category.ctaLink}
            className="inline-block bg-black text-white px-6 py-2 text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            {category.ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
}

