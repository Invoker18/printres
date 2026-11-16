export interface ServicesContent {
    Eyebrow: string
    Title: string
    Description: string
    PortfolioLabel: string
    EventsLabel: string
    Items: Array<{
        _uid: string
        Title: string
        Description: string
        Shape?: { filename?: string }
    }>
}

interface StoryblokSection {
    component?: string
}

export const hasServicesBlock = (sections: StoryblokSection[]) =>
    sections.some((section) => section.component?.toLowerCase() === 'services')

export const getServicesPosition = (sections: StoryblokSection[]) => {
    const aboutIndex = sections.findIndex(
        (section) => section.component?.toLowerCase() === 'about'
    )
    if (aboutIndex !== -1) return aboutIndex

    const portfolioIndex = sections.findIndex(
        (section) => section.component?.toLowerCase() === 'landingportfolio'
    )
    return Math.max(portfolioIndex - 1, 0)
}

export const defaultServicesContent: ServicesContent = {
    Eyebrow: 'Lo que hacemos',
    Title: 'Servicios de impresión en Panamá',
    Description:
        'Impresión y experiencias para dar forma a las ideas de tu marca, desde proyectos impresos hasta eventos.',
    PortfolioLabel: 'Ver nuestros trabajos',
    EventsLabel: 'Explorar eventos',
    Items: [
        {
            _uid: 'digital',
            Title: 'Impresión digital',
            Description:
                'Soluciones de impresión digital para proyectos que dan vida a tu marca.',
        },
        {
            _uid: 'gran-formato',
            Title: 'Gran formato',
            Description:
                'Impresión en gran formato para llevar tus ideas a espacios y proyectos de mayor escala.',
        },
        {
            _uid: 'offset',
            Title: 'Impresión offset',
            Description:
                'Impresión offset para desarrollar piezas impresas para tu marca.',
        },
        {
            _uid: 'eventos',
            Title: 'Proyectos y eventos',
            Description:
                'Acompañamos tus ideas desde el inicio hasta la puesta en escena de tu evento.',
        },
    ],
}
