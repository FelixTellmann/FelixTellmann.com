import { FC } from 'react';
import { Text, IntroText, Link } from 'components';

export const Index: FC = () => {
  return (
    <>
      <IntroText as="h1" fontSize={[105, 200]}>
        About
      </IntroText>
      <Text as="p" fontSize={2} lineHeight={1.6} color="--color-text" mb={4}>
        I'm a freelancing web developer, writer and entrepreneur living in Cape Town. I enjoy creating things that live on the
        internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide
        real value to its users.
      </Text>

      <Text as="p" fontSize={2} lineHeight={1.6} color="--color-text" mb={4}>
        My focus area for the past few years has been front-end development with{' '}
        <Link href="https://reactjs.org" target="_blank" title="React" />,{' '}
        <Link href="https://www.typescriptlang.org/" target="_blank" title="Typescript" /> and{' '}
        <Link href="https://nextjs.org" target="_blank" title="Next.js" />
        .js to create beautiful user (and developer) experiences that bring delight. I'm also currently experimenting with Chrome
        Extensions & Next.js for some small side projects.
      </Text>

      <Text as="h2" fontSize={4} lineHeight={1.6} fontWeight={700} mb={2}>
        Passion for technology
      </Text>

      <Text as="p" fontSize={2} lineHeight={1.6} color="--color-text" mb={4}>
        I’ve spent most of my life deeply interested in technology & mind-buggling puzzles continuously building things with both.
        As a teenager, I was a classic computer nerd, spending most of my times messing with the computer, doing 1 of 4 things:
        coding with software and programs and figuring things out. Tinkering with the hardware and building/ruining computers by
        experimenting too much. Building websites with FrontPage 98 and Flash. And of course, playing games.
      </Text>

      <Text as="p" fontSize={2} lineHeight={1.6} color="--color-text" mb={4}>
        Most of that is still true today.
      </Text>

      <Text as="p" fontSize={2} lineHeight={1.6} color="--color-text" mb={4}>
        I love building things, challenging ideas, seeking knowledge and creating opportunities. I enjoy finding patterns in
        things, constructing models for how the world works, and then discussing, sharing, and using that information to improve
        the world in some way.
      </Text>
    </>
  );
};

export default Index;
