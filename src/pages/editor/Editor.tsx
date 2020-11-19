import React from 'react'
import ReactGA from 'react-ga'
import { Helmet } from 'react-helmet'
import { Redirect, useHistory, useParams } from 'react-router'

import ProductOverview from '../../components/productOverview/ProductOverview'

import { IGenericProduct } from '../../@types/types'
import { ALL_PRODUCTS } from '../../assets/products'

import './Editor.scss'

interface IParams {
  id: IGenericProduct['id']
}

const Editor = () => {
  const history = useHistory()
  const params = useParams<IParams>()
  const activeProduct = ALL_PRODUCTS.find(p => p.id === params.id)

  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  if (!activeProduct) {
    console.error(`Product ${params.id} not matchable, returning to home`)
    return <Redirect to="/" />
  }

  return (
    <div className="page editor">
      <Helmet>
        <title>{activeProduct.brand} {activeProduct.name} - CUSTOMIZER</title>
        <meta property="og:title" content="CUSTOMIZER" />
        <meta property="og:description" content={`Create your own dream concept ${activeProduct.brand} ${activeProduct.name}`} />
        <meta property="og:image" content="%PUBLIC_URL%/preview.png" />
      </Helmet>
      <div className="title-box">
        <h3 className="title">{activeProduct.brand} {activeProduct.name}</h3>
        <button className="back-button" onClick={() => history.push('/')}>
          <i className="fas fa-arrow-left" />
          <div className="text">Save and go back</div>
        </button>
      </div>
      <ProductOverview activeProduct={activeProduct} />
    </div>
  )
}

export default Editor