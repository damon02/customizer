import * as React from 'react'

import ColorCustomizer, { IColorProperties } from '../colorCustomizer/ColorCustomizer'
import ComponentsList from '../componentsList/ComponentsList'

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
            <div className="overview-row">
              <div className="left"/>
              <div className="shoe-canvas-wrapper">
                <div className="shoe-canvas" id="img-src">
                  <div className="border-cover"/>
                  {props.activeShoe?.assets?.map((part, key) => (
                    <img
                      alt={''}
                      key={`${props.activeShoe?.name}-${part.id}`}
                      className={`shoe-part-image ${part.id}`}
                      id={`shoe-img`}
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
                </div>
              </div>
              <div className="right">
                {sliders}
              </div>
            </div>
            
          </React.Fragment>
        )}
      </ColorCustomizer>
    </div>
  )

  function loadCSSFromStorage() {
    if (props.activeShoe) {
      const css = loadFromLocalStorage(props.activeShoe.id, null)

      if (!css) {
        const defaultCSS = { 'saturation': 1, 'hue': 0, 'sepia': 0, 'brightness': 1 }
        const newCSS: { [part: string]: IColorProperties } = {}

        props.activeShoe.assets?.forEach((asset, i) => {
          newCSS[asset.id] = defaultCSS
        })

        saveToLocalStorage(props.activeShoe.id, newCSS)

        return newCSS
      } else {
        return css
      }
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