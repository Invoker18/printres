<template>
    <div>
        <StoryblokComponent
            v-if="status !== 'error' && story"
            :blok="story.content"
        />
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const { slug }: any = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'

const isPreview = useRuntimeConfig().public.NODE_ENV_VERCEL !== 'production'

const { data: story, status } = await useAsyncData(`${url}`, async () => {
    const { data } = await useStoryblokApi().get(
        `cdn/stories/${url.replace(/\/$/, '')}`,
        {
            version: isPreview ? 'draft' : 'published',
        }
    )
    return data?.story
})

if (!isPreview) {
    if (!story.value) {
        showError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }
}
console.log(story.value, 'story')

defineOgImageComponent('MyTemplate', {
    title: story.value.name,
    description: story.value.content.description ?? 'Impresion sin limites',
    headline: 'Printres',
})

// defineOgImageComponent('Nuxt', {
//   headline: 'Greetings',
//   title: 'Hello OG Image 👋',
//   description: 'Look what at me using the Nuxt template',
// })

// const { slug } = useRoute().params as any

// const story = await useAsyncStoryblok(
//     slug && slug.length > 0 ? slug.join('/') : 'home',
//     { version: 'published'}

// )

// if (story.value.status) {
//     throw createError({
//         statusCode: story.value.status,
//         statusMessage: story.value.response,
//     })
// }

// const component = resolveComponent(story.value.content.component)

onMounted(() => {
    // ScrollTrigger.normalizeScroll(true); // enable
    // let normalizer = ScrollTrigger.normalizeScroll();
    gsap.registerPlugin(ScrollTrigger)

    const sections = Array.from(document.querySelectorAll('.pin'))
    // const sections = Array.from(document.querySelectorAll('#aboutUs'))

    let contactDom: any = document.getElementById('contactContainer')
    let mm = gsap.matchMedia()

    mm.add('(min-width: 640px)', () => {
        sections.forEach((section, index) => {
            // const isLast = index === sections.length - 1

            gsap.to(section, {
                ease: 'none',
                startAt: { filter: 'brightness(100%) blur(0px)' },
                filter: 'brightness(90%) blur(10px)',
                scrollTrigger: {
                    fastScrollEnd: true,
                    immediateRender: true,
                    trigger: section,
                    start: '20% top',
                    end: 'bottom top',
                    scrub: true,
                    toggleActions: 'play none none reset',
                    // markers: true,
                    onEnterBack: () => {
                        // console.log('onEnterBack')
                        section.classList.add('z-30')
                        section.classList.add('sticky')
                        contactDom.classList.remove('z-30')
                    },
                    onLeave: () => {
                        section.classList.remove('z-30')
                        section.classList.remove('sticky')
                        contactDom.classList.add('z-30')
                        ScrollTrigger.refresh()
                    },
                },
                // onComplete: () => {
                //     console.log('onComplete')
                //     section.classList.remove('z-30')
                //     section.classList.remove('sticky')
                // },
                // onReverseComplete: () => {},
            })
        })
    })
})
</script>

<style></style>
