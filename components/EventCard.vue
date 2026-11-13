<template>
    <div class="flex h-full w-full flex-col">
        <NuxtLink
            :to="`/${slug}`"
            :aria-label="`Ver evento: ${event.Title}`"
            class="bg-primary-950/5 group overflow-hidden rounded-xl"
        >
            <NuxtImg
                v-if="cover?.filename"
                provider="storyblok"
                loading="lazy"
                :alt="cover.alt || `Proyecto ${event.Title} de Printres`"
                :src="cover.filename"
                sizes="100vw sm:50vw md:400px xl:600px"
                class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                quality="80"
            />
            <div
                v-else
                class="text-primary-950/60 flex aspect-[4/3] items-center justify-center text-sm"
            >
                Sin imagen
            </div>
        </NuxtLink>
        <NuxtLink
            :to="`/${slug}`"
            class="mt-4 text-lg font-semibold leading-snug hover:text-coral-700"
        >
            {{ event.Title }}
        </NuxtLink>
        <div
            class="mt-1 flex flex-wrap items-center gap-x-1 text-sm text-gray-800"
        >
            {{ event.Location }}
            -
            <span class="italic">
                {{
                    new Date(event.Date).toLocaleString('es-ES', {
                        dateStyle: 'medium',
                    })
                }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    event: {
        type: Object,
        default: () => {},
    },
    slug: String,
})

const cover = computed(() => props.event?.Slider?.[0])
</script>

<style></style>
