import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Temporarily ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Temporarily ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "assets.aceternity.com",
        pathname: '/pro/**',
      },
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
