<template>
    <section>
        <div class="hover-cursor2 relative z-40 bg-white brightness-90">
            <img
                src="https://picsum.photos/1920/1080?random=10"
                alt=""
                class="h-full w-full object-cover"
            />
            <!-- <video
                id="video"
                :src="video1"
                width="1920"
                height="1080"
                class="h-full object-cover w-full hover-cursor2 min-h-80"
                loop
                autoplay
                muted
                playsinline
                preload="auto"
            ></video> -->
        </div>
    </section>
</template>

<script lang="ts" setup>
import video1 from '@/assets/videos/videoHome.mp4'
</script>

<style scoped></style>
