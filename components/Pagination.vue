<template>
    <UPagination
        id="pagination"
        :to="
            (page: number) => ({
                query: { category: route.query.category, page: page },
            })
        "
        :max="5"
        v-model="page"
        :page-count="perPage"
        :total="total"
        :active-button="{
            color: 'curious-blue',
            class: 'text-gray-200 dark:text-gray-200',
        }"
        :inactive-button="{
            color: 'primary',
            activeClass: 'dark:bg-primary-950 dark:hover:bg-curious-blue-500',
            class: 'text-gray-200 dark:text-gray-200',
        }"
    >
        <template #prev="{ onClick }">
            <UButton
                icon="i-heroicons-arrow-small-left-20-solid"
                color="primary"
                variant="solid"
                :ui="{
                    rounded: 'rounded-full',
                    variant: {
                        solid: 'bg-curious-blue-500 dark:bg-curious-blue-500 text-gray-200 dark:text-gray-200',
                    },
                }"
                class="mr-2 rtl:[&_span:first-child]:rotate-180"
                @click="prev()"
            />
        </template>
        <template #next="{ onClick }">
            <UButton
                icon="i-heroicons-arrow-small-right-20-solid"
                color="primary"
                variant="solid"
                :ui="{
                    rounded: 'rounded-full',
                    variant: {
                        solid: 'bg-curious-blue-500 dark:bg-curious-blue-500 text-gray-200 dark:text-gray-200',
                    },
                }"
                class="rtl:[&_span:last-child]:rotate-180"
                @click="next()"
            />
        </template>
    </UPagination>
</template>

<script lang="ts" setup>
const props: any = defineProps({
    totalPages: {
        type: Number,
        default: 0,
    },
    total: {
        type: Number,
        default: 0,
    },
    page: {
        type: Number,
        default: 1,
    },
    perPage: Number,
})
const route: any = useRoute()
const router: any = useRouter()
const page = ref(props.page)
const prev = () => {
    if (props.page === 1) {
        return
    } else {
        props.page--
    }
    router.push({
        path: router.path,
        query: {
            category: route.query.category,
            page: props.page,
        },
    })
}

const next = () => {
    if (props.page === props.totalPages) {
        return
    } else {
        props.page++
    }
    router.push({
        path: router.path,
        query: {
            category: route.query.category,
            page: props.page,
        },
    })
}
</script>

<style scoped>
#pagination {
    @apply ml-auto;
}

#pagination button {
    @apply bg-curious-blue-500 [&:nth-last-child(1)]:ml-2;
}

#pagination a {
    @apply [&:nth-child(2)]:rounded-s-md [&:nth-last-child(2)]:rounded-e-md;
}
</style>
