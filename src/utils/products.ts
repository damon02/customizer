// Assets
import Laces350V2 from '../assets/350V2/laces.png'
import Midsole350V2 from '../assets/350V2/midsole.png'
import Outsole350V2 from '../assets/350V2/outsole.png'
import Pulltab350V2 from '../assets/350V2/pulltab.png'
import Stripe350V2 from '../assets/350V2/stripe.png'
import StripeNotFull350V2 from '../assets/350V2/stripe_notfull.png'
import StripeTailLight350V2 from '../assets/350V2/stripe_taillight.png'
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
        overrides: {
          brightness: { max: 3 }
        },
        presets: DEFAULT_COLORS,
        variants: [
          {
            id: 'upper350V2static',
            file: Upper350V2,
            name: 'Static knit',
          },
        ],
      },
      {
        id: 'upperlip',
        name: 'Upper lip',
        zindex: 2,
        toggleable: true,
        category: 'upper',
        overrides: {
          brightness: { max: 3 }
        },
        presets: DEFAULT_COLORS,
        variants: [
          {
            id: 'upperlip350V2',
            file: UpperLip350V2,
            name: 'Default',
          },
        ],
      },
      {
        id: 'stripe',
        name: 'Stripe',
        zindex: 3,
        toggleable: true,
        category: 'upper',
        overrides: {
          brightness: { max: 3 }
        },
        presets: DEFAULT_COLORS,
        variants: [
          {
            id: 'stripe350V2full',
            file: Stripe350V2,
            name: 'Full length',
            description: 'Stripe goes along the entire shoe'
          },
          {
            id: 'stripe350V2',
            file: StripeNotFull350V2,
            name: 'Default',
            description: 'Single colored stripe'
          },
          {
            id: 'stripe350V2short',
            file: StripeTailLight350V2,
            name: 'Short',
            description: 'Short colored stripe like Tail Lights'
          },
        ],
      },
      {
        id: 'pulltab',
        name: 'Pull tab',
        zindex: 4,
        toggleable: true,
        category: 'upper',
        overrides: {
          brightness: { max: 3 }
        },
        presets: DEFAULT_COLORS,
        variants: [
          {
            id: 'pulltab350V2singleColor',
            file: Pulltab350V2,
            name: 'Single color',
          },
        ],
      },
      {
        id: 'laces',
        name: 'Laces',
        zindex: 5,
        toggleable: true,
        category: 'laces',
        overrides: {
          brightness: { max: 2 },
          saturation: { max: 3 },
        },
        presets: DEFAULT_COLORS,
        variants: [
          {
            id: 'laces350V2',
            file: Laces350V2,
            name: 'Default',
          },
        ],
      },
      {
        id: 'midsole',
        name: 'Midsole',
        zindex: 100,
        toggleable: false,
        category: 'sole',
        presets: DEFAULT_COLORS,
        variants: [
          {
            id: 'midsole350V2static',
            file: Midsole350V2,
            name: 'Default',
          },
        ],
      },
      {
        id: 'outsole',
        name: 'Outsole',
        zindex: 101,
        toggleable: false,
        category: 'outsole',
        presets: DEFAULT_COLORS,
        variants: [
          {
            id: 'outsole350V2static',
            file: Outsole350V2,
            name: 'Default',
          },
        ],
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