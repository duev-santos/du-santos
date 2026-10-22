import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/du-santos',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
