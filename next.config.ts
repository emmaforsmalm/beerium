import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'beerium-website-production.up.railway.app',
  }]
  }
};

export default nextConfig;
