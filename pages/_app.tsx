import { BorderFrame, Footer, Header } from "components";
import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { createContext, FC } from "react";
import { FiFacebook, FiGithub, FiMail, FiTwitter } from "react-icons/fi";
import "reset-css/sass/_reset.scss";
import { prism, typography, variables } from "styles";
import "styles/mdx.scss";
import "styles/theme.scss";
import useColorTheme from "use-color-theme";
import { BreakpointProvider } from "use-styled-system";

export const ThemeContext = createContext({ theme: "" });

export const Root: FC<AppProps> = ({ pageProps, Component }) => {
  const colorTheme = useColorTheme("light-theme", { classNames: ["light-theme", "dark-theme", "blue-theme"] });
  const router = useRouter();
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
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 100 900;
          font-display: optional;
          src: url(/fonts/inter-var-latin.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
          U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
          U+FEFF, U+FFFD;
        }

        .page {
          max-width: 76.4rem;
          min-height: calc(100vh - 309px);
          display: flex;
          flex-direction: column;
          margin: 0 auto;
          padding: 0 var(--padding-page);
        }

        .example {
          background: var(--color-remark-code-bg);
          padding: 2.4rem;
          overflow: hidden;
        }
      `}</style>
      
      <DefaultSeo
        title="Felix Tellmann - Front-end Engineer"
        description="Creator of things that live on the internet - Web developer, writer and entrepreneur."
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.felixtellmann.com/",
          site_name: "Felix Tellmann",
          title: "Felix Tellmann - Front-end Engineer",
          description: "Creator of things that live on the internet - Web developer, writer and entrepreneur.",
          images: [
            {
              url: "https://www.felixtellmann.com/images/og-default.jpg",
              alt: "Felix Tellmann - Front-end Engineer",
              width: 1200,
              height: 630
            }
          ]
        }}
        twitter={{
          handle: "@FelixTellmann",
          site: "@FelixTellmann",
          cardType: "summary_large_image"
        }}
        canonical={`https://www.felixtellmann.com/${router.pathname}`}
      />
      
      <BreakpointProvider breakPoints={[0, 600, 900, 1200]}>
        <ThemeContext.Provider value={{ theme: colorTheme.value }}>
          {router.pathname.includes("examples/") ? (
            <>
              <div className="example">
                <Component {...pageProps} />
              </div>
            </>
          ) : (
             <>
               <BorderFrame loading={false} duration={3} width="5px" />
               <Header
                 logo={{
                   title: "FT",
                   href: "/"
                 }}
                 nav={[
                   {
                     title: "Home",
                     href: "/"
                   },
                   {
                     title: "Blog",
                     href: "/blog"
                   },
                   {
                     title: "Learn",
                     href: "/learn"
                   },
                   {
                     title: "About",
                     href: "/about"
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
                           stroke: "url(#gradient) currentColor"
                         }}
                       />
                     ),
                     href: "https://github.com/FelixTellmann",
                     target: "_blank"
                   },
                   {
                     title: (
                       <FiFacebook
                         style={{
                           stroke: "url(#gradient) currentColor"
                         }}
                       />
                     ),
                     href: "https://www.facebook.com/felixtellmann",
                     target: "_blank"
                   },
                   {
                     title: (
                       <FiTwitter
                         style={{
                           stroke: "url(#gradient) currentColor"
                         }}
                       />
                     ),
                     href: "https://twitter.com/FelixTellmann",
                     target: "_blank"
                   },
                   {
                     title: (
                       <FiMail
                         style={{
                           stroke: "url(#gradient) currentColor"
                         }}
                       />
                     ),
                     href: "mailto:hi@felixtellmann.com",
                     target: "_blank"
                   }
                 ]}
                 footerNav={[
                   {
                     title: "visit-my-old-site",
                     href: "https://old-tellmann-site.vercel.app/webdesign.html",
                     target: "_blank"
                   },
                   {
                     title: "learn-in-public",
                     href: "/learn"
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
             </>
           )}
        </ThemeContext.Provider>
      </BreakpointProvider>
    </>
  );
};

export default Root;
