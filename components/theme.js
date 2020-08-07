import { base, polaris, deep, dark } from '@theme-ui/presets'

export default {
    ...polaris,
    colors: {
        ...polaris.colors,
        modes: {
            light: {
                ...dark.colors
            }
        }
    },
    fonts: {
        body: '"IBM Plex Sans", sans-serif',
        heading: 'inherit',
        monospace: 'Menlo, monospace'
    },
    images: {
        avatar: {
            width: '35%',
            height: 'auto',
            borderRadius: 50,
        },
        profile: '/assets/img/photo.jpg'
    },
    sizes: {
        container: '35rem'
    },
    style: {
        a: {
            color: 'secondary'
        },
        'a:hover': {
            color: 'secondary'
        }
    }
}