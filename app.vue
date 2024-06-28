<template>
    <div>
        <div class="cursor-follower"></div>
        <div class="cursor"></div>
        <div class="follower"></div>
        <NuxtLoadingIndicator />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup>
import Lenis from 'lenis'
import gsap from 'gsap'
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

    // console.log(isMobile(), 'isMobile')

    const createCursorFollower = () => {
        const $el = document.querySelector('.cursor-follower')
        // Each time the mouse coordinates are updated,
        // we need to pass the values to gsap in order
        // to animate the element
        window.addEventListener('mousemove', (e) => {
            const { target, x, y } = e
            // Check if target is inside a link or button
            const isTargetLinkOrBtn = target.classList.contains('hover-cursor')
            if (e.target.tagName !== 'DIV') {
                console.log('fire')
            }
            // GSAP config
            gsap.to($el, {
                x: x - 10,
                y: y - 10,
                duration: 0.5,
                ease: 'power4', // More easing options here: https://gsap.com/docs/v3/Eases/
                opacity: isTargetLinkOrBtn ? 0.6 : 1,
                transform: `scale(${isTargetLinkOrBtn ? 1.5 : 1})`,
                backgroundColor: isTargetLinkOrBtn ? '#f87c56' : '#0091dc',
                mixBlendMode: isTargetLinkOrBtn ? 'difference' : 'normal',
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
    // if (!isMobile) {
    //     createCursorFollower()
    // }

    // const createCursorFollower = () => {
    //     gsap.set('.follower', { xPercent: -50, yPercent: -50 })
    //     const follow = document.querySelector('.follower')
    //     const cursor = document.querySelector('.cursor')

    //     window.addEventListener('mousemove', (e) => {
    //         // gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2 })
    //         const isTargetLinkOrBtn =
    //             follow.closest('li') || follow.closest('#logo')
    //         console.log(follow.closest('#logo'))
    //         gsap.to(follow, {
    //             x: e.clientX - 16,
    //             y: e.clientY - 16,
    //             duration: 0.5,
    //             opacity: 1,
    //             opacity: isTargetLinkOrBtn ? 0.7 : 1,
    //             transform: `scale(${isTargetLinkOrBtn ? 3 : 1})`,
    //             background: isTargetLinkOrBtn ? '#f87c56' : '#0091dc',
    //         })
    //     })

    //     document.addEventListener('mouseleave', (e) => {
    //         gsap.to(follow, {
    //             duration: 0.7,
    //             opacity: 0,
    //         })
    //     })
    // }

    createCursorFollower()
})
</script>
<style>
body {
    /* cursor: none; */
}
.follower {
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #0091dc;
    opacity: 0;
    z-index: 1000;
    pointer-events: none;
}
.cursor-follower {
    position: fixed;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    border-radius: 100%;
    opacity: 0;
    z-index: 10000;
    user-select: none;
    pointer-events: none;
    @apply bg-curious-blue-600;
}
</style>
