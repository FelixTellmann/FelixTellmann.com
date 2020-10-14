import { AppProps } from 'next/app';
import { createContext, FC } from 'react';
import GoogleFonts from 'next-google-fonts';
import { BreakpointProvider } from 'use-styled-system';
import { FiFacebook, FiGithub, FiMail, FiTwitter } from 'react-icons/fi';
import { DefaultSeo } from 'next-seo';
import { BorderFrame, Footer, Header } from 'components';
import 'reset-css/sass/_reset.scss';
import 'styles/theme.scss';
import 'styles/mdx.scss';

import { typography, variables, prism } from 'styles';
import useColorTheme from 'use-color-theme';

export const ThemeContext = createContext({ theme: '' });

export const Root: FC<AppProps> = ({ pageProps, Component }) => {
  const colorTheme = useColorTheme('light-theme', { classNames: ['light-theme', 'dark-theme', 'blue-theme'] });

  return (
    <>
      <style jsx global>
        {variables}
      </style>
      <style jsx global>
        {typography}
      </style>
      <style jsx global>
        {prism}
      </style>
      <style jsx global>{`
        .page {
          max-width: 76.4rem;
          min-height: calc(100vh - 309px);
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          padding: 0 3.2rem;
        }
      `}</style>

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
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />

      <BreakpointProvider breakPoints={[0, 600, 900, 1200]}>
        <ThemeContext.Provider value={{ theme: colorTheme.value }}>
          <BorderFrame loading={false} duration={3} width="5px" />
          <Header
            logo={{
              title: 'FT',
              href: '/'
            }}
            nav={[
              {
                title: 'Home',
                href: '/'
              },
              {
                title: 'Blog',
                href: '/blog'
              },
              {
                title: 'Learn',
                href: '/learn'
              },
              {
                title: 'About',
                href: '/about'
              }
            ]}
            toggleColor={() => colorTheme.toggle()}
            theme={colorTheme.value}
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
              },
              {
                title: 'learn-in-public',
                href: '/learn'
              }
              /* { title: '/uses', href: '/uses' },
                        { title: '/photos', href: '/photos' },
                        { title: '/newsletter', href: '/newsletter' } */
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
        </ThemeContext.Provider>
      </BreakpointProvider>
    </>
  );
};

export default Root;
