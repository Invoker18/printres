import type { Ref } from 'vue'

export const useListingSeo = (page: Ref<number>, title: string) => {
    const route = useRoute()
    const site = useSiteConfig()
    const canonical = computed(() => {
        const url = new URL(route.path, site.url)
        if (page.value > 1) url.searchParams.set('page', String(page.value))
        return url.href
    })
    const pageTitle = computed(() =>
        page.value > 1 ? `${title} - Página ${page.value}` : title
    )

    useHead({
        link: [{ rel: 'canonical', href: canonical }],
    })
    useSeoMeta({
        title: pageTitle,
        ogTitle: () => `${pageTitle.value} | Printres`,
        ogUrl: canonical,
    })
}
