import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Routes from './routes'
import store from './Redux/Store'

render(
  <Provider store={store()}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
if (module.hot) {
  module.hot.accept()
}