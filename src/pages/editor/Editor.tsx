import React from 'react'
import ReactGA from 'react-ga'
import { Redirect, useParams } from 'react-router'

import ImagesCombiner from '../../components/imagesCombiner/ImagesCombiner'
import ProductOverview from '../../components/productOverview/ProductOverview'

import { IGenericProduct } from '../../@types/types'
import { URL_PREFIX } from '../../utils/constants'
import { ALL_PRODUCTS } from '../../utils/products'

interface IParams {
  id: IGenericProduct['id']
}

const Editor = () => {
  const params = useParams<IParams>()
  const activeProduct = ALL_PRODUCTS.find(p => p.id === params.id)

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  if (!activeProduct) {
    console.error(`Product ${params.id} not matchable, returning to home`)
    return <Redirect to={`${URL_PREFIX}`} />
  }

  return (
    <div className="page editor">
      <ProductOverview activeProduct={activeProduct} />
      <ImagesCombiner activeProduct={activeProduct} />
    </div>
  )
}

export default Editor