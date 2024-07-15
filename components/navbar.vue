<template>
    <div
        id="nav"
        class="bg-primary-950 fixed left-0 top-0 z-50 w-full bg-opacity-80 backdrop-blur-sm transition-all duration-500 ease-in"
    >
        <header
            class="flex w-full items-center justify-between px-5 py-6 lg:px-10 2xl:px-28"
        >
            <!-- @click="scrollToTop()" -->
            <NuxtImg
                @click="goHome()"
                src="/images/logoprintres2.svg"
                class="hover-cursor w-28 md:w-32 lg:w-40"
                id="logo"
            />
            <ul
                class="hover-cursor hidden items-center justify-end gap-8 text-sm sm:text-base md:flex xl:gap-20 xl:text-lg"
            >
                <!-- <li
                    @click="scrollToTop()"
                    class="hover:scale-105 hover:text-secondary hover:cursor-pointer"
                >
                    Inicio
                </li> -->
                <li
                    @click="scrollTo('aboutUs')"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Nosotros
                </li>
                <NuxtLink
                    to="work"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Trabajos
                </NuxtLink>
                <li
                    @click="scrollTo('events')"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Eventos
                </li>
                <li
                    @click="scrollTo('contact')"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Contacto
                </li>
            </ul>
            <div class="flex items-center gap-3">
                <img :src="tresImg" alt="" class="size-10 hover-cursor cursor-pointer" />
                <img :src="menuImg" alt="" class="size-6 hover-cursor cursor-pointer md:hidden" />
            </div>
        </header>
    </div>
</template>

<script lang="ts" setup>
import tresImg from '@/assets/images/shapes/3oscuro.svg'
import menuImg from '@/assets/images/shapes/menuOscuro.svg'
import gsap from 'gsap'
const scrollTo = (section: string) => {
    gsap.to(window, {
        duration: 2,
        scrollTo: { y: `#${section}` },
    })
}
const scrollToTop = () => {
    gsap.to(window, {
        duration: 2,
        scrollTo: 'top',
    })
}

const goHome = async () => {
    await navigateTo('/')
}
onMounted(() => {
    // let tween = gsap.to('#nav', {
    //   opacity: 1,
    //   y: 'full',
    //   ease: 'power1.out',
    // });
})
</script>

<style></style>
