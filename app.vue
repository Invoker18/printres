<template>
    <div>
        <NuxtLoadingIndicator :color="false" class="bg-secondary" :height="4" />
        <NuxtLayout class="overflow-clip">
            <NuxtPage />
            <WhatsappWidget></WhatsappWidget>
            <UModals></UModals>
            <USlideovers />
        </NuxtLayout>
    </div>
</template>
<script setup></script>
<style></style>
