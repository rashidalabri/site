/** @jsx jsx */
import { jsx, Divider, Button, Text } from 'theme-ui'
import { Box, useColorMode } from 'theme-ui'
import { FiMoon, FiSun } from 'react-icons/fi'
import Link from 'next/link'

export default function Header() {
    const [colorMode, setColorMode] = useColorMode()
    return (
        <>
            <Box as='header' sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <Link href='/'>
                    <a sx={{
                        p: 3,
                        variant: 'styles.navlink',
                    }}>Home</a>
                </Link>
                <Link href='/'>
                    <a sx={{
                        p: 3,
                        variant: 'styles.navlink',
                    }}>Projects</a>
                </Link>
                <Link href='/'>
                    <a sx={{
                        p: 3,
                        variant: 'styles.navlink',
                    }}>Blog</a>
                </Link>
                <Box onClick={e => {
                    setColorMode(colorMode === 'default' ? 'light' : 'default')
                }} sx={{
                    p: 3,
                    ml: 'auto'
                }}>
                    {colorMode === 'default' ? <FiSun /> : <FiMoon />}
                </Box>
            </Box>
            <Divider />
        </>
    )
}