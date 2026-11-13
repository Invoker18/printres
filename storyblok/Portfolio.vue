<template>
    <div
        v-editable="blok"
        class="text-primary-950 relative z-20 h-full w-full bg-[#f4f2ee] pt-24"
    >
        <div class="site-container flex flex-col gap-10 py-12 sm:py-16">
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
            <hr class="border-primary-950 border-[1.5px]" />

            <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
                <button
                    v-for="work in paginatedData"
                    :key="work.id"
                    type="button"
                    :aria-label="
                        work.alt
                            ? `Ampliar imagen: ${work.alt}`
                            : 'Ampliar imagen del trabajo'
                    "
                    class="bg-primary-950/5 group overflow-hidden rounded-xl"
                    @click="showImage(work)"
                >
                    <NuxtImg
                        :src="work.filename"
                        provider="storyblok"
                        :alt="work.alt || ''"
                        :placeholder="[50, 25, 10, 5]"
                        sizes="100vw sm:50vw md:33vw"
                        format="webp"
                        quality="80"
                        class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none"
                    />
                </button>
            </div>
            <Pagination :page="page" :total-pages="totalPages" />
        </div>
        <UModal
            :transition="false"
            :ui="{
                container: 'items-center sm:items-center  backdrop-blur-sm',
                padding: 'sm:p-16',
                width: 'w-auto sm:max-w-screen-lg',
                shadow: 'shadow-xl shadow-gray-800',
                background: 'dark:bg-gray-300 bg-gray-300',
            }"
            v-model="isOpen"
        >
            <NuxtImg
                @load="imageIsLoaded = true"
                loading="lazy"
                :src="currentImg.filename"
                provider="storyblok"
                format="webp"
                :alt="currentImg.alt"
                width="1280"
                height="720"
                quality="100"
                class="hover-cursor max-h-[60vh] w-full rounded-md object-contain"
            />
            <span
                v-if="imageIsLoaded && currentImg.alt?.length"
                class="absolute w-full bg-gray-900/70 p-2 text-center text-xl"
                >{{ currentImg.alt.length ? currentImg.alt : 'Titulo' }}</span
            >
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

const imageIsLoaded = ref(false)

const perPage = 12
const { page, totalPages } = usePageNumber(
    () => props.blok.images?.length ?? 0,
    perPage
)
useListingSeo(page, 'Trabajos de impresión y proyectos')
const currentImg: any = ref({})
const isOpen = ref(false)

const paginatedData = computed(() => {
    const from = (page.value - 1) * perPage
    const to = page.value * perPage
    return props.blok.images?.slice(from, to)
})

const showImage = (img: object) => {
    currentImg.value = img
    isOpen.value = true
}

watch(isOpen, () => {
    if (!isOpen.value) imageIsLoaded.value = false
})
</script>
