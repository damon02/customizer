import React from 'react'

import pjson from '../../../package.json'
import { IGenericProduct, IPartPropsExposedCSS } from '../../@types/types'
import './Product.scss'

interface IProps {
  activeProduct?: IGenericProduct
  cssProps: IPartPropsExposedCSS
}

const Product = (props: IProps) => {
  const { activeProduct, cssProps } = props

  return (
    <div className="product-canvas-wrapper">
      <div
        className="product-canvas"
        id="img-src"
        style={{
          maxHeight: activeProduct?.dimensions.height,
          maxWidth: activeProduct?.dimensions.width,
        }}
      >
        <div
          className="border-cover" 
          style={{
            maxHeight: activeProduct?.dimensions.height,
            maxWidth: activeProduct?.dimensions.width
          }}
        />
        <div className="bruh">{pjson.homepage}</div>
        {activeProduct?.assets?.map((part) => { 
          const variantID = cssProps[part.id]?.variant.id
          const variant = part.variants.find(p => p.id === variantID) || part.variants[0]

          return (
            <img
              alt={''}
              key={`${activeProduct?.name}-${part.id}`}
              className={`product-part-image ${part.id}`}
              id={`product-img ${part.id}`}
              style={{
                ...cssProps[part.id]?.css,
                maxHeight: activeProduct?.dimensions.height,
                maxWidth: activeProduct?.dimensions.width,
                zIndex: variant.zIndex || part.zindex,
                backgroundImage: `url(${variant.file})`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Product