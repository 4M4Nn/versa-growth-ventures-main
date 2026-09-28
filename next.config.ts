import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Routes from the previous version of the site
    return [
      { source: "/schemes", destination: "/ventures", permanent: true },
      { source: "/schemes/:path*", destination: "/ventures", permanent: true },
    ]
  },
}

export default nextConfig
