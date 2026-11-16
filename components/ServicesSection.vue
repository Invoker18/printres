<template>
    <section
        id="servicios"
        aria-labelledby="services-title"
        class="text-primary-950 relative z-30 bg-[#f4f2ee] pt-20 sm:pt-28"
    >
        <div class="site-container">
            <div class="flex items-end justify-between gap-8">
                <div class="max-w-2xl">
                    <p
                        class="text-primary-950/60 mb-4 text-xs font-bold uppercase tracking-[0.2em]"
                    >
                        {{ content.Eyebrow }}
                    </p>
                    <h2
                        id="services-title"
                        class="text-4xl font-semibold tracking-tight sm:text-5xl"
                    >
                        {{ content.Title }}
                    </h2>
                    <p
                        class="text-primary-950/80 mt-5 text-base leading-relaxed sm:text-lg"
                    >
                        {{ content.Description }}
                    </p>
                </div>
                <div
                    aria-hidden="true"
                    class="hidden w-36 shrink-0 grid-cols-2 overflow-hidden rounded-xl sm:grid lg:w-44"
                >
                    <img
                        src="/images/shapes/vector1.png"
                        alt=""
                        width="150"
                        height="150"
                    />
                    <img
                        src="/images/shapes/vector2.png"
                        alt=""
                        width="150"
                        height="150"
                    />
                    <img
                        src="/images/shapes/vector6.png"
                        alt=""
                        width="150"
                        height="150"
                    />
                    <img
                        src="/images/shapes/vector3.png"
                        alt=""
                        width="150"
                        height="150"
                    />
                </div>
            </div>

            <div
                class="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4"
            >
                <article
                    v-for="(service, index) in content.Items"
                    :key="service._uid"
                    class="border-primary-950/15 flex flex-col overflow-hidden rounded-2xl border bg-white/60 p-6 sm:p-7"
                >
                    <div
                        class="flex items-start justify-between gap-4"
                        aria-hidden="true"
                    >
                        <span class="text-sm font-bold text-coral-700">
                            {{ String(index + 1).padStart(2, '0') }}
                        </span>
                        <div
                            class="grid size-20 place-items-center overflow-hidden rounded-2xl"
                            :class="shapes[index % shapes.length].background"
                        >
                            <img
                                :src="
                                    service.Shape?.filename ||
                                    shapes[index % shapes.length].src
                                "
                                alt=""
                                width="150"
                                height="150"
                                loading="lazy"
                                class="size-16"
                            />
                        </div>
                    </div>
                    <h3 class="mt-6 text-xl font-semibold">
                        {{ service.Title }}
                    </h3>
                    <p class="text-primary-950/80 mt-3 leading-relaxed">
                        {{ service.Description }}
                    </p>
                </article>
            </div>

            <div
                class="border-primary-950/20 mt-8 flex flex-wrap gap-x-8 gap-y-3 border-b pb-20 md:pb-28"
            >
                <NuxtLink
                    v-if="content.PortfolioLabel"
                    to="/portfolio"
                    class="inline-flex min-h-11 items-center gap-3 border-b-2 border-secondary py-2 font-semibold transition-colors hover:text-coral-700"
                >
                    {{ content.PortfolioLabel }}
                    <span aria-hidden="true">↗</span>
                </NuxtLink>
                <NuxtLink
                    v-if="content.EventsLabel"
                    to="/all-events"
                    class="inline-flex min-h-11 items-center gap-3 border-b-2 border-secondary py-2 font-semibold transition-colors hover:text-coral-700"
                >
                    {{ content.EventsLabel }} <span aria-hidden="true">↗</span>
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { defaultServicesContent, type ServicesContent } from '~/utils/services'

const props = defineProps<{ blok?: ServicesContent }>()
const content = computed(() => props.blok ?? defaultServicesContent)

const shapes = [
    {
        src: '/images/shapes/vector1.png',
        background: 'bg-primary-950',
    },
    {
        src: '/images/shapes/vector2.png',
        background: 'bg-coral-100',
    },
    {
        src: '/images/shapes/vector6.png',
        background: 'bg-primary-950',
    },
    {
        src: '/images/shapes/vector3.png',
        background: 'bg-coral-300',
    },
]
</script>
