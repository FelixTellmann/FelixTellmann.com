import { CSSProperties, FC } from 'react';
import Link from 'next/link';

type LinkBlockProps = {
  href: string
  target?: string
  className?: string
  style?: CSSProperties
};

export const LinkBlock: FC<LinkBlockProps> = ({ href, target, className, style = {}, children }) => {
  return <>
    <Link href={href}><a target={target} className={className} style={style}>{children}</a></Link>
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