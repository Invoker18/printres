<template>
    <div class="text-primary-950 relative z-20 mt-24 bg-gray-200">
        <div class="space-y-10 px-5 py-5 lg:px-10 2xl:px-28">
            <div class="grid grid-cols-3">
                <div class="col-span-full flex flex-col gap-6 md:col-span-2">
                    <h3
                        class="hover-cursor text-primary-950 group relative flex w-fit items-center text-3xl lg:text-4xl"
                    >
                        Trabajos
                        <span
                            class="absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%] bg-secondary"
                        ></span>
                        <UIcon
                            name="i-ph-arrow-up-right-bold"
                            class="hidden self-end text-secondary group-hover:block"
                        ></UIcon>
                    </h3>
                    <p class="hover-cursor">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Iure rem animi consequatur at nulla magni?
                        Voluptatem labore impedit corrupti? Impedit assumenda
                        aliquam veniam suscipit a pariatur animi libero labore
                        dolorum!
                    </p>
                    <ul class="flex flex-wrap gap-5">
                        <li
                            @click="activeCategory = n"
                            v-for="n in 5"
                            :key="n"
                            class="border-primary-950 hover-cursor rounded-full border px-3 py-1.5 transition-all duration-300 ease-linear hover:cursor-pointer"
                            :class="
                                activeCategory === n
                                    ? 'bg-primary-950 text-white'
                                    : ''
                            "
                        >
                            category {{ n }}
                        </li>
                    </ul>
                    <h5 class="text-xl">
                        Conoce nuestros trabajos de lorem ipsum
                    </h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nulla, beatae quidem saepe similique illum nobis
                        dignissimos praesentium tempora dolores laudantium
                        tempore repellendus blanditiis eligendi eveniet
                        exercitationem sint! Asperiores, placeat dicta?
                    </p>
                </div>
                <div class="hidden md:block">
                    <img :src="workShape" alt="" class="mx-auto w-48" />
                </div>
            </div>
            <div
                class="grid grid-cols-1 place-content-center items-center gap-10 sm:grid-cols-2 md:grid-cols-3"
            >
                <ClientOnly>
                    <div
                        class="h-full min-h-56 w-full rounded-md"
                        v-for="n in 10"
                        :key="n"
                    >
                        <img
                            loading="lazy"
                            :src="`https://picsum.photos/1920/1080?random=${n * activeCategory}`"
                            alt=""
                            class="hover-cursor h-full w-full rounded-md object-cover"
                        />
                    </div>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import workShape from '@/assets/images/shapes/workPage.png'
const activeCategory = ref(1)
</script>

<style></style>
