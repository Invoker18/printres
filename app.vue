<template>
    <div>
        <div class="cursor-follower"></div>
        <NuxtLoadingIndicator />
        <NuxtLayout class="overflow-clip">
            <NuxtPage />
        </NuxtLayout>
        <div
            v-if="isLoading"
            class="fixed top-0 left-0 h-[100dvh] w-full bg-primary-950 z-[9999] text-5xl grid place-content-center"
        >
            ...loading
        </div>
    </div>
</template>
<script setup>
import Lenis from 'lenis'
import gsap from 'gsap'
const isLoading = ref(true)
onMounted(() => {
    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
        // console.log(e);
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

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
        // gsap.set('.cursor-follower', {
        //     xPercent: -50,
        //     yPercent: -50,
        //     opacity: 1,
        // })

        // let xTo = gsap.quickTo('.cursor-follower', 'x', {
        //         duration: 0.1,
        //         ease: 'power3',
        //     }),
        //     yTo = gsap.quickTo('.cursor-follower', 'y', {
        //         duration: 0.1,
        //         ease: 'power3',
        //     })

        // window.addEventListener('mousemove', (e) => {
        //     const { clientX, clientY } = e
        //     xTo(clientX)
        //     yTo(clientY)
        // })

        window.addEventListener('mousemove', (e) => {
            const { target, clientX, clientY } = e
            // Check if target is inside a link or button
            // const isTargetLinkOrBtn = target.classList.contains('hover-cursor')
            const isTargetLinkOrBtn = target.closest('.hover-cursor')
            const hoverCursor2 = target.classList.contains('hover-cursor2')
            const scale = hoverCursor2 ? 4 : 2
            const changeCursor =
                isTargetLinkOrBtn || hoverCursor2 ? true : false
            // GSAP config
            gsap.to($el, {
                x: clientX - 11,
                y: clientY - 11,
                duration: 0,
                ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
                opacity: changeCursor ? 0.6 : 1,
                transform: `scale(${changeCursor ? scale : 1})`,
                backgroundColor: changeCursor ? '#f87c56' : '#0091dc',
                mixBlendMode: changeCursor ? 'difference' : 'normal',
            })
        })
        // Hidding the cursor element when the mouse cursor
        // is moved out of the page
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
    /* cursor: none; */
    /* cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%230091dc" stroke="none" width="32px" height="32px" viewBox="0 0 10.04 10.04"><circle cx="5.02" cy="5.02" r="4.52"/></svg>')
            10 10,
        auto; */
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
</style>
