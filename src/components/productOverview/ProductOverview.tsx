import * as React from 'react'

import ColorCustomizer from '../colorCustomizer/ColorCustomizer'
import ComponentsList from '../componentsList/ComponentsList'

import { IColorProperties, ICSSProperties, IGenericPart, IGenericProduct } from '../../@types/types'
import { usePrevious } from '../../hooks/usePrevious'
import { DEFAULT_WHITE } from '../../utils/constants'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import './ProductOverview.scss'

interface IProps {
  activeProduct: IGenericProduct | undefined
}

const ProductOverview = (props: IProps) => {
  const previousActiveProduct = usePrevious(props.activeProduct)
  const [activePart, setActivePart] = React.useState<IGenericPart | undefined>()

  React.useEffect(() => {
    if (!previousActiveProduct && !activePart && props.activeProduct?.assets) {
      setActivePart(props.activeProduct.assets[0])
    }
  }, [previousActiveProduct, activePart, setActivePart, props.activeProduct])

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
              <div className="left">
                <ComponentsList 
                  components={props.activeProduct?.assets || []}
                  onSetActiveComponent={(ac) => setActivePart(ac)}
                  activeComponent={activePart}
                  activeComponentCSS={cssProps}
                  applyComponentSettings={() => ({})}
                />
              </div>
              <div className="shoe-canvas-wrapper">
                <div className="shoe-canvas" id="img-src">
                  <div className="border-cover"/>
                  {props.activeProduct?.assets?.map((part) => (
                    <img
                      alt={''}
                      key={`${props.activeProduct?.name}-${part.id}`}
                      className={`shoe-part-image ${part.id}`}
                      id={`shoe-img`}
                      style={{
                        ...cssProps[part.id],
                        zIndex: part.zindex,
                        backgroundImage: `url(${part.file})`,
                      }}
                    />
                  ))}
                </div>
                <div className="bottom"/>
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
    const defaultCSS: ICSSProperties = { ...DEFAULT_WHITE.values, display: 'block' }

    if (props.activeProduct) {
      const css = loadFromLocalStorage(props.activeProduct.id, null)

      if (!css) {
        const newCSS: { [part: string]: ICSSProperties } = {}

        props.activeProduct.assets?.forEach((asset, i) => {
          newCSS[asset.id] = defaultCSS
        })

        saveToLocalStorage(props.activeProduct.id, newCSS)

        return newCSS
      } else {
        // Check if all keys are present, no new ones have been added
        let edited = false
        props.activeProduct.assets?.forEach((asset, i) => {
          if (!css[asset.id] || Object.keys(css[asset.id]).length !== Object.keys(defaultCSS).length) {
            // Existing object has been extended, edit saved CSS
            css[asset.id] = { ...defaultCSS, ...css[asset.id] }
            edited = true
          }
        })
        
        if (edited) {
          saveToLocalStorage(props.activeProduct.id, css)
        }

        return css
      }
    } else {
      return undefined
    }
  }

  function saveCSSToStorage(css: IColorProperties, part: IGenericPart) {
    if (props.activeProduct) {
      const originalSaved = loadFromLocalStorage(props.activeProduct?.id, {})
  
      saveToLocalStorage(props.activeProduct.id, {
        ...originalSaved,
        [part.id]: css
      })
    }
  }
}

export default ProductOverview