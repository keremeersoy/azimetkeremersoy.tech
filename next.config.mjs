/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pepteam.net",
      },
    ],
  },
};

export default nextConfig;
