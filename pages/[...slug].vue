<template>
    <div>
        <StoryblokComponent
            v-if="status !== 'error' && story"
            :blok="story.content"
        />
    </div>
</template>

<script lang="ts" setup>
const { slug }: any = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'

const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'

const { data: story, status } = await useAsyncData(`${url}`, async () => {
    const { data } = await useStoryblokApi().get(
        `cdn/stories/${url.replace(/\/$/, '')}`,
        {
            version: isPreview ? 'draft' : 'published',
        }
    )
    return data?.story
})

if (!isPreview) {
    if (!story.value) {
        showError({ statusCode: 404, statusMessage: 'Page Not Found' })
    }

    defineOgImageComponent('MyTemplate', {
        title: story.value.name,
        description: story.value.content.description ?? 'Impresion sin limites',
        headline: 'Printres',
    })
}

// defineOgImageComponent('Nuxt', {
//   headline: 'Greetings',
//   title: 'Hello OG Image 👋',
//   description: 'Look what at me using the Nuxt template',
// })

// const { slug } = useRoute().params as any

// const story = await useAsyncStoryblok(
//     slug && slug.length > 0 ? slug.join('/') : 'home',
//     { version: 'published'}

// )

// if (story.value.status) {
//     throw createError({
//         statusCode: story.value.status,
//         statusMessage: story.value.response,
//     })
// }

// const component = resolveComponent(story.value.content.component)
</script>

<style></style>
