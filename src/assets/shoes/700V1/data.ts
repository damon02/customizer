import { IGenericProduct } from '../../../@types/types'
import { DEFAULT_COLORS } from '../../../utils/constants'

import Laces from './laces.png'
import Lining from './lining.png'
import Midsole from './midsole.png'
import MidsoleAccentFront from './midsole_accent_front.png'
import MidsoleAccentRear from './midsole_accent_rear.png'
import Outsole from './outsole.png'
import Tongue from './tongue.png'
import UpperAccentBack from './upper_accent_back.png'
import UpperSuede from './upper_front_suede.png'
import UpperLeather from './upper_leather.png'
import UpperMesh from './upper_mesh.png'
import UpperRearMesh from './upper_rear_mesh.png'
import UpperMidSuede from './upper_rear_panel.png'
import UpperRearSuede from './upper_rear_suede.png'
import UpperToeboxSuede from './upper_toebox_suede.png'

export const YEEZY700V1: IGenericProduct = {
  id: '700V1',
  type: 'SHOE',
  brand: 'adidas',
  name: 'YEEZY BOOST 700',
  enabled: true,
  description: 'Yeezys take on the dad shoe',
  assets: [
    {
      id: 'UpperRearMesh',
      name: 'Upper Rear Mesh',
      zindex: 1,
      toggleable: false,
      category: 'upper',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'UpperRearMesh',
          file: UpperRearMesh,
          name: 'Mesh',
        },
      ],
    },
    {
      id: 'UpperRearSuede',
      name: 'Upper Rear Suede',
      zindex: 2,
      toggleable: false,
      category: 'upper',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'UpperRearSuede',
          file: UpperRearSuede,
          name: 'Suede',
        },
      ],
    },
    {
      id: 'UpperLeather',
      name: 'Upper Leather',
      zindex: 3,
      toggleable: false,
      category: 'upper',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'UpperLeather',
          file: UpperLeather,
          name: 'Leather',
        },
      ],
    },
    {
      id: 'UpperMidSuede',
      name: 'Upper Panel',
      zindex: 4,
      toggleable: false,
      category: 'upper',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'UpperMidSuede',
          file: UpperMidSuede,
          name: 'Suede',
        },
      ],
    },
    {
      id: 'UpperSuede',
      name: 'Upper Front Suede',
      zindex: 4,
      toggleable: false,
      category: 'upper',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'UpperSuede',
          file: UpperSuede,
          name: 'Suede',
        },
      ],
    },
    {
      id: 'UpperToeboxSuede',
      name: 'Upper Toebox Suede',
      zindex: 5,
      toggleable: true,
      category: 'upper',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'UpperToeboxSuede',
          file: UpperToeboxSuede,
          name: 'Suede',
        },
      ],
    },
    {
      id: 'Lining',
      name: 'Lining',
      zindex: 10,
      toggleable: false,
      category: 'inner',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'Lining',
          file: Lining,
          name: 'Lining',
        },
      ],
    },
    {
      id: 'Tongue',
      name: 'Tongue',
      zindex: 11,
      toggleable: false,
      category: 'inner',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'Tongue',
          file: Tongue,
          name: 'Tongue',
        },
      ],
    },
    {
      id: 'upper',
      name: 'Upper Mesh',
      zindex: 15,
      toggleable: false,
      category: 'upper',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'upper',
          file: UpperMesh,
          name: 'Mesh',
        },
      ],
    },
    {
      id: 'AccentBack',
      name: 'Back Accent',
      zindex: 16,
      toggleable: true,
      category: 'upper',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'UpperAccentBack',
          file: UpperAccentBack,
          name: 'Accent',
        },
      ],
    },
    {
      id: 'Midsole',
      name: 'Midsole',
      zindex: 50,
      toggleable: false,
      category: 'sole',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'Midsole',
          file: Midsole,
          name: 'Midsole',
        },
      ],
    },
    {
      id: 'MidsoleAccentFront',
      name: 'Midsole Front Accent',
      zindex: 51,
      toggleable: true,
      category: 'sole',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'MidsoleAccentFront',
          file: MidsoleAccentFront,
          name: 'Accent',
        },
      ],
    },
    {
      id: 'MidsoleAccentRear',
      name: 'Midsole Rear Accent',
      zindex: 52,
      toggleable: true,
      category: 'sole',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'MidsoleAccentRear',
          file: MidsoleAccentRear,
          name: 'Accent',
        },
      ],
    },
    {
      id: 'Outsole',
      name: 'Outsole',
      zindex: 60,
      toggleable: false,
      category: 'sole',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'Outsole',
          file: Outsole,
          name: 'Outsole',
        },
      ],
    },
    {
      id: 'Laces',
      name: 'Laces',
      zindex: 65,
      toggleable: false,
      category: 'upper',
      presets: DEFAULT_COLORS,
      variants: [
        {
          id: 'Laces',
          file: Laces,
          name: 'Laces',
        },
      ],
    },
  ]
}

export default YEEZY700V1