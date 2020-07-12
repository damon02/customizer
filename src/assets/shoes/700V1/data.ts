import { IColorCategory, IGenericProduct } from '../../../@types/types'
import { PASTEL_COLORS } from '../../../utils/constants'

import Laces from './laces.png'
import Lining from './lining.png'
import Midsole from './midsole.png'
import MidsoleAccentFront from './midsole_accent_front.png'
import MidsoleAccentRear from './midsole_accent_rear.png'
import Outsole from './outsole.png'
import Tongue from './tongue.png'
import UpperAccentBack from './upper_accent_back.png'
import UpperLeather from './upper_leather.png'
import UpperMeshFront from './upper_mesh_front.png'
import UpperMeshMiddle from './upper_mesh_middle.png'
import UpperMeshRear from './upper_mesh_rear.png'
import UpperSuedeFront from './upper_suede_front.png'
import UpperSuedeMiddle from './upper_suede_middle.png'
import UpperSuedeRear from './upper_suede_rear.png'
import UpperSuedeToebox from './upper_suede_toebox.png'

export const COLORS700: IColorCategory = {
  name: 'Default',
  presets: [
    { name: 'Black', cssString: '#000000', values: { brightness: 0.25, sepia: 0, saturation: 0, hue: 0 } },
    { name: 'White', cssString: '#ffffff', values: { brightness: 3, sepia: 0, saturation: 0, hue: 0 } },
    { name: 'Red', cssString: '#ff1f3b', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 0 } },
    { name: 'Orange', cssString: '#ffa338', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 45 } },
    { name: 'Yellow', cssString: '#ffff00', values: { brightness: 1.66, sepia: 0, saturation: 1.2, hue: 67 } },
    { name: 'Green', cssString: '#387400', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 90 } },
    { name: 'Cyan', cssString: '#00ffff', values: { brightness: 1.34, sepia: 0, saturation: 1, hue: 180 } },
    { name: 'Blue', cssString: '#0000ff', values: { brightness: 0.89, sepia: 0, saturation: 2, hue: 240 } },
    { name: 'Purple', cssString: '#4b0082', values: { brightness: 0.67, sepia: 0, saturation: 1, hue: 290 } },
    { name: 'Hot pink', cssString: '#ff0087', values: { brightness: 1, sepia: 0, saturation: 2.39, hue: 325 } },
  ]
}

export const YEEZY700V1: IGenericProduct = {
  id: '700V1',
  type: 'SHOE',
  brand: 'adidas',
  name: 'YEEZY BOOST 700',
  enabled: true,
  description: 'Yeezys take on the dad shoe',
  tags: ['YEEZY', 'adidas', 'Low', 'Dad shoe', 'Boost'],
  dimensions: {
    width: 1241,
    height: 714,
  },
  assets: [
    {
      id: 'UpperRearMesh',
      name: 'Upper Mesh Rear',
      zindex: 1,
      toggleable: false,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'UpperMeshRear',
          file: UpperMeshRear,
          name: 'Mesh',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'UpperSuedeRear',
      name: 'Upper Suede Rear',
      zindex: 2,
      toggleable: false,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'UpperSuedeRear',
          file: UpperSuedeRear,
          name: 'Suede',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'UpperLeather',
      name: 'Upper Leather',
      zindex: 3,
      toggleable: false,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'UpperLeather',
          file: UpperLeather,
          name: 'Leather',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'UpperSuedeMiddle',
      name: 'Upper Suede Middle',
      zindex: 4,
      toggleable: false,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'UpperSuedeMiddle',
          file: UpperSuedeMiddle,
          name: 'Suede',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'UpperSuedeFront',
      name: 'Upper Suede Front',
      zindex: 4,
      toggleable: false,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'UpperSuedeFront',
          file: UpperSuedeFront,
          name: 'Suede',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'UpperSuedeToebox',
      name: 'Upper Suede Toebox',
      zindex: 5,
      toggleable: true,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'UpperSuedeToebox',
          file: UpperSuedeToebox,
          name: 'Suede',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'none', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'Lining',
      name: 'Lining',
      zindex: 10,
      toggleable: false,
      category: 'inner',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'Lining',
          file: Lining,
          name: 'Lining',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'Tongue',
      name: 'Tongue',
      zindex: 11,
      toggleable: false,
      category: 'inner',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'Tongue',
          file: Tongue,
          name: 'Tongue',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'upper',
      name: 'Upper Mesh Front',
      zindex: 14,
      toggleable: false,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'upper',
          file: UpperMeshFront,
          name: 'Mesh',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'upperMeshMiddle',
      name: 'Upper Mesh Middle',
      zindex: 15,
      toggleable: false,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'upper',
          file: UpperMeshMiddle,
          name: 'Mesh',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'AccentBack',
      name: 'Back Accent',
      zindex: 16,
      toggleable: true,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'UpperAccentBack',
          file: UpperAccentBack,
          name: 'Accent',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 2.5 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'Midsole',
      name: 'Midsole',
      zindex: 50,
      toggleable: false,
      category: 'sole',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'Midsole',
          file: Midsole,
          name: 'Midsole',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'MidsoleAccentFront',
      name: 'Midsole Front Accent',
      zindex: 51,
      toggleable: true,
      category: 'sole',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'MidsoleAccentFront',
          file: MidsoleAccentFront,
          name: 'Accent',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'MidsoleAccentRear',
      name: 'Midsole Rear Accent',
      zindex: 52,
      toggleable: true,
      category: 'sole',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'MidsoleAccentRear',
          file: MidsoleAccentRear,
          name: 'Accent',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'Outsole',
      name: 'Outsole',
      zindex: 60,
      toggleable: false,
      category: 'sole',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'Outsole',
          file: Outsole,
          name: 'Outsole',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
    {
      id: 'Laces',
      name: 'Laces',
      zindex: 65,
      toggleable: false,
      category: 'upper',
      presets: [
        COLORS700, 
        PASTEL_COLORS
      ],
      variants: [
        {
          id: 'Laces',
          file: Laces,
          name: 'Laces',
        },
      ],
      overrides: {
        brightness: { min: 0, max: 4 }
      },
      default: { display: 'block', brightness: 3, sepia: 0, saturation: 0, hue: 0 },
    },
  ]
}

export default YEEZY700V1