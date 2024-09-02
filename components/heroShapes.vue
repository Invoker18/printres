<template>
    <div
        class="hidden h-full flex-1 items-start justify-center bg-[#0424D9] pt-[10vh] md:flex"
    >
        <div
            class="grid shrink-0 select-none grid-cols-1 grid-rows-3 px-10 min-[900px]:grid-cols-2 xl:grid-cols-3 2xl:px-20"
            id="vectors"
        >
            <div
                v-for="vector in vectorsComputed"
                :key="vector"
                class="hover-cursor"
            >
                <NuxtImg
                    :src="getUrl(vector)"
                    width="150"
                    height="150"
                    fit="inside"
                    preload
                    format="webp"
                    alt="Hero Shapes"
                ></NuxtImg>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const { width } = useWindowSize()

const vectorsComputed = ref([1, 2, 3, 4, 5, 6, 7, 8, 9])

watch(width, () => {
    if (width.value < 900) return (vectorsComputed.value = [1, 6, 3])
    if (width.value < 1280) return (vectorsComputed.value = [1, 2, 3, 6, 4, 5])
    return (vectorsComputed.value = [1, 2, 3, 4, 5, 6, 7, 8, 9])
})

const getUrl = (vector: any) => {
    return '/images/shapes/Vector' + vector + '.png'
}

onMounted(() => {
    if (width.value < 900) vectorsComputed.value = [1, 6, 3]
    if (width.value > 900) vectorsComputed.value = [1, 2, 3, 6, 4, 5]
    if (width.value > 1280) vectorsComputed.value = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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
