import React from 'react'
import { Handles, Rail, Slider } from 'react-compound-slider'
import { Handle, SliderRail } from './sliderComponents'

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

  const sliderStyle = {
    position: 'relative' as 'relative',
    width: '100%',
  }

  const domain = [
    (overrides && overrides[props.name.toLowerCase()]?.min) || props.min,
    (overrides && overrides[props.name.toLowerCase()]?.max) || props.max,
  ]

  return (
    <div className={`slider item ${props.name.toLowerCase()}`}>
      <span>{props.name} ({props.value}) </span>
      <Slider
        rootStyle={sliderStyle}
        domain={domain} // [min, max]
        values={[props.value]} // slider values
        onUpdate={(e) => props.onChange(Number(e[0].toPrecision(3)))}
        step={0.01}
      >
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={domain}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
      </Slider>
    </div>
  )
}

export default GenericSlider