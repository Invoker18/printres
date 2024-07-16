<template>
    <div class="bg-primary-950 relative z-40 h-[70vh] pb-5 xl:h-[90vh]">
        <div
            class="flex h-full w-full flex-col justify-center gap-5 px-5 md:flex-row md:items-center lg:px-10 2xl:px-28 2xl:pt-16"
        >
            <ul
                class="order-2 mt-auto flex flex-row justify-center gap-10 justify-self-center text-lg md:order-1 md:mt-0 md:flex-col md:text-4xl hover-cursor"
            >
                <li
                    class="group flex w-fit items-center transition-all duration-300 ease-linear hover:scale-110 hover:cursor-pointer"
                >
                    Facebook
                    <!-- <UIcon
                        name="i-ph-arrow-up-right-bold"
                        class="invisible self-end text-secondary transition-all duration-100 ease-in-out group-hover:visible"
                    ></UIcon> -->
                </li>
                <li
                    class="group flex w-fit items-center transition-all duration-300 ease-linear hover:scale-110 hover:cursor-pointer"
                >
                    Instagram
                    <!-- <UIcon
                        name="i-ph-arrow-up-right-bold"
                        class="invisible self-end text-secondary transition-all duration-100 ease-in-out group-hover:visible"
                    ></UIcon> -->
                </li>
                <li
                    class="group flex w-fit items-center transition-all duration-300 ease-linear hover:scale-110 hover:cursor-pointer"
                >
                    Whatsapp
                    <!-- <UIcon
                        name="i-ph-arrow-up-right-bold"
                        class="invisible self-end text-secondary transition-all duration-100 ease-in-out group-hover:visible"
                    ></UIcon> -->
                </li>
                <li
                    class="group flex w-fit items-center transition-all duration-300 ease-linear hover:scale-110 hover:cursor-pointer"
                >
                    Behance
                    <!-- <UIcon
                        name="i-ph-arrow-up-right-bold"
                        class="invisible self-end text-secondary transition-all duration-100 ease-in-out group-hover:visible"
                    ></UIcon> -->
                </li>
                <!-- <li
                    class="hover-cursor w-fit transition-all duration-300 ease-linear hover:scale-105 hover:cursor-pointer group"
                >
                    LinkedIn
                    <                    <UIcon name="i-ph-arrow-up-right-bold"
                class="invisible group-hover transition-all ease-linear duration-300:100 outease-in-out text-secondary group"></UIcon>
                </li> -->
            </ul>
            <div
                class="order-1 mt-auto flex h-96 w-full items-center justify-center gap-3 self-center md:order-2 md:mt-0 md:justify-end xl:h-[29rem] 2xl:h-[32rem]"
            >
                <div
                    class="h-full min-w-96 overflow-hidden rounded-full xl:min-w-[29rem] 2xl:min-w-[32rem]"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3174403739504!2d-79.5209539889663!3d9.03477979098933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca94d3cdfa713%3A0xd9978d65b54dafb!2sPrintres!5e0!3m2!1ses!2sve!4v1720189304037!5m2!1ses!2sve"
                        width="100%"
                        height="100%"
                        style="border: 0"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div class="hidden h-full max-w-full md:block">
                    <img
                        :src="naranja"
                        alt=""
                        class="hover-cursor h-full w-full object-contain"
                    />
                </div>
                <div class="hidden h-full max-w-full lg:block">
                    <img
                        :src="azul"
                        alt=""
                        class="hover-cursor h-full w-full object-contain"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import naranja from '@/assets/images/shapes/empanadaNaranja.png'
import azul from '@/assets/images/shapes/empanadaAzul.png'
</script>

<style scoped>
/* .clip-path {
    clip-path: circle(50% at 50% 50%);
} */

/* .maskImg {
    -webkit-mask-image: url('@/assets/images/shapes/empanadas.png');
    mask-image: url('@/assets/images/shapes/empanadas.png');
    mask-repeat: round;
    mask-size: contain;
    mask-position: left/center;
} */
</style>
