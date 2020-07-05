import { IGenericProduct } from '../../../@types/types'
import { DEFAULT_COLORS } from '../../../utils/constants'

import AIRJordanLogo from './airjordan13.png'
import Heel from './heel9.png'
import Laces from './laces14.png'
import Lining from './lining2.png'
import Outsole from './outsole11.png'
import Sole from './sole10.png'
import Swoosh from './swoosh12.png'
import SwooshDefiant from './swooshdefiant.png'
import SwooshFlipped from './swooshflipped.png'
import SwooshReverse from './swooshreverse.png'
import Toebox from './toebox3.png'
import ToeboxSides from './toebox_sides8.png'
import Tongue from './tongue1.png'
import Upper from './upper5.png'
import UpperFront from './upper_front7.png'
import UpperHigh from './upper_high4.png'
import UpperLacesPanel from './upper_laces_panel6.png'

export const Shoe350V2: IGenericProduct = {
  id: 'AJ1',
  type: 'SHOE',
  brand: 'Nike',
  name: 'Air Jordan 1 Retro High',
  enabled: true,
  description: 'The classic',
  dimensions: {
    width: 1400,
    height: 1000,
  },
  assets: [
    {
      id: 'tongue',
      name: 'Tongue',
      zindex: 1,
      toggleable: false,
      category: 'tongue',
      overrides: {
        brightness: { max: 6 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'tongue',
          file: Tongue,
          name: 'Default',
        },
      ],
      default: { brightness: 6, saturation: 0, hue: 0, sepia: 0, display: 'block' }
    },
    {
      id: 'lining',
      name: 'Lining',
      zindex: 2,
      toggleable: false,
      category: 'upper',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'lining',
          file: Lining,
          name: 'Default',
        },
      ],
    },
    {
      id: 'toebox',
      name: 'Toebox',
      zindex: 3,
      toggleable: false,
      category: 'upper',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'toebox',
          file: Toebox,
          name: 'Default',
        },
      ],
    },
    {
      id: 'upperHigh',
      name: 'Upper High',
      zindex: 4,
      toggleable: false,
      category: 'upper',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'upperHigh',
          file: UpperHigh,
          name: 'Default',
        },
      ],
    },
    {
      id: 'upper',
      name: 'Upper',
      zindex: 5,
      toggleable: false,
      category: 'upper',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'upper',
          file: Upper,
          name: 'Default',
        },
      ],
    },
    {
      id: 'upperLacesPanel',
      name: 'Upper Laces Panel',
      zindex: 6,
      toggleable: false,
      category: 'upper',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'upperLacesPanel',
          file: UpperLacesPanel,
          name: 'Default',
        },
      ],
    },
    {
      id: 'upperFront',
      name: 'Upper Front',
      zindex: 7,
      toggleable: false,
      category: 'upper',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'upperFront',
          file: UpperFront,
          name: 'Default',
        },
      ],
    },
    {
      id: 'toeboxSides',
      name: 'Toebox sides',
      zindex: 8,
      toggleable: false,
      category: 'upper',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'toeboxSides',
          file: ToeboxSides,
          name: 'Default',
        },
      ],
    },
    {
      id: 'heel',
      name: 'Heel',
      zindex: 10,
      toggleable: false,
      category: 'upper',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'heel',
          file: Heel,
          name: 'Default',
        },
      ],
    },
    {
      id: 'sole',
      name: 'Midsole',
      zindex: 10,
      toggleable: false,
      category: 'sole',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'midsole',
          file: Sole,
          name: 'Default',
        },
      ],
    },
    {
      id: 'outsole',
      name: 'Outsole',
      zindex: 11,
      toggleable: true,
      category: 'sole',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'outsole',
          file: Outsole,
          name: 'Default',
        },
      ],
    },
    {
      id: 'swoosh',
      name: 'Swoosh',
      zindex: 10,
      toggleable: true,
      category: 'sole',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'swooshNormal',
          file: Swoosh,
          name: 'Nike Swoosh',
          zIndex: 8,
        },
        {
          id: 'swooshFlipped',
          file: SwooshFlipped,
          name: 'Nike Swoosh Upside down',
          zIndex: 8,
        },
        {
          id: 'swooshReversed',
          file: SwooshReverse,
          name: 'Nike Swoosh Reversed',
          zIndex: 10,
        },
        {
          id: 'swooshDefiant',
          file: SwooshDefiant,
          name: 'Nike Swoosh Defiant Couture',
          zIndex: 50,
        },
      ],
    },
    {
      id: 'aj1logo',
      name: 'Logo Upper High',
      zindex: 13,
      toggleable: true,
      category: 'sole',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'ajangelslogo',
          file: AIRJordanLogo,
          name: 'Air Jordan Angels logo',
        },
      ],
    },
    {
      id: 'laces',
      name: 'Laces',
      zindex: 14,
      toggleable: false,
      category: 'laces',
      overrides: {
        brightness: { max: 3 }
      },
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'laces',
          file: Laces,
          name: 'Default',
        },
      ],
    },
  ],
}

export default Shoe350V2