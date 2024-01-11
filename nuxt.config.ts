// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icons"],
  devServer: {
    port: 3002,
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap",
        },
        // { rel: "stylesheet", href: "./assets/styles/reset.css" },
        // { rel: "stylesheet", href: "./assets/styles/index.css" },
      ],
      script: [{ src: "p5/p5.js" }, { src: "p5/animations.js" }],
    },
  },
});
