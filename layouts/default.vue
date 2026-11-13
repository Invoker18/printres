<template>
    <SpeedInsights />
    <div>
        <BlobCursor />
        <div
            id="loader"
            class="bg-primary-950 opacity-1 fixed left-0 top-0 z-[9999] grid h-[100vh] w-full place-content-center text-5xl"
        >
            <div class="loader"></div>
        </div>
        <Navbar></Navbar>
        <slot />
        <Footer></Footer>
    </div>
</template>

<script setup>
import Lenis from 'lenis'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    // ScrollTrigger.config({ ignoreMobileResize: true })
    // ScrollTrigger.normalizeScroll(true)
    // let normalizer = ScrollTrigger.normalizeScroll({})

    const initLenis = () => {
        const lenis = new Lenis({})
        // const lenis = new Lenis({
        //     syncTouch: true,
        //     syncTouchLerp: 0.03,
        //     touchMultiplier: 0.8,
        // })

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)
    }

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        initLenis()
    }

    gsap.to('.loader', {
        autoAlpha: 0,
        duration: 0,
    })
    gsap.to('#loader', {
        autoAlpha: 0,
        duration: 1,
    })
})
</script>

<style>
html,
body {
    @apply bg-primary-950 text-gray-200 dark:text-gray-200;
}

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

@media (prefers-reduced-motion: reduce) {
    .page-enter-active,
    .page-leave-active {
        transition: none;
    }
}

/* HTML: <div class="loader"></div> */
.loader,
.loader:before,
.loader:after {
    width: 35px;
    aspect-ratio: 1;
    box-shadow: 0 0 0 3px inset #fff;
    position: relative;
    animation: 1.5s infinite 0.5s;
    animation-name: l7-1, l7-2;
}
.loader:before,
.loader:after {
    content: '';
    position: absolute;
    left: calc(100% + 5px);
    animation-delay: 1s, 0s;
}
.loader:after {
    left: -40px;
    animation-delay: 0s, 1s;
}
@keyframes l7-1 {
    0%,
    55%,
    100% {
        border-top-left-radius: 0;
        border-bottom-right-radius: 0;
    }
    20%,
    30% {
        border-top-left-radius: 50%;
        border-bottom-right-radius: 50%;
    }
}
@keyframes l7-2 {
    0%,
    55%,
    100% {
        border-bottom-left-radius: 0;
        border-top-right-radius: 0;
    }
    20%,
    30% {
        border-bottom-left-radius: 50%;
        border-top-right-radius: 50%;
    }
}
</style>
