import * as React from 'react'

import Modal from '../modal/Modal'

import { IGenericPart, IOptionalCSSProperties, IPartPropsExposedCSS } from '../../@types/types'
import { sortByKey } from '../../utils/general'
import './ComponentsList.scss'

interface IProps {
  components: IGenericPart[]
  activeComponent: IGenericPart | undefined
  activeComponentCSS: IPartPropsExposedCSS | undefined
  onSetActiveComponent: (activeComponent: IGenericPart | undefined) => void
  applyPartPropsChanges: (changes: { css?: IOptionalCSSProperties, variant?: { id: string } }) => void
}

const ComponentsList = (props: IProps) => {
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <div className="components-list">
      {sortByKey(props.components, 'name').map(c => {
        const isActive = c === props.activeComponent
        const onClick = () => {
          if (isActive) {
            setCollapsed(!collapsed)
          } else {
            props.onSetActiveComponent(c)
            setCollapsed(false)
          }
        }

        const isEnabled = props.activeComponentCSS && props.activeComponentCSS[c.id]?.css.display !== 'none' 
        const currentVariant = props.components.find(part => props.activeComponentCSS && part.id === c.id)?.variants.find(variant => props.activeComponentCSS && variant.id === props.activeComponentCSS[c.id].variant.id)
        const variants = c.variants.map(variant => 
          <option className="option-variant" key={variant.id} value={variant.id}>{variant.name} {variant.description && `(${variant.description})`}</option>
        )

        return (
          <div className={`component-wrapper${isActive && !collapsed ? ' active' : ''}`} key={`part-${c.id}`}>
            <button
              className={`select-button ${isActive ? 'active' : ''}`}
              onClick={onClick}
              key={c.id}
            >
              <div className={`color-peek ${isEnabled ? 'enabled' : 'disabled'}`} style={isEnabled ? { filter: props.activeComponentCSS && props.activeComponentCSS[c.id]?.css.filter } : {}} />
              <div className="names">
                <div className="part-name">{c.name}</div>
                <div className="part-variant">{isEnabled ? currentVariant?.name !== c.name ? currentVariant?.name : null : 'Disabled'}</div>
              </div>
            </button>
            <div className={`options${isActive && !collapsed ? ' show' : ''}`}>
              {props.activeComponent?.toggleable && (
                <button
                  className={`button-part ${isEnabled}`}
                  onClick={() => handleOnDisplayChange(props.activeComponent, !isEnabled)}
                >
                  {isEnabled ? `Remove` : `Add`}
                </button>
              )}
              {variants.length > 1 ? (
                <select onChange={(e) => handleOnVariantChange(e.target.value)} defaultValue={currentVariant?.id}>
                  <option disabled>Select {c.name.toLowerCase()} type</option>
                  {variants}
                </select>
              ) : (
                <div className="no-variants">No variants available</div>
              )}

            </div>
          </div>
        )
      })}
      <Modal
        showModal={collapsed}
        onClose={() => {
          setCollapsed(false)
        }}
        uuid={'part-selector'}
        closeText={''}
        noButtons={true}
      >
        <div className="modal-part-selector fullscreen">
          {props.components.map(c => {
            const isActive = c === props.activeComponent
            const onClick = () => {
              if (isActive) {
                setCollapsed(!collapsed)
              } else {
                props.onSetActiveComponent(c)
                setCollapsed(false)
              }
            }

            const isEnabled = props.activeComponentCSS && props.activeComponentCSS[c.id]?.css.display !== 'none' 
            const currentVariant = props.components.find(part => props.activeComponentCSS && part.id === c.id)?.variants.find(variant => props.activeComponentCSS && variant.id === props.activeComponentCSS[c.id].variant.id)

            return (
              <div className={`component-wrapper small ${isActive && !collapsed ? ' active' : ''}`} key={`part-${c.id}`}>
                <button
                  className={`select-button ${isActive ? 'active' : ''}`}
                  onClick={onClick}
                  key={c.id}
                >
                  <div className={`color-peek ${isEnabled ? 'enabled' : 'disabled'}`} style={isEnabled ? { filter: props.activeComponentCSS && props.activeComponentCSS[c.id]?.css.filter } : {}} />
                  <div className="names">
                    <div className="part-name">{c.name}</div>
                    <div className="part-variant">{isEnabled ? currentVariant?.name !== c.name ? currentVariant?.name : null : 'Disabled'}</div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>
      </Modal>
    </div>
  )

  function handleOnVariantChange(variantID: string) {
    props.applyPartPropsChanges({ variant: { id: variantID } })
  }

  function handleOnDisplayChange(part: IGenericPart | undefined, value: boolean) {
    if (part) {
      props.applyPartPropsChanges({ css: { display: value ? 'block' : 'none' } })
    }
  }
}

export default ComponentsList