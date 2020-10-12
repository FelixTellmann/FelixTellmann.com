import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import Color from 'color';

type BadgeProps = {
  status?: 'success' | 'info' | 'attention' | 'critical' | 'warning' | 'new';
  size?: 'small' | 'medium';
  progress?: 'incomplete' | 'partially' | 'complete';
  style?: CSSProperties;
  customColor?: string;
};

export const Badge: FC<BadgeProps> = ({ children, status = 'default', size = 'medium', style = {}, customColor }) => {
  const span = useRef();
  const [toCssStyle, setToCssStyle] = useState(style);
  useEffect(() => {
    let color = customColor || '';
    if (window && !customColor) {
      color = getComputedStyle(span.current)?.getPropertyValue('--badge')?.trim() || '#bbe5b3';
    }

    setToCssStyle((currentStyle) => ({
      ...currentStyle,
      '--badge-background': Color(color),
      '--badge-text': Color(color)
    }));
  }, [customColor]);

  return (
    <>
      <span ref={span} style={toCssStyle}>
        {children}
      </span>
      <style jsx>{`
        span {
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0.8rem;
          border: 1px solid #fff;
          border-radius: 2rem;
          font-size: 1.3rem;
          height: 20px;
          color: var(--color-subdued);
          
        }
      `}</style>
    </>
  );
};

export default Badge;
