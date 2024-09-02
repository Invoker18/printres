<template>
    <div
        v-editable="blok"
        class="text-primary-950 relative z-20 bg-gray-200 pt-24"
    >
        <div
            class="grid grid-flow-row gap-3 px-5 py-5 lg:px-10 lg:pb-10 2xl:px-28"
        >

            <div class="grid grid-cols-3 items-center">
                <div class="col-span-full flex flex-col gap-5 md:col-span-2">
                    <h3
                        class="text-primary-950 hover-cursor group relative flex w-fit items-center text-3xl sm:mb-3 lg:text-4xl"
                    >
                        {{ blok.Title }}
                        <span
                            class="absolute -bottom-0.5 mt-1 h-0.5 w-[50%] bg-secondary sm:right-0"
                        ></span>
                    </h3>
                    <p class="hover-cursor text-gray-800">
                        {{ blok.Description }}
                    </p>
                </div>
                <div class="mx-auto 2xl:mx-0 2xl:ml-auto">
                    <NuxtImg
                        format="webp"
                        src="/images/shapes/workPage.png"
                        alt=""
                        width="125"
                        height="200"
                        fit="inside"
                        class="hover-cursor hidden flex-shrink-0 md:block lg:hidden"
                    />
                    <NuxtImg
                        format="webp"
                        src="/images/shapes/eventsShape.png"
                        alt=""
                        width="250"
                        height="150"
                        fit="inside"
                        class="hover-cursor hidden flex-shrink-0 lg:block"
                    />
                </div>
            </div>

            <hr class="border-primary-950 my-5 border-[1.5px]" />
            <div
                class="grid grid-cols-2 place-content-center items-center gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4"
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
