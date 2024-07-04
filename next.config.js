/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "images.pexels.com",
      "images.unsplash.com",
      "img.freepik.com",
      "res.cloudinary.com",
      "docescaseirospaulinho.com.br",
      "www.receiteria.com.br"
    ],
  },
};

module.exports = nextConfig;
