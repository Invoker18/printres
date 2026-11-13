<template>
    <section
        id="projects"
        v-editable="blok"
        class="text-primary-950 relative z-40 bg-[#f4f2ee] py-20 sm:py-28"
    >
        <div class="site-container">
            <div
                class="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
            >
                <div class="max-w-2xl">
                    <p
                        class="text-primary-950/60 mb-4 text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        Lo que hacemos
                    </p>
                    <h2
                        class="text-4xl font-semibold tracking-tight sm:text-5xl"
                    >
                        {{ blok.Title }}
                    </h2>
                    <p
                        class="text-primary-950/80 mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
                    >
                        {{ blok.description }}
                    </p>
                </div>
                <NuxtLink
                    to="/portfolio"
                    class="inline-flex min-h-11 w-fit items-center gap-3 border-b-2 border-secondary py-2 font-semibold transition-colors hover:text-coral-700"
                >
                    Ver todos los trabajos
                    <span aria-hidden="true" class="text-xl">↗</span>
                </NuxtLink>
            </div>
            <FeaturedGallery
                :first="blok.Slider1"
                :second="blok.Slider2"
                to="/portfolio"
                link-label="Ver todos los trabajos"
            />
        </div>
    </section>
</template>

<script setup>
defineProps({ blok: { type: Object, default: () => ({}) } })
</script>
