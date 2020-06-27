import React from 'react'

import { ICSSProperties, IGenericProduct } from '../../@types/types'
import { DEFAULT_WHITE } from '../../utils/constants'
import { combineIntoCSS } from '../../utils/css'

import './Card.scss'

interface IProps {
  css?: { [partID: string]: ICSSProperties }
  product: IGenericProduct
  handleClick: () => void
}

const Card = (props: IProps) => {
  const { css, product, handleClick } = props
  const upperCSS = css && combineIntoCSS({ ...css.upper, saturation: 1 })

  return (
    <button
      className="card"
      key={product.id}
      onClick={() => handleClick()}
    >
      <div className="image">
        <div className="border-cover"/>
        {product.assets?.map((part) => {
          const partCSS = css 
            ? combineIntoCSS(css[part.id]) 
            : combineIntoCSS({ ...DEFAULT_WHITE.values, display: 'block' })

          return (
            <img
              alt={''}
              key={`${product?.name}-${part.id}`}
              className={`card-product-layer ${part.id}`}
              style={{
                ...partCSS,
                zIndex: part.zindex,
                backgroundImage: `url(${part.file})`,
              }}
            />
          )
        })}
      </div>
      <div className="product-name">{product.name}</div>
      <div className="card-bottom-border" style={{ filter: upperCSS?.filter }} />
    </button>
  )
}

export default Card