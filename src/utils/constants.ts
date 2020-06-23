export interface IGenericPart {
  id: string
  name: string
  toggleable?: boolean
  zindex: number // z-index
  category?: string
  filename?: string
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
    id: '350 V2',
    name: 'adidas YEEZY BOOST 350 V2',
    enabled: true,
    description: 'The popular one',
    assets: [
      {
        id: 'heelTab',
        name: 'Heel tab',
        category: 'heeltab',
        zindex: 53,
      },
      {
        id: 'heelTabDots',
        name: 'Heel tab dots',
        category: 'heeltab',
        zindex: 54,
      },
      {
        id: 'outsole',
        name: 'Outsole',
        category: 'sole',
        zindex: 100,
        filename: '350V2/sole complete.png'
      },
      {
        id: 'uppersole',
        name: 'Sole',
        category: 'sole',
        zindex: 110,
      },
      {
        id: 'upper',
        name: 'Upper knit',
        category: 'upper',
        zindex: 50,
      },
      {
        id: 'stripe',
        name: 'Stripe',
        toggleable: true,
        category: 'upper',
        zindex: 51,
      },
      {
        id: 'laces',
        name: 'Laces',
        zindex: 52,
      },
      {
        id: 'upperEdge',
        name: 'Upper edge',
        category: 'upper',
        zindex: 53,
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