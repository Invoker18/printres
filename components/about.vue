<template>
    <section class="h-screen sticky top-0 px-5 py-32 gap-10 pin" id="aboutUs">
        <div class="relative w-fit text-5xl flex items-center mb-10">
            <h3>Nosotros</h3>
            <div
                class="bg-secondary absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%]"
            ></div>
            <UIcon
                name="i-ph-arrow-down-right-bold"
                class="text-secondary self-end"
            ></UIcon>
        </div>
        <div class="grid grid-flow-col auto-cols-fr place-content-start gap-5">
            <div class="grid grid-flow-row place-content-start gap-10 max-w-xl">
                <p class="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga porro velit quidem placeat, modi in quos error. Quasi
                    iure vitae ipsam eos, magnam, labore mollitia non architecto
                    dignissimos atque fugiat. Inventore, labore dolores minus
                    tempore saepe libero quod ab alias voluptatibus earum cumque
                    blanditiis quas numquam dolore nihil suscipit. Fuga eius
                    recusandae ex provident facilis est! Accusamus explicabo
                    illum cupiditate. At fuga officiis dicta similique porro ad
                    perspiciatis fugit obcaecati iure laudantium! Explicabo sint
                    libero sapiente recusandae debitis minus reprehenderit
                    ducimus consectetur officia unde nesciunt, ullam praesentium
                    reiciendis suscipit error.
                </p>
                <div class="flex items-center gap-5">
                    <UButton
                        :ui="{ rounded: 'rounded-full' }"
                        color="white"
                        variant="outline"
                        class="uppercase"
                        >ver mas</UButton
                    >
                    <UButton
                        :ui="{
                            rounded: 'rounded-full',
                            variant: {
                                solid: 'bg-secondary dark:bg-secondary dark:text-gray-100 text-gray-100',
                            },
                        }"
                        class="uppercase"
                        variant="solid"
                        >ver mas 2</UButton
                    >
                </div>
            </div>
            <div class="w-full h-[34rem] lg:-mt-20 relative">
                <Swiper
                    :modules="[SwiperPagination, SwiperAutoplay]"
                    class="flex h-full w-full"
                    :loop="true"
                    :autoplay="true"
                    :space-between="20"
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
                            class="w-full h-[95%] object-cover"
                        />
                        <div
                            class="swiper-lazy-preloader swiper-lazy-preloader-white"
                        ></div>
                    </SwiperSlide>
                </Swiper>
                <div
                    class="custom-pagination absolute bottom-16 w-full h-fit"
                ></div>
                <div
                    class="absolute right-10 bottom-6 size-28 bg-secondary z-50 rounded-full"
                ></div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// import people from '@/assets/images/people.jpeg';
</script>

<style scoped>
.swiper {
    -webkit-mask: url('@/assets/images/empanadas.png') center/contain no-repeat;
    mask: url('@/assets/images/empanadas.png') center/contain no-repeat;
    position: relative;
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
    @apply flex justify-start mx-4 !important;
}
</style>
