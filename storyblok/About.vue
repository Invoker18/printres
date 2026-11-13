<template>
    <section
        id="aboutUs"
        v-editable="blok"
        class="bg-primary-950 relative z-30 py-20 text-white sm:py-28"
    >
        <div
            class="site-container grid items-center gap-12 md:grid-cols-2 lg:gap-20"
        >
            <div class="max-w-2xl">
                <p
                    class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-300"
                >
                    Conoce Printres
                </p>
                <h2 class="text-4xl font-semibold tracking-tight sm:text-5xl">
                    {{ blok.title }}
                </h2>
                <div
                    class="about-copy mt-7 space-y-5 text-base leading-relaxed text-white/85 sm:text-lg"
                >
                    <div v-html="description"></div>
                    <div v-html="description2"></div>
                </div>
            </div>
            <div v-if="blok.Slider?.[0]?.filename" class="relative">
                <div
                    class="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[3rem] bg-secondary sm:-left-5 sm:-top-5"
                ></div>
                <NuxtImg
                    provider="storyblok"
                    format="webp"
                    loading="lazy"
                    :src="blok.Slider[0].filename"
                    :alt="blok.Slider[0].alt || ''"
                    sizes="100vw md:50vw"
                    class="relative aspect-[4/3] w-full rounded-xl object-cover"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({ blok: { type: Object, default: () => ({}) } })
const description = computed(() => renderRichText(props.blok.Description))
const description2 = computed(() => renderRichText(props.blok.Description2))
</script>
