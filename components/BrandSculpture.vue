<template>
    <div>
        <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
            <p class="text-sm font-semibold text-white">Juega con las formas</p>
            <button
                type="button"
                class="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                @click="resetPieces"
            >
                <span aria-hidden="true">↺</span> Reorganizar
            </button>
        </div>
        <div
            ref="stage"
            class="sculpture relative isolate h-80 overflow-hidden rounded-[2rem] sm:h-96 lg:h-[28rem]"
            role="group"
            aria-label="Zona de juego con las formas de Printres"
            aria-describedby="sculpture-instructions"
        >
            <div class="sculpture__halo" aria-hidden="true"></div>
            <canvas
                ref="canvas"
                class="pointer-events-none absolute inset-0 h-full w-full"
                :class="{ 'opacity-0': !ready }"
                aria-hidden="true"
            ></canvas>
            <button
                v-for="(piece, index) in pieces"
                :key="piece.name"
                type="button"
                class="sculpture__piece"
                :class="{ 'is-dragging': draggingIndex === index }"
                :style="pieceStyle(piece)"
                :aria-label="piece.name"
                aria-describedby="sculpture-instructions"
                @pointerdown="startDrag($event, index)"
                @pointermove="moveDrag($event)"
                @pointerup="endDrag($event)"
                @pointercancel="endDrag($event, true)"
                @lostpointercapture="endDrag($event, true)"
                @keydown="moveWithKeyboard($event, index)"
            >
                <svg
                    class="h-full w-full"
                    :class="{ 'opacity-0': ready }"
                    :style="{
                        transform: `rotate(${piece.angle + piece.floatAngle}rad)`,
                    }"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                >
                    <circle
                        v-if="piece.shape === 'circle'"
                        cx="50"
                        cy="50"
                        r="40"
                        :fill="piece.color"
                    />
                    <path
                        v-else-if="piece.shape === 'half'"
                        d="M10 70a40 40 0 0 1 80 0Z"
                        :fill="piece.color"
                    />
                    <path
                        v-else-if="piece.shape === 'leaf'"
                        d="M10 50C24 20 76 20 90 50 76 80 24 80 10 50Z"
                        :fill="piece.color"
                    />
                    <path
                        v-else-if="piece.shape === 'quarter'"
                        d="M10 90A80 80 0 0 1 90 10V90Z"
                        :fill="piece.color"
                    />
                    <path
                        v-else-if="piece.shape === 'triangle'"
                        d="M10 10H90V90Z"
                        :fill="piece.color"
                    />
                    <rect
                        v-else-if="piece.shape === 'square'"
                        x="10"
                        y="10"
                        width="80"
                        height="80"
                        :fill="piece.color"
                    />
                    <path
                        v-else-if="piece.shape === 'rounded'"
                        d="M10 10H90V50A40 40 0 0 1 10 50Z"
                        :fill="piece.color"
                    />
                    <circle
                        v-else-if="piece.shape === 'ring'"
                        cx="50"
                        cy="50"
                        r="35"
                        fill="none"
                        :stroke="piece.color"
                        stroke-width="10"
                    />
                    <path
                        v-else
                        d="M78 22A40 40 0 1 0 78 78"
                        fill="none"
                        :stroke="piece.color"
                        stroke-width="10"
                    />
                </svg>
            </button>
        </div>
        <p
            id="sculpture-instructions"
            class="mt-3 text-sm leading-relaxed text-white/75"
        >
            Arrastra y suelta las figuras. Con teclado, enfoca una figura y usa
            las flechas para moverla.
        </p>
    </div>
</template>

<script setup lang="ts">
import type { WebGLRenderer } from 'three'

type Shape =
    | 'half'
    | 'circle'
    | 'leaf'
    | 'quarter'
    | 'triangle'
    | 'square'
    | 'rounded'
    | 'ring'
    | 'arc'
interface Piece {
    name: string
    shape: Shape
    color: string
    homeX: number
    homeY: number
    homeAngle: number
    size: number
    x: number
    y: number
    angle: number
    floatX: number
    floatY: number
    floatAngle: number
    vx: number
    vy: number
    spin: number
}

