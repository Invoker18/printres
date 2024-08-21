<template>
    <div
        v-editable="blok"
        class="text-primary-950 relative z-20 min-h-screen bg-gray-200 pt-24"
    >
        <div
            class="grid grid-flow-row gap-3 px-5 py-5 lg:px-10 lg:pb-10 2xl:px-28"
        >
            <div class="flex">
                <div class="flex flex-col gap-3">
                    <h3
                        class="hover-cursor text-primary-950 group relative col-span-full flex w-fit items-center text-3xl lg:text-4xl"
                    >
                        {{ blok.Title }}
                        <span
                            class="absolute -bottom-0.5 right-0 mt-1 h-0.5 w-[50%] bg-secondary"
                        ></span>
                    </h3>
                    <p>
                        {{ blok.Description }}
                    </p>
                </div>
                <img
                    :src="eventShape"
                    alt=""
                    class="ml-auto hidden max-h-32 md:block"
                />
            </div>

            <hr class="border-primary-950 my-5 border-[1.5px]" />
            <div
                class="grid grid-cols-2 place-content-center items-center gap-10 gap-x-3 md:grid-cols-3 md:gap-x-10"
            >
                <EventCard
                    v-for="event in events"
                    :key="event.uuid"
                    :event="event.content"
                    :slug="event.full_slug"
                ></EventCard>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import eventShape from '@/assets/images/shapes/events.png'

defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})

const { events, fetchEvents } = useEvents()
await fetchEvents()
</script>

<style></style>
