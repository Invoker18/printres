<template>
    <div class="text-primary-950 relative z-20 bg-[#f4f2ee] pt-24">
        <div class="site-container space-y-8 py-12 sm:py-16">
            <div class="flex items-center justify-between gap-3 md:gap-10">
                <div class="flex flex-col">
                    <h1
                        class="text-3xl font-semibold tracking-tight sm:text-4xl"
                    >
                        {{ blok.Title }}
                    </h1>
                    <p class="mt-2 text-sm text-gray-800">
                        {{ blok.Location }} -
                        <span class="italic">
                            {{
                                new Date(blok.Date).toLocaleString('es-ES', {
                                    dateStyle: 'long',
                                })
                            }}
                        </span>
                    </p>
                    <p class="mt-4 max-w-2xl leading-relaxed text-gray-800">
                        {{ blok.Description }}
                    </p>
                </div>
                <NuxtImg
                    fit="inside"
                    format="webp"
                    src="/images/shapes/events.png"
                    alt=""
                    class="hidden h-[75px] w-[150px] md:block md:h-[100px] md:w-[200px]"
                />
            </div>

            <hr class="border-primary-950/30" />
            <section aria-label="Galería del evento">
                <div
                    v-if="images.length"
                    class="grid gap-6 md:grid-cols-[minmax(0,1fr)_200px] lg:grid-cols-[minmax(0,1fr)_240px]"
                >
                    <div class="min-w-0">
                        <Swiper
                            id="swiper1"
                            :space-between="10"
                            :loop="images.length > 1"
                            :zoom="true"
                            :modules="[SwiperZoom]"
                            class="bg-primary-950/5 w-full min-w-0 overflow-hidden rounded-xl"
                            @swiper="setMainSwiper"
                            @slide-change="slideChange"
                            @zoom-change="zoomChange"
                        >
                            <SwiperSlide
                                v-for="(image, index) in images"
                                :key="image.id || image.filename"
                                :aria-hidden="index !== activeIndex"
                            >
                                <div class="swiper-zoom-container">
                                    <NuxtImg
                                        placeholder
                                        provider="storyblok"
                                        :src="image.filename"
                                        :alt="
                                            image.alt ||
                                            image.title ||
                                            `Imagen ${index + 1} del evento`
                                        "
                                        sizes="100vw md:800px xl:1200px 2xl:1400px"
                                        quality="90"
                                        class="hover-cursor2"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div
                            class="mt-4 flex flex-wrap items-center justify-between gap-4"
                        >
                            <div>
                                <p
                                    aria-live="polite"
                                    aria-atomic="true"
                                    class="text-sm font-semibold"
                                >
                                    Imagen {{ activeIndex + 1 }} de
                                    {{ images.length }}
                                </p>
                                <p
                                    v-if="images[activeIndex]?.title"
                                    class="mt-1 text-sm text-gray-800"
                                >
                                    {{ images[activeIndex].title }}
                                </p>
                                <p class="mt-1 text-xs text-gray-700">
                                    Doble clic o doble toque para ampliar
                                </p>
                            </div>
                            <div class="flex items-center gap-2">
                                <button
                                    type="button"
                                    :aria-label="
                                        isZoomed
                                            ? 'Reducir imagen'
                                            : 'Ampliar imagen'
                                    "
                                    :aria-pressed="isZoomed"
                                    class="gallery-control"
                                    @click="toggleZoom"
                                >
                                    <span aria-hidden="true">{{
                                        isZoomed ? '−' : '+'
                                    }}</span>
                                </button>
                                <button
                                    type="button"
                                    aria-label="Imagen anterior"
                                    :disabled="images.length < 2"
                                    class="gallery-control"
                                    @click="mainSwiper?.slidePrev()"
                                >
                                    <span aria-hidden="true">←</span>
                                </button>
                                <button
                                    type="button"
                                    aria-label="Imagen siguiente"
                                    :disabled="images.length < 2"
                                    class="gallery-control"
                                    @click="mainSwiper?.slideNext()"
                                >
                                    <span aria-hidden="true">→</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="min-w-0">
                        <p class="mb-3 text-sm font-semibold">
                            Selecciona una imagen
                        </p>
                        <div
                            ref="thumbnailList"
                            role="group"
                            aria-label="Miniaturas de la galería"
                            data-lenis-prevent
                            class="gallery-thumbnails flex w-full gap-2.5 overflow-x-auto pb-2 md:h-[28rem] md:flex-col md:overflow-y-auto md:overflow-x-hidden md:pb-0 md:pr-2"
                        >
                            <button
                                v-for="(image, index) in images"
                                :key="image.id || image.filename"
                                type="button"
                                :aria-label="`Ver imagen ${index + 1} de ${images.length}`"
                                :aria-pressed="index === activeIndex"
                                class="thumbnail-button"
                                :class="{ 'is-active': index === activeIndex }"
                                @click="showImage(index)"
                            >
                                <NuxtImg
                                    placeholder
                                    provider="storyblok"
                                    quality="50"
                                    :src="image.filename"
                                    alt=""
                                    sizes="128px md:240px"
                                    class="h-full w-full select-none object-cover"
                                />
                                <span
                                    aria-hidden="true"
                                    class="thumbnail-number"
                                    >{{ index + 1 }}</span
                                >
                            </button>
                        </div>
                    </div>
                </div>
                <p v-else class="text-gray-700">
                    No hay imágenes disponibles para este evento.
                </p>
            </section>
            <div class="flex items-center gap-4">
                <button
                    type="button"
                    class="inline-flex min-h-11 items-center gap-2 font-semibold transition-colors hover:text-coral-700"
                    @click="$router.back()"
                >
                    <span aria-hidden="true">←</span> Volver
                </button>
                <hr class="border-primary-950/30 w-full" />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Swiper as SwiperInstance } from 'swiper'

