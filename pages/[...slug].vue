<template>
    <div>
        <StoryblokComponent
            v-if="status !== 'error' && story"
            :blok="story.content"
        />
    </div>
</template>

<script lang="ts" setup>
const { slug } = useRoute().params
const url = Array.isArray(slug) ? slug.join('/') || 'home' : slug || 'home'

const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'

const {
    data: story,
    status,
    error,
} = await useAsyncData(url, async () => {
    const { data } = await useStoryblokApi().get(
        `cdn/stories/${url.replace(/\/$/, '')}`,
        {
            version: isPreview ? 'draft' : 'published',
        }
    )
    return data?.story
})

if (!story.value) {
    throw createError({
        statusCode: error.value?.statusCode || 404,
        statusMessage: error.value?.statusMessage || 'Page Not Found',
    })
}

const defaultDescription =
    'Impresión digital, gran formato y offset en Panamá. En Printres damos vida a proyectos y eventos para tu marca.'
const content = story.value.content
const title =
    url === 'home'
        ? 'Imprenta y eventos en Panamá'
        : url === 'portfolio'
          ? 'Trabajos de impresión y proyectos'
          : content.Title || story.value.name
const descriptionText =
    typeof content.Description === 'string' ? content.Description.trim() : ''
const description =
    url === 'home'
        ? defaultDescription
        : content.component === 'Event' && descriptionText.length < 50
          ? `Conoce ${title}, un proyecto de Printres${content.Location ? ` en ${content.Location}` : ''}. Descubre nuestro trabajo de impresión y montaje para eventos.`
          : descriptionText || defaultDescription
const seoDescription =
    description.length > 160
        ? `${description.slice(0, 157).replace(/\s+\S*$/, '')}…`
        : description

useSeoMeta({
    title,
    description: seoDescription,
    ogTitle: `${title} | Printres`,
    ogDescription: seoDescription,
    ogLocale: 'es_PA',
    twitterCard: 'summary_large_image',
})

if (url === 'home') {
    const location = content.body?.find(
        (block: { component: string }) => block.component === 'Location'
    )
    if (location?.Address) {
        useSchemaOrg([
            defineLocalBusiness({
                name: 'Printres',
                telephone: location.Number,
                email: location.Email,
                address: {
                    streetAddress: location.Address,
                    addressCountry: 'PA',
                },
                image: '/OgImage.png',
                sameAs: [
                    'https://www.instagram.com/printr3s/',
                    'https://www.facebook.com/printr3s/',
                ],
            }),
        ])
    }
}

const hero = content.body?.find(
    (block: { component: string }) => block.component === 'Hero'
)
const imageTitle =
    url === 'home'
        ? [hero?.Phrase1, hero?.Phrase2].filter(Boolean).join(' ') ||
          'Impresión sin límites'
        : title
const imageHeadline =
    content.component === 'Event'
        ? 'PROYECTOS Y EVENTOS'
        : url === 'portfolio'
          ? 'NUESTROS TRABAJOS'
          : url === 'all-events'
            ? 'NUESTROS EVENTOS'
            : 'IMPRESIÓN EN PANAMÁ'
defineOgImageComponent(
    'MyTemplate',
    {
        title: imageTitle,
        description:
            url === 'home'
                ? 'Impresión, proyectos y experiencias que dan vida a tu marca.'
                : seoDescription,
        headline: imageHeadline,
    },
    { width: 1200, height: 630 }
)
</script>

<style></style>
