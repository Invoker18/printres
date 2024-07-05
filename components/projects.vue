<template>
    <section
        id="projects"
        class="h-full z-40 relative bg-[#D9D9D9] text-primary-950"
    >
        <div class="w-full h-full py-3 md:py-10 px-5 lg:px-10 2xl:px-28">
            <div
                class="grid grid-cols-1 md:grid-cols-2 mt-8 w-full h-full gap-5 lg:gap-10 xl:gap-32 text-[#010C4A]"
            >
                <div class="flex flex-col gap-5">
                    <div class="flex justify-between items-center gap-5">
                        <button class="">
                            <h3
                                class="relative w-fit text-3xl lg:text-4xl flex items-center group hover-cursor text-primary-950"
                            >
                                Trabajos
                                <span
                                    class="bg-secondary absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%]"
                                ></span>
                                <UIcon
                                    name="i-ph-arrow-up-right-bold"
                                    class="text-secondary self-end group-hover:block hidden"
                                ></UIcon>
                            </h3>
                        </button>
                        <div class="max-w-full md:hidden">
                            <img
                                :src="eventsShape"
                                id="shape"
                                alt=""
                                class="hover-cursor object-cover max-h-20"
                            />
                        </div>
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
                            el: '.custom-pagination2',
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

                    <div class="custom-pagination2 hover-cursor"></div>
                </div>
                <div class="md:flex flex-col gap-8 hidden">
                    <Swiper
                        :modules="[SwiperPagination, SwiperAutoplay]"
                        class="h-full w-full min-w-0 rounded-md max-h-80"
                        :loop="true"
                        :autoplay="true"
                        :pagination="{
                            el: '.custom-pagination3',
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
                        class="flex flex-col lg:flex-row justify-between w-full items-end lg:items-start"
                    >
                        <div class="max-w-full order-2 lg:order-1 self-center">
                            <img
                                :src="shape"
                                id="shape"
                                alt=""
                                class="hover-cursor object-contain"
                            />
                        </div>
                        <div
                            class="flex flex-shrink-0 items-center gap-5 order-1 lg:order-2"
                        >
                            <div
                                class="custom-pagination3 hover-cursor w-full"
                            ></div>
                            <div
                                class="border border-primary-950 rounded-full h-fit p-1 hover:cursor-pointer hover-cursor"
                            >
                                <UIcon
                                    name="i-ph-arrow-up-right-bold"
                                    class="text-primary-950 group-hover:block hidden size-6 2xl:size-10"
                                ></UIcon>
                            </div>
                        </div>
                    </div>
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
