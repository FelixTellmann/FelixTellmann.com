import { FC, useState } from 'react';
import Box from '../components/Box';
import Text from '../components/Text';
import Timeline from '../components/Timeline';
import Button from '../components/Button';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export const Index: FC = () => {
  
  const TIMELINE_CURRENT = [
    {
      title: `2020`,
      items: [
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        }
      ]
    }, {
      title: `2019`,
      items: [
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        }
      ]
    }
  ];
  const TIMELINE_PAST = [
    {
      title: `2018`,
      items: [
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        }
      ]
    },
    {
      title: `2017`,
      items: [
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        },
        {
          headline: 'Moved to Cape Town',
          description: 'I\'m excited to help grow the Next.js community and continue building the optimal workflow for front-end developers.'
        }
      ]
    }
  ];
  const [fullTimeline, toggleFullTimeline] = useState(false);
  
  return <>
    <Box id="intro" mb={[3, 4]}>
      <Text as="h1" fontSize={[36, 6]} fontWeight={700} lineHeight={1.2} mb={10}>
        
        Hi, i'm Felix Tellmann
      
      </Text>
      <Text as="p" fontSize={2} lineHeight={1.6} color={'--color-text'}>
        
        I'm a freelancing web developer, writer and entrepreneur living in Cape Town. I teach people coding and have been building things
        for the web for the last 6 years.
      
      </Text>
    </Box>
    <Box id="timeline">
      <Text as="h2" fontSize={[30, 36]} fontWeight={700} lineHeight={1.2} mb={3}>
        Timeline
      </Text>
      <Timeline data={fullTimeline ? [...TIMELINE_CURRENT, ...TIMELINE_PAST] : TIMELINE_CURRENT} />
      <Button title={fullTimeline ? <>Show less &nbsp;&nbsp;&nbsp;<FiChevronUp /></> : <>Show more &nbsp;&nbsp;&nbsp;<FiChevronDown /></>}
              onClick={() => toggleFullTimeline(!fullTimeline)}
              secondary
              d={'flex'}
              mx={'auto'}
              my={4}
              fontSize={1}
              fontWeight={600} />
    </Box>
  </>;
};

export default Index;