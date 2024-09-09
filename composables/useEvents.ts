const state = reactive({
    events: [] as any,
})

export const useEvents = () => {
    const isPreview = useRuntimeConfig().public.NODE_ENV_VERCEL !== 'production'
    async function fetchEvents() {
        const storyblokApi = useStoryblokApi()
        const { data } = await storyblokApi.get('cdn/stories/', {
            version: isPreview ? 'draft' : 'published',
            starts_with: 'events/',
            is_startpage: false,
            sort_by: 'created_at:desc',
        })

        state.events = data.stories
    }
    return {
        ...toRefs(state),
        fetchEvents,
    }
}
