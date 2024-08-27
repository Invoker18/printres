<template>
    <header
        id="nav"
        class="left-0 top-0 z-50 w-full bg-opacity-80 backdrop-blur-sm transition-all duration-500 ease-in"
        :class="navbarColor"
    >
        <div
            class="flex w-full items-center justify-between px-5 py-6 lg:px-10 2xl:px-28"
        >
            <NuxtImg
                :src="
                    route.path === '/'
                        ? '/images/logoprintres.svg'
                        : '/images/logoprintres2.svg'
                "
                class="hover-cursor w-28 md:w-32 lg:w-40"
                width="300px"
                height="76px"
                id="logo"
            />
            <ul
                class="hover-cursor hidden items-center justify-end gap-8 text-sm sm:text-base md:flex xl:gap-20 xl:text-lg"
            >
                <NuxtLink
                    activeClass="text-secondary underline underline-offset-4"
                    @click.prevent="goTo('#home')"
                    to="/"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Inicio
                </NuxtLink>
                <NuxtLink
                    activeClass="text-secondary underline underline-offset-4"
                    @click="goTo('#aboutUs')"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Nosotros
                </NuxtLink>
                <NuxtLink
                    activeClass="text-secondary underline underline-offset-4"
                    :to="{
                        path: '/portfolio',
                        query: {
                            category: categories[0]?.uuid,
                            page: 1,
                        },
                    }"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Trabajos
                </NuxtLink>
                <NuxtLink
                    activeClass="text-secondary underline underline-offset-4"
                    to="/all-events"
                    class="hover:scale-105 hover:cursor-pointer hover:text-secondary"
                >
                    Eventos
                </NuxtLink>
            </ul>
            <div class="flex items-center gap-3">
                <NuxtImg
                    @click="openModal()"
                    :src="
                        route.path === '/'
                            ? `images/shapes/3oscuro.svg`
                            : 'images/shapes/3hueso.svg'
                    "
                    alt=""
                    class="hover-cursor size-10 cursor-pointer"
                />
                <NuxtImg
                    :src="
                        route.path === '/'
                            ? '/images/shapes/menuAzul.svg'
                            : '/images/shapes/menuOscuro.svg'
                    "
                    alt=""
                    class="hover-cursor size-6 cursor-pointer md:hidden"
                    @click="openSlideover()"
                />
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/all'
import { ContactModal } from '#components'

const modal = useModal()
const openModal = () => {
    modal.open(ContactModal)
}

import { SlideMenu } from '#components'
const slideover: any = useSlideover()
const openSlideover = () => {
    slideover.open(SlideMenu, { onClose: slideover.close })
}

const { categories, fetchCategories } = useCategories()
await fetchCategories()

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
const scrollToTarget = (target: string) => {
    gsap.to(window, {
        duration: 2,
        scrollTo: target,
    })
}

const goTo = async (target: string) => {
    if (route.path === '/') return scrollToTarget(target)
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
