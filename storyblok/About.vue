<template>
    <section
        v-editable="blok"
        class="bg-primary-950 pin relative left-0 top-0 z-30 flex h-full flex-col gap-5 px-5 py-12 sm:sticky sm:py-24 lg:h-screen lg:px-10 lg:pt-32 2xl:gap-x-20 2xl:px-28"
        id="aboutUs"
    >
        <div
            class="grid grid-cols-12 items-center justify-center gap-5 xl:gap-x-20"
        >
            <div
                class="col-span-full flex flex-col gap-5 text-pretty text-base tracking-tight md:col-span-6 lg:text-lg xl:col-span-6"
            >
                <div
                    class="hover-cursor relative flex w-fit items-center text-3xl sm:mb-5 lg:text-4xl"
                >
                    <h3>{{ blok.title }}</h3>
                    <div
                        class="absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%] bg-secondary"
                    ></div>
                    <UIcon
                        name="i-ph-arrow-down-right-bold"
                        class="self-end text-secondary"
                    ></UIcon>
                </div>
                <ClientOnly>
                    <p class="hover-cursor" v-html="Description"></p>
                    <p class="hover-cursor" v-html="Description2"></p>
                </ClientOnly>
                <div class="hidden h-full w-full md:block">
                    <NuxtImg
                        format="webp"
                        src="/images/shapes/aboutShape.png"
                        id="shape"
                        alt=""
                        width="250"
                        height="150"
                        class="hover-cursor hidden lg:block"
                        fit="inside"
                    />
                </div>
            </div>
            <div
                class="col-span-full flex h-full w-full flex-col items-center justify-center gap-5 md:col-span-6 xl:col-span-6"
            >
                <Swiper
                    :modules="[SwiperPagination, SwiperAutoplay]"
                    class="w-full min-w-0 select-none"
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
                    <SwiperSlide
                        v-for="slide in blok.Slider"
                        :key="slide.id"
                        class=""
                    >
                        <NuxtImg
                            format="webp"
                            loading="lazy"
                            provider="storyblok"
                            :src="slide.filename"
                            :alt="slide.alt"
                            height="600"
                            width="800"
                            sizes="100vw sm:50vw md:800px xl:1024px"
                            class="hover-cursor maskImg object-cover object-top"
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

<script setup>
const props = defineProps({ blok: Object })

const Description = computed(() => renderRichText(props.blok.Description))
const Description2 = computed(() => renderRichText(props.blok.Description2))
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
    max-height: 24rem;
}

@media (max-width: 460px) {
    .maskImg {
        max-height: 16rem;
    }
}

@media (min-width: 1280px) {
    .maskImg {
        max-height: 32rem;
    }
}

:deep(.swiper-pagination-bullet-active) {
    @apply bg-secondary text-primary opacity-100 !important;
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
