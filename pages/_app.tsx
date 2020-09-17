import { AppProps } from 'next/app';
import { FC } from 'react';
import GoogleFonts from 'next-google-fonts';
import 'styles/theme.scss';

export const _App: FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <style jsx global>{`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        html {
          min-width: 320px;
          font-size: 10px;
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }

        body {
          background: var(--color-background);
          color: var(--color-body);
          font-family: var(--font-family);
          font-size: var(--p);
        }
      
      `}</style>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      <Component {...pageProps} />
    </>
  );
};

export default _App;
