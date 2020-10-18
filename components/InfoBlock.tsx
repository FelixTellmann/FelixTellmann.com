import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import { FiAlertCircle, FiCheckCircle, FiHelpCircle, FiMinusCircle, FiPlusCircle, FiXCircle } from "react-icons/fi";
import QuoteIcon from "public/icons/QuoteIcon.svg";
import Color from "color";
import { Space, useStyledSystem } from "use-styled-system";

type InfoBlockProps = {
  type?: 'attention' | 'warning' | 'positive' | 'quote' | 'help' | 'pro' | 'con' | 'question';
  color?: string;
  style?: CSSProperties;
};

export const InfoBlock: FC<InfoBlockProps & Space> = ({ children, type, color, style = {}, ...props }) => {
  const div = useRef();

  if (typeof color === `string` && color.length > 0) {
    style['--info-block-100'] = color;
    style['--info-block-40'] = Color(color).alpha(0.4).hsl().string();
    style['--info-block-10'] = Color(color).alpha(0.4).hsl().string();
  }

  const [toCssStyle, setToCssStyle] = useState(style);

  useEffect(() => {
    if (window && !color) {
      const colorValue = getComputedStyle(div.current)?.getPropertyValue('--info-block-100')?.trim() || '#000';
      setToCssStyle((currentStyle) => ({
        ...currentStyle,
        '--info-block-40': Color(colorValue).alpha(0.4).hsl().string(),
        '--info-block-10': Color(colorValue).alpha(0.1).hsl().string()
      }));
    }
  }, [type, color]);

  const { styleJsx } = useStyledSystem(props, { Space: true });

  return (
    <>
      <div ref={div} style={toCssStyle}>
        {type === 'attention' ? <FiAlertCircle /> : null}
        {type === 'warning' ? <FiXCircle /> : null}
        {type === 'positive' ? <FiCheckCircle /> : null}
        {type === 'quote' ? <QuoteIcon /> : null}
        {type === 'pro' ? <FiPlusCircle /> : null}
        {type === 'con' ? <FiMinusCircle /> : null}
        {type === 'question' ? <FiHelpCircle /> : null}
        {children}
      </div>
      <style jsx>{`
        div {
          width: 100%;
          position: relative;
          margin: 3.6rem 0;
          padding: 2.4rem;
          border: 1px solid var(--info-block-40);
          border-left: 4px solid var(--info-block-100);
          border-radius: 0 4px 4px 0;
          background-color: var(--info-block-10);
          color: var(--color-body);
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 1.6;
          --info-block-100: #000;
          ${type === "attention" ? "--info-block-100: var(--color-attention);" : ""}
          ${type === "warning" ? "--info-block-100: var(--color-warn);" : ""}
          ${type === "positive" ? "--info-block-100: var(--color-pro);" : ""}
          ${type === "quote" ? "--info-block-100: var(--color-turqois);" : ""}
          ${type === "pro" ? "--info-block-100: var(--color-pro);" : ""}
          ${type === "con" ? "--info-block-100: var(--color-warn);" : ""}
          ${type === "question" ? "--info-block-100: var(--color-primary);" : ""}

          :global(svg) {
            position: absolute;
            top: -1.8rem;
            left: -1.8rem;
            width: 3.2rem;
            height: 3.2rem;
            display: flex;
            padding: 0.5rem;
            border-radius: 100%;
            background-color: var(--color-background);
            color: var(--info-block-100);
          }
          ${styleJsx}
        }
      `}</style>
    </>
  );
};
