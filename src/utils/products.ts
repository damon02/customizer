import { IGenericProduct } from '../@types/types'

import YEEZY350V2 from '../assets/shoes/350V2/data'
import YEEZY700V1 from '../assets/shoes/700V1/data'
import YEEZYSLIDE from '../assets/shoes/SLIDE/data'

export const SHOES_YEEZY: IGenericProduct[] = [
  YEEZY350V2,
  YEEZY700V1,
  YEEZYSLIDE
]


export const ALL_PRODUCTS = [...SHOES_YEEZY]