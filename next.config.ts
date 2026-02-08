import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'evrything.flowen.eu',
      },
    ],
  },
};

export default nextConfig;