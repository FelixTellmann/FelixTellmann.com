import { FC, Fragment, useEffect, useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Text } from './Text';
import { Hr } from './Hr';
import { Button } from './Button';
import { TimelineGroup, TimelineGroupProps } from './TimelineGroup';

type TimelineProps = {
  heading?: string;
  preview?: TimelineGroupProps[];
  data: TimelineGroupProps[];
};

export const Timeline: FC<TimelineProps> = ({ heading, data, preview }) => {
  const [fullTimeline, toggleFullTimeline] = useState(false);
  const [timelineData, setTimelineData] = useState(preview || data);

  useEffect(() => {
    setTimelineData(fullTimeline ? data : preview || data);
  }, [fullTimeline, data, preview]);

  return (
    <>
      {heading ? (
        <Text as="h2" fontSize={[30, 36]} fontWeight={700} lineHeight={1.2} mb={3}>
          {heading}
        </Text>
      ) : (
        ''
      )}
      {timelineData.map(({ title, items }, index) => (
        <Fragment key={title}>
          <TimelineGroup title={title} items={items} />
          {timelineData.length - 1 !== index ? <Hr /> : ''}
        </Fragment>
      ))}
      {preview ? (
        <Button
          aria-label="Toggle Timeline View"
          onClick={() => toggleFullTimeline(!fullTimeline)}
          secondary
          d="flex"
          mx="auto"
          my={4}
          fontSize={1}
          fontWeight={600}>
          {fullTimeline ? (
            <>
              Show less &nbsp;&nbsp;
              <FiChevronUp />
            </>
          ) : (
            <>
              Show more &nbsp;&nbsp; <FiChevronDown />
            </>
          )}
        </Button>
      ) : (
        ''
      )}
    </>
  );
};


