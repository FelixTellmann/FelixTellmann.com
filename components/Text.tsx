import { createElement, FC } from 'react';
import { CSS, useStyledSystem } from 'use-styled-system';
import { css } from 'styled-jsx/css';

type BoxProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'code' | 'blockquote'
  className?: string
  onClick?: Function
}

export const Text: FC<BoxProps & CSS> = ({ as = 'p', children, className = '', ...props }) => {
  const { styleJsx, cleanProps } = useStyledSystem(props, { Decor: true, Space: true, Other: true });
  const { className: cssClass, styles } = css.resolve`${styleJsx}`;
  return <>
    {createElement(as, { className: `${cssClass} ${className}`, ...cleanProps }, children)}
    {styles}
  </>;
};

export default Text;