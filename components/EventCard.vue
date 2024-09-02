<template>
    <div class="flex h-full w-full flex-col rounded-md">
        <NuxtLink
            :to="`/${slug}`"
            class="overflow-hidden rounded-md border border-gray-300"
        >
            <NuxtImg
                v-if="event.Slider && event.Slider.length"
                provider="storyblok"
                loading="lazy"
                :alt="cover.alt"
                :src="cover.filename"
                sizes="100vw sm:50vw md:400px xl:600px"
                class="hover-cursor h-48 w-full rounded-md object-cover hover:cursor-pointer md:h-60"
                quality="80"
            />
        </NuxtLink>
        <div class="truncate text-lg">
            {{ event.Title }}
        </div>
        <div class="flex flex-wrap items-center gap-x-1 text-sm text-gray-800">
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

const cover = ref(props.event.Slider[0])
</script>

<style></style>
