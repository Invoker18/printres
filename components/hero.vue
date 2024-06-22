<template>
  <section class="h-screen md:my-32 mt-72 relative -z-10" id="heroText">
    <div class="flex flex-col font-semibold text-primary leading-none">
      <div class="text-gray-100 flex text-[150px] 2xl:text-[200px]" id="text1">
        <div v-for="(letter, index) in text1" :key="index" class="">
          <span v-if="letter == ' '" class="ml-10"></span>
          {{ letter }}
        </div>
      </div>
      <div class="text-secondary flex text-[150px] 2xl:text-[200px]" id="text2">
        <div v-for="(letter, index) in text2" :key="index" class="">
          <span v-if="letter == ' '" class="ml-10"></span>
          {{ letter }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

const text1 = ref('Publicidad de');
const text2 = ref('alto impacto');

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.to('#text1 div', {
    y: 'random(100, 400)',
    rotation: 'random(100, -100)',
    scrollTrigger: {
      trigger: '#heroText',
      scrub: true,
      // markers: true,
      start: '30% center',
      end: '100% center',
    },
    stagger: 0.1,
    ease: 'power1.out',
  });
  gsap.to('#text2 div', {
    y: 'random(100, 300)',
    rotation: 'random(100, -100)',
    scrollTrigger: {
      trigger: '#heroText',
      scrub: true,
      // markers: true,
      start: '30% center',
      end: '100% center',
      pin: true,
      pinSpacing: false,
    },
    stagger: 0.1,
    ease: 'power1.out',
  });
});
</script>

<style></style>
