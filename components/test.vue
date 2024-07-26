<template>
    <div>
        <TresCanvas
            shadows
            window-size
            power-preference="high-performance"
            clearColor="#0091dc"
        >
            <TresGridHelper :args="[10, 10]" />
            <TresPerspectiveCamera
                ref="camera"
                :position="[0, 2, 3]"
                :fov="45"
                :aspect="1"
                :near="0.1"
                :far="100"
                :lookAt="[0, 0, 0]"
            />
            <Suspense>
                <Smoke />
            </Suspense>
        </TresCanvas>
    </div>
</template>

<script lang="ts" setup>
import { Smoke } from '@tresjs/cientos'
</script>

<style></style>
