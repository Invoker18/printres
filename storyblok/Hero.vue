<template>
    <section
        v-editable="blok"
        class="bg-primary-950 relative z-40 flex h-[60dvh] w-full justify-between md:h-screen"
        id="heroText"
    >
        <div
            class="relative flex h-full w-full flex-1 select-none flex-col items-center justify-start px-5 pt-16 font-semibold sm:items-start sm:pt-10 md:pt-[18vh] lg:px-10 2xl:px-28"
        >
            <div
                class="flex text-7xl text-gray-100 sm:text-8xl lg:text-[125px] xl:text-[8rem] 2xl:text-[180px]"
                id="text1"
            >
                <h1
                    v-for="(letter, index) in blok.Phrase1"
                    :key="index"
                    class="hover-cursor2"
                >
                    <span v-if="letter == ' '" class="ml-5 md:ml-10"></span>
                    {{ letter }}
                </h1>
            </div>
            <div
                class="flex text-7xl sm:text-8xl lg:text-[125px] xl:text-[8rem] 2xl:text-[180px]"
                id="text2"
            >
                <h1
                    v-for="(letter, index) in blok.Phrase2"
                    :key="index"
                    class="hover-cursor2"
                    :class="index > 3 ? 'text-secondary' : 'text-white'"
                >
                    <span v-if="letter == ' '" class="ml-5 md:ml-10"></span>
                    {{ letter }}
                </h1>
            </div>
        </div>
        <HeroShapes></HeroShapes>
        <div
            id="scrollText"
            class="absolute bottom-12 right-6 z-50 hidden items-center gap-2 text-2xl sm:flex sm:text-4xl md:bottom-44 md:right-16 2xl:right-24"
        >
            <span class="font-semibold">Scroll</span>
            <UIcon
                name="i-ph-arrow-down-right-bold"
                class="size-8 text-secondary"
            ></UIcon>
        </div>
    </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    let mm = gsap.matchMedia()

    mm.add('(max-width: 640px)', () => {
        gsap.to('#text1 h1', {
            yPercent: '+=650',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: 'center 35%',
                end: '100% top',
            },
            stagger: {
                from: 'random',
                amount: 0.3,
            },
            ease: 'power1.out',
        })
        gsap.to('#text2 h1', {
            yPercent: '+=475',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: 'center 25%',
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
    mm.add('(min-width:641px) and (max-width: 767px)', () => {
        gsap.to('#scrollText', {
            autoAlpha: 0,
            scrollTrigger: {
                trigger: '#heroText',
                start: 'center 29%',
                end: 'center center',
                toggleActions: 'play none none reset',
            },
            ease: 'power2.out',
            duration: 1,
        })
        gsap.to('#text1 h1', {
            y: '+=475',
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
        gsap.to('#text2 h1', {
            y: '+=300',
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
            autoAlpha: 0,
            scrollTrigger: {
                start: '51% center',
                end: 'center center',
                trigger: '#heroText',
                toggleActions: 'play none none reset',
            },
            ease: 'power2.out',
            duration: 1,
        })
        gsap.to('#text1 h1', {
            y: '+=750',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: 'center center',
                end: '100% top',
            },
            stagger: {
                from: 'random',
                amount: 0.3,
            },
            ease: 'power1.out',
        })
        gsap.to('#text2 h1', {
            y: '+=800',
            rotation: 'random(100, -100)',
            scrollTrigger: {
                trigger: '#heroText',
                scrub: true,
                start: 'center center',
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
