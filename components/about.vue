<template>
    <section
        class="h-[120vh] sticky overflow-hidden top-0 left-0 px-3 sm:px-5 2xl:px-20 pt-24 lg:pt-28 pin flex flex-col gap-8 2xl:gap-x-20"
        id="aboutUs"
    >
        <div
            class="relative w-fit text-3xl lg:text-4xl flex items-center hover-cursor"
        >
            <h3>Nosotros</h3>
            <div
                class="bg-secondary absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%]"
            ></div>
            <UIcon
                name="i-ph-arrow-down-right-bold"
                class="text-secondary self-end"
            ></UIcon>
        </div>
        <div class="grid grid-cols-12 place-content-start gap-5 xl:gap-x-20">
            <div
                class="flex flex-col col-span-full md:col-span-5 xl:col-span-6 gap-5"
            >
                <p class="lg:text-lg text-base hover-cursor text-pretty">
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
                <div
                    class="hidden w-full h-full border md:flex justify-start items-end"
                >
                    imagenes
                    <img :src="vector1" alt="" />
                </div>
            </div>
            <div
                class="h-full w-full gap-3 flex relative col-span-full md:col-span-7 xl:col-span-6"
            >
                <!-- <div class="hidden lg:block w-12 bg-secondary"></div>
                <div class="hidden lg:block w-12 bg-curious-blue-600"></div> -->
                <Swiper
                    :modules="[SwiperPagination, SwiperAutoplay]"
                    class="h-full w-full min-w-0 rounded-lg shadow-lg shadow-primary-700"
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
                    <SwiperSlide v-for="n in 6" :key="n" class="">
                        <img
                            loading="lazy"
                            :src="`https://picsum.photos/1920/1080?random=${n}`"
                            alt=""
                            class="w-full h-full object-cover hover-cursor"
                        />
                        <div
                            class="swiper-lazy-preloader swiper-lazy-preloader-white rounded-lg"
                        ></div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div
                class="custom-pagination md:col-start-6 xl:col-start-7 col-span-full hover-cursor"
            ></div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// import people from '@/assets/images/people.jpeg';
import vector1 from '@/assets/images/shapes/Vector1.png'
</script>

<style scoped>
/* .maskImg {
    -webkit-mask-image: url('@/assets/images/shapes/empanadas.png');
    mask-image: url('@/assets/images/shapes/empanadas.png');
    mask-repeat: no-repeat;
    mask-size: contain;
    mask-position: left/center;
} */

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
