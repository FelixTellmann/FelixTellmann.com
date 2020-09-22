import { FC } from 'react';

type HrProps = {};

export const Hr: FC<HrProps> = ({}) => {
  return <>
    <hr />
    <style jsx>{`
      hr {
        width: 100%;
        opacity: 0.6;
        margin-top: 3.2rem;
        margin-bottom: 3.2rem;
        border: 0;
        border-bottom: 0.01rem var(--color-button) solid;
      }
    `}</style>
  </>;
};

export default Hr;