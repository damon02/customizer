import { ICSSProperties, IExposedCSS, IOptionalColorProperties } from '../@types/types'

export function combineIntoCSS(cssProperties: ICSSProperties): IExposedCSS  {
  return { 
    filter: combineIntoCSSFilter({...cssProperties}),
    display: cssProperties?.display 
  }
}

export function combineIntoCSSFilter(cssProperties: IOptionalColorProperties)  {
  const saturation = `saturate(${cssProperties.saturation && cssProperties.saturation >= 0 ? cssProperties.saturation : 0})`
  const hue = `hue-rotate(${cssProperties.hue || 0}deg)`
  const brightness = `brightness(${cssProperties.brightness && cssProperties.brightness >= 0 ? cssProperties.brightness : 1})`
  const sepia = `sepia(${cssProperties.sepia || 0})`

  return `${saturation} ${hue} ${sepia} ${brightness}`
}