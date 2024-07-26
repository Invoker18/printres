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
                :position="[0, 4, 10]"
                :fov="45"
                :aspect="1"
                :near="0.1"
                :far="100"
                :lookAt="[0, 2, 0]"
            />
            <!-- <OrbitControls :enable-zoom="false" /> -->

            <ContactShadows :blur="0.5" :resolution="512" :opacity="0.2" />

            <TresAmbientLight :intensity="1.5" />
            <TresDirectionalLight
                :position="[0, 10, 0]"
                :intensity="1"
            />

            <Suspense>
                <TexturedBall2></TexturedBall2>
            </Suspense>

            <!-- ORANGE SPHERE -->
            <!-- <TresMesh
                ref="sphereRef"
                cast-shadow
                :position="[0, 2, 0]"
                class="relative z-50"
            >
                <TresSphereGeometry :args="[0.5, 32, 32]" />
                <TresMeshPhongMaterial color="#f87c56" />
            </TresMesh> -->
            <!-- CIRCLE TO SPHERE -->
            <TresMesh
                :position="[0, 1, 0]"
                :rotation="[1.655, 0, 0]"
            >
                <TresCircleGeometry :args="[1, 32]"></TresCircleGeometry>
                <TresMeshPhongMaterial
                    color="#051bd2"
                    :side="DoubleSide"
                ></TresMeshPhongMaterial>
            </TresMesh>
            <!-- FIRST SPEHERE -->
            <TresMesh
                :position="[0, 1, 0]"
                :rotation="[0.05714197505422066, 3.1563768947646919, Math.PI]"
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
            <!-- PLANE -->
            <!-- <TresMesh
                receive-shadow
                :position="[0, 0, 0]"
                :rotation="[-Math.PI / 2, 0, 0]"
            >
                <TresPlaneGeometry :args="[20, 20, 1, 1]" />
                <TresMeshPhongMaterial
                    :transparent="true"
                    color="#0091dc"
                    :opacity="0.5"
                />
            </TresMesh> -->
        </TresCanvas>
    </div>
</template>

<script lang="ts" setup>
import { OrbitControls, Smoke, Stats, ContactShadows } from '@tresjs/cientos'
import { DoubleSide, BackSide } from 'three'

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
