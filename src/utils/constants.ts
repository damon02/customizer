import Laces350V2 from '../assets/350V2/laces.png'
import Midsole350V2 from '../assets/350V2/midsole.png'
import Outsole350V2 from '../assets/350V2/outsole.png'
import Stripe350V2 from '../assets/350V2/stripe.png'
import Upper350V2 from '../assets/350V2/upper.png'
import UpperLip350V2 from '../assets/350V2/upper_lip.png'

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
  }
}

export interface IShoe {
  id: string
  name: string
  enabled: boolean
  description?: string
  assets?: IGenericPart[]
}

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
        }
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
        }
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
        }
      },
      {
        id: 'laces',
        name: 'laces',
        zindex: 2,
        toggleable: true,
        category: 'laces',
        file: Laces350V2,
        overrides: {
          brightness: { max: 2 },
          saturation: { max: 3 },
        }
      },
      {
        id: 'midsole',
        name: 'Midsole',
        zindex: 100,
        toggleable: false,
        category: 'sole',
        file: Midsole350V2,
      },
      {
        id: 'outsole',
        name: 'Outsole',
        zindex: 101,
        toggleable: false,
        category: 'outsole',
        file: Outsole350V2,
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