const definitions = [
    {
        name: 'Círculo coral',
        shape: 'circle',
        color: '#f87c56',
        x: 0.2,
        y: 0.2,
        angle: 0,
        size: 0.13,
    },
    {
        name: 'Cuarto de círculo celeste',
        shape: 'quarter',
        color: '#0091dc',
        x: 0.5,
        y: 0.2,
        angle: 0,
        size: 0.14,
    },
    {
        name: 'Triángulo azul',
        shape: 'triangle',
        color: '#7693ff',
        x: 0.8,
        y: 0.2,
        angle: 0,
        size: 0.13,
    },
    {
        name: 'Semicírculo azul',
        shape: 'half',
        color: '#3f5eff',
        x: 0.2,
        y: 0.5,
        angle: -0.35,
        size: 0.14,
    },
    {
        name: 'Hoja coral',
        shape: 'leaf',
        color: '#f87c56',
        x: 0.5,
        y: 0.5,
        angle: -0.6,
        size: 0.14,
    },
    {
        name: 'Cuadrado coral',
        shape: 'square',
        color: '#f87c56',
        x: 0.8,
        y: 0.5,
        angle: 0,
        size: 0.13,
    },
    {
        name: 'Forma redondeada celeste',
        shape: 'rounded',
        color: '#0091dc',
        x: 0.2,
        y: 0.8,
        angle: 0,
        size: 0.13,
    },
    {
        name: 'Aro azul claro',
        shape: 'ring',
        color: '#a7beff',
        x: 0.5,
        y: 0.8,
        angle: 0,
        size: 0.13,
    },
    {
        name: 'Arco azul claro',
        shape: 'arc',
        color: '#a7beff',
        x: 0.8,
        y: 0.8,
        angle: 0,
        size: 0.13,
    },
] satisfies Array<{
    name: string
    shape: Shape
    color: string
    x: number
    y: number
    angle: number
    size: number
}>

const pieces = reactive<Piece[]>(
    definitions.map((piece) => ({
        ...piece,
        homeX: piece.x,
        homeY: piece.y,
        homeAngle: piece.angle,
        floatX: 0,
        floatY: 0,
        floatAngle: 0,
        vx: 0,
        vy: 0,
        spin: 0,
    }))
)
const stage = ref<HTMLElement | null>(null)
const canvas = ref<HTMLCanvasElement | null>(null)
const ready = ref(false)
const width = ref(600)
const height = ref(384)
const draggingIndex = ref<number | null>(null)
const reducedMotion = ref(false)
let wake = () => {}
let lastInteraction = 0

const radius = (piece: Piece) =>
    Math.max(24, Math.min(width.value, height.value) * piece.size)
const safeRadius = (piece: Piece) => radius(piece) * 1.16
const visualX = (piece: Piece) =>
    Math.max(
        safeRadius(piece),
        Math.min(
            width.value - safeRadius(piece),
            piece.x * width.value + piece.floatX
        )
    )
const visualY = (piece: Piece) =>
    Math.max(
        safeRadius(piece),
        Math.min(
            height.value - safeRadius(piece),
            piece.y * height.value + piece.floatY
        )
    )
const pieceStyle = (piece: Piece) => ({
    left: `clamp(${safeRadius(piece)}px, calc(${piece.x * 100}% + ${piece.floatX}px), calc(100% - ${safeRadius(piece)}px))`,
    top: `clamp(${safeRadius(piece)}px, calc(${piece.y * 100}% + ${piece.floatY}px), calc(100% - ${safeRadius(piece)}px))`,
    width: `${radius(piece) * 2}px`,
    height: `${radius(piece) * 2}px`,
})
const clampPiece = (piece: Piece) => {
    const r = safeRadius(piece)
    piece.x = Math.max(r / width.value, Math.min(1 - r / width.value, piece.x))
    piece.y = Math.max(
        r / height.value,
        Math.min(1 - r / height.value, piece.y)
    )
}

interface Drag {
    index: number
    pointerId: number
    offsetX: number
    offsetY: number
    lastX: number
    lastY: number
    lastTime: number
    vx: number
    vy: number
}
let drag: Drag | null = null

const startDrag = (event: PointerEvent, index: number) => {
    if (
        drag ||
        (event.pointerType === 'mouse' && event.button !== 0) ||
        !stage.value
    )
        return
    const target = event.currentTarget as HTMLButtonElement
    const bounds = stage.value.getBoundingClientRect()
    const piece = pieces[index]
    target.setPointerCapture(event.pointerId)
    piece.x = visualX(piece) / width.value
    piece.y = visualY(piece) / height.value
    piece.angle =
        ((((piece.angle + piece.floatAngle + Math.PI) % (2 * Math.PI)) +
            2 * Math.PI) %
            (2 * Math.PI)) -
        Math.PI
    piece.floatX = 0
    piece.floatY = 0
    piece.floatAngle = 0
    drag = {
        index,
        pointerId: event.pointerId,
        offsetX: event.clientX - bounds.left - piece.x * width.value,
        offsetY: event.clientY - bounds.top - piece.y * height.value,
        lastX: piece.x * width.value,
        lastY: piece.y * height.value,
        lastTime: event.timeStamp,
        vx: 0,
        vy: 0,
    }
    draggingIndex.value = index
    piece.vx = 0
    piece.vy = 0
    piece.spin = 0
    lastInteraction = performance.now()
    wake()
}

const moveDrag = (event: PointerEvent) => {
    if (!drag || drag.pointerId !== event.pointerId || !stage.value) return
    const piece = pieces[drag.index]
    const bounds = stage.value.getBoundingClientRect()
    piece.x = (event.clientX - bounds.left - drag.offsetX) / width.value
    piece.y = (event.clientY - bounds.top - drag.offsetY) / height.value
    clampPiece(piece)
    const x = piece.x * width.value
    const y = piece.y * height.value
    const seconds = Math.max((event.timeStamp - drag.lastTime) / 1000, 0.001)
    drag.vx = Math.max(-1000, Math.min(1000, (x - drag.lastX) / seconds))
    drag.vy = Math.max(-1000, Math.min(1000, (y - drag.lastY) / seconds))
    drag.lastX = x
    drag.lastY = y
    drag.lastTime = event.timeStamp
    piece.vx = reducedMotion.value ? 0 : drag.vx
    piece.vy = reducedMotion.value ? 0 : drag.vy
    lastInteraction = performance.now()
    wake()
}

const endDrag = (event: PointerEvent, cancelled = false) => {
    if (!drag || drag.pointerId !== event.pointerId) return
    const piece = pieces[drag.index]
    const recent = event.timeStamp - drag.lastTime < 120
    piece.vx = !cancelled && recent && !reducedMotion.value ? drag.vx : 0
    piece.vy = !cancelled && recent && !reducedMotion.value ? drag.vy : 0
    piece.spin =
        !cancelled && recent && !reducedMotion.value ? drag.vx / 300 : 0
    drag = null
    draggingIndex.value = null
    lastInteraction = performance.now()
    wake()
}

const moveWithKeyboard = (event: KeyboardEvent, index: number) => {
    const directions: Record<string, [number, number]> = {
        ArrowLeft: [-1, 0],
        ArrowRight: [1, 0],
        ArrowUp: [0, -1],
        ArrowDown: [0, 1],
    }
    const direction = directions[event.key]
    if (!direction) return
    event.preventDefault()
    const piece = pieces[index]
    const step = event.shiftKey ? 32 : 12
    piece.x += (direction[0] * step) / width.value
    piece.y += (direction[1] * step) / height.value
    clampPiece(piece)
    piece.vx = 0
    piece.vy = 0
    piece.spin = 0
    lastInteraction = performance.now()
    wake()
}

const resetPieces = () => {
    drag = null
    draggingIndex.value = null
    pieces.forEach((piece) => {
        piece.x = piece.homeX
        piece.y = piece.homeY
        piece.angle = piece.homeAngle
        piece.floatX = 0
        piece.floatY = 0
        piece.floatAngle = 0
        piece.vx = 0
        piece.vy = 0
        piece.spin = 0
        clampPiece(piece)
    })
    lastInteraction = performance.now()
    wake()
}

onMounted(() => {
    const element = stage.value
    const canvasElement = canvas.value
    if (!element || !canvasElement) return

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    let disposed = false
    let failed = false
    let initializing = false
    let generation = 0
    let frame = 0
    let lastFrame = 0
    let ambientTime = 0
    let draw = () => {}
    let resize3D = () => {}
    let dispose3D: (() => void) | undefined

    const canRun = () => visible && !document.hidden && !disposed
    const stop3D = () => {
        generation++
        dispose3D?.()
        dispose3D = undefined
        draw = () => {}
        resize3D = () => {}
        ready.value = false
    }

    const updatePhysics = (dt: number, time: number) => {
        const returning = !drag && time - lastInteraction > 5000
        pieces.forEach((piece, index) => {
            if (drag?.index === index) return
            if (returning) {
                piece.vx += (piece.homeX - piece.x) * width.value * 2 * dt
                piece.vy += (piece.homeY - piece.y) * height.value * 2 * dt
                piece.spin += (piece.homeAngle - piece.angle) * 2 * dt
            }
            const damping = Math.exp(-(returning ? 2.8 : 1.5) * dt)
            piece.vx *= damping
            piece.vy *= damping
            piece.spin *= damping
            piece.x += (piece.vx * dt) / width.value
            piece.y += (piece.vy * dt) / height.value
            piece.angle += piece.spin * dt
            const oldX = piece.x
            const oldY = piece.y
            clampPiece(piece)
            if (piece.x !== oldX) piece.vx *= -0.7
            if (piece.y !== oldY) piece.vy *= -0.7
        })

        for (let i = 0; i < pieces.length; i++) {
            for (let j = i + 1; j < pieces.length; j++) {
                const a = pieces[i]
                const b = pieces[j]
                const dx = (b.x - a.x) * width.value
                const dy = (b.y - a.y) * height.value
                const distance = Math.hypot(dx, dy)
                const minimum = (radius(a) + radius(b)) * 0.72
                if (distance >= minimum) continue
                const nx = distance > 0 ? dx / distance : 1
                const ny = distance > 0 ? dy / distance : 0
                const overlap = minimum - distance
                const aWeight =
                    drag?.index === i ? 0 : drag?.index === j ? 1 : 0.5
                const bWeight = 1 - aWeight
                a.x -= (nx * overlap * aWeight) / width.value
                a.y -= (ny * overlap * aWeight) / height.value
                b.x += (nx * overlap * bWeight) / width.value
                b.y += (ny * overlap * bWeight) / height.value
                clampPiece(a)
                clampPiece(b)
                const relative = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny
                if (relative < 0) {
                    const impulse = -relative * 1.6
                    a.vx -= impulse * nx * aWeight
                    a.vy -= impulse * ny * aWeight
                    b.vx += impulse * nx * bWeight
                    b.vy += impulse * ny * bWeight
                }
            }
        }
    }

    const tick = (time: number) => {
        frame = 0
        if (!canRun() || reducedMotion.value) return
        if (lastFrame && time - lastFrame < 31) {
            frame = requestAnimationFrame(tick)
            return
        }
        const dt = lastFrame ? Math.min((time - lastFrame) / 1000, 0.05) : 0
        if (dt) {
            updatePhysics(dt, time)
            ambientTime += dt
            pieces.forEach((piece, index) => {
                if (drag?.index === index) return
                const phase = ambientTime * 0.65 + index * 1.4
                const easing = Math.min(dt * 4, 1)
                piece.floatX +=
                    (Math.sin(phase * 0.8) * 3 - piece.floatX) * easing
                piece.floatY += (Math.cos(phase) * 4 - piece.floatY) * easing
                const speed = index % 2 === 0 ? 0.13 : -0.1
                piece.floatAngle =
                    (piece.floatAngle + speed * dt) % (2 * Math.PI)
            })
        }
        lastFrame = time
        draw()
        frame = requestAnimationFrame(tick)
    }
    wake = () => {
        draw()
        if (canRun() && !reducedMotion.value && !frame) {
            lastFrame = 0
            frame = requestAnimationFrame(tick)
        }
    }

    const create3D = async () => {
        const current = ++generation
        initializing = true
        let renderer: WebGLRenderer | undefined
        try {
            const THREE = await import('three')
            if (current !== generation || !canRun() || reducedMotion.value)
                return
            renderer = new THREE.WebGLRenderer({
                canvas: canvasElement,
                alpha: true,
                antialias: true,
                powerPreference: 'low-power',
            })
            const activeRenderer = renderer
            activeRenderer.setPixelRatio(
                Math.min(window.devicePixelRatio || 1, 1.5)
            )
            activeRenderer.outputColorSpace = THREE.SRGBColorSpace
            activeRenderer.toneMapping = THREE.ACESFilmicToneMapping
            activeRenderer.toneMappingExposure = 1.1
            const scene = new THREE.Scene()
            const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 4000)
            camera.position.z = 1000
            scene.add(new THREE.HemisphereLight('#ffffff', '#7283d4', 2))
            const light = new THREE.DirectionalLight('#ffffff', 2.3)
            light.position.set(-300, 500, 800)
            scene.add(light)

            const half = new THREE.Shape()
            half.moveTo(-1, 0)
            half.absarc(0, 0, 1, Math.PI, 0, true)
            half.lineTo(-1, 0)
            const circle = new THREE.Shape()
            circle.absarc(0, 0, 1, 0, Math.PI * 2, false)
            const leaf = new THREE.Shape()
            leaf.moveTo(-1, 0)
            leaf.bezierCurveTo(-0.65, 0.72, 0.65, 0.72, 1, 0)
            leaf.bezierCurveTo(0.65, -0.72, -0.65, -0.72, -1, 0)
            const quarter = new THREE.Shape()
            quarter.moveTo(0, 0)
            quarter.lineTo(1, 0)
            quarter.absarc(0, 0, 1, 0, Math.PI / 2, false)
            quarter.lineTo(0, 0)
            const triangle = new THREE.Shape()
            triangle.moveTo(-1, 1)
            triangle.lineTo(1, 1)
            triangle.lineTo(1, -1)
            triangle.lineTo(-1, 1)
            const square = new THREE.Shape()
            square.moveTo(-1, -1)
            square.lineTo(1, -1)
            square.lineTo(1, 1)
            square.lineTo(-1, 1)
            square.lineTo(-1, -1)
            const rounded = new THREE.Shape()
            rounded.moveTo(-1, 1)
            rounded.lineTo(1, 1)
            rounded.lineTo(1, 0)
            rounded.absarc(0, 0, 1, 0, -Math.PI, true)
            rounded.lineTo(-1, 1)
            const ring = new THREE.Shape()
            ring.absarc(0, 0, 1, 0, Math.PI * 2, false)
            const hole = new THREE.Path()
            hole.absarc(0, 0, 0.75, 0, Math.PI * 2, true)
            ring.holes.push(hole)
            const arc = new THREE.Shape()
            const arcStart = Math.PI / 4
            const arcEnd = (Math.PI * 7) / 4
            arc.absarc(0, 0, 1, arcStart, arcEnd, false)
            arc.lineTo(Math.cos(arcEnd) * 0.75, Math.sin(arcEnd) * 0.75)
            arc.absarc(0, 0, 0.75, arcEnd, arcStart, true)
            arc.closePath()
            const shapes: Record<Shape, InstanceType<typeof THREE.Shape>> = {
                half,
                circle,
                leaf,
                quarter,
                triangle,
                square,
                rounded,
                ring,
                arc,
            }
            const meshes = pieces.map((piece) => {
                const geometry = new THREE.ExtrudeGeometry(
                    shapes[piece.shape],
                    {
                        depth: 0.28,
                        bevelEnabled: true,
                        bevelThickness: 0.06,
                        bevelSize: 0.06,
                        bevelSegments: 3,
                        curveSegments: 32,
                    }
                )
                geometry.center()
                const material = new THREE.MeshStandardMaterial({
                    color: piece.color,
                    roughness: 0.68,
                    metalness: 0,
                })
                const mesh = new THREE.Mesh(geometry, material)
                scene.add(mesh)
                return { mesh, geometry, material }
            })
            resize3D = () => {
                camera.left = -width.value / 2
                camera.right = width.value / 2
                camera.top = height.value / 2
                camera.bottom = -height.value / 2
                camera.updateProjectionMatrix()
                activeRenderer.setSize(width.value, height.value, false)
            }
            draw = () => {
                try {
                    meshes.forEach(({ mesh }, index) => {
                        const piece = pieces[index]
                        mesh.position.set(
                            visualX(piece) - width.value / 2,
                            height.value / 2 - visualY(piece),
                            index * 5
                        )
                        const phase = ambientTime * 0.45 + index * 0.9
                        mesh.rotation.set(
                            0.18 + Math.sin(phase) * 0.08,
                            -0.22 + Math.cos(phase) * 0.08,
                            -(piece.angle + piece.floatAngle)
                        )
                        mesh.scale.setScalar(radius(piece) * 0.8)
                    })
                    activeRenderer.render(scene, camera)
                    ready.value = true
                } catch (error) {
                    console.error(
                        'No se pudo dibujar la escena 3D de contacto:',
                        error
                    )
                    failed = true
                    stop3D()
                }
            }
            const contextLost = (event: Event) => {
                event.preventDefault()
                console.warn(
                    'Se perdió el contexto de la escena 3D de contacto.'
                )
                failed = true
                stop3D()
            }
            dispose3D = () => {
                canvasElement.removeEventListener(
                    'webglcontextlost',
                    contextLost
                )
                meshes.forEach(({ geometry, material }) => {
                    geometry.dispose()
                    material.dispose()
                })
                activeRenderer.dispose()
            }
            canvasElement.addEventListener('webglcontextlost', contextLost)
            resize3D()
            wake()
        } catch (error) {
            failed = true
            if (dispose3D) stop3D()
            else renderer?.dispose()
            console.warn('No se pudo iniciar la escena 3D de contacto:', error)
        } finally {
            initializing = false
            if (
                current !== generation &&
                canRun() &&
                !reducedMotion.value &&
                !failed
            )
                update()
        }
    }

    const update = () => {
        reducedMotion.value = motion.matches
        if (reducedMotion.value) {
            cancelAnimationFrame(frame)
            frame = 0
            lastFrame = 0
            pieces.forEach((piece) => {
                piece.vx = 0
                piece.vy = 0
                piece.spin = 0
                piece.floatX = 0
                piece.floatY = 0
                piece.floatAngle = 0
            })
            stop3D()
        } else if (canRun() && !dispose3D && !initializing && !failed) {
            void create3D()
        }
        if (!canRun()) {
            cancelAnimationFrame(frame)
            frame = 0
            lastFrame = 0
        } else {
            wake()
        }
    }
    const resizeObserver = new ResizeObserver(() => {
        const bounds = element.getBoundingClientRect()
        if (!bounds.width || !bounds.height) return
        width.value = bounds.width
        height.value = bounds.height
        pieces.forEach(clampPiece)
        resize3D()
        wake()
    })
    const observer = new IntersectionObserver(
        ([entry]) => {
            visible = entry.isIntersecting
            update()
        },
        { threshold: 0.05 }
    )
    resizeObserver.observe(element)
    observer.observe(element)
    motion.addEventListener('change', update)
    document.addEventListener('visibilitychange', update)
    update()

    onUnmounted(() => {
        disposed = true
        cancelAnimationFrame(frame)
        observer.disconnect()
        resizeObserver.disconnect()
        motion.removeEventListener('change', update)
        document.removeEventListener('visibilitychange', update)
        stop3D()
        wake = () => {}
    })
})
</script>

<style scoped>
.sculpture {
    background: radial-gradient(circle at 50% 40%, #193dbb, #001489 75%);
}

.sculpture__halo {
    position: absolute;
    inset: 14%;
    border: 1px solid rgb(255 255 255 / 12%);
    border-radius: 50%;
    pointer-events: none;
}

.sculpture__piece {
    position: absolute;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: transparent;
    transform: translate(-50%, -50%);
    cursor: grab;
    touch-action: none;
    user-select: none;
}

.sculpture__piece.is-dragging {
    cursor: grabbing;
    z-index: 1;
}
</style>
