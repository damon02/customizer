import * as React from 'react'

import { IGenericPart } from '../../@types/types'
import './ComponentsList.scss'

interface IProps {
  components: IGenericPart[]
  activeComponent: IGenericPart | undefined
  onSetActiveComponent: (activeComponent: IGenericPart | undefined) => void
}

const ComponentsList = (props: IProps) => {
  return (
    <div className="shoe-components-list">
      {props.components.map(c => {
        const isActive = c === props.activeComponent
        const onClick = () => props.onSetActiveComponent(isActive ? undefined : c)

        return (
          <button
            className={`button part ${isActive ? 'active' : ''}`}
            onClick={onClick}
            key={c.id}
          >
            {c.name}
          </button>
        )
      })}
    </div>
  )
}

export default ComponentsList