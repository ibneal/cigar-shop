/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Optimize image processing for VERY low memory usage (Koyeb free tier)
    minimumCacheTTL: 60,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Disable image optimization to prevent OOM errors on free tier
    unoptimized: true,
  },
  // Reduce memory usage during builds
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  // Production optimizations
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // Required for Docker standalone build
  output: 'standalone',
};

export default nextConfig;

