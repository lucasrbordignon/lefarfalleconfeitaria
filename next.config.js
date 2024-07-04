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
      "www.receiteria.com.br",
      "quemtemmedodecozinha.wordpress.com",
      "revistadestaquemais.com.br",
      "www.mavalerio.com.br",
      "s2-receitas.glbimg.com",
      "cdn0.tudoreceitas.com",
      "vitat.com.br"
    ],
  },
};

module.exports = nextConfig;
