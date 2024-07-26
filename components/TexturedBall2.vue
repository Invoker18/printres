<template>
    <TresMesh ref="sphereRef" :scale="1" cast-shadow :rotation="[-0.2, -1.5, 0]">
        <TresSphereGeometry :args="[0.5, 32, 32]" />
        <TresMeshLambertMaterial v-bind="pbrTexture" color="#f87c56" />
    </TresMesh>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { useTexture, useRenderLoop } from '@tresjs/core'

import uvMap from '@/assets/images/shapes/3.jpg'

const sphereRef = shallowRef()
const camera = shallowRef()

const yRotation = ref(0)
const t = ref(0)
const dt = ref(0.008)
const a = ref({ x: 0, y: 4, z: 0 })
const b = ref({ x: 0, y: 1.5, z: 0 })

const lerp = (a: any, b: any, t: any) => {
    return a + (b - a) * t
}

const ease = () => {
    return t.value < 0.5
        ? 2 * t.value * t.value
        : -1 + (4 - 2 * t.value) * t.value
}

const pbrTexture = await useTexture({
    map: uvMap,
})

const { resume, onLoop } = useRenderLoop()

onLoop(({ delta }) => {
    if (sphereRef.value) {
        // sphereRef.value.position.y -= 0.01
        // let newX = lerp(a.value.x, b.value.x, t.value) // interpolate between a and b where
        let newY = lerp(a.value.y, b.value.y, t.value) // t is first passed through a easing
        // let newZ = lerp(a.value.z, b.value.z, ease()) // function in this example.
        sphereRef.value.position.set(0, newY, 0) // set new position
        t.value += dt.value
        if (t.value <= 0 || t.value >= 1) dt.value = -dt.value // ping-pong for demo
    }
})
</script>
