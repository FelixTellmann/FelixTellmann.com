import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import { Decor, Layout, Space, useStyledSystem } from 'use-styled-system';

type ButtonProps = {
  onClick?: (event: MouseEvent) => void
  href?: string
  target?: string
  title: string | JSX.Element
  icon?: boolean
  className?: string
  secondary?: boolean
  small?: boolean
  large?: boolean
};

export const Button: FC<ButtonProps & Space & Layout & Decor> = ({ onClick, className = '', href, target, title, icon, secondary, small, large, children, ...props }) => {
  
  const { styleJsx, cleanProps } = useStyledSystem(props, { Space: true, Layout: true, Decor: true });
  const classNames = `button ${icon ? 'icon' : ''} ${secondary ? 'secondary' : ''} ${small ? 'small' : ''} ${large
                                                                                                             ? 'large'
                                                                                                             : ''} ${className}`.trim();
  return <>
    {
      href
      ? <Link href={href}><a target={target} className={classNames} onClick={onClick}>{title}</a></Link>
      : <button className={classNames} onClick={onClick}>{title}</button>
    }
    <style jsx>{`
      .button {
        position: relative;
        min-width: 4rem;
        height: 4rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 1.6rem 0.8rem;
        border: 0;
        border-radius: 0.4rem;
        outline: none;
        background-color: unset;
        cursor: pointer;
        user-select: none;
        color: inherit;
        font-family: inherit;
        white-space: nowrap;
        text-decoration: none;
        transition: color 0.25s, background-color 0.25s;
        appearance: none;

        &.small {
          min-width: 3.2rem;
          height: 3.2rem;
          font-size: 1.4rem;
        }

        &.large {
          min-width: 4.8rem;
          height: 4.8rem;
          font-size: 1.8rem;
        }

        &.icon {
          padding: 0;
        }

        &.secondary {
          background: var(--color-button-secondary);

          &:hover {
            background: var(--color-button);
          }
        }

        &:hover {
          background-color: var(--color-button)
        }

        ${styleJsx}
      }
    `}</style>
  </>;
};

export default Button;