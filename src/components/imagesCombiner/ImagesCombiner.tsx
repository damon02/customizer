import React, { useState } from 'react'
import Modal from '../modal/Modal'

import { IShoe } from '../../utils/constants'
import './ImagesCombiner.scss'

interface IProps {
  activeShoe: IShoe | undefined
}

const ImagesCombiner = (props: IProps) => {
  const width = 1241
  const height = 700
  const canvasWidth = 1337
  const canvasHeight = 900

  const { activeShoe } = props 
  const accumulatedImages: string[] = []

  const [showSaveModal, setShowSaveModal] = useState(false)
  const [shoeName, setShoeName] = useState<string>('')
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
      >
        <div>
          <h3>Add your own custom name to the image</h3>
          <input className="input yeezy-name" placeholder={'Shoe model name'} value={shoeName} onChange={(e) => setShoeName(e.target.value)} />
          <input className="input yeezy-name" placeholder={'Your own name'} value={creator} onChange={(e) => setCreator(e.target.value)} />

          <h3>Your shoe</h3>
          <p>{`${activeShoe?.name} '${shoeName || 'CONCEPT'}'`}</p>
          <p>{`Created by ${creator || 'a fan'}`}</p>
        </div>
      </Modal>
    </div>
  )

  function combineCSSIntoImages() {
    // Get all individual shoe parts
    const shoeparts = Array.from(document.getElementsByClassName('shoe-part-image'))
    
    // Iterate over each shoe part
    shoeparts.forEach((s, i) => {
      const canvas = document.createElement(`canvas`)
      const ctx = canvas.getContext('2d')
      canvas.id = `canvas-${i}`
      canvas.width = canvasWidth
      canvas.height = canvasHeight
  
      if (!ctx) {
        console.error('no ctx')
        return
      }
  
      const shoePartImage = new Image(width, height)
      const backgroundImageSource = getComputedStyle(s).backgroundImage
      const bgURL = backgroundImageSource.substring(5, backgroundImageSource.length - 2)
  
      ctx.filter = getComputedStyle(s).filter
    
      shoePartImage.src = bgURL
      shoePartImage.onload = (e) => {
        ctx.drawImage(shoePartImage, (canvasWidth - width) / 2, (canvasHeight - height) / 2, width, height)
        accumulatedImages.push(canvas.toDataURL('image/png'))

        // READY
        if ((i + 1) === shoeparts.length) {
          mergeImages()
        }
      }
    })
  }

  function mergeImages() {
    const previousCanvas = document.getElementById('final-canvas-drawing')
    if (previousCanvas) {
      previousCanvas.remove()
    }

    const now = new Date()
    const filename = `${activeShoe?.id}_${shoeName || 'CONCEPT'}_${now.toLocaleDateString()}-${now.toLocaleTimeString()}`

    const finalCanvas = document.createElement(`canvas`)
    const finalContext = finalCanvas.getContext('2d')
    finalCanvas.id = 'final-canvas-drawing'
    finalCanvas.width = canvasWidth
    finalCanvas.height = canvasHeight

    if (finalContext) {
      // Add background
      finalContext.fillStyle = '#ecece2'
      finalContext.fillRect(0, 0, canvasWidth, canvasHeight)

      // Add brand name text
      finalContext.fillStyle = 'rgb(46, 50, 56)'
      finalContext.font = '800 48px Yeezy'
      finalContext.textAlign = 'center'
      finalContext.fillText(`${activeShoe?.name} '${shoeName || 'CONCEPT'}'`, canvasWidth / 2, 80)
      
      // Add username to image
      finalContext.font = '800 24px Yeezy'
      finalContext.textAlign = 'center'
      finalContext.fillText(`Created by ${creator || 'a fan'}`, canvasWidth / 2, 110)
      
      // Add watermark
      finalContext.font = '400 12px Yeezy'
      finalContext.fillText(`damon02.github.io/shoe-customizer/`, canvasWidth / 2, canvasHeight - 40)

    }
  
    accumulatedImages.forEach((imgString, j) => {
      if (imgString) {
        const i = new Image(width, height)
        i.src = imgString
        
        i.onload = () => {
          finalContext?.drawImage(i, 0,0, canvasWidth, canvasHeight)

          if ((j + 1) === accumulatedImages.length) {
            // READY TO DOWNLOAD
            const URL = finalCanvas.toDataURL('image/png')

            const anchor = document.createElement('a')
            anchor.href = URL
            anchor.setAttribute('download', filename)

            anchor.click()

            setShoeName('')
          }
        }
      }
    })
  }
}

export default ImagesCombiner