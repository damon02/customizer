import React from 'react'
import Slider from 'react-input-slider'

import { IGenericPart } from '../../@types/types'
import './Slider.scss'

interface IProps {
  selectedPart: IGenericPart | undefined
  name: string
  value: number
  min: number
  max: number
  onChange: (v: number) => void
}

const GenericSlider = (props: IProps ) => {
  const overrides = props.selectedPart?.overrides

  return (
    <div className={`slider item ${props.name.toLowerCase()}`}>
      <span>{props.name} ({props.value}) </span>
      <Slider
        xmin={(overrides && overrides[props.name.toLowerCase()]?.min) || props.min}
        xmax={(overrides && overrides[props.name.toLowerCase()]?.max) || props.max}
        xstep={0.01}
        axis="x"
        x={props.value}
        onChange={(e) => props.onChange(Number(e.x.toPrecision(4)))}
      />
    </div>
  )
}

export default GenericSlider