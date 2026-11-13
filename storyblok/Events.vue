<template>
    <div
        v-editable="blok"
        class="text-primary-950 relative z-20 bg-[#f4f2ee] pt-24"
    >
        <div class="site-container grid grid-flow-row gap-5 py-12 sm:py-16">
            <div class="grid grid-cols-3 items-center">
                <div class="col-span-full flex flex-col gap-5 md:col-span-2">
                    <h1
                        class="text-primary-950 relative flex w-fit items-center text-4xl font-semibold tracking-tight sm:mb-3 sm:text-5xl"
                    >
                        {{ blok.Title }}
                        <span
                            class="absolute -bottom-0.5 mt-1 h-0.5 w-[50%] bg-secondary sm:right-0"
                        ></span>
                    </h1>
                    <p class="max-w-2xl leading-relaxed text-gray-800">
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
            <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
                <EventCard
                    v-for="event in paginatedData"
                    :key="event.uuid"
                    :event="event.content"
                    :slug="event.full_slug"
                ></EventCard>
            </div>
            <Pagination :page="page" :total-pages="totalPages" />
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

const { events, sortedEvents, fetchEvents } = useEvents()
await fetchEvents()

const perPage = 12
const { page, totalPages } = usePageNumber(() => events.value.length, perPage)
useListingSeo(page, 'Todos los eventos')

const paginatedData = computed(() => {
    const from = (page.value - 1) * perPage
    const to = page.value * perPage
    return sortedEvents.value.slice(from, to)
})
</script>
