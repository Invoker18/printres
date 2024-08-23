<template>
    <section
        v-editable="blok"
        class="bg-primary-950 pin relative left-0 top-0 z-30 flex h-screen flex-col gap-5 px-5 py-12 sm:sticky sm:pt-28 lg:px-10 2xl:gap-x-20 2xl:px-28"
        id="aboutUs"
    >
        <div
            class="hover-cursor relative flex w-fit items-center text-3xl lg:text-4xl"
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
        <div
            class="grid grid-cols-12 place-content-center items-center gap-5 md:gap-y-10 xl:gap-x-20"
        >
            <div
                class="col-span-full flex flex-col gap-5 text-pretty text-base tracking-tight md:col-span-6 lg:text-lg xl:col-span-6"
            >
                <ClientOnly>
                    <p class="hover-cursor" v-html="Description"></p>
                    <p class="hover-cursor" v-html="Description2"></p>
                </ClientOnly>
                <div class="hidden h-full w-full md:block">
                    <NuxtImg
                        src="/images/shapes/aboutShape.png"
                        id="shape"
                        alt=""
                        class="hover-cursor max-h-48 object-cover"
                    />
                </div>
            </div>
            <div
                class="col-span-full flex h-full w-full flex-col place-content-center gap-5 md:col-span-6 xl:col-span-6"
            >
                <ClientOnly>
                    <Swiper
                        :modules="[SwiperPagination, SwiperAutoplay]"
                        class="maskImg h-full min-h-64 w-full min-w-0 select-none"
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
                                loading="lazy"
                                :src="slide.filename"
                                alt=""
                                class="hover-cursor h-full w-full object-cover"
                            />
                            <div
                                class="swiper-lazy-preloader swiper-lazy-preloader-white rounded-lg"
                            ></div>
                        </SwiperSlide>
                    </Swiper>
                </ClientOnly>

                <div class="custom-pagination hover-cursor"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({ blok: Object })

const { width } = useWindowSize()
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
