import * as React from 'react'
import pjson from '../../../package.json'

import ColorCustomizer from '../colorCustomizer/ColorCustomizer'
import ComponentsList from '../componentsList/ComponentsList'

import { IColorProperties, ICSSProperties, IGenericPart, IGenericProduct, IPartPropsCSSProperties, IPartVariant } from '../../@types/types'
import { usePrevious } from '../../hooks/usePrevious'
import { DEFAULT_WHITE, MEME_MESSAGES } from '../../utils/constants'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import ImagesCombiner from '../imagesCombiner/ImagesCombiner'
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
    <div className={showFullscreen ? 'fullscreen-overview' : 'product-overview'} onClick={() => showFullscreen ? setShowFullscreen(false) : ({})}>
      <ColorCustomizer
        allPartProps={loadCSSFromStorage()}
        selectedPart={activePart}
        saveCSSToStorage={saveCSSToStorage}
      >
        {(cssProps, sliders, applyPartPropsChanges) => showFullscreen ? (
          <div className="overview-row">
            <div className="info">
              <div className="product-name">{props.activeProduct?.brand} {props.activeProduct?.name} '{showFullscreen.name || 'CONCEPT'}'</div>
              <div className="creator">as imagined by {showFullscreen.user || 'a fan'}</div>
            </div>
            <div className="logo-wrapper">
              <div className="logo"/>
              <div className="name">CUSTOMIZER</div>
            </div>
            <div className="share">
              <div className="name">Made with love by damon.dev</div>
              <div className="url">{pjson.homepage}</div>
            </div>
            <div className="hint hideMe">
              <div>{MEME_MESSAGES[Math.floor((new Date().getSeconds() / 60) * MEME_MESSAGES.length) + 1]}</div>
              <div>You can click anywhere on the page to go back.</div>
              <div className="wait">After 3 seconds this will disappear</div>
            </div>
            <div className="product-canvas-wrapper">
              <div
                className="product-canvas"
                id="img-src"
                style={{
                  maxHeight: props.activeProduct?.dimensions.height,
                  maxWidth: props.activeProduct?.dimensions.width,
                }}
              >
                <div
                  className="border-cover" 
                  style={{
                    maxHeight: props.activeProduct?.dimensions.height,
                    maxWidth: props.activeProduct?.dimensions.width
                  }}
                />
                <div className="bruh">{pjson.homepage}</div>
                {props.activeProduct?.assets?.map((part) => { 
                  const variantID = cssProps[part.id]?.variant.id
                  const variant = part.variants.find(p => p.id === variantID) || part.variants[0]

                  return (
                    <img
                      alt={''}
                      key={`${props.activeProduct?.name}-${part.id}`}
                      className={`product-part-image ${part.id}`}
                      id={`product-img ${part.id}`}
                      style={{
                        ...cssProps[part.id]?.css,
                        maxHeight: props.activeProduct?.dimensions.height,
                        maxWidth: props.activeProduct?.dimensions.width,
                        zIndex: variant.zIndex || part.zindex,
                        backgroundImage: `url(${variant.file})`,
                      }}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        ) : (
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
                  <div
                    className="border-cover"
                    style={{
                      maxHeight: props.activeProduct?.dimensions.height,
                      maxWidth: props.activeProduct?.dimensions.width
                    }}
                  />
                  <div className="bruh">{pjson.homepage}</div>
                  {props.activeProduct?.assets?.map((part) => { 
                    const variantID = cssProps[part.id]?.variant.id
                    const variant = part.variants.find(p => p.id === variantID) || part.variants[0]

                    return (
                      <img
                        alt={''}
                        key={`${props.activeProduct?.name}-${part.id}`}
                        className={`product-part-image ${part.id}`}
                        id={`product-img ${part.id}`}
                        style={{
                          ...cssProps[part.id]?.css,
                          maxHeight: props.activeProduct?.dimensions.height,
                          maxWidth: props.activeProduct?.dimensions.width,
                          zIndex: variant.zIndex || part.zindex,
                          backgroundImage: `url(${variant.file})`,
                        }}
                      />
                    )
                  })}
                </div>
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