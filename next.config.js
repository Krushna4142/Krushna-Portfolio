/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,         // disable Next.js Image Optimization
    },
    trailingSlash: true,
    assetPrefix: '',             // no asset prefix needed for user.github.io
    eslint: {
        ignoreDuringBuilds: true,  // disable ESLint during builds
    },
    typescript: {
        ignoreBuildErrors: true,   // disable TypeScript errors during builds
    },
};

module.exports = nextConfig