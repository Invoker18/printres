<template>
    <footer class="bg-primary-950 relative z-50 overflow-hidden text-white">
        <div class="site-container">
            <div
                class="grid gap-10 border-t border-white/20 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12"
            >
                <div class="sm:col-span-2 lg:col-span-6">
                    <NuxtLink
                        to="/"
                        aria-label="Printres - Inicio"
                        class="inline-block"
                    >
                        <NuxtImg
                            src="/images/logoprintres.svg"
                            width="160"
                            height="50"
                            alt="Printres"
                        />
                    </NuxtLink>
                    <p
                        class="mt-5 max-w-xs text-sm leading-relaxed text-white/70"
                    >
                        Ideas que toman forma, color y vida.
                    </p>
                </div>
                <div class="lg:col-span-3">
                    <h2
                        class="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-coral-300"
                    >
                        Explorar
                    </h2>
                    <nav
                        aria-label="Navegación del pie de página"
                        class="flex flex-col items-start text-sm"
                    >
                        <NuxtLink to="/" class="footer-link">Inicio</NuxtLink>
                        <NuxtLink
                            to="/#aboutUs"
                            class="footer-link"
                            @click.prevent="goToHomeSection('aboutUs')"
                        >
                            Nosotros
                        </NuxtLink>
                        <NuxtLink :to="portfolioLink" class="footer-link"
                            >Trabajos</NuxtLink
                        >
                        <NuxtLink
                            :to="{ path: '/all-events', query: { page: 1 } }"
                            class="footer-link"
                        >
                            Eventos
                        </NuxtLink>
                        <NuxtLink
                            to="/#contactContainer"
                            class="footer-link"
                            @click.prevent="goToHomeSection('contactContainer')"
                        >
                            Contacto y ubicación
                        </NuxtLink>
                    </nav>
                </div>
                <div class="lg:col-span-3">
                    <h2
                        class="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-coral-300"
                    >
                        Conectemos
                    </h2>
                    <SocialLinks stacked include-whatsapp />
                </div>
            </div>
            <div
                class="flex flex-col gap-2 border-t border-white/20 py-6 pr-16 text-xs text-white/60 sm:flex-row sm:justify-between sm:pr-20"
            >
                <span
                    >© {{ year }} Printres. Todos los derechos
                    reservados.</span
                >
                <span>Diseño Miranda Jugo.</span>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import { ContactModal } from '#components'

const modal = useModal()
const { goToHomeSection } = useHomeNavigation()
const { categories } = useCategories()
const year = new Date().getFullYear()
const openModal = () => modal.open(ContactModal)
const portfolioLink = computed(() => ({
    path: '/portfolio',
    query: { category: categories.value[0]?.uuid, page: 1 },
}))
</script>

<style scoped>
.footer-link {
    @apply inline-flex min-h-10 items-center text-white/80 transition-colors hover:text-white;
}
</style>
