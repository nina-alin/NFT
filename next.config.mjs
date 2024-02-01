/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "salmon-impressed-swan-813.mypinata.cloud",
      },
    ],
  },
};

export default nextConfig;
