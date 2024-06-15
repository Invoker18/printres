<template>
  <div class="max-w-screen-2xl p-4 lg:p-8 lg:px-16 2xl:p-12 ">
      <div class="flex relative items-end">
        <NuxtImg src="/images/logoprintres2.svg" class="w-24 lg:w-40 absolute" />
        <div class="min-w-16"></div>
        <ul class="flex flex-1 justify-center items-center  gap-3 sm:gap-6 text-sm sm:text-base ">
          <li>Nosotros</li>
          <li>Servicios</li>
          <li>Eventos</li>
          <li>Proyectos</li>
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