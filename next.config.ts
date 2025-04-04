import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eqm7j8bvre.ufs.sh",
      },

      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ], // Add the UploadThing domain here
  },
};

export default nextConfig;
