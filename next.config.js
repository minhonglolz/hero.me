/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  assetPrefix: "./",
  images: {
    loader: "akamai",
    path: ""
  }
}

module.exports = nextConfig





