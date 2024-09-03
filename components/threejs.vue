<template>
    <TresCanvas
        window-size
        shadows
        clearColor="#0091dc"
        :outputColorSpace="SRGBColorSpace"
        :toneMapping="ACESFilmicToneMapping"
        :toneMappingExposure="3"
        power-preference="high-performance"
        class="relative z-30"
    >
        <TresPerspectiveCamera
            :position="[0, 3, 10]"
            :fov="45"
            :aspect="1"
            :near="0.1"
            :far="100"
            :lookAt="[0, 3, 0]"
        />
        <!-- <TresGridHelper :args="[10, 10]" /> -->
        <!-- <OrbitControls :enable-zoom="false" /> -->

        <TresDirectionalLight
            :position="[0, 10, 0]"
            cast-shadow
            :intensity="1"
        />
        <TresAmbientLight :intensity="0.5" />

        <!-- ORANGE BALL -->
        <Suspense>
            <TexturedBall></TexturedBall>
        </Suspense>

        <!-- CIRCLE TO SPHERE -->
        <TresMesh
            :receive-shadow="true"
            :position="[-4, 1, 0]"
            :rotation="[1.655, -0.812, 0]"
        >
            <TresCircleGeometry :args="[1, 32]"></TresCircleGeometry>
            <TresMeshPhongMaterial
                color="#0424D9"
                :side="DoubleSide"
            ></TresMeshPhongMaterial>
        </TresMesh>
        <!-- FIRST SPEHERE -->
        <TresMesh
            :receive-shadow="true"
            cast-shadow
            :position="[-4, 1, 0]"
            :rotation="[
                0.05714197505422066, 3.1563768947646919, -2.32289468688899159,
            ]"
        >
            <TresSphereGeometry
                :args="[1, 64, 16, phiStart, phiEnd, thetaStart, thetaEnd]"
            ></TresSphereGeometry>
            <TresMeshPhongMaterial
                TresMeshPhongMaterial
                :side="DoubleSide"
                color="#0424D9"
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
                color="#0424D9"
                :side="DoubleSide"
            ></TresMeshPhongMaterial>
        </TresMesh>
        <!-- SECOND SPEHERE -->
        <TresMesh
            :receive-shadow="true"
            cast-shadow
            :position="[4, 1, 0]"
            :rotation="[
                -0.05714197505422066, -3.1563768947646919, 2.32289468688899159,
            ]"
        >
            <TresSphereGeometry
                :args="[1, 64, 16, phiStart, phiEnd, thetaStart, thetaEnd]"
            ></TresSphereGeometry>
            <TresMeshPhongMaterial
                :side="DoubleSide"
                color="#0424D9"
            ></TresMeshPhongMaterial>
        </TresMesh>
        <!-- PLANE -->
        <TresMesh
            receive-shadow
            :position="[0, 0, 0]"
            :rotation="[-Math.PI / 2, 0, 0]"
        >
            <TresPlaneGeometry :args="[50, 10, 1, 1]" />
            <TresMeshStandardMaterial color="#001489" />
        </TresMesh>
    </TresCanvas>
</template>

<script setup>
import { ACESFilmicToneMapping, DoubleSide, SRGBColorSpace } from 'three'
// Half a sphere
const phiStart = ref(0)
const phiEnd = ref(Math.PI * 2)
const thetaStart = ref(0)
const thetaEnd = ref(Math.PI / 2)
</script>

<style scoped>
canvas {
    pointer-events: none !important;
    touch-action: none !important;
}
</style>
