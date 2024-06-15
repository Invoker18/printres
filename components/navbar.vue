<template>
  <div class="p-4 lg:py-8 2xl:py-12 max-w-screen-2xl fixed  w-full">
      <div class="flex items-center justify-between w-full ">
        <NuxtImg src="/images/logoprintres2.svg" class="w-20 lg:w-40" />
        <ul class="flex  justify-center items-center self-end gap-3 sm:gap-20 text-sm sm:text-base ">
          <li class="hover:scale-105 transition-all ease-linear duration-300">Inicio</li>
          <li class="hover:scale-105 transition-all ease-linear duration-300">Nosotros</li>
          <li class="hover:scale-105 transition-all ease-linear duration-300">Servicios</li>
          <li class="hover:scale-105 transition-all ease-linear duration-300">Eventos</li>
          <li class="hover:scale-105 transition-all ease-linear duration-300">Proyectos</li>
        </ul>
        <div class="flex items-center">
          <NuxtImg src="/images/3.svg" class="size-3 lg:size-5" />
          <UIcon name="jam:menu" class="size-8" ></UIcon>
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
import logo from '@/assets/logoprintres.svg'

</script>

<style>

</style>