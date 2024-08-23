<template>
    <div
        class="hidden h-full flex-1 items-start justify-center bg-[#0424D9] pt-[10vh] md:flex"
    >
        <div
            class="grid shrink-0 select-none grid-cols-1 grid-rows-3 px-10 min-[900px]:grid-cols-2 xl:grid-cols-3 2xl:px-20"
            id="vectors"
        >
            <div
                v-memo="[vector]"
                v-for="vector in vectorsComputed"
                :key="vector"
                class="hover-cursor"
            >
                <!-- <img :src="vector" alt="" class="object-contain" /> -->
                <NuxtImg
                    :src="`/images/shapes/Vector${vector}.png`"
                    width="150"
                    height="150"
                    fit="cover"
                    preload
                ></NuxtImg>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const { width } = useWindowSize()

const vectorsComputed = computed(() => {
    if (width.value < 900) return [1, 6, 3]
    if (width.value < 1280) return [1, 2, 3, 6, 4, 5]
    return [1, 2, 3, 4, 5, 6, 7, 8, 9]
})

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    nextTick(() => {
        gsap.to('#vectors div', {
            y: '+=800',
            rotation: 'random(200, -200)',
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

<style scoped>
img {
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}
</style>
