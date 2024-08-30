<template>
    <div
        v-if="blok"
        v-editable="blok"
        id="jobs"
        class="text-primary-950 relative z-20 h-full w-full bg-gray-200 pt-24"
    >
        <div
            class="flex flex-col flex-wrap gap-10 px-5 py-5 lg:px-10 2xl:px-28"
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non saepe dolorum neque similique adipisci quo eveniet
                        nihil laboriosam optio a, ad vel pariatur facere
                        repellendus, nemo iste nam qui expedita! Officia
                        praesentium expedita neque omnis minima dolore quas
                        corporis aliquid laudantium accusantium deleniti nobis
                        quos, rem corrupti facilis nulla ullam voluptatem nam
                        unde possimus fugiat, eum porro. Ab, veritatis
                        voluptate.
                    </p>
                    <ul class="flex flex-wrap gap-3 sm:gap-5">
                        <li
                            @click="changeCategory(category)"
                            v-for="category in categories"
                            :key="category.id"
                            class="hover-cursor flex gap-1 rounded-full px-3 py-1.5 transition-all duration-300 ease-linear hover:cursor-pointer"
                            :class="
                                activeCategory.uuid === category.uuid
                                    ? 'bg-curious-blue-500 text-white shadow-inner shadow-curious-blue-800'
                                    : 'border-primary-950 border'
                            "
                        >
                            <p>{{ category.name }}</p>
                        </li>
                    </ul>
                    <!-- <p class="hover-cursor text-gray-800">
                        {{ activeCategory.content.Description }}
                    </p> -->
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
            <hr class="border-primary-950 border-[1.5px]" />

            <div
                class="grid grid-cols-2 place-content-center items-center gap-3 sm:gap-5 md:grid-cols-3 2xl:grid-cols-4"
            >
                <NuxtImg
                    v-for="work in paginatedData"
                    :key="work.id"
                    :src="work.filename"
                    provider="storyblok"
                    :alt="work.alt"
                    placeholder
                    width="600"
                    height="400"
                    sizes="100vh sm:50vw md:400px xl:600px"
                    format="webp"
                    quality="80"
                    class="hover-cursor rounded-md object-cover hover:cursor-pointer"
                    @click="showImage(work)"
                />
            </div>
            <UPagination
                id="pagination"
                :to="
                    (page: number) => ({
                        query: { category: route.query.category, page: page },
                    })
                "
                :max="5"
                v-model="page"
                :page-count="perPage"
                :total="activeWorks.length"
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
        <UModal
            :transition="false"
            :ui="{
                container: 'items-center backdrop-blur-sm',
                width: 'w-full max-w-xl sm:max-w-xl md:max-w-screen-md lg:max-w-screen-lg',
                padding: 'sm:p-4 md:p-8',
                shadow: 'shadow-xl shadow-gray-800',
            }"
            v-model="isOpen"
        >
            <NuxtImg
                loading="lazy"
                :src="currentImg.filename"
                provider="storyblok"
                format="webp"
                alt=""
                width="1024"
                height="768"
                placeholder
                class="hover-cursor max-h-[40rem] rounded-md object-cover"
            />
            <span class="p-2">{{
                currentImg.alt.length ? currentImg.alt : 'Title'
            }}</span>
        </UModal>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})

const route: any = useRoute()
const router: any = useRouter()
const { categories, fetchCategories }: any = useCategories()
await fetchCategories()

const page = ref<number>(+route.query.page)
const perPage = ref(16)
const currentImg: any = ref({})
const isOpen = ref(false)

const activeWorks = computed(() => {
    const data = props.blok.Categories.find(
        (value: any) => value.Category === route.query.category
    )
    return data.ImagesContainer
})

const totalPages = computed(() => {
    return Math.ceil(activeWorks.value.length / perPage.value)
})

const activeCategory: any = computed(() => {
    return categories.value.find((category: any) => {
        return category.uuid === route.query.category
    })
})

const paginatedData = computed(() => {
    const from = route.query.page * perPage.value - perPage.value
    const to = route.query.page * perPage.value
    return activeWorks.value?.slice(from, to)
})

const changeCategory = (category: any) => {
    page.value = 1
    router.push({
        path: router.path,
        query: { category: category.uuid, page: 1 },
    })
}
const showImage = (img: object) => {
    currentImg.value = img
    isOpen.value = true
}

const prev = () => {
    if (page.value === 1) {
        return
    } else {
        page.value--
    }
    router.push({
        path: router.path,
        query: {
            category: route.query.category,
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
            category: route.query.category,
            page: page.value,
        },
    })
}
</script>

<style>
#pagination {
    @apply ml-auto;
}

#pagination button {
    @apply bg-curious-blue-500 [&:nth-last-child(1)]:ml-2;
}

#pagination a {
    @apply [&:nth-child(2)]:rounded-s-md [&:nth-last-child(2)]:rounded-e-md;
}
</style>
