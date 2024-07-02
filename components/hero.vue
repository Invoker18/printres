<template>
    <section
        class="flex justify-between w-full mt-24 h-[50dvh] md:h-screen relative"
        id="heroText"
    >
        <div
            class="relative flex flex-col items-start justify-start pt-10 md:pt-[20vh] font-semibold select-none px-5 lg:px-10 2xl:px-20 h-full w-full flex-1"
        >
            <div
                class="text-gray-100 flex text-7xl sm:text-8xl md:text-[8rem] lg:text-[125px] xl:text-[8rem] 2xl:text-[180px]"
                id="text1"
            >
                <div
                    v-for="(letter, index) in text1"
                    :key="index"
                    class="hover-cursor2"
                >
                    <span v-if="letter == ' '" class="ml-5 md:ml-10"></span>
                    {{ letter }}
                </div>
            </div>
            <div
                class="flex text-7xl sm:text-8xl md:text-[8rem] lg:text-[125px] xl:text-[8rem] 2xl:text-[180px]"
                id="text2"
            >
                <div
                    v-for="(letter, index) in text2"
                    :key="index"
                    class="hover-cursor2"
                    :class="index > 3 ? 'text-secondary' : 'text-white'"
                >
                    <span v-if="letter == ' '" class="ml-5 md:ml-10"></span>
                    {{ letter }}
                </div>
            </div>
        </div>
        <HeroShapes></HeroShapes>
        <div
            id="scrollText"
            class="flex items-center text-2xl sm:text-4xl gap-2 absolute bottom-12 md:bottom-32 right-6 md:right-8 2xl:right-24 z-50"
        >
            <span class="font-semibold">Scroll</span>
            <UIcon
                name="i-ph-arrow-down-right-bold"
                class="text-secondary size-8"
            ></UIcon>
        </div>
    </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const text1 = ref('Impresión')
const text2 = ref('sin límites')

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    // create
    let mm = gsap.matchMedia()

    mm.add('(max-width: 640px)', () => {
        gsap.to('#scrollText', {
            opacity: 0,
            scrollTrigger: {
                trigger: '#heroText',
                start: 'center 30%',
                end: 'center center',
                toggleActions: 'play pause resume reset',
                scrub: true,
            },
            ease: 'power2.out',
            duration: 0.5,
        })
        gsap.to('#text1 div', {
            yPercent: '+=225',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: 'center 30%',
                end: '100% top',
            },
            stagger: {
                from: 'random',
                amount: 0.3,
            },
            ease: 'power1.out',
        })
        gsap.to('#text2 div', {
            yPercent: '+=150',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: 'center 30%',
                end: '100% top',
            },
            stagger: {
                from: 'random',
                amount: 0.3,
            },
            ease: 'power1.out',
        })
    })
    // MOBILE ANIMATION
    mm.add('(max-width: 768px)', () => {
        gsap.to('#scrollText', {
            opacity: 0,
            scrollTrigger: {
                trigger: '#heroText',
                start: 'center 30%',
                end: 'center center',
                toggleActions: 'play pause resume reset',
                scrub: true,
            },
            ease: 'power2.out',
            duration: 0.5,
        })
        gsap.to('#text1 div', {
            y: '+=425',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: 'center 30%',
                end: '100% top',
            },
            stagger: {
                from: 'random',
                amount: 0.3,
            },
            ease: 'power1.out',
        })
        gsap.to('#text2 div', {
            y: '+=250',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: 'center 30%',
                end: '100% top',
            },
            stagger: {
                from: 'random',
                amount: 0.3,
            },
            ease: 'power1.out',
        })
    })

    // DESKTOP ANIAMTION
    mm.add('(min-width: 768px)', () => {
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
        gsap.to('#text1 div', {
            y: '+=625',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: '40% center',
                end: '100% top',
            },
            stagger: {
                from: 'random',
                amount: 0.3,
            },
            ease: 'power1.out',
        })
        gsap.to('#text2 div', {
            y: '+=450',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: '40% center',
                end: '100% top',
            },
            stagger: {
                from: 'random',
                amount: 0.3,
            },
            ease: 'power1.out',
        })
    })
})
</script>

<style scoped></style>
