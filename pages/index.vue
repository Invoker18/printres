<template>
    <div class="">
        <Hero class="max-w-screen-2xl mx-auto px-5"></Hero>
        <div
            id="scrollText"
            class="flex items-center text-4xl gap-2 absolute bottom-12 right-6 2xl:right-48"
        >
            <span class="font-semibold">Scroll</span>
            <UIcon
                name="i-ph-arrow-down-right-bold"
                class="text-secondary size-8"
            ></UIcon>
        </div>
        <VideoSection class="overflow-hidden"></VideoSection>
        <About class="max-w-screen-2xl mx-auto px-5"></About>
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
            end: '100% center',
            toggleActions: 'play pause resume reset',
        },
        stagger: 0.1,
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
                // scale: 0.9,
                // borderRadius: 40,
                // onComplete: () => {
                //     console.log('beep boop')
                //     section.classList.remove('sticky')
                // },
                // onReverseComplete: () => {
                //     section.classList.add('sticky')
                // },
            },
            '<'
        )
    })
})
</script>

<style></style>
