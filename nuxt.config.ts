// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],

    modules: [
        '@nuxt/ui',
        '@nuxt/image',
        'nuxt-swiper',
        '@vueuse/nuxt',
        '@tresjs/nuxt',
        '@storyblok/nuxt',
    ],

    // tres: {
    //     devtools: true,
    // },
    storyblok: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        apiOptions: {
            region: 'us',
            layout: 'fullscreen',
        },
    },

    image: {
        storyblok: {
            baseURL: 'https://a-us.storyblok.com',
        },
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
        head: {
            charset: 'utf-8',
            viewport:
                'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0',
        },
    },

    compatibilityDate: '2024-08-13',
})
