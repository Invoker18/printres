<template>
    <div id="contact"></div>
    <div
        v-editable="blok"
        class="hover-cursor bottom-0 grid h-full select-none place-content-center bg-curious-blue-600 px-5 sm:sticky sm:h-screen"
        id="contactContainer"
    >
        <div class="relative z-40 w-full max-w-xl -mt-10">
            <div
                class="mx-auto flex h-fit w-full max-w-xl flex-col gap-5 rounded-md"
            >
                <div class="mb-3 text-center text-2xl">
                    {{ blok.Title }}
                </div>
                <div class="text-center text-8xl uppercase md:text-9xl text-primary-950">
                    {{ blok.Phrase1 }}
                    <br />
                    {{ blok.Phrase2 }}
                </div>
                <div class="mx-auto mt-5">
                    <UButton
                        @click="openModal()"
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
        <Threejs class="hidden md:block"></Threejs>
        <!-- <ThreejsMobile class="block md:hidden"></ThreejsMobile> -->
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
import { ContactModal } from '#components'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})

const modal = useModal()
const openModal = () => {
    console.log('open modal')
    modal.open(ContactModal)
}

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    let contactDom: any = document.getElementById('contactContainer')

    let mm = gsap.matchMedia()

    mm.add('(min-width: 640px)', () => {
        console.log('entre')
        ScrollTrigger.create({
            trigger: '#location',
            start: 'top bottom',
            onEnter: () => {
                contactDom.classList.remove('bottom-0')
                contactDom.classList.add('top-0')
            },
            onLeaveBack: () => {
                contactDom.classList.add('bottom-0')
                contactDom.classList.remove('top-0')
            },
        })
    })
})
</script>

<style scoped>
#shapesContainer img {
    filter: drop-shadow(0px 0px 0.5px #0091dc);
}
</style>
