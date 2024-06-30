<template>
    <section
        class="h-[120vh] sticky top-0 left-0 px-5 pt-10 lg:py-32 pin flex flex-col gap-10 overflow-hidden"
        id="aboutUs"
    >
        <div class="relative w-fit text-5xl flex items-center">
            <h3>Nosotros</h3>
            <div
                class="bg-secondary absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%]"
            ></div>
            <UIcon
                name="i-ph-arrow-down-right-bold"
                class="text-secondary self-end"
            ></UIcon>
        </div>
        <div
            class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-2 place-content-start gap-5 xl:gap-x-20"
        >
            <div class="flex flex-col">
                <p class="text-lg hover-cursor text-pretty">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga porro velit quidem placeat, modi in quos error. Quasi
                    iure vitae ipsam eos, magnam, labore mollitia non architecto
                    dignissimos atque fugiat.
                    <br />
                    Inventore, labore dolores minus tempore saepe libero quod ab
                    alias voluptatibus earum cumque blanditiis quas numquam
                    dolore nihil suscipit. Fuga eius recusandae ex provident
                    facilis est! Accusamus explicabo illum cupiditate.
                </p>
                <div class="hidden w-full h-full border xl:flex justify-start items-end">imagenes</div>
            </div>
            <div
                class="h-full w-full gap-3 flex relative min-h-[400px] sm:min-h-[500px] md:col-span-2 md:min-h-[550px]"
            >
                <!-- <div class="hidden lg:block w-12 bg-secondary"></div>
                <div class="hidden lg:block w-12 bg-curious-blue-600"></div> -->
                <Swiper
                    :modules="[SwiperPagination, SwiperAutoplay]"
                    class="h-full w-full min-w-0"
                    :loop="true"
                    :autoplay="true"
                    :pagination="{
                        el: '.custom-pagination',
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
                    class="size-24 xl:size-32 bg-secondary rounded-full absolute right-0 bottom-0 z-10"
                ></div>
            </div>
            <div class="custom-pagination md:col-start-2 md:col-span-2"></div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// import people from '@/assets/images/people.jpeg';
</script>

<style scoped>
img {
    -webkit-mask: url('@/assets/images/shapes/empanadas.png') left/contain no-repeat;
    mask: url('@/assets/images/shapes/empanadas.png') left/contain no-repeat;
}

:deep(.swiper-pagination-bullet-active) {
    @apply bg-secondary text-primary opacity-100 !important;
}
:deep(.swiper-pagination-bullet) {
    @apply bg-white rounded-tl-full opacity-60 size-3;
}

:deep(.swiper-pagination-bullet:nth-child(2n-1)) {
    @apply rounded-full !important;
}

:deep(.swiper-pagination-bullet:nth-child(3n-2)) {
    @apply rounded-sm !important;
}

:deep(.swiper-pagination) {
    @apply flex justify-start mx-4 border !important;
}
</style>
