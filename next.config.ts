import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production' || process.env.GITHUB_ACTIONS;

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/toastmasters-tutorial' : '',
  assetPrefix: isProd ? '/toastmasters-tutorial/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
