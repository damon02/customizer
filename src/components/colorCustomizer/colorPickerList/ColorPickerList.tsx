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
        <h4>Basic colors</h4>
        <div className="column">
          {selectedPart.presets.map(p => (
            <button
              key={p.name}
              className="preset-button"
              style={{ backgroundColor: p.cssString }}
              onClick={() => setProperties(p.values)}
            />
          ))}
        </div>
        {userPresets.length > 0 && <h4>Saved color presets</h4>}
        <div className="column">
          {userPresets.map((p, i) => (
            <div className="row user-preset" key={i}>
              <button
                className="preset-button"
                style={{ backgroundColor: 'red', filter: combineIntoCSSFilter(p) }}
                onClick={() => setProperties(p)}
              />
              <button className="button delete" onClick={() => deleteFromPresets(i)}>x</button>
            </div>
          ))}
        </div>
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