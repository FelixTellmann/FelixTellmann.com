import { FC } from 'react';
import CheckIcon from 'public/icons/CheckIcon.svg';
import { Box } from './Box';

export type TimelineItemProps = {
  headline: string | JSX.Element;
  description?: string | JSX.Element;
};

export const TimelineItem: FC<TimelineItemProps> = ({ headline, description }) => {
  return (
    <>
      <li>
        <CheckIcon />
        <h4 className="h6">{headline}</h4>

        {description ? <p>{description}</p> : null}
      </li>
      <style jsx>{`
        li {
          display: grid;
          align-items: center;
          grid-template-columns: 3.6rem 1fr;
          grid-template-rows: 2.8rem 1fr;
          grid-template-areas:
            ' . . '
            ' . description';
          margin-bottom: 1.6rem;
          grid-row-gap: 0.4rem;
          :global(svg) {
            margin: 0 12px 0 8px;
            color: var(--color-green);
          }
        }
        p {
          grid-area: description;
        }
      `}</style>
    </>
  );
};
