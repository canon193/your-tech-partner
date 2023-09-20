import { Head, Html, Main, NextScript } from 'next/document'
import Script from "next/script";
import React from 'react'
import * as process from "process";

const GA_MEASUREMENT_ID = process.env.GOOGLE_ANALYTIC_WEBSITE_ID;
const Document = () => {
  return (
    <Html lang='en'>
      <Head>
          <meta name="description" content="An company profile of Your Tech Partner Company. Its company that serve for Application Development (Mobile, Web and Desktop), UI UX Design and Maintenance" />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='web,app,ui,maintenance,company,Your Tech Partner,profile' />
        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/x-icon"
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
