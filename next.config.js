module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/menu_esp.php",
        destination: "/menu-es",
        permanent: true,
      },
      {
        source: "/menu_eng.php",
        destination: "/menu-en",
        permanent: true,
      },
      {
        source: "/index.php",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
