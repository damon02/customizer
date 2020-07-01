import React, { useState } from 'react'
import Modal from '../modal/Modal'

import { IGenericProduct } from '../../@types/types'
import './ImagesCombiner.scss'

interface IProps {
  activeProduct: IGenericProduct | undefined
}

const ImagesCombiner = (props: IProps) => {
  const width = 1241
  const height = 700
  const canvasWidth = 1337
  const canvasHeight = 900

  const { activeProduct } = props 
  const accumulatedImages: string[] = []

  const [showSaveModal, setShowSaveModal] = useState(false)
  const [productName, setProductName] = useState<string>('')
  const [creator, setCreator] = useState<string>('')

  return (
    <div className="images-combiner">
      <button onClick={() => setShowSaveModal(true)}>Download as image</button>

      <Modal
        showModal={showSaveModal}
        onCancel={() => setShowSaveModal(false)}
        closeText={'Save as PNG'}
        onClose={() => {
          setShowSaveModal(false)
          combineCSSIntoImages()
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
        </div>
      </Modal>
    </div>
  )

  function combineCSSIntoImages() {
    // Get all individual parts
    const productParts = Array.from(document.getElementsByClassName('product-part-image'))
    
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
        const partImage = new Image(width, height)
        const backgroundImageSource = getComputedStyle(s).backgroundImage
        const bgURL = backgroundImageSource.substring(5, backgroundImageSource.length - 2)
        ctx.filter = getComputedStyle(s).filter
      
        partImage.src = bgURL
        partImage.onload = (e) => {
          // Draw the image including the CSS filter
          if (getComputedStyle(s).display !== 'none') {
            ctx.drawImage(partImage, (canvasWidth - width) / 2, (canvasHeight - height) / 2, width, height)
            accumulatedImages.push(canvas.toDataURL('image/png'))
    
            // READY, all products have been loaded
            if ((i + 1) === productParts.length) {
              mergeImages()
            }
          }
        }
      })
    } catch (error) {
      alert(error)
    }
  }

  function mergeImages() {
    const previousCanvas = document.getElementById('final-canvas-drawing')
    if (previousCanvas) {
      previousCanvas.remove()
    }

    const now = new Date()
    const filename = `${activeProduct?.id}_${productName || 'CONCEPT'}_${now.toLocaleDateString()}-${now.toLocaleTimeString()}`

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
        finalContext.textAlign = 'center'
        finalContext.font = '400 14px Chakra Petch'
        finalContext.fillText(`Design your dream shoes!`, canvasWidth / 2, canvasHeight - 30)
        finalContext.fillText(`https://damon02.github.io/customizer/`, canvasWidth / 2, canvasHeight - 10)
      }
    
      accumulatedImages.forEach((imgString, j) => {
        if (imgString) {
          const i = new Image(width, height)
          i.src = imgString
          
          i.onload = () => {
            finalContext?.drawImage(i, 0,0, canvasWidth, canvasHeight)
            
            
            if ((j + 1) === accumulatedImages.length) {
              if (finalContext) {
                finalContext.fillStyle = 'rgba(255,255,255,0.05)'
                finalContext.fillText(`Not a real product, don't fall for it :)`, canvasWidth / 2, canvasHeight / 3)
  
                document.body.append(finalContext.canvas)
              }
              // READY TO DOWNLOAD
              const URL = finalCanvas.toDataURL('image/png')
              const anchor = document.createElement('a')
              anchor.href = URL
              anchor.setAttribute('download', filename)
  
              anchor.click()
  
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