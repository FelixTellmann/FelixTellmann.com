import { FC } from 'react';
import { useStyledSystem } from 'use-styled-system';
import { SizeProperties } from 'use-styled-system/dist/Size';
import { WidthProperty } from 'csstype';

type AvatarProps = {
  src: string
  alt?: string
  size: WidthProperty<string | number>
};

export const Avatar: FC<AvatarProps & SizeProperties> = ({ src, alt = '', ...props }) => {
  const { styleJsx } = useStyledSystem(props, { Size: true });
  return <>
    <img src={src} alt={alt} />
    <style jsx>{`
      img {
        border-radius: 100%;
        
        ${styleJsx}
      }
    `}</style>
  </>;
};




export default Avatar;