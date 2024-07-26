<template>
    <div class="relative z-50">
        <!-- <div
            v-if="route.path === '/'"
            class="bg-primary-950 relative z-40 flex w-full flex-col items-center gap-8 px-5 py-10 lg:px-10 2xl:px-28"
        >
            <hr class="border-primary-400 w-full" />
            <div class="hover-cursor text-primary-400 w-full text-center">
                © Printres 2024 Todos los derechos reservados.
                <br />
                Diseño Miranda Jugo.
            </div>
        </div> -->
        <div
            class="bg-primary-950 md:items-start flex flex-col md:flex-row gap-5 px-5 py-6 lg:px-10 2xl:px-28"
        >
            <ul class="flex items-center justify-center md:gap-10 gap-3 sm:gap-5 order-1 md:order-2">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
                <li>Behance</li>
            </ul>
            <!-- <hr class="order-2"> -->
            <div class="hover-cursor text-primary-400 w-full text-center md:text-left order-3 md:order-1">
                © Printres 2024 Todos los derechos reservados.
                <br />
                Diseño Miranda Jugo.
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style></style>
