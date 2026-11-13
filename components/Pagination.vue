<template>
    <nav
        v-if="totalPages > 1"
        aria-label="Paginación"
        class="flex flex-wrap items-center justify-center gap-2 sm:justify-end"
    >
        <NuxtLink
            v-if="page > 1"
            :to="pageLink(page - 1)"
            aria-label="Página anterior"
            :aria-current="undefined"
            class="page-control"
        >
            <span aria-hidden="true">←</span>
        </NuxtLink>
        <button
            v-else
            type="button"
            disabled
            aria-label="Página anterior"
            class="page-control"
        >
            <span aria-hidden="true">←</span>
        </button>

        <span class="text-primary-950 px-3 text-sm font-medium sm:hidden">
            Página {{ page }} de {{ totalPages }}
        </span>
        <div class="hidden items-center gap-2 sm:flex">
            <template v-for="(item, index) in pages" :key="`${item}-${index}`">
                <span
                    v-if="item === '…'"
                    class="text-primary-950/60 flex size-11 items-center justify-center"
                    aria-hidden="true"
                    >…</span
                >
                <NuxtLink
                    v-else
                    :to="pageLink(item)"
                    :aria-label="`Página ${item}`"
                    :aria-current="item === page ? 'page' : undefined"
                    class="page-control"
                    :class="{ 'is-current': item === page }"
                >
                    {{ item }}
                </NuxtLink>
            </template>
        </div>

        <NuxtLink
            v-if="page < totalPages"
            :to="pageLink(page + 1)"
            aria-label="Página siguiente"
            :aria-current="undefined"
            class="page-control"
        >
            <span aria-hidden="true">→</span>
        </NuxtLink>
        <button
            v-else
            type="button"
            disabled
            aria-label="Página siguiente"
            class="page-control"
        >
            <span aria-hidden="true">→</span>
        </button>
    </nav>
</template>

<script lang="ts" setup>
const props = defineProps<{
    page: number
    totalPages: number
}>()
const route = useRoute()
const pageLink = (page: number) => ({
    path: route.path,
    query: page > 1 ? { page } : {},
    hash: route.hash,
})

const pages = computed<(number | '…')[]>(() => {
    const { page, totalPages } = props
    if (totalPages <= 5) {
        return Array.from({ length: totalPages }, (_, index) => index + 1)
    }
    if (page <= 3) return [1, 2, 3, '…', totalPages]
    if (page >= totalPages - 2) {
        return [1, '…', totalPages - 2, totalPages - 1, totalPages]
    }
    return [1, '…', page, '…', totalPages]
})
</script>

<style scoped>
.page-control {
    @apply border-primary-950/20 text-primary-950 hover:border-primary-950 hover:bg-primary-950 inline-flex size-11 items-center justify-center rounded-full border bg-transparent text-sm font-semibold transition-colors hover:text-white;
}

.page-control.is-current {
    @apply border-primary-950 bg-primary-950 text-white;
}

.page-control:disabled {
    @apply border-primary-950/10 text-primary-950/30 cursor-not-allowed;
}
</style>
