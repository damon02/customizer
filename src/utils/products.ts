// Assets
import Laces350V2 from '../assets/350V2/laces.png'
import Midsole350V2 from '../assets/350V2/midsole.png'
import Outsole350V2 from '../assets/350V2/outsole.png'
import Pulltab350V2 from '../assets/350V2/pulltab.png'
import Stripe350V2 from '../assets/350V2/stripe.png'
import Upper350V2 from '../assets/350V2/upper.png'
import UpperLip350V2 from '../assets/350V2/upper_lip.png'

import { IGenericProduct } from '../@types/types'
import { DEFAULT_COLORS } from './constants'

export const SHOES_YEEZY: IGenericProduct[] = [
  {
    id: '350V2',
    type: 'SHOE',
    brand: 'adidas',
    name: 'YEEZY BOOST 350 V2',
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
        toggleable: false,
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
        id: 'pulltab',
        name: 'Pull tab',
        zindex: 4,
        toggleable: true,
        category: 'upper',
        file: Pulltab350V2,
        overrides: {
          brightness: { max: 3 }
        },
        presets: DEFAULT_COLORS,
      },
      {
        id: 'laces',
        name: 'Laces',
        zindex: 5,
        toggleable: false,
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
    type: 'SHOE',
    brand: 'adidas',
    name: 'YEEZY 500',
    enabled: false,
    description: 'chunky boi',
  },
  {
    id: '700',
    type: 'SHOE',
    brand: 'adidas',
    name: 'YEEZY BOOST 700',
    enabled: false,
    description: 'The one your dad wears',
  },
]


export const ALL_PRODUCTS = [...SHOES_YEEZY]