import { IGenericProduct } from '../../../@types/types'
import { DEFAULT_COLORS } from '../../../utils/constants'

import AirUnit from './airunit.png'
import Cage from './cage.png'
import FrontTab from './fronttab.png'
import Inset from './inset.png'
import Laces from './laces.png'
import Sole from './sole.png'
import Swoosh from './swoosh.png'
import Toebox from './toebox.png'
import Upper from './upper.png'
import UpperFront from './upperfront.png'
import Zipper from './zipper.png'

export const FOG1: IGenericProduct = {
  id: 'FOG1',
  brand: 'Nike',
  name: 'Air Fear of God 1',
  enabled: true,
  type: 'SHOE',
  dimensions: {
    width: 1400,
    height: 1000,
  },
  assets: [
    {
      id: 'zipper',
      name: 'Zipper',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 1,
      variants: [
        { 
          id: 'zipper', 
          file: Zipper, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'inset',
      name: 'Inset',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 2,
      variants: [
        { 
          id: 'inset', 
          file: Inset, 
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
      presets: DEFAULT_COLORS,
      zindex: 3,
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
      id: 'upperFront',
      name: 'Upper front',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 4,
      variants: [
        { 
          id: 'upperFront', 
          file: UpperFront, 
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
      presets: DEFAULT_COLORS,
      zindex: 5,
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
      id: 'cage',
      name: 'Cage',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 6,
      variants: [
        { 
          id: 'cage', 
          file: Cage, 
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
      presets: DEFAULT_COLORS,
      zindex: 7,
      variants: [
        { 
          id: 'swoosh', 
          file: Swoosh, 
          name: 'Nike Swoosh'
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
      presets: DEFAULT_COLORS,
      zindex: 8,
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
      id: 'airUnit',
      name: 'Air Unit',
      category: 'sole',
      presets: DEFAULT_COLORS,
      zindex: 9,
      variants: [
        { 
          id: 'airUnit', 
          file: AirUnit, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'frontTab',
      name: 'Front tab',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 10,
      variants: [
        { 
          id: 'frontTab', 
          file: FrontTab, 
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
      presets: DEFAULT_COLORS,
      zindex: 11,
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
  ]
}

export default FOG1