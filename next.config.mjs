import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/personal-website",
  output: "export",
  images: {
    domains: ["api.microlink.io"],
  },
};

export default nextConfig;
