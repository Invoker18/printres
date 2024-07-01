<template>
    <section class="flex justify-between w-full mt-24 h-screen" id="heroText">
        <div
            class="relative flex flex-col items-start justify-start pt-[20vh] font-semibold select-none px-3 md:px-9 xl:px-20 h-full w-full flex-1"
        >
            <div
                class="text-gray-100 flex text-7xl md:text-[150px] lg:text-[125px] xl:text-[150px] 2xl:text-[180px]"
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
                class="flex text-7xl md:text-[150px] lg:text-[125px] xl:text-[150px] 2xl:text-[180px]"
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
    </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const text1 = ref('Impresión')
const text2 = ref('sin límites')

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('#text1 div', {
        y: '+=625',
        rotation: 'random(100, -100)',
        scrollTrigger: {
            trigger: '#heroText',
            scrub: true,
            start: '40% center',
            end: '100% top',
            pinSpacing: true,
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
</script>

<style scoped></style>
