import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/configureStore'

import 'whatwg-fetch'
import 'normalize.css'
import './public/font/zyalva-regular.woff'
import './public/font/zyalva-regular.ttf'

import App from './containers/App'

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div>
          <Component/>
        </div>
      </Router>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

// Hot Module Replacement
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App)
  })
}
