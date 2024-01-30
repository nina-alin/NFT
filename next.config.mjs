/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.pokemon.com", // TODO; remove once test are done
      },
    ],
  },
};

export default nextConfig;
