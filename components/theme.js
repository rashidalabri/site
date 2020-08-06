import { dark } from '@theme-ui/presets'

export default {
    ...dark,
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
        container: '30rem'
    }
}