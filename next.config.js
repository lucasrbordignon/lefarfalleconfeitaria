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
      "vitat.com.br",
      "cdn.portalrva.com.br",
      "guiadacozinha.com.br",
      "www.sabornamesa.com.br",
      "www.receitasnestle.com.br",
      "static.itdg.com.br",
      "img.cybercook.com.br",
      "cdn.casaeculinaria.com",
      "catracalivre.com.br",
      "i.panelinha.com.br",
      "receitinhas.com.br",
      "cooknenjoy.com",
      "i.ytimg.com"
    ],
  },
};

module.exports = nextConfig;
