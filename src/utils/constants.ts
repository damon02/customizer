export interface IShoe {
  id: string
  name: string
  enabled: boolean
  description?: string
}

export const YEEZY_LINEUP: IShoe[] = [
  {
    id: '350',
    name: 'adidas YEEZY BOOST 350',
    enabled: false,
    description: 'The OG'
  },
  {
    id: '350 V2',
    name: 'adidas YEEZY BOOST 350 V2',
    enabled: true,
    description: 'The popular one'
  },
  {
    id: '500',
    name: 'adidas YEEZY 500',
    enabled: true,
    description: 'chunky boi'
  },
  {
    id: '700',
    name: 'adidas YEEZY BOOST 700',
    enabled: false,
    description: 'The one your dad wears'
  },
  {
    id: '700 V2',
    name: 'adidas YEEZY BOOST 700 V2',
    enabled: false,
    description: 'The one your dad wears tomorrow'
  },
]