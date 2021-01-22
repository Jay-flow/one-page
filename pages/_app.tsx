import type { AppProps } from 'next/app'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(Component)
  return <Component {...pageProps} />
}

export default MyApp
