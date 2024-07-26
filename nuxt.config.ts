// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/ui',
        '@nuxt/image',
        'nuxt-swiper',
        '@vueuse/nuxt',
        '@tresjs/nuxt',
    ],
    // tres: {
    //     devtools: true,
    // },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },
})
