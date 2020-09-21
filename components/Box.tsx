import { FC } from 'react';
import { CSS, useStyledSystem } from 'use-styled-system';

type BoxProps = {
  className?: string
  onClick?: Function
}

export const Box: FC<BoxProps & CSS> = ({ children, className = '', ...props }) => {
  
  const { styleJsx, cleanProps } = useStyledSystem(props, { Space: true, Layout: true, Color: true });
  return <>
    <div className={className} {...cleanProps}>{children}</div>
    <style jsx>{`
        ${styleJsx}
    `}</style>
  </>;
};

export default Box;