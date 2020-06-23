import * as React from 'react'

import { IGenericPart } from '../../utils/constants'
import './ColorCustomizer.scss'

interface IProps {
  selectedPart: IGenericPart | undefined
  children: (cssString: { filter: string }, slider: React.ReactNode) => React.ReactNode
}

const ColorCustomizer = (props: IProps) => {
  const [saturation, setSaturation] = React.useState<number>(1)
  const [hue, setHue] = React.useState<number>(0)
  const [sepia, setSepia] = React.useState<number>(0)
  const [brightness, setBrightness] = React.useState<number>(1)

  const slider = props.selectedPart && (
    <div className="color-customizer">
      <h4 className="selected-item">{props.selectedPart.name}</h4>
      <GenericSlider name="Hue" min={0} max={360} value={hue} onChange={(e) => setHue(e)} />
      <GenericSlider name="Saturation" min={0} max={15} value={saturation} onChange={(e) => setSaturation(e)} />
      <GenericSlider name="Sepia" min={0} max={0.5} value={sepia} onChange={(e) => setSepia(e)} />
      <GenericSlider name="Brightness" min={0.8} max={1.1} value={brightness} onChange={(e) => setBrightness(e)} />
    </div>
  )

  return (
    <React.Fragment>
      {props.children(combineIntoCSSFilter(), slider)}
    </React.Fragment>
  )

  function combineIntoCSSFilter() {
    return { filter: `saturate(${saturation}) hue-rotate(${hue}deg) sepia(${sepia}) brightness(${brightness})` }
  }
}

const GenericSlider = (props: { name: string, value: number, min: number, max: number, onChange: (v: number) => void }) => {
  return (
    <div className={`item ${props.name.toLowerCase()}`}>
      <span>{props.name}</span>
      <input 
        type="range"
        min={props.min}
        max={props.max}
        step="0.01"
        value={props.value}
        onChange={(e) => props.onChange(Number(e.target.value))}
        className="slider" 
      />
    </div>
  )
}

export default ColorCustomizer