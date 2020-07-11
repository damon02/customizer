import React from 'react'

import { IColorProperties, IGenericPart } from '../../../@types/types'
import { USER_PRESETS_KEY } from '../../../utils/constants'
import { combineIntoCSSFilter } from '../../../utils/css'
import { loadFromLocalStorage, saveToLocalStorage } from '../../../utils/localStorage'
import './ColorPickerList.scss'

interface IProps {
  selectedPart: IGenericPart | undefined
  setProperties: (colorProperties: IColorProperties) => void
  userPresets: IColorProperties[]
  setUserPresets: (p: IColorProperties[]) => void
}

const ColorPickerList = (props: IProps) => {
  const { selectedPart, setProperties, userPresets, setUserPresets } = props

  if (selectedPart && selectedPart.presets) {
    return (
      <div className="presets">
        {userPresets.length > 0 && (
          <div className="preset-list">
            <div className="preset-header">Your colors</div>
            {userPresets.map((p, i) => (
              <div className="row user-preset" key={i}>
                <button
                  className="preset-button"
                  style={{ backgroundColor: 'red', filter: combineIntoCSSFilter(p) }}
                  onClick={() => setProperties(p)}
                />
                <button className="button delete" onClick={() => deleteFromPresets(i)}>
                  <i className="fas fa-times" />
                </button>
              </div>
            ))}
          </div>
        )}
        {selectedPart.presets.map((category) => (
          <div className="preset-list" key={category.name}>
            <div className="preset-header">{category.name}</div>
            {category.presets.map(p => (
              <button
                key={p.name}
                className="preset-button"
                style={{ backgroundColor: p.cssString }}
                onClick={() => setProperties(p.values)}
              >
                <div className="text">{p.name}</div>
              </button>
            ))}
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }

  function deleteFromPresets(id: number) {
    const presets: IColorProperties[] = loadFromLocalStorage(USER_PRESETS_KEY, [])
    presets.splice(id, 1)

    saveToLocalStorage(USER_PRESETS_KEY, presets)
    setUserPresets([...presets])
  }
}

export default ColorPickerList