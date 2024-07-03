<template>
    <section
        id="events"
        class="h-full z-30 relative bg-[#D9D9D9] text-primary-950"
    >
        <div class="w-full h-full py-10 md:pb-16 px-5 lg:px-10 2xl:px-20">
            <div
                class="grid grid-cols-1 md:grid-cols-2 mt-8 w-full h-full gap-5 lg:gap-10 xl:gap-32 text-[#010C4A]"
            >
                <div class="md:flex flex-col gap-8 hidden">
                    <Swiper
                        :modules="[SwiperPagination, SwiperAutoplay]"
                        class="h-full w-full min-w-0 rounded-md max-h-80"
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
                        <SwiperSlide v-for="n in 6" :key="n">
                            <img
                                loading="lazy"
                                :src="`https://picsum.photos/1920/1080?random=${n}`"
                                alt=""
                                class="w-full h-full object-cover hover-cursor"
                            />
                            <div
                                class="swiper-lazy-preloader swiper-lazy-preloader-white"
                            ></div>
                        </SwiperSlide>
                    </Swiper>

                    <div
                        class="flex flex-col lg:flex-row justify-between w-full items-start"
                    >
                        <div class="flex flex-shrink-0 items-center gap-5">
                            <div
                                class="border border-primary-950 rounded-full h-fit p-1 hover:cursor-pointer hover-cursor"
                            >
                                <UIcon
                                    name="i-ph-arrow-up-left-bold"
                                    class="text-primary-950 group-hover:block hidden size-6 2xl:size-10"
                                ></UIcon>
                            </div>
                            <div
                                class="custom-pagination4 hover-cursor w-full"
                            ></div>
                        </div>
                        <div class="max-w-full self-center">
                            <img
                                :src="eventsShape"
                                id="shape"
                                alt=""
                                class="hover-cursor object-contain"
                            />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-5 text-right">
                    <div class="flex justify-between items-center gap-5">
                        <div class="max-w-full md:hidden">
                            <img
                                :src="shape"
                                id="shape"
                                alt=""
                                class="hover-cursor object-cover max-h-20"
                            />
                        </div>
                        <button class="ml-auto">
                            <h3
                                class="relative w-fit text-3xl lg:text-4xl flex items-center group hover-cursor text-primary-950"
                            >
                                <UIcon
                                    name="i-ph-arrow-up-left-bold"
                                    class="text-secondary self-end group-hover:block hidden"
                                ></UIcon>
                                Events
                                <span
                                    class="bg-secondary absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%]"
                                ></span>
                            </h3>
                        </button>
                    </div>
                    <p class="text-pretty hover-cursor">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos nam provident illum fugiat. Recusandae non
                        molestiae cum placeat aliquid magnam omnis amet fugit
                        perspiciatis ratione, dignissimos consequatur nemo
                        veniam voluptatum.
                    </p>
                    <Swiper
                        :modules="[SwiperPagination, SwiperAutoplay]"
                        class="h-full w-full min-w-0 rounded-md max-h-80 lg:max-h-96"
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
                        <SwiperSlide v-for="n in 6" :key="n">
                            <img
                                loading="lazy"
                                :src="`https://picsum.photos/1920/1080?random=${n}`"
                                alt=""
                                class="w-full h-full object-cover hover-cursor"
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
import shape from '@/assets/images/shapes/projectsShape.png'
import eventsShape from '@/assets/images/shapes/eventsShape.png'
</script>

<style scoped>
:deep(.swiper-pagination-bullet-active) {
    @apply bg-secondary text-primary opacity-100 !important;
}
:deep(.swiper-pagination-bullet) {
    @apply bg-primary-950 rounded-tl-full opacity-100 size-2 xl:size-3;
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
