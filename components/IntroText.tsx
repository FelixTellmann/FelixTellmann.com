import { createElement, FC, MouseEvent } from "react";
import css from "styled-jsx/css";
import { CSS, useStyledSystem } from "use-styled-system";

type IntroTextProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "code" | "blockquote" | "a" | "small" | "span";
  className?: string;
  onClick?: (event: MouseEvent) => void;
};

export const IntroText: FC<IntroTextProps & CSS> = ({ as = "p", children, className = "", ...props }) => {
  const forceProps = {
    fontSize: 220,
    fontWeight: 700,
    ml: "-0.8rem",
    color: "transparent",
    backgroundClip: "text",
    backgroundImage: "linear-gradient(270deg,var(--color-gradient-1) 25.28%, var(--color-gradient-2) 59.7%,var(--color-gradient-3) 97.75%)",
    lineHeight: "1.15",
    letterSpacing: "-0.06em",
    ...props
  };
  const { styleJsx, nonCssProps } = useStyledSystem(forceProps, {
    Decor: true,
    Space: true,
    Other: true
  });
  
  const { className: cssClass, styles } = css.resolve`${styleJsx}`;
  return (
      <>
        {createElement(as, { className: `${cssClass} ${className}`, ...nonCssProps }, children)}
        {styles}
      </>
  );
};
