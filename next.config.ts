import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // !! WARNING: Build will succeed even if there are type errors !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
