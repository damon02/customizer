import React from 'react'

import ImagesCombiner from '../../components/imagesCombiner/ImagesCombiner'
import ShoeOverview from '../../components/shoeOverview/ShoeOverview'
import Modal from '../../components/modal/Modal'

import pjson from '../../../package.json'
import { IShoe, YEEZY_LINEUP } from '../../utils/constants'
import './Home.scss'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'


const Home = () => {
  const [showIntroductionModal, setShowIntroModal] = React.useState<boolean>(loadFromLocalStorage('showIntro', true))
  const [username, setUsername] = React.useState<string | null>(loadFromLocalStorage('username', null))
  const [activeShoe, setShoe] = React.useState<IShoe | undefined>(YEEZY_LINEUP[0])

  return (
    <div className="home">
      <h1 className="title">YEEZY CUSTOMIZER</h1>
      <div className="tabs">
        {YEEZY_LINEUP.map((shoe, key) => (
          <button 
            className={`tab${activeShoe?.id === shoe.id ? ' active' : ''}`}
            key={shoe.id}
            disabled={!shoe.enabled}
            onClick={() => setShoe(shoe)}
          >
            {shoe.id}
          </button>
        ))}
      </div>

      <ShoeOverview activeShoe={activeShoe} />
      <ImagesCombiner activeShoe={activeShoe} username="damon02" />

      <div className="footer">
        <div className="disclaimer">Created by damon02 - 2020</div>
        <div className="version">v{pjson.version}</div>
      </div>

      <Modal
        showModal={showIntroductionModal}
        closeText={'Continue'}
        onClose={() => {
          setShowIntroModal(false)
          saveToLocalStorage('showIntro', false)
        }}
      >
        <div>
          <h3>Hello world!</h3>
          <b>Cookies</b>
          <p>This website uses cookies, but does not share anything with other websites.</p>
          <p>All color customizations are saved to your local storage, when you close and come back later you can pick up where you left off.</p>

          <b>Contact</b>
          <p><a href="https://www.reddit.com/u/damon02" target="_blank">@damon02 on reddit</a></p>
        </div>
      </Modal>

    </div>
  )
}

export default Home