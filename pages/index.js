/** @jsx jsx */
import Meta from '../components/meta'
import Layout from '../components/layout'
import { Heading, Text, Avatar, useThemeUI, Container, Box, Flex, Divider, jsx, Alert, Close } from 'theme-ui'
import Social from '../components/footer'
import PostList from '../components/postlist'
import Link from 'next/link'
import ArrowLink from '../components/arrowlink'
import Rainbow from '../components/rainbow'

export default function Home() {
  const { theme, colorMode, setColorMode } = useThemeUI()

  return (
    <Layout>
      <Alert variant='accent' my={3}>
        I'm too busy squeezing lemons, so the site isn't fully functional yet.
                    <Close ml='auto' mr={-2} />
      </Alert>

      <Box sx={{
        display: 'flex',
        justifyContent: "center",
        p: 2
      }}>
        <Avatar
          src={theme.images.profile}
        />
      </Box>

      <Heading p={2}>Hey, I'm Rashid.</Heading>
      <Text p={2}>I'm a freshman studying at Stanford University. I write code, learn about AI, and eat lots of lemons (with salt!).</Text>
      <Text p={2}>I'm interested in applying deep learning techniques to level the playing field in service offerings between foreign and local MENA startups to vitalize emerging markets.</Text>
      <Text p={2}><ArrowLink out href='https://drive.google.com/file/d/1OrURL8cYzZEnwknN5TJLGv_anpWBhwdS/view?usp=sharing'>View my resume</ArrowLink></Text>

    </Layout>
  )
}