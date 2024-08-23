<template>
    <div>
        <StoryblokComponent v-if="story" :blok="story.content" />
        <!-- <ClientOnly>
            <div class="fixed right-0 top-0 z-50 text-secondary">
                w/{{ width }} h/{{ height }}
            </div>
        </ClientOnly> -->
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const { width, height } = useWindowSize()

const { slug } = useRoute().params as any

const story = await useAsyncStoryblok(
    slug && slug.length > 0 ? slug.join('/') : 'home',
    { version: process.env.NODE_ENV === 'production' ? 'published' : 'draft' }
)
// console.log(story.value, 'st')

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

            gsap.timeline({
                scrollTrigger: {
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
            }).to(section, {
                ease: 'none',
                startAt: { filter: 'brightness(100%) blur(0px)' },
                filter: 'brightness(90%) blur(10px)',
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
