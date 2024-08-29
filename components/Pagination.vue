<template>
    <ul
        class="hover-cursor ml-auto flex w-fit items-center rounded-md text-gray-200"
    >
        <NuxtLink
            @click.native="prev()"
            class="flex items-center rounded-l-md bg-secondary px-1.5 py-1.5"
            :class="
                +route.query.page === 1
                    ? 'cursor-not-allowed'
                    : 'cursor-pointer'
            "
        >
            <UIcon name="i-heroicons-arrow-small-left-20-solid" class="size-6">
            </UIcon>
        </NuxtLink>
        <NuxtLink
            v-for="page in totalPages"
            :to="{
                path: router.path,
                query: {
                    category: route.query.category,
                    page: page,
                },
            }"
            class="border-r border-coral-500 p-3 py-1.5 outline-2"
            :class="[
                route.query.page == page ? 'bg-coral-500' : 'bg-secondary',
                { 'border-l': page === 1 },
            ]"
        >
            {{ page }}
        </NuxtLink>
        <NuxtLink
            @click.native="next()"
            class="flex items-center rounded-r-md bg-secondary px-1.5 py-1.5"
            :class="
                +route.query.page === totalPages
                    ? 'cursor-not-allowed'
                    : 'cursor-pointer'
            "
        >
            <UIcon name="i-heroicons-arrow-small-right-20-solid" class="size-6">
            </UIcon>
        </NuxtLink>
    </ul>
</template>

<script lang="ts" setup>
const props = defineProps({
    totalPages: Number,
})
const route: any = useRoute()
const router: any = useRouter()

const prev = () => {
    if (+route.query.page === 1) return
    router.push({
        path: router.path,
        query: {
            category: route.query.category,
            page: +route.query.page - 1,
        },
    })
}

const next = () => {
    if (+route.query.page === props.totalPages) return
    router.push({
        path: router.path,
        query: {
            category: route.query.category,
            page: +route.query.page + 1,
        },
    })
}
</script>

<style></style>
