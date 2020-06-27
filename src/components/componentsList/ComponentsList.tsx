import * as React from 'react'

import { IExposedCSS, IGenericPart } from '../../@types/types'
import './ComponentsList.scss'

interface IProps {
  components: IGenericPart[]
  activeComponent: IGenericPart | undefined
  activeComponentCSS: { [partKey: string]: IExposedCSS } | undefined
  onSetActiveComponent: (activeComponent: IGenericPart | undefined) => void

  applyComponentSettings: () => void
}

const ComponentsList = (props: IProps) => {
  return (
    <div className="components-list">
      {props.components.map(c => {
        const isActive = c === props.activeComponent
        const onClick = () => props.onSetActiveComponent(c)
        const isEnabled = props.activeComponent?.toggleable
          ? props.activeComponentCSS && props.activeComponentCSS[props.activeComponent.id].display === 'block'
          : undefined

        return (
          <div className="component-wrapper" key={`part-${c.id}`}>
            <button
              className={`select-button ${isActive ? 'active' : ''}`}
              onClick={onClick}
              key={c.id}
            >
              {c.name}
            </button>
            <div className={`options${isActive ? ' show' : ''}`}>
              {props.activeComponent?.toggleable && (
                <button
                  className={`button-part ${isEnabled}`}
                  onClick={() => ({})}
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
}

export default ComponentsList