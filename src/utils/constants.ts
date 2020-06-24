import Laces350V2 from '../assets/350V2/laces.png'
import Midsole350V2 from '../assets/350V2/midsole.png'
import Outsole350V2 from '../assets/350V2/outsole.png'
import Stripe350V2 from '../assets/350V2/stripe.png'
import Upper350V2 from '../assets/350V2/upper.png'
import UpperLip350V2 from '../assets/350V2/upper_lip.png'

export const USER_PRESETS_KEY = 'colorPresets'

export interface IMinMax {
  min?: number
  max?: number
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
  presets?: {
    name: string
    cssString: string
    values: { brightness: number, saturation: number, sepia: number, hue: number }
  }[]
}

export interface IShoe {
  id: string
  name: string
  enabled: boolean
  description?: string
  assets?: IGenericPart[]
}

export const DEFAULT_COLORS: IGenericPart['presets'] = [
  { name: 'Black', cssString: '#000000', values: { brightness: 0.25, sepia: 0, saturation: 0, hue: 0 } },
  { name: 'White', cssString: '#ffffff', values: { brightness: 2, sepia: 0, saturation: 0, hue: 0 } },
  { name: 'Red', cssString: '#ff1f3b', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 0 } },
  { name: 'Orange', cssString: '#ffa338', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 45 } },
  { name: 'Yellow', cssString: '#ffff00', values: { brightness: 1.66, sepia: 0, saturation: 1.2, hue: 67 } },
  { name: 'Green', cssString: '#387400', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 90 } },
  { name: 'Cyan', cssString: '#00ffff', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 180 } },
  { name: 'Blue', cssString: '#0000ff', values: { brightness: 0.89, sepia: 0, saturation: 2, hue: 240 } },
  { name: 'Purple', cssString: '#4b0082', values: { brightness: 0.67, sepia: 0, saturation: 1, hue: 290 } },
  { name: 'Hot pink', cssString: '#ff0087', values: { brightness: 1, sepia: 0, saturation: 2.39, hue: 325 } },
]

export const YEEZY_LINEUP: IShoe[] = [
  {
    id: '350V2',
    name: 'adidas YEEZY BOOST 350 V2',
    enabled: true,
    description: 'The popular one',
    assets: [
      {
        id: 'upper',
        name: 'Upper knit',
        zindex: 1,
        toggleable: false,
        category: 'upper',
        file: Upper350V2,
        overrides: {
          brightness: { max: 3 }
        },
        presets: DEFAULT_COLORS,
      },
      {
        id: 'upperlip',
        name: 'Upper lip',
        zindex: 2,
        toggleable: true,
        category: 'upper',
        file: UpperLip350V2,
        overrides: {
          brightness: { max: 3 }
        },
        presets: DEFAULT_COLORS,
      },
      {
        id: 'stripe',
        name: 'Stripe',
        zindex: 3,
        toggleable: true,
        category: 'upper',
        file: Stripe350V2,
        overrides: {
          brightness: { max: 3 }
        },
        presets: DEFAULT_COLORS,
      },
      {
        id: 'laces',
        name: 'laces',
        zindex: 5,
        toggleable: true,
        category: 'laces',
        file: Laces350V2,
        overrides: {
          brightness: { max: 2 },
          saturation: { max: 3 },
        },
        presets: DEFAULT_COLORS,
      },
      {
        id: 'midsole',
        name: 'Midsole',
        zindex: 100,
        toggleable: false,
        category: 'sole',
        file: Midsole350V2,
        presets: DEFAULT_COLORS,
      },
      {
        id: 'outsole',
        name: 'Outsole',
        zindex: 101,
        toggleable: false,
        category: 'outsole',
        file: Outsole350V2,
        presets: DEFAULT_COLORS,
      },
    ],
  },
  {
    id: '500',
    name: 'adidas YEEZY 500',
    enabled: false,
    description: 'chunky boi',
  },
  {
    id: '700',
    name: 'adidas YEEZY BOOST 700',
    enabled: false,
    description: 'The one your dad wears',
  },
]