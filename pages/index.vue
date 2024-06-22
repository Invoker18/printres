<template>
  <div class="">
    <Hero class="max-w-screen-2xl mx-auto px-3"></Hero>
    <div
      id="scrollText"
      class="flex items-center text-4xl gap-2 absolute bottom-12 right-6 2xl:right-24"
    >
      <span class="font-semibold">Scroll</span>
      <UIcon
        name="i-ph-arrow-down-right-bold"
        class="text-secondary size-8"
      ></UIcon>
    </div>
    <VideoSection></VideoSection>
    <About class="max-w-screen-2xl mx-auto"></About>
    <Projects></Projects>
    <Events></Events>
    <Contact></Contact>
    <Location></Location>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';

const text1 = ref('Publicidad de');
const text2 = ref('alto impacto');

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.to('#scrollText', {
    opacity: 0,
    scrollTrigger: {
      trigger: '#heroText',
      start: '30% center',
      end: '100% center',
      toggleActions: 'play pause resume reset',
    },
    stagger: 0.1,
    ease: 'power2.out',
    duration: 0.5,
  });

  const sections = document.querySelectorAll('.section');
  console.log(sections);

  sections.forEach((section, index) => {
    const isLast = index === sections.length - 1;

    console.log(isLast, 'isLast');

    gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: '20% top',
          markers: true,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      })
      .to(
        section,
        {
          ease: 'none',
          startAt: { filter: 'brightness(100%) blur(0px)' },
          filter: isLast ? 'none' : 'brightness(50%) blur(10px)',
          // scale: 0.9,
          // borderRadius: 40,
        },
        '<'
      );
  });
});
</script>

<style></style>
