<template>
    <section
        class="h-screen z-30 bg-primary-950 md:h-[90vh] pin sticky overflow-hidden top-0 left-0 px-5 lg:px-10 2xl:px-20 py-10 flex flex-col gap-8 2xl:gap-x-20"
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
        <div
            class="grid grid-cols-12 place-content-start gap-5 md:gap-y-10 xl:gap-x-20"
        >
            <div
                class="col-span-full flex flex-col md:col-span-5 xl:col-span-6 gap-5 lg:text-lg text-base hover-cursor text-pretty"
            >
                <p>
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
                <div class="h-full w-full hidden lg:block">
                    <img
                        :src="shape"
                        id="shape"
                        alt=""
                        class="object-cover max-h-48 xl:max-h-56 hover-cursor float-left"
                    />
                    <!-- <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Rerum, delectus labore est voluptate voluptas
                        ipsum neque, enim id, excepturi repellat tempore
                        laboriosam fuga veniam doloremque? Quo assumenda eos
                        perspiciatis ratione! Dolore, omnis odit dignissimos
                        deserunt voluptate magnam pariatur nisi rerum iusto
                        assumenda iste a lorem ipsum dolor sit amet
                    </p> -->
                </div>
            </div>
            <div
                class="h-full w-full gap-5 flex flex-col place-content-center col-span-full md:col-span-7 xl:col-span-6"
            >
                <Swiper
                    :modules="[SwiperPagination, SwiperAutoplay]"
                    class="h-full w-full min-w-0 min-h-64 max-h-96"
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
                            class="w-full h-full object-cover hover-cursor maskImg"
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
</script>

<style scoped>
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
    @apply bg-secondary text-primary opacity-100 !important;
}
:deep(.swiper-pagination-bullet) {
    @apply bg-white rounded-tl-full opacity-60 size-2 lg:size-3;
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
