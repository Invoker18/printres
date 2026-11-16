<template>
    <div v-editable="blok">
        <template v-for="(section, index) in blok.body" :key="section._uid">
            <StoryblokComponent :blok="section" />
            <ServicesSection
                v-if="isHome && !hasServices && index === servicesPosition"
            />
        </template>
    </div>
</template>

<script setup>
import { getServicesPosition, hasServicesBlock } from '~/utils/services'

const props = defineProps({ blok: Object })
const route = useRoute()
const isHome = computed(() => route.path === '/')
const hasServices = computed(() => hasServicesBlock(props.blok?.body || []))
const servicesPosition = computed(() =>
    getServicesPosition(props.blok?.body || [])
)
</script>
