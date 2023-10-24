/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/knowledge",
  async rewrites() {
    return [
      {
        source: "/Probability-Statistics-Notes",
        destination: `https://eanyang7.github.io/Probability-Statistics-Notes/`,
      },
    ];
  },
};

module.exports = nextConfig;
