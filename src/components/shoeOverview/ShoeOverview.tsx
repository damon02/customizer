import * as React from 'react'

import ColorCustomizer from '../colorCustomizer/ColorCustomizer'
import ComponentsList from '../componentsList/ComponentsList'

import { IGenericPart, IShoe } from '../../utils/constants'
import './ShoeOverview.scss'

import sole from '../../assets/350V2/sole complete.png'

interface IProps {
  activeShoe: IShoe | undefined
}

const ShoeOverview = (props: IProps) => {
  const [activePart, setActivePart] = React.useState<IGenericPart | undefined>()

  return (
    <div className="shoe-overview">
      <ColorCustomizer selectedItem={activePart}>
        {(cssProps, sliders) => (
          <React.Fragment>
            <div className="shoe-canvas">
              <img className="sole" src={sole} style={{...cssProps}} />
            </div>
            <div className="bottom">
              <ComponentsList 
                components={props.activeShoe?.assets || []}
                onSetActiveComponent={(ac) => setActivePart(ac)}
                activeComponent={activePart}
              />
              {sliders}
            </div>
          </React.Fragment>
        )}
      </ColorCustomizer>
    </div>
  )
}

export default ShoeOverview