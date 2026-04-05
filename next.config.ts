import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Enable bundle analyzer only when environment variable is set
const isAnalyzerEnabled = process.env.ANALYZE === "true";

const nextConfig: NextConfig = {
  /* your existing config options */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self'",
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer({
  enabled: isAnalyzerEnabled,
})(nextConfig);
