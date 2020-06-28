import * as React from 'react'

import ColorPickerList from './colorPickerList/ColorPickerList'

import { 
  IColorProperties,
  ICSSProperties,
  IGenericPart,
  IOptionalCSSProperties,
  IPartPropsCSSProperties,
  IPartPropsExposedCSS,
  IPartVariant
} from '../../@types/types'
import { USER_PRESETS_KEY } from '../../utils/constants'
import { combineIntoCSS } from '../../utils/css'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import './ColorCustomizer.scss'

interface IProps {
  selectedPart: IGenericPart | undefined
  allPartProps: IPartPropsCSSProperties | undefined
  saveCSSToStorage: (css: ICSSProperties, variant: IPartVariant, part: IGenericPart) => void
  children: (
    partProps: IPartPropsExposedCSS, 
    slider: React.ReactNode, 
    setPartProperties: (changes: { css?: IOptionalCSSProperties, variant?: { id: string } }) => void
  ) => React.ReactNode
}

const ColorCustomizer = (props: IProps) => {
  const { selectedPart, saveCSSToStorage, allPartProps } = props

  const [selectedVariant, setVariant] = React.useState<IPartVariant | undefined>(selectedPart?.variants[0])
  const [saturation, setSaturation] = React.useState<number>(1)
  const [hue, setHue] = React.useState<number>(0)
  const [sepia, setSepia] = React.useState<number>(0)
  const [brightness, setBrightness] = React.useState<number>(1)
  const [display, setDisplay] = React.useState<'none' | 'block'>('block')

  const [userPresets, setUserPresets] = React.useState<IColorProperties[]>(loadFromLocalStorage(USER_PRESETS_KEY, []) as IColorProperties[])
  const allPartsCSSFilter: IPartPropsExposedCSS = {}

  // Prepare CSS to expose for rendering
  if (props.allPartProps) {
    Object.keys(props.allPartProps).forEach(partKey => {
      // Check if selectedPart is equal to partKey, apply current changes if so
      if (partKey === selectedPart?.id) {
        const currCSS = combineIntoCSS({ saturation, hue, sepia, brightness, display })
        const currentVariant = selectedVariant || selectedPart.variants[0]

        allPartsCSSFilter[partKey] = { css: currCSS, variant: currentVariant }
      } else {
        // Apply changes from storage
        const css = props.allPartProps && props.allPartProps[partKey].css 
          ? combineIntoCSS(props.allPartProps[partKey].css) 
          : undefined

        const variant = props.allPartProps 
          ? props.allPartProps[partKey].variant
          : selectedPart?.variants[0]

        if (css && variant) {
          allPartsCSSFilter[partKey] = { css, variant }
        }
      }
    })
  }

  React.useEffect(() => {
    if (selectedPart) {
      saveCSSToStorage({ saturation, hue, sepia, brightness, display }, selectedVariant || selectedPart.variants[0], selectedPart)
    }
  }, [saturation, hue, sepia, brightness, selectedPart, display, selectedVariant, saveCSSToStorage])

  React.useEffect(() => {
    if (selectedPart && allPartProps && allPartProps[selectedPart.id].css) {
      const properties = allPartProps[selectedPart.id].css
      setSaturation(properties.saturation)
      setHue(properties.hue)
      setSepia(properties.sepia)
      setBrightness(properties.brightness)
      setDisplay(properties.display)
      setVariant(allPartProps[selectedPart.id].variant)
    }
  }, [selectedPart, allPartProps])

  return (
    <React.Fragment>
      {props.children(
        allPartsCSSFilter, (
          <div className="color-picker">
            <React.Fragment>
              <div className="color-customizer">
                <div className="selected-item">
                  {props.selectedPart && <h3 className="title">{props.selectedPart.name}</h3>}
                </div>

                {props.selectedPart && display && (
                  <React.Fragment>
                    <GenericSlider selectedPart={selectedPart} name="Hue" min={0} max={360} value={hue} onChange={(e) => setHue(e)} />
                    <GenericSlider selectedPart={selectedPart} name="Saturation" min={0} max={15} value={saturation} onChange={(e) => setSaturation(e)} />
                    <GenericSlider selectedPart={selectedPart} name="Sepia" min={0} max={1} value={sepia} onChange={(e) => setSepia(e)} />
                    <GenericSlider selectedPart={selectedPart} name="Brightness" min={0.2} max={1.1} value={brightness} onChange={(e) => setBrightness(e)} />
                    <button className="button small save-preset" onClick={() => savePresetToStorage()}>Save color preset</button>
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
      ), (changes) => applyPartPropsChanges(changes)
      )}
    </React.Fragment>
  )

  function savePresetToStorage() {
    const presets = loadFromLocalStorage(USER_PRESETS_KEY, [])
    presets.push({ sepia, saturation, brightness, hue })

    saveToLocalStorage(USER_PRESETS_KEY, presets)
    setUserPresets([...presets])
  }

  function applyPartPropsChanges(changes: { css?: IOptionalCSSProperties, variant?: { id: string } }) {
    console.log('Applying changes to', props.selectedPart, changes)
    if (changes.css) {
      // Apply css changes
      if (changes.css.saturation) {
        setSaturation(changes.css.saturation)
      }
      if (changes.css.hue) {
        setHue(changes.css.hue)
      }
      if (changes.css.sepia) {
        setSepia(changes.css.sepia)
      }
      if (changes.css.brightness) {
        setBrightness(changes.css.brightness)
      }
      if (changes.css.display) {
        setDisplay(changes.css.display)
      }
    } else if (changes.variant) {
      const matchedVariant = props.selectedPart?.variants.find(v => v.id === changes.variant?.id)
      if (matchedVariant) {
        setVariant(matchedVariant)
      }
    }
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