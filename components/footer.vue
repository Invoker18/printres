<template>
    <div class="">
        <div
            v-if="route.path === '/'"
            class="bg-primary-950 relative z-40 flex w-full flex-col items-center gap-8 px-5 py-10 lg:px-10 2xl:px-28"
        >
            <hr class="border-primary-400 w-full" />
            <div class="hover-cursor text-primary-400 w-full text-center">
                © Printres 2024 Todos los derechos reservados.
                <br />
                Diseño Miranda Jugo.
            </div>
        </div>
        <div v-else class="flex items-center px-5 py-10 lg:px-10 2xl:px-28 bg-primary-950">Footer2</div>
    </div>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>

<style></style>
