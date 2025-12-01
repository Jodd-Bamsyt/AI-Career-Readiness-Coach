/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    outputFileTracingIncludes: {
      "/**/*": ["./node_modules/.prisma/client/**/*"],  // 👈 Important part
    },
  },
};

export default nextConfig;
