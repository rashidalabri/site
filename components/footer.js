/** @jsx jsx */
import { jsx, Divider } from 'theme-ui'

import { FiTwitter, FiGithub, FiMail, FiLinkedin } from 'react-icons/fi'
import { Box, useThemeUI, Text } from 'theme-ui'

export default function Footer() {
    const { theme, colorMode, setColorMode } = useThemeUI()
    const size = '1.1rem'
    const mx = 4
    const my = 4
    return (
        <>
            <Divider />
            <Box as='footer' sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
            }}>
                <FiTwitter color={theme.colors.primary} size={size} sx={{ mx: mx, my: my }} />
                <FiGithub color={theme.colors.primary} size={size} sx={{ mx: mx, my: my }} />
                <FiLinkedin color={theme.colors.primary} size={size} sx={{ mx: mx, my: my }} />
                <FiMail color={theme.colors.primary} size={size} sx={{ mx: mx, my: my }} />
            </Box>
        </>
    )
}