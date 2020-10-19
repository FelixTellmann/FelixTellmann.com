import { FC } from "react";
import { FiAperture, FiMoon, FiSun } from "react-icons/fi";
import Head from "next/head";
import { Box } from "./Box";
import { Button } from "./Button";
import { LinkBlock } from "./LinkBlock";

type HeaderProps = {
  logo: {
    title: string;
    href: string;
  };
  nav: {
    title: string;
    href: string;
  }[];
  toggleColor: (e) => void
  theme: string
};

export const Header: FC<HeaderProps> = ({ logo, nav, toggleColor, theme }) => {
  
  return (
      <>
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href={`/favicon/${theme}/apple-icon-57x57.png`} />
          <link rel="apple-touch-icon" sizes="60x60" href={`/favicon/${theme}/apple-icon-60x60.png`} />
          <link rel="apple-touch-icon" sizes="72x72" href={`/favicon/${theme}/apple-icon-72x72.png`} />
          <link rel="apple-touch-icon" sizes="76x76" href={`/favicon/${theme}/apple-icon-76x76.png`} />
          <link rel="apple-touch-icon" sizes="114x114" href={`/favicon/${theme}/apple-icon-114x114.png`} />
          <link rel="apple-touch-icon" sizes="120x120" href={`/favicon/${theme}/apple-icon-120x120.png`} />
          <link rel="apple-touch-icon" sizes="144x144" href={`/favicon/${theme}/apple-icon-144x144.png`} />
          <link rel="apple-touch-icon" sizes="152x152" href={`/favicon/${theme}/apple-icon-152x152.png`} />
          <link rel="apple-touch-icon" sizes="180x180" href={`/favicon/${theme}/apple-icon-180x180.png`} />
          <link rel="icon" type="image/png" sizes="192x192" href={`/favicon/${theme}/android-icon-192x192.png`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`/favicon/${theme}/favicon-32x32.png`} />
          <link rel="icon" type="image/png" sizes="96x96" href={`/favicon/${theme}/favicon-96x96.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`/favicon/${theme}/favicon-16x16.png`} />
          <link rel="manifest" href={`/favicon/${theme}/manifest.json`} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content={`/favicon/${theme}/ms-icon-144x144.png`} />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <header>
          <nav>
            <LinkBlock href={logo.href} fontSize={5} fontWeight={700} mr={1}>{logo.title}</LinkBlock>
            <Box d="flex" flex={1} justify="flex-end">
              {nav.map(({ title, href }) => (
                  <Button key={href}
                          href={href}
                          mx={["2px", 2]}
                          px={[2, 3]}
                          letterSpacing={["-0.2px", 0]}
                          fontSize={[15, 16]}>
                    {title}
                  </Button>
              ))}
            </Box>
            <Button aria-label="Toggle Color Theme" onClick={toggleColor} icon secondary ml={[1, 3]}>
              {theme === "light-theme" ? (
                  <FiMoon style={{ filter: `drop-shadow(rgba(0, 0, 0, 0.35) 00003px)` }} />
              ) : null}
              {theme === "dark-theme" ? <FiAperture style={{ color: `#0bc5ea` }} /> : null}
              {theme === "blue-theme" ? <FiSun style={{ color: `rgb(237 255 3 / 96%)` }} /> : null}
            </Button>
          </nav>
        </header>
        
        <style jsx>{`
          header {
            position: sticky;
            z-index: 1000;
            top: 0;
            margin-top: 0;
            margin-bottom: 3.2rem;
            background-color: var(--color-header-background);
            color: var(--color-header);
            backdrop-filter: var(--color-header-backdrop-filter);

            @media screen and (min-width: 600px) {
              margin-top: 3.2rem;
            }
          }

          nav {
            display: flex;
            margin-left: auto;
            margin-right: auto;
            padding: 3.2rem;
            align-items: center;
            max-width: 960px;
          }
        
        `}</style>
      </>
  );
};
