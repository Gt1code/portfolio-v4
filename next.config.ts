import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Enable bundle analyzer only when environment variable is set
const isAnalyzerEnabled = process.env.ANALYZE === "true";

const nextConfig: NextConfig = {
  /* your existing config options */
};

export default withBundleAnalyzer({
  enabled: isAnalyzerEnabled,
})(nextConfig);
