import { ScrollTrigger } from 'gsap/all'
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('page:finish', () => {
        console.log('Page finished loading..')
        ScrollTrigger.refresh()
        window.scrollTo(0, 0)
    })
})
