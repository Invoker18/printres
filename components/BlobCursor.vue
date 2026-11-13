<template>
    <div
        class="blob-cursor"
        :class="{ 'is-visible': visible, 'is-hovering': hovering }"
        aria-hidden="true"
    >
        <svg class="blob-cursor__filter" aria-hidden="true">
            <filter id="blob-cursor-goo">
                <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="3"
                    result="blur"
                />
                <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                />
            </filter>
        </svg>
        <div class="blob-cursor__blobs">
            <div ref="trail" class="blob-cursor__trail"></div>
            <div ref="cursor" class="blob-cursor__position">
                <div class="blob-cursor__shape"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import gsap from 'gsap'

const cursor = ref(null)
const trail = ref(null)
const visible = ref(false)
const hovering = ref(false)

onMounted(() => {
    const cursorElement = cursor.value
    const trailElement = trail.value
    const motionPreference = window.matchMedia(
        '(any-hover: hover) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)'
    )
    const interactiveSelector =
        'a[href], button, summary, [role="button"], [role="link"], .cursor-pointer, .hover-cursor2'
    const editingSelector =
        'input, textarea, select, [contenteditable]:not([contenteditable="false"]), iframe'

    gsap.set([cursorElement, trailElement], {
        xPercent: -50,
        yPercent: -50,
    })
    const moveCursorX = gsap.quickSetter(cursorElement, 'x', 'px')
    const moveCursorY = gsap.quickSetter(cursorElement, 'y', 'px')
    const moveTrailX = gsap.quickTo(trailElement, 'x', {
        duration: 0.3,
        ease: 'power2.out',
    })
    const moveTrailY = gsap.quickTo(trailElement, 'y', {
        duration: 0.3,
        ease: 'power2.out',
    })

    const hide = () => {
        visible.value = false
        hovering.value = false
        document.body.classList.remove('has-blob-cursor')
    }

    const onPointerMove = (event) => {
        if (
            !motionPreference.matches ||
            event.pointerType === 'touch' ||
            !(event.target instanceof Element) ||
            event.target.closest(editingSelector)
        ) {
            hide()
            return
        }

        if (!visible.value) {
            gsap.set([cursorElement, trailElement], {
                x: event.clientX,
                y: event.clientY,
            })
        }

        hovering.value = !!event.target.closest(interactiveSelector)
        visible.value = true
        document.body.classList.add('has-blob-cursor')
        moveCursorX(event.clientX)
        moveCursorY(event.clientY)
        moveTrailX(event.clientX)
        moveTrailY(event.clientY)
    }

    const onPointerOut = (event) => {
        if (
            !event.relatedTarget ||
            event.relatedTarget instanceof HTMLIFrameElement
        ) {
            hide()
        }
    }

    const onPointerDown = (event) => {
        if (event.pointerType === 'touch') hide()
    }

    const onVisibilityChange = () => {
        if (document.hidden) hide()
    }

    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerout', onPointerOut)
    window.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('blur', hide)
    document.addEventListener('visibilitychange', onVisibilityChange)
    motionPreference.addEventListener('change', hide)

    onUnmounted(() => {
        hide()
        window.removeEventListener('pointermove', onPointerMove)
        window.removeEventListener('pointerout', onPointerOut)
        window.removeEventListener('pointerdown', onPointerDown)
        window.removeEventListener('blur', hide)
        document.removeEventListener('visibilitychange', onVisibilityChange)
        motionPreference.removeEventListener('change', hide)
        gsap.killTweensOf([cursorElement, trailElement])
    })
})
</script>

<style scoped>
.blob-cursor {
    position: fixed;
    inset: 0;
    z-index: 10000;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s ease;
}

.blob-cursor.is-visible {
    opacity: 1;
}

.blob-cursor__filter {
    position: absolute;
    width: 0;
    height: 0;
}

.blob-cursor__blobs {
    position: absolute;
    inset: 0;
    filter: url(#blob-cursor-goo);
    opacity: 0.7;
}

.blob-cursor__position,
.blob-cursor__trail {
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    will-change: transform;
}

.blob-cursor__shape {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #f87c56;
    transition:
        transform 0.2s ease,
        border-radius 0.2s ease;
}

.blob-cursor__trail {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f87c56;
}

.is-hovering .blob-cursor__shape {
    transform: scale(1.4);
    border-radius: 45% 55% 52% 48%;
}

@media (prefers-reduced-motion: reduce) {
    .blob-cursor {
        display: none;
    }
}
</style>

<style>
body.has-blob-cursor,
body.has-blob-cursor * {
    cursor: none !important;
}
</style>