interface GalleryImage {
    id?: string | number
    filename: string
    alt?: string
    title?: string
}

const props = defineProps({
    blok: {
        type: Object,
        default: () => ({}),
    },
})

const images = computed<GalleryImage[]>(() => props.blok.Slider || [])
const mainSwiper = ref<SwiperInstance | null>(null)
const thumbnailList = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const isZoomed = ref(false)

const setMainSwiper = (swiper: SwiperInstance) => {
    mainSwiper.value = swiper
    activeIndex.value = swiper.realIndex
}

const slideChange = (swiper: SwiperInstance) => {
    activeIndex.value = swiper.realIndex
    isZoomed.value = false
}

const zoomChange = (_swiper: SwiperInstance, scale: number) => {
    isZoomed.value = scale > 1
}

const toggleZoom = () => {
    const zoom = mainSwiper.value?.zoom
    if (!zoom) return
    if (isZoomed.value) zoom.out()
    else zoom.in()
}

const showImage = (index: number) => {
    if (images.value.length > 1) mainSwiper.value?.slideToLoop(index)
}

watch(images, () => {
    activeIndex.value = 0
})

watch(activeIndex, async () => {
    await nextTick()
    const list = thumbnailList.value
    const active = list?.querySelector<HTMLElement>('[aria-pressed="true"]')
    if (!list || !active) return

    const container = list.getBoundingClientRect()
    const item = active.getBoundingClientRect()
    const left =
        item.left < container.left
            ? item.left - container.left
            : item.right > container.right
              ? item.right - container.right
              : 0
    const top =
        item.top < container.top
            ? item.top - container.top
            : item.bottom > container.bottom
              ? item.bottom - container.bottom
              : 0
    if (left || top) list.scrollBy({ left, top, behavior: 'auto' })
})
</script>

<style scoped>
#swiper1 .swiper-zoom-container {
    @apply h-72 w-full cursor-zoom-in sm:h-96 lg:h-[28rem];
}

#swiper1 img {
    @apply h-full w-full select-none object-contain;
}

#swiper1 .swiper-slide-zoomed img {
    cursor: zoom-out;
}

.gallery-control {
    @apply border-primary-950/20 text-primary-950 hover:border-primary-950 hover:bg-primary-950 inline-flex size-11 items-center justify-center rounded-full border text-lg transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-40;
}

.gallery-thumbnails {
    scrollbar-width: thin;
    scrollbar-color: #001489 transparent;
}

.thumbnail-button {
    @apply relative block h-28 w-32 shrink-0 overflow-hidden rounded-lg border-2 border-transparent opacity-70 transition-opacity hover:opacity-100 md:w-full;
}

.thumbnail-button.is-active {
    @apply border-primary-950 opacity-100;
}

.thumbnail-number {
    @apply bg-primary-950 absolute bottom-1 left-1 flex size-6 items-center justify-center rounded-full text-xs font-semibold text-white;
}
</style>
