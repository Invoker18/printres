<template>
    <UModal
        id="contactModal"
        :ui="{
            container:
                'items-start sm:items-center justify-center text-center ',
            inner: 'overflow-hidden',
            background: 'bg-primary-950/90 dark:bg-primary-950/90',
            overlay: {
                background:
                    'bg-gray-950/50 dark:bg-gray-950/50 backdrop-blur-sm',
            },
            shadow: 'shadow-2xl',
            width: 'w-full sm:max-w-lg',
        }"
    >
        <div
            class="bg-primary-950/90 hover-cursor gap-3 space-y-5 rounded-3xl p-8"
        >
            <div class="flex items-center justify-between gap-5">
                <h3 class="text-4xl">
                    Contacto
                    <hr
                        class="ml-2 w-2/3 rounded-md border-[1.5px] border-secondary"
                    />
                </h3>
                <div class="max-w-full">
                    <img :src="contactShape" alt="" class="h-20" />
                </div>
            </div>
            <UForm
                ref="form"
                :schema="schema"
                :state="state"
                class="grid grid-flow-row gap-3"
                @submit="onSubmit"
            >
                <UFormGroup size="xl" label="" name="name">
                    <UInput
                        :ui="{
                            rounded: 'rounded-lg',
                            placeholder:
                                'placeholder-gray-200 dark:placeholder-gray-200',
                        }"
                        color="primary"
                        placeholder="Nombre"
                        v-model="state.name"
                    />
                </UFormGroup>
                <UFormGroup size="xl" label="" name="email">
                    <UInput
                        :ui="{
                            rounded: 'rounded-lg',
                            placeholder:
                                'placeholder-gray-200 dark:placeholder-gray-200',
                        }"
                        color="primary"
                        placeholder="Correo"
                        v-model="state.email"
                    />
                </UFormGroup>
                <UFormGroup size="xl" label="" name="message">
                    <UTextarea
                        :ui="{
                            rounded: 'rounded-lg',
                            placeholder:
                                'placeholder-gray-200 dark:placeholder-gray-200',
                            color: {
                                primary: {
                                    outline:
                                        'shadow-sm bg-curious-blue-500 dark:bg-curious-blue-500 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
                                },
                            },
                        }"
                        color="primary"
                        v-model="state.message"
                        :rows="8"
                        autoresize
                        placeholder="Quiero mas informacion sobre sus servicios..."
                    />
                </UFormGroup>

                <!-- <input
                    v-model="state.name"
                    type="text"
                    placeholder="Nombre Completo..."
                    class="rounded-md border border-gray-400 bg-transparent p-2.5 text-gray-100 placeholder-gray-200"
                /> -->
                <!-- <input
                    v-model="state.email"
                    type="email"
                    placeholder="Correo..."
                    class="rounded-md border border-gray-400 bg-transparent p-2.5 text-gray-100 placeholder-gray-200"
                /> -->
                <!-- <textarea
                    v-model="state.message"
                    name="mensaje"
                    id=""
                    placeholder="Mensaje..."
                    rows="6"
                    class="rounded-md bg-curious-blue-600 p-2.5 text-gray-100 placeholder-gray-200"
                ></textarea> -->
                <!-- <div class="flex items-start gap-4 overflow-auto"> -->
                <UButton
                    :loading="loading"
                    type="submit"
                    color="white"
                    block
                    size="xl"
                    :ui="{
                        rounded: 'rounded-lg',
                        color: {
                            white: {
                                solid: 'shadow-sm ring-0 text-gray-200 dark:text-gray-200 bg-secondary hover:bg-coral-300 disabled:bg-gray dark:bg-secondary dark:hover:bg-coral-300 focus-visible:ring-0 mt-3 disabled:dark:text-gray-200',
                            },
                        },
                    }"
                >
                    <span class="font-semibold uppercase">Enviar</span>
                </UButton>
                <!-- <p class="text-sm">
                        This site is protected by reCAPTCHA and the Google
                        Privacy Policy and Terms of Service apply.
                    </p> -->
                <!-- </div> -->
            </UForm>
            <ul class="flex justify-start gap-5">
                <NuxtLink
                    to="https://www.facebook.com/printr3s/?locale=es_LA"
                    target="_blank"
                    class="hover-cursor cursor-pointer"
                    >Facebook</NuxtLink
                >
                <NuxtLink
                    to="https://www.instagram.com/printr3s/?hl=es-la"
                    target="_blank"
                    class="hover-cursor cursor-pointer"
                    >Instagram</NuxtLink
                >
            </ul>
        </div>
    </UModal>
</template>

<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
import contactShape from '@/assets/images/shapes/contactShape.png'
const { executeRecaptcha } = useGoogleRecaptcha()

const toast = useToast()

const form = ref()

const loading = ref(false)
const schema = z
    .object({
        email: z
            .string({ message: 'Campo requerido' })
            .email('Correo invalido'),
        name: z.string({ message: 'Campo requerido' }),
        message: z.string({ message: 'Campo requerido' }),
    })
    .required({ message: true })

type Schema = z.output<typeof schema>

const state = reactive({
    email: '',
    name: '',
    message: '',
})

const isValid = computed(() => {
    return !state.email || !state.name || !state.message
})

const isOpen = ref(false)

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    loading.value = true

    // Do something with data
    const { token }: any = await executeRecaptcha('submit')

    const formData = {
        token: token,
        from: event.data.email,
        subject: event.data.name,
        text: event.data.message,
    }

    try {
        const isValid: any = await $fetch('/api/validate', {
            method: 'POST',
            body: formData,
        })

        toast.add({
            title: 'Correo enviado satisfactoriamente!',
            description: isValid.message,
            timeout: 6000,
            color: 'coral',
            icon: 'i-heroicons-check-circle',
            ui: {
                background: 'bg-primary-950 dark:bg-primary-950',
                ring: 'ring-1 ring-primary-200 dark:ring-primary-800',
                wrapper: 'hover-cursor',
            },
        })
    } catch (error) {
        toast.add({
            title: 'Ups ha habido un problema!',
            description:
                'Por favor intenta de nuevo mas tarde.si el problema persiste ponerse en contacto con el administrador del sitio! ',
            timeout: 6000,
            color: 'red',
            icon: 'i-heroicons-x-circle',
            ui: {
                background: 'bg-red-800 dark:bg-red-800',
                ring: 'ring-1 ring-red-200 dark:ring-red-800',
                wrapper: 'hover-cursor',
            },
        })
    }

    loading.value = false

    state.name = ''
    state.email = ''
    state.message = ''
}
</script>

<style scoped></style>
