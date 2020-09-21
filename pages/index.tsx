import { FC, useState } from 'react';
import useColorTheme from 'use-color-theme';
import Box from '../components/Box';
import Text from '../components/Text';

export const Index: FC = () => {
  const [padding, setPadding] = useState(0);
  
  const colorTheme = useColorTheme('light-theme', { classNames: ['light-theme', 'dark-theme', 'another-theme'] });
  
  return <>
    <Text as="h1" fontSize={8} fontWeight={700} letterSpacing={'-0.05em'} p={4}>A simple text component</Text>
    <Text as="h1" fontSize={8} fontWeight={700} letterSpacing={'-0.05em'} p={4}>A simple text component</Text>
    <Box p={4}
         bg={['--color-primary', '--color-background']}
         onClick={() => colorTheme.toggle()}>A box with some custom settings - Click me
    </Box>
  </>;
};

export default Index;