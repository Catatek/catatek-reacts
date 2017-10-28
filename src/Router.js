import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import App from './components/App/App'

class Router extends Component {
  render () {
    return <div className='Router'>
      <BrowserRouter>
        <Route exact path="/" component={App} />
      </BrowserRouter>
    </div>
  }
}

export default Router
