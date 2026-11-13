<template>
    <USlideover
        :ui="{
            width: 'max-w-none',
            background: 'bg-primary-950 dark:bg-primary-950',
        }"
    >
        <div
            class="flex h-full flex-col overflow-y-auto p-5 pb-10 text-white sm:px-10"
        >
            <div class="flex items-center justify-between">
                <NuxtImg
                    src="/images/logoprintres.svg"
                    width="120"
                    height="50"
                    alt="Printres"
                />
                <button
                    type="button"
                    aria-label="Cerrar menú"
                    class="flex size-11 items-center justify-center rounded-full"
                    @click="slideover.close()"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="size-7"
                    >
                        <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </button>
            </div>
            <nav aria-label="Navegación móvil" class="mt-10">
                <ul class="flex flex-col text-3xl font-medium sm:text-4xl">
                    <li>
                        <NuxtLink
                            to="/"
                            class="mobile-link"
                            @click.prevent="goTo('home')"
                            >Inicio</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            to="/#aboutUs"
                            class="mobile-link"
                            @click.prevent="goTo('aboutUs')"
                            >Nosotros</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            :to="portfolioLink"
                            class="mobile-link"
                            @click="slideover.close()"
                            >Trabajos</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            :to="{ path: '/all-events', query: { page: 1 } }"
                            class="mobile-link"
                            @click="slideover.close()"
                            >Eventos</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink
                            to="/#contactContainer"
                            class="mobile-link"
                            @click.prevent="goTo('contactContainer')"
                            >Contacto</NuxtLink
                        >
                    </li>
                </ul>
            </nav>
            <div class="mt-auto pt-10">
                <SocialLinks />
            </div>
        </div>
    </USlideover>
</template>

<script lang="ts" setup>
const { categories } = useCategories()
const slideover = useSlideover()
const { goToHomeSection } = useHomeNavigation()
const portfolioLink = computed(() => ({
    path: '/portfolio',
    query: { category: categories.value[0]?.uuid, page: 1 },
}))

const goTo = async (section: 'home' | 'aboutUs' | 'contactContainer') => {
    slideover.close()
    await goToHomeSection(section)
}
</script>

<style scoped>
.mobile-link {
    @apply flex min-h-11 w-full items-center border-b border-white/20 py-5 transition-colors hover:text-secondary;
}
</style>
