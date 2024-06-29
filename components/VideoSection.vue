<template>
    <section>
        <div class=" bg-white brightness-90 hover-cursor2">
            <!-- <img :src="videoImg" alt="" class="h-full w-full object-cover" /> -->
            <video
                id="video"
                :src="video1"
                width="1920"
                height="1080"
                class="h-full object-cover w-full hover-cursor2"
                loop
                autoplay
                muted
            ></video>
        </div>
    </section>
</template>

<script lang="ts" setup>
import video1 from '@/assets/videos/videoHome.mp4'
</script>

<style scoped></style>
