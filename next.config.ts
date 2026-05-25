import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'beerium-website-production.up.railway.app',
  }]
  }
  /* config options here */
};

export default nextConfig;
