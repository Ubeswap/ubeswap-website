module.exports = {
  async rewrites() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/ubeswap",
      },
      {
        source: "/discord",
        destination: "https://discord.com/invite/zZkUXCMPGP",
      },
    ];
  },
};
