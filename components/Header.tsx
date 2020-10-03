import { FC } from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';
import { FiMoon, FiSun } from 'react-icons/fi';
import useColorTheme from 'use-color-theme';
import LinkBlock from './LinkBlock';

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
  
  const colorTheme = useColorTheme('light-theme', { classNames: ['light-theme', 'dark-theme'] });
  
  return <>
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
          {
            colorTheme.value === 'dark-theme'
            ? <FiSun style={{ filter: `drop-shadow(rgba(240, 255, 50, 0.85) 0px 0px 3px)` }} />
            : <FiMoon style={{ filter: `drop-shadow(rgba(0, 0, 0, 0.35) 0px 0px 3px)` }} />
          }
        </Button>
      </Box>
    </Box>
  </>;
};

export default Header;