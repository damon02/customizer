import React, { useState } from 'react'
import Modal from '../modal/Modal'

import { IGenericProduct } from '../../@types/types'
import { MEME_MESSAGES } from '../../utils/constants'
import { asyncForEach } from '../../utils/general'
import './ImagesCombiner.scss'

interface IProps {
  activeProduct: IGenericProduct | undefined
  setShowFullscreen: (params: { user: string, name: string }) => void
  creator: string
  setCreator: (c: string) => void
  productName: string
  setProductName: (pn: string) => void
}

const ImagesCombiner = (props: IProps) => {
  const imageMaxWidth = 1000
  const imageMaxHeight = 650
  const canvasWidth = 1337
  const canvasHeight = 900

  const { activeProduct, creator, setCreator, productName, setProductName } = props 
  const accumulatedImages: string[] = []

  const [loading, setLoading] = useState<undefined | number>()
  const [showSaveModal, setShowSaveModal] = useState<false | 'fullscreen' | 'save'>(false)

  return (
    <div className="images-combiner">
      <button onClick={() => setShowSaveModal('fullscreen')}>Fullscreen</button>
      <button onClick={() => setShowSaveModal('save')}>Download as image (BETA)</button>

      <Modal
        showModal={showSaveModal !== false}
        onCancel={() => setShowSaveModal(false)}
        closeText={showSaveModal ===  'save' ? 'Save as PNG' : 'Show fullscreen'}
        onClose={() => {
          if (showSaveModal === 'save') {
            setShowSaveModal(false)
            combineCSSIntoImages()
          } else {
            setShowSaveModal(false)
            props.setShowFullscreen({ user: creator, name: productName })
          }
        }}
        uuid={'saveImageModal'}
        cancelText={'Back to editing'}
      >
        <div className="modal-save-image">
          <div className="inputs">
            <h3>Add your own custom name to the image</h3>
            <input className="input product-name" placeholder={'Model name'} value={productName} onChange={(e) => setProductName(e.target.value)} />
            <input className="input product-name" placeholder={'Your name'} value={creator} onChange={(e) => setCreator(e.target.value)} />
          </div>
          <div className="summary">
            <h3>Your {activeProduct?.type.toLowerCase()}</h3>
            <p>{`${activeProduct?.name} '${productName || 'CONCEPT'}'`}</p>
            <p>{`as imagined by ${creator || 'a fan'}`}</p>
          </div>
          {showSaveModal === 'save' && (
            <div className="beta-notice">
              <h3>Notice</h3>
              <div className="notice">
                Some browsers (Safari/iOS, Opera) will have incorrect color applications. I recommend you to take a screenshot in fullscreen mode instead.
              </div>
            </div>
          )}
        </div>
      </Modal>

      <Modal
        showModal={loading !== undefined}
        onClose={() => setLoading(undefined)}
        uuid={'loadingmodal'}
        closeText={'Hide'}
      >
        <div className="modal-save-image">
          <h3>Putting image together...</h3>
          <div className="summary">
            <div className="meme">{MEME_MESSAGES[Math.floor((new Date().getSeconds() / 60) * MEME_MESSAGES.length) + 1]}</div>
            {loading && activeProduct?.assets && Math.round(loading / activeProduct?.assets?.length * 100)}%
          </div>
        </div>
      </Modal>
    </div>
  )

  function combineCSSIntoImages() {
    // Get all individual parts
    const productParts = Array.from(document.getElementsByClassName('product-part-image'))
      .sort((a, b) => Number(getComputedStyle(a).zIndex) - Number(getComputedStyle(b).zIndex))

    const w = getComputedStyle(productParts[0]).maxWidth
    const h = getComputedStyle(productParts[0]).maxHeight
    const dimensionsImage = { width: Number(w.substring(0, w.length - 2)), height: Number(h.substring(0, h.length - 2)) }
    
    setLoading(0)
    // Iterate over each part
    try {
      productParts.forEach((s, i) => {
        // Create a new canvas for this particular part
        const canvas = document.createElement(`canvas`)
        const ctx = canvas.getContext('2d')
        canvas.id = `canvas-${i}`
        canvas.width = canvasWidth
        canvas.height = canvasHeight
    
        if (!ctx) {
          console.error('no ctx')
          return
        }
    
        // Apply the CSS styling to this canvas element
        const partImage = new Image(dimensionsImage.width, dimensionsImage.height)
        const backgroundImageSource = getComputedStyle(s).backgroundImage
        const bgURL = backgroundImageSource.substring(5, backgroundImageSource.length - 2)
        ctx.filter = getComputedStyle(s).filter
      
        partImage.src = bgURL
        partImage.onload = (e) => {
          // Draw the image including the CSS filter
          if (getComputedStyle(s).display !== 'none') {
            ctx.drawImage(partImage, (canvasWidth - dimensionsImage.width) / 2, (canvasHeight - dimensionsImage.height) / 2, dimensionsImage.width, dimensionsImage.height)
            accumulatedImages.push(canvas.toDataURL('image/png'))
    
            // READY, all products have been loaded
            if ((i + 1) === productParts.length) {
              mergeImages(dimensionsImage.width, dimensionsImage.height)
            }
          }
        }
      })
    } catch (error) {
      alert(error)
    }
  }

  function mergeImages(width: number, height: number) {
    const previousCanvas = document.getElementById('final-canvas-drawing')
    if (previousCanvas) {
      previousCanvas.remove()
    }

    const now = new Date()
    const filename = `CUSTOMIZER_${now.toLocaleDateString()}-${now.toLocaleTimeString()}-${activeProduct?.id}_${productName || 'CONCEPT'}`

    const finalCanvas = document.createElement(`canvas`)
    const finalContext = finalCanvas.getContext('2d')
    finalCanvas.id = 'final-canvas-drawing'
    finalCanvas.width = canvasWidth
    finalCanvas.height = canvasHeight

    try {
      if (finalContext) {
        // Add background
        finalContext.fillStyle = '#2a2a2a'
        finalContext.fillRect(0, 0, canvasWidth, canvasHeight)
  
        // Add brand name text
        finalContext.fillStyle = '#fff'
        finalContext.font = '800 48px Chakra Petch'
        finalContext.textAlign = 'center'
        finalContext.fillText(`${activeProduct?.name} '${productName || 'CONCEPT'}'`, canvasWidth / 2, 80)
        
        // Add username to image
        finalContext.fillStyle = '#fff'
        finalContext.font = '400 24px Chakra Petch'
        finalContext.textAlign = 'center'
        finalContext.fillText(`as imagined by ${creator || 'a fan'}`, canvasWidth / 2, 110)
        
        // Add watermark
        finalContext.fillStyle = '#1C1C1E'
        finalContext.fillRect(0, canvasHeight - 52, canvasWidth, 52)
  
        // Add circle
        finalContext.fillStyle = '#d30f0f'
        finalContext.arc(26, canvasHeight - 26, 16, 0, 6)
        finalContext.fill()
  
        // Add text
        finalContext.fillStyle = '#fff'
        finalContext.textAlign = 'left'
        finalContext.font = '700 18px Chakra Petch'
        finalContext.fillText('CUSTOMIZER', 52, canvasHeight - 20)
  
        // Add URL
        finalContext.fillStyle = '#fff'
        finalContext.textAlign = 'right'
        finalContext.font = '400 14px Chakra Petch'
        finalContext.fillText(`Design your dream shoes!`, canvasWidth - 20, canvasHeight - 30)
        finalContext.textAlign = 'right'
        finalContext.fillStyle = '#fff'
        finalContext.fillText(`https://damon02.github.io/customizer/`, canvasWidth - 20, canvasHeight - 10)
        finalContext.textAlign = 'center'
        finalContext.fillStyle = '#fff'
        finalContext.fillText(`Made with love`, canvasWidth / 2, canvasHeight - 30)
        finalContext.textAlign = 'center'
        finalContext.fillStyle = '#fff'
        finalContext.fillText(`https://damon.dev`, canvasWidth / 2, canvasHeight - 10)
      }


      const waitFor = (ms: number) => new Promise(r => setTimeout(r, ms))
    
      asyncForEach<string>(accumulatedImages, async (imgString, j) => {
        await waitFor(150)

        if (imgString) {
          const i = new Image(width, height)
          i.src = imgString

          const dx = (canvasWidth - imageMaxWidth) / 2
          const dy = (canvasHeight - imageMaxHeight) / 2
          
          i.onload = () => {
            setLoading(j + 1)
            finalContext?.drawImage(i, dx, dy, imageMaxWidth, imageMaxHeight)
            
            
            if ((j + 1) === accumulatedImages.length) {
              if (finalContext) {
                finalContext.fillStyle = 'rgba(255,255,255,0.05)'
                finalContext.fillText(`fake product, don't fall for it :)`, canvasWidth / 2, canvasHeight / 3)
  
                // Enable for debug
                // document.body.append(finalContext.canvas)
              }
              // READY TO DOWNLOAD
              const URL = finalCanvas.toDataURL('image/png')
              const anchor = document.createElement('a')
              anchor.href = URL
              anchor.setAttribute('download', filename)
  
              anchor.click()
  
              setLoading(undefined)
              setProductName('')
            }
          }
        }
      })
    } catch (error) {
      alert(error)
    }
  }
}

export default ImagesCombiner