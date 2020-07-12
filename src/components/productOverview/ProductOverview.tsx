import * as React from 'react'

import Customizer from '../colorCustomizer/ColorCustomizer'
import ComponentsList from '../componentsList/ComponentsList'
import FullscreenDisplay from '../fullscreenDisplay/FullscreenDisplay'
import ImagesCombiner from '../imagesCombiner/ImagesCombiner'

import { IColorProperties, ICSSProperties, IGenericPart, IGenericProduct, IPartPropsCSSProperties, IPartVariant } from '../../@types/types'
import { usePrevious } from '../../hooks/usePrevious'
import { DEFAULT_WHITE } from '../../utils/constants'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'

import Product from '../product/Product'
import './ProductOverview.scss'

interface IProps {
  activeProduct: IGenericProduct | undefined
}

const ProductOverview = (props: IProps) => {
  const previousActiveProduct = usePrevious(props.activeProduct)
  const [activePart, setActivePart] = React.useState<IGenericPart | undefined>()
  const [showFullscreen, setShowFullscreen] = React.useState<{ name: string, user: string } | false>(false)
  const [productName, setProductName] = React.useState<string>('')
  const [creator, setCreator] = React.useState<string>(loadFromLocalStorage('creator', ''))

  React.useEffect(() => {
    if (!previousActiveProduct && !activePart && props.activeProduct?.assets) {
      setActivePart(props.activeProduct.assets[0])
    }
  }, [previousActiveProduct, activePart, setActivePart, props.activeProduct])

  return (
    <Customizer
      allPartProps={loadCSSFromStorage()}
      selectedPart={activePart}
      saveCSSToStorage={saveCSSToStorage}
    >
      {(cssProps, customizers) => showFullscreen ? (
        <FullscreenDisplay 
          activeProduct={props.activeProduct}
          cssProps={cssProps}
          showFullscreen={showFullscreen}
          setShowFullscreen={() => setShowFullscreen(false)}
        />
      ) : (
        <React.Fragment>
          <div className="product-overview">
            <ComponentsList 
              components={props.activeProduct?.assets || []}
              onSetActiveComponent={(ac) => setActivePart(ac)}
              activeComponent={activePart}
              activeComponentCSS={cssProps}
            />
            <div className="product-with-buttons">
              <Product activeProduct={props.activeProduct} cssProps={cssProps} />
              <div className="bottom">
                <ImagesCombiner
                  activeProduct={props.activeProduct}
                  setShowFullscreen={(a) => setShowFullscreen(a)}
                  creator={creator}
                  setCreator={saveCreatorToStorage}
                  productName={productName}
                  setProductName={setProductName}
                />
              </div>
            </div>
            {customizers}
          </div>
          
        </React.Fragment>
      )}
    </Customizer>
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
            console.log(asset.id, partProps)
            partProps[asset.id] = { ...defaultCSS, ...partProps[asset.id] }
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
        [part.id]: { css, variant: { id: variant.id } },
        timestamp: new Date().valueOf()
      })
    }
  }

  function saveCreatorToStorage(c: string) {
    saveToLocalStorage('creator', c)
    setCreator(c)
  }
}

export default ProductOverview