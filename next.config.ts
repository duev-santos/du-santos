import type { NextConfig } from "next";

// O GitHub Actions define sempre esta variável como 'true' automaticamente
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGithubActions ? '/du-santos' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
