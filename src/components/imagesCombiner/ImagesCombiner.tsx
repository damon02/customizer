import { cloneDeep } from 'lodash'
import React, { useState } from 'react'

import { IShoe } from '../../utils/constants'

interface IProps {
  activeShoe: IShoe | undefined
}

const ImagesCombiner = (props: IProps) => {
  const width = 1241
  const height = 700

  const { activeShoe } = props 
  const [accumulatedImages] = useState<string[]>([])

  React.useEffect(() => {
    if (activeShoe?.assets?.length === accumulatedImages.length) {
      console.log('tada')
    } else {
      console.log(activeShoe?.assets?.length, accumulatedImages.length)
    }
  }, [accumulatedImages])

  return (
    <button onClick={() => combineCSSIntoImages()}>Download as image</button>
  )

  function combineCSSIntoImages() {
    // Get all individual shoe parts
    const shoeparts = Array.from(document.getElementsByClassName('shoe-part-image'))
    
    // Iterate over each shoe part
    shoeparts.forEach((s, i) => {
      const canvas = document.createElement(`canvas`)
      const ctx = canvas.getContext('2d')
      canvas.id = `canvas-${i}`
      canvas.width = width
      canvas.height = height
  
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
        ctx.drawImage(shoePartImage, 0,0, width, height)
        accumulatedImages.push(canvas.toDataURL('image/png'))

        // READY
        if ((i + 1) === shoeparts.length) {
          mergeImages()
        }
      }
    })
  }

  function mergeImages() {
    const now = new Date()
    const filename = `SHOE_${activeShoe?.id}_${now.toLocaleDateString()}-${now.toLocaleTimeString()}`

    const finalCanvas = document.createElement(`canvas`)
    const finalContext = finalCanvas.getContext('2d')
    finalCanvas.id = 'final-canvas-drawing'
    finalCanvas.width = width
    finalCanvas.height = height
  
    accumulatedImages.forEach((imgString, j) => {
      if (imgString) {
        const i = new Image(width, height)
        i.src = imgString
        i.onload = () => {
          finalContext?.drawImage(i, 0,0, width, height)

          if ((j + 1) === accumulatedImages.length) {
            // READY TO DOWNLOAD
            const URL = finalCanvas.toDataURL('image/png')

            const anchor = document.createElement('a')
            anchor.href = URL
            anchor.setAttribute('download', filename)

            anchor.click()
          }
        }
      }
    })
  
    
    document.body.appendChild(finalCanvas)
      
  }
}

export default ImagesCombiner