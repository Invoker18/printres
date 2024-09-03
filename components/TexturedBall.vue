<template>
    <TresMesh ref="sphereRef" cast-shadow :rotation="[0, -1.5, 0]">
        <TresSphereGeometry :args="[0.5, 32, 32]" />
        <!-- v-bind="pbrTexture" -->
        <TresMeshLambertMaterial color="#f87c56" />
    </TresMesh>
</template>
<script setup lang="ts">
import { useRenderLoop } from '@tresjs/core'

const sphereRef = shallowRef()

// const sphereRef = useState('sphereRef', () => shallowRef())
// isShallow(state) === true

const t = ref(0)
const dt = ref(0.005)
const a = ref({ x: -3.8, y: 1.4, z: 0 })
const b = ref({ x: 3.9, y: 1.5, z: 0 })

const lerp = (a: any, b: any, t: any) => {
    return a + (b - a) * t
}

const ease = () => {
    return t.value < 0.5
        ? 2 * t.value * t.value
        : -1 + (4 - 2 * t.value) * t.value
}


const { pause, resume } = useRafFn(({ delta }) => {
    if (sphereRef.value) {
        // sphereRef.value.rotation.y -= delta
        // sphereRef.value.position.y -= 0.01
        let newX = lerp(a.value.x, b.value.x, t.value) // interpolate between a and b where
        let newY = lerp(a.value.y + 8 * t.value, b.value.y, t.value) // t is first passed through a easing
        // let newZ = lerp(a.value.z, b.value.z, ease()) // function in this example.
        sphereRef.value.position.set(newX, newY, 0) // set new position
        t.value += dt.value
        if (t.value <= 0 || t.value >= 1) dt.value = -dt.value // ping-pong for demo
    }
})

// const { onLoop } = useRenderLoop()

// onLoop(({ delta }) => {
//     console.log(sphereRef.value, 'onlooop')
//     if (sphereRef.value) {
//         // sphereRef.value.rotation.y -= delta
//         // sphereRef.value.position.y -= 0.01
//         let newX = lerp(a.value.x, b.value.x, t.value) // interpolate between a and b where
//         let newY = lerp(a.value.y + 8 * t.value, b.value.y, t.value) // t is first passed through a easing
//         // let newZ = lerp(a.value.z, b.value.z, ease()) // function in this example.
//         sphereRef.value.position.set(newX, newY, 0) // set new position
//         t.value += dt.value
//         if (t.value <= 0 || t.value >= 1) dt.value = -dt.value // ping-pong for demo
//     }
// })
</script>
