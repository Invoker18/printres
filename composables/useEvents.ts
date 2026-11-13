interface EventImage {
    filename: string
    alt?: string
}

interface EventStory {
    uuid: string
    full_slug: string
    content: {
        Title: string
        Date: string
        Location: string
        Slider?: EventImage[]
    }
}

const state = reactive({
    events: [] as EventStory[],
})

const sortedEvents = computed(() =>
    [...state.events].sort(
        (a, b) =>
            new Date(b.content.Date).getTime() -
            new Date(a.content.Date).getTime()
    )
)

export const useEvents = () => {
    const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'
    async function fetchEvents() {
        const storyblokApi = useStoryblokApi()
        const events: EventStory[] = []
        const perPage = 100
        let page = 1
        let batch: EventStory[]
        do {
            const { data } = await storyblokApi.get('cdn/stories/', {
                version: isPreview ? 'draft' : 'published',
                starts_with: 'events/',
                is_startpage: false,
                sort_by: 'created_at:desc',
                per_page: perPage,
                page,
            })
            if (!Array.isArray(data.stories)) {
                throw new Error(
                    'La respuesta de eventos de Storyblok no es válida.'
                )
            }
            batch = data.stories
            events.push(...batch)
            page++
        } while (batch.length === perPage)

        state.events = events
    }
    return {
        ...toRefs(state),
        sortedEvents,
        fetchEvents,
    }
}
