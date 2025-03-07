<template>
    <div class="text-primary-950 relative z-20 bg-gray-200 pt-24">
        <div class="mx-auto space-y-5 px-5 py-5 pb-10 xl:px-10 2xl:px-56">
            <div class="flex items-center justify-between gap-3 md:gap-10">
                <div class="flex flex-col">
                    <h4 class="text-3xl">
                        {{ blok.Title }}
                    </h4>
                    <p class="text-sm text-gray-800">
                        {{ blok.Location }} -
                        <span class="italic">
                            {{
                                new Date(blok.Date).toLocaleString('es-ES', {
                                    dateStyle: 'long',
                                })
                            }}
                        </span>
                    </p>
                    <p class="mt-3 hidden text-gray-800 md:block">
                        {{ blok.Description }}
                    </p>
                </div>
                <NuxtImg
                    fit="inside"
                    format="webp"
                    src="/images/shapes/events.png"
                    alt="Events Shape"
                    class="hover-cursor h-[75px] w-[150px] md:h-[100px] md:w-[200px]"
                />
            </div>
            <p class="mt-3 text-gray-800 md:hidden">
                {{ blok.Description }}
            </p>

            <hr class="border-primary-950 border-[1.5px]" />
            <div class="flex flex-col gap-3 overflow-hidden md:flex-row">
                <Swiper
                    id="swiper1"
                    :spaceBetween="10"
                    @slideChange="slideChange"
                    :loop="true"
                    :zoom="true"
                    :thumbs="{
                        swiper: thumbsSwiper,
                    }"
                    :modules="[SwiperThumbs, SwiperZoom]"
                    class="w-full min-w-0 rounded-md"
                >
                    <SwiperSlide v-for="image in blok.Slider" :key="image.id">
                        <div
                            class="swiper-zoom-container rounded-md bg-gray-300"
                        >
                            <NuxtImg
                                placeholder
                                provider="storyblok"
                                :src="image.filename"
                                sizes="100vw sm:50vw md:800px xl:1200px 2xl:1400px"
                                quality="90"
                                class="hover-cursor2"
                            />
                        </div>
                        <p class="mt-3 hidden w-full text-gray-800 md:block">
                            {{ image.title }}
                        </p>
                    </SwiperSlide>
                </Swiper>
                <Swiper
                    :direction="orientation"
                    @swiper="setThumbsSwiper"
                    :grabCursor="true"
                    :freeMode="true"
                    :breakpoints="{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        784: {
                            slidesPerView: 'auto',
                            spaceBetween: 10,
                        },
                    }"
                    :navigation="true"
                    :modules="[SwiperThumbs, SwiperFreeMode, SwiperNavigation]"
                    class="grid h-full w-full min-w-0 grid-rows-2 rounded-md sm:max-h-96 md:w-[40%] lg:max-h-[32rem] 2xl:max-h-[36rem]"
                >
                    <SwiperSlide v-for="image in blok.Slider" :key="image.id">
                        <NuxtImg
                            placeholder
                            provider="storyblok"
                            quality="50"
                            :src="image.filename"
                            sizes="100vw sm:50vw md:300px xl:400px"
                            class="hover-cursor h-full max-h-36 w-full select-none rounded-md object-cover sm:max-h-40 md:max-h-56"
                        />
                    </SwiperSlide>
                </Swiper>
                <p class="md:hidden">
                    {{ blok.Slider[activeIndex].title }}
                </p>
            </div>
            <div class="flex items-center gap-3">
                <div
                    @click="$router.back()"
                    class="hover-cursor flex items-center text-3xl hover:cursor-pointer"
                >
                    <UIcon
                        name="i-ph-arrow-up-left-bold"
                        class="text-secondary"
                    ></UIcon>
                    Back
                </div>
                <hr
                    class="border-primary-950 mb-2 w-full self-end border-[1.5px]"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})

const { width } = useWindowSize()

const orientation = computed(() => {
    return width.value > 784 ? 'vertical' : 'horizontal'
})

const thumbsSwiper = ref(null)
const activeIndex = ref(0)

const slideChange = (swiper: any) => {
    activeIndex.value = swiper.realIndex
}

const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper
}

onMounted(() => {
    const prev = document.querySelectorAll('.swiper-button-prev')
    prev.forEach((item) => {
        item.classList.add('hover-cursor')
    })
    const next = document.querySelectorAll('.swiper-button-next')
    next.forEach((item) => {
        item.classList.add('hover-cursor')
    })
})
</script>

<style scoped>
:deep(.swiper-vertical .swiper-button-next),
:deep(.swiper-vertical .swiper-button-prev) {
    left: 50%;
    transform: rotate(90deg);
    transform-origin: left center;
}
:deep(.swiper-vertical .swiper-button-prev) {
    top: calc(var(--swiper-navigation-size) / 2);
}
:deep(.swiper-vertical .swiper-button-next) {
    top: auto;
    bottom: calc(var(--swiper-navigation-size) / 2);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
    @apply max-h-56;
}

#swiper1 .swiper-zoom-container {
    @apply h-[18rem] w-full cursor-zoom-in sm:h-full sm:max-h-96 lg:max-h-[32rem] 2xl:max-h-[36rem];
}

#swiper1 img {
    @apply h-[18rem] w-full cursor-zoom-in select-none object-contain sm:h-full sm:max-h-96 lg:max-h-[32rem] 2xl:max-h-[36rem];
}

.swiper-slide img {
    @apply h-64;
}

#swiper1 .swiper-slide-zoomed img {
    cursor: zoom-out;
}
</style>
