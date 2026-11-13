<template>
    <section
        id="events"
        v-editable="blok"
        class="text-primary-950 relative z-40 bg-[#f4f2ee] pb-20 sm:pb-28"
    >
        <div class="site-container">
            <div class="border-primary-950/20 border-t pt-20 sm:pt-28">
                <div
                    class="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
                >
                    <div class="max-w-2xl">
                        <p
                            class="text-primary-950/60 mb-4 text-xs font-bold uppercase tracking-[0.2em]"
                        >
                            Experiencias que se recuerdan
                        </p>
                        <h2
                            class="text-4xl font-semibold tracking-tight sm:text-5xl"
                        >
                            {{ blok.Title }}
                        </h2>
                        <p
                            class="text-primary-950/80 mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
                        >
                            {{ blok.Text1 }}
                        </p>
                    </div>
                    <NuxtLink
                        :to="{ path: '/all-events', query: { page: 1 } }"
                        class="inline-flex min-h-11 w-fit items-center gap-3 border-b-2 border-secondary py-2 font-semibold transition-colors hover:text-coral-700"
                    >
                        Ver todos los eventos
                        <span aria-hidden="true" class="text-xl">↗</span>
                    </NuxtLink>
                </div>
                <div
                    v-if="featuredEvents.length"
                    class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                >
                    <EventCard
                        v-for="event in featuredEvents"
                        :key="event.uuid"
                        :event="event.content"
                        :slug="event.full_slug"
                    />
                </div>
                <p v-else class="text-primary-950/80">
                    No hay eventos disponibles por el momento.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({ blok: { type: Object, default: () => ({}) } })
const { sortedEvents, fetchEvents } = useEvents()
await fetchEvents()
const featuredEvents = computed(() => sortedEvents.value.slice(0, 3))
</script>
