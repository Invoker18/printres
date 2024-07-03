<template>
    <div>
        <!-- <ClientOnly>
            <div class="fixed z-[999] top-0 right-0">
                w/{{ width }} h/{{ height }}
            </div>
        </ClientOnly> -->
        <Hero></Hero>
        <VideoSection></VideoSection>
        <About></About>
        <Projects></Projects>
        <Events></Events>
        <Contact></Contact>
        <Location></Location>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'

const { width, height } = useWindowSize()

onMounted(() => {
    // ScrollTrigger.normalizeScroll(true)
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    const sections = Array.from(document.querySelectorAll('.pin'))

    sections.forEach((section, index) => {
        const isLast = index === sections.length - 1

        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: '20% top',
                // markers: true,
                scrub: true,
                // toggleActions: 'play pause resume reverse',
                fastScrollEnd: true,
                preventOverlaps: true,
                onEnterBack: () => {
                    section.classList.add('z-30')
                },
            },
        }).to(
            section,
            {
                ease: 'none',
                startAt: { filter: 'brightness(100%) blur(0px)' },
                filter: 'brightness(90%) blur(10px)',
                onComplete: () => {
                    // console.log('beep boop')
                    // section.classList.remove('sticky')
                    section.classList.remove('z-30')
                },
                onReverseComplete: () => {
                    // section.classList.add('sticky')
                    // section.classList.add('z-20')
                },
            },
            '<'
        )
    })
})
</script>

<style></style>
