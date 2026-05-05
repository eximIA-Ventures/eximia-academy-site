import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "eximiaacademy.com" }],
        destination: "https://eximiaacademy.com.br/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
