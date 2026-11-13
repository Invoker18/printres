import type { MaybeRefOrGetter } from 'vue'

export const usePageNumber = (
    total: MaybeRefOrGetter<number>,
    perPage: number
) => {
    const route = useRoute()
    const totalPages = computed(() => Math.ceil(toValue(total) / perPage))
    const page = computed(() => {
        const requested = Number(route.query.page)
        if (!Number.isInteger(requested) || requested < 1) return 1
        return Math.min(requested, Math.max(totalPages.value, 1))
    })

    return { page, totalPages }
}
