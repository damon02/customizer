import * as React from 'react'

import ColorPickerList from './colorPickerList/ColorPickerList'

import { IColorProperties, ICSSProperties, IExposedCSS, IGenericPart } from '../../@types/types'
import { USER_PRESETS_KEY } from '../../utils/constants'
import { combineIntoCSS } from '../../utils/css'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import './ColorCustomizer.scss'

interface IProps {
  selectedPart: IGenericPart | undefined
  allPartsCSS: { [partKey: string]: ICSSProperties } | undefined
  saveCSSToStorage: (css: ICSSProperties, part: IGenericPart) => void
  children: (css: { [partKey: string]: IExposedCSS }, slider: React.ReactNode) => React.ReactNode
}

const ColorCustomizer = (props: IProps) => {
  const { selectedPart, saveCSSToStorage, allPartsCSS } = props

  const [saturation, setSaturation] = React.useState<number>(1)
  const [hue, setHue] = React.useState<number>(0)
  const [sepia, setSepia] = React.useState<number>(0)
  const [brightness, setBrightness] = React.useState<number>(1)
  const [display, setDisplay] = React.useState<'none' | 'block'>('block')

  const [userPresets, setUserPresets] = React.useState<IColorProperties[]>(loadFromLocalStorage(USER_PRESETS_KEY, []) as IColorProperties[])
  const allPartsCSSFilter: { [partKey: string]: IExposedCSS } = {}

  if (props.allPartsCSS) {
    Object.keys(props.allPartsCSS).forEach(partKey => {
      if (partKey === selectedPart?.id) {
        const currCSS = combineIntoCSS({ saturation, hue, sepia, brightness, display })

        allPartsCSSFilter[partKey] = currCSS
      } else {
        const css = props.allPartsCSS ? combineIntoCSS(props.allPartsCSS[partKey]) : undefined

        if (css) {
          allPartsCSSFilter[partKey] = css
        }
      }

    })
  }

  React.useEffect(() => {
    if (selectedPart) {
      saveCSSToStorage({ saturation, hue, sepia, brightness, display }, selectedPart)
    }
  }, [saturation, hue, sepia, brightness, selectedPart, display, saveCSSToStorage])

  React.useEffect(() => {
    if (selectedPart && allPartsCSS && allPartsCSS[selectedPart.id]) {
      const properties = allPartsCSS[selectedPart.id]
      setSaturation(properties.saturation)
      setHue(properties.hue)
      setSepia(properties.sepia)
      setBrightness(properties.brightness)
      setDisplay(properties.display)
    }
  }, [selectedPart, allPartsCSS])


  return (
    <React.Fragment>
      {props.children(
        allPartsCSSFilter, (
          <div className="color-picker">
            <React.Fragment>
              <div className="color-customizer">
                <div className="selected-item">
                  <h3>{props.selectedPart?.name || 'Choose a part of the shoe at the bottom to customize'}</h3>
                  {props.selectedPart && props.selectedPart.toggleable && <button className="button enabled" onClick={() => setDisplay(display === 'block' ? 'none' : 'block')}>{display === 'none' ? 'Add' : 'Remove'}</button>}
                </div>

                {props.selectedPart && display && (
                  <React.Fragment>
                    <GenericSlider selectedPart={selectedPart} name="Hue" min={0} max={360} value={hue} onChange={(e) => setHue(e)} />
                    <GenericSlider selectedPart={selectedPart} name="Saturation" min={0} max={15} value={saturation} onChange={(e) => setSaturation(e)} />
                    <GenericSlider selectedPart={selectedPart} name="Sepia" min={0} max={0.5} value={sepia} onChange={(e) => setSepia(e)} />
                    <GenericSlider selectedPart={selectedPart} name="Brightness" min={0.2} max={1.1} value={brightness} onChange={(e) => setBrightness(e)} />
                    <button className="button small" onClick={() => savePresetToStorage()}>Save color preset</button>
                  </React.Fragment>
                )}
              </div>
              {display && (
                <ColorPickerList 
                  selectedPart={props.selectedPart}
                  setProperties={(cp) => {
                    setHue(cp.hue)
                    setBrightness(cp.brightness)
                    setSaturation(cp.saturation)
                    setSepia(cp.sepia)
                  }}
                  userPresets={userPresets}
                  setUserPresets={setUserPresets}
                />
              )}
            </React.Fragment>
        </div>
      ))}
    </React.Fragment>
  )

  function savePresetToStorage() {
    const presets = loadFromLocalStorage(USER_PRESETS_KEY, [])
    presets.push({ sepia, saturation, brightness, hue })

    saveToLocalStorage(USER_PRESETS_KEY, presets)
    setUserPresets([...presets])
  }
}

const GenericSlider = (props: { selectedPart: IGenericPart | undefined, name: string, value: number, min: number, max: number, onChange: (v: number) => void }) => {
  const overrides = props.selectedPart?.overrides

  return (
    <div className={`item ${props.name.toLowerCase()}`}>
      <span>{props.name} ({props.value}) </span>
      <input 
        type="range"
        min={(overrides && overrides[props.name.toLowerCase()]?.min) || props.min}
        max={(overrides && overrides[props.name.toLowerCase()]?.max) || props.max}
        step="0.01"
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="slider" 
      />
    </div>
  )
}

export default ColorCustomizer