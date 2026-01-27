// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Termux / Android için SWC devre dışı
  swcMinify: false,

  // Gzip compression
  compress: true,

  // Image optimizasyonu kapalı (Vercel kendi optimize eder)
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
  },

  // Public environment variables
  env: {
    NEXT_PUBLIC_BSC_RPC: process.env.NEXT_PUBLIC_BSC_RPC,
    NEXT_PUBLIC_ETH_RPC: process.env.NEXT_PUBLIC_ETH_RPC,
    NEXT_PUBLIC_TOKEN_CONTRACT: process.env.NEXT_PUBLIC_TOKEN_CONTRACT,
    NEXT_PUBLIC_CHAIN_ID: process.env.NEXT_PUBLIC_CHAIN_ID,
    NEXT_PUBLIC_EXPLORER_URL: process.env.NEXT_PUBLIC_EXPLORER_URL,
    NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL,
  },

  // Termux için SWC fallback
  experimental: {
    forceSwcTransforms: false,
  },
};

module.exports = nextConfig;

