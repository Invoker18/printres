<template>
    <div class="flex h-full w-full flex-col gap-2 rounded-md">
        <NuxtLink
            :to="`/${slug}`"
            class="h-48 overflow-hidden rounded-md border border-gray-300 lg:h-72"
        >
            <!-- :src="`https://picsum.photos/1920/1080?random=${event?.id}`" -->

            <img
                v-if="event.Slider && event.Slider.length"
                loading="lazy"
                alt=""
                :src="event.Slider[0].filename"
                class="hover-cursor h-full w-full object-cover"
            />
        </NuxtLink>
        

        <div class="grid w-full grid-cols-2 gap-2">
            <div class="col-span-full text-lg">{{ event.Title }}</div>
            <div class="text-gray-800">{{ event.Location }}</div>
            <div class="text-gray-800">{{ event.Date }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    event: {
        type: Object,
        default: () => {},
    },
    slug: String,
})
</script>

<style></style>
