import { IGenericProduct } from '../../../@types/types'
import { DEFAULT_COLORS } from '../../../utils/constants'

import HeelCap from './heelcap.png'
import Laces from './laces.png'
import Lining from './lining.png'
import Midsole from './midsole.png'
import Outsole from './outsole.png'
import PullTab from './pulltab.png'
import PullTabLogo from './pulltablogo.png'
import Swoosh from './swoosh.png'
import Toebox from './toebox.png'
import ToeboxCap from './toeboxcap.png'
import Tongue from './tongue.png'
import Upper from './upper.png'
import UpperHigh from './upperhigh.png'
import UpperLaces from './upperlaces.png'

const filteredColors = DEFAULT_COLORS.presets.filter(x => x.name !== 'White')
const DUNKLOW_COLORS = {
  name: 'Default',
  presets: filteredColors.splice(1, 0, { name: 'White', cssString: '#ffffff', values: { brightness: 3, hue: 0, saturation: 0, sepia: 0 } })
}

export const ShoeDunkLow: IGenericProduct = {
  id: 'DUNKLOW',
  brand: 'Nike',
  name: 'Dunk Low',
  tags: ['Nike', 'Low'],
  enabled: true,
  type: 'SHOE',
  dimensions: {
    width: 1400,
    height: 1000,
  },
  assets: [
    {
      id: 'upper',
      name: 'Upper',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 1,
      variants: [
        { 
          id: 'upper', 
          file: Upper, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'tongue',
      name: 'Tongue',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 2,
      variants: [
        { 
          id: 'tongue', 
          file: Tongue, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'toebox',
      name: 'Toebox',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 3,
      variants: [
        { 
          id: 'toebox', 
          file: Toebox, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'toeboxCap',
      name: 'Toebox cap',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 4,
      variants: [
        { 
          id: 'toeboxCap', 
          file: ToeboxCap, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'upperLaces',
      name: 'Upper laces',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 5,
      variants: [
        { 
          id: 'upperLaces', 
          file: UpperLaces, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'upperHigh',
      name: 'Upper high rear',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 6,
      variants: [
        { 
          id: 'upperHigh', 
          file: UpperHigh, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'lining',
      name: 'Lining',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 7,
      variants: [
        { 
          id: 'lining', 
          file: Lining, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'heelCap',
      name: 'Heel cap',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 8,
      variants: [
        { 
          id: 'heelCap', 
          file: HeelCap, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'swoosh',
      name: 'Swoosh',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 9,
      variants: [
        { 
          id: 'swoosh', 
          file: Swoosh, 
          name: 'Nike Swoosh'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'pullTab',
      name: 'Pull tab',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 10,
      variants: [
        { 
          id: 'pullTab', 
          file: PullTab, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'pullTabLogo',
      name: 'Pull tab logo',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 11,
      variants: [
        { 
          id: 'pullTabLogo', 
          file: PullTabLogo, 
          name: 'Nike'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'midsole',
      name: 'Midsole',
      category: 'sole',
      presets: [DUNKLOW_COLORS],
      zindex: 12,
      variants: [
        { 
          id: 'midsole', 
          file: Midsole, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'outsole',
      name: 'Outsole',
      category: 'sole',
      presets: [DUNKLOW_COLORS],
      zindex: 13,
      variants: [
        { 
          id: 'outsole', 
          file: Outsole, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
    {
      id: 'laces',
      name: 'Laces',
      category: 'upper',
      presets: [DUNKLOW_COLORS],
      zindex: 14,
      variants: [
        { 
          id: 'laces', 
          file: Laces, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      },
      default: { brightness: 3, hue: 0, saturation: 0, sepia: 0, display: 'block' },
    },
  ]
}

export default ShoeDunkLow