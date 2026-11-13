<script lang="ts" setup>
const props = withDefaults(
    defineProps<{ title?: string; description?: string; headline?: string }>(),
    {
        title: '',
        description: '',
        headline: '',
    }
)

const truncate = (text: string, limit: number) => {
    const value = text.trim().replace(/\s+/g, ' ')
    if (value.length <= limit) return value
    const shortened = value.slice(0, limit - 1)
    const lastSpace = shortened.lastIndexOf(' ')
    return `${lastSpace > limit / 2 ? shortened.slice(0, lastSpace) : shortened}…`
}

const title = computed(() => truncate(props.title, 60))
const description = computed(() => truncate(props.description, 120))
</script>

<template>
    <div
        style="
            display: flex;
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background: #001489;
            color: #f8f8f8;
        "
    >
        <div
            style="
                display: flex;
                position: absolute;
                top: 54px;
                left: 70px;
                width: 190px;
                height: 46px;
            "
        >
            <img
                src="/images/logoprintresOG.svg"
                alt="Printres"
                width="190"
                height="46"
            />
        </div>

        <div
            style="
                display: flex;
                position: absolute;
                top: 158px;
                left: 72px;
                width: 660px;
                height: 350px;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
            "
        >
            <div
                v-if="headline"
                style="
                    display: flex;
                    margin-bottom: 22px;
                    color: #f87c56;
                    font-size: 19px;
                    font-weight: 700;
                    letter-spacing: 3px;
                "
            >
                {{ headline }}
            </div>
            <div
                v-if="title"
                :style="{
                    display: 'flex',
                    maxWidth: '660px',
                    color: '#f8f8f8',
                    fontSize: title.length > 32 ? '48px' : '64px',
                    fontWeight: 700,
                    lineHeight: 1.12,
                    letterSpacing: '-1px',
                    overflowWrap: 'break-word',
                }"
            >
                {{ title }}
            </div>
            <div
                v-if="description"
                style="
                    display: flex;
                    max-width: 610px;
                    margin-top: 20px;
                    color: #d3ddff;
                    font-size: 24px;
                    line-height: 1.35;
                "
            >
                {{ description }}
            </div>
        </div>

        <div
            style="
                display: flex;
                position: absolute;
                left: 72px;
                bottom: 52px;
                align-items: center;
                color: #d3ddff;
                font-size: 20px;
                font-weight: 600;
            "
        >
            <span
                style="
                    display: flex;
                    width: 28px;
                    height: 3px;
                    margin-right: 12px;
                    background: #f87c56;
                "
            ></span>
            printres.com.pa
        </div>

        <div
            style="
                display: flex;
                position: absolute;
                top: 90px;
                right: 56px;
                width: 366px;
                height: 450px;
                align-items: center;
                justify-content: center;
                border: 1px solid #3850b0;
                border-radius: 30px;
                background: #08259f;
            "
        >
            <svg
                width="294"
                height="294"
                viewBox="0 0 300 300"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="44" fill="#f87c56" />
                <path d="M106 94 A88 88 0 0 1 194 6 V94 Z" fill="#0091dc" />
                <path d="M206 6 H294 V94 A88 88 0 0 1 206 6 Z" fill="#001489" />
                <path d="M6 106 H94 V194 Z" fill="#d3ddff" />
                <circle cx="150" cy="150" r="44" fill="#001489" />
                <path
                    d="M206 106 C254 106 294 146 294 194 C246 194 206 154 206 106 Z"
                    fill="#0091dc"
                />
                <rect x="6" y="206" width="88" height="88" fill="#f87c56" />
                <path
                    d="M106 206 H194 V250 A44 44 0 0 1 106 250 Z"
                    fill="#d3ddff"
                />
                <circle cx="250" cy="250" r="44" fill="#f87c56" />
            </svg>
        </div>
    </div>
</template>
