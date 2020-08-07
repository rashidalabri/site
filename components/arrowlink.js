/** @jsx jsx */
import { Text, jsx, Box } from 'theme-ui'
import Link from 'next/link'
import { Styled } from 'theme-ui'

export default function ArrowLink(props) {
    return props.out ? (
        <a href={props.href} sx={{
            '&:hover span': {
                opacity: '1',
                transform: 'translateX(8px)',
                transition: 'transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1)',
            },
            color: 'primary',
            cursor: 'pointer',
            textDecoration: 'none'
        }}>
            {props.children}
            &nbsp;
            <span sx={{
                position: 'relative',
                display: 'inline-block',
                opacity: '0.4',
                transition: 'all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1)'
            }}>
                →
            </span>
        </a>
    ) : (
            <Link href={props.href}>
                <a sx={{
                    '&:hover span': {
                        opacity: '1',
                        transform: 'translateX(8px)',
                        transition: 'transform 0.35s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    },
                    color: 'primary',
                    cursor: 'pointer'
                }}>
                    {props.children}
                &nbsp;
                <span sx={{
                        position: 'relative',
                        display: 'inline-block',
                        opacity: '0.4',
                        transition: 'all 0.35s cubic-bezier(0.165, 0.84, 0.44, 1)'
                    }}>
                        →
                </span>
                </a>
            </Link>
        )
}