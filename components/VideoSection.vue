<template>
    <section>
        <div class="h-[80vh] bg-white brightness-75">
            <!-- <img :src="videoImg" alt="" class="h-full w-full object-cover" /> -->
            <video
                id="video"
                :src="video1"
                width="1920"
                height="1080"
                class="h-full object-cover w-full max-w-screen-2xl mx-auto"
                loop
                autoplay
                muted
            ></video>
        </div>
    </section>
</template>

<script lang="ts" setup>
import videoImg from '@/assets/images/video.png'
import video1 from '@/assets/videos/H264.mp4'
</script>

<style scoped></style>
