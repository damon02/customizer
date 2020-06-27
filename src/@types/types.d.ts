export type IEnumProductType = 'SHOE'

export interface IGenericProduct {
  id: string
  brand: string
  name: string
  enabled: boolean
  description?: string
  assets?: IGenericPart[]
  type: IEnumProductType
}

export interface IGenericPart {
  id: string
  name: string
  toggleable?: boolean
  zindex: number // z-index
  category?: string
  file: string
  overrides?: {
    brightness?: IMinMax
    saturation?: IMinMax
    sepia?: IMinMax
  },
  presets: {
    name: string
    cssString: string
    values: { brightness: number, saturation: number, sepia: number, hue: number }
  }[]
}

export interface IMinMax {
  min?: number
  max?: number
}

export interface IExposedCSS {
  filter: string
  display: 'none' | 'block'
}

export interface IColorProperties {
  saturation: number
  hue: number
  sepia: number
  brightness: number
}

export interface ICSSProperties extends IColorProperties {
  display: 'block' | 'none'
}