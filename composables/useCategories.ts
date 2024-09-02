const state = reactive({
    categories: [] as any,
})

export const useCategories = () => {
    const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'
    async function fetchCategories() {
        const storyblokApi = useStoryblokApi()
        const { data } = await storyblokApi.get('cdn/stories/', {
            version: isPreview ? 'draft' : 'published',
            starts_with: 'categories/',
            is_startpage: false,
        })

        state.categories = data.stories
    }
    return {
        ...toRefs(state),
        fetchCategories,
    }
}
