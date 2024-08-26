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
        '@storyblok/nuxt',
        'nuxt-nodemailer',
        '@nuxtjs/fontaine',
    ],

    nitro: {
        compressPublicAssets: true,
        minify: true,
        prerender: {
            crawlLinks: true,
        },
    },

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
        format: ['webp']
    },

    app: {
        pageTransition: { name: 'page' },
        head: {
            charset: 'utf-8',
            viewport:
                'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0',
        },
    },

    compatibilityDate: '2024-08-13',

    runtimeConfig: {
        // Private keys are only available on the server
        apiSecret: '123',

        // Public keys that are exposed to the client
        public: {
            RECAPTCHA_SITE_KEY: process.env.PUBLIC_RECAPTCHA,
        },
    },

    nodemailer: {
        host: 'smtp.ethereal.email',
        port: 587,
        // secure: true,
        auth: {
            user: 'keaton72@ethereal.email',
            pass: process.env.MAIL_PASSWORD,
        },
    },

    swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        modules: [
            'autoplay',
            'controller',
            'free-mode',
            'grid',
            'mousewheel',
            'navigation',
            'pagination',
            'thumbs',
        ], // all modules are imported by default
    },

})
