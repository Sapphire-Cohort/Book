/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "books.google.com.ng"
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com"
      },
      {
        protocol: "https",
        hostname: "unsplash.com"
      }
    ]
  }
};

export default nextConfig;
