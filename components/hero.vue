<template>
    <section class="" id="heroText">
        <div
            class="h-screen relative flex flex-col overflow-hidden font-semibold text-primary leading-none justify-start mt-40 select-none"
        >
            <div
                class="text-gray-100 flex text-[125px] lg:text-[150px] 2xl:text-[200px]"
                id="text1"
            >
                <div
                    v-for="(letter, index) in text1"
                    :key="index"
                    class="hover-cursor2"
                >
                    <span v-if="letter == ' '" class="ml-10"></span>
                    {{ letter }}
                </div>
            </div>
            <div
                class="flex text-[125px] lg:text-[150px] 2xl:text-[200px]"
                id="text2"
            >
                <div
                    v-for="(letter, index) in text2"
                    :key="index"
                    class="hover-cursor2"
                    :class="index > 4 ? 'text-secondary' : 'text-white'"
                >
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
        y: '+=850',
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
        y: '+=750',
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
