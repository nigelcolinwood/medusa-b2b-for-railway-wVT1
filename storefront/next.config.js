const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "medusa-public-images.s3.eu-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "medusa-server-testing.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      // MinIO/S3-compatible storage - add your public MinIO domain here
      // Railway typically provides domains like: *.up.railway.app
      {
        protocol: "https",
        hostname: "**.up.railway.app",
      },
      {
        protocol: "https",
        hostname: "**.railway.app",
      },
      // Generic S3-compatible patterns
      {
        protocol: "https",
        hostname: "**.s3.**.amazonaws.com",
      },
      // Allow any hostname for development (you may want to restrict this in production)
      ...(process.env.NEXT_PUBLIC_MINIO_DOMAIN ? [{
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_MINIO_DOMAIN,
      }] : []),
    ],
  },
}

module.exports = nextConfig
