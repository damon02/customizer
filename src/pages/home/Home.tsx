import React from 'react'

import ImagesCombiner from '../../components/imagesCombiner/ImagesCombiner'
import Modal from '../../components/modal/Modal'
import ShoeOverview from '../../components/shoeOverview/ShoeOverview'

import pjson from '../../../package.json'
import { IShoe, YEEZY_LINEUP } from '../../utils/constants'
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/localStorage'
import './Home.scss'


const Home = () => {
  const [showIntroductionModal, setShowIntroModal] = React.useState<boolean>(loadFromLocalStorage('showIntro', true))
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
      <ImagesCombiner activeShoe={activeShoe} />

      <div className="footer">
        <div className="disclaimer"><p><a href="https://www.github.com/damon02" rel="noopener noreferrer" target="_blank">Created by damon02</a></p></div>
        <div className="version">v{pjson.version}</div>
      </div>

      <Modal
        showModal={showIntroductionModal}
        closeText={'Continue'}
        onClose={() => {
          setShowIntroModal(false)
          saveToLocalStorage('showIntro', false)
        }}
        uuid={'introModal'}
      >
        <div>
          <h3>Hello world!</h3>
          <p>I am a huge YEEZY fan, but wanted to see what kind of color combinations are possible.</p>
          <p>So I went to work and boom here it is. Go crazy on the colors and don't bait too many people on Instagram.</p>
          <p><a href="https://www.reddit.com/r/yeezys/comments/heh28m/this_is_what_kind_of_colorway_i_want/fvrdkma/" rel="noopener noreferrer" target="_blank">Inspired by this reddit comment</a></p>
          <b>Cookies</b>
          <p>This website uses cookies, but does not share anything with other websites.</p>
          <p>All color customizations are saved to your local storage, when you close and come back later you can pick up where you left off.</p>

          <b>Contact</b>
          <p><a href="https://www.reddit.com/u/damon02" rel="noopener noreferrer" target="_blank">Reddit</a></p>
          <p><a href="https://www.github.com/damon02" rel="noopener noreferrer" target="_blank">Github</a></p>
        </div>
      </Modal>

    </div>
  )
}

export default Home