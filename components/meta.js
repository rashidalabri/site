// Source: https://github.com/lachlanjc/site/blob/glitch/components/meta.js

import Head from 'next/head'

const makeTitle = (title, name) =>
    title === name ? title : `${title} – ${name}`

const Meta = ({
    name = 'Rashid Al-Abri', // site name
    title = '@itsrashidalabri', // page title
    description = 'Web developer and deep-learning enthusiast from Oman. Stanford ’23, Computer Science. he/him',
    image = '', // TODO: Fill this
    color = '' // TODO: Fill this
}) => (
        <Head>
            <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"></link>
            
            <meta key="og_type" property="og:type" content="website" />
            <meta key="og_site" property="og:site_name" content={name} />
            <meta key="og_url" property="og:url" content="https://rashidalabri.com/" />
            <meta key="tw_site" name="twitter:site" content="@itsrashidalabri" />

            <title>{makeTitle(title, name)}</title>
            <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
            <meta
                key="tw_title"
                name="twitter:title"
                content={makeTitle(title, name)}
            />

            {description && [
                <meta key="desc" name="description" content={description} />,
                <meta key="og_desc" property="og:description" content={description} />,
                <meta key="tw_desc" name="twitter:description" content={description} />
            ]}

            {image && [
                <meta key="og_img" property="og:image" content={image} />,
                <meta key="tw_card" name="twitter:card" content="summary_large_image" />,
                <meta key="tw_img" name="twitter:image" content={image} />
            ]}

            <meta key="theme_color" name="theme-color" content={color} />
            <meta key="tile_color" name="msapplication-TileColor" content={color} />
        </Head>
    )

export default Meta