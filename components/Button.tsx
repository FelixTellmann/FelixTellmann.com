import { ButtonHTMLAttributes, FC, MouseEvent, Children } from 'react';
import Link from 'next/link';
import { Decor, Layout, Space, useStyledSystem } from 'use-styled-system';

type ButtonProps = {
  onClick?: (event: MouseEvent) => void
  href?: string
  target?: string
  icon?: boolean
  className?: string
  secondary?: boolean
  small?: boolean
  large?: boolean
};

export const Button: FC<ButtonHTMLAttributes<any> & ButtonProps & Space & Layout & Decor> = ({ onClick, className = '', href, target, icon, secondary, small, large, children, ...props }) => {
  
  const { styleJsx, nonCssProps } = useStyledSystem(props, { Space: true, Layout: true, Decor: true });
  const classNames = `button ${icon ? 'icon' : ''} ${secondary ? 'secondary' : ''} ${small ? 'small' : ''} ${large
                                                                                                             ? 'large'
                                                                                                             : ''} ${className}`.trim();

  const label = href ? href.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i) && href.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)[1] : '';
  return <>
    {
      href
      ? <Link href={href}><a title={label} aria-label={label} target={target} rel={target === '_blank' ? 'noopener noreferrer' : ''} className={classNames} onClick={onClick} {...nonCssProps}>{children}</a></Link>
      : <button className={classNames} onClick={onClick} {...nonCssProps}>{children}</button>
    }
    <style jsx>{`
      .button {
        position: relative;
        min-width: 4rem;
        height: 4rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 1.6rem;
        border: 0;
        border-radius: var(--border-radius);
        outline: none;
        background-color: unset;
        cursor: pointer;
        user-select: none;
        color: inherit;
        font-family: inherit;
        line-height: 1.2;
        white-space: nowrap;
        text-decoration: none;
        opacity: 1;
        transition: background-color 0.25s, opacity 0.2s;
        appearance: none;
        
        &[disabled] {
          opacity: 0.7;
          pointer-events: none;
        }
        
        &:hover {
          background-color: var(--color-button)
        }
      }

      .small {
        min-width: 3.2rem;
        height: 3.2rem;
        font-size: 1.4rem;
      }

      .large {
        min-width: 4.8rem;
        height: 4.8rem;
        font-size: 1.8rem;
      }

      .icon {
        padding: 0;
      }

      .secondary {
        background: var(--color-button-secondary);

        &:hover {
          background: var(--color-button);
        }
      }

      

      button.button {
        ${styleJsx}
      }
    
    `}</style>
  </>;
};

export default Button;