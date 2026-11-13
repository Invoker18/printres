<template>
    <UModal
        id="contactModal"
        :ui="{
            container: 'items-start sm:items-center justify-center',
            inner: 'overflow-y-auto',
            background: 'bg-primary-950 dark:bg-primary-950',
            overlay: {
                background:
                    'bg-gray-950/60 dark:bg-gray-950/60 backdrop-blur-sm',
            },
            shadow: 'shadow-2xl',
            rounded: 'rounded-3xl',
            width: 'w-full sm:max-w-xl',
        }"
        data-lenis-prevent
    >
        <div class="hover-cursor overflow-hidden rounded-3xl">
            <div class="relative px-5 pb-4 pt-5 sm:px-9 sm:pb-7 sm:pt-9">
                <button
                    type="button"
                    aria-label="Cerrar formulario de contacto"
                    class="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-7 sm:top-7"
                    @click="modal.close()"
                >
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        class="size-5"
                    >
                        <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
                    </svg>
                </button>
                <p
                    class="pr-14 text-xs font-bold uppercase tracking-[0.2em] text-coral-300"
                >
                    Hagamos algo increíble
                </p>
                <h3
                    class="mt-2 max-w-sm pr-10 text-2xl font-semibold leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl"
                >
                    Hablemos de tu proyecto<span class="text-coral-300">.</span>
                </h3>
                <p
                    class="mt-2 max-w-md text-sm leading-relaxed text-white/75 sm:mt-3 sm:text-base"
                >
                    Cuéntanos tu idea y nos pondremos en contacto contigo.
                </p>
            </div>
            <div
                class="border-y border-white/10 bg-white/5 px-5 py-4 sm:px-9 sm:py-8"
            >
                <UForm
                    ref="form"
                    :schema="schema"
                    :state="state"
                    class="grid gap-3 sm:gap-5"
                    @submit="onSubmit"
                >
                    <div class="grid gap-3 sm:grid-cols-2 sm:gap-5">
                        <UFormGroup
                            size="xl"
                            label="Nombre"
                            name="name"
                            :ui="groupUi"
                        >
                            <UInput
                                v-model="state.name"
                                :ui="fieldUi"
                                placeholder="Tu nombre"
                                autocomplete="name"
                            />
                        </UFormGroup>
                        <UFormGroup
                            size="xl"
                            label="Correo electrónico"
                            name="email"
                            :ui="groupUi"
                        >
                            <UInput
                                v-model="state.email"
                                :ui="fieldUi"
                                placeholder="tu@correo.com"
                                type="email"
                                autocomplete="email"
                            />
                        </UFormGroup>
                    </div>
                    <UFormGroup
                        size="xl"
                        label="Mensaje"
                        name="message"
                        :ui="groupUi"
                    >
                        <UTextarea
                            v-model="state.message"
                            :ui="fieldUi"
                            :rows="3"
                            textarea-class="sm:min-h-[8.75rem]"
                            autoresize
                            placeholder="Cuéntanos qué tienes en mente..."
                        />
                    </UFormGroup>
                    <p
                        v-if="feedback"
                        :role="feedback.type === 'error' ? 'alert' : 'status'"
                        class="text-sm leading-relaxed"
                        :class="
                            feedback.type === 'error'
                                ? 'text-coral-200'
                                : 'text-white'
                        "
                    >
                        {{ feedback.message }}
                    </p>
                    <button
                        type="submit"
                        :disabled="loading"
                        class="text-primary-950 flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-coral-300 px-6 font-semibold transition-colors hover:bg-coral-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
                        <span v-if="!loading" aria-hidden="true">↗</span>
                    </button>
                </UForm>
            </div>
            <div
                class="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-3 sm:gap-y-2 sm:px-9 sm:py-5"
            >
                <p class="text-sm text-white/70">También nos encuentras en</p>
                <SocialLinks />
            </div>
        </div>
    </UModal>
</template>

<script lang="ts" setup>
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'
const { executeRecaptcha } = useGoogleRecaptcha()

const toast = useToast()
const modal = useModal()

const form = ref()

const groupUi = {
    label: {
        base: 'block font-semibold text-white dark:text-white',
    },
    error: 'mt-2 text-coral-200 dark:text-coral-200',
}

const fieldUi = {
    rounded: 'rounded-xl',
    placeholder: 'placeholder-white/60 dark:placeholder-white/60',
    color: {
        white: {
            outline:
                'bg-white/10 dark:bg-white/10 text-white dark:text-white ring-1 ring-inset ring-white/25 dark:ring-white/25 focus:ring-2 focus:ring-coral-300 dark:focus:ring-coral-300',
        },
    },
    variant: {
        outline:
            'bg-white/10 dark:bg-white/10 text-white dark:text-white ring-1 ring-inset ring-coral-300 dark:ring-coral-300 focus:ring-2 focus:ring-coral-300 dark:focus:ring-coral-300',
    },
}

const loading = ref(false)
const feedback = ref<{ type: 'success' | 'error'; message: string } | null>(
    null
)
const schema = z
    .object({
        email: z
            .string({ message: 'Campo requerido' })
            .trim()
            .email('Correo inválido'),
        name: z
            .string({ message: 'Campo requerido' })
            .trim()
            .min(1, 'Campo requerido'),
        message: z
            .string({ message: 'Campo requerido' })
            .trim()
            .min(1, 'Campo requerido'),
    })
    .required({ message: true })

type Schema = z.output<typeof schema>

const state = reactive({
    email: '',
    name: '',
    message: '',
})

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
    loading.value = true
    feedback.value = null

    try {
        const { token } = await executeRecaptcha('submit')
        if (!token) throw new Error('No se pudo obtener el token de reCAPTCHA')
        const response = await $fetch<{ success: boolean; message: string }>(
            '/api/validate',
            {
                method: 'POST',
                body: {
                    token,
                    from: event.data.email,
                    subject: event.data.name,
                    text: event.data.message,
                },
            }
        )
        if (!response.success) throw new Error(response.message)

        feedback.value = { type: 'success', message: response.message }
        state.name = ''
        state.email = ''
        state.message = ''
        toast.add({
            title: '¡Mensaje enviado!',
            description: response.message,
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
        console.error('Error al enviar el formulario de contacto:', error)
        feedback.value = {
            type: 'error',
            message:
                'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.',
        }
        toast.add({
            title: 'No se pudo enviar el mensaje',
            description: feedback.value.message,
            timeout: 6000,
            color: 'red',
            icon: 'i-heroicons-x-circle',
            ui: {
                background: 'bg-red-800 dark:bg-red-800',
                ring: 'ring-1 ring-red-200 dark:ring-red-800',
                wrapper: 'hover-cursor',
            },
        })
    } finally {
        loading.value = false
    }
}
</script>
