<template>
  <div class="h-screen px-5 mt-16 gap-10">
    <div class="relative w-fit text-4xl flex items-center mb-10">
      <h3>Nosotros</h3>
      <div
        class="bg-secondary absolute -bottom-1 right-8 mt-1 h-0.5 w-[50%]"
      ></div>
      <UIcon
        name="i-ph-arrow-down-right-bold"
        class="text-secondary self-end"
      ></UIcon>
    </div>
    <div class="grid grid-flow-col auto-cols-fr place-content-start">
      <div class="grid grid-flow-row place-content-start gap-10 max-w-xl">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          tenetur quo minus, laborum explicabo, nihil blanditiis qui deleniti
          laudantium, at error provident assumenda. Libero quia excepturi nobis
          mollitia impedit eaque. Commodi, ullam ipsam tenetur temporibus eos
          possimus iste qui quaerat eum? Nulla, a voluptate. Velit assumenda
          quaerat, obcaecati soluta, quam ab officiis autem molestiae inventore
          repellat veritatis voluptatibus nobis molestias. Ut sapiente,
          doloremque, eius iusto exercitationem nesciunt deserunt a quisquam
          sunt provident minima, expedita amet pariatur! Distinctio corrupti,
          tempore numquam sit voluptatem ratione ea officiis repellendus
          possimus non autem sequi? Ipsa, a. Sunt incidunt necessitatibus unde
          ipsa accusantium nam quasi quisquam optio adipisci inventore. Error,
          architecto maxime eos similique iure veritatis blanditiis laboriosam
          alias fuga distinctio commodi voluptatum laudantium dignissimos!
          Repellendus debitis, voluptatum maxime magnam temporibus omnis, harum
          deserunt fuga at, tempora voluptates cum repudiandae laboriosam error
          praesentium fugit modi eaque minus ab consequatur? Hic quo eum non
          quos earum.
        </p>
        <div class="flex items-center gap-5">
          <UButton
            :ui="{ rounded: 'rounded-full' }"
            color="white"
            variant="outline"
            class="uppercase"
            >ver mas</UButton
          >
          <UButton
            :ui="{
              rounded: 'rounded-full',
              variant: {
                solid:
                  'bg-secondary dark:bg-secondary dark:text-gray-100 text-gray-100',
              },
            }"
            class="uppercase"
            variant="solid"
            >ver mas 2</UButton
          >
        </div>
      </div>
      <div class="w-full">
        <img :src="people" alt="" class="w-full h-[28rem] object-cover" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import people from '@/assets/images/people.jpeg';
</script>

<style scoped>
img {
  -webkit-mask: url('@/assets/images/empanadas.png') center/contain no-repeat;
  mask: url('@/assets/images/empanadas.png') center/contain no-repeat;
}
</style>
