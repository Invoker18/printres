<template>
    <div>
        <div class="cursor-follower"></div>
        <NuxtLoadingIndicator />
        <NuxtLayout class="overflow-clip">
            <NuxtPage />
        </NuxtLayout>
        <USlideovers />
        <div
            v-if="isLoading"
            class="bg-primary-950 fixed left-0 top-0 z-[9999] grid h-[100dvh] w-full place-content-center text-5xl"
        >
            <div class="loader"></div>
        </div>
    </div>
</template>
<script setup>
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
const isLoading = ref(true)
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.config({ ignoreMobileResize: true })
    // ScrollTrigger.normalizeScroll(true)
    // let normalizer = ScrollTrigger.normalizeScroll({})

    const lenis = new Lenis({})

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    // const lenis = new Lenis({
    //     // syncTouch: true,
    //     // syncTouchLerp: 0.03,
    //     // touchMultiplier: 0.8,
    // })

    const isMobile = () => {
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        ) {
            return true
        } else {
            return false
        }
    }

    const createCursorFollower = () => {
        const $el = document.querySelector('.cursor-follower')

        window.addEventListener('pointermove', (e) => {
            const { target, clientX, clientY } = e
            const isTargetLinkOrBtn = target.closest('.hover-cursor')
            const hoverCursor2 = target.classList.contains('hover-cursor2')
            const scale = hoverCursor2 ? 4.5 : 2.5
            const changeCursor =
                isTargetLinkOrBtn || hoverCursor2 ? true : false
            gsap.to($el, {
                x: clientX - 11,
                y: clientY - 11,
                duration: 0,
                ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
                opacity: changeCursor ? '0.7' : 1,
                transform: `scale(${changeCursor ? scale : 1})`,
                backgroundColor: changeCursor ? '#f87c56' : '#0091dc',
                mixBlendMode: changeCursor ? 'multiply' : 'normal',
            })
        })

        document.querySelector('iframe')?.addEventListener('mouseenter', () => {
            gsap.to($el, {
                duration: 0.7,
                opacity: 0,
            })
        })
        document.addEventListener('mouseleave', (e) => {
            gsap.to($el, {
                duration: 0.7,
                opacity: 0,
            })
        })
    }
    // // Only invoke the function if isn't a touch device
    if (!isMobile()) {
        createCursorFollower()
    }

    isLoading.value = false
})
</script>
<style>
body {
    cursor: none;
    /* cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%230091dc" stroke="none" width="32px" height="32px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>')
            10 10,
        auto; */
    @apply bg-primary-950 text-gray-200 dark:text-gray-200;
}
.cursor-follower {
    position: fixed;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    opacity: 0;
    z-index: 10000;
    user-select: none;
    pointer-events: none;
    @apply bg-curious-blue-600;
}

/* li:hover,
#logo:hover {
    cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" stroke="%23f87c56" fill="%23f87c56" width="64px" height="64px" viewBox="0 0 10.04 10.04"><circle opacity="0.7" cx="5.02" cy="5.02" r="4.52"/></svg>')
            20 20,
        auto !important;
    transition: all 1s ease;
    -moz-transition: all 1s ease;
    mix-blend-mode: difference;
} */

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
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
/* HTML: <div class="loader"></div> */
/* .loader {
    width: 75px;
    aspect-ratio: 1;
    display: grid;
}
.loader:before,
.loader:after {
    content: '';
    grid-area: 1/1;
    width: 35px;
    aspect-ratio: 1;
    box-shadow: 0 0 0 3px #fff inset;
    filter: drop-shadow(40px 40px 0 #fff);
    animation: l8 2s infinite alternate;
}
.loader:after {
    margin: 0 0 0 auto;
    filter: drop-shadow(-40px 40px 0 #fff);
    animation-delay: -1s;
}
@keyframes l8 {
    0%,
    10% {
        border-radius: 0;
    }
    30%,
    40% {
        border-radius: 50% 0;
    }
    60%,
    70% {
        border-radius: 50%;
    }
    90%,
    100% {
        border-radius: 0 50%;
    }
} */
</style>
