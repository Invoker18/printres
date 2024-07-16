<template>
    <div class="text-primary-950 relative z-20 min-h-screen bg-gray-200 pt-24">
        <div class="space-y-5 px-5 py-5 lg:px-10 2xl:px-28">
            <h4 class="text-2xl">
                Nombre del Evento
                {{ id }}
            </h4>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo,
                quibusdam. Voluptatum quidem tempore suscipit aperiam quos quasi
                ut, expedita asperiores autem aut blanditiis. Accusamus, ad sed?
                Sed, veniam labore? Reprehenderit.
            </p>
            <hr class="border-primary-950 border-[1.5px]" />
            <div class="flex gap-x-16">
                <div class="grid grid-flow-row max-w-full">
                    <img
                        loading="lazy"
                        :src="`https://picsum.photos/1920/1080?random=${id}`"
                        alt=""
                        class="hover-cursor min-h-96 w-full rounded-md object-cover"
                    />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Corporis, soluta nam distinctio porro ullam
                        maiores iusto iure iste voluptatibus cumque quam sit
                        alias consequuntur quaerat consectetur impedit
                        reiciendis aperiam voluptas? Aut facilis deleniti animi
                        reiciendis praesentium, consequatur dolorem maxime
                        magnam illum necessitatibus. Laboriosam, pariatur dicta
                        vero esse error maiores iste odit magni optio sapiente
                        impedit delectus cupiditate. Nobis, debitis temporibus!
                        Optio ut voluptas necessitatibus eveniet totam tenetur
                        ipsa et, nostru
                    </p>
                </div>
                <div class="grid max-w-xs grid-flow-row gap-5">
                    <img
                        v-for="n in 4"
                        :key="n"
                        loading="lazy"
                        :src="`https://picsum.photos/1920/1080?random=${+id + n}`"
                        alt=""
                        class="hover-cursor h-full min-h-24 w-full rounded-md object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const id = route.params.id
</script>

<style></style>
