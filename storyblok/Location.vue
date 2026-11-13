<template>
    <div
        id="location"
        v-editable="blok"
        class="bg-primary-950 relative z-40 py-20 sm:py-28"
    >
        <div
            class="site-container grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] xl:gap-20"
        >
            <div class="min-w-0">
                <p
                    class="text-xs font-bold uppercase tracking-[0.2em] text-coral-300"
                >
                    Visítanos
                </p>
                <h2
                    class="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl"
                >
                    Hablemos
                </h2>
                <p class="mt-5 max-w-sm leading-relaxed text-white/75">
                    Estamos aquí para ayudarte a dar vida a tu próximo proyecto.
                </p>
                <dl
                    class="mt-8 divide-y divide-white/15 border-y border-white/15"
                >
                    <div class="flex items-start gap-4 py-5">
                        <span class="contact-icon">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="size-5"
                            >
                                <path
                                    d="M5 3.5h3l1.5 4-2 1.7a14 14 0 0 0 7.3 7.3l1.7-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.9 16.9 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z"
                                />
                            </svg>
                        </span>
                        <div class="min-w-0">
                            <dt class="contact-label">Teléfono</dt>
                            <dd class="mt-1">
                                <a
                                    :href="`tel:${String(blok.Number || '').replace(/[^\d+]/g, '')}`"
                                    class="contact-link"
                                    >{{ blok.Number }}</a
                                >
                            </dd>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 py-5">
                        <span class="contact-icon">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="size-5"
                            >
                                <rect
                                    x="3"
                                    y="5"
                                    width="18"
                                    height="14"
                                    rx="2"
                                />
                                <path d="m4 7 8 6 8-6" />
                            </svg>
                        </span>
                        <div class="min-w-0">
                            <dt class="contact-label">Correo electrónico</dt>
                            <dd class="mt-1">
                                <a
                                    :href="`mailto:${blok.Email}`"
                                    class="contact-link"
                                    >{{ blok.Email }}</a
                                >
                            </dd>
                        </div>
                    </div>
                    <div class="flex items-start gap-4 py-5">
                        <span class="contact-icon">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="size-5"
                            >
                                <path
                                    d="M19 10c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z"
                                />
                                <circle cx="12" cy="10" r="2.5" />
                            </svg>
                        </span>
                        <div class="min-w-0">
                            <dt class="contact-label">Dirección</dt>
                            <dd class="mt-1">
                                <a
                                    :href="mapsUrl"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="contact-link"
                                    >{{ blok.Address }}</a
                                >
                            </dd>
                        </div>
                    </div>
                </dl>
            </div>
            <div
                class="min-w-0 rounded-2xl border border-white/15 bg-white/5 p-2 sm:p-3"
            >
                <div class="h-80 w-full overflow-hidden rounded-xl sm:h-96">
                    <iframe
                        title="Ubicación de Printres en Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3174403739504!2d-79.5209539889663!3d9.03477979098933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca94d3cdfa713%3A0xd9978d65b54dafb!2sPrintres!5e0!3m2!1ses!2sve!4v1720189304037!5m2!1ses!2sve"
                        width="100%"
                        height="100%"
                        style="border: 0"
                        loading="lazy"
                        class="h-full w-full"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div
                    class="flex flex-wrap items-center justify-between gap-2 px-2 py-3 sm:px-3"
                >
                    <span class="text-sm font-medium text-white/80"
                        >Nuestra ubicación</span
                    >
                    <a
                        :href="mapsUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-coral-300"
                    >
                        Cómo llegar <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    blok: {
        type: Object,
        default: () => ({}),
    },
})

const mapsUrl =
    'https://www.google.com/maps?ll=9.03478,-79.518374&z=16&t=m&hl=es&gl=VE&mapclient=embed&cid=979947255980415739'
</script>

<style scoped>
.contact-icon {
    @apply flex size-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-coral-300;
}

.contact-label {
    @apply text-xs font-semibold uppercase tracking-[0.12em] text-white/65;
}

.contact-link {
    @apply text-base font-medium leading-relaxed text-white transition-colors hover:text-coral-300;
    overflow-wrap: anywhere;
}
</style>
