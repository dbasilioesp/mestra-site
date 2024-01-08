// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap' },
      ],
      script: [
        { src: 'p5/p5.js' },
        { src: 'p5/animations.js' }
      ]
    }
  }
})
