import * as React from 'react'
import pjson from '../../../package.json'

import ColorCustomizer from '../colorCustomizer/ColorCustomizer'
import ComponentsList from '../componentsList/ComponentsList'

import { IColorProperties, ICSSProperties, IGenericPart, IGenericProduct, IPartPropsCSSProperties, IPartVariant } from '../../@types/types'
import { usePrevious } from '../../hooks/usePrevious'
import { DEFAULT_WHITE } from '../../utils/constants'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import ImagesCombiner from '../imagesCombiner/ImagesCombiner'
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
    <div className="product-overview">
      <ColorCustomizer
        allPartProps={loadCSSFromStorage()}
        selectedPart={activePart}
        saveCSSToStorage={saveCSSToStorage}
      >
        {(cssProps, sliders, applyPartPropsChanges) => (
          <React.Fragment>
            <div className="overview-row">
              <ComponentsList 
                components={props.activeProduct?.assets || []}
                onSetActiveComponent={(ac) => setActivePart(ac)}
                activeComponent={activePart}
                activeComponentCSS={cssProps}
                applyPartPropsChanges={(changes) => applyPartPropsChanges(changes)}
              />
              <div className="product-canvas-wrapper">
                <div className="product-canvas" id="img-src">
                  <div className="border-cover"/>
                  <div className="bruh">{pjson.homepage}</div>
                  {props.activeProduct?.assets?.map((part) => { 
                    const variantID = cssProps[part.id]?.variant.id
                    const variantImage = part.variants.find(p => p.id === variantID)?.file || part.variants[0].file

                    return (
                      <img
                        alt={''}
                        key={`${props.activeProduct?.name}-${part.id}`}
                        className={`product-part-image ${part.id}`}
                        id={`product-img ${part.id}`}
                        style={{
                          ...cssProps[part.id]?.css,
                          zIndex: part.zindex,
                          backgroundImage: `url(${variantImage})`,
                        }}
                      />
                    )
                  })}
                </div>
                <div className="bottom">
                  <ImagesCombiner activeProduct={props.activeProduct} />
                </div>
              </div>
              {sliders}
            </div>
            
          </React.Fragment>
        )}
      </ColorCustomizer>
    </div>
  )

  function loadCSSFromStorage() {
    const defaultCSS: ICSSProperties = { ...DEFAULT_WHITE.values, display: 'block' }

    if (props.activeProduct) {
      const partProps = loadFromLocalStorage(props.activeProduct.id, null) as IPartPropsCSSProperties

      const defaultVariants = {}
      // Set default variants for each part
      props.activeProduct.assets?.forEach(part => {
        defaultVariants[part.id] = { id: part.variants[0].id }
      })    

      if (!partProps) {
        const newCSS: IPartPropsCSSProperties = {}

        props.activeProduct.assets?.forEach((part, i) => {
          newCSS[part.id] = {
            css: part.default || defaultCSS,
            variant: defaultVariants[part.id],
          }
        })

        saveToLocalStorage(props.activeProduct.id, newCSS)

        return newCSS
      } else {
        // Check if all keys are present, no new ones have been added
        let edited = false
        props.activeProduct.assets?.forEach((asset, i) => {
          if (!partProps[asset.id] || Object.keys(partProps[asset.id]).length !== Object.keys(defaultCSS).length) {
            // Existing object has been extended, edit saved CSS
            // partProps.css[asset.id] = { ...defaultCSS, ...partProps[asset.id] }
            edited = true
          }
        })
        
        if (edited) {
          saveToLocalStorage(props.activeProduct.id, partProps)
        }

        return partProps
      }
    } else {
      return undefined
    }
  }

  function saveCSSToStorage(css: IColorProperties, variant: IPartVariant, part: IGenericPart) {
    if (props.activeProduct && variant) {
      const originalSaved = loadFromLocalStorage(props.activeProduct?.id, {})
  
      saveToLocalStorage(props.activeProduct.id, {
        ...originalSaved,
        [part.id]: { css, variant: { id: variant.id } }
      })
    }
  }
}

export default ProductOverview