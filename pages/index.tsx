import { FC, useState } from 'react';
import useColorTheme from 'use-color-theme';
import Box from '../components/Box';

export const Index: FC = () => {
  const [test, setTest] = useState(0)
  
  const colorTheme = useColorTheme('light-theme', { classNames: ['light-theme', 'dark-theme', 'another-theme'] });
  
  return <>
    <div onClick={() => { colorTheme.toggle(); }}>Welcome to our Next Project</div>
    <Box p={4} bg={'red'} fontWeight={'700'} fontSize={24} className="hello">Hello World</Box>
    <Box p={test} bg={'red'} fontWeight={'700'} fontSize={[24,12]} onClick={()=>setTest(test+1)}>Hello World</Box>
    <style jsx global>{`
      .hello {
        background: pink;
      }
    `}</style>
  </>;
};

export default Index;