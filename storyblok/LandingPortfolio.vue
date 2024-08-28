<template>
    <section
        v-editable="blok"
        id="projects"
        class="text-primary-950 relative z-40 h-full bg-[#D9D9D9]"
    >
        <div class="h-full w-full px-5 py-3 md:pt-12 lg:px-10 2xl:px-28">
            <div
                class="mt-8 grid h-full w-full grid-cols-1 gap-5 text-[#010C4A] md:grid-cols-2 lg:gap-10 2xl:gap-32"
            >
                <div class="flex flex-col gap-5">
                    <div class="flex items-center justify-between gap-5">
                        <button class="">
                            <h3
                                class="hover-cursor text-primary-950 group relative flex w-fit items-center text-3xl lg:text-4xl"
                            >
                                {{ blok.Title }}
                                <span
                                    class="absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%] bg-secondary"
                                ></span>
                                <UIcon
                                    name="i-ph-arrow-up-right-bold"
                                    class="size-8 self-end text-secondary group-hover:block"
                                ></UIcon>
                            </h3>
                        </button>
                        <NuxtImg
                            format="webp"
                            loading="lazy"
                            src="images/shapes/eventsShape.png"
                            id="shape"
                            alt="Events Shape"
                            width="180"
                            fit="inside"
                            class="hover-cursor md:hidden"
                        />
                    </div>
                    <p class="hover-cursor text-pretty">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos nam provident illum fugiat. Recusandae non
                        molestiae cum placeat aliquid magnam omnis amet fugit
                        perspiciatis ratione, dignissimos consequatur nemo
                        veniam voluptatum.
                    </p>
                    <Swiper
                        :modules="[SwiperPagination, SwiperAutoplay]"
                        class="h-full max-h-80 w-full min-w-0 rounded-md lg:max-h-96 2xl:max-h-[26rem]"
                        :loop="true"
                        :autoplay="{
                            delay: 5000,
                        }"
                        :pagination="{
                            el: '.custom-pagination2',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return `<span class='${className}'></span>`
                            },
                        }"
                        :lazy="true"
                    >
                        <SwiperSlide
                            v-for="image in blok.Slider1"
                            :key="image.id"
                            class="h-full min-h-60"
                        >
                            <NuxtImg
                                format="webp"
                                loading="lazy"
                                provider="storyblok"
                                :src="image.filename"
                                :alt="image.alt"
                                width="700"
                                height="500"
                                sizes="100vw sm:50vw md:600px  xl:1024px"
                                class="hover-cursor object-cover"
                            />
                            <div
                                class="swiper-lazy-preloader swiper-lazy-preloader-white"
                            ></div>
                        </SwiperSlide>
                    </Swiper>

                    <div class="custom-pagination2 hover-cursor"></div>
                </div>
                <div class="hidden flex-col gap-8 md:flex">
                    <Swiper
                        :modules="[SwiperPagination, SwiperAutoplay]"
                        class="h-full max-h-80 w-full min-w-0 rounded-md lg:max-h-96 2xl:max-h-[26rem]"
                        :loop="true"
                        :autoplay="{
                            delay: 5000,
                        }"
                        :pagination="{
                            el: '.custom-pagination3',
                            clickable: true,
                            renderBullet: function (index, className) {
                                return `<span class='${className}'></span>`
                            },
                        }"
                        :lazy="true"
                    >
                        <SwiperSlide
                            v-for="image in blok.Slider2"
                            :key="image.id"
                            class="h-full min-h-60"
                        >
                            <NuxtImg
                                format="webp"
                                loading="lazy"
                                provider="storyblok"
                                :src="image.filename"
                                :alt="image.alt"
                                width="700"
                                height="500"
                                sizes="100vw sm:50vw md:600px  xl:1024px"
                                class="hover-cursor object-cover"
                            />
                            <div
                                class="swiper-lazy-preloader swiper-lazy-preloader-white"
                            ></div>
                        </SwiperSlide>
                    </Swiper>

                    <div
                        class="flex w-full flex-col items-end justify-between lg:flex-row lg:items-start"
                    >
                        <NuxtImg
                            format="webp"
                            src="/images/shapes/projectsShape.png"
                            id="shape"
                            alt="Projects Shape"
                            height="200"
                            width="250"
                            fit="inside"
                            class="hover-cursor order-2 lg:order-1"
                        />
                        <div
                            class="order-1 flex flex-shrink-0 items-center gap-5 lg:order-2"
                        >
                            <div
                                class="custom-pagination3 hover-cursor w-full"
                            ></div>
                            <div
                                class="border-primary-950 hover-cursor flex size-10 shrink-0 grow-0 items-center justify-center rounded-full border hover:cursor-pointer"
                            >
                                <UIcon
                                    name="i-ph-arrow-up-right-bold"
                                    class="text-primary-950 size-6 group-hover:block"
                                ></UIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})
</script>

<style scoped>
:deep(.swiper-pagination-bullet-active) {
    @apply bg-secondary text-primary opacity-100 !important;
}
:deep(.swiper-pagination-bullet) {
    @apply bg-primary-950 size-2 rounded-tl-full opacity-100 xl:size-3;
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
