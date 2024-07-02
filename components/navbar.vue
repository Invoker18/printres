<template>
    <div
        id="nav"
        class="fixed w-full left-0 top-0 z-50 transition-all ease-in duration-500 backdrop-blur-sm bg-opacity-80 bg-primary-950"
    >
        <header
            class="flex items-center justify-between w-full px-5 lg:px-10 2xl:px-20 py-8"
        >
            <NuxtImg
                src="/images/logoprintres2.svg"
                class="w-28 md:w-32 lg:w-44 hover-cursor"
                id="logo"
            />
            <ul
                class="hidden md:flex justify-center items-center self-end gap-8 xl:gap-20 text-sm sm:text-base xl:text-lg hover-cursor"
            >
                <li
                    @click="scrollToTop()"
                    class="hover:scale-105 hover:text-secondary hover:cursor-pointer"
                >
                    Inicio
                </li>
                <li
                    @click="scrollTo('aboutUs')"
                    class="hover:scale-105 hover:text-secondary hover:cursor-pointer"
                >
                    Nosotros
                </li>
                <li
                    @click="scrollTo('projects')"
                    class="hover:scale-105 hover:text-secondary hover:cursor-pointer"
                >
                    Trabajos
                </li>
                <li
                    class="hover:scale-105 hover:text-secondary hover:cursor-pointer"
                >
                    Eventos
                </li>
                <li
                    class="hover:scale-105 hover:text-secondary hover:cursor-pointer"
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
const scrollToTop = () => {
    gsap.to(window, {
        duration: 2,
        scrollTo: 'top',
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
