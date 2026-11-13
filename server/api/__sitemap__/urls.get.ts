interface SitemapStory {
    full_slug: string
    published_at?: string
}

interface SitemapResponse {
    stories: SitemapStory[]
}

export default defineEventHandler(async () => {
    const token = useRuntimeConfig().storyblokAccessToken
    if (!token) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Storyblok access token is not configured',
        })
    }

    const stories: SitemapStory[] = []
    const perPage = 100
    let page = 1
    let batch: SitemapStory[]

    do {
        let response: SitemapResponse
        try {
            response = await $fetch<SitemapResponse>(
                'https://api-us.storyblok.com/v2/cdn/stories/',
                {
                    query: {
                        token,
                        version: 'published',
                        starts_with: 'events/',
                        is_startpage: false,
                        per_page: perPage,
                        page,
                    },
                }
            )
        } catch (error) {
            console.error(
                'No se pudieron obtener los eventos publicados para el sitemap.',
                error instanceof Error ? error.name : 'Error desconocido'
            )
            throw createError({
                statusCode: 502,
                statusMessage: 'Unable to retrieve sitemap events',
            })
        }
        if (!Array.isArray(response.stories)) {
            throw createError({
                statusCode: 502,
                statusMessage: 'Invalid sitemap events response',
            })
        }
        batch = response.stories
        stories.push(...batch)
        page++
    } while (batch.length === perPage)

    return stories.map((story) => ({
        loc: `/${story.full_slug}`,
        ...(story.published_at ? { lastmod: story.published_at } : {}),
    }))
})
