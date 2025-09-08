/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,         // disable Next.js Image Optimization
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
  experimental: {
    forceSwcTransforms: true,
  },
  trailingSlash: true,
  assetPrefix: '',             // no asset prefix needed for user.github.io
}

module.exports = nextConfig