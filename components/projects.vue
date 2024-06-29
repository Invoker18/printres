<template>
    <section class="h-screen bg-[#D9D9D9] z-10 sticky top-0 text-black pin">
        <div class="max-w-screen-2xl mx-auto w-full h-full pt-32 px-5">
            <div class="relative w-fit text-5xl flex items-center">
                <h3>Trabajos</h3>
                <div
                    class="bg-secondary absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%]"
                ></div>
                <UIcon
                    name="i-ph-arrow-down-right-bold"
                    class="text-secondary self-end"
                ></UIcon>
            </div>
            <div class="grid grid-cols-2 mt-10 h-full">
                <div class="flex flex-col gap-5">
                    <p class="text-pretty">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos nam provident illum fugiat. Recusandae non
                        molestiae cum placeat aliquid magnam omnis amet fugit
                        perspiciatis ratione, dignissimos consequatur nemo
                        veniam voluptatum.
                    </p>
                    <div>
                        <UButton color="primary" variant="outline"
                            >Ver mas trabajos</UButton
                        >
                    </div>
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
                                    class="w-full h-full object-cover hover-cursor"
                                />
                                <div
                                    class="swiper-lazy-preloader swiper-lazy-preloader-white"
                                ></div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div
                        class="custom-pagination2"
                    ></div>
                </div>
                <div>imagen</div>
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
