<template>
    <div
        v-editable="blok"
        class="relative grid min-h-[32rem] place-content-center bg-curious-blue-600 px-5 py-24 sm:min-h-screen"
        id="contactContainer"
        style="contain: paint"
    >
        <div class="relative z-40 w-full max-w-2xl">
            <div
                class="mx-auto flex h-fit w-full max-w-xl flex-col gap-5 rounded-md"
            >
                <div class="text-center text-lg font-medium sm:text-xl">
                    {{ blok.Title }}
                </div>
                <div
                    class="text-primary-950 text-center text-5xl font-semibold uppercase leading-none tracking-tight sm:text-7xl md:text-8xl"
                >
                    {{ blok.Phrase1 }}
                    <br />
                    {{ blok.Phrase2 }}
                </div>
                <div
                    class="mx-auto mt-5 flex flex-wrap items-center justify-center gap-4"
                >
                    <button
                        type="button"
                        class="bg-primary-950 hover:bg-primary-900 inline-flex min-h-12 items-center rounded-full px-6 text-base font-semibold text-white transition-colors"
                        @click="openModal()"
                    >
                        Cotizar proyecto
                        <span aria-hidden="true" class="ml-2 text-xl">↗</span>
                    </button>
                    <a
                        href="https://wa.me/50760395024"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="border-primary-950 text-primary-950 hover:bg-primary-950 inline-flex min-h-12 items-center rounded-full border px-6 font-semibold transition-colors hover:text-white"
                    >
                        Escribir por WhatsApp
                    </a>
                </div>
            </div>
        </div>
        <div class="hidden md:block">
            <Threejs />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ContactModal } from '#components'

defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})

const modal = useModal()
const openModal = () => {
    modal.open(ContactModal)
}
</script>

<style scoped></style>
