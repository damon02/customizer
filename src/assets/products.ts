import { IGenericProduct } from '../@types/types'
import { sortByKey } from '../utils/general'

import YEEZY350V2 from './shoes/350V2/data'
import YEEZY500 from './shoes/500/data'
import YEEZY700V1 from './shoes/700V1/data'
import AJ1 from './shoes/AJ1/data'
import DUNKLOW from './shoes/DUNKLOW/data'
import FOG1 from './shoes/FOG1/data'
import YEEZYSLIDE from './shoes/SLIDE/data'

export const SHOES_YEEZY: IGenericProduct[] = sortByKey([
  YEEZY350V2,
  YEEZY700V1,
  YEEZYSLIDE,
  YEEZY500,
  AJ1,
  FOG1,
  DUNKLOW
], 'name')


export const ALL_PRODUCTS = [...SHOES_YEEZY]