import { IColorProperties, ICSSProperties, IExposedCSS } from '../@types/types'

export function combineIntoCSS(cssProperties: ICSSProperties): IExposedCSS  {
  return { 
    filter: combineIntoCSSFilter({...cssProperties}),
    display: cssProperties?.display 
  }
}

export function combineIntoCSSFilter(cssProperties: IColorProperties)  {
  return `saturate(${cssProperties.saturation}) hue-rotate(${cssProperties.hue}deg) sepia(${cssProperties.sepia}) brightness(${cssProperties.brightness})`
}