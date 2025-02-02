/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.sanity.io",
      "plus.unsplash.com",
      "next-ecommerce-template-4.vercel.app", // Added this domain
    ],
  },
};

module.exports = nextConfig;
