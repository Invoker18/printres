export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('sitemap:resolved', async ({ urls }) => {
        if (
            urls.some((url: { _path?: { pathname: string } }) =>
                url._path?.pathname.startsWith('/events/')
            )
        ) {
            return
        }

        // The sitemap module otherwise returns a partial sitemap when a source fails.
        const events = await $fetch<Array<{ loc: string }>>(
            '/api/__sitemap__/urls'
        )
        if (events.length) {
            throw createError({
                statusCode: 503,
                statusMessage: 'Sitemap events could not be resolved',
            })
        }
    })
})
