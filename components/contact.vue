<template>
    <div
        class="hover-cursor sticky bottom-0 z-20 grid h-full md:min-h-screen select-none place-content-center bg-curious-blue-600 px-5"
        id="contactContainer"
    >
        <!-- <div id="shapesContainer">
            <div v-for="n in 3" :key="n">
                <div v-for="(vector, index) in vectors" :key="vector">
                    <img
                        :src="vector"
                        alt=""
                        class="img absolute size-24 object-contain md:size-28"
                    />
                </div>
            </div>
        </div> -->
        <div class="relative z-40 w-full max-w-xl py-16">
            <div
                class="mx-auto flex h-fit w-full max-w-xl flex-col gap-5 rounded-md"
            >
                <div class="mb-3 text-center text-2xl">
                    ¿Necesitas ayuda con tus Proyectos?
                </div>
                <div class="text-center text-8xl uppercase md:text-9xl">
                    ¡Di
                    <br />
                    Hola!
                </div>
                <div class="mx-auto mt-5">
                    <UButton
                        @click="isOpen = true"
                        variant="outline"
                        color="white"
                        icon="i-ph-arrow-up-right-bold"
                        trailing
                        size="xl"
                        class="text-2xl"
                        :ui="{
                            rounded: 'rounded-xl',
                            padding: {
                                xl: 'px-8',
                            },
                        }"
                    >
                        Contactanos
                    </UButton>
                </div>
                <hr class="border-primary-950 mt-12" />
            </div>
        </div>
        <LazyThreejs class="hidden md:block"></LazyThreejs>
        <!-- <LazyThreejsMobile class="block md:hidden"></LazyThreejsMobile> -->
        <UModal
            v-model="isOpen"
            :ui="{
                container:
                    'items-start sm:items-center justify-center text-center',
                inner: 'overflow-hidden',
                background: 'bg-primary-950/90 dark:bg-primary-950/90',
                overlay: {
                    background: 'bg-gray-800/50 dark:bg-gray-800/50',
                },
            }"
        >
            <div
                class="bg-primary-950/90 gap-3 rounded-3xl p-8 backdrop-blur-md"
            >
                <div class="mb-10 flex items-end justify-between gap-5">
                    <h3 class="text-2xl">
                        Contacto
                        <hr
                            class="ml-2 w-2/3 rounded-md border-[1.5px] border-secondary"
                        />
                    </h3>
                    <div class="max-w-full">
                        <img :src="contactShape" alt="" class="" />
                    </div>
                </div>
                <form action="" class="grid grid-flow-row gap-3">
                    <input
                        type="text"
                        placeholder="Nombre Completo..."
                        class="rounded-md border border-gray-400 bg-transparent p-2.5 text-gray-100 placeholder-gray-200"
                    />
                    <input
                        type="email"
                        placeholder="Correo..."
                        class="rounded-md border border-gray-400 bg-transparent p-2.5 text-gray-100 placeholder-gray-200"
                    />
                    <textarea
                        name="mensaje"
                        id=""
                        placeholder="Mensaje..."
                        rows="6"
                        class="rounded-md bg-curious-blue-600 p-2.5 text-gray-100 placeholder-gray-200"
                    ></textarea>
                    <button
                        type="submit"
                        class="mt-3 rounded-md bg-secondary p-2.5 text-gray-200"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </UModal>
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
import vector10 from '@/assets/images/shapes/Vector10.png'
import contactShape from '@/assets/images/shapes/contactShape.png'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const isOpen = ref(false)

const vectors = ref([
    vector1,
    // vector2,
    vector3,
    vector4,
    vector5,
    // vector6,
    vector7,
    vector8,
    vector9,
    vector10,
] as Array<string>)

const randomIntFromInterval = (min: number, max: number) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const moveShapes = () => {
    const shapesContainer: any = document.getElementById('shapesContainer')
    const divImgs = Array.from(shapesContainer.querySelectorAll('img'))
    divImgs.forEach((element: any) => {
        const width = randomIntFromInterval(0, window.innerWidth)
        const height = randomIntFromInterval(0, window.innerHeight)
        element.style.transform = `translate3d(${width}px,${height}px,0)`

        // gsap.to(element, {
        //     x: `random(0,${window.innerWidth})`, //chooses a random number between 0 and 20 for each target, rounding to the closest 5!
        //     y: `random(0, ${window.innerHeight})`,
        //     rotation: '+=200',
        //     duration: 20,
        //     ease: "power1.inOut",
        //     repeat: -1,
        //     repeatRefresh: true,
        // })
    })

    const tl = gsap.timeline()
    tl.to('.img', {
        x: `random(0,${window.innerWidth})`, //chooses a random number between 0 and 20 for each target, rounding to the closest 5!
        y: `random(-100, ${window.innerHeight})`,
        rotation: '+=100',
        duration: 20,
        ease: 'none',
        repeat: -1,
        repeatRefresh: true,
    })
    // .to('.img', {
    //     y: '+=100',
    //     scrollTrigger: {
    //         trigger: '#contact',
    //         scrub: true,
    //         start: 'center bottom',
    //         // end: 'center top',
    //         end: '+=1000',
    //         markers: true,
    //     },
    //     ease: 'power1.out',
    // })
    // gsap.to('#shapesContainer img', {
    //     y: '+=350',
    //     rotation: 'random(200, -200)',
    //     scrollTrigger: {
    //         trigger: '#contact',
    //         scrub: true,
    //         start: 'center bottom',
    //         // end: 'center top',
    //         end: '+=1000',
    //         markers: true,
    //     },
    //     ease: 'power1.out',
    // })
}

onMounted(() => {
    let contactDom: any = document.getElementById('contactContainer')

    let mm = gsap.matchMedia()

    mm.add('(min-width: 768px)', () => {
        gsap.to('#location', {
            scrollTrigger: {
                immediateRender: false,
                trigger: '#location',
                start: 'top bottom',
                end: '100% top',
                preventOverlaps: true,
                markers: true,
                onEnter: () => {
                    contactDom.classList.remove('bottom-0')
                    contactDom.classList.add('top-0')
                    console.log('onEnter', contactDom)
                },
                onLeaveBack: () => {
                    contactDom.classList.add('bottom-0')
                    contactDom.classList.remove('top-0')
                    console.log('onLeaveBack', contactDom)
                },
            },
        })
    })

    // moveShapes()
    // window.addEventListener('resize', () => {
    //     moveShapes()
    // })
})
</script>

<style scoped>
#shapesContainer img {
    filter: drop-shadow(0px 0px 0.5px #0091dc);
}
</style>
