import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
