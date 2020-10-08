import { AnchorHTMLAttributes, CSSProperties, FC } from 'react';
import Link from 'next/link';
import { Space, useStyledSystem } from 'use-styled-system';

type LinkBlockProps = {
  href: string;
  className?: string;
  style?: CSSProperties;
};

export const LinkBlock: FC<LinkBlockProps & AnchorHTMLAttributes<any> & Space> = ({
  href,
  target,
  className,
  children,
  ...props
}) => {
  const { styleJsx, nonCssProps } = useStyledSystem(props, {
    Decor: true,
    Space: true
  });

  return (
    <>
      <Link href={href}>
        <a target={target} rel={target === '_blank' ? 'noopener noreferrer' : ''} className={className} {...nonCssProps}>
          {children}
        </a>
      </Link>
      <style jsx>{`
        a {
          display: block;
          outline: none;
          cursor: pointer;
          color: inherit;
          text-decoration: none;
          ${styleJsx}
        }
      `}</style>
    </>
  );
};
