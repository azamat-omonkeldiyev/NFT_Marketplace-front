import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["44.201.132.40"]
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
