import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Images configuration
  images: {
    // This allows all images, local or external, to load without optimization
    unoptimized: true,
    // You can still list specific domains if needed, but with unoptimized it’s optional
    domains: [
      "staging.freeforcharity.org",
      "freeforcharity.org",
      "static.vecteezy.com",
    ],
  },
  // Optional: base path and asset prefix if using a subdirectory deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
