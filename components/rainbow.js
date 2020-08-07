// Source: https://github.com/lachlanjc/site/blob/glitch/components/layout.js

import { Box } from 'theme-ui'

const colors = {
    red: '#ec3750',
    orange: '#ff8c37',
    yellow: '#f1c40f',
    green: '#33d6a6',
    cyan: '#5bc0de',
    blue: '#338eda'
}

export default function Rainbow() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '4rem',
                display: 'block',
                position: 'absolute',
                bottom: 0,
                backgroundImage: `linear-gradient(${colors.red} 0%, ${
                    colors.red
                    } 16.6666%, ${colors.orange} 16.6666%, ${colors.orange} 33.333%, ${
                    colors.yellow
                    } 33.333%, ${colors.yellow} 50%, ${colors.green} 50%, ${
                    colors.green
                    } 66.6666%, ${colors.blue} 66.6666%, ${
                    colors.blue
                    } 83.3333%, #8067C3 83.3333%, #8067C3 100%)`
            }}
        />
    )
}