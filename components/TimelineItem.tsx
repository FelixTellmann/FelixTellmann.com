import { FC } from 'react';
import Box from './Box';
// @ts-ignore
import CheckIcon from 'public/icons/CheckIcon.svg';
import Text from './Text';

export type TimelineItemProps = {
  headline: string | JSX.Element
  description?: string | JSX.Element
}

export const TimelineItem: FC<TimelineItemProps> = ({ headline, description }) => {
  return <>
    <Box as={'li'} mb={3}>
      <Box d={'flex'} mb={1} align={'center'}>
        <CheckIcon style={{ margin: `0 12px 0 8px`, color: `var(--color-green)` }} />
        <Text as="h4" lineHeight={1.8} fontWeight={600}>{headline}</Text>
      </Box>
      {description ? <Text as="p" color={'--color-text'} ml={36} lineHeight={1.6}>{description}</Text> : null}
    </Box>
  </>;
};

export default TimelineItem;