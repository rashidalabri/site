import { Heading, Text } from "theme-ui"

export default function PostList() {
    const posts = [
        {
            title: 'When Not to Use React Components',
            description: 'To use the components with next.js you have to flush the styles. This is a bug in styled-jsx component package + next.js.',
            date: 'Posted two days ago'
        },
        {
            title: 'When Not to Use React Components',
            description: 'To use the components with next.js you have to flush the styles. This is a bug in styled-jsx component package + next.js.',
            date: 'Posted two days ago'
        },
        {
            title: 'When Not to Use React Components',
            description: 'To use the components with next.js you have to flush the styles. This is a bug in styled-jsx component package + next.js.',
            date: 'Posted two days ago'
        }
    ]
    return posts.map((post, i) => (
        <>
            <Heading as='h5'>{post.title}</Heading>
            <Text>{post.description}</Text>
            <Text>{post.date}</Text>
        </>
    ))
}