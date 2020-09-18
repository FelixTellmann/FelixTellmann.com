import {
  AlignContentProperty,
  AlignItemsProperty,
  AlignSelfProperty,
  BackgroundAttachmentProperty,
  BackgroundClipProperty,
  BackgroundColorProperty,
  BackgroundImageProperty,
  BackgroundOriginProperty,
  BackgroundPositionXProperty,
  BackgroundPositionYProperty,
  BackgroundProperty,
  BackgroundSizeProperty,
  BorderBottomColorProperty,
  BorderBottomLeftRadiusProperty,
  BorderBottomProperty,
  BorderBottomRightRadiusProperty,
  BorderBottomStyleProperty,
  BorderBottomWidthProperty,
  BorderColorProperty,
  BorderLeftColorProperty,
  BorderLeftProperty,
  BorderLeftStyleProperty,
  BorderLeftWidthProperty,
  BorderProperty,
  BorderRadiusProperty,
  BorderRightColorProperty,
  BorderRightProperty,
  BorderRightStyleProperty,
  BorderRightWidthProperty,
  BorderStyleProperty,
  BorderTopColorProperty,
  BorderTopLeftRadiusProperty,
  BorderTopProperty,
  BorderTopRightRadiusProperty,
  BorderTopStyleProperty,
  BorderTopWidthProperty,
  BorderWidthProperty,
  BottomProperty,
  BoxShadowProperty,
  ColorProperty,
  DisplayProperty,
  FlexBasisProperty,
  FlexDirectionProperty,
  FlexProperty,
  FlexWrapProperty,
  FontFamilyProperty,
  FontSizeProperty,
  FontStyleProperty,
  FontWeightProperty,
  GlobalsNumber,
  GridAreaProperty,
  GridAutoColumnsProperty,
  GridAutoFlowProperty,
  GridAutoRowsProperty,
  GridColumnGapProperty,
  GridColumnProperty,
  GridGapProperty,
  GridRowGapProperty,
  GridRowProperty,
  GridTemplateAreasProperty,
  GridTemplateColumnsProperty,
  GridTemplateRowsProperty,
  HeightProperty,
  JustifyContentProperty,
  JustifySelfProperty,
  LeftProperty,
  LetterSpacingProperty,
  LineHeightProperty,
  MarginBottomProperty,
  MarginLeftProperty,
  MarginProperty,
  MarginRightProperty,
  MarginTopProperty,
  MaxHeightProperty,
  MaxWidthProperty,
  MinHeightProperty,
  MinWidthProperty,
  OpacityProperty,
  OutlineColorProperty,
  OutlineOffsetProperty,
  OutlineStyleProperty,
  OutlineWidthProperty,
  OverflowXProperty,
  OverflowYProperty,
  PaddingBottomProperty,
  PaddingLeftProperty,
  PaddingProperty,
  PaddingRightProperty,
  PaddingTopProperty,
  PositionProperty,
  RightProperty,
  TextAlignProperty,
  TopProperty,
  VerticalAlignProperty,
  VisibilityProperty,
  WidthProperty,
  ZIndexProperty
} from 'csstype';

