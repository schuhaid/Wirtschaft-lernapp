/** @type {import("next").NextConfig} */
const nextConfig = {
  // Alte Links (vor den Fächern) führen weiter zu Wirtschaft & Recht
  async redirects() {
    return ["stoff", "zusammenfassung", "karten", "quiz", "test"].map((p) => ({
      source: `/${p}`,
      destination: `/wirtschaft/${p}`,
      permanent: false,
    }));
  },
};
export default nextConfig;
