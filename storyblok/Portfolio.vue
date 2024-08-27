<template>
    <div
        v-if="blok"
        v-editable="blok"
        id="jobs"
        class="text-primary-950 relative z-20 h-full w-full bg-gray-200 pt-20"
    >
        <div class="flex flex-col flex-wrap gap-5 px-5 py-5 lg:px-10 2xl:px-28">
            <div class="flex items-center gap-5">
                <div class="flex flex-col gap-3">
                    <h3
                        class="text-primary-950  hover-cursor group relative mb-3 flex w-fit items-center text-3xl lg:text-4xl"
                    >
                        {{ blok.Title }}
                        <span
                            class="absolute -bottom-0.5 right-0 mt-1 h-0.5 w-[50%] bg-secondary"
                        ></span>
                    </h3>
                    <ul class="flex flex-wrap gap-3 sm:gap-5">
                        <li
                            @click="changeCategory(category)"
                            v-for="category in categories"
                            :key="category.id"
                            class="border-primary-950 hover-cursor flex gap-1 rounded-full border px-3 py-1.5 transition-all duration-300 ease-linear hover:cursor-pointer"
                            :class="
                                activeCategory.uuid === category.uuid
                                    ? 'bg-primary-950 text-white'
                                    : ''
                            "
                        >
                            <p>{{ category.name }}</p>
                        </li>
                    </ul>
                    <p class="hover-cursor">
                        {{ activeCategory.content.Description }}
                    </p>
                </div>
                <div class="ml-auto hidden max-w-24 flex-shrink-0 md:block">
                    <NuxtImg
                        src="/images/shapes/workPage.png"
                        alt=""
                        width="200"
                        height="200"
                        fit="outside"
                        class="hover-cursor"
                    />
                </div>
            </div>
            <div
                class="grid grid-cols-2 place-content-center items-center gap-3 sm:gap-5 md:grid-cols-3 xl:grid-cols-4"
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
                    @click="showImage(work.filename)"
                />
            </div>
            <ul
                class="hover-cursor ml-auto flex w-fit items-center rounded-md text-gray-200"
            >
                <NuxtLink
                    @click.native="prev()"
                    class="flex items-center rounded-l-md bg-secondary px-1.5 py-1.5"
                    :class="
                        +route.query.page === 1
                            ? 'cursor-not-allowed'
                            : 'cursor-pointer'
                    "
                >
                    <UIcon
                        name="i-heroicons-arrow-small-left-20-solid"
                        class="size-6"
                    >
                    </UIcon>
                </NuxtLink>
                <NuxtLink
                    v-for="page in totalPages"
                    :to="{
                        path: router.path,
                        query: {
                            category: route.query.category,
                            page: page,
                        },
                    }"
                    class="border-r border-coral-500 p-3 py-1.5 outline-2"
                    :class="[
                        route.query.page == page
                            ? 'bg-coral-500'
                            : 'bg-secondary',
                        { 'border-l': page === 1 },
                    ]"
                >
                    {{ page }}
                </NuxtLink>
                <NuxtLink
                    @click.native="next()"
                    class="flex items-center rounded-r-md bg-secondary px-1.5 py-1.5"
                    :class="
                        +route.query.page === totalPages
                            ? 'cursor-not-allowed'
                            : 'cursor-pointer'
                    "
                >
                    <UIcon
                        name="i-heroicons-arrow-small-right-20-solid"
                        class="size-6"
                    >
                    </UIcon>
                </NuxtLink>
            </ul>
        </div>
        <UModal
            :transition="false"
            :ui="{
                container: 'items-center',
                width: 'w-full max-w-xl sm:max-w-xl md:max-w-screen-md lg:max-w-screen-lg',
                padding: 'sm:p-4 md:p-8',
                shadow: 'shadow-xl shadow-gray-800',
            }"
            v-model="isOpen"
        >
            <NuxtImg
                loading="lazy"
                :src="currentImg"
                provider="storyblok"
                format="webp"
                alt=""
                width="1024"
                height="768"
                placeholder
                class="hover-cursor max-h-[40rem] rounded-md object-cover"
            />
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

const { width } = useWindowSize()

const route: any = useRoute()
const router: any = useRouter()
const { categories, fetchCategories }: any = useCategories()
await fetchCategories()

// const page = ref<number>(route.query.page)
// const queryCategory = ref(route.query.category)
const perPage = ref(6)
const currentImg = ref('')
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

const prev = () => {
    if (+route.query.page === 1) return
    router.push({
        path: router.path,
        query: {
            category: route.query.category,
            page: +route.query.page - 1,
        },
    })
}

const next = () => {
    if (+route.query.page === totalPages.value) return
    router.push({
        path: router.path,
        query: {
            category: route.query.category,
            page: +route.query.page + 1,
        },
    })
}

const paginatedData = computed(() => {
    const from = route.query.page * perPage.value - perPage.value
    const to = route.query.page * perPage.value
    return activeWorks.value?.slice(from, to)
})

const changeCategory = (category: any) => {
    router.push({
        path: router.path,
        query: { category: category.uuid, page: 1 },
    })
}
const showImage = (url: string) => {
    currentImg.value = url
    isOpen.value = true
}

watch(width, () => {
    if (width.value > 1280) perPage.value = 8
    else perPage.value = 6
})

onMounted(() => {
    if (width.value > 1280) perPage.value = 8
    else perPage.value = 8

    if (totalPages.value < route.query.page) {
        router.push({
            path: router.path,
            query: { category: route.query.category, page: 1 },
        })
    }
})
</script>

<style></style>
