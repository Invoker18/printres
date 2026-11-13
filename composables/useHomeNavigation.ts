import gsap from 'gsap'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

export const useHomeNavigation = () => {
    const route = useRoute()

    onMounted(() => gsap.registerPlugin(ScrollToPlugin))

    const goToHomeSection = async (
        section: 'home' | 'aboutUs' | 'contactContainer'
    ) => {
        if (route.path !== '/') {
            await navigateTo({
                path: '/',
                hash: section === 'home' ? '' : `#${section}`,
            })
            return
        }

        const target = document.getElementById(section)
        if (!target) {
            console.error(`Unable to navigate to section: ${section}`)
            return
        }

        const header = document.getElementById('nav')
        gsap.to(window, {
            duration: window.matchMedia('(prefers-reduced-motion: reduce)')
                .matches
                ? 0
                : 0.6,
            scrollTo: {
                y: section === 'home' ? 0 : target,
                offsetY: section === 'home' ? 0 : (header?.offsetHeight ?? 0),
            },
        })
    }

    return { goToHomeSection }
}
