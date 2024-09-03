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
                    v-for="event in paginatedData"
                    :key="event.uuid"
                    :event="event.content"
                    :slug="event.full_slug"
                ></EventCard>
            </div>
            <UPagination
                id="pagination2"
                :to="
                    (page: number) => ({
                        query: { page: page },
                    })
                "
                :max="5"
                v-model="page"
                :page-count="perPage"
                :total="events.length"
                class="ml-auto"
                :active-button="{
                    color: 'curious-blue',
                    class: 'text-gray-200 dark:text-gray-200 font-bold',
                }"
                :inactive-button="{
                    color: 'primary',
                    activeClass:
                        'dark:bg-primary-950 dark:hover:bg-curious-blue-400',
                    class: 'text-gray-200 dark:text-gray-200',
                }"
            >
                <template #prev="{ onClick }">
                    <UButton
                        icon="i-heroicons-arrow-small-left-20-solid"
                        color="primary"
                        variant="solid"
                        :ui="{
                            rounded: 'rounded-full',
                            variant: {
                                solid: 'bg-curious-blue-500 dark:bg-curious-blue-500 text-gray-200 dark:text-gray-200',
                            },
                        }"
                        class="mr-2 rtl:[&_span:first-child]:rotate-180"
                        @click="prev()"
                    />
                </template>
                <template #next="{ onClick }">
                    <UButton
                        icon="i-heroicons-arrow-small-right-20-solid"
                        color="primary"
                        variant="solid"
                        :ui="{
                            rounded: 'rounded-full',
                            variant: {
                                solid: 'bg-curious-blue-500 dark:bg-curious-blue-500 text-gray-200 dark:text-gray-200',
                            },
                        }"
                        class="rtl:[&_span:last-child]:rotate-180"
                        @click="next()"
                    />
                </template>
            </UPagination>
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

const route: any = useRoute()
const router: any = useRouter()

const page = ref<number>(+route.query.page)
const perPage = ref(16)

const totalPages = computed(() => {
    return Math.ceil(events.value.length / perPage.value)
})

const paginatedData = computed(() => {
    const from = route.query.page * perPage.value - perPage.value
    const to = route.query.page * perPage.value
    return events.value?.slice(from, to)
})

const prev = () => {
    if (page.value === 1) {
        return
    } else {
        page.value--
    }
    router.push({
        path: router.path,
        query: {
            page: page.value,
        },
    })
}

const next = () => {
    if (page.value === totalPages.value) {
        return
    } else {
        page.value++
    }
    router.push({
        path: router.path,
        query: {
            page: page.value,
        },
    })
}
</script>

<style>
#pagination2 {
    @apply ml-auto;
}

#pagination2 button {
    @apply bg-curious-blue-500 [&:nth-last-child(1)]:ml-2;
}

#pagination2 a {
    @apply [&:nth-child(2)]:rounded-s-md [&:nth-last-child(2)]:rounded-e-md;
}
</style>
