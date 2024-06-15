import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'ultramarine': {
                    '50': '#f1f6ff',
                    '100': '#e5ecff',
                    '200': '#cedcff',
                    '300': '#a7beff',
                    '400': '#7693ff',
                    '500': '#3f5eff',
                    '600': '#1830ff',
                    '700': '#0721fa',
                    '800': '#051bd2',
                    '900': '#0618ac',
                    '950': '#001489',
                },
            }
        }
    }
}