import React from 'react'
import ReactGA from 'react-ga'
import { Redirect, useHistory, useParams } from 'react-router'

import ImagesCombiner from '../../components/imagesCombiner/ImagesCombiner'
import ProductOverview from '../../components/productOverview/ProductOverview'

import { IGenericProduct } from '../../@types/types'
import { URL_PREFIX } from '../../utils/constants'
import { ALL_PRODUCTS } from '../../utils/products'

import './Editor.scss'

interface IParams {
  id: IGenericProduct['id']
}

const Editor = () => {
  const history = useHistory()
  const params = useParams<IParams>()
  const activeProduct = ALL_PRODUCTS.find(p => p.id === params.id)
  // const [name, setName] = React.useState('')

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  if (!activeProduct) {
    console.error(`Product ${params.id} not matchable, returning to home`)
    return <Redirect to={`${URL_PREFIX}`} />
  }

  return (
    <div className="page editor">
      <div className="title-box">
        <h3 className="title">Editing {activeProduct.brand} {activeProduct.name}</h3>
        <button className="back-button" onClick={() => history.push(`${URL_PREFIX}`)}>
          Save and go back
        </button>
      </div>
      <ProductOverview activeProduct={activeProduct} />
    </div>
  )
}

export default Editor