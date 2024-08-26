// plugins/recaptcha.js
import { VueReCaptcha } from 'vue-recaptcha-v3'
// The plugin enables the usage of Google reCAPTCHA in a Nuxt.js application
// by registering the VueReCaptcha plugin with the necessary configuration options.

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const options = {
        siteKey: config.public.PUBLIC_RECAPTCHA,
        loaderOptions: {
            autoHideBadge: true,
        },
    } as any
    nuxtApp.vueApp.use(VueReCaptcha, options)
})
