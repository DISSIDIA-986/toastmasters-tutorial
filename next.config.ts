import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/toastmasters-tutorial' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/toastmasters-tutorial/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
