/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/knowledge",
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      // 添加blog
      {
        source: "/blog",
        destination: `https://blog-psi-pied-75.vercel.app/blog`,
      },
      {
        source: "/blog/:path*",
        destination: `https://blog-psi-pied-75.vercel.app/blog/:path*`,
      },
      // 添加doc
      {
        source: "/doc",
        destination: `https://doc-ten-lilac.vercel.app`,
      },
      {
        source: "/doc/:path*",
        destination: `https://doc-ten-lilac.vercel.app/:path*`,
      },
      // 添加knowledge
      {
        source: "/knowledge",
        destination: `https://knowledge-eosin-theta.vercel.app/`,
      },
      {
        source: "/knowledge/:path*",
        destination: `https://knowledge-eosin-theta.vercel.app/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
