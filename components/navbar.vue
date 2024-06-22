<template>
  <div
    id="nav"
    class="sticky top-0 z-50 transition-all ease-in duration-500 backdrop-blur-sm bg-opacity-80 bg-primary-950"
  >
    <header
      class="flex items-center justify-between w-full px-5 max-w-screen-2xl mx-auto py-8"
    >
      <NuxtImg src="/images/logoprintres2.svg" class="w-20 lg:w-40" />
      <ul
        class="flex justify-center items-center self-end gap-3 sm:gap-20 text-sm sm:text-base"
      >
        <li
          @click="scrollTo('Home')"
          class="hover:cursor-pointer hover:scale-105 transition-all ease-linear duration-300 hover:text-secondary"
        >
          Inicio
        </li>
        <li
          @click="scrollTo('aboutUs')"
          class="hover:cursor-pointer hover:scale-105 transition-all ease-linear duration-300 hover:text-secondary"
        >
          Nosotros
        </li>
        <li
          class="hover:cursor-pointer hover:scale-105 transition-all ease-linear duration-300 hover:text-secondary"
        >
          Servicios
        </li>
        <li
          class="hover:cursor-pointer hover:scale-105 transition-all ease-linear duration-300 hover:text-secondary"
        >
          Eventos
        </li>
        <li
          class="hover:cursor-pointer hover:scale-105 transition-all ease-linear duration-300 hover:text-secondary"
        >
          Proyectos
        </li>
      </ul>
      <div class="flex items-center gap-2">
        <NuxtImg src="/images/3.svg" class="size-3 lg:size-5" />
        <!-- <UIcon name="i-marketeq-menu" class="size-8"></UIcon> -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 50 50"
        >
          <g
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="6"
          >
            <path stroke="#0091dc" d="M6.25 25h37.5" />
            <path stroke="#f87c56" d="M6.25 12.5h25m-12.5 25h25z" />
          </g>
        </svg>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap';
const scrollTo = (section: string) => {
  gsap.to(window, {
    duration: 2,
    scrollTo: { y: `#${section}` },
  });
};
onMounted(() => {
  // let tween = gsap.to('#nav', {
  //   opacity: 1,
  //   y: 'full',
  //   ease: 'power1.out',
  // });
});
</script>

<style></style>
