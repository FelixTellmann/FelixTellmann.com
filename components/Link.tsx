import { FC, MouseEvent } from 'react';
import NextLink from 'next/link';
import { Decor, Layout, Space, useStyledSystem } from 'use-styled-system';

type LinkProps = {
  onClick?: (event: MouseEvent) => void
  href: string
  title: string | JSX.Element
  target?: string
  className?: string
  secondary?: boolean
  small?: boolean
  large?: boolean
};

export const Link: FC<LinkProps & Space & Layout & Decor> = ({ onClick, className = '', href, target, title, secondary, small, large, children, ...props }) => {
  
  const { styleJsx, cleanProps } = useStyledSystem(props, { Space: true, Layout: true, Decor: true });
  const classNames = `link ${secondary ? 'secondary' : ''} ${small ? 'small' : ''} ${large ? 'large' : ''} ${className}`.trim();
  return <>
    <NextLink href={href}><a target={target} className={classNames} onClick={onClick} {...cleanProps}>{title}</a></NextLink>
    
    <style jsx>{`
      .link {
        cursor: pointer;
        color: var(--color-link);
        font-family: inherit;
        text-decoration: none;
        transition: color 0.25s, background-color 0.25s;

        &.small {
          font-size: 1.4rem;
        }

        &.large {
          font-size: 1.8rem;
        }
        
        &:hover {
          color: var(--color-link-hover)
        }

        ${styleJsx}
      }
    `}</style>
  </>;
};

export default Link;