// Default core packages
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'; // Import next/script

/**
 * Load custom scripts in <Head> including Google Analytics
 * 
 * @returns <Html>
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon and other head elements */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Use next/script for Google Analytics */}
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-LLX8MZDY1Y`}
            strategy="afterInteractive" // Load the script after the page is interactive
          />
          <Script id="ga-script" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LLX8MZDY1Y');
            `}
          </Script>
        </body>
      </Html>
    );
  }
}
