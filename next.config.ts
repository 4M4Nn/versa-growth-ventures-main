import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Routes from the previous version of the site
    return [
      // One canonical host: www → apex
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.versagrowthventures.in" }],
        destination: "https://versagrowthventures.in/:path*",
        permanent: true,
      },
      { source: "/schemes", destination: "/ventures", permanent: true },
      {
        source: "/blog/versa-growth-ventures-one-group-four-ventures",
        destination: "/blog/versa-growth-ventures-diversified-venture-group",
        permanent: true,
      },
      { source: "/schemes/:path*", destination: "/ventures", permanent: true },
    ]
  },
}

export default nextConfig
