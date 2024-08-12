<template>
    <div>
        <NuxtLoadingIndicator />
        <NuxtLayout class="overflow-clip">
            <NuxtPage />
            <WhatsappWidget></WhatsappWidget>
            <UModals></UModals>
        </NuxtLayout>
    </div>
</template>
<script setup>
const route = useRoute()
</script>
<style>
</style>
