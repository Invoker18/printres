<template>
    <div>
        <ClientOnly>
            <div class="fixed right-0 top-0 z-[999]">
                w/{{ width }} h/{{ height }}
                {{ zIndex }}
            </div>
        </ClientOnly>
        <Hero></Hero>
        <VideoSection></VideoSection>
        <About></About>
        <Projects></Projects>
        <Events></Events>
        <!-- fix for sticky bottom0 -->
        <div id="contact"></div>
        <Contact :class="zIndex"></Contact>
        <Location></Location>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'

const { width, height } = useWindowSize()

const { x, y } = useWindowScroll()

const zIndex = ref('')

onMounted(() => {
    // ScrollTrigger.normalizeScroll(true)
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    // if (y.value > 2800)
    //     document.querySelector('#aboutUs')?.classList.remove('z-30')

    const sections = Array.from(document.querySelectorAll('.pin'))

    sections.forEach((section, index) => {
        // const isLast = index === sections.length - 1

        gsap.timeline({
            scrollTrigger: {
                immediateRender: true,
                trigger: section,
                start: '20% top',
                scrub: true,
                markers: true,
                toggleActions: 'play none none reset',
                onEnterBack: () => {
                    section.classList.add('z-30')
                },
            },
        }).to(section, {
            ease: 'none',
            startAt: { filter: 'brightness(100%) blur(0px)' },
            filter: 'brightness(90%) blur(10px)',
            onComplete: () => {
                section.classList.remove('z-30')
            },
            onReverseComplete: () => {},
        })
    })

    ScrollTrigger.refresh(true)
})
</script>

<style></style>
