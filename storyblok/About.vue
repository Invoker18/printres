<template>
    <section
        id="aboutUs"
        v-editable="blok"
        class="bg-primary-950 relative z-30 overflow-hidden py-20 text-white sm:py-28"
    >
        <div
            class="site-container grid items-center gap-12 md:grid-cols-2 lg:gap-20"
        >
            <div class="max-w-2xl">
                <p
                    class="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-300"
                >
                    Conoce Printres
                </p>
                <h2 class="text-4xl font-semibold tracking-tight sm:text-5xl">
                    {{ blok.title }}
                </h2>
                <div
                    class="about-copy mt-7 space-y-5 text-base leading-relaxed text-white/85 sm:text-lg"
                >
                    <div v-html="description"></div>
                    <div v-html="description2"></div>
                </div>
            </div>

            <div
                v-if="images.length"
                class="relative mx-auto w-full min-w-0 max-w-xl md:mx-0 md:max-w-none"
            >
                <div
                    aria-hidden="true"
                    class="absolute -left-5 -top-5 z-0 size-24 rounded-tl-[3rem] bg-coral-400 sm:-left-7 sm:-top-7 sm:size-32"
                ></div>
                <div
                    aria-hidden="true"
                    class="absolute -right-5 -top-5 z-0 size-24 rounded-full bg-sky-400 sm:-right-7 sm:-top-7 sm:size-32"
                ></div>
                <!-- <div
                    aria-hidden="true"
                    class="absolute -bottom-5 -right-4 z-0 size-20 rounded-br-[2.5rem] border-[14px] border-sky-400 sm:-bottom-7 sm:-right-7 sm:size-28"
                ></div> -->

                <div
                    class="relative z-10 min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/20 sm:p-3"
                >
                    <Swiper
                        :space-between="12"
                        :loop="images.length > 1"
                        class="about-gallery min-w-0 overflow-hidden rounded-xl"
                        @swiper="setMainSwiper"
                        @slide-change="slideChange"
                    >
                        <SwiperSlide
                            v-for="(image, index) in images"
                            :key="image.id || image.filename"
                        >
                            <NuxtImg
                                provider="storyblok"
                                format="webp"
                                loading="lazy"
                                :src="image.filename"
                                :alt="
                                    image.alt ||
                                    `Equipo y proyectos de Printres, imagen ${index + 1}`
                                "
                                sizes="100vw md:50vw"
                                quality="85"
                                class="aspect-[4/3] w-full object-cover"
                            />
                        </SwiperSlide>
                    </Swiper>

                    <div
                        v-if="images.length > 1"
                        class="flex items-center justify-between gap-3 px-1 pb-1 pt-3"
                    >
                        <p
                            aria-live="polite"
                            aria-atomic="true"
                            class="text-sm font-semibold text-white/85"
                        >
                            <span class="text-coral-300">{{
                                String(activeIndex + 1).padStart(2, '0')
                            }}</span>
                            <span class="mx-1.5 text-white/35">/</span>
                            {{ String(images.length).padStart(2, '0') }}
                        </p>
                        <div class="flex items-center gap-2">
                            <button
                                type="button"
                                aria-label="Imagen anterior"
                                class="about-gallery-control"
                                @click="mainSwiper?.slidePrev()"
                            >
                                <span aria-hidden="true">←</span>
                            </button>
                            <button
                                type="button"
                                aria-label="Imagen siguiente"
                                class="about-gallery-control"
                                @click="mainSwiper?.slideNext()"
                            >
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>

                    <div
                        v-if="images.length > 1"
                        class="about-thumbnails mt-2 flex min-w-0 gap-2 overflow-x-auto px-1 pb-1"
                        aria-label="Selecciona una imagen de Printres"
                        role="group"
                    >
                        <button
                            v-for="(image, index) in images"
                            :key="`thumbnail-${image.id || image.filename}`"
                            type="button"
                            :aria-label="`Ver imagen ${index + 1} de ${images.length}`"
                            :aria-pressed="index === activeIndex"
                            class="about-thumbnail"
                            :class="[
                                imageShape(index),
                                { 'is-active': index === activeIndex },
                            ]"
                            @click="showImage(index)"
                        >
                            <NuxtImg
                                provider="storyblok"
                                format="webp"
                                :src="image.filename"
                                alt=""
                                sizes="72px sm:88px"
                                quality="55"
                                class="size-full object-cover"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper'

interface GalleryImage {
    id?: string | number
    filename: string
    alt?: string
}

const props = defineProps({
    blok: {
        type: Object,
        default: () => ({}),
    },
})

const description = computed(() => renderRichText(props.blok.Description))
const description2 = computed(() => renderRichText(props.blok.Description2))
const images = computed<GalleryImage[]>(() =>
    Array.isArray(props.blok.Slider)
        ? props.blok.Slider.filter((image: GalleryImage) =>
              Boolean(image?.filename)
          )
        : []
)
const mainSwiper = ref<SwiperInstance | null>(null)
const activeIndex = ref(0)

const setMainSwiper = (swiper: SwiperInstance) => {
    mainSwiper.value = swiper
    activeIndex.value = swiper.realIndex
}

const slideChange = (swiper: SwiperInstance) => {
    activeIndex.value = swiper.realIndex
}

const showImage = (index: number) => {
    mainSwiper.value?.slideToLoop(index)
}

const imageShapes = [
    'about-thumbnail--circle',
    'about-thumbnail--quarter',
    'about-thumbnail--triangle',
    'about-thumbnail--arch',
    'about-thumbnail--leaf',
    'about-thumbnail--rounded',
]
const imageShape = (index: number) => imageShapes[index % imageShapes.length]

watch(images, () => {
    activeIndex.value = 0
})
</script>

<style scoped>
.about-gallery-control {
    @apply hover:text-primary-950 inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-base font-semibold text-white transition-colors hover:border-coral-300 hover:bg-coral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white;
}

.about-thumbnail {
    @apply size-14 shrink-0 overflow-hidden border-2 border-transparent opacity-55 transition-all hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:size-16;
}

.about-thumbnail.is-active {
    @apply border-coral-300 opacity-100;
}

.about-thumbnail--circle {
    clip-path: circle(46% at 50% 50%);
}

.about-thumbnail--quarter {
    clip-path: inset(0 0 0 0 round 0 48% 0 0);
}

.about-thumbnail--triangle {
    clip-path: polygon(8% 100%, 100% 100%, 100% 0);
}

.about-thumbnail--arch {
    border-radius: 50% 50% 0 0;
}

.about-thumbnail--leaf {
    border-radius: 50% 0 50% 0;
}

.about-thumbnail--rounded {
    border-radius: 0 0 48% 48%;
}

.about-thumbnails {
    scrollbar-width: none;
}

.about-thumbnails::-webkit-scrollbar {
    display: none;
}
</style>
