import { formatDistanceToNowStrict } from 'date-fns'
import React from 'react'

import { IGenericProduct, IPartPropsCSSProperties } from '../../@types/types'
import { DEFAULT_WHITE } from '../../utils/constants'
import { combineIntoCSS } from '../../utils/css'

import './Card.scss'

interface IProps {
  partProps?: IPartPropsCSSProperties
  product: IGenericProduct
  handleClick: () => void
}

const Card = (props: IProps) => {
  const { partProps, product, handleClick } = props
  const upperCSS = partProps && combineIntoCSS({ ...partProps.upper.css, saturation: 1 })

  return (
    <button
      className="card"
      key={product.id}
      onClick={() => handleClick()}
    >
      <div className="timestamp">{partProps?.timestamp ? formatDistanceToNowStrict(partProps.timestamp) + ' ago' : 'New'}</div>
      <div className="texts">
        <div className="brand-name">{product.brand}</div>
        <div className="product-name">{product.name}</div>
      </div>
      <div className="image">
        <div className="border-cover"/>
        {product.assets?.map((part) => {
          const partCSS = partProps 
            ? combineIntoCSS(partProps[part.id]?.css) 
            : part.default
              ? combineIntoCSS(part.default)
              : combineIntoCSS({ ...DEFAULT_WHITE.values, display: 'block' })

          const variantID = (partProps && partProps[part.id]?.variant.id) || part.variants[0].id
          const variantImage = part.variants.find(p => p.id === variantID)?.file || part.variants[0].file

          return (
            <img
              alt={''}
              key={`${product?.name}-${part.id}`}
              className={`card-product-layer ${part.id}`}
              style={{
                ...partCSS,
                zIndex: part.zindex,
                backgroundImage: `url(${variantImage})`,
              }}
            />
          )
        })}
      </div>
      <div className="card-bottom-border" style={{ filter: upperCSS?.filter }} />
    </button>
  )
}

export default Card