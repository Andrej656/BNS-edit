// Default core packages
import Document, { Html, Head, Main, NextScript } from 'next/document';

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

          {/* Google Analytics tracking code */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-LLX8MZDY1Y"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-LLX8MZDY1Y');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
