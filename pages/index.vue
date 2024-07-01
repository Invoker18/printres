<template>
    <div>
        <Hero></Hero>
        <div
            id="scrollText"
            class="flex items-center text-4xl gap-2 absolute bottom-12 right-6 md:right-16 2xl:right-24"
        >
            <span class="font-semibold">Scroll</span>
            <UIcon
                name="i-ph-arrow-down-right-bold"
                class="text-secondary size-8"
            ></UIcon>
        </div>
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

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    gsap.to('#scrollText', {
        opacity: 0,
        scrollTrigger: {
            trigger: '#heroText',
            start: '40% center',
            end: 'center center',
            toggleActions: 'play pause resume reset',
            scrub: true,
        },
        ease: 'power2.out',
        duration: 0.5,
    })

    const sections = Array.from(document.querySelectorAll('.pin'))

    sections.forEach((section, index) => {
        const isLast = index === sections.length - 1

        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: '20% top',
                // markers: true,
                scrub: 1,
                // toggleActions: 'play pause resume reverse',
            },
        }).to(
            section,
            {
                ease: 'none',
                startAt: { filter: 'brightness(100%) blur(0px)' },
                filter: isLast ? 'none' : 'brightness(50%) blur(10px)',

                onComplete: () => {
                    console.log('beep boop')
                    section.classList.remove('sticky')
                },
                onReverseComplete: () => {
                    section.classList.add('sticky')
                },
            },
            '<'
        )
    })
})
</script>

<style></style>
