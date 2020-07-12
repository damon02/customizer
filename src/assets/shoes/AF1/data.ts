import { IGenericProduct } from '../../../@types/types'
import { DEFAULT_COLORS, PASTEL_COLORS } from '../../../utils/constants'

import Heel from './heel.png'
import Laces from './laces.png'
import Lining from './liner.png'
import Outsole from './outsole.png'
import Pulltab from './pulltab.png'
import Sole from './sole.png'
import SoleAIR from './soleair.png'
import SwooshDefault from './swooshdefault.png'
import SwooshChrome from './swooshtscott.png'
import Toebox from './toebox.png'
import ToeboxCap from './toeboxcap.png'
import Tongue from './tongue.png'
import Upper from './upper.png'
import UpperLaces from './upperlaces.png'

export const AF1: IGenericProduct = {
  id: 'AF1',
  brand: 'Nike',
  name: 'Air Force 1 Low',
  tags: ['Nike', 'Low'],
  enabled: true,
  type: 'SHOE',
  dimensions: {
    width: 1400,
    height: 700,
  },
  assets: [
    {
      id: 'tongue',
      name: 'Tongue',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 1,
      variants: [
        { 
          id: 'tongue', 
          file: Tongue, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'upper',
      name: 'Upper',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 2,
      variants: [
        { 
          id: 'upper', 
          file: Upper, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'toebox',
      name: 'Toebox',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
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
      }
    },
    {
      id: 'toeboxCap',
      name: 'Toebox cap',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
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
      }
    },
    {
      id: 'heel',
      name: 'Heel',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 5,
      variants: [
        { 
          id: 'heel', 
          file: Heel, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'swoosh',
      name: 'Swoosh',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 6,
      variants: [
        { 
          id: 'swooshDefault', 
          file: SwooshDefault, 
          name: 'Nike Swoosh'
        },
        { 
          id: 'swooshTravisScott', 
          file: SwooshChrome, 
          name: 'Chrome Nike Swoosh'
        },
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'pulltab',
      name: 'Pull tab',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 7,
      variants: [
        { 
          id: 'pulltab', 
          file: Pulltab, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'lining',
      name: 'Lining',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 8,
      variants: [
        { 
          id: 'lining', 
          file: Lining, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'upperLaces',
      name: 'Upper laces',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 9,
      variants: [
        { 
          id: 'upperLaces', 
          file: UpperLaces, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'sole',
      name: 'Sole',
      category: 'sole',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 10,
      variants: [
        { 
          id: 'sole', 
          file: Sole, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'outsole',
      name: 'Outsole',
      category: 'sole',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 11,
      toggleable: true,
      default: { brightness: 2, display: 'none', sepia: 0, hue: 0, saturation: 0 },
      variants: [
        { 
          id: 'outsole', 
          file: Outsole, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'laces',
      name: 'Laces',
      category: 'upper',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 13,
      variants: [
        { 
          id: 'laces', 
          file: Laces, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'soleAIR',
      name: 'Sole AIR Detail',
      category: 'sole',
      presets: [
        DEFAULT_COLORS, 
        PASTEL_COLORS
      ],
      zindex: 14,
      toggleable: true,
      default: { display: 'none', brightness: 2, saturation: 0, sepia: 0, hue: 0 },
      variants: [
        { 
          id: 'soleAIR', 
          file: SoleAIR, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
  ]
}

export default AF1