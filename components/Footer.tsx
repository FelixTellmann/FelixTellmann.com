import { FC } from 'react';
import Box from './Box';
import Button from './Button';
import Link from './Link';
import Text from './Text';

type FooterProps = {
  socialNav: {
    title: string
    href: string
    target?: string
  }[]
  footerNav: {
    title: string
    href: string
  }[]
};

export const Footer: FC<FooterProps> = ({ socialNav, footerNav }) => {
  return <>
    <Box maxW={960} p={4} pb={3} mx={'auto'}>
      <Box d={'flex'} justify={'center'}>
        {socialNav.map(({ title, href, target }) => <Button key={href} title={title} href={href} large icon target={target} mx={1} />)}
      </Box>
      <Box d={'flex'} justify={'center'}>
        {footerNav.map(({ title, href }) => <Link key={href} href={href} title={title} small p={1} m={1} />)}
      </Box>
      <Box d={'flex'} justify={'center'}>
        <Text as="small" d={'block'} mt={4} fontSize={0} color={`--color-faded`}>
          {`© ${new Date().getFullYear()} FelixTellmann.com - All rights reserved.`}
        </Text>
      </Box>
    </Box>
  </>;
};

export default Footer;