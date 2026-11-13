<template>
    <div
        class="flex flex-wrap gap-x-5 gap-y-2"
        :class="{ 'flex-col items-start': stacked }"
    >
        <a
            v-for="social in visibleLinks"
            :key="social.name"
            :href="social.href"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link group inline-flex min-h-11 items-center gap-3 text-sm font-medium text-white/85 transition-colors hover:text-white"
        >
            <span
                class="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-colors group-hover:border-coral-300 group-hover:bg-white/10"
            >
                <svg
                    v-if="social.name === 'Instagram'"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.7"
                    class="size-5"
                >
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                        cx="17.5"
                        cy="6.5"
                        r="0.9"
                        fill="currentColor"
                        stroke="none"
                    />
                </svg>
                <svg
                    v-else-if="social.name === 'Facebook'"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="size-5"
                >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M13 21v-9.5c0-2 1-3 2.8-3h1M10 12h6" />
                </svg>
                <svg
                    v-else
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="size-5"
                >
                    <path d="M5 18.5 3.5 21l3.8-1a9 9 0 1 0-2.3-1.5Z" />
                    <path
                        d="M8.5 8.5c.6 3.2 3.8 6.4 7 7l1.2-1.4-2.4-1.1-.9.9a7.8 7.8 0 0 1-3.3-3.3l.9-.9-1.1-2.4Z"
                    />
                </svg>
            </span>
            {{ social.name }}
        </a>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    stacked?: boolean
    includeWhatsapp?: boolean
}>()

const links = [
    { name: 'Instagram', href: 'https://www.instagram.com/printr3s/?hl=es-la' },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/printr3s/?locale=es_LA',
    },
]

const visibleLinks = computed(() =>
    props.includeWhatsapp
        ? [{ name: 'WhatsApp', href: 'https://wa.me/50760395024' }, ...links]
        : links
)
</script>
