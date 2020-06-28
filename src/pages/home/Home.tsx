import React from 'react'
import ReactGA from 'react-ga'
import { useHistory } from 'react-router'

import Modal from '../../components/modal/Modal'

import { ICSSProperties, IGenericProduct, IPartPropsCSSProperties } from '../../@types/types'
import Card from '../../components/card/Card'
import { URL_PREFIX } from '../../utils/constants'
import { loadFromLocalStorage, removeFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import { ALL_PRODUCTS } from '../../utils/products'
import './Home.scss'

const Home = () => {
  const history = useHistory()
  const [showIntroductionModal, setShowIntroModal] = React.useState<boolean>(loadFromLocalStorage('showIntro', true))
  const [trackMe, setTrackMe] = React.useState<boolean>(loadFromLocalStorage('trackMe', false))

  const [showAreYouSure, setShowAreYouSure] = React.useState<false | string>(false)
  const unsavedProducts = detectUnsavedProducts()

  React.useEffect(() => {
    if (!showIntroductionModal && trackMe) {
      ReactGA.initialize('UA-170883719-1')
      ReactGA.set({ anonymizeIp: true })
      ReactGA.pageview(window.location.pathname + window.location.search)
    }
  }, [showIntroductionModal, trackMe])

  return (
    <div className="page home">
      {unsavedProducts.length > 0 && (
        <div className="content-box">
          <div className="product-box">
            <h3>My creations</h3>
            <div className="card-row">
              {unsavedProducts.map(unsavedProduct => (
                <Card 
                  key={unsavedProduct.product.id}
                  partProps={unsavedProduct.partProps}
                  product={unsavedProduct.product}
                  handleClick={() => history.push(`${URL_PREFIX}/edit/${unsavedProduct.product.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="content-box">
          <div className="product-box">
            <h3>Start from scratch</h3>
            <div className="all-products">
              {ALL_PRODUCTS.filter(p => p.enabled).map(product => (
                <Card 
                  key={product.id}
                  product={product}
                  handleClick={() => handleCheckForUnsavedProduct(product.id)}
                />
              ))}
            </div>
          </div>
      </div>

      <Modal
        showModal={showIntroductionModal}
        closeText={'I accept'}
        onClose={() => {
          setShowIntroModal(false)
          saveToLocalStorage('showIntro', false)
          saveToLocalStorage('trackMe', true)
          setTrackMe(true)
        }}
        uuid={'introModal'}
        inContent={true}
      >
        <div className="intro-inner">
          <h3>Hello world!</h3>
          <p>I am a huge YEEZY and also sneaker fan in general, but felt like some sneakers have been releasing in some mediocre colorways.</p>
          <p>I thought that even I could do better.</p>
          <p>So I found this new site... just kidding, I made this as a hobby project and want to share it with the world!</p>
          <p>Don't bait too many people on Instagram with this please <span role="img" aria-label="sweating smile emoji">😅</span></p>

          <h3>Privacy policy</h3>
          <p>This website uses cookies, JavaScript and other comparable technologies in order to give you the best experience possible. With this, we can analyse and track the behaviour of visitors to this website.</p>
          <p>Cookies are used on this website in order to save customizations to products and custom colors. These cookies are stored for an indefinite amount of time and are needed for the website to function. This is done so that you can pick up where you left off at any given time on the same device.</p>
          <a href={`${URL_PREFIX}/privacy.html`} target="_blank" rel="noopener noreferrer">Click here to view the full privacy policy.</a>
          <p><b>By clicking "I accept" you are agreeing to the privacy policy.</b></p>
        </div>
      </Modal>

      <Modal
        showModal={showAreYouSure !== false}
        closeText={'Restart from scratch'}
        onClose={() => {
          if (showAreYouSure) {
            removeFromLocalStorage(showAreYouSure)
          }
          setShowAreYouSure(false)
          history.push(`${URL_PREFIX}/edit/${showAreYouSure}`)
        }}
        uuid={'are-you-sure'}
        buttonColors={{ backgroundColor: '#d30f0f', color: '#fff' }}
        onCancel={() => setShowAreYouSure(false)}
        cancelText={'Keep my design'}
      >
        <div>
          <h3>Wait!</h3>
          <p>You have already done some work on your <b>{ALL_PRODUCTS.find(x => x.id === showAreYouSure)?.name || 'product'}</b></p>
          <p>If you continue, you will lose all your previously done work <b>permanently</b>.</p>
          <b>Save the file as an image or take a screenshot of it to save your work!</b>
        </div>
      </Modal>

    </div>
  )

  function handleCheckForUnsavedProduct(id: string) {
    const previous = loadFromLocalStorage(id, undefined)

    if (previous) {
      setShowAreYouSure(id)
    } else {
      history.push(`${URL_PREFIX}/edit/${id}`)
    }
  }

  function detectUnsavedProducts() : { product: IGenericProduct, partProps: IPartPropsCSSProperties }[] {
    const savedProducts = ALL_PRODUCTS.map(product => ({ 
      product,
      partProps: loadFromLocalStorage(product.id, null) as IPartPropsCSSProperties 
    })).filter(p => p.partProps !== null)

    return savedProducts
  }
}

export default Home