<template>
    <section class="h-[120vh] bg-[#D9D9D9] z-10 sticky top-0 text-black pin">
        <div class="w-full h-full pt-32 px-3 sm:px-5 2xl:px-20 border">
            <button
                class="relative w-fit text-3xl lg:text-4xl flex items-center group"
            >
                <h3>Trabajos</h3>
                <div
                    class="bg-secondary absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%]"
                ></div>
                <UIcon
                    name="i-ph-arrow-up-right-bold"
                    class="text-secondary self-end group-hover:block hidden"
                ></UIcon>
            </button>
            <div class="grid grid-cols-2 mt-8 h-full gap-40">
                <div class="flex flex-col gap-5">
                    <p class="text-pretty">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos nam provident illum fugiat. Recusandae non
                        molestiae cum placeat aliquid magnam omnis amet fugit
                        perspiciatis ratione, dignissimos consequatur nemo
                        veniam voluptatum.
                    </p>
                    <div>
                        <Swiper
                            :modules="[SwiperPagination, SwiperAutoplay]"
                            class="h-full w-full min-w-0 rounded-md shadow-xl shadow-gray-800"
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
                                    class="w-full h-full object-cover hover-cursor max-h-96"
                                />
                                <div
                                    class="swiper-lazy-preloader swiper-lazy-preloader-white"
                                ></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class="custom-pagination2"></div>
                </div>
                <div class="flex flex-col gap-5">
                    <div>
                        <Swiper
                            :modules="[SwiperPagination, SwiperAutoplay]"
                            class="h-full w-full min-w-0 rounded-md shadow-xl shadow-gray-800"
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
                                    class="w-full h-full object-cover hover-cursor max-h-96"
                                />
                                <div
                                    class="swiper-lazy-preloader swiper-lazy-preloader-white"
                                ></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <p class="text-pretty">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos nam provident illum fugiat. Recusandae non
                        molestiae cum placeat aliquid magnam omnis amet fugit
                        perspiciatis ratione, dignissimos consequatur nemo
                        veniam voluptatum.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup></script>

<style scoped>
:deep(.swiper-pagination-bullet-active) {
    @apply bg-secondary text-primary opacity-100 !important;
}
:deep(.swiper-pagination-bullet) {
    @apply bg-primary rounded-tl-full opacity-100 size-3;
}

:deep(.swiper-pagination-bullet:nth-child(2n-1)) {
    @apply rounded-full !important;
}

:deep(.swiper-pagination-bullet:nth-child(3n-2)) {
    @apply rounded-sm !important;
}

:deep(.swiper-pagination) {
    @apply flex justify-start mx-4 !important;
}
</style>
