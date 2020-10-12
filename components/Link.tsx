import { FC, MouseEvent } from 'react';
import NextLink from 'next/link';
import { Decor, Layout, Space, useStyledSystem } from 'use-styled-system';

type LinkProps = {
  onClick?: (event: MouseEvent) => void;
  href: string;
  title?: string | JSX.Element;
  target?: string;
  className?: string;
  secondary?: boolean;
  subtle?: boolean;
  small?: boolean;
  large?: boolean;
};

export const Link: FC<LinkProps & Space & Layout & Decor> = ({
  onClick,
  className = '',
  href,
  target,
  title,
  secondary,
  subtle,
  small,
  large,
  children,
  ...props
}) => {
  const { styleJsx, nonCssProps } = useStyledSystem(props, {
    Space: true,
    Layout: true,
    Decor: true
  });
  const classNames = `link ${secondary ? 'secondary' : ''} ${small ? 'small' : ''} ${large ? 'large' : ''} ${className}`.trim();

  const label = href ? /^https?:\/\/([^/?#]+)(?:[/?#]|$)/i.exec(href)?.[1] : '';

  /* TODO Add Highlighting to link for inline effect */
  return (
    <>
      <NextLink href={href}>
        <a
          role="button"
          tabIndex={0}
          target={target}
          aria-label={href.includes('mailto:') ? href.replace('mailto', '') : label}
          rel={target === '_blank' ? 'noopener noreferrer' : ''}
          className={classNames}
          onClick={onClick}
          onKeyDown={onClick}
          {...nonCssProps}>
          {title || children}
        </a>
      </NextLink>

      <style jsx>{`
        .link {
          display: inline-flex;
          background-repeat: no-repeat;
          background-position: 0 1.05em;
          background-size: 100% 24%, 0 24%;
          cursor: pointer;
          color: var(--color-link);
          font-family: inherit;
          text-decoration: none;

          transition: color 0.25s, background-color 0.25s, background 0.2s;
          ${subtle
            ? ''
            : `background-image: linear-gradient(270deg, var(--color-pro-40) 25.28%, var(--color-blue-40) 59.7%, var(--color-pro-40) 97.75%), linear-gradient(270deg,var(--color-gradient-1) 25.28%,var(--color-gradient-2) 59.7%,var(--color-gradient-3) 97.75%);`}
          ${subtle
            ? ''
            : `text-shadow: 0.06em 0 0 var(--color-background), -0.06em 0 0 var(--color-background), 0 0.06em 0 var(--color-background),
            0 -0.06em var(--color-background);`} 
          &.small {
            font-size: 1.4rem;
          }

          &.large {
            font-size: 1.8rem;
          }

          &:hover {
            ${subtle ? `color: var(--color-link-hover); text-decoration: underline` : `background-size: 100% 24%, 100% 24%;`}
          }

          ${styleJsx}
        }
      `}</style>
    </>
  );
};
