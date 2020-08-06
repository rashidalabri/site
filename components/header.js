/** @jsx jsx */
import { jsx, Divider } from 'theme-ui'
import { Box } from 'theme-ui'
import Link from 'next/link'

export default function Header() {
    return (
        <>
            <Divider />
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
                    }}>Resume</a>
                </Link>
                <Link href='/'>
                    <a sx={{
                        p: 3,
                        variant: 'styles.navlink',
                    }}>Blog</a>
                </Link>
            </Box>
            <Divider />
        </>
    )
}