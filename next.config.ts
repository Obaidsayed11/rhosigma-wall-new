// next.config.ts or next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.langekarlogistics.com",
        pathname: "**", 
      },
      {
        protocol: "http",
        hostname: "192.168.102.138",
        pathname: "**", 
      },
      {
        protocol: "http",
        hostname: "picsum.photos",
        pathname: "**", 
      },
    ],
    domains: ["cms.lanjekarlogistics.com", "192.168.102.138","picsum.photos"],
  },
  env: {
    BACKEND_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};



export default nextConfig;
