import { Box, Divider, Container } from "theme-ui";
import Meta from './meta'
import Header from "./header";
import Footer from "./footer";

export default function Layout(props) {
    return (
        <>
        <Meta />
        <Container>
            <Header />
            <Box as='main'>
                {props.children}
            </Box>
            <Footer />
        </Container>
        </>
    )
}