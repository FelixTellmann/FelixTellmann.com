import { FC, useState } from 'react';
import Text from '../components/Text';
import IntroText from '../components/IntroText';

export const Index: FC = () => {
  const [padding, setPadding] = useState(0);
  
  return <>
    {/*<Text as="h1" fontSize={[36, 6]} fontWeight={700} lineHeight={1.2} mb={4}>
      About Me
    </Text>*/}
    <IntroText fontSize={[105,200]}>About</IntroText>
    <Text as="p" fontSize={2} lineHeight={1.6} color={'--color-text'} mb={4}>
      I'm a freelancing web developer, writer and entrepreneur living in Cape Town. I enjoy creating things that live on the internet,
      whether that be websites, applications, or anything in between. My goal is to always build products that provide real value to its
      users.
    </Text>
    
    <Text as="p" fontSize={2} lineHeight={1.6} color={'--color-text'} mb={4}>
      I’ve spent most of my life deeply interested in technology and food continuously building things with both. As a teenager, I was a
      classic computer nerd, spending most of my times messing with the computer, doing 1 of 4 things: coding with software and programs and
      figuring things out. Tinkering with the hardware and building/ruining computers by experimenting too much. Building websites with
      FrontPage 98 and Flash. And of course, playing games.
    </Text>
  
    <Text as="p" fontSize={2} lineHeight={1.6} color={'--color-text'} mb={4}>
      Most of that is still true today.
    </Text>
  
    <Text as="p" fontSize={2} lineHeight={1.6} color={'--color-text'} mb={4}>
      I love building things, challenging ideas, seeking knowledge and creating opportunities. I enjoy finding patterns in things,
      constructing models for how the world works, and then discussing, sharing, and using that information to improve the world in some
      way.
    </Text>
  </>;
};

export default Index;