export type Margin = {
  margin?: MarginProperty<any>
  marginTop?: MarginTopProperty<any>
  marginRight?: MarginRightProperty<any>
  marginBottom?: MarginBottomProperty<any>
  marginLeft?: MarginLeftProperty<any>
  marginX?: MarginLeftProperty<any> & MarginRightProperty<any>
  marginY?: MarginTopProperty<any> & MarginBottomProperty<any>
  m?: MarginProperty<any>
  mt?: MarginTopProperty<any>
  mr?: MarginRightProperty<any>
  mb?: MarginBottomProperty<any>
  ml?: MarginLeftProperty<any>
  mx?: MarginLeftProperty<any> & MarginRightProperty<any>
  my?: MarginTopProperty<any> & MarginBottomProperty<any>
}
export type Padding = {
  padding?: PaddingProperty<any>
  paddingTop?: PaddingTopProperty<any>
  paddingRight?: PaddingRightProperty<any>
  paddingBottom?: PaddingBottomProperty<any>
  paddingLeft?: PaddingLeftProperty<any>
  paddingX?: PaddingLeftProperty<any> & PaddingRightProperty<any>
  paddingY?: PaddingTopProperty<any> & PaddingBottomProperty<any>
  p?: PaddingProperty<any>
  pt?: PaddingTopProperty<any>
  pr?: PaddingRightProperty<any>
  pb?: PaddingBottomProperty<any>
  pl?: PaddingLeftProperty<any>
  px?: PaddingLeftProperty<any> & PaddingRightProperty<any>
  py?: PaddingTopProperty<any> & PaddingBottomProperty<any>
}
export type Border = {
  border?: BorderProperty<any>
  borderWidth?: BorderWidthProperty<any>
  borderColor?: BorderColorProperty
  borderStyle?: BorderStyleProperty
  borderRadius?: BorderRadiusProperty<any>
  borderTop?: BorderTopProperty<any>
  borderTopWidth?: BorderTopWidthProperty<any>
  borderTopColor?: BorderTopColorProperty
  borderTopStyle?: BorderTopStyleProperty
  borderTopLeftRadius?: BorderTopLeftRadiusProperty<any>
  borderTopRightRadius?: BorderTopRightRadiusProperty<any>
  borderBottom?: BorderBottomProperty<any>
  borderBottomWidth?: BorderBottomWidthProperty<any>
  borderBottomColor?: BorderBottomColorProperty
  borderBottomStyle?: BorderBottomStyleProperty
  borderBottomLeftRadius?: BorderBottomLeftRadiusProperty<any>
  borderBottomRightRadius?: BorderBottomRightRadiusProperty<any>
  borderLeft?: BorderLeftProperty<any>
  borderLeftWidth?: BorderLeftWidthProperty<any>
  borderLeftColor?: BorderLeftColorProperty
  borderLeftStyle?: BorderLeftStyleProperty
  borderRight?: BorderRightProperty<any>
  borderRightWidth?: BorderRightWidthProperty<any>
  borderRightColor?: BorderRightColorProperty
  borderRightStyle?: BorderRightStyleProperty
  borderX?: BorderLeftProperty<any> & BorderRightProperty<any>
  borderXWidth?: BorderLeftWidthProperty<any> & BorderRightWidthProperty<any>
  borderXColor?: BorderLeftColorProperty & BorderRightColorProperty
  borderXStyle?: BorderLeftStyleProperty & BorderRightStyleProperty
  borderY?: BorderProperty<any>
  borderYWidth?: BorderTopWidthProperty<any> & BorderBottomWidthProperty<any>
  borderYColor?: BorderTopColorProperty & BorderBottomColorProperty
  borderYStyle?: BorderTopStyleProperty & BorderBottomStyleProperty
}
export type Color = {
  color?: ColorProperty
  background?: BackgroundProperty<any>
  bg?: BackgroundProperty<any>
  opacity?: OpacityProperty
  backgroundAttachment?: BackgroundAttachmentProperty
  backgroundClip?: BackgroundClipProperty
  backgroundColor?: BackgroundColorProperty
  backgroundImage?: BackgroundImageProperty
  backgroundOrigin?: BackgroundOriginProperty
  backgroundPositionX?: BackgroundPositionXProperty<any>
  backgroundPositionY?: BackgroundPositionYProperty<any>
  backgroundSize?: BackgroundSizeProperty<any>
  boxShadow?: BoxShadowProperty
  outline?: OutlineColorProperty
  outlineColor?: OutlineColorProperty
  outlineOffset?: OutlineOffsetProperty<any>
  outlineStyle?: OutlineStyleProperty
  outlineWidth?: OutlineWidthProperty<any>
  visibility?: VisibilityProperty
}
export type Layout = {
  display?: DisplayProperty
  width?: WidthProperty<any>
  height?: HeightProperty<any>
  minWidth?: MinWidthProperty<any>
  maxWidth?: MaxWidthProperty<any>
  minHeight?: MinHeightProperty<any>
  maxHeight?: MaxHeightProperty<any>
  verticalAlign?: VerticalAlignProperty<any>
}
export type Position = {
  position?: PositionProperty
  top?: TopProperty<any>
  right?: RightProperty<any>
  bottom?: BottomProperty<any>
  left?: LeftProperty<any>
  overflowX?: OverflowXProperty
  overflowY?: OverflowYProperty
  zIndex?: ZIndexProperty
}
export type Flex = {
  justifyContent?: JustifyContentProperty
  alignItems?: AlignItemsProperty
  alignContent?: AlignContentProperty
  flexDirection?: FlexDirectionProperty
  flex?: FlexProperty<any>
  flexWrap?: FlexWrapProperty
  flexBasis?: FlexBasisProperty<any>
  flexGrow?: GlobalsNumber
  flexShrink?: GlobalsNumber
  alignSelf?: AlignSelfProperty
  justifySelf?: JustifySelfProperty
  order?: GlobalsNumber
}
export type grid = {
  gridGap?: GridGapProperty<any>
  gridRowGap?: GridRowGapProperty<any>
  gridColumnGap?: GridColumnGapProperty<any>
  gridColumn?: GridColumnProperty
  gridRow?: GridRowProperty
  gridArea?: GridAreaProperty
  gridAutoFlow?: GridAutoFlowProperty
  gridAutoRows?: GridAutoRowsProperty<any>
  gridAutoColumns?: GridAutoColumnsProperty<any>
  gridTemplateRows?: GridTemplateRowsProperty<any>
  gridTemplateColumns?: GridTemplateColumnsProperty<any>
  gridTemplateAreas?: GridTemplateAreasProperty
}
export type Typography = {
  fontFamily?: FontFamilyProperty
  fontSize?: FontSizeProperty<any>
  fontWeight?: FontWeightProperty | GlobalsNumber
  lineHeight?: LineHeightProperty<any>
  letterSpacing?: LetterSpacingProperty<any>
  textAlign?: TextAlignProperty
  fontStyle?: FontStyleProperty
}

