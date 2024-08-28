<template>
    <div
        id="chat"
        class="fixed bottom-8 right-4 cursor-auto grid-flow-row gap-5 opacity-0 sm:right-12 xl:right-8"
    >
        <Transition>
            <div
                v-if="showChat"
                class="hover-cursor relative mb-3 flex h-72 w-[23rem] flex-col overflow-hidden rounded-xl text-white shadow-2xl transition-all duration-300 ease-linear"
            >
                <div class="flex items-center gap-3 bg-[#008069] p-4">
                    <UAvatar
                        @click="goToWhatsapp()"
                        chip-color="green"
                        chip-text=""
                        chip-position="bottom-right"
                        size="md"
                        src="https://avatars.githubusercontent.com/u/739984?v=4"
                        alt="Avatar"
                        :ui="{
                            chip: {
                                base: 'ring-0',
                            },
                        }"
                        class="cursor-pointer"
                    />
                    <div class="flex flex-col">
                        <h6 class="font-bold">Printr3s</h6>
                        <p class="text-xs">Online</p>
                    </div>
                    <UIcon
                        name="i-material-symbols-close"
                        class="ml-auto size-6 cursor-pointer self-start"
                        @click="showChat = !showChat"
                    ></UIcon>
                </div>
                <div class="whatsapp-chat-body flex-1 p-2">
                    <div
                        class="WhatsappChat__MessageContainer-sc-1wqac52-1 dAbFpq"
                    >
                        <div
                            style="opacity: 0"
                            class="WhatsappDots__Component-pks5bf-0 eJJEeC"
                        >
                            <div
                                class="WhatsappDots__ComponentInner-pks5bf-1 hFENyl"
                            >
                                <div
                                    class="WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotOne-pks5bf-3 ixsrax"
                                ></div>
                                <div
                                    class="WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotTwo-pks5bf-4 dRvxoz"
                                ></div>
                                <div
                                    class="WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotThree-pks5bf-5 kXBtNt"
                                ></div>
                            </div>
                        </div>
                        <div style="opacity: 1" class="kAZgZq">
                            <div class="bMIBDo">Printr3s</div>
                            <div class="iSpIQi">
                                Hola sera un
                                <b>gusto</b> atenderlo👋<br /><br />¿En que
                                podemos <b>ayudarte</b>?
                            </div>
                            <div class="cqCDVm">
                                {{ today }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex h-12 bg-gray-100">
                    <textarea
                        v-model="chatMessage"
                        name=""
                        id=""
                        maxlength="120"
                        placeholder="Escribe aqui ..."
                        class="h-full w-full resize-none bg-gray-100 px-4 pt-2.5 text-gray-800 placeholder:text-gray-500 dark:bg-gray-100"
                        @keydown.enter.prevent="goToWhatsapp()"
                    ></textarea>
                    <button
                        id="goToWhatsapp"
                        title="Go to Whatsapp"
                        aria-label="Go to Whatsapp"
                        @click="goToWhatsapp()"
                        class="bg-gray-200 px-2 text-gray-400 dark:bg-gray-200"
                    >
                        <UIcon name="i-ic-baseline-send" class="size-8"></UIcon>
                    </button>
                </div>
            </div>
        </Transition>

        <div class="relative text-right">
            <UButton
                id="openChat"
                title="Open Chat"
                aria-label="Open Chat"
                @click="showChat = !showChat"
                :ui="{ rounded: 'rounded-full' }"
                size="xl"
                :padded="false"
                class="pulseBtn hover-cursor p-2"
                color="green"
            >
                <UIcon
                    name="i-ic-baseline-whatsapp"
                    class="size-8 text-white"
                ></UIcon>
            </UButton>
        </div>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const route = useRoute()

const today = computed(() => {
    const date = new Date()
    const hours = date.getHours()
    const min = date.getMinutes()
    const dateString = `${hours}:${min}`
    return dateString
})
const showChat = ref(false)

const chatMessage = ref('')

const goToWhatsapp = async () => {
    const url =
        'https://wa.me/584141946269?' +
        new URLSearchParams({
            text: chatMessage.value,
        })
    await navigateTo(url, {
        open: {
            target: '_blank',
        },
    })
}

watch(
    () => route.path,
    () => {
        const $el: any = document.querySelector('#chat')
        if (route.path !== '/') {
            gsap.to($el, {
                zIndex: '999',
                opacity: 1,
                duration: 1,
            })
        }
    }
)

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)
    const $el: any = document.querySelector('#chat')

    if (route.path == '/') {
        gsap.to($el, {
            zIndex: '999',
            opacity: 1,
            duration: 1,
            scrollTrigger: {
                trigger: '#aboutUs',
                start: 'top center',
                end: 'center center',
                toggleActions: 'play none none reset',
            },
        })
    } else {
        gsap.to($el, {
            zIndex: '999',
            opacity: 1,
        })
    }
})
</script>

<style scoped>
body {
    font-family: 'Lato', sans-serif;
    background: #f1f1f1;
}

a:link,
a:visited {
    color: #444;
    text-decoration: none;
    transition: all 0.4s ease-in-out;
}

h1 {
    font-size: 20px;
    text-align: center;
    display: block;
    background: linear-gradient(to right top, #6f96f3, #164ed2);
    padding: 20px;
    color: #fff;
    border-radius: 50px;
}

/* CSS Multiple Whatsapp Chat */
.whatsapp-name {
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 0;
    margin-bottom: 0;
    line-height: 0.5;
}

#whatsapp-chat {
    box-sizing: border-box !important;
    outline: none !important;
    position: fixed;
    width: 350px;
    border-radius: 10px;
    box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
    bottom: 90px;
    right: 30px;
    overflow: hidden;
    z-index: 99;
    animation-name: showchat;
    animation-duration: 1s;
    transform: scale(1);
}

a.blantershow-chat {
    /*   background: #009688; */
    background: #fff;
    color: #404040;
    position: fixed;
    display: flex;
    font-weight: 400;
    justify-content: space-between;
    z-index: 98;
    bottom: 25px;
    right: 30px;
    font-size: 15px;
    padding: 10px 20px;
    border-radius: 30px;
    box-shadow: 0 1px 15px rgba(32, 33, 36, 0.28);
}

a.blantershow-chat svg {
    transform: scale(1.2);
    margin: 0 10px 0 0;
}

.header-chat {
    /*   background: linear-gradient(to right top, #6f96f3, #164ed2); */
    background: #009688;
    background: #095e54;
    color: #fff;
    padding: 20px;
}

.header-chat h3 {
    margin: 0 0 10px;
}

.header-chat p {
    font-size: 14px;
    line-height: 1.7;
    margin: 0;
}

.info-avatar {
    position: relative;
}

.info-avatar img {
    border-radius: 100%;
    width: 50px;
    float: left;
    margin: 0 10px 0 0;
}

a.informasi {
    padding: 20px;
    display: block;
    overflow: hidden;
    animation-name: showhide;
    animation-duration: 0.5s;
}

a.informasi:hover {
    background: #f1f1f1;
}

.info-chat span {
    display: block;
}

#get-label,
span.chat-label {
    font-size: 12px;
    color: #888;
}

#get-nama,
span.chat-nama {
    margin: 5px 0 0;
    font-size: 15px;
    font-weight: 700;
    color: #222;
}

#get-label,
#get-nama {
    color: #fff;
}

span.my-number {
    display: none;
}

/* .blanter-msg {
  color: #444;
  padding: 20px;
  font-size: 12.5px;
  text-align: center;
  border-top: 1px solid #ddd;
} */
textarea#chat-input {
    border: none;
    font-family: 'Arial', sans-serif;
    width: 100%;
    height: 20px;
    outline: none;
    resize: none;
    padding: 10px;
    font-size: 14px;
}

a#send-it {
    width: 30px;
    font-weight: 700;
    padding: 10px 10px 0;
    background: #eee;
    border-radius: 10px;
}
a#send-it svg {
    fill: #a6a6a6;
    height: 24px;
    width: 24px;
}

.first-msg {
    background: transparent;
    padding: 30px;
    text-align: center;
}
.first-msg span {
    background: #e2e2e2;
    color: #333;
    font-size: 14.2px;
    line-height: 1.7;
    border-radius: 10px;
    padding: 15px 20px;
    display: inline-block;
}

.start-chat .blanter-msg {
    display: flex;
}

#get-number {
    display: none;
}

a.close-chat {
    position: absolute;
    top: 5px;
    right: 15px;
    color: #fff;
    font-size: 30px;
}

@keyframes ZpjSY {
    0% {
        background-color: #b6b5ba;
    }
    15% {
        background-color: #111111;
    }
    25% {
        background-color: #b6b5ba;
    }
}
@keyframes hPhMsj {
    15% {
        background-color: #b6b5ba;
    }
    25% {
        background-color: #111111;
    }
    35% {
        background-color: #b6b5ba;
    }
}
@keyframes iUMejp {
    25% {
        background-color: #b6b5ba;
    }
    35% {
        background-color: #111111;
    }
    45% {
        background-color: #b6b5ba;
    }
}
@keyframes showhide {
    from {
        transform: scale(0.5);
        opacity: 0;
    }
}
@keyframes showchat {
    from {
        transform: scale(0);
        opacity: 0;
    }
}
@media screen and (max-width: 480px) {
    #whatsapp-chat {
        width: auto;
        left: 5%;
        right: 5%;
        font-size: 80%;
    }
}
.hide {
    display: none;
    animation-name: showhide;
    animation-duration: 0.5s;
    transform: scale(1);
    opacity: 1;
}

.show {
    display: block;
    animation-name: showhide;
    animation-duration: 0.5s;
    transform: scale(1);
    opacity: 1;
}

.whatsapp-message-container {
    display: flex;
    z-index: 1;
}

.whatsapp-message {
    padding: 7px 14px 6px;
    background-color: white;
    border-radius: 0px 8px 8px;
    position: relative;
    transition: all 0.3s ease 0s;
    opacity: 0;
    transform-origin: center top 0px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 0.5px;
    margin-top: 4px;
    margin-left: -54px;
    max-width: calc(100% - 66px);
}

.whatsapp-chat-body {
    padding: 20px 20px 20px 10px;
    background-color: #e6ddd4;
    position: relative;
}
.whatsapp-chat-body::before {
    display: block;
    position: absolute;
    content: '';
    left: 0px;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: 0;
    opacity: 0.08;
    background-image: url('https://elfsight.com/assets/chats/patterns/whatsapp.png');
}

.dAbFpq {
    display: flex;
    z-index: 1;
}

.eJJEeC {
    background-color: white;
    width: 52.5px;
    height: 32px;
    border-radius: 16px;
    display: flex;
    -moz-box-pack: center;
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    margin-left: 10px;
    opacity: 0;
    transition: all 0.1s ease 0s;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 0.5px;
}

.hFENyl {
    position: relative;
    display: flex;
}

.ixsrax {
    height: 5px;
    width: 5px;
    margin: 0px 2px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    top: 0px;
    background-color: #9e9da2;
    animation-name: ZpjSY;
}

.dRvxoz {
    height: 5px;
    width: 5px;
    margin: 0px 2px;
    background-color: #b6b5ba;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    top: 0px;
    animation-name: hPhMsj;
}

.kAZgZq {
    padding: 7px 14px 6px;
    background-color: white;
    border-radius: 0px 8px 8px;
    position: relative;
    transition: all 0.3s ease 0s;
    opacity: 0;
    transform-origin: center top 0px;
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.13) 0px 1px 0.5px;
    margin-top: 4px;
    margin-left: -54px;
    max-width: calc(100% - 66px);
}
.kAZgZq::before {
    position: absolute;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAmCAMAAADp2asXAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACQUExURUxpccPDw9ra2m9vbwAAAAAAADExMf///wAAABoaGk9PT7q6uqurqwsLCycnJz4+PtDQ0JycnIyMjPf3915eXvz8/E9PT/39/RMTE4CAgAAAAJqamv////////r6+u/v7yUlJeXl5f///5ycnOXl5XNzc/Hx8f///xUVFf///+zs7P///+bm5gAAAM7Ozv///2fVensAAAAvdFJOUwCow1cBCCnqAhNAnY0WIDW2f2/hSeo99g1lBYT87vDXG8/6d8oL4sgM5szrkgl660OiZwAAAHRJREFUKM/ty7cSggAABNFVUQFzwizmjPz/39k4YuFWtm55bw7eHR6ny63+alnswT3/rIDzUSC7CrAziPYCJCsB+gbVkgDtVIDh+DsE9OTBpCtAbSBAZSEQNgWIygJ0RgJMDWYNAdYbAeKtAHODlkHIv997AkLqIVOXVU84AAAAAElFTkSuQmCC');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    top: 0px;
    left: -12px;
    width: 12px;
    height: 19px;
}

.bMIBDo {
    font-size: 13px;
    font-weight: 700;
    line-height: 18px;
    color: rgba(0, 0, 0, 0.4);
}

.iSpIQi {
    font-size: 14px;
    line-height: 19px;
    margin-top: 4px;
    color: #111111;
}

.iSpIQi {
    font-size: 14px;
    line-height: 19px;
    margin-top: 4px;
    color: #111111;
}

.cqCDVm {
    text-align: right;
    margin-top: 4px;
    font-size: 12px;
    line-height: 16px;
    color: rgba(17, 17, 17, 0.5);
    margin-right: -8px;
    margin-bottom: -4px;
}
.pulseBtn {
    background: #25d366;
    color: #fff;
    border: 1px solid #25d366;
    border-radius: 2rem;
    font-size: 1rem;
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
    -moz-animation: pulse 5s infinite;
    -webkit-animation: pulse 5s infinite;
    animation: pulse 5s infinite;
}
@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(37, 211, 102, 1);
    }
    20% {
        box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
    }
    50% {
        box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
    }
    100% {
        box-shadow: 0 0 0 20px rgba(37, 211, 102, 0);
    }
}

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    scale: 0.75;
}
</style>
