import { FC } from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';
import { FiAperture, FiMoon, FiSun } from 'react-icons/fi';
import useColorTheme from 'use-color-theme';
import LinkBlock from './LinkBlock';
import Head from 'next/head';

type HeaderProps = {
  logo: {
    title: string
    href: string
  }
  nav: {
    title: string
    href: string
  }[]
};

export const Header: FC<HeaderProps> = ({ logo, nav }) => {
  
  const colorTheme = useColorTheme('light-theme', { classNames: ['light-theme', 'dark-theme', 'blue-theme'] });
  
  return <>
    <Head>
      <link rel="apple-touch-icon" sizes="57x57" href={`/favicon/${colorTheme.value}/apple-icon-57x57.png`} />
      <link rel="apple-touch-icon" sizes="60x60" href={`/favicon/${colorTheme.value}/apple-icon-60x60.png`} />
      <link rel="apple-touch-icon" sizes="72x72" href={`/favicon/${colorTheme.value}/apple-icon-72x72.png`} />
      <link rel="apple-touch-icon" sizes="76x76" href={`/favicon/${colorTheme.value}/apple-icon-76x76.png`} />
      <link rel="apple-touch-icon" sizes="114x114" href={`/favicon/${colorTheme.value}/apple-icon-114x114.png`} />
      <link rel="apple-touch-icon" sizes="120x120" href={`/favicon/${colorTheme.value}/apple-icon-120x120.png`} />
      <link rel="apple-touch-icon" sizes="144x144" href={`/favicon/${colorTheme.value}/apple-icon-144x144.png`} />
      <link rel="apple-touch-icon" sizes="152x152" href={`/favicon/${colorTheme.value}/apple-icon-152x152.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`/favicon/${colorTheme.value}/apple-icon-180x180.png`} />
      <link rel="icon" type="image/png" sizes="192x192" href={`/favicon/${colorTheme.value}/android-icon-192x192.png`} />
      <link rel="icon" type="image/png" sizes="32x32" href={`/favicon/${colorTheme.value}/favicon-32x32.png`} />
      <link rel="icon" type="image/png" sizes="96x96" href={`/favicon/${colorTheme.value}/favicon-96x96.png`} />
      <link rel="icon" type="image/png" sizes="16x16" href={`/favicon/${colorTheme.value}/favicon-16x16.png`} />
      <link rel="manifest" href={`/favicon/${colorTheme.value}/manifest.json`} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content={`/favicon/${colorTheme.value}/ms-icon-144x144.png`} />
      <meta name="theme-color" content="#ffffff" />
    </Head>
    <Box as="header"
         mb={4}
         mt={[0, 4]}
         position={'sticky'}
         top={0}
         color={'--color-header'}
         bg={'--color-header-background'}
         backdropFilter={'--color-header-backdrop-filter'}
         zIndex={1000}>
      <Box as="nav"
           d={'flex'}
           align={'center'}
           maxW={960}
           mx={'auto'}
           p={4}>
        <LinkBlock href={logo.href}><Text as={'div'} fontSize={5} fontWeight={700}>{logo.title}</Text></LinkBlock>
        <Box d={'flex'} flex={1} justify={'flex-end'}>
          {nav.map(({ title, href }) => <Button key={href} href={href} mx={['2px', 2]} px={[2, 3]}>{title}</Button>)}
        </Box>
        <Button aria-label="Toggle Color Theme" onClick={colorTheme.toggle} icon secondary ml={3}>
          {colorTheme.value === 'light-theme' ? <FiMoon style={{ filter: `drop-shadow(rgba(0, 0, 0, 0.35) 0px 0px 3px)` }} /> : null}
          {colorTheme.value === 'dark-theme' ? <FiAperture style={{ color: `#0bc5ea` }} /> : null}
          {colorTheme.value === 'blue-theme' ? <FiSun style={{ color: `rgb(237 255 3 / 96%)` }} /> : null}
        </Button>
      </Box>
    </Box>
  </>;
};

export default Header;