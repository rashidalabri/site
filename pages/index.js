import Meta from '../components/meta'
import Layout from '../components/layout'
import { Heading, Text, Avatar, useThemeUI, Container, Box, Flex, Divider } from 'theme-ui'
import Social from '../components/footer'
import PostList from '../components/postlist'

export default function Home() {
  const { theme, colorMode, setColorMode } = useThemeUI()

  return (
    <Layout>
      <Box sx={{
        display: 'flex',
        justifyContent: "center",
        p: 2
      }}>
        <Avatar
          src={theme.images.profile}
        />
      </Box>

      <Heading p={2} color='secondary'>Hey, I'm Rashid.</Heading>
      <Text p={2}>I'm a freshman studying at Stanford University. I write code, learn about AI, and eat lots of lemons (with salt!).</Text>
      <Text p={2}>I'm interested in applying deep learning techniques to level the playing field in service offerings between foreign and local MENA startups to vitalize emerging markets.</Text>

      <Divider />

      <Heading p={2} as='h3'>From my notebook</Heading>
      <PostList />
    </Layout>
  )
}