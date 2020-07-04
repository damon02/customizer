import React from 'react'
import ReactGA from 'react-ga'
import { Redirect, useHistory, useParams } from 'react-router'

import ProductOverview from '../../components/productOverview/ProductOverview'

import { IGenericProduct } from '../../@types/types'
import { ALL_PRODUCTS } from '../../assets/products'
import { URL_PREFIX } from '../../utils/constants'

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
          <i className="fas fa-arrow-left" />
          <div className="text">Save and go back</div>
        </button>
      </div>
      <ProductOverview activeProduct={activeProduct} />
    </div>
  )
}

export default Editor