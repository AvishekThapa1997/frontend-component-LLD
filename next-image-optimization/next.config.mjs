/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/lod3ggybz/**",
      },
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/products/**",
      },
    ],
  },
};

export default nextConfig;
