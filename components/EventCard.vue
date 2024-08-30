<template>
    <div class="flex h-full w-full flex-col gap-1 rounded-md">
        <NuxtLink
            :to="`/${slug}`"
            class="overflow-hidden rounded-md border border-gray-300"
        >
            <!-- :src="`https://picsum.photos/1920/1080?random=${event?.id}`" -->

            <NuxtImg
                v-if="event.Slider && event.Slider.length"
                provider="storyblok"
                loading="lazy"
                :alt="cover.alt"
                :src="cover.filename"
                width="500"
                height="300"
                sizes="100vw sm:50vw md:400px xl:600px"
                quality="80"
                class="hover-cursor object-cover"
            />
        </NuxtLink>

        <div class="grid w-full grid-cols-2">
            <div class="col-span-full flex items-center gap-3 text-lg">
                <div class="truncate">
                    {{ event.Title }}
                </div>

                <div class="ml-auto flex-shrink-0 text-sm text-gray-800">
                    {{
                        new Date(event.Date).toLocaleString('es-ES', {
                            dateStyle: 'medium',
                        })
                    }}
                </div>
            </div>
            <div class="truncate text-sm text-gray-800">
                {{ event.Location }}
            </div>
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
