<template>
    <div>
        <TresCanvas
            shadows
            alpha
            window-size
            power-preference="high-performance"
            class="relative z-50"
        >
            <TresPerspectiveCamera
                ref="camera"
                :position="[0, 3, 10]"
                :fov="45"
                :aspect="1"
                :near="0.1"
                :far="100"
                :lookAt="[0, 3, 0]"
            />
            <!-- <TresGridHelper :args="[10, 10]" /> -->
            <!-- <OrbitControls :enable-zoom="false" /> -->

            <TresAmbientLight :intensity="1.8" />
            <TresDirectionalLight
                cast-shadow
                :position="[0, 10, 0]"
                :intensity="1"
            />

            <!-- SMOKE -->
            <!-- <Suspense>
                <Smoke
                    :speed="0.8"
                    :opacity="1"
                    :width="20"
                    :segments="20"
                    :color="'#000000'"
                    :depthTest="false"
                />
            </Suspense> -->

            <Suspense>
                <TexturedBall></TexturedBall>
            </Suspense>
            <!-- ORANGE SPHERE -->
            <!-- <TresMesh ref="sphereRef" cast-shadow :position="[0, 0, 0]">
                <TresSphereGeometry :args="[0.5, 32, 32]" />
                <TresMeshStandardMaterial />
            </TresMesh> -->
            <!-- CIRCLE TO SPHERE -->
            <TresMesh
                :receive-shadow="true"
                :position="[-4, 1, 0]"
                :rotation="[1.655, -0.812, 0]"
            >
                <TresCircleGeometry :args="[1, 32]"></TresCircleGeometry>
                <TresMeshPhongMaterial
                    color="#051bd2"
                    :side="DoubleSide"
                ></TresMeshPhongMaterial>
            </TresMesh>
            <!-- FIRST SPEHERE -->
            <TresMesh
                :receive-shadow="true"
                cast-shadow
                :position="[-4, 1, 0]"
                :rotation="[
                    0.05714197505422066, 3.1563768947646919,
                    -2.32289468688899159,
                ]"
            >
                <TresSphereGeometry
                    :args="[1, 64, 16, phiStart, phiEnd, thetaStart, thetaEnd]"
                ></TresSphereGeometry>
                <TresMeshPhongMaterial
                    TresMeshPhongMaterial
                    :side="DoubleSide"
                    color="#051bd2"
                ></TresMeshPhongMaterial>
            </TresMesh>
            <!-- CIRCLE TO SPHERE -->
            <TresMesh
                :receive-shadow="true"
                :position="[4, 1, 0]"
                :rotation="[-1.64, -0.819, 0]"
            >
                <TresCircleGeometry :args="[1, 32]"></TresCircleGeometry>
                <TresMeshPhongMaterial
                    color="#051bd2"
                    :side="DoubleSide"
                ></TresMeshPhongMaterial>
            </TresMesh>
            <!-- SECOND SPEHERE -->
            <TresMesh
                :receive-shadow="true"
                cast-shadow
                :position="[4, 1, 0]"
                :rotation="[
                    -0.05714197505422066, -3.1563768947646919,
                    2.32289468688899159,
                ]"
            >
                <TresSphereGeometry
                    :args="[1, 64, 16, phiStart, phiEnd, thetaStart, thetaEnd]"
                ></TresSphereGeometry>
                <TresMeshPhongMaterial
                    :side="DoubleSide"
                    color="#051bd2"
                ></TresMeshPhongMaterial>
            </TresMesh>
            <!-- PLANE -->
            <!-- <TresMesh
                receive-shadow
                :position="[0, 0, 0]"
                :rotation="[-Math.PI / 2, 0, 0]"
            >
                <TresPlaneGeometry :args="[100, 10, 1, 1]" />
                <TresMeshPhongMaterial
                    color="#0091dc"
                />
            </TresMesh> -->
        </TresCanvas>
    </div>
</template>

<script lang="ts" setup>
import { OrbitControls } from '@tresjs/cientos'
import { DoubleSide, BackSide, TextureLoader } from 'three'

// Half a sphere
const phiStart = ref(0)
const phiEnd = ref(Math.PI * 2)
const thetaStart = ref(0)
const thetaEnd = ref(Math.PI / 2)

const camera = shallowRef()

// const { onLoop } = useRenderLoop()

useRenderLoop().onLoop(({ delta }) => {
    // yRotation.value += 0.02 * delta
})
</script>

<style scoped>
canvas {
    pointer-events: none !important;
    touch-action: none !important;
}
</style>
