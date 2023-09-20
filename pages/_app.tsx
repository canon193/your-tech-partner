import 'styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600
    })
    TagManager.initialize({ gtmId: process.env.GOOGLE_ANALYTIC_WEBSITE_ID });
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
