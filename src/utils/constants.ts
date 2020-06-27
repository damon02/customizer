import { IGenericPart } from '../@types/types'

export const URL_PREFIX = '/shoe-customizer'
export const USER_PRESETS_KEY = 'colorPresets'

export const DEFAULT_WHITE = { name: 'White', cssString: '#ffffff', values: { brightness: 2, sepia: 0, saturation: 0, hue: 0 } }
export const DEFAULT_COLORS: IGenericPart['presets'] = [
  { name: 'Black', cssString: '#000000', values: { brightness: 0.25, sepia: 0, saturation: 0, hue: 0 } },
  DEFAULT_WHITE,
  { name: 'Red', cssString: '#ff1f3b', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 0 } },
  { name: 'Orange', cssString: '#ffa338', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 45 } },
  { name: 'Yellow', cssString: '#ffff00', values: { brightness: 1.66, sepia: 0, saturation: 1.2, hue: 67 } },
  { name: 'Green', cssString: '#387400', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 90 } },
  { name: 'Cyan', cssString: '#00ffff', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 180 } },
  { name: 'Blue', cssString: '#0000ff', values: { brightness: 0.89, sepia: 0, saturation: 2, hue: 240 } },
  { name: 'Purple', cssString: '#4b0082', values: { brightness: 0.67, sepia: 0, saturation: 1, hue: 290 } },
  { name: 'Hot pink', cssString: '#ff0087', values: { brightness: 1, sepia: 0, saturation: 2.39, hue: 325 } },
]