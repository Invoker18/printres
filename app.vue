<template>
    <div id="home">
        <NuxtLoadingIndicator :color="false" class="bg-secondary" :height="4" />
        <NuxtLayout class="overflow-clip">
            <NuxtPage />
            <WhatsappWidget></WhatsappWidget>
            <UModals></UModals>
            <USlideovers />
            <UNotifications
                class="pointer-events-none"
                :ui="{
                    strategy: 'override',
                    position: 'top-0 right-1/2 translate-x-1/2',
                    width: 'w-full sm:w-full max-w-lg',
                    container: 'px-1 sm:px-1 py-6 space-y-3 overflow-y-auto',
                }"
            />
        </NuxtLayout>
    </div>
</template>
<script setup></script>
<style></style>
