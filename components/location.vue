<template>
    <div
        class="bg-primary-950 relative z-50 flex lex-col xl:h-[90vh]"
        id="location"
    >
        <div
            class="flex h-full w-full flex-col gap-5 p-5 md:flex-row md:items-center lg:px-10 xl:gap-x-24 2xl:px-28 pt-16 pb-4"
        >
            <div class="hidden flex-col gap-5 text-xl md:flex md:max-w-xs">
                <h5 class="text-3xl">Hablemos</h5>
                <div>+507 6251-3093</div>
                <hr class="border-secondary" />
                <div>ventas.printres@gmail.com</div>
                <hr class="border-curious-blue-600" />
                <p>Casa F16, Calle F, Panamá, Panama City, Panama</p>
            </div>
            <div
                class="mx-auto flex h-[24rem] w-full max-w-5xl gap-2 sm:h-[26rem] md:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] 2xl:max-h-[60vh]"
            >
                <div
                    class="h-full w-12 flex-shrink-0 rounded-md bg-[#0424D9]"
                ></div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3174403739504!2d-79.5209539889663!3d9.03477979098933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca94d3cdfa713%3A0xd9978d65b54dafb!2sPrintres!5e0!3m2!1ses!2sve!4v1720189304037!5m2!1ses!2sve"
                    width="100%"
                    height="100%"
                    style="border: 0"
                    loading="lazy"
                    class="rounded-md"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <img
                    :src="locationShape"
                    alt=""
                    class="hover-cursor hidden h-full object-contain lg:block"
                />
            </div>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
                <div class="flex flex-col">
                    <h5 class="text-lg text-secondary">Direccion</h5>
                    <p>Casa F16, Calle F, Panamá, Panama City, Panama</p>
                </div>
                <div class="flex flex-col sm:text-right">
                    <h5 class="text-lg text-secondary">Contacto</h5>
                    <div>+507 6251-3093</div>
                    <div>ventas.printres@gmail.com</div>
                </div>
            </div>
        </div>
        <!-- <hr class="mt-4 border-gray-200 dark:border-gray-200" /> -->
        <!-- <div
            class="flex h-full w-full flex-col justify-center gap-5 px-5 md:flex-row md:items-center lg:px-10 2xl:px-28 2xl:pt-16"
        >
            <ul
                class="order-2 mt-auto flex flex-row justify-center gap-3 md:gap-10 justify-self-center text-lg md:order-1 md:mt-0 md:flex-col md:text-4xl hover-cursor"
            >
                <li
                    class="group flex w-fit items-center transition-all duration-300 ease-linear hover:scale-110 hover:cursor-pointer"
                >
                    Facebook
                </li>
                <li
                    class="group flex w-fit items-center transition-all duration-300 ease-linear hover:scale-110 hover:cursor-pointer"
                >
                    Instagram
                </li>
                <li
                    class="group flex w-fit items-center transition-all duration-300 ease-linear hover:scale-110 hover:cursor-pointer"
                >
                    Whatsapp
                </li>
                <li
                    class="group flex w-fit items-center transition-all duration-300 ease-linear hover:scale-110 hover:cursor-pointer"
                >
                    Behance
                </li>
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
        </div> -->
    </div>
</template>

<script lang="ts" setup>
import naranja from '@/assets/images/shapes/empanadaNaranja.png'
import azul from '@/assets/images/shapes/empanadaAzul.png'
import locationShape from '@/assets/images/shapes/locationShape.png'

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
