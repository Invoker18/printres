<template>
    <header
        id="nav"
        class="site-header left-0 top-0 z-50 w-full border-b backdrop-blur-md"
        :class="navbarColor"
    >
        <div
            class="site-container flex min-h-20 items-center justify-between gap-4 py-4"
        >
            <NuxtLink
                to="/"
                aria-label="Printres - Inicio"
                class="shrink-0 rounded-sm"
            >
                <NuxtImg
                    :src="
                        route.path === '/'
                            ? '/images/logoprintres.svg'
                            : '/images/logoprintres2.svg'
                    "
                    class="w-24 sm:w-28 md:w-32 lg:w-36"
                    width="300"
                    height="76"
                    alt="Printres"
                />
            </NuxtLink>
            <nav
                aria-label="Navegación principal"
                class="nav-shell hidden rounded-full border p-1 md:block"
            >
                <ul class="flex items-center text-sm font-medium">
                    <li>
                        <NuxtLink
                            to="/"
                            :aria-current="
                                route.path === '/' && homeSection === 'home'
                                    ? 'page'
                                    : undefined
                            "
                            class="nav-link"
                            :class="{
                                'is-active':
                                    route.path === '/' &&
                                    homeSection === 'home',
                            }"
                            @click.prevent="goToHomeSection('home')"
                            >Inicio</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            to="/#aboutUs"
                            class="nav-link"
                            :class="{
                                'is-active':
                                    route.path === '/' &&
                                    homeSection === 'aboutUs',
                            }"
                            :aria-current="
                                route.path === '/' && homeSection === 'aboutUs'
                                    ? 'location'
                                    : undefined
                            "
                            @click.prevent="goToHomeSection('aboutUs')"
                        >
                            Nosotros
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            to="/portfolio"
                            class="nav-link"
                            :class="{
                                'is-active':
                                    route.path.startsWith('/portfolio'),
                            }"
                            :aria-current="
                                route.path.startsWith('/portfolio')
                                    ? 'page'
                                    : undefined
                            "
                            >Trabajos</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            to="/all-events"
                            class="nav-link"
                            :class="{ 'is-active': isEventsPage }"
                            :aria-current="isEventsPage ? 'page' : undefined"
                            >Eventos</NuxtLink
                        >
                    </li>
                </ul>
            </nav>
            <div class="flex items-center gap-2 sm:gap-4">
                <button
                    type="button"
                    aria-label="Cotizar proyecto"
                    class="text-primary-950 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-secondary px-4 text-sm font-semibold transition-colors hover:bg-coral-300 sm:px-6"
                    @click="openModal"
                >
                    <span
                        >Cotizar<span class="hidden sm:inline"
                            >&nbsp;proyecto</span
                        ></span
                    >
                    <span
                        aria-hidden="true"
                        class="hidden text-lg leading-none sm:inline"
                        >↗</span
                    >
                </button>
                <button
                    type="button"
                    aria-label="Abrir menú"
                    aria-haspopup="dialog"
                    class="menu-button flex size-11 items-center justify-center rounded-full border md:hidden"
                    @click="openSlideover"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="size-7"
                    >
                        <path
                            stroke-linecap="round"
                            d="M4 7h16M4 12h16M4 17h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
import { ContactModal, SlideMenu } from '#components'

const modal = useModal()
const slideover = useSlideover()
const route = useRoute()
const { goToHomeSection } = useHomeNavigation()
const nuxtApp = useNuxtApp()

const homeSection = ref<'home' | 'aboutUs' | null>('home')
const updateHomeSection = () => {
    if (route.path !== '/') return
    const about = document.getElementById('aboutUs')
    if (!about) {
        homeSection.value = route.hash === '#aboutUs' ? 'aboutUs' : 'home'
        return
    }

    const boundary = (document.getElementById('nav')?.offsetHeight ?? 0) + 2
    const { top, bottom } = about.getBoundingClientRect()
    homeSection.value =
        top > boundary ? 'home' : bottom > boundary ? 'aboutUs' : null
}

onMounted(() => {
    window.addEventListener('scroll', updateHomeSection, { passive: true })
    window.addEventListener('resize', updateHomeSection)
    const removePageHook = nuxtApp.hook('page:finish', updateHomeSection)
    updateHomeSection()
    onUnmounted(() => {
        window.removeEventListener('scroll', updateHomeSection)
        window.removeEventListener('resize', updateHomeSection)
        removePageHook()
    })
})

const openModal = () => modal.open(ContactModal)
const openSlideover = () =>
    slideover.open(SlideMenu, { onClose: slideover.close })
const isEventsPage = computed(
    () => route.path === '/all-events' || route.path.startsWith('/events/')
)
const navbarColor = computed(() =>
    route.path === '/'
        ? 'nav-dark sticky bg-primary-950/95 text-white'
        : 'nav-light fixed bg-[#f4f2ee]/95 text-primary-950'
)
</script>

<style scoped>
.nav-link {
    @apply inline-flex min-h-10 items-center rounded-full px-3 transition-colors lg:px-4;
}

.nav-dark {
    @apply border-white/10;
}

.nav-light {
    @apply border-primary-950/10;
}

.nav-dark .nav-shell,
.nav-dark .menu-button {
    @apply border-white/15 bg-white/5;
}

.nav-light .nav-shell,
.nav-light .menu-button {
    @apply border-primary-950/15 bg-primary-950/5;
}

.nav-dark .nav-link:hover,
.nav-dark .nav-link.is-active {
    @apply bg-white/15 text-white;
}

.nav-light .nav-link:hover,
.nav-light .nav-link.is-active {
    @apply bg-primary-950 text-white;
}
</style>
