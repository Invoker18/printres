<template>
    <div
        class="hover-cursor sticky bottom-0 z-20 grid h-[110vh] place-content-center bg-curious-blue-600 pt-56 md:pt-24"
    >
        <TresCanvas
            shadows
            alpha
            window-size
            power-preference="high-performance"
            class="-z-10"
        >
            <OrbitControls :enable-zoom="false" />
            <TresPerspectiveCamera
                :position="[1, 2, 5]"
                :fov="45"
                :aspect="1"
                :near="0.1"
                :far="1000"
            />
            <!-- <Suspense>
                <TexturedBall />
            </Suspense> -->
            <TresMesh>
                <TresSphereGeometry :args="[15, 32, 16]"></TresSphereGeometry>
                <TresMeshBasicMaterial color="red" />
            </TresMesh>
            <TresDirectionalLight
                :position="[0, 2, 4]"
                :intensity="2"
                cast-shadow
            />
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

// Half a sphere
const phiStart = ref(0)
const phiEnd = ref(Math.PI * 2)
const thetaStart = ref(0)
const thetaEnd = ref(Math.PI / 2)
</script>

<style></style>
