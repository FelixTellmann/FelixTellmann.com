import { AnchorHTMLAttributes, CSSProperties, FC } from 'react';
import Link from 'next/link';

type LinkBlockProps = {
  href: string
  className?: string
  style?: CSSProperties
};

export const LinkBlock: FC<LinkBlockProps & AnchorHTMLAttributes<any>> = ({ href, target, className, style = {}, children, ...props}) => {
  return <>
    <Link href={href}><a target={target} rel={target === '_blank' ? 'noopener noreferrer' : ''} className={className} style={style} {...props}>{children}</a></Link>
    <style jsx>{`
      a {
        display: block;
        color: inherit;
        text-decoration: none;
        outline: none;
        cursor: pointer;
      }
    `}</style>
  </>;
};

export default LinkBlock;