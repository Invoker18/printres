<template>
    <div>
        <!-- <ClientOnly>
            <div class="fixed right-0 top-0 z-50">
                w/{{ width }} h/{{ height }}
            </div>
        </ClientOnly> -->
        <Hero></Hero>
        <VideoSection></VideoSection>
        <About></About>
        <Projects></Projects>
        <Events></Events>
        <!-- fix for sticky bottom0 -->
        <div id="contact"></div>
        <Contact></Contact>
        <Location></Location>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const { width, height } = useWindowSize()

const { x, y } = useWindowScroll()

onMounted(() => {
    // ScrollTrigger.normalizeScroll(true); // enable
    // let normalizer = ScrollTrigger.normalizeScroll();
    gsap.registerPlugin(ScrollTrigger)

    const sections = Array.from(document.querySelectorAll('.pin'))

    sections.forEach((section, index) => {
        // const isLast = index === sections.length - 1

        gsap.timeline({
            scrollTrigger: {
                immediateRender: true,
                trigger: section,
                start: '20% top',
                scrub: true,
                toggleActions: 'play none none reset',
                onEnterBack: () => {
                    console.log('onEnterBack')
                    section.classList.add('z-30')
                    section.classList.add('sticky')
                },
            },
        }).to(section, {
            ease: 'none',
            startAt: { filter: 'brightness(100%) blur(0px)' },
            filter: 'brightness(90%) blur(10px)',
            onComplete: () => {
                console.log('onComplete')

                section.classList.remove('z-30')
                section.classList.remove('sticky')
            },
            onReverseComplete: () => {},
        })
    })
    nextTick(() => {
        ScrollTrigger.refresh(true)
    })
})
</script>

<style></style>
