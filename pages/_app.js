import { ThemeProvider } from 'theme-ui'
import theme from '../components/theme'
import '../components/fonts.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
