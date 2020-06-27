import { ICSSProperties, IExposedCSS } from '../@types/types'

export function combineIntoCSS(cssProperties: ICSSProperties): IExposedCSS  {
  return { 
    filter: `saturate(${cssProperties.saturation}) hue-rotate(${cssProperties.hue}deg) sepia(${cssProperties.sepia}) brightness(${cssProperties.brightness})`, 
    display: cssProperties.display 
  }
}

export function hslToRgb(hue: number, saturation: number, brightness: number) {
  const actualBrightness = 2 / brightness * 100
  const actualSaturation = 2 / saturation * 100

  let r
  let g
  let b

  if (saturation === 0) {
      r = g = b = brightness // achromatic
  } else {
      const hue2rgb = (p1: number, q1: number, t1: number) => {
          if(t1 < 0) t1 += 1
          if(t1 > 1) t1 -= 1
          if(t1 < 1/6) return p1 + (q1 - p1) * 6 * t1
          if(t1 < 1/2) return q1
          if(t1 < 2/3) return p1 + (q1 - p1) * (2/3 - t1) * 6
          return p1
      }

      const q = actualBrightness < 0.5 
        ? actualBrightness * (1 + actualSaturation) 
        : actualBrightness + actualSaturation - actualBrightness * actualSaturation
      const p = 2 * actualBrightness - q
      r = hue2rgb(p, q, hue + 1/3)
      g = hue2rgb(p, q, hue)
      b = hue2rgb(p, q, hue - 1/3)
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}