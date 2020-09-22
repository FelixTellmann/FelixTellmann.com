import { FC } from 'react';
import Box from './Box';
import Text from './Text';
// @ts-ignore
import CheckIcon from 'public/icons/CheckIcon.svg';
import Hr from './Hr';

type TimelineProps = {
  data: {
    title: string
    items: {
      headline: string
      description: string
    }[]
  }[]
};

export const Timeline: FC<TimelineProps> = ({ data }) => {
  return <>
    {
      data.map(({ title, items }, index) => (
        <Box key={title}>
          <Text as="h3" fontSize={[20, 4]} fontWeight={700} lineHeight={1.4} mb={10}>{title}</Text>
          <Box as={'ul'}>
            {items.map(({ headline, description }) => (
              <Box key={headline} as={'li'}>
                <Box d={'flex'} mb={1} align={'center'}>
                  <CheckIcon style={{ margin: `0 12px 0 8px`, color: `#00bfa5` }} />
                  <Text as="h4" lineHeight={1.4} fontWeight={600}>{headline}</Text>
                </Box>
                <Text as="p" color={'--color-text'} ml={36} mb={3} lineHeight={1.6}>{description}</Text>
              </Box>
            ))}
          </Box>
          {data.length - 1 !== index ? <Hr /> : ''}
        </Box>
      ))
    }
  </>;
};

export default Timeline;