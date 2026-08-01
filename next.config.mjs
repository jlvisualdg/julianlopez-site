/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // fully static: fastest to load, parse, and crawl (per the AEO spec)
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: "", // Change this if deploying to a subdirectory
  assetPrefix: "", // Change this if deploying to a subdirectory
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
