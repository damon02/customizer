import { IGenericProduct } from '../@types/types'

import YEEZY350V2 from '../assets/shoes/350V2/data'
import YEEZY700V1 from '../assets/shoes/700V1/data'
import AJ1 from '../assets/shoes/AJ1/data'
import YEEZYSLIDE from '../assets/shoes/SLIDE/data'
import { sortByKey } from './general'

export const SHOES_YEEZY: IGenericProduct[] = sortByKey([
  YEEZY350V2,
  YEEZY700V1,
  YEEZYSLIDE,
  AJ1
], 'name')


export const ALL_PRODUCTS = [...SHOES_YEEZY]