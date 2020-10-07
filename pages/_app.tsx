import { AppProps } from 'next/app'
import { FC } from 'react'
import GoogleFonts from 'next-google-fonts'
import { BreakpointProvider } from 'use-styled-system'
import Header from '../components/Header'
import { FiFacebook, FiGithub, FiMail, FiTwitter } from 'react-icons/fi'
import Footer from '../components/Footer'
import { Loading } from '../components/Loading'
import { DefaultSeo } from 'next-seo'
import 'reset-css/sass/_reset.scss'
import 'styles/theme.scss'
import 'styles/mdx.scss'

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

        hr {
          margin: 0;
          border-width: 0;
          border-color: unset;
        }

        strong {
          font-weight: 700;
        }

        em {
          font-style: italic;
        }

        u {
          text-decoration-color: var(--color-subdued);
          text-decoration-skip-ink: auto;
          text-decoration-width: 1px;
        }

        small {
          font-size: 0.875em;
        }

        .page {
          max-width: 76.4rem;
          min-height: calc(100vh - 309px);
          margin: 0 auto;
          padding: 0 3.2rem;
          display: flex;
          flex-direction: column;
        }

        #__next {
          position: relative;
        }
      `}</style>

      <BreakpointProvider breakPoints={[0, 600, 900, 1200]}>
        <DefaultSeo
          title="Felix Tellmann - Front-end Engineer"
          description="Creator of things that live on the internet - Web developer, writer and entrepreneur."
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://www.felixtellmann.com/',
            site_name: 'Felix Tellmann',
            title: 'Felix Tellmann - Front-end Engineer',
            description: 'Creator of things that live on the internet - Web developer, writer and entrepreneur.',
            images: [
              {
                url: 'https://www.felixtellmann.com/images/og-default.jpg',
                alt: 'Felix Tellmann - Front-end Engineer',
                width: 1200,
                height: 630
              }
            ]
          }}
          twitter={{
            handle: '@FelixTellmann',
            site: '@FelixTellmann',
            cardType: 'summary_large_image'
          }}
        />
        <Loading loading={false} duration={3} width="5px" />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
        <Header
          logo={{ title: 'FT', href: '/' }}
          nav={[
            { title: 'Home', href: '/' },
            { title: 'Blog', href: '/blog' },
            { title: 'About', href: '/about' }
          ]}
        />
        <div className="page">
          <Component {...pageProps} />
        </div>
        <Footer
          socialNav={[
            {
              title: (
                <FiGithub
                  style={{
                    stroke: 'url(#gradient) currentColor'
                  }}
                />
              ),
              href: 'https://github.com/FelixTellmann',
              target: '_blank'
            },
            {
              title: (
                <FiFacebook
                  style={{
                    stroke: 'url(#gradient) currentColor'
                  }}
                />
              ),
              href: 'https://www.facebook.com/felixtellmann',
              target: '_blank'
            },
            {
              title: (
                <FiTwitter
                  style={{
                    stroke: 'url(#gradient) currentColor'
                  }}
                />
              ),
              href: 'https://twitter.com/FelixTellmann',
              target: '_blank'
            },
            {
              title: (
                <FiMail
                  style={{
                    stroke: 'url(#gradient) currentColor'
                  }}
                />
              ),
              href: 'mailto:hi@felixtellmann.com',
              target: '_blank'
            }
          ]}
          footerNav={[
            {
              title: 'visit-my-old-site',
              href: 'https://old-tellmann-site.vercel.app/webdesign.html',
              target: '_blank'
            } /*
            { title: '/uses', href: '/uses' },
            { title: '/photos', href: '/photos' },
            { title: '/newsletter', href: '/newsletter' }*/
          ]}
        />
        <svg
          aria-hidden="true"
          focusable="false"
          style={{
            width: 0,
            height: 0,
            position: `absolute`
          }}>
          <linearGradient id="gradient" gradientTransform="rotate(65)">
            <stop offset="25.28%" stopColor="var(--color-gradient-1)" />
            <stop offset="57.7%" stopColor="var(--color-gradient-2)" />
            <stop offset="97.75" stopColor="var(--color-gradient-3)" />
          </linearGradient>
        </svg>
      </BreakpointProvider>
    </>
  )
}

export default _App;