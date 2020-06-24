import * as React from 'react'

import { IGenericPart, USER_PRESETS_KEY } from '../../utils/constants'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import './ColorCustomizer.scss'
import ColorPickerList from './colorPickerList/ColorPickerList'

interface IProps {
  selectedPart: IGenericPart | undefined
  allPartsCSS: { [partKey: string]: IColorProperties } | undefined
  saveCSSToStorage: (css: IColorProperties, part: IGenericPart) => void
  children: (css: { [partKey: string]: { filter: string } }, slider: React.ReactNode) => React.ReactNode
}

export interface IColorProperties {
  saturation: number
  hue: number
  sepia: number
  brightness: number
}

const ColorCustomizer = (props: IProps) => {
  const { selectedPart, saveCSSToStorage, allPartsCSS } = props

  const [saturation, setSaturation] = React.useState<number>(1)
  const [hue, setHue] = React.useState<number>(0)
  const [sepia, setSepia] = React.useState<number>(0)
  const [brightness, setBrightness] = React.useState<number>(1)

  const [userPresets, setUserPresets] = React.useState<IColorProperties[]>(loadFromLocalStorage(USER_PRESETS_KEY, []) as IColorProperties[])
  const allPartsCSSFilter: { [partKey: string]: { filter: string } } = {}

  if (props.allPartsCSS) {
    Object.keys(props.allPartsCSS).forEach(partKey => {
      if (partKey === selectedPart?.id) {
        const currCSS = combineIntoCSSFilter({ saturation, hue, sepia, brightness })

        allPartsCSSFilter[partKey] = currCSS
      } else {
        const css = props.allPartsCSS ? combineIntoCSSFilter(props.allPartsCSS[partKey]) : undefined

        if (css) {
          allPartsCSSFilter[partKey] = css
        }
      }

    })
  }

  React.useEffect(() => {
    if (selectedPart) {
      saveCSSToStorage({ saturation, hue, sepia, brightness }, selectedPart)
    }
  }, [saturation, hue, sepia, brightness, selectedPart, saveCSSToStorage])

  React.useEffect(() => {
    if (selectedPart && allPartsCSS && allPartsCSS[selectedPart.id]) {
      const properties = allPartsCSS[selectedPart.id]
      setSaturation(properties.saturation)
      setHue(properties.hue)
      setSepia(properties.sepia)
      setBrightness(properties.brightness)
    }
  }, [selectedPart])


  return (
    <React.Fragment>
      {props.children(
        allPartsCSSFilter, (
          <div className="color-picker">
            <React.Fragment>
              <div className="color-customizer">
                <h4 className="selected-item">{props.selectedPart?.name || 'Choose a part of the shoe at the bottom to customize'}</h4>
                {props.selectedPart && (
                  <React.Fragment>
                    <GenericSlider selectedPart={selectedPart} name="Hue" min={0} max={360} value={hue} onChange={(e) => setHue(e)} />
                    <GenericSlider selectedPart={selectedPart} name="Saturation" min={0} max={15} value={saturation} onChange={(e) => setSaturation(e)} />
                    <GenericSlider selectedPart={selectedPart} name="Sepia" min={0} max={0.5} value={sepia} onChange={(e) => setSepia(e)} />
                    <GenericSlider selectedPart={selectedPart} name="Brightness" min={0.2} max={1.1} value={brightness} onChange={(e) => setBrightness(e)} />
                    <button className="button small" onClick={() => savePresetToStorage()}>Save color preset</button>
                  </React.Fragment>
                )}
              </div>
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
            </React.Fragment>
        </div>
      ))}
    </React.Fragment>
  )

  function combineIntoCSSFilter(x: IColorProperties) {
    return { filter: `saturate(${x.saturation}) hue-rotate(${x.hue}deg) sepia(${x.sepia}) brightness(${x.brightness})` }
  }

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