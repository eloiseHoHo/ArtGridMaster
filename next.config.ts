import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.photogrid.space" }],
        destination: "https://photogrid.space/:path*",
        permanent: true,
      },
      { source: "/transform/:path*", destination: "/photo-to-grid", permanent: true },
      { source: "/best-photo-grid-makers", destination: "/blog/best-photo-grid-makers", permanent: true },
      { source: "/blog/photo-grid-for-artists", destination: "/blog", permanent: true },
      { source: "/blog/categories/portrait-grid", destination: "/categories/portrait-photo-grid", permanent: true },
      { source: "/blog/categories/:slug*", destination: "/blog", permanent: true },
      { source: "/blog/grid-drawing-for-beginners", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
