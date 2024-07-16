<template>
    <div class="text-primary-950 relative z-20 bg-gray-200 pt-24">
        <div
            class="grid grid-flow-row gap-5 px-5 py-5 lg:px-10 lg:pb-10 2xl:px-28"
        >
            <div class="flex items-center justify-between">
                <h3
                    class="hover-cursor text-primary-950 group relative col-span-full flex w-fit items-center text-3xl lg:text-4xl"
                >
                    Eventos
                    <span
                        class="absolute -bottom-0.5 right-0 mt-1 h-0.5 w-[50%] bg-secondary"
                    ></span>
                </h3>
                <img
                    :src="eventShape"
                    alt=""
                    class="-top-2 right-28 max-h-20"
                />
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate quidem ea qui optio rem doloribus error deserunt cum
                in, eum enim expedita mollitia ab nobis quia ipsam consequatur
                non nisi? lorem ipsum dolor sit amet
            </p>
            <hr class="border-primary-950 my-5 border-[1.5px]" />
            <div
                class="grid grid-cols-2 place-content-center items-center gap-10 gap-x-3 md:grid-cols-3 md:gap-x-10"
            >
                <ClientOnly>
                    <div
                        class="flex h-full w-full flex-col gap-2 rounded-md"
                        v-for="n in 10"
                        :key="n"
                    >
                        <NuxtLink :to="`/events/${n}`">
                            <img
                                loading="lazy"
                                :src="`https://picsum.photos/1920/1080?random=${n}`"
                                alt=""
                                class="hover-cursor h-full min-h-40 w-full rounded-md object-cover"
                            />
                        </NuxtLink>

                        <div class="grid w-full grid-cols-2 gap-2">
                            <div class="col-span-full text-lg">
                                Nombre del evento
                            </div>
                            <div class="text-gray-800">Lugar</div>
                            <div class="text-gray-800">Fecha</div>
                        </div>
                    </div>
                </ClientOnly>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import eventShape from '@/assets/images/shapes/events.png'
</script>

<style></style>
