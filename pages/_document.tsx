import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="referrer" content="strict-origin-when-cross-origin" />
          <meta charSet="UTF-8" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-JS229JV27E" />
          <script async src="/google-analytics.js"
          />
        </Head>
        <body>
          <script src="/colorTheme.js" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
