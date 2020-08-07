import { Box, Divider, Container, Alert, Close } from "theme-ui";
import Meta from './meta'
import Header from "./header";
import Footer from "./footer";
import Rainbow from "./rainbow";

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
            <Rainbow />
        </>
    )
}