import React from 'react'

import pjson from '../../../package.json'
import { IGenericProduct, IPartPropsExposedCSS } from '../../@types/types'
import { MEME_MESSAGES } from '../../utils/constants'
import Product from '../product/Product'

import './FullscreenDisplay.scss'

interface IProps {
  activeProduct?: IGenericProduct
  cssProps: IPartPropsExposedCSS
  showFullscreen: { name: string, user: string }
  setShowFullscreen: () => void
}

const FullscreenDisplay = (props: IProps) => {
  const { activeProduct, cssProps, showFullscreen, setShowFullscreen } = props
  return (
    <div 
      className="fullscreen-overview"
      onClick={setShowFullscreen}
    >
      <div className="overview-row">
        <div className="info">
          <div className="product-name">{activeProduct?.brand} {activeProduct?.name} '{showFullscreen.name || 'CONCEPT'}'</div>
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
        <Product
          activeProduct={activeProduct}
          cssProps={cssProps}
        />
      </div>
    </div>
  )
}

export default FullscreenDisplay