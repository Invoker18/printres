<template>
  <div class="h-screen md:my-32 mt-72">
    <div
      class="flex flex-col font-semibold text-[7xl] text-primary leading-none -z-10 relative"
      id="heroText"
    >
      <div class="text-gray-100 flex text-[200px]" id="text1">
        <div v-for="(letter, index) in text1" :key="index" class="">
          <span v-if="letter == ' '" class="ml-10"></span>
          {{ letter }}
        </div>
      </div>
      <div class="text-secondary flex text-[200px]" id="text2">
        <div v-for="(letter, index) in text2" :key="index" class="">
          <span v-if="letter == ' '" class="ml-10"></span>
          {{ letter }}
        </div>
      </div>
    </div>
    <div class="flex items-center text-3xl absolute right-40 bottom-14 gap-2">
      <span class="font-semibold">Scroll</span>
      <UIcon
        name="i-ph-arrow-down-right-bold"
        class="text-secondary size-8"
      ></UIcon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

const text1 = ref('Publicidad de');
const text2 = ref('alto impacto');

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  // let tl = gsap.timeline({});
  // tl.to('#text1', {
  //   opacity: 1,
  //   x: 'full',
  //   ease: 'power1.out',
  // });
  // tl.to('#text2', {
  //   opacity: 1,
  //   x: 'full',
  //   ease: 'power1.out',
  // });

  gsap.to('#text1 div', {
    y: 'random(100, 400)',
    rotation: 'random(100, -100)',
    scrollTrigger: {
      trigger: '#heroText',
      scrub: true,
      // markers: true,
      start: '60% center',
      end: 'bottom top',
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
      start: '60% center',
      end: 'bottom top',
      pin: true,
    },
    stagger: 0.1,
    ease: 'power1.out',
  });

  // let text1 = document.querySelectorAll('#text1 span');
  // console.log(text1);
  // text1.forEach((letter) => {
  //   console.log(letter);
  //   gsap.to(letter, {
  //     y: 50,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: '#heroText',
  //       scrub: true,
  //       markers: true,
  //       start: 'center center',
  //       end: 'bottom top',
  //       snap: {
  //         snapTo: 'labels', // snap to the closest label in the timeline
  //         duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //         delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  //         ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
  //       },
  //     },
  //     stagger: 0.5,
  //   });
  // });
});
</script>

<style></style>
