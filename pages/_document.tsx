import { Head, Html, Main, NextScript } from 'next/document'
import Script from "next/script";
import React from 'react'
import * as process from "process";

const GA_MEASUREMENT_ID = process.env.GOOGLE_ANALYTIC_WEBSITE_ID;
const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <Script id="google-tag-manager" strategy="afterInteractive">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GA_MEASUREMENT_ID}');
            `}
        </Script>
          <meta name="description" content="An company profile of Your Tech Partner Company. Its company that serve for Application Development (Mobile, Web and Desktop), UI UX Design and Maintenance" />
          <meta name="robots" content="index, follow" />
          <meta name='tags' content='web,app,ui,maintenance,company,Your Tech Partner,profile' />
        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/x-icon"
        />
      </Head>
        <body className="mb-[-128px]">
            <Main />
            <NextScript />
            <noscript
                dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GA_MEASUREMENT_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
                }}
            />
        </body>
    </Html>
  )
}

export default Document
