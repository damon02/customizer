import React from 'react'

import { IGenericPart, IOptionalCSSProperties, IPartPropsExposedCSS } from '../../@types/types'
import './ComponentOptions.scss'

interface IProps {
  cssProps: IPartPropsExposedCSS
  selectedPart: IGenericPart | undefined
  applyPartPropsChanges: (changes: { css?: IOptionalCSSProperties, variant?: { id: string } }) => void
}

const ComponentOptions = (props: IProps) => {
  const { cssProps, selectedPart, applyPartPropsChanges } = props

  function handleOnVariantChange(variantID: string) {
    applyPartPropsChanges({ variant: { id: variantID } })
  }

  function handleOnDisplayChange(part: IGenericPart | undefined, value: boolean) {
    if (part) {
      applyPartPropsChanges({ css: { display: value ? 'block' : 'none' } })
    }
  }

  if (!selectedPart) {
    return null
  }

  const isEnabled = cssProps[selectedPart.id]?.css.display !== 'none' 
  const currentVariant = selectedPart.variants.find(variant => cssProps && variant.id === cssProps[selectedPart.id]?.variant.id)

  const variants = selectedPart.variants.map(variant => (
    <option 
      className="option-variant"
      key={variant.id}
      value={variant.id}
    >
      {variant.name} {variant.description && `(${variant.description})`}
    </option>
  ))


  return (
    <div className="product-options">
      <button
        className={`button-part`}
        onClick={() => handleOnDisplayChange(selectedPart, !isEnabled)}
        disabled={!selectedPart.toggleable}
      >
        {selectedPart.toggleable ? isEnabled ? `Remove` : `Add` : 'Cannot be removed'}
      </button>
      {variants.length > 1 ? (
        <select onChange={(e) => handleOnVariantChange(e.target.value)} defaultValue={currentVariant?.id}>
          <option disabled>Select {selectedPart.name.toLowerCase()} type</option>
          {variants}
        </select>
      ) : (
        <div className="no-variants">No variants available</div>
      )}
    </div>
  )
}


export default ComponentOptions