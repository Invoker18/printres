// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },

    ssr: process.env.NUXT_PUBLIC_NODE_ENV === 'production' ? true : false,

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
        format: ['webp'],
    },

    app: {
        pageTransition: { name: 'page' },
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
            'grid',
            'mousewheel',
            'navigation',
            'pagination',
            'thumbs',
        ], // all modules are imported by default
    },
})