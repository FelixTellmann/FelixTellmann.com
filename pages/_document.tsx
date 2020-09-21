import Document, { Head, Html, Main, NextScript } from "next/document";
import flush from 'styled-jsx/server'
/*

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  
  render() {
    return (
      <Html lang="en">
        <Head>
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
*/


export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage
    
    try {
      let emotionStyles
      ctx.renderPage = () => (
        originalRenderPage({    })
      )
      
      const initialProps = await Document.getInitialProps(ctx)
      const styledJSXStyles = flush()
      
      
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledJSXStyles}
          </>
        )
      }
    } finally {
    }
  }
  
  // <snip>
}