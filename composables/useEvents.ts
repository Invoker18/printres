const state = reactive({
    events: [] as any,
})

export const useEvents = () => {
    async function fetchEvents() {
        const storyblokApi = useStoryblokApi()
        const { data } = await storyblokApi.get('cdn/stories/', {
            version: 'published',
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
