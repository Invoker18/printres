<template>
    <div v-editable="blok">
        <ServicesSection :blok="blok" />
    </div>
</template>

<script setup lang="ts">
import type { ServicesContent } from '~/utils/services'

defineProps<{ blok: ServicesContent }>()
</script>
