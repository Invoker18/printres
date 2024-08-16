<template>
    <UModal
        :ui="{
            container: 'items-start sm:items-center justify-center text-center',
            inner: 'overflow-hidden',
            background: 'bg-primary-950/90 dark:bg-primary-950/90',
            overlay: {
                background: 'bg-gray-800/50 dark:bg-gray-800/50',
            },
        }"
    >
        <div class="bg-primary-950/90 gap-3 rounded-3xl p-8 backdrop-blur-md">
            <div class="mb-10 flex items-end justify-between gap-5">
                <h3 class="text-2xl">
                    Contacto
                    <hr
                        class="ml-2 w-2/3 rounded-md border-[1.5px] border-secondary"
                    />
                </h3>
                <div class="max-w-full">
                    <img :src="contactShape" alt="" class="" />
                </div>
            </div>
            <form action="" class="grid grid-flow-row gap-3">
                <input
                    type="text"
                    placeholder="Nombre Completo..."
                    class="rounded-md border border-gray-400 bg-transparent p-2.5 text-gray-100 placeholder-gray-200"
                />
                <input
                    type="email"
                    placeholder="Correo..."
                    class="rounded-md border border-gray-400 bg-transparent p-2.5 text-gray-100 placeholder-gray-200"
                />
                <textarea
                    name="mensaje"
                    id=""
                    placeholder="Mensaje..."
                    rows="6"
                    class="rounded-md bg-curious-blue-600 p-2.5 text-gray-100 placeholder-gray-200"
                ></textarea>
                <button
                    type="submit"
                    class="mt-3 rounded-md bg-secondary p-2.5 text-gray-200"
                >
                    Enviar
                </button>
            </form>
        </div>
    </UModal>
</template>

<script lang="ts" setup>
import contactShape from '@/assets/images/shapes/contactShape.png'
const isOpen = ref(false)
</script>

<style></style>
