import { Head, Html, Main, NextScript } from 'next/document'
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
      </Head>
        <body className="mb-[-128px]">
            <Main />
            <NextScript />
           {/* Global Site Tag (gtag.js) - Google Analytics */}
            {/* Necessary to prevent error: window.gtag is not defined for Next.js-hydration */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              `,
              }}
            />
        </body>
    </Html>
  )
}

export default Document
