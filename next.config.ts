import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  swcMinify: true,
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
