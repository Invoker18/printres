<template>
    <div class="relative border-t z-50">
        <div
            class="bg-primary-950 flex flex-col gap-5 px-5 py-6 md:flex-row md:items-center lg:px-10 2xl:px-28"
        >
            <ul
                class="order-1 flex items-center justify-start gap-3 sm:ml-auto sm:justify-center sm:gap-5 md:order-2 md:mr-24 md:gap-10 xl:mr-20 2xl:mr-4"
            >
                <li class="hover-cursor cursor-pointer">Facebook</li>
                <li class="hover-cursor cursor-pointer">Instagram</li>
                <li class="hover-cursor cursor-pointer">Behance</li>
            </ul>
            <div
                class="hover-cursor text-primary-400 order-3 w-full sm:w-fit md:order-1"
            >
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
