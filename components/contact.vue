<template>
    <div
        class="hover-cursor sticky bottom-0 z-20 grid h-[110vh] place-content-center bg-curious-blue-600 pt-56 md:pt-24"
    >
        <!-- <TresCanvas
            shadows
            alpha
            window-size
            power-preference="high-performance"
        >
            <OrbitControls :enable-zoom="false" />
            <TresPerspectiveCamera
                :position="[1, 2, 5]"
                :fov="45"
                :aspect="1"
                :near="0.1"
                :far="1000"
            />
            <TresMesh
                :position="[2, 0, 0]"
                :rotation="[7, 0, 0]"
                :material="DoubleSide"
            >
                <TresSphereGeometry
                    :args="[1, 16, 32, 0, 2 * Math.PI, 0, 0.5 * Math.PI]"
                    :material="DoubleSide"
                ></TresSphereGeometry>
                <TresMeshBasicMaterial :material="DoubleSide" />
            </TresMesh>
            <TresAxesHelper></TresAxesHelper>
            <TresDirectionalLight
                :position="[0, 2, 4]"
                :intensity="2"
                cast-shadow
            />
        </TresCanvas> -->
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
                    @click="isOpen = true"
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

        <UModal
            v-model="isOpen"
            :ui="{
                container:
                    'items-start sm:items-center justify-center text-center',
                inner: 'overflow-hidden',
            }"
        >
            <UCard
                :ui="{
                    ring: '',
                    divide: 'divide-y divide-gray-100 dark:divide-gray-800',
                    background: 'bg-primary-950 dark:bg-primary-950',
                }"
            >
                <template #header> header </template>

                Body
                <template #footer> Footer </template>
            </UCard>
        </UModal>
    </div>
</template>

<script lang="ts" setup>
import { OrbitControls, Smoke } from '@tresjs/cientos'
import { DoubleSide } from 'three'

const isOpen = ref(false)

// Half a sphere
const phiStart = ref(0)
const phiEnd = ref(Math.PI * 2)
const thetaStart = ref(0)
const thetaEnd = ref(Math.PI / 2)
</script>

<style></style>
