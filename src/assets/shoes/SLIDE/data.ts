import { IGenericProduct } from '../../../@types/types'
import { DEFAULT_COLORS } from '../../../utils/constants'

import YZYSLIDE from './YZYSLIDE.png'

export const ShoeYZYSlides: IGenericProduct = {
  id: 'yeezySlides',
  brand: 'adidas',
  name: 'YEEZY SLIDE',
  enabled: true,
  type: 'SHOE',
  dimensions: {
    width: 1241,
    height: 714,
  },
  assets: [
    {
      id: 'upper',
      name: 'Slide',
      category: 'shoe',
      presets: DEFAULT_COLORS,
      zindex: 1,
      variants: [
        { 
          id: 'uppper', 
          file: YZYSLIDE, 
          name: 'Slide'
        }
      ],
      overrides: {
        brightness: { min: 0, max: 3 }
      }
    }
  ]
}

export default ShoeYZYSlides