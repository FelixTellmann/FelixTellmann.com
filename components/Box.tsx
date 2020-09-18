import { FC, useEffect, useState } from 'react';
import toStyledJsx, {
  Border,
  Color,
  Layout,
  Margin,
  Padding,
  Position,
  Typography,
  withoutCss
} from '../lib/styledSystemJsx'
import css from 'styled-jsx/css'

const { className: superClass, styles } = css.resolve`
  ${toStyledJsx({p:[12,4]})}
`

type BoxProps = Position & Layout & Color & Border & Padding & Margin & Typography & {
  className?: string
  onClick?: Function
}

export const Box: FC<BoxProps> = ({ children, className= '', ...props }) => {
  const [active, setActive] = useState<any>();
  
  useEffect(() => {
    process.browser ? setActive(toStyledJsx(props)) : setActive(undefined)
  },[])
  
  return <>
    <div className={`${className} ${superClass}`} {...withoutCss(props)}>{children}</div>
    <style jsx>{`
      ${active}
    `}</style>
    {styles}
  </>;
};

export default Box;