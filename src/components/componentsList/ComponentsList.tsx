import * as React from 'react'

import { IGenericPart, IOptionalCSSProperties, IPartPropsExposedCSS, IPartVariant } from '../../@types/types'
import './ComponentsList.scss'

interface IProps {
  components: IGenericPart[]
  activeComponent: IGenericPart | undefined
  activeComponentCSS: IPartPropsExposedCSS | undefined
  onSetActiveComponent: (activeComponent: IGenericPart | undefined) => void
  applyPartPropsChanges: (changes: { css?: IOptionalCSSProperties, variant?: IPartVariant }) => void
}

const ComponentsList = (props: IProps) => {
  return (
    <div className="components-list">
      {props.components.map(c => {
        const isActive = c === props.activeComponent
        const onClick = () => props.onSetActiveComponent(c)
        const isEnabled = props.activeComponent?.toggleable
          ? props.activeComponentCSS && props.activeComponentCSS[props.activeComponent.id].css.display === 'block'
          : undefined

        const variants = c.variants.map(variant => 
          <option className="option-variant" key={variant.id} value={variant.id}>{variant.name} {variant.description && `(${variant.description})`}</option>
        )

        return (
          <div className={`component-wrapper${isActive ? ' active' : ''}`} key={`part-${c.id}`}>
            <button
              className={`select-button ${isActive ? 'active' : ''}`}
              onClick={onClick}
              key={c.id}
            >
              {c.name}
            </button>
            <div className={`options${isActive ? ' show' : ''}`}>
              <h3 className="title">Options</h3>
              {variants.length > 1 ? (
                <select onChange={(e) => handleOnVariantChange(c, e.target.value)}>
                  <option disabled>Select {c.name.toLowerCase()} type</option>
                  {variants}
                </select>
              ) : (
                <div>No variants available</div>
              )}

              {props.activeComponent?.toggleable && (
                <button
                  className={`button-part ${isEnabled}`}
                  onClick={() => handleOnDisplayChange(props.activeComponent, !isEnabled)}
                >
                  {isEnabled ? `Remove ${c.name}` : `Add ${c.name}`}
                </button>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )

  function handleOnVariantChange(anyPart: IGenericPart, variantID: string) {
    const part = anyPart.variants.find(x => x.id === variantID)

    if (part) {
      props.applyPartPropsChanges({ variant: part })
    }
  }

  function handleOnDisplayChange(part: IGenericPart | undefined, value: boolean) {

    if (part) {
      props.applyPartPropsChanges({ css: { display: value ? 'block' : 'none' } })
    }
  }
}

export default ComponentsList