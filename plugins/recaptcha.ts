// plugins/recaptcha.js
import { VueReCaptcha } from 'vue-recaptcha-v3'
// The plugin enables the usage of Google reCAPTCHA in a Nuxt.js application
// by registering the VueReCaptcha plugin with the necessary configuration options.

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
    console.log(config.public.RECAPTCHA_SITE_KEY)

    const options = {
        siteKey: config.public.RECAPTCHA_SITE_KEY,
        loaderOptions: {
            autoHideBadge: true,
        },
    }
    nuxtApp.vueApp.use(VueReCaptcha, options)
})
