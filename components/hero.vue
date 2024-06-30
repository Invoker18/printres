<template>
    <section class="flex justify-between gap-20 w-full h-screen" id="heroText">
        <div
            class="relative flex flex-col items-center justify-center overflow-hidden font-semibold text-primary leading-none select-none pl-20 h-full"
        >
            <div
                class="text-gray-100 flex text-[125px] lg:text-[150px] xl:text-[200px]"
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
                class="flex text-[125px] lg:text-[150px] xl:text-[200px]"
                id="text2"
            >
                <div
                    v-for="(letter, index) in text2"
                    :key="index"
                    class="hover-cursor2"
                    :class="index > 3 ? 'text-secondary' : 'text-white'"
                >
                    <span v-if="letter == ' '" class="ml-10"></span>
                    {{ letter }}
                </div>
            </div>
        </div>
        <div
            class="bg-[#0424D9] h-full flex-1 lg:flex justify-center items-center hidden"
        >
            <div
                class="px-5 auto-rows-min grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3"
            >
                <div v-for="(vector, index) in vectors" :key="vector">
                    <img :src="vector" alt="" class="2xl:size-44 hover-cursor"  />
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import vector1 from '@/assets/images/shapes/Vector1.png'
import vector2 from '@/assets/images/shapes/Vector2.png'
import vector3 from '@/assets/images/shapes/Vector3.png'
import vector4 from '@/assets/images/shapes/Vector4.png'
import vector5 from '@/assets/images/shapes/Vector5.png'
import vector6 from '@/assets/images/shapes/Vector6.png'
import vector7 from '@/assets/images/shapes/Vector7.png'
import vector8 from '@/assets/images/shapes/Vector8.png'
import vector9 from '@/assets/images/shapes/Vector9.png'

const text1 = ref('Impresión')
const text2 = ref('sin límites')
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
])
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

    gsap.to('#text1 div', {
        y: '+=450',
        rotation: 'random(100, -100)',
        scrollTrigger: {
            trigger: '#heroText',
            scrub: true,
            start: 'center center',
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
        y: '+=350',
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
</script>

<style scoped></style>
