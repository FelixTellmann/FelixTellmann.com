import { FC } from 'react';
import Text from '../components/Text';
import Timeline from '../components/Timeline';

export const Index: FC = () => {
  
  const INTRO = {
    title: `Hi, i'm Felix Tellmann`,
    description: `I'm a freelancing web developer, writer and entrepreneur living in Cape Town. I teach people coding and have been building things
        for the web for the last 6 years.`
  };
  const TIMELINE_CURRENT = [
    {
      title: `2020`,
      items: [
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        }
      ]
    }, {
      title: `2019`,
      items: [
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        }
      ]
    }
  ];
  const TIMELINE_PAST = [
    {
      title: `2018`,
      items: [
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        }
      ]
    },
    {
      title: `2017`,
      items: [
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        },
        {
          headline: `Moved to Cape Town`,
          description: `I'm excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.`
        }
      ]
    }
  ];
  
  return <>
    <Text as="h1" fontSize={[36, 6]} fontWeight={700} lineHeight={1.2} mb={10}>{INTRO.title}</Text>
    <Text as="p" fontSize={2} lineHeight={1.6} color={'--color-text'} mb={[3, 4]}>{INTRO.description}</Text>
    <Timeline title="Timeline" preview={TIMELINE_CURRENT} data={[...TIMELINE_CURRENT, ...TIMELINE_PAST]} />
  </>;
};

export default Index;