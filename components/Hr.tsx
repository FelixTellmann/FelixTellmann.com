import { FC } from "react";
import { Space, useStyledSystem } from "use-styled-system";

type HrProps = {
  invisible?: boolean;
};

export const Hr: FC<HrProps & Space> = ({ invisible, ...props }) => {
  const { styleJsx } = useStyledSystem(props, { Space: true });
  return (
      <>
        <hr />
        <style jsx>{`
        hr {
          width: 100%;
          opacity: 0.6;
          margin-top: 3.2rem;
          margin-bottom: 3.2rem;
          border: 0;
          border-bottom: 0.01rem var(--color-button) solid;
          ${invisible ? `border-bottom: 0;` : ""}
          ${styleJsx}
        }
      `}</style>
      </>
  );
};


