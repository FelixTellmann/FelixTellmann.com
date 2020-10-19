import { FC, Fragment, useEffect, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Button } from "./Button";
import { Hr } from "./Hr";
import { TimelineGroup, TimelineGroupProps } from "./TimelineGroup";

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
        {heading
         ? <h2>
           {heading}
         </h2>
         : null}
        {timelineData.map(({ title, items }, index) => (
            <Fragment key={title}>
              <TimelineGroup title={title} items={items} />
              {timelineData.length - 1 !== index ? <Hr /> : ""}
            </Fragment>
        ))}
        {preview
         ? <Button aria-label="Toggle Timeline View"
                   onClick={() => toggleFullTimeline(!fullTimeline)}
                   secondary
                   d="flex"
                   mx="auto"
                   my={4}
                   fontSize={1}
                   fontWeight={600}>
           {fullTimeline
            ? <> Show less &nbsp;&nbsp;<FiChevronUp /></>
            : <> Show more &nbsp;&nbsp;<FiChevronDown /></>
           }
         </Button>
         : null}
      </>
  );
};


