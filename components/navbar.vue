<template>
    <div
        id="nav"
        class="sticky top-0 z-50 transition-all ease-in duration-500 backdrop-blur-sm bg-opacity-80 bg-primary-950"
    >
        <header
            class="flex items-center justify-between w-full px-5 max-w-screen-2xl mx-auto py-8"
        >
            <NuxtImg
                src="/images/logoprintres2.svg"
                class="w-24 md:w-32 lg:w-40 hover-cursor"
                id="logo"
            />
            <ul
                class="hidden md:flex justify-center items-center self-end gap-8 xl:gap-20 text-sm sm:text-base"
            >
                <li
                    @click="scrollTo('Home')"
                    class="hover:scale-105 transition-all ease-in duration-200 hover:text-secondary hover:cursor-pointer hover-cursor"
                >
                    Inicio
                </li>
                <li
                    @click="scrollTo('aboutUs')"
                    class="hover:scale-105 transition-all ease-in duration-200 hover:text-secondary hover:cursor-pointer hover-cursor"
                >
                    Nosotros
                </li>
                <li
                    class="hover:scale-105 transition-all ease-in duration-200 hover:text-secondary hover:cursor-pointer hover-cursor"
                >
                    Servicios
                </li>
                <li
                    class="hover:scale-105 transition-all ease-in duration-200 hover:text-secondary hover:cursor-pointer hover-cursor"
                >
                    Eventos
                </li>
                <li
                    class="hover:scale-105 transition-all ease-in duration-200 hover:text-secondary hover:cursor-pointer hover-cursor"
                >
                    Proyectos
                </li>
            </ul>
            <div class="flex items-center gap-2">
                <NuxtImg src="/images/3.svg" class="size-5" />
                <!-- <UIcon name="i-marketeq-menu" class="size-8"></UIcon> -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 50 50"
                >
                    <g
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="6"
                    >
                        <path stroke="#0091dc" d="M6.25 25h37.5" />
                        <path stroke="#f87c56" d="M6.25 12.5h25m-12.5 25h25z" />
                    </g>
                </svg>
            </div>
        </header>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
const scrollTo = (section: string) => {
    gsap.to(window, {
        duration: 2,
        scrollTo: { y: `#${section}` },
    })
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
