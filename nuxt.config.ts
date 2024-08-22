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
        'nuxt-nodemailer',
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

    // mail: {
    //     message: {
    //         to: 'omarmendez@printres.com',
    //     },
    //     smtp: {
    //         host: 'smtp.ethereal.email',
    //         port: 587,
    //         auth: {
    //             user: 'keaton72@ethereal.email',
    //             pass: '5g5mp4MkNkynSZ3qZd',
    //         },
    //     },
    // },
})
