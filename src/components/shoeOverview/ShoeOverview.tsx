import * as React from 'react'

import ColorCustomizer, { IColorProperties } from '../colorCustomizer/ColorCustomizer'
import ComponentsList from '../componentsList/ComponentsList'

import { useLocalStorage } from '../../hooks/useLocalStorage'
import { IGenericPart, IShoe } from '../../utils/constants'

import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import './ShoeOverview.scss'

interface IProps {
  activeShoe: IShoe | undefined
}

const ShoeOverview = (props: IProps) => {
  const [activePart, setActivePart] = React.useState<IGenericPart | undefined>()

  return (
    <div className="shoe-overview">
      <ColorCustomizer
        allPartsCSS={loadCSSFromStorage()}
        selectedPart={activePart}
        saveCSSToStorage={saveCSSToStorage}
      >
        {(cssProps, sliders) => (
          <React.Fragment>
            <div className="shoe-canvas">
              {props.activeShoe?.assets?.map((part, key) => (
                <img
                  key={`${props.activeShoe?.name}-${part.id}`}
                  className={`shoe-part-image ${part.id}`}
                  style={{
                    ...cssProps[part.id],
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

  function loadCSSFromStorage() {
    if (props.activeShoe) {
      return loadFromLocalStorage(props.activeShoe.id)
    } else {
      return undefined
    }
  }

  function saveCSSToStorage(css: IColorProperties, part: IGenericPart) {
    if (props.activeShoe) {
      const originalSaved = loadFromLocalStorage(props.activeShoe?.id, {})
  
      saveToLocalStorage(props.activeShoe.id, {
        ...originalSaved,
        [part.id]: css
      })
    }
  }
}

export default ShoeOverview