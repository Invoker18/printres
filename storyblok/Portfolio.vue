<template>
    <div
        v-editable="blok"
        id="jobs"
        class="text-primary-950 relative z-20 w-full bg-gray-200 pt-20"
    >
        <div
            class="flex flex-col flex-wrap gap-10 px-5 py-5 lg:px-10 2xl:px-28"
        >
            <div class="flex items-center gap-5">
                <div class="flex flex-col gap-5">
                    <h3
                        class="text-primary-950 hover-cursor group relative mb-3 flex w-fit items-center text-3xl lg:text-4xl"
                    >
                        {{ blok.Title }}
                        <span
                            class="absolute -bottom-0.5 right-0 mt-1 h-0.5 w-[50%] bg-secondary"
                        ></span>
                    </h3>
                    <!-- <p class="hover-cursor">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure rem animi consequatur at nulla magni?
                        Voluptatem labore impedit corrupti? Impedit assumenda
                        aliquam veniam suscipit a pariatur animi libero labore
                        dolorum!
                    </p> -->
                    <!-- <h5 class="text-xl hover-cursor">
                        Conoce nuestros trabajos de
                        {{ activeCategory.name }}
                    </h5> -->
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
                <div class="hidden max-w-32 flex-shrink-0 md:block">
                    <img :src="workShape" alt="" class="h-full w-full hover-cursor" />
                </div>
            </div>
            <div
                class="grid grid-cols-2 place-content-center items-center gap-10 gap-x-3 md:grid-cols-3 md:gap-x-10"
            >
                <div
                    class="h-48 w-full rounded-md sm:h-60"
                    v-for="work in paginatedData"
                    :key="work.id"
                >
                    <NuxtImg
                        placeholder
                        loading="lazy"
                        :src="work.filename"
                        alt=""
                        format="webp"
                        class="hover-cursor h-full w-full rounded-md object-cover hover:cursor-pointer"
                        @click="showImage(work.filename)"
                    />

                    <!-- <NuxtImg
                        placeholder
                        loading="lazy"
                        :src="work.filename"
                        alt=""
                        format="webp"
                        provider="storyblok"
                        class="h-full w-full rounded-md object-cover hover:cursor-pointer"
                        @click="showImage(`${work.filename}`)"
                    /> -->
                </div>
            </div>
            <UPagination
                class="mb-5 ml-auto"
                v-model="page"
                :total="activeWorks.length"
                :pageCount="perPage"
                :ui="{
                    wrapper: '-space-x-px',
                    base: ' dark:disabled:bg-gray-400 text-white dark:text-white dark:ring-0',
                }"
                :activeButton="{
                    color: 'coral',
                    inactiveClass: 'dark:font-bold dark:bg-primary-950 ',
                }"
                :inactiveButton="{
                    color: 'coral',
                }"
                :prevButton="{
                    color: 'coral',
                    activeClass: 'bg-secondary dark:bg-secondary',
                    inactiveClass: 'text-gray-200 dark:text-gray-200',
                }"
                :nextButton="{
                    color: 'coral',
                    activeClass: 'bg-secondary dark:bg-secondary',
                }"
            >
                <!-- <template #prev="{ onClick }">
                    <button class="rounded-full bg-secondary " @click="onClick">
                        <UIcon
                            name="i-heroicons-arrow-small-left-20-solid"
                            class="m-1 size-6 rtl:[&_span:first-child]:rotate-180"
                        >
                        </UIcon>
                    </button>
                </template>

                <template #next="{ onClick }">
                    <button class="rounded-full bg-secondary" @click="onClick">
                        <UIcon
                            name="i-heroicons-arrow-small-right-20-solid"
                            class="m-1 size-6 rtl:[&_span:last-child]:rotate-180"
                        >
                        </UIcon>
                    </button>
                </template> -->
            </UPagination>
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
                format="webp"
                alt=""
                placeholder
                class="hover-cursor h-full max-h-[42rem] w-full rounded-md object-cover"
            />
            <!-- <NuxtImg
                :src="currentImg"
                provider="storyblok"
                format="webp"
                alt=""
                placeholder
                class="h-full max-h-[42rem] w-full rounded-md object-cover"
            /> -->
        </UModal>
    </div>
</template>

<script lang="ts" setup>
import workShape from '@/assets/images/shapes/workPage.png'
const props = defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})

const { categories, fetchCategories } = useCategories()
await fetchCategories()

const page = ref(1)
const perPage = ref(6)
const activeCategory: any = ref(categories.value[0])
const currentImg = ref('')
const isOpen = ref(false)

const activeWorks: any = computed(() => {
    const data = props.blok.ImagesContainer.find(
        (value: any) => value.Category === activeCategory.value.uuid
    ).Images
    return data
})

const paginatedData = computed(() => {
    const from = page.value * perPage.value - perPage.value
    const to = page.value * perPage.value
    return activeWorks.value.slice(from, to)
})

const changeCategory = (category: any) => {
    activeCategory.value = category
    page.value = 1
}
const showImage = (url: string) => {
    currentImg.value = url
    isOpen.value = true
}
</script>

<style></style>
