import { AppProps } from 'next/app';
import { FC } from 'react';
import GoogleFonts from 'next-google-fonts';
import { BreakpointProvider } from 'use-styled-system';

import 'reset-css/sass/_reset.scss';
import 'styles/theme.scss';
import Header from '../components/Header';
import { FiFacebook, FiGithub, FiMail, FiTwitter } from 'react-icons/fi';
import Footer from '../components/Footer';

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

        ::selection {
          background-color: var(--color-selection);
        }

        a {
          cursor: pointer;
          color: inherit;
          text-decoration: none;
        }

        .page {
          max-width: 76.4rem;
          min-height: calc(100vh - 309px);
          margin: 0 auto;
          padding: 0 3.2rem;
        }

        #__next {
          position: relative;
        }
      `}</style>
      
      <BreakpointProvider breakPoints={[0, 600, 900, 1200]}>
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <Header
          logo={{ title: 'FT', href: '/' }}
          nav={[
            { title: 'Home', href: '/' },
            { title: 'Blog', href: '/blog' },
            { title: 'About', href: '/about' }
          ]} />
        <div className="page">
          <Component {...pageProps} />
        </div>
        <Footer
          socialNav={[
            { title: <FiGithub />, href: 'https://github.com/FelixTellmann', target: '_blank' },
            { title: <FiFacebook />, href: 'https://www.facebook.com/felixtellmann', target: '_blank' },
            { title: <FiTwitter />, href: 'https://twitter.com/FelixTellmann', target: '_blank' },
            { title: <FiMail />, href: 'mailto:hi@felixtellmann.com', target: '_blank' }
          ]}
          footerNav={[
            { title: '/uses', href: '/uses' },
            { title: '/photos', href: '/photos' },
            { title: '/newsletter', href: '/newsletter' }
          ]} />
      </BreakpointProvider>
    </>
  );
};

export default _App;
