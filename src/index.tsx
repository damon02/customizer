import React from 'react'
import Div100vh from 'react-div-100vh'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Editor from './pages/editor/Editor'
import Home from './pages/home/Home'

import { loadFromLocalStorage } from './utils/localStorage'

import './style/index.scss'

const trackMe = loadFromLocalStorage('trackMe', false)
if (trackMe) {
  ReactGA.initialize('UA-170883719-1')
  ReactGA.set({ anonymizeIp: true })
}


ReactDOM.render((
  <React.StrictMode>
    <Div100vh className="root-inner">
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path={`/edit/:id`} component={Editor} />
          <Route exact path={`/`} component={Home} />
          <Redirect to={`/`} />
        </Switch>
        <Footer />
      </HashRouter>
    </Div100vh>
    
  </React.StrictMode>
  ), document.getElementById('root')
)