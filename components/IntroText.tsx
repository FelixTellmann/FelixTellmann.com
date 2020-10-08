import { createElement, FC, MouseEvent } from 'react';
import { CSS, useStyledSystem } from 'use-styled-system';
import css from 'styled-jsx/css';

type IntroTextProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'code' | 'blockquote' | 'a' | 'small' | 'span';
  className?: string;
  onClick?: (event: MouseEvent) => void;
};

export const IntroText: FC<IntroTextProps & CSS> = ({ as = 'p', children, className = '', ...props }) => {
  const { styleJsx, nonCssProps } = useStyledSystem(props, {
    Decor: true,
    Space: true,
    Other: true
  });
  const styles2 =
    'font-size: 22rem;\nfont-weight: 700;\n            margin-left: -0.8rem;\n            color: transparent;\n            -webkit-background-clip: text;\n            background-clip: text;\n            background-image: linear-gradient(270deg,var(--color-gradient-1) 25.28%, var(--color-gradient-2) 59.7%,var(--color-gradient-3) 97.75%);\n            line-height: 1.15;\n            letter-spacing: -0.06em;';
  const { className: cssClass, styles } = css.resolve`
    ${styles2.concat(styleJsx)}
`;
  return (
    <>
      {createElement(as, { className: `${cssClass} ${className}`, ...nonCssProps }, children)}
      {styles}
    </>
  );
};
