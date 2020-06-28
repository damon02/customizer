import React from 'react'
import pjson from '../../../package.json'

import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <p>
        <a
          href="https://www.github.com/damon02"
          rel="noopener noreferrer"
          target="_blank"
        >
          Created by damon02
        </a>
      </p>
      <p className="version">v{pjson.version}</p>
      <p>
        <a
          href="https://www.reddit.com/r/yeezys/comments/heh28m/this_is_what_kind_of_colorway_i_want/fvrdkma/" 
          rel="noopener noreferrer"
          target="_blank"
        >
          Inspired by this reddit comment
        </a>
      </p>
    </div>
  )
}

export default Footer