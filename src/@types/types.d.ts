export type IEnumProductType = 'SHOE'

export interface IGenericProduct {
  id: string
  brand: string
  name: string
  enabled: boolean
  description?: string
  assets?: IGenericPart[]
  type: IEnumProductType
  dimensions: {
    height: number
    width: number
  }
}

export interface IGenericPart {
  id: string
  name: string
  toggleable?: boolean
  zindex: number
  variants: IPartVariant[]
  category?: string
  overrides?: {
    brightness?: IMinMax
    saturation?: IMinMax
    sepia?: IMinMax
  },
  presets: {
    name: string
    cssString: string
    values: { brightness: number, saturation: number, sepia: number, hue: number }
  }[],
  default?: ICSSProperties
}

export interface IPartVariant {
  id: string
  file: string
  name: string
  description?: string
  zIndex?: number
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

// Used for parts list => ColorCustomizer
export interface IOptionalCSSProperties {
  saturation?: number
  hue?: number
  sepia?: number
  brightness?: number
  display?: 'block' | 'none'
}

export interface IPartPropsExposedCSS {
  [partKey: string]: { css: IExposedCSS, variant: IPartVariant }
}

export interface IPartPropsCSSProperties { 
  [partKey: string]: { css: ICSSProperties, variant: IPartVariant }
  timestamp?: number
}