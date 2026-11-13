<template>
    <section
        id="contactContainer"
        v-editable="blok"
        class="bg-primary-900 relative overflow-hidden py-20 text-white sm:py-28"
    >
        <div
            class="site-container grid items-center gap-10 md:grid-cols-2 md:gap-12 xl:gap-20"
        >
            <div class="max-w-xl md:self-end">
                <p
                    class="text-xs font-bold uppercase tracking-[0.2em] text-coral-300"
                >
                    {{ blok.Title }}
                </p>
                <h2
                    class="mt-5 text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl"
                >
                    {{ blok.Phrase1 }}<br />
                    {{ blok.Phrase2 }}
                </h2>
                <p
                    class="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg"
                >
                    Cuéntanos tu proyecto y encontremos juntos la mejor forma de
                    hacerlo realidad.
                </p>
            </div>
            <div class="min-w-0 md:col-start-2 md:row-span-2 md:row-start-1">
                <BrandSculpture />
            </div>
            <div
                class="flex flex-wrap items-center gap-3 md:col-start-1 md:row-start-2 md:self-start"
            >
                <button
                    type="button"
                    class="text-primary-950 inline-flex min-h-12 items-center justify-center rounded-full bg-coral-300 px-6 text-base font-semibold transition-colors hover:bg-coral-200"
                    @click="openModal()"
                >
                    Cotizar proyecto
                    <span aria-hidden="true" class="ml-2 text-xl">↗</span>
                </button>
                <a
                    href="https://wa.me/50760395024"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 px-6 font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
                >
                    Escribir por WhatsApp
                </a>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ContactModal } from '#components'

defineProps({
    blok: {
        type: Object,
        default: () => ({}),
    },
})

const modal = useModal()
const openModal = () => {
    modal.open(ContactModal)
}
</script>
