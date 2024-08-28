<template>
    <!-- <div id="contact"></div> -->
    <div
        v-editable="blok"
        class="hover-cursor bottom-0 grid h-full select-none place-content-center bg-curious-blue-600 px-5 py-24 pt-32 sm:sticky sm:h-screen sm:py-0 sm:pt-0"
        id="contactContainer"
    >
        <div class="relative z-40 -mt-20 w-full max-w-xl">
            <div
                class="mx-auto flex h-fit w-full max-w-xl flex-col gap-5 rounded-md"
            >
                <div class="mb-3 text-center text-2xl">
                    {{ blok.Title }}
                </div>
                <div
                    class="text-primary-950 text-center text-8xl uppercase md:text-9xl"
                >
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
                <hr class="border-primary-950 mt-6 sm:hidden" />
            </div>
        </div>
        <div class="hidden md:block">
            <LazyThreejs v-if="y > 1200" />
        </div>
        <!-- <ThreejsMobile class="block md:hidden"></ThreejsMobile> -->
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ContactModal } from '#components'
import { ScrollTrigger } from 'gsap/all'

defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})

const { y } = useWindowScroll()

const modal = useModal()
const openModal = () => {
    modal.open(ContactModal)
}

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    let contactDom: any = document.getElementById('contactContainer')

    let mm = gsap.matchMedia()

    mm.add('(min-width: 640px)', () => {
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

<style scoped></style>
