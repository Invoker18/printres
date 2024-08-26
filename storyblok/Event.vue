<template>
    <div class="text-primary-950 relative z-20 min-h-screen bg-gray-200 pt-24">
        <div class="mx-auto space-y-5 px-5 py-5 pb-10 2xl:px-52">
            <div class="flex items-center justify-between gap-10">
                <div class="flex flex-col gap-3">
                    <h4 class="text-2xl">
                        {{ blok.Title }}
                    </h4>
                    <p>
                        {{ blok.Description }}
                    </p>
                </div>
                <img
                    :src="eventShape"
                    alt=""
                    class="hidden max-h-32 md:block"
                />
            </div>
            <hr class="border-primary-950 border-[1.5px]" />
            <div class="flex w-full flex-col gap-3">
                <div
                    class="flex h-full w-full flex-col gap-3 overflow-hidden md:flex-row"
                >
                    <Swiper
                        :spaceBetween="10"
                        :navigation="true"
                        @slideChange="slideChange"
                        :loop="true"
                        :thumbs="{
                            swiper: thumbsSwiper,
                        }"
                        :modules="[SwiperThumbs, SwiperNavigation, SwiperGrid]"
                        class="h-fit w-full min-w-0 rounded-md md:h-full"
                    >
                        <SwiperSlide class="space-y-3">
                            <img
                                v-if="blok.Slider && blok.Slider.length"
                                :src="blok.Slider[0].filename"
                                class="hover-cursor2 h-full max-h-[32rem] w-full select-none rounded-md object-cover"
                            />
                            <p class="hidden w-full md:block">
                                {{ blok.Slider[0].name }}
                            </p>
                        </SwiperSlide>
                        <SwiperSlide v-for="n in 10" :key="n" class="space-y-3">
                            <img
                                :src="`https://picsum.photos/1920/1080?random=${n}`"
                                class="hover-cursor2 h-full w-full select-none rounded-md object-cover"
                            />
                            <p class="hidden w-full md:block">
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Corporis, soluta nam
                                distinctio porro ullam maiores iusto iure iste
                                voluptatibus cumque quam sit alias consequuntur
                                quaerat consectetur impedit reiciendis aperiam
                                voluptas? Aut facilis deleniti animi reiciendis
                                praesentium, consequatur dolorem maxime magnam
                                illum necessitatibus.
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
                        :modules="[
                            SwiperThumbs,
                            SwiperMousewheel,
                            SwiperFreeMode,
                            SwiperNavigation,
                        ]"
                        class="grid h-full max-h-60 w-full min-w-0 grid-rows-2 overflow-auto rounded-md sm:max-h-[40rem] sm:w-[30%]"
                    >
                        <SwiperSlide v-for="n in 10" :key="n">
                            <img
                                :src="`https://picsum.photos/1920/1080?random=${n}`"
                                class="hover-cursor select-none rounded-md" /></SwiperSlide
                        ><SwiperSlide />
                    </Swiper>
                    <p class="md:hidden">
                        {{ activeIndex }}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis recusandae harum consectetur quas, labore
                        necessitatibus modi rerum fugiat unde et cupiditate
                        architecto dicta, aliquam, iusto nam? Consectetur,
                        soluta illum? Possimus.
                    </p>
                </div>
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
import eventShape from '@/assets/images/shapes/events.png'
// import required modules
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})

const { width, height } = useWindowSize()

const orientation = computed(() => {
    return width.value > 784 ? 'vertical' : 'horizontal'
})
const route = useRoute()

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
</style>
