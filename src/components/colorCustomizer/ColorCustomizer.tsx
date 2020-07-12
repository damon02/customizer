import * as React from 'react'

import GenericSlider from '../slider/Slider'
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
import { combineIntoCSS, combineIntoCSSFilter } from '../../utils/css'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import ComponentOptions from '../componentOptions/ComponentOptions'
import './ColorCustomizer.scss'

interface IProps {
  selectedPart: IGenericPart | undefined
  allPartProps: IPartPropsCSSProperties | undefined
  saveCSSToStorage: (css: ICSSProperties, variant: IPartVariant, part: IGenericPart) => void
  children: (
    partProps: IPartPropsExposedCSS, 
    customizers: React.ReactNode
  ) => React.ReactNode
}

type IActiveTab = 'options' | 'colorCustomizer' | 'colorPicker'

const Customizer = (props: IProps) => {
  const { selectedPart, saveCSSToStorage, allPartProps } = props

  const [activeTab, setActiveTab] = React.useState<IActiveTab>('colorCustomizer')

  const [selectedVariant, setVariant] = React.useState<IPartVariant | undefined>(selectedPart?.variants[0])
  const [saturation, setSaturation] = React.useState<number>(1)
  const [hue, setHue] = React.useState<number>(0)
  const [sepia, setSepia] = React.useState<number>(0)
  const [brightness, setBrightness] = React.useState<number>(1)
  const [display, setDisplay] = React.useState<'none' | 'block'>('block')

  const [userPresets, setUserPresets] = React.useState<IColorProperties[]>(loadFromLocalStorage(USER_PRESETS_KEY, []) as IColorProperties[])
  const cssProps: IPartPropsExposedCSS = {}

  // Prepare CSS to expose for rendering
  if (props.allPartProps) {
    Object.keys(props.allPartProps).forEach(partKey => {
      // Check if selectedPart is equal to partKey, apply current changes if so
      if (partKey === selectedPart?.id) {
        const currCSS = combineIntoCSS({ saturation, hue, sepia, brightness, display })
        const currentVariant = selectedVariant || selectedPart.variants[0]

        cssProps[partKey] = { css: currCSS, variant: currentVariant }
      } else {
        // Apply changes from storage
        const css = props.allPartProps && props.allPartProps[partKey].css 
          ? combineIntoCSS(props.allPartProps[partKey].css) 
          : undefined

        const variant = props.allPartProps 
          ? props.allPartProps[partKey].variant
          : selectedPart?.variants[0]

        if (css && variant) {
          cssProps[partKey] = { css, variant }
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
    if (selectedPart && allPartProps && allPartProps[selectedPart.id]?.css) {
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
        cssProps, (
          <div className="customizer">
            <div className={`tab-content options${activeTab === 'options' ? ' show' : ''}`}>
              <ComponentOptions
                cssProps={cssProps}
                selectedPart={selectedPart}
                applyPartPropsChanges={applyPartPropsChanges}
              />
            </div>

            <div className={`tab-content color-customizer${activeTab === 'colorCustomizer' ? ' show' : ''}`}>
              <GenericSlider
                selectedPart={selectedPart}
                name="Hue"
                min={0}
                max={360}
                value={hue}
                onChange={(e) => setHue(e)}
                cssFilter={combineIntoCSSFilter({ saturation, brightness, sepia })}
              />
              <GenericSlider
                selectedPart={selectedPart}
                name="Saturation"
                min={0}
                max={2}
                value={saturation}
                onChange={(e) => setSaturation(e)}
                cssFilter={combineIntoCSSFilter({ hue, brightness: brightness > 1 ? 1 : brightness, sepia, saturation: 2 })}
              />
              <GenericSlider
                selectedPart={selectedPart}
                name="Brightness"
                min={0.2}
                max={1.1}
                value={brightness}
                onChange={(e) => setBrightness(e)}
                cssFilter={combineIntoCSSFilter({ hue, saturation, sepia })}
              />
              <button className="button small save-preset" onClick={() => savePresetToStorage()}>Save color preset</button>
            </div>

            <div className={`tab-content color-picker-list${activeTab === 'colorPicker' ? ' show' : ''}`}>
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
            </div>

            <div className="tabs">
              <button
                className={`tab ${activeTab === 'colorCustomizer' ? ' active' : ''}`}
                onClick={() => setActiveTab('colorCustomizer')}
              >
                Custom color
              </button>
              <button
                className={`tab ${activeTab === 'colorPicker' ? ' active' : ''}`}
                onClick={() => setActiveTab('colorPicker')}
              >
                Preset colors
              </button>
              <button
                className={`tab ${activeTab === 'options' ? ' active' : ''}`}
                onClick={() => setActiveTab('options')}
              >
                Options
              </button>
            </div>
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

  function applyPartPropsChanges(changes: { css?: IOptionalCSSProperties, variant?: { id: string } }) {
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

export default Customizer