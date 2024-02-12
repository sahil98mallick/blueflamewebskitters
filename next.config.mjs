/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BLUEFLAME_API: process.env.BLUEFLAME_API
  }
};

export default nextConfig;
