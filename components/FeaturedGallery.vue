<template>
    <div v-if="images.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <figure
            v-for="image in images"
            :key="image.id || image.filename"
            class="min-w-0"
        >
            <NuxtLink
                :to="to"
                :aria-label="linkLabel"
                class="bg-primary-950/5 group block overflow-hidden rounded-xl"
            >
                <NuxtImg
                    provider="storyblok"
                    format="webp"
                    loading="lazy"
                    :src="image.filename"
                    :alt="image.alt || ''"
                    sizes="100vw sm:50vw lg:33vw"
                    class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
            </NuxtLink>
            <figcaption
                v-if="image.title"
                class="text-primary-950/75 mt-3 text-sm font-medium"
            >
                {{ image.title }}
            </figcaption>
        </figure>
    </div>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface FeaturedImage {
    id?: string | number
    filename: string
    alt?: string
    title?: string
}

const props = defineProps<{
    first?: FeaturedImage[]
    second?: FeaturedImage[]
    to: RouteLocationRaw
    linkLabel: string
}>()

const images = computed(() => {
    const candidates = [
        ...(props.first || []).slice(0, 2),
        ...(props.second || []),
        ...(props.first || []).slice(2),
    ]
    const seen = new Set<string>()
    return candidates
        .filter((image) => {
            if (!image?.filename || seen.has(image.filename)) return false
            seen.add(image.filename)
            return true
        })
        .slice(0, 3)
})
</script>
