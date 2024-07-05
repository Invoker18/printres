<template>
    <section
        class="bg-primary-950 pin sticky left-0 top-0 z-30 flex h-[110vh] flex-col gap-8 px-5 pt-20 md:pt-28 lg:px-10 2xl:gap-x-20 2xl:px-28"
        id="aboutUs"
    >
        <div
            class="hover-cursor relative flex w-fit items-center text-3xl lg:text-4xl"
        >
            <h3>Nosotros</h3>
            <div
                class="absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%] bg-secondary"
            ></div>
            <UIcon
                name="i-ph-arrow-down-right-bold"
                class="self-end text-secondary"
            ></UIcon>
        </div>
        <div
            class="grid grid-cols-12 place-content-start gap-5 md:gap-y-10 xl:gap-x-20"
        >
            <div
                class="col-span-full flex flex-col gap-5 text-pretty text-base md:col-span-5 lg:text-lg xl:col-span-6 xl:gap-10"
            >
                <p class="hover-cursor">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga porro velit quidem placeat, modi in quos error. Quasi
                    iure vitae ipsam eos, magnam, labore mollitia non architecto
                    dignissimos atque fugiat. lorem ipsum dolor sit amet
                    <br />
                    Inventore, labore dolores minus tempore saepe libero quod ab
                    alias voluptatibus earum cumque blanditiis quas numquam
                    dolore nihil suscipit. Fuga eius recusandae ex provident
                    facilis est! Accusamus explicabo illum cupiditate.
                </p>
                <div class="hidden h-full w-full lg:block">
                    <img
                        :src="shape"
                        id="shape"
                        alt=""
                        class="hover-cursor max-h-48 object-cover xl:max-h-fit"
                    />
                </div>
            </div>
            <div
                class="col-span-full flex h-full w-full flex-col place-content-center gap-5 md:col-span-7 xl:col-span-6"
            >
                <Swiper
                    :modules="[SwiperPagination, SwiperAutoplay]"
                    class="h-full max-h-96 min-h-64 w-full min-w-0 xl:max-h-full"
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
                            class="hover-cursor maskImg h-full w-full object-cover"
                        />
                        <div
                            class="swiper-lazy-preloader swiper-lazy-preloader-white rounded-lg"
                        ></div>
                    </SwiperSlide>
                </Swiper>
                <div class="custom-pagination hover-cursor"></div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
// import people from '@/assets/images/people.jpeg';
import shape from '@/assets/images/shapes/aboutShape.png'
import leaf from '@/assets/images/shapes/leaf.png'
import people2 from '@/assets/images/people/about.jpg'
import people from '@/assets/images/people/0V3A0074.jpg'
import image from '@/assets/images/shapes/image.png'
</script>

<style scoped>
#boxImg {
    /* background-image: url('@/assets/images/shapes/image.png'); */
    background-image: url('@/assets/images/people/0V3A0074.jpg');
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    clip-path: circle(50% at 50% 50%);
}
.clip-path {
    clip-path: circle(50% at 50% 50%);
}

#backgroundColor {
    background: linear-gradient(to top, #0091dc 50%, #001489 50%);
}
#shape {
    shape-outside: url('@/assets/images/shapes/aboutShape.png');
    clip-path: url('@/assets/images/shapes/aboutShape.png');
    shape-margin: 0.5rem;
}
.maskImg {
    -webkit-mask-image: url('@/assets/images/shapes/empanadas.png');
    mask-image: url('@/assets/images/shapes/empanadas.png');
    mask-repeat: round;
    mask-size: contain;
    mask-position: left/center;
}

:deep(.swiper-pagination-bullet-active) {
    @apply text-primary bg-secondary opacity-100 !important;
}
:deep(.swiper-pagination-bullet) {
    @apply size-2 rounded-tl-full bg-white opacity-60 lg:size-3;
}

:deep(.swiper-pagination-bullet:nth-child(2n-1)) {
    @apply rounded-full !important;
}

:deep(.swiper-pagination-bullet:nth-child(3n-2)) {
    @apply rounded-sm !important;
}

:deep(.swiper-pagination) {
    @apply mx-4 flex justify-start border !important;
}
</style>
