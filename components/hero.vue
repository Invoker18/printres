<template>
    <section class="hover-cursor" id="heroText">
        <div
            class="h-screen relative -z-10 flex flex-col font-semibold text-primary leading-none hover-cursor justify-start mt-40"
        >
            <div
                class="text-gray-100 flex text-[150px] 2xl:text-[200px]"
                id="text1"
            >
                <div v-for="(letter, index) in text1" :key="index" class="">
                    <span v-if="letter == ' '" class="ml-10"></span>
                    {{ letter }}
                </div>
            </div>
            <div
                class="text-secondary flex text-[150px] 2xl:text-[200px]"
                id="text2"
            >
                <div v-for="(letter, index) in text2" :key="index" class="">
                    <span v-if="letter == ' '" class="ml-10"></span>
                    {{ letter }}
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'

const text1 = ref('Publicidad de')
const text2 = ref('alto impacto')

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    gsap.to('#text1 div', {
        y: '+=600',
        rotation: 'random(100, -100)',
        scrollTrigger: {
            trigger: '#heroText',
            scrub: true,
            start: '25% center',
            end: '100% top',
        },
        stagger: {
            from: 'random',
            amount: 0.3,
        },
        ease: 'power1.out',
    })
    gsap.to('#text2 div', {
        y: '+=500',
        rotation: 'random(100, -100)',
        scrollTrigger: {
            trigger: '#heroText',
            scrub: true,
            start: '25% center',
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

<style></style>
