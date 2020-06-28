import React from 'react'
import ReactDOM from 'react-dom'
// import ReactGA from 'react-ga'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Editor from './pages/editor/Editor'
import Home from './pages/home/Home'

import { URL_PREFIX } from './utils/constants'
// import { loadFromLocalStorage } from './utils/localStorage'

import './style/index.scss'

// const trackMe = loadFromLocalStorage('trackMe', false)
// if (trackMe) {
//   ReactGA.initialize('UA-170883719-1')
//   ReactGA.set({ anonymizeIp: true })
// }


ReactDOM.render((
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={`${URL_PREFIX}/edit/:id`} component={Editor} />
        <Route exact path={`${URL_PREFIX}`} component={Home} />
        <Redirect to={`${URL_PREFIX}`} />
      </Switch>
      <Footer />
    </BrowserRouter>
    
  </React.StrictMode>
  ), document.getElementById('root')
)