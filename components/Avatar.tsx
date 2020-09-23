import { FC } from 'react';
import { useStyledSystem } from 'use-styled-system';
import { SizeProperties } from 'use-styled-system/dist/Size';
import { WidthProperty } from 'csstype';

type AvatarProps = {
  src: string
  alt: string
  initials?: string
  size: WidthProperty<string | number>
};

export const Avatar: FC<AvatarProps & SizeProperties> = ({ src, alt, initials = '', ...props }) => {
  const { styleJsx } = useStyledSystem(props, { Size: true });
  
  return <>
    <picture>
      <img src={src} alt={alt} />
      <i>{initials.split(' ').map(i => i.charAt(0)).join('')}</i>
    
    </picture>
    <style jsx>{`
      picture {
        position: relative;
        display: inline-flex;
        ${styleJsx}
      }

      img, i {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: inline-flex;
        text-transform: uppercase;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: var(--color-button);
        font-size: 0.6em;
        font-weight: 700;
        letter-spacing: -0.025em;
        text-decoration: none;

      }

      img {
        z-index: 1;
      }
    
    `}</style>
  </>;
};

export default Avatar;