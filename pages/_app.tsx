import 'styles/globals.css'
import type { AppProps } from 'next/app'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'
import GoogleAnalytics from "../components/ga4/GoogleAnalytics";


function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 600
    })
  }, [])
  return (
      <>
          <GoogleAnalytics />
          <Component {...pageProps} />
      </>
  );
}

export default MyApp
