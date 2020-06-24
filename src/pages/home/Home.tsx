import React from 'react'

import ShoeOverview from '../../components/shoeOverview/ShoeOverview'

import pjson from '../../../package.json'
import { IShoe, YEEZY_LINEUP } from '../../utils/constants'
import './Home.scss'


const Home = () => {
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

      <div className="footer">
        <div className="disclaimer">Created by damon02 - 2020</div>
        <div className="version">v{pjson.version}</div>
      </div>
    </div>
  )
}

export default Home