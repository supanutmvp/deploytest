/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "i.pinimg.com",
    },
    {
      protocol: "https",
      hostname: "encrypted-tbn0.gstatic.com",
    },
  ],
};

export default nextConfig;
