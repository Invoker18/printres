// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    devtools: { enabled: true },

    ssr: process.env.NODE_ENV === 'production' ? true : false,

    site: {
        url: 'https://printres.vercel.app',
        name: 'Mejor Imprenta de Panama',
        description: 'Bienvenidos a la mejor imprenta de toda Panama!',
        defaultLocale: 'es', // not needed if you have @nuxtjs/i18n installed
    },

    ogImage: {
        enabled: false,
    },

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
        '@nuxtjs/seo',
        'nuxt-delay-hydration',
        '@nuxtjs/google-fonts',
    ],

    delayHydration: {
        // enables nuxt-delay-hydration in dev mode for testing
        // NOTE: you should disable this once you've finished testing, it will break HMR
        // enables nuxt-delay-hydration in dev mode for testing
        debug: process.env.NODE_ENV === 'development',
        mode: 'init',
    },

    nitro: {
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
        format: ['webp'],
        storyblok: {
            baseURL: 'https://a-us.storyblok.com',
        },
    },

    app: {
        head: {
            charset: 'utf-8',
            viewport:
                'width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5',
            link: [
                { rel: 'preconnect', href: 'https://a-us.storyblok.com' },
                { rel: 'preconnect', href: 'https://a-us.storyblok.com' },
                { rel: 'preconnect', href: 'https://www.google.com' },
                { rel: 'preconnect', href: 'https://www.gstatic.com' },
                { rel: 'preconnect', href: 'https://api.iconify.design' },
            ],
        },
    },

    compatibilityDate: '2024-08-13',

    runtimeConfig: {
        // Private keys are only available on the server
        apiSecret: '123',

        // Public keys that are exposed to the client
        public: {
            RECAPTCHA_SITE_KEY: process.env.PUBLIC_RECAPTCHA,
            NODE_ENV: process.env.NODE_ENV,
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
            'navigation',
            'pagination',
            'thumbs',
        ], // all modules are imported by default
    },

    googleFonts: {
        families: {
            Roboto: true,
        },
        display: 'swap',
        preload: true,
    },
})
