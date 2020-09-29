import { FC, Fragment, useEffect, useState } from 'react';
import Box from './Box';
import Text from './Text';
// @ts-ignore
import CheckIcon from 'public/icons/CheckIcon.svg';
import Hr from './Hr';
import Button from './Button';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type TimelineItemProps = {
  headline: string
  description: string
}

type TimelineGroupProps = {
  title: string
  items: TimelineItemProps[]
}
type TimelineProps = {
  title?: string
  preview?: TimelineGroupProps[]
  data: TimelineGroupProps[]
};

export const TimelineItem: FC<TimelineItemProps> = ({ headline, description }) => {
  return <>
    <Box key={headline} as={'li'}>
      <Box d={'flex'} mb={1} align={'center'}>
        <CheckIcon style={{ margin: `0 12px 0 8px`, color: `var(--color-green)` }} />
        <Text as="h4" lineHeight={1.4} fontWeight={600}>{headline}</Text>
      </Box>
      <Text as="p" color={'--color-text'} ml={36} mb={3} lineHeight={1.6}>{description}</Text>
    </Box>
  </>;
};

export const TimelineGroup: FC<TimelineGroupProps> = ({ title, items }) => {
  return <>
    <Box as='section' key={title}>
      <Text as="h3" fontSize={[20, 4]} fontWeight={700} lineHeight={1.4} mb={10}>{title}</Text>
      <Box as={'ul'}>
        {items.map((props, index) => <TimelineItem key={index} {...props} />)}
      </Box>
    </Box>
  </>;
};

export const Timeline: FC<TimelineProps> = ({ title, data, preview }) => {
  const [fullTimeline, toggleFullTimeline] = useState(false);
  const [timelineData, setTimelineData] = useState(preview ? preview : data);
  
  useEffect(() => {
    fullTimeline ? setTimelineData(data) : setTimelineData(preview ? preview : data);
  }, [fullTimeline]);
  
  return <>
    {title ? <Text as="h2" fontSize={[30, 36]} fontWeight={700} lineHeight={1.2} mb={3}>{title}</Text> : ''}
    {timelineData.map(({ title, items }, index) => (
      <Fragment key={title}>
        <TimelineGroup title={title} items={items} />
        {timelineData.length - 1 !== index ? <Hr /> : ''}
      </Fragment>
    ))}
    {preview
     ? <Button title={fullTimeline ? <>Show less &nbsp;&nbsp;<FiChevronUp /></> : <>Show more &nbsp;&nbsp; <FiChevronDown /></>}
               onClick={() => toggleFullTimeline(!fullTimeline)}
               secondary
               d={'flex'}
               mx={'auto'}
               my={4}
               fontSize={1}
               fontWeight={600} />
     : ''}
  </>;
};

export default Timeline;