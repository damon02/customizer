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
      <ColorCustomizer selectedPart={activePart}>
        {(cssProps, sliders) => (
          <React.Fragment>
            <div className="shoe-canvas">
              {props.activeShoe?.assets?.map((part, key) => (
                <img
                  key={`${props.activeShoe?.name}-${part.id}`}
                  className={`shoe-part-image ${part.id}`}
                  style={{
                    ...cssProps,
                    zIndex: part.zindex,
                    backgroundImage: `url(${part.file})`
                  }}
                />
              ))}
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