import { FC, useState } from 'react';
import useColorTheme from 'use-color-theme';
import Box from '../components/Box';
import Text from '../components/Text';

export const Index: FC = () => {
  const [padding, setPadding] = useState(0);
  
  
  return <>
    <Text as="h1" fontSize={8} fontWeight={700} letterSpacing={'-0.05em'} p={4}>About page</Text>
  </>;
};

export default Index;