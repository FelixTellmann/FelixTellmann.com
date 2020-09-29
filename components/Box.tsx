import { createElement, FC, FunctionComponent, ReactHTMLElement } from 'react';
import { CSS, useStyledSystem } from 'use-styled-system';
import { css } from 'styled-jsx/css';

type BoxProps = {
  id?: string
  className?: string
  onClick?: Function
  as?: string | FC<{className: string}>
}

export const Box: FC<BoxProps & CSS> = ({ as = 'div', children, className = '', ...props }) => {
  
  const { styleJsx, nonCssProps } = useStyledSystem(props, { Space: true, Layout: true, Color: true });
  const { className: cssClass, styles } = css.resolve`${styleJsx}`;
  return <>
    {createElement(as, { className: `${cssClass} ${className}`, ...nonCssProps }, children)}
    {styles}
  </>;
};

export default Box;