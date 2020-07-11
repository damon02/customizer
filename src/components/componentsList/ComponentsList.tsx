import * as React from 'react'

import Modal from '../modal/Modal'

import { IGenericPart, IPartPropsExposedCSS } from '../../@types/types'
import { sortByKey } from '../../utils/general'
import './ComponentsList.scss'

interface IProps {
  components: IGenericPart[]
  activeComponent: IGenericPart | undefined
  activeComponentCSS: IPartPropsExposedCSS | undefined
  onSetActiveComponent: (activeComponent: IGenericPart | undefined) => void
}

const ComponentsList = (props: IProps) => {
  const { components, activeComponent, activeComponentCSS, onSetActiveComponent } = props
  const [collapsed, setCollapsed] = React.useState(false)

  return (
    <div className="components-list">
      {sortByKey(components, 'name').map(c => {
        const isActive = c === activeComponent
        const onClick = () => {
          if (isActive) {
            setCollapsed(!collapsed)
          } else {
            onSetActiveComponent(c)
            setCollapsed(false)
          }
        }

        const isEnabled = activeComponentCSS && activeComponentCSS[c.id]?.css.display !== 'none' 
        const currentVariant = components.find(part => activeComponentCSS && part.id === c.id)?.variants
          .find(variant => activeComponentCSS && variant.id === activeComponentCSS[c.id].variant.id)

        return (
          <div className={`component-wrapper${isActive && !collapsed ? ' active' : ''}`} key={`part-${c.id}`}>
            <button
              className={`select-button ${isActive ? 'active' : ''}`}
              onClick={onClick}
              key={c.id}
            >
              <div className={`color-peek ${isEnabled ? 'enabled' : 'disabled'}`} style={isEnabled ? { filter: activeComponentCSS && activeComponentCSS[c.id]?.css.filter } : {}} />
              <div className="names">
                <div className="part-name">{c.name}</div>
                <div className="part-variant">{isEnabled ? currentVariant?.name !== c.name ? currentVariant?.name : null : 'Disabled'}</div>
              </div>
            </button>
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
          {components.map(c => {
            const isActive = c === activeComponent
            const onClick = () => {
              if (isActive) {
                setCollapsed(!collapsed)
              } else {
                onSetActiveComponent(c)
                setCollapsed(false)
              }
            }

            const isEnabled = activeComponentCSS && activeComponentCSS[c.id]?.css.display !== 'none' 
            const currentVariant = components.find(part => activeComponentCSS && part.id === c.id)?.variants
              .find(variant => activeComponentCSS && variant.id === activeComponentCSS[c.id].variant.id)

            return (
              <div className={`component-wrapper small ${isActive && !collapsed ? ' active' : ''}`} key={`part-${c.id}`}>
                <button
                  className={`select-button ${isActive ? 'active' : ''}`}
                  onClick={onClick}
                  key={c.id}
                >
                  <div className={`color-peek ${isEnabled ? 'enabled' : 'disabled'}`} style={isEnabled ? { filter: activeComponentCSS && activeComponentCSS[c.id]?.css.filter } : {}} />
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
}

export default ComponentsList