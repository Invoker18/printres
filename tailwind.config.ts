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
                    '950': '#001489', //this
                },
                'coral': {
                    '50': '#fff3ed',
                    '100': '#fee4d6',
                    '200': '#fcc6ac',
                    '300': '#fa9e77',
                    '400': '#f87c56', //this
                    '500': '#f4451b',
                    '600': '#e52b11',
                    '700': '#be1d10',
                    '800': '#971915',
                    '900': '#7a1814',
                    '950': '#420808',
                },
                'curious-blue': {
                    '50': '#f0f9ff',
                    '100': '#e0f2fe',
                    '200': '#b9e6fe',
                    '300': '#7cd3fd',
                    '400': '#36befa',
                    '500': '#0ca6eb',
                    '600': '#0091dc', //this
                    '700': '#0169a3',
                    '800': '#065986',
                    '900': '#0b4a6f',
                    '950': '#072f4a',
                },
                
                
            }
        },
        colors: {
            secondary: 'coral'
        }
    }
}