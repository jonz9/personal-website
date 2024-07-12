import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "",
  output: "export",
  images: {
    unoptimized: true,
  },
  // images: {
  //   domains: ["api.microlink.io"],
  // },
};

export default nextConfig;
