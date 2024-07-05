<template>
    <div
        class="hidden h-full flex-1 items-start justify-center bg-[#0424D9] pt-[10vh] lg:flex"
    >
        <div
            class="grid grid-cols-1 grid-rows-3 px-10 lg:grid-cols-2 xl:grid-cols-3 2xl:px-20"
            id="vectors"
        >
            <div
                v-for="(vector, index) in vectorsComputed"
                :key="vector"
                class="hover-cursor"
            >
                <img :src="vector" alt="" class="object-contain" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import vector1 from '@/assets/images/shapes/Vector1.png'
import vector2 from '@/assets/images/shapes/Vector2.png'
import vector3 from '@/assets/images/shapes/Vector3.png'
import vector4 from '@/assets/images/shapes/Vector4.png'
import vector5 from '@/assets/images/shapes/Vector5.png'
import vector6 from '@/assets/images/shapes/Vector6.png'
import vector7 from '@/assets/images/shapes/Vector7.png'
import vector8 from '@/assets/images/shapes/Vector8.png'
import vector9 from '@/assets/images/shapes/Vector9.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const vectors = ref([
    vector1,
    vector2,
    vector3,
    vector4,
    vector5,
    vector6,
    vector7,
    vector8,
    vector9,
] as Array<string>)

const { width, height } = useWindowSize()

const vectorsComputed = computed(() => {
    if (width.value < 1024) return [vector1, vector6, vector3]
    if (width.value < 1280)
        return [vector1, vector2, vector3, vector6, vector4, vector5]
    return vectors.value
})
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    nextTick(() => {
        gsap.to('#vectors div', {
            y: '+=600',
            rotation: 'random(200, -200)',
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

<style></style>
