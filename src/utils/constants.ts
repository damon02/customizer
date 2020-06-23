import Midsole350V2 from '../assets/350V2/midsole.png'
import Outsole350V2 from '../assets/350V2/outsole.png'
import Upper350V2 from '../assets/350V2/upper.png'

export interface IGenericPart {
  id: string
  name: string
  toggleable?: boolean
  zindex: number // z-index
  category?: string
  file: string
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
        name: 'upper',
        zindex: 1,
        toggleable: false,
        category: 'upper',
        file: Upper350V2,
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