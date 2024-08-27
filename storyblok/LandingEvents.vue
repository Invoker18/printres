<template>
    <section
        v-editable="blok"
        id="events"
        class="text-primary-950 relative z-40 h-full bg-[#D9D9D9]"
    >
        <div class="h-full w-full px-5 pb-20 pt-12 md:pb-28 lg:px-10 2xl:px-28">
            <div
                class="mt-8 grid h-full w-full grid-cols-1 gap-5 text-[#010C4A] md:grid-cols-2 lg:gap-10 2xl:gap-32"
            >
                <div class="hidden flex-col gap-5 md:flex">
                    <Swiper
                        :modules="[SwiperPagination, SwiperAutoplay]"
                        class="h-full max-h-80 w-full min-w-0 rounded-md lg:max-h-96 2xl:max-h-[26rem]"
                        :loop="true"
                        :autoplay="true"
                        :pagination="{
                            el: '.custom-pagination4',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return `<span class='${className}'></span>`
                            },
                        }"
                        :lazy="true"
                    >
                        <SwiperSlide
                            v-for="image in blok.Slider1"
                            :key="image.id"
                            class="h-full min-h-60"
                        >
                            <NuxtImg
                                loading="lazy"
                                provider="storyblok"
                                :src="image.filename"
                                :alt="image.alt"
                                sizes="100vw sm:50vw md:600px xl:800px"
                                class="hover-cursor h-full w-full object-cover"
                            />
                            <div
                                class="swiper-lazy-preloader swiper-lazy-preloader-white"
                            ></div>
                        </SwiperSlide>
                    </Swiper>

                    <div
                        class="flex w-full flex-col items-start justify-between lg:flex-row"
                    >
                        <div class="flex flex-shrink-0 items-center gap-5">
                            <div
                                class="border-primary-950 hover-cursor flex size-10 shrink-0 grow-0 items-center justify-center rounded-full border hover:cursor-pointer"
                            >
                                <UIcon
                                    name="i-ph-arrow-up-left-bold"
                                    class="text-primary-950 size-6 group-hover:block"
                                ></UIcon>
                            </div>
                            <div
                                class="custom-pagination4 hover-cursor w-full"
                            ></div>
                        </div>
                        <div class="max-w-full self-center">
                            <NuxtImg
                                src="/images/shapes/eventsShape.png"
                                id="shape"
                                alt=""
                                class="hover-cursor max-h-40 object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-5 text-right">
                    <div class="flex items-center justify-between gap-5">
                        <div class="max-w-full md:hidden">
                            <NuxtImg
                                src="/images/shapes/projectsShape.png"
                                id="shape"
                                alt=""
                                class="hover-cursor max-h-20 object-cover"
                            />
                        </div>
                        <button class="ml-auto">
                            <h3
                                class="hover-cursor text-primary-950 group relative flex w-fit items-center text-3xl lg:text-4xl"
                            >
                                <UIcon
                                    name="i-ph-arrow-up-left-bold"
                                    class="self-end text-secondary group-hover:block"
                                ></UIcon>
                                {{ blok.Title }}
                                <span
                                    class="absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%] bg-secondary"
                                ></span>
                            </h3>
                        </button>
                    </div>
                    <p class="hover-cursor text-pretty">
                        {{ blok.Description }}
                    </p>
                    <Swiper
                        :modules="[SwiperPagination, SwiperAutoplay]"
                        class="h-full max-h-80 w-full min-w-0 rounded-md lg:max-h-96 2xl:max-h-[26rem]"
                        :loop="true"
                        :autoplay="true"
                        :pagination="{
                            el: '.custom-pagination5',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return `<span class='${className}'></span>`
                            },
                        }"
                        :lazy="true"
                    >
                        <SwiperSlide
                            v-for="image in blok.Slider2"
                            :key="image.id"
                            class="h-full min-h-60"
                        >
                            <NuxtImg
                                loading="lazy"
                                provider="storyblok"
                                :src="image.filename"
                                :alt="image.alt"
                                sizes="100vw sm:50vw md:600px xl:800px"
                                class="hover-cursor h-full w-full object-cover"
                            />
                            <div
                                class="swiper-lazy-preloader swiper-lazy-preloader-white"
                            ></div>
                        </SwiperSlide>
                    </Swiper>
                    <div class="custom-pagination5 hover-cursor"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})
</script>

<style scoped>
:deep(.swiper-pagination-bullet-active) {
    @apply bg-secondary text-primary opacity-100 !important;
}
:deep(.swiper-pagination-bullet) {
    @apply bg-primary-950 size-2 rounded-tl-full opacity-100 xl:size-3;
}

:deep(.swiper-pagination-bullet:nth-child(2n-1)) {
    @apply rounded-full !important;
}

:deep(.swiper-pagination-bullet:nth-child(3n-2)) {
    @apply rounded-sm !important;
}

:deep(.swiper-pagination) {
    @apply flex justify-start;
}

.custom-pagination3 {
    @apply flex justify-end !important;
}
</style>
