import { createElement, FC } from 'react';
import { CSS, useStyledSystem } from 'use-styled-system';
import { css } from 'styled-jsx/css';

type IntroTextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'code' | 'blockquote' | 'a' | 'small' | 'span'
  className?: string
  onClick?: Function
}

export const IntroText: FC<IntroTextProps & CSS> = ({ as = 'p', children, className = '', ...props }) => {
  const { styleJsx, nonCssProps } = useStyledSystem(props, { Decor: true, Space: true, Other: true });
  const styles2 = "font-size: 22rem;\n            margin-left: -0.8rem;\n            color: transparent;\n            -webkit-background-clip: text;\n            background-clip: text;\n            background-image: linear-gradient(270deg,#00bfa5 25.28%,#3182ce 59.7%,rgba(11,197,234,0.67) 97.75%);\n            line-height: 1;\n            letter-spacing: -0.06em;"
  const { className: cssClass, styles } = css.resolve`${styles2 + styleJsx}`;
  return <>
    {createElement(as, { className: `${cssClass} ${className}`, ...nonCssProps }, children)}
    {styles}
  </>;
};

export default IntroText;