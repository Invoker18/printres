<template>
    <div
        v-editable="blok"
        class="bg-primary-950 sticky top-0 z-40 flex flex-col md:h-[90vh]"
        id="location"
    >
        <div
            class="flex h-full w-full flex-col gap-5 p-5 pb-4 pt-16 md:flex-row md:items-center lg:px-10 xl:gap-x-24 2xl:px-28"
        >
            <div class="hidden flex-col gap-5 text-xl md:flex md:max-w-xs">
                <h4 class="hover-cursor text-3xl">Hablemos</h4>
                <div class="hover-cursor">{{ blok.Number }}</div>
                <hr class="border-secondary" />
                <div class="hover-cursor">{{ blok.Email }}</div>
                <hr class="border-curious-blue-600" />
                <NuxtLink
                    target="_blank"
                    class="hover-cursor"
                    to="https://www.google.com/maps?ll=9.03478,-79.518374&z=16&t=m&hl=es&gl=VE&mapclient=embed&cid=979947255980415739"
                >
                    {{ blok.Address }}
                </NuxtLink>
            </div>
            <div
                class="mx-auto flex h-[24rem] w-full max-w-5xl gap-2 sm:h-[26rem] md:h-[28rem] xl:h-[32rem] 2xl:h-[36rem] 2xl:max-h-[60vh]"
            >
                <div
                    class="h-full w-12 flex-shrink-0 rounded-md bg-[#0424D9]"
                ></div>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3174403739504!2d-79.5209539889663!3d9.03477979098933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca94d3cdfa713%3A0xd9978d65b54dafb!2sPrintres!5e0!3m2!1ses!2sve!4v1720189304037!5m2!1ses!2sve"
                    width="100%"
                    height="100%"
                    style="border: 0"
                    loading="lazy"
                    class="rounded-md"
                    referrerpolicy="no-referrer-when-downgrade"
                    def
                ></iframe>
                <NuxtImg
                    format="webp"
                    loading="lazy"
                    src="/images/shapes/locationShape.png"
                    alt="Location Shape"
                    width="300"
                    height="500"
                    fit="inside"
                    class="hover-cursor hidden lg:block"
                />
            </div>
            <div class="mb-3 grid grid-cols-1 gap-3 sm:grid-cols-2 md:hidden">
                <div class="flex flex-col">
                    <h5 class="text-lg text-secondary">Direccion</h5>
                    <NuxtLink
                        target="_blank"
                        to="https://www.google.com/maps?ll=9.03478,-79.518374&z=16&t=m&hl=es&gl=VE&mapclient=embed&cid=979947255980415739"
                    >
                        {{ blok.Address }}
                    </NuxtLink>
                </div>
                <div class="flex flex-col sm:text-right">
                    <h5 class="text-lg text-secondary">Contacto</h5>
                    <div>{{ blok.Number }}</div>
                    <div>{{ blok.Email }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    blok: {
        type: Object,
        default: () => {},
    },
})
</script>

<style scoped></style>
