<template>
    <header
        id="nav"
        class="left-0 top-0 z-50 w-full bg-opacity-80 backdrop-blur-sm transition-all duration-500 ease-in"
        :class="navbarColor"
    >
        <div
            class="flex w-full items-center justify-between px-5 py-6 lg:px-10 2xl:px-28"
        >
            <!-- @click="scrollToTop()" -->
            <NuxtImg
                :src="
                    route.path === '/'
                        ? '/images/logoprintres.svg'
                        : '/images/logoprintres2.svg'
                "
                class="hover-cursor w-28 md:w-32 lg:w-40"
                id="logo"
            />
            <ul
                class="hover-cursor hidden items-center justify-end gap-8 text-sm sm:text-base md:flex xl:gap-20 xl:text-lg"
            >
                <NuxtLink
                    to="/"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Inicio
                </NuxtLink>
                <li
                    @click="scrollTo('aboutUs')"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Nosotros
                </li>
                <NuxtLink
                    to="/portfolio"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Trabajos
                </NuxtLink>
                <NuxtLink
                    to="/all-events"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Eventos
                </NuxtLink>
            </ul>
            <div class="flex items-center gap-3">
                <img
                    @click="openModal()"
                    :src="route.path === '/' ? tresImg : tresImg2"
                    alt=""
                    class="hover-cursor size-10 cursor-pointer"
                />
                <img
                    :src="route.path === '/' ? menuImg2 : menuImg"
                    alt=""
                    class="hover-cursor size-6 cursor-pointer md:hidden"
                    @click="openSlideover()"
                />
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import tresImg from '@/assets/images/shapes/3oscuro.svg'
import tresImg2 from '@/assets/images/shapes/3hueso.svg'
import menuImg from '@/assets/images/shapes/menuOscuro.svg'
import menuImg2 from '@/assets/images/shapes/menuAzul.svg'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ContactModal } from '#components'

const modal = useModal()
const openModal = () => {
    modal.open(ContactModal)
}

import { SlideMenu } from '#components'
const slideover = useSlideover()
const openSlideover = () => {
    slideover.open(SlideMenu, { onClose: slideover.close })
}

const isOpen = ref(false)

const route = useRoute()

const navbarColor = computed(() => {
    return route.path === '/'
        ? 'bg-primary-950 sticky'
        : 'bg-gray-300 fixed text-primary-950'
})

const scrollTo = async (section: string) => {
    if (route.path !== '/') {
        await navigateTo('/')
        setTimeout(() => {
            gsap.to(window, {
                duration: 2,
                scrollTo: { y: `#${section}` },
            })
        }, 1000)
    } else {
        gsap.to(window, {
            duration: 2,
            scrollTo: { y: `#${section}` },
        })
    }
}
const scrollToTop = () => {
    gsap.to(window, {
        duration: 2,
        scrollTo: 'top',
    })
}

const goHome = async () => {
    if (route.path === '/') return scrollToTop()
    await navigateTo('/')
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

<style scoped></style>
