import { FC } from 'react';
import { TimelineItem, TimelineItemProps } from './TimelineItem';
import { Box } from './Box';
import { Text } from './Text';

export type TimelineGroupProps = {
  title: string;
  items: TimelineItemProps[];
};

export const TimelineGroup: FC<TimelineGroupProps> = ({ title, items }) => {
  return (
    <>
      <Box as="section" key={title}>
        <Text as="h3" fontSize={[20, 4]} fontWeight={700} lineHeight={1.4} mb={10}>
          {title}
        </Text>
        <Box as="ul">
          {items.map((props) => (
            <TimelineItem key={props.headline.toString()} {...props} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TimelineGroup;
