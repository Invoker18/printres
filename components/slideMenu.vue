<template>
    <USlideover
        prevent-close
        :ui="{
            width: 'max-w-none',
            background:
                'bg-primary-950/60 dark:bg-primary-950/60 backdrop-blur-md',
        }"
    >
        <div class="flex h-full flex-col gap-10 p-5 pb-10">
            <div class="flex items-center justify-between">
                <NuxtImg
                    src="/images/logoprintres.svg"
                    class="hover-cursor w-28"
                    id="logo"
                />
                <div class="flex items-center gap-1">
                    <img :src="emapanada" alt="" class="max-h-16" />
                    <img :src="emapanada" alt="" class="max-h-16" />
                    <UIcon
                        name="i-simple-line-icons-close"
                        @click="slideover.close()"
                        class="size-10"
                    />
                </div>
            </div>
            <ul class="flex flex-col items-end justify-end text-4xl">
                <li class="w-full border-b py-6 text-right" @click="goHome()">
                    Home
                </li>
                <li
                    class="w-full border-b py-6 text-right"
                    @click="scrollTo('aboutUs')"
                >
                    Nosotros
                </li>
                <NuxtLink
                    to="work"
                    class="w-full border-b py-6 text-right focus-within:outline-none"
                    @click="slideover.close()"
                    >Trabajos</NuxtLink
                >
                <NuxtLink
                    to="events"
                    class="w-full border-b py-6 text-right focus-within:outline-none"
                    @click="slideover.close()"
                    >Eventos</NuxtLink
                >
                <li class="w-full border-b py-6 text-right"
                @click="scrollTo('contact')">Contacto</li>
            </ul>
            <ul class="mt-auto flex justify-between gap-3">
                <li class="">Facebook</li>
                <li class="">Instagram</li>
                <li class="">Whatsapp</li>
                <li class="">Behance</li>
            </ul>
        </div>
    </USlideover>
</template>

<script lang="ts" setup>
import emapanada from '@/assets/images/shapes/smallBlueEmpa.png'
import { ScrollToPlugin } from 'gsap/all'
import gsap from 'gsap'

const slideover = useSlideover()
const route = useRoute()

const scrollTo = async (section: string) => {
    if (route.path !== '/') {
        await navigateTo('/')
        setTimeout(() => {
            gsap.to(window, {
                duration: 2,
                scrollTo: { y: `#${section}` },
            })
        }, 1000)
        slideover.close()
    } else {
        gsap.to(window, {
            duration: 2,
            scrollTo: { y: `#${section}` },
        })
        slideover.close()
    }
}
const scrollToTop = () => {
    gsap.to(window, {
        duration: 2,
        scrollTo: 'top',
    })
    slideover.close()
}

const goHome = async () => {
    if (route.path === '/') return scrollToTop()
    await navigateTo('/')
    slideover.close()
}

onMounted(() => {
    gsap.registerPlugin(ScrollToPlugin)

    // let tween = gsap.to('#nav', {
    //   opacity: 1,
    //   y: 'full',
    //   ease: 'power1.out',
    // });
})
</script>

<style></style>
