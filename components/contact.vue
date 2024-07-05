<template>
    <div
        class="hover-cursor sticky bottom-0 z-20 grid h-[110vh] place-content-center bg-curious-blue-600 pt-56 md:pt-24"
    >
        <TresCanvas window-size render-mode="on-demand" class="absolute">
            <TresPerspectiveCamera
                :position="[4, 4, 4]"
                :fov="45"
                :look-at="[0, 0, 0]"
            />
            <OrbitControls></OrbitControls>
            <TresMesh :position="[2, 0, 0]">
                <TresSphereGeometry args />
                <TresMeshBasicMaterial color="#001489" />
            </TresMesh>
            <TresAmbientLight :intensity="1" />
        </TresCanvas>
        <div class="grid h-full w-full gap-5 px-5">
            <div class="mb-3 text-center text-2xl">
                ¿Necesitas ayuda con tus Proyectos?
            </div>
            <div
                class="text-primary-950 dark:text-primary-950 text-center text-8xl uppercase md:text-9xl"
            >
                ¡Di
                <br />
                Hola!
            </div>
            <div class="mx-auto">
                <UButton
                    variant="outline"
                    color="white"
                    icon="i-ph-arrow-up-right-bold"
                    trailing
                    size="xl"
                    class="text-2xl"
                >
                    Contactanos
                </UButton>
            </div>
            <hr class="border-primary-950 mt-10" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { OrbitControls, Smoke } from '@tresjs/cientos'
</script>

<style></style>
