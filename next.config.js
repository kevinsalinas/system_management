module.exports = {
  async rewrites() {
    return [
      {
        source: "/home",
        destination: "/",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "centribal.com",
      },
    ],
  },
  output: "standalone",
};
