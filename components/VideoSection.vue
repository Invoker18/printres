<template>
    <section>
        <div class="hover-cursor2 relative z-40 bg-white brightness-90">
            <video
                id="video"
                :src="video1"
                width="1920"
                height="1080"
                class="hover-cursor2 h-full min-h-80 w-full object-cover"
                loop
                autoplay
                muted
                playsinline
                preload="auto"
            ></video>
        </div>
    </section>
</template>

<script lang="ts" setup>
import video1 from '@/assets/videos/videoHome.mp4'
</script>

<style scoped></style>