const CssProperties = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
  'marginX',
  'marginY',
  'm',
  'mt',
  'mr',
  'mb',
  'ml',
  'mx',
  'my',
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
  'paddingX',
  'paddingY',
  'p',
  'pt',
  'pr',
  'pb',
  'pl',
  'px',
  'py',
  'border',
  'borderWidth',
  'borderColor',
  'borderStyle',
  'borderRadius',
  'borderTop',
  'borderTopWidth',
  'borderTopColor',
  'borderTopStyle',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottom',
  'borderBottomWidth',
  'borderBottomColor',
  'borderBottomStyle',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderLeft',
  'borderLeftWidth',
  'borderLeftColor',
  'borderLeftStyle',
  'borderRight',
  'borderRightWidth',
  'borderRightColor',
  'borderRightStyle',
  'borderX',
  'borderXWidth',
  'borderXColor',
  'borderXStyle',
  'borderY',
  'borderYWidth',
  'borderYColor',
  'borderYStyle',
  'color',
  'background',
  'bg',
  'opacity',
  'backgroundAttachment',
  'backgroundClip',
  'backgroundColor',
  'backgroundImage',
  'backgroundOrigin',
  'backgroundPositionX',
  'backgroundPositionY',
  'backgroundSize',
  'boxShadow',
  'outline',
  'outlineColor',
  'outlineOffset',
  'outlineStyle',
  'outlineWidth',
  'visibility',
  'display',
  'width',
  'height',
  'minWidth',
  'maxWidth',
  'minHeight',
  'maxHeight',
  'verticalAlign',
  'position',
  'top',
  'right',
  'bottom',
  'left',
  'overflowX',
  'overflowY',
  'zIndex',
  'justifyContent',
  'alignItems',
  'alignContent',
  'flexDirection',
  'flex',
  'flexWrap',
  'flexBasis',
  'flexGrow',
  'flexShrink',
  'alignSelf',
  'justifySelf',
  'order',
  'gridGap',
  'gridRowGap',
  'gridColumnGap',
  'gridColumn',
  'gridRow',
  'gridArea',
  'gridAutoFlow',
  'gridAutoRows',
  'gridAutoColumns',
  'gridTemplateRows',
  'gridTemplateColumns',
  'gridTemplateAreas',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'lineHeight',
  'letterSpacing',
  'textAlign',
  'fontStyle'
];
const CssShorthandMatch = {
  'm': 'margin',
  'mt': 'marginTop',
  'mr': 'marginRight',
  'mb': 'marginBottom',
  'ml': 'marginLeft',
  'p': 'padding',
  'pt': 'paddingTop',
  'pr': 'paddingRight',
  'pb': 'paddingBottom',
  'pl': 'paddingLeft',
  'bg': 'background'
};
const cssShorhandCompound = {
  'mx': ['marginLeft', 'marginRight'],
  'my': ['marginTop', 'marginBottom'],
  'px': ['paddingLeft', 'paddingRight'],
  'py': ['paddingTop', 'paddingBottom'],
  'size': ['width', 'height']
};

export default function toStyledJsxProperties(props) {
  const convertValue = (value) => {
    if (Array.isArray(value)) {
      /*TODO: Check for what happens if value is typeof Array!!*/
    }
    if (typeof value === 'number' && value >= 1 && value <= 8) {
      return 2 ** (value + 1) / 10 + 'rem';
    }
    if (typeof value === 'number' && value > 8) {
      return value / 10 + 'rem';
    }
    if (typeof value === 'string') {
      return value.match(/(px)$/) ? +value.replace('px', '') / 10 + 'rem' : value;
    }
    return value.toString();
  };
  const toCssProperty = (key, value) => key.replace(/([A-Z])/g, (match) => '-' + match.toLowerCase()) + ': ' + convertValue(value) + ';\n';
  
  return Object.entries(props)
    .reduce((acc, [key, value], i, array) => {
      if (!CssProperties.includes(key)) return acc;
      if (Array.isArray(value)) {
        /*TODO: Check for what happens if value is typeof Array!!*/
        typeof window !== "undefined" ?  window.innerWidth > 768 ? (value = value[1]) : (value = value[0]) :( value = value[1]);
      }
      
      if (cssShorhandCompound.hasOwnProperty(key)) {
        acc.push(toCssProperty(cssShorhandCompound[key][1], value));
        acc.push(toCssProperty(cssShorhandCompound[key][0], value));
      } else if (CssShorthandMatch.hasOwnProperty(key)) {
        acc.push(toCssProperty(CssShorthandMatch[key], value));
      } else {
        acc.push(toCssProperty(key, value));
      }
      return acc;
    }, []).join('');
}

export function withoutCss(props) {
  return Object.keys(props)
    .filter(key => !CssProperties.includes(key))
    .reduce((acc, key) => {
      return {
        ...acc,
        [key]: props[key]
      };
    }, {});
}