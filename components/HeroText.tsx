import { FC } from 'react';
import { Decor, Space, useStyledSystem } from 'use-styled-system';

export const HeroText: FC<Decor & Space> = ({ children, ...props }) => {
  const { styleJsx } = useStyledSystem(props, {
    Decor: true,
    Space: true
  });
  return (
    <>
      <div>{children}</div>
      <style jsx>{`
        div {
          margin-bottom: -0.1em;
          margin-left: -0.05em;
          background-image: linear-gradient(
            270deg,
            var(--color-gradient-1) 25.28%,
            var(--color-gradient-2) 59.7%,
            var(--color-gradient-3) 97.75%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          font-size: 22rem;
          font-weight: 700;
          line-height: 1.15;
          letter-spacing: -0.06em;
          ${styleJsx}
        }
      `}</style>
    </>
  );
};
