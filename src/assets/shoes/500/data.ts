import { IGenericProduct } from '../../../@types/types'
import { DEFAULT_COLORS } from '../../../utils/constants'

import HeelBack from './heelback.png'
import HeelBack2 from './heelback2.png'
import Laces from './laces.png'
import Lining from './lining.png'
import MeshPanels from './mesh.png'
import Midsole from './midsole.png'
import Outsole from './outsole.png'
import Toebox from './toebox.png'
import TongueBottom from './tonguebottom.png'
import TongueTop from './tonguetop.png'
import UpperFront from './upperfront.png'
import UpperLaceRoundels from './upperlaceroundels.png'
import UpperLow from './upperlow.png'
import UpperRear from './upperrear.png'
import UpperSole from './uppersole.png'

export const Shoe500Low: IGenericProduct = {
  id: '500',
  brand: 'adidas',
  name: 'YEEZY 500',
  enabled: true,
  type: 'SHOE',
  dimensions: {
    width: 1400,
    height: 1000,
  },
  assets: [
    {
      id: 'tongue',
      name: 'Tongue',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 1,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      variants: [
        { 
          id: 'tongue', 
          file: TongueBottom, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'tongueTop',
      name: 'Tongue top',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 2,
      default: { display: 'none', saturation: 0, hue: 0, sepia: 0, brightness: 0 },
      variants: [
        { 
          id: 'tongueTop', 
          file: TongueTop, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'upper',
      name: 'Upper panels',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 3,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      variants: [
        { 
          id: 'meshpanels', 
          file: MeshPanels, 
          name: 'Mesh'
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
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
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
      id: 'upperRear',
      name: 'Upper rear',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 5,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      variants: [
        { 
          id: 'upperRear', 
          file: UpperRear, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'heelBack2',
      name: 'Heel panel inside',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 6,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      variants: [
        { 
          id: 'heelPanelInside', 
          file: HeelBack2, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'heelBack',
      name: 'Heel panel outside',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 7,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      variants: [
        { 
          id: 'heelPanelOutside', 
          file: HeelBack, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'upperlow',
      name: 'Upper low',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 8,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      variants: [
        { 
          id: 'upperlow', 
          file: UpperLow, 
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
      zindex: 9,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
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
      id: 'upperLaceRoundels',
      name: 'Upper lace roundels',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 10,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      variants: [
        { 
          id: 'upperLaceRoundels', 
          file: UpperLaceRoundels, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'uppersole',
      name: 'Uppersole',
      category: 'sole',
      presets: DEFAULT_COLORS,
      zindex: 11,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      variants: [
        { 
          id: 'upperSole', 
          file: UpperSole, 
          name: 'Default'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    },
    {
      id: 'midsole',
      name: 'Midsole',
      category: 'sole',
      presets: DEFAULT_COLORS,
      zindex: 12,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      variants: [
        { 
          id: 'midsole', 
          file: Midsole, 
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
      presets: DEFAULT_COLORS,
      zindex: 13,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
      toggleable: true,
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
      id: 'lining',
      name: 'Lining',
      category: 'upper',
      presets: DEFAULT_COLORS,
      zindex: 14,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
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
      id: 'laces',
      name: 'Laces',
      category: 'laces',
      presets: DEFAULT_COLORS,
      zindex: 15,
      default: { display: 'block', saturation: 0, hue: 0, sepia: 0, brightness: 3 },
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

export default Shoe500Low