import React from 'react'

import { IShoe, YEEZY_LINEUP } from '../../utils/constants'
import './Home.scss'

const Home = () => {
  const [activeShoe, setShoe] = React.useState<IShoe | undefined>()

  return (
    <div className="home">
      <h1 className="title">YEEZY CUSTOMIZER</h1>
      <div className="tabs">
        {YEEZY_LINEUP.map((shoe, key) => (
          <button 
            className={`tab${activeShoe?.id === shoe.id ? ' active' : ''}`}
            key={shoe.id}
            onClick={() => activeShoe === shoe ? setShoe(undefined) : setShoe(shoe)}
          >
            {shoe.id}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Home