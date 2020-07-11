import { IGenericProduct } from '../../../@types/types'
import { DEFAULT_COLORS } from '../../../utils/constants'

import Laces350V2 from './laces.png'
import Midsole350V2 from './midsole.png'
import Outsole350V2 from './outsole.png'
import Pulltab350V2 from './pulltab.png'
import Stripe350V2 from './stripe.png'
import StripeNotFull350V2 from './stripe_notfull.png'
import StripeTailLight350V2 from './stripe_taillight.png'
import Upper350V2 from './upper.png'
import UpperLip350V2 from './upper_lip.png'
import Upper350V2Sesame from './upper_sesame.png'

export const Shoe350V2: IGenericProduct = {
  id: '350V2',
  type: 'SHOE',
  brand: 'adidas',
  name: 'YEEZY BOOST 350 V2',
  enabled: true,
  description: 'A modern classic',
  tags: ['YEEZY', 'adidas', 'Low', 'Primeknit', 'Boost'],
  dimensions: {
    width: 1241,
    height: 714,
  },
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
        {
          id: 'upper350V2sesame',
          file: Upper350V2Sesame,
          name: 'Sesame knit',
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
          description: 'Stripe wraps around heel'
        },
        {
          id: 'stripe350V2',
          file: StripeNotFull350V2,
          name: 'Default',
          description: 'Default stripe'
        },
        {
          id: 'stripe350V2short',
          file: StripeTailLight350V2,
          name: 'Short',
          description: 'Short stripe like Tail Lights'
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
      toggleable: false,
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
      overrides: {
        brightness: { min: 0, max: 2 }
      },
    },
    {
      id: 'outsole',
      name: 'Outsole',
      zindex: 101,
      toggleable: false,
      category: 'outsole',
      presets: DEFAULT_COLORS,
      overrides: {
        brightness: { min: 0, max: 2 }
      },
      variants: [
        {
          id: 'outsole350V2static',
          file: Outsole350V2,
          name: 'Default',
        },
      ],
    },
  ],
}

export default Shoe350V2