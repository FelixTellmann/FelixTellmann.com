import { AppProps } from 'next/app';
import { FC } from 'react';
import GoogleFonts from 'next-google-fonts';
import { FiMoon, FiSun } from 'react-icons/fi';

import 'reset-css/sass/_reset.scss';

import 'styles/theme.scss';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import useColorTheme from 'use-color-theme';

export const _App: FC<AppProps> = ({ pageProps, Component }) => {
  
  const colorTheme = useColorTheme('light-theme', { classNames: ['light-theme', 'dark-theme'] });
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

        #__next {
          min-height: 120vh;
        }
      
      
      `}</style>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" />
      <Box as="header"
           mb={4}
           mt={[0, 4]}
           position={'sticky'}
           top={0}
           color={'--color-header'}
           bg={'--color-header-background'}
           backdropFilter={'--color-header-backdrop-filter'}>
        <Box as="nav"
             d={'flex'}
             align={'center'}
             maxW={960}
             mx={'auto'}
             p={4}>
          <Text fontSize={5} fontWeight={700}>FT</Text>
          <Box d={'flex'} flex={1} justify={'flex-end'}>
            <Button href="/" title={'Home'} mx={['2px', 2]} />
            <Button href="/blog" title={'Blog'} mx={['2px', 2]} />
            <Button href="/about" title={'About'} mx={['2px', 2]} />
          </Box>
          <Button onClick={colorTheme.toggle}
                  icon
                  secondary
                  ml={3}
                  title={colorTheme.value === 'dark-theme' ?
                         <FiSun style={{ filter: `drop-shadow(rgba(240, 255, 50, 0.85) 0px 0px 3px)` }} /> : <FiMoon
                           style={{ filter: `drop-shadow(rgba(0, 0, 0, 0.35) 0px 0px 3px)` }} />} />
        </Box>
      </Box>
      
      <Component {...pageProps} />
    </>
  );
};

export default _App;
