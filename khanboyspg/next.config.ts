import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/^https?:\/\//, "") || "",